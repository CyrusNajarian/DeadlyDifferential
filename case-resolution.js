/* End-of-case decisions are saved separately from clue-by-clue matches. */
function resolutionState(){return state.resolution=state.resolution||{}}
function resolutionStepId(kind){return {ranking:'ranked-differential',assignments:'suspect-assignment',final:'final-answer'}[kind]}
function checkpointStatus(kind){const r=resolutionState();return {complete:kind==='ranking'?!!r.ranking?.submittedAt:kind==='assignments'?!!r.assignment?.submittedAt:!!r.final?.lockedAt,star:false}}
function resolutionPeople(){return (config.suspectSets.find(s=>s.id==='reception')?.people||[]).map(p=>({id:p.id,name:p.name}))}
function resolutionRules(){return config.caseResolution||window.CASE_RESOLUTION||{suspectDiagnoses:{},culpritId:null,culpritDiagnosisId:null}}
function diagnosisEntry(id){return DDReference.byId.get(id)}
function diagnosisName(id){return diagnosisEntry(id)?.term||'—'}
function diagnosisOptions(selected=''){return '<option value="">Choose a diagnosis</option>'+DDReference.lists.disease.map(a=>`<option value="${esc(a.id)}" ${a.id===selected?'selected':''}>${esc(a.term)}</option>`).join('')}
function validDiagnosis(id){return diagnosisEntry(id)?.type==='disease'}
function rankingError(ids){return ids.length!==5||ids.some(id=>!validDiagnosis(id))?'Choose five diagnoses.':new Set(ids).size!==5?'Choose five different diagnoses.':''}
function assignmentError(answers){return resolutionPeople().some(p=>!validDiagnosis(answers[p.id]))?'Choose a diagnosis for every suspect.':''}
function submitRankedDifferential(ids){
 const r=resolutionState();if(r.ranking)return {ok:false,error:'Your original ranking is already saved.'};
 if(!isStepUnlocked('ranked-differential'))return {ok:false,error:'Complete the culprit clues first.'};
 const error=rankingError(ids);if(error)return {ok:false,error};
 r.ranking={ids:[...ids],submittedAt:new Date().toISOString()};delete r.rankingDraft;
 DDLog?.event('ranked_differential',{section:'decisions',clue:'Culprit differential',stage:'Top five',result:'ungraded',ranking:ids.map((id,i)=>({rank:i+1,referenceId:id,diagnosis:diagnosisName(id)}))});save();return {ok:true};
}
function submitSuspectAssignments(answers){
 const r=resolutionState();if(r.assignment)return {ok:false,error:'Your suspect diagnoses are already submitted.'};
 if(!isStepUnlocked('suspect-assignment'))return {ok:false,error:'Complete your ranking and all suspect clues first.'};
 const error=assignmentError(answers);if(error)return {ok:false,error};
 const rules=resolutionRules();if(resolutionPeople().some(p=>!validDiagnosis(rules.suspectDiagnoses[p.id])))return {ok:false,error:'The case answer key is incomplete.'};
 const rows=resolutionPeople().map(p=>({personId:p.id,diagnosisId:answers[p.id],correct:(rules.suspectAcceptedIds?.[p.id]||[rules.suspectDiagnoses[p.id]]).includes(answers[p.id])}));
 r.assignment={answers:{...answers},results:rows,submittedAt:new Date().toISOString()};delete r.assignmentDraft;
 for(const row of rows)DDLog?.event('answer',{section:'decisions',clue:'Suspect diagnoses',stage:resolutionPeople().find(p=>p.id===row.personId).name,category:'disease',raw:diagnosisName(row.diagnosisId),referenceId:row.diagnosisId,result:row.correct?'correct':'incorrect'});
 save();return {ok:true};
}
function finalDiagnosisExplanation(id){
 const rules=resolutionRules(),a=diagnosisEntry(id);if(!a)return '';
 if(rules.diagnosisFeedback?.[id])return rules.diagnosisFeedback[id];
 return `${a.description} ${rules.categoryFeedback?.[a.category]||'Compare its usual pattern with the progressive speech change, unequal arm and leg function, and loss of hand dexterity across the case.'}`;
}
function lockFinalAccusation(personId,diagnosisId){
 const r=resolutionState(),rules=resolutionRules();
 if(r.final)return {ok:false,error:'This attempt’s final answer is already locked.'};
 if(!r.ranking||!r.assignment)return {ok:false,error:'Complete your ranked list and suspect diagnoses first.'};
 if(!resolutionPeople().some(p=>p.id===personId)||!validDiagnosis(diagnosisId))return {ok:false,error:'Choose a suspect and a diagnosis.'};
 if(!rules.culpritId||!validDiagnosis(rules.culpritDiagnosisId))return {ok:false,error:'The final solution has not been configured.'};
 r.final={personId,diagnosisId,lockedAt:new Date().toISOString(),correct:personId===rules.culpritId&&(rules.culpritAcceptedIds||[rules.culpritDiagnosisId]).includes(diagnosisId)};
 DDLog?.event('final_accusation',{section:'decisions',clue:'Final accusation',stage:'Locked answer',personId,raw:diagnosisName(diagnosisId),referenceId:diagnosisId,result:r.final.correct?'correct':'incorrect'});save();return {ok:true};
}
function checkpointNav(){return `<nav class="decision-nav" aria-label="Case decisions">${[['ranking','Your top five'],['assignments','Suspect diagnoses'],['final','Final answer']].map(([kind,label])=>isStepUnlocked(resolutionStepId(kind))?`<a href="${{ranking:'#differential',assignments:'#assignments',final:'#final'}[kind]}" ${state.checkpoint===kind?'aria-current="step"':''}>${label}</a>`:`<span aria-disabled="true">${label}</span>`).join('')}</nav>`}
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
 $('#roundContent').innerHTML=checkpointNav()+`<span class="eyebrow">SUSPECT DIAGNOSES</span><h2 class="section-title">Assign a diagnosis to every suspect</h2><p class="section-copy">Submit all six assignments together.</p>${submitted?`<div class="card assignment-results"><h3>${submitted.results.filter(x=>x.correct).length} of ${people.length} correct</h3><ul>${submitted.results.map(row=>`<li><strong>${esc(people.find(p=>p.id===row.personId).name)}</strong><span>${esc(diagnosisName(row.diagnosisId))}</span><b class="${row.correct?'is-correct':'is-incorrect'}">${row.correct?'Correct':'Incorrect'}</b></li>`).join('')}</ul></div><button type="button" class="primary" id="checkpointContinue">Compare your lists and choose the culprit <span>→</span></button>`:`<form id="assignmentForm"><div class="assignment-fields">${people.map(p=>`<div class="assignment-choice card"><label for="assign-${p.id}">${personFace(p)}<span>${esc(p.name)}</span></label><select id="assign-${p.id}">${diagnosisOptions(r.assignmentDraft?.[p.id])}</select></div>`).join('')}</div><p class="decision-feedback" id="assignmentFeedback" role="status"></p><button type="submit" class="primary">Submit all suspect diagnoses <span>→</span></button></form>`}`;
 if(submitted)bindCheckpointContinue('assignments');
 else{
  const read=()=>Object.fromEntries(people.map(p=>[p.id,$('#assign-'+p.id).value]));
  for(const p of people)$('#assign-'+p.id).onchange=()=>{r.assignmentDraft=read();save()};
  $('#assignmentForm').onsubmit=e=>{e.preventDefault();const result=submitSuspectAssignments(read());if(!result.ok){$('#assignmentFeedback').textContent=result.error;return}renderSuspectAssignments()};
 }
 checkpointScreen('assignments');
}
function renderFinalAccusation(){
 const r=resolutionState(),rules=resolutionRules(),people=resolutionPeople(),locked=r.final;
 if(!r.ranking||!r.assignment){$('#roundContent').innerHTML='<p>Complete your ranked list and suspect diagnoses first.</p>';return}
 $('#roundContent').innerHTML=checkpointNav()+`<span class="eyebrow">FINAL ACCUSATION</span><h2 class="section-title">Bring the evidence together</h2><div class="final-comparison"><section class="card"><h3>Your original culprit differential</h3><ol>${r.ranking.ids.map(id=>`<li>${esc(diagnosisName(id))}</li>`).join('')}</ol></section><section class="card"><h3>Correct suspect diagnoses</h3><ul class="confirmed-roster">${people.map(p=>`<li>${personFace(p)}<div><strong>${esc(p.name)}</strong><span>${esc(diagnosisName(rules.suspectDiagnoses[p.id]))}</span></div></li>`).join('')}</ul></section></div>${locked?`<section class="card final-result" role="status"><h3>${locked.correct?'Case solved':'Final answer locked · incorrect'}</h3><p>You selected <strong>${esc(people.find(p=>p.id===locked.personId).name)}</strong> with <strong>${esc(diagnosisName(locked.diagnosisId))}</strong>.</p><p>${esc(finalDiagnosisExplanation(locked.diagnosisId))}</p>${!locked.correct?`<p>The case solution is <strong>${esc(people.find(p=>p.id===rules.culpritId)?.name||'—')}</strong> with <strong>${esc(diagnosisName(rules.culpritDiagnosisId))}</strong>.</p>${(rules.culpritAcceptedIds||[rules.culpritDiagnosisId]).includes(locked.diagnosisId)?'<p>The diagnosis fits, but it belongs to a different suspect in the confirmed list.</p>':`<p>${esc(finalDiagnosisExplanation(rules.culpritDiagnosisId))}</p>`}`:''}</section>`:`<form id="finalForm" class="card final-choice"><label class="field-label" for="finalPerson">CULPRIT</label><select id="finalPerson"><option value="">Choose a suspect</option>${people.map(p=>`<option value="${esc(p.id)}" ${r.finalDraft?.personId===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select><label class="field-label" for="finalDiagnosis">DIAGNOSIS</label><select id="finalDiagnosis">${diagnosisOptions(r.finalDraft?.diagnosisId)}</select><p class="small-status">This locks the accusation for this attempt.</p><p class="decision-feedback" id="finalFeedback" role="status"></p><button type="submit" class="primary">Lock final answer <span>→</span></button></form>`}`;
 if(!locked){const draft=()=>{r.finalDraft={personId:$('#finalPerson').value,diagnosisId:$('#finalDiagnosis').value};save()};$('#finalPerson').onchange=draft;$('#finalDiagnosis').onchange=draft;$('#finalForm').onsubmit=e=>{e.preventDefault();const result=lockFinalAccusation($('#finalPerson').value,$('#finalDiagnosis').value);if(!result.ok){$('#finalFeedback').textContent=result.error;return}delete r.finalDraft;save();renderFinalAccusation()};}
 checkpointScreen('final');
}
