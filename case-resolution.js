/* End-of-case decisions are saved separately from clue-by-clue matches. */
function resolutionState(){
 const r=state.resolution=state.resolution||{},map=id=>DDReference.canonicalId(id);let changed=false;
 if(r.ranking?.ids?.some(id=>map(id)!==id||DDReference.data.removedIds?.includes(id))){r.ranking.legacyIds=r.ranking.legacyIds||[...r.ranking.ids];r.ranking.ids=[...new Set(r.ranking.ids.map(map).filter(id=>!DDReference.data.removedIds?.includes(id)))];changed=true;}
 if(r.rankingDraft){const ids=r.rankingDraft.map(map);if(ids.some((id,i)=>id!==r.rankingDraft[i])){r.rankingDraft=ids;changed=true}}
 for(const answers of [r.assignmentDraft,r.assignment?.answers])if(answers)for(const person of Object.keys(answers))if(map(answers[person])!==answers[person]){answers[person]=map(answers[person]);changed=true;}
 for(const row of r.assignment?.results||[])if(map(row.diagnosisId)!==row.diagnosisId){row.diagnosisId=map(row.diagnosisId);changed=true;}
 if(r.final&&map(r.final.diagnosisId)!==r.final.diagnosisId){r.final.diagnosisId=map(r.final.diagnosisId);changed=true;}
 if(changed)save();return r;
}
function resolutionStepId(kind){return {ranking:'ranked-differential',assignments:'suspect-assignment',final:'final-answer'}[kind]}
function checkpointStatus(kind){const r=resolutionState();return {complete:kind==='ranking'?!!r.ranking?.submittedAt:kind==='assignments'?!!r.assignment?.submittedAt:!!r.final?.lockedAt,star:false}}
function resolutionPeople(){return (config.suspectSets.find(s=>s.id==='reception')?.people||[]).map(p=>({id:p.id,name:p.name}))}
function resolutionRules(){const defaults=window.CASE_RESOLUTION||{},custom=config.caseResolution||{};const rules={...defaults,...custom,suspectFeedback:{...defaults.suspectFeedback,...custom.suspectFeedback},culpritDiagnosisFeedback:{...defaults.culpritDiagnosisFeedback,...custom.culpritDiagnosisFeedback},culpritClueExplanations:custom.culpritClueExplanations||defaults.culpritClueExplanations||[]};rules.suspectAcceptedIds=Object.fromEntries(Object.entries(rules.suspectDiagnoses).map(([person,id])=>[person,DDReference.expandApprovedIds(rules.suspectAcceptedIds?.[person]||[id])]));return rules;}
function diagnosisEntry(id){return DDReference.byId.get(DDReference.canonicalId(id))}
function diagnosisName(id){const removed=DDReference.data.removedEntries?.[id];return diagnosisEntry(id)?.term||(removed?removed.term+' (removed)':'—')}
function diagnosisOptions(selected=''){return '<option value="">Choose a diagnosis</option>'+DDReference.lists.disease.map(a=>`<option value="${esc(a.id)}" ${a.id===selected?'selected':''}>${esc(a.term)}</option>`).join('')}
function validDiagnosis(id){return diagnosisEntry(id)?.type==='disease'}
function rankingError(ids){return ids.length!==5||ids.some(id=>!validDiagnosis(id))?'Choose five diagnoses.':new Set(ids).size!==5?'Choose five different diagnoses.':''}
function assignmentError(answers){return resolutionPeople().some(p=>!validDiagnosis(answers[p.id]))?'Choose a diagnosis for every suspect.':''}
function submitRankedDifferential(ids){
 ids=ids.map(id=>DDReference.canonicalId(id));
 const r=resolutionState();if(r.ranking)return {ok:false,error:'Your original ranking is already saved.'};
 if(!isStepUnlocked('ranked-differential'))return {ok:false,error:'Complete the culprit clues first.'};
 const error=rankingError(ids);if(error)return {ok:false,error};
 r.ranking={ids:[...ids],submittedAt:new Date().toISOString()};delete r.rankingDraft;
 DDLog?.event('ranked_differential',{section:'decisions',clue:'Culprit differential',stage:'Top five',result:'ungraded',ranking:ids.map((id,i)=>({rank:i+1,referenceId:id,diagnosis:diagnosisName(id)}))});save();return {ok:true};
}
function submitSuspectAssignments(answers){
 answers=Object.fromEntries(Object.entries(answers).map(([person,id])=>[person,DDReference.canonicalId(id)]));
 const r=resolutionState();if(r.assignment)return {ok:false,error:'Your suspect diagnoses are already submitted.'};
 if(!isStepUnlocked('suspect-assignment'))return {ok:false,error:'Complete your ranking and all suspect clues first.'};
 const error=assignmentError(answers);if(error)return {ok:false,error};
 const rules=resolutionRules();if(resolutionPeople().some(p=>!validDiagnosis(rules.suspectDiagnoses[p.id])))return {ok:false,error:'The case answer key is incomplete.'};
 const rows=resolutionPeople().map(p=>({personId:p.id,diagnosisId:answers[p.id],correct:(rules.suspectAcceptedIds?.[p.id]||[rules.suspectDiagnoses[p.id]]).includes(answers[p.id])}));
 r.assignment={answers:{...answers},results:rows,submittedAt:new Date().toISOString()};delete r.assignmentDraft;
 for(const row of rows)DDLog?.event('answer',{section:'decisions',clue:'Suspect diagnoses',stage:resolutionPeople().find(p=>p.id===row.personId).name,category:'disease',raw:diagnosisName(row.diagnosisId),referenceId:row.diagnosisId,result:row.correct?'correct':'incorrect'});
 save();return {ok:true};
}
function suspectAssessment(personId,selectedId){
 selectedId=DDReference.canonicalId(selectedId);
 const rules=resolutionRules(),correctId=rules.suspectDiagnoses[personId],profile=rules.suspectFeedback?.[personId]||{};
 const archived=DDReference.data.removedIds?.includes(selectedId)&&state.resolution?.assignment?.results?.find(row=>row.personId===personId&&row.diagnosisId===selectedId);
 const correct=archived?!!archived.correct:(rules.suspectAcceptedIds?.[personId]||[correctId]).includes(selectedId);
 const whyCorrect=(profile.whyCorrect||diagnosisEntry(correctId)?.description||'')+(correct&&profile.acceptanceNote?' '+profile.acceptanceNote:'');
 const whySelected=correct?'':profile.wrongByDiagnosis?.[selectedId]||`${diagnosisEntry(selectedId)?.description||diagnosisName(selectedId)} ${profile.contrast||''} The case diagnosis is ${diagnosisName(correctId)}.`;
 return {correct,correctId,whyCorrect,whySelected};
}
function finalDiagnosisExplanation(id){
 const rules=resolutionRules(),a=diagnosisEntry(id);if(!a)return '';
 return rules.culpritDiagnosisFeedback?.[id]||a.description;
}
function normalizeFinalAccusation(){
 const r=resolutionState(),rules=resolutionRules(),f=r.final;if(!f||f.mode==='culprit-only')return f;
 f.legacyDiagnosisId=f.diagnosisId;f.legacyCorrect=f.correct;
 f.diagnosisId=rules.suspectDiagnoses[f.personId];f.correct=f.personId===rules.culpritId;f.mode='culprit-only';save();return f;
}
function lockFinalAccusation(personId){
 const r=resolutionState(),rules=resolutionRules();
 if(r.final)return {ok:false,error:'This attempt’s culprit choice is already locked.'};
 if(!r.ranking||!r.assignment)return {ok:false,error:'Complete your ranked list and suspect diagnoses first.'};
 if(!resolutionPeople().some(p=>p.id===personId))return {ok:false,error:'Choose a suspect.'};
 const diagnosisId=rules.suspectDiagnoses[personId];
 if(!rules.culpritId||!validDiagnosis(diagnosisId))return {ok:false,error:'The final solution has not been configured.'};
 r.final={personId,diagnosisId,mode:'culprit-only',lockedAt:new Date().toISOString(),correct:personId===rules.culpritId};
 const person=resolutionPeople().find(p=>p.id===personId);
 DDLog?.event('final_accusation',{section:'decisions',clue:'Final accusation',stage:'Locked culprit',personId,mode:'culprit-only',raw:person.name+' — '+diagnosisName(diagnosisId),referenceId:diagnosisId,result:r.final.correct?'correct':'incorrect'});save();return {ok:true};
}
function checkpointNav(){return `<nav class="decision-nav" aria-label="Case decisions">${[['ranking','Your top five'],['assignments','Suspect diagnoses'],['final','Choose culprit']].map(([kind,label])=>isStepUnlocked(resolutionStepId(kind))?`<a href="${{ranking:'#differential',assignments:'#assignments',final:'#final'}[kind]}" ${state.checkpoint===kind?'aria-current="step"':''}>${label}</a>`:`<span aria-disabled="true">${label}</span>`).join('')}</nav>`}
function renderCheckpoint(){
 $('#clueNav').hidden=true;
 const kind=state.checkpoint||'ranking';
 if(kind==='ranking')return renderRankedDifferential();
 if(kind==='assignments')return renderSuspectAssignments();
 return renderFinalAccusation();
}
function checkpointScreen(kind){DDLog?.screen('decision/'+kind,{section:'decisions',clue:'Case decisions',stage:kind})}
function bindCheckpointContinue(kind){$('#checkpointContinue')?.addEventListener('click',()=>{const steps=investigationSteps(),index=steps.findIndex(s=>s.id===resolutionStepId(kind)),next=steps[index+1];if(next)navigateStep(next.id)})}
function renderRankedDifferential(){
 const r=resolutionState(),saved=r.ranking;
 $('#roundContent').innerHTML=checkpointNav()+`<span class="eyebrow">CULPRIT DIFFERENTIAL</span><h2 class="section-title">Rank your top five diagnoses</h2><p class="section-copy">Put your leading diagnosis first. Save this list before examining the suspects; you’ll return to it at the end.</p>${saved?`<ol class="ranked-snapshot card">${saved.ids.map(id=>`<li>${esc(diagnosisName(id))}</li>`).join('')}</ol><p class="small-status">Your original ranking is saved.</p><button type="button" class="primary" id="checkpointContinue">Continue to suspect clues <span>→</span></button>`:`<form id="rankingForm"><div class="ranking-fields">${Array.from({length:5},(_,i)=>`<div class="rank-choice card"><label for="rank-${i}">${i+1}</label><select id="rank-${i}" aria-label="Diagnosis ranked ${i+1}">${diagnosisOptions(r.rankingDraft?.[i])}</select><div class="rank-moves"><button type="button" data-rank-move="${i}" data-direction="-1" aria-label="Move rank ${i+1} up" ${i===0?'disabled':''}>↑</button><button type="button" data-rank-move="${i}" data-direction="1" aria-label="Move rank ${i+1} down" ${i===4?'disabled':''}>↓</button></div></div>`).join('')}</div><p class="decision-feedback" id="rankingFeedback" role="status"></p><button type="submit" class="primary">Save ranked list and continue <span>→</span></button></form>`}`;
 if(saved)bindCheckpointContinue('ranking');
 else{
  const read=()=>Array.from({length:5},(_,i)=>$('#rank-'+i).value);
  for(let i=0;i<5;i++)$('#rank-'+i).onchange=()=>{r.rankingDraft=read();save()};
  $$('[data-rank-move]').forEach(b=>b.onclick=()=>{const ids=read(),i=Number(b.dataset.rankMove),j=i+Number(b.dataset.direction);[ids[i],ids[j]]=[ids[j],ids[i]];r.rankingDraft=ids;save();renderRankedDifferential()});
  $('#rankingForm').onsubmit=e=>{e.preventDefault();const result=submitRankedDifferential(read());if(!result.ok){$('#rankingFeedback').textContent=result.error;return}const next=investigationSteps().find(s=>s.section==='suspects');if(next)navigateStep(next.id)};
 }
 checkpointScreen('ranking');
}
function renderSuspectAssignments(){
 const r=resolutionState(),submitted=r.assignment,people=resolutionPeople();
 const debrief=submitted?`<h3 class="assignment-score">${submitted.results.filter(row=>suspectAssessment(row.personId,row.diagnosisId).correct).length} of ${people.length} correct</h3><div class="suspect-debriefs">${submitted.results.map(row=>{const p=people.find(p=>p.id===row.personId),feedback=suspectAssessment(row.personId,row.diagnosisId);return `<article class="card suspect-explanation"><header><div class="person-identity">${personFace(p)}<h3>${esc(p.name)}</h3></div><strong class="${feedback.correct?'is-correct':'is-incorrect'}">${feedback.correct?'Correct':'Incorrect'}</strong></header><dl class="diagnosis-comparison"><dt>Your selection</dt><dd>${esc(diagnosisName(row.diagnosisId))}</dd><dt>Correct diagnosis</dt><dd><strong>${esc(diagnosisName(feedback.correctId))}</strong></dd></dl><h4>Why ${esc(diagnosisName(feedback.correctId))} fits</h4><p>${esc(feedback.whyCorrect)}</p>${feedback.correct?'':`<h4>Why ${esc(diagnosisName(row.diagnosisId))} is not the case diagnosis</h4><p>${esc(feedback.whySelected)}</p>`}</article>`}).join('')}</div><button type="button" class="primary" id="checkpointContinue">Review the culprit clues and choose the culprit <span>→</span></button>`:'';
 $('#roundContent').innerHTML=checkpointNav()+`<span class="eyebrow">SUSPECT DIAGNOSES</span><h2 class="section-title">${submitted?'Suspect diagnosis explanations':'Assign a diagnosis to every suspect'}</h2>${submitted?debrief:`<p class="section-copy">Submit all six assignments together.</p><form id="assignmentForm"><div class="assignment-fields">${people.map(p=>`<div class="assignment-choice card"><label for="assign-${p.id}">${personFace(p)}<span>${esc(p.name)}</span></label><select id="assign-${p.id}">${diagnosisOptions(r.assignmentDraft?.[p.id])}</select></div>`).join('')}</div><p class="decision-feedback" id="assignmentFeedback" role="status"></p><button type="submit" class="primary">Submit all suspect diagnoses <span>→</span></button></form>`}`;
 if(submitted)bindCheckpointContinue('assignments');
 else{
  const read=()=>Object.fromEntries(people.map(p=>[p.id,$('#assign-'+p.id).value]));
  for(const p of people)$('#assign-'+p.id).onchange=()=>{r.assignmentDraft=read();save()};
  $('#assignmentForm').onsubmit=e=>{e.preventDefault();const result=submitSuspectAssignments(read());if(!result.ok){$('#assignmentFeedback').textContent=result.error;return}renderSuspectAssignments()};
 }
 checkpointScreen('assignments');
}
function diagnosisClueReview(id){
 const rows=resolutionRules().culpritDiagnosisClues?.[id]||[];
 return `<dl class="culprit-clue-debrief" data-diagnosis-clue-review="${esc(id)}">${rows.map(item=>`<div><dt>${esc(item.title)} · ${esc(item.fit)}</dt><dd>${esc(item.text)}</dd></div>`).join('')}</dl>`;
}
function renderFinalAccusation(){
 const r=resolutionState(),rules=resolutionRules(),people=resolutionPeople(),locked=normalizeFinalAccusation();
 if(!r.ranking||!r.assignment){$('#roundContent').innerHTML='<p>Complete your ranked list and suspect diagnoses first.</p>';return}
 const chosen=locked?people.find(p=>p.id===locked.personId):null;
 const solution=people.find(p=>p.id===rules.culpritId);
 const outcome=locked?`<section class="card final-result" role="status"><h3>${locked.correct?'Case solved':'Incorrect culprit · choice locked'}</h3><p>You selected <strong>${esc(chosen?.name||'—')}</strong>, whose confirmed diagnosis is <strong>${esc(diagnosisName(rules.suspectDiagnoses[locked.personId]))}</strong>.</p>${!locked.correct?`<h4>How that diagnosis fits the culprit clues</h4><p>${esc(finalDiagnosisExplanation(rules.suspectDiagnoses[locked.personId]))}</p>${diagnosisClueReview(rules.suspectDiagnoses[locked.personId])}<p>The culprit is <strong>${esc(solution?.name||'—')}</strong>, with <strong>${esc(diagnosisName(rules.culpritDiagnosisId))}</strong>.</p>`:''}<h4>How the culprit clues fit together</h4><p>${esc(finalDiagnosisExplanation(rules.culpritDiagnosisId))}</p><dl class="culprit-clue-debrief">${rules.culpritClueExplanations.map(item=>`<div><dt>${esc(item.title)}</dt><dd>${esc(item.text)}</dd></div>`).join('')}</dl></section>`:'';
 $('#roundContent').innerHTML=checkpointNav()+`<span class="eyebrow">FINAL CULPRIT</span><h2 class="section-title">Who fits the culprit clues?</h2><p class="section-copy">The diagnoses are confirmed. Choose the person whose condition best matches the culprit evidence as a whole.</p><div class="final-comparison"><section class="card"><h3>Your original culprit differential</h3><ol>${r.ranking.ids.map(id=>`<li>${esc(diagnosisName(id))}</li>`).join('')}</ol></section><section class="card"><h3>Confirmed diagnoses</h3><ul class="confirmed-roster">${people.map(p=>`<li>${personFace(p)}<div><strong>${esc(p.name)}</strong><span>${esc(diagnosisName(rules.suspectDiagnoses[p.id]))}</span></div></li>`).join('')}</ul></section></div>${locked?outcome:`<form id="finalForm" class="card final-choice"><select id="finalPerson" aria-label="Select culprit"><option value="">Select culprit</option>${people.map(p=>`<option value="${esc(p.id)}" ${r.finalDraft?.personId===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select><p class="decision-feedback" id="finalFeedback" role="status"></p><button type="submit" class="primary">Lock culprit <span>→</span></button></form>`}`;
 if(!locked){$('#finalPerson').onchange=()=>{const personId=$('#finalPerson').value;r.finalDraft={personId};save()};$('#finalForm').onsubmit=e=>{e.preventDefault();const result=lockFinalAccusation($('#finalPerson').value);if(!result.ok){$('#finalFeedback').textContent=result.error;return}delete r.finalDraft;save();renderFinalAccusation()};}
 checkpointScreen('final');
}
