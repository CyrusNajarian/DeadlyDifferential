/* Shared player controls for every clue. */
function flowLimits(stage,answers,type){
 const list=answers.filter(a=>a.type===type),prefix=type==='symptom'?'symptom':'diagnosis';
 const x=stage[type==='symptom'?'symptomsNeeded':'diagnosesNeeded']??config[type==='symptom'?'symptomsNeeded':'diagnosesNeeded']??2;
 const y=stage[prefix+'StarThreshold']??config[prefix+'StarThreshold']??4;
 const needed=Math.min(list.length,Math.max(1,Number(x)||1));
 return {needed,star:Math.min(list.length,Math.max(needed,Number(y)||needed)),total:list.length};
}
function flowSuggestions(raw,answers,type,min=6){
 if((String(raw).match(/[a-z]/gi)||[]).length<min)return [];
 const query=norm(raw);return answers.map((a,i)=>({a,i})).filter(({a})=>a.type===type&&[a.term,...a.aliases||[]].some(alias=>norm(alias).includes(query)));
}
function flowMatch(raw,answers,type){
 const candidates=answers.map((a,i)=>({a,i})).filter(x=>x.a.type===type);
 const exact=candidates.filter(({a})=>[a.term,...a.aliases||[]].some(v=>norm(v)===norm(raw)));
 if(exact.length===1)return exact[0].i;
 if(exact.length>1)return -1;
 const r=matchAnswerInput(raw,candidates.map(x=>x.a));return r.found.length===1?candidates[r.found[0]].i:-1;
}
/* Completion and star awards are shared by headings and navigation. */
function syncFlowAwards(stage,progress){
 progress.matches=progress.matches||[];progress.stars=progress.stars||{};
 progress.everRevealed=progress.everRevealed||{};
 for(const type of ['symptom','disease'])if(progress.revealed?.[type])progress.everRevealed[type]=true;
 const blockedAll=!!progress.everRevealed.disease;
 const status={};
 for(const type of ['symptom','disease']){
  const limit=flowLimits(stage,stage.accepted,type);
  const count=new Set(progress.matches.filter(i=>stage.accepted[i]?.type===type)).size;
  if(!blockedAll&&!progress.everRevealed[type]&&limit.total>0&&count>=limit.star)progress.stars[type]=true;
  status[type]={count,ready:limit.total>0&&count>=limit.needed,star:!!progress.stars[type],starBlocked:!progress.stars[type]&&(blockedAll||!!progress.everRevealed[type])};
 }
 return {symptom:status.symptom,disease:status.disease,complete:status.symptom.ready&&status.disease.ready,star:status.symptom.star&&status.disease.star};
}
function revealFlowAnswers(stage,progress,type){
 progress.revealed=progress.revealed||{};
 syncFlowAwards(stage,progress); // Preserve stars earned before the first reveal.
 progress.everRevealed[type]=true;
 progress.revealed[type]=true;
}
function suspectStage(person){return {...person,accepted:[...person.symptoms.map(a=>({...a,type:'symptom'})),...person.diagnoses.map(a=>({...a,type:'disease'}))]}}
function investigationSteps(){
 const steps=[];
 config.clues.forEach((clue,ci)=>clue.stages.forEach((stage,si)=>steps.push({id:`culprit-${ci}-${si}`,section:'culprit',ci,si,stage,title:clue.title,route:`#culprit/${ci}/${si}`})));
 for(const set of window.SUSPECT_SETS||[window.SUSPECT_CLUES])for(const person of set.people.filter(p=>p.observable!==false))steps.push({id:`suspect-${set.id}-${person.id}`,section:'suspects',setId:set.id,personId:person.id,stage:suspectStage(person),title:person.name,route:`#suspects/${set.id}/${person.id}/symptoms`});
 return steps;
}
function flowRecord(id){state.flow=state.flow||{};return state.flow[id]=state.flow[id]||{}}
function stepStatus(step){return syncFlowAwards(step.stage,flowRecord(step.id))}
function isStepUnlocked(id){for(const step of investigationSteps()){if(step.id===id)return true;if(!stepStatus(step).complete)return false}return false}
function groupStatus(steps){const statuses=steps.map(stepStatus);return {complete:statuses.length>0&&statuses.every(s=>s.complete),star:statuses.length>0&&statuses.every(s=>s.star)}}
function milestoneBadge(status){return status.star?'<span class="nav-award star" aria-label="Symptom and diagnosis stars earned">★</span>':status.complete?'<span class="nav-award milestone" aria-label="Symptoms and diagnoses completed">✓</span>':''}
function selectStep(step){state.section=step.section;if(step.section==='culprit'){state.clue=step.ci;state.stage=step.si}else{state.suspectSet=step.setId;state.suspectPerson=step.personId;state.suspectPhase='symptoms'}history.replaceState(null,'',step.route)}
function navigateStep(id){const step=investigationSteps().find(s=>s.id===id);if(!step||!isStepUnlocked(id))return;selectStep(step);save();render();window.scrollTo({top:0,behavior:'smooth'})}
function enforceInvestigationRoute(){
 if(state.section==='notes')return;
 const id=state.section==='suspects'?`suspect-${state.suspectSet}-${state.suspectPerson}`:`culprit-${state.clue}-${state.stage}`;
 const steps=investigationSteps(),target=steps.find(s=>s.id===id);
 if(!target||!isStepUnlocked(id)){const fallback=steps.find(s=>!stepStatus(s).complete)||steps[steps.length-1];if(fallback)selectStep(fallback);save()}
}
function renderFlowNext(step){
 const steps=investigationSteps(),i=steps.findIndex(s=>s.id===step.id),next=steps[i+1],status=stepStatus(step);
 return next?`<div class="flow-next"><p class="small-status">${status.complete?'Requirements complete. You can continue or keep exploring this clue.':'Complete the symptom and diagnosis requirements to continue.'}</p><button type="button" class="primary" id="nextClue" ${status.complete?'':'disabled'} data-next-step="${esc(next.id)}">Next: ${esc(next.title)} <span>→</span></button></div>`:`<p class="completion-note">${status.complete?'All clues complete. You can revisit clues or review your notes.':'Complete the symptom and diagnosis requirements to finish.'}</p>`;
}
function renderNotes(){
 $('#clueNav').hidden=true;
 $('#roundContent').innerHTML='<span class="eyebrow">CASE NOTES</span><h2 class="section-title">Your notes</h2><p class="section-copy">Keep track of findings, possible explanations, and connections between clues.</p><label class="field-label" for="caseNotes">HIGH-LEVEL NOTES</label><textarea id="caseNotes" class="text-input case-notes" maxlength="50000" placeholder="What have you noticed? What might connect the clues?"></textarea><p class="small-status" id="notesStatus" role="status">Saved on this device for this attempt.</p>';
 const notes=$('#caseNotes');notes.value=state.notes||'';
 notes.addEventListener('input',()=>{state.notes=notes.value;try{save();$('#notesStatus').textContent='Saved on this device for this attempt.'}catch{$('#notesStatus').textContent='Device storage is full. Copy your notes somewhere safe before leaving this page.'}});
 DDLog?.screen('notes',{section:'notes',clue:'Notes',stage:'Notes'});
}

function mountFlow(root,stage,progress,context){
 const answers=stage.accepted;progress.matches=progress.matches||[];progress.revealed=progress.revealed||{};progress.hints=progress.hints||{};progress.answerHints=progress.answerHints||{};
 const matches=progress.matches.filter(i=>answers[i]),symCount=matches.filter(i=>answers[i].type==='symptom').length;
 const symLimit=flowLimits(stage,answers,'symptom'),diagnosesUnlocked=symCount>=symLimit.needed;
 const awards=syncFlowAwards(stage,progress);
 const questions=stage.questions||[];
 root.innerHTML=['symptom','disease'].map(type=>{
  const title=type==='symptom'?'Symptoms':'Diagnoses',locked=type==='disease'&&!diagnosesUnlocked,limit=flowLimits(stage,answers,type);
  const found=matches.filter(i=>answers[i].type===type),ready=found.length>=limit.needed,star=awards[type].star;
  const visible=progress.revealed[type]?answers.map((a,i)=>i).filter(i=>answers[i].type===type):found;
  const hintCards=questions.map((q,i)=>({q,i})).filter(({q,i})=>(/local|differential/i.test(q.label)?'disease':/notice|finding|describe|symptom/i.test(q.label)?'symptom':i<2?'symptom':'disease')===type).map(({q,i})=>{
   const level=progress.hints[i]||0;return `<article class="question card"><button type="button" class="question-toggle" data-flow-prompt="${i}" aria-expanded="${level>0}"><span><small class="question-label">${esc(q.label)}</small><span class="question-prompt">${level?esc(q.prompt):'Tap to reveal prompt'}</span></span><span>${level<2?'＋':'✓'}</span></button>${level===2?`<div class="question-answer"><p>${esc(q.hint)}</p></div>`:''}</article>`;
  }).join('');
  const remaining=answers.map((a,i)=>({a,i})).filter(({a,i})=>a.type===type&&!matches.includes(i));
  return `<section class="reasoning-section shared-reasoning ${locked?'is-locked':''}" data-flow-section="${type}"><h3 class="reasoning-heading">${type==='symptom'?'1 · Symptoms':'2 · Diagnoses'} ${ready?'<span class="milestone" aria-label="Requirement met">☑</span>':''} ${star?'<span class="star" aria-label="Star milestone reached">★</span>':''}</h3>${locked?`<p class="locked-note">Find ${Math.max(0,symLimit.needed-symCount)} more distinct ${symLimit.needed-symCount===1?'symptom':'symptoms'} above to unlock diagnoses.</p>`:''}<fieldset ${locked?'disabled':''}><div class="question-grid">${hintCards}</div><form class="answer-lab card" data-flow-form="${type}"><label class="eyebrow" for="flow-${type}">${title.toUpperCase()} CHECK</label><div class="entry-row"><input class="text-input" id="flow-${type}" type="text" autocomplete="off" enterkeyhint="send" aria-autocomplete="list" aria-controls="flow-suggestions-${type}" aria-expanded="false" placeholder="Enter one ${type==='symptom'?'symptom':'diagnosis'}" ${locked?'disabled':''}><button type="submit" ${locked?'disabled':''}>Check</button></div><div id="flow-suggestions-${type}" class="flow-suggestions" role="listbox" aria-label="Matching ${title.toLowerCase()}" hidden></div><p class="small-status">One answer per submission. Matching suggestions appear after ${config.suggestionsAfter??6} letters.</p><p class="flow-feedback" role="status" aria-live="polite"></p></form><p class="small-status">${found.length} found · ${limit.needed} for ☑ · ${limit.star} for ★${awards[type].starBlocked?' · Star unavailable after answer reveal':''}</p><div class="flow-actions"><button type="button" class="reveal-box" data-flow-reveal="${type}" ${ready?'':'disabled'}><strong>${progress.revealed[type]?'Hide review':`Review all ${title.toLowerCase()}`}</strong><span>${ready?(type==='symptom'?'Choose to open the full list. Revealing symptoms closes off an unearned symptom star.':'Choose to open the full list. Revealing diagnoses closes off any unearned stars.'):`Find ${Math.max(0,limit.needed-found.length)} more to unlock review.`}</span></button><button type="button" class="hint-all" data-flow-hints="${type}">Give me a hint</button></div>${progress.answerHints[type]?`<div class="remaining-hints card"><span class="eyebrow">HINTS FOR UNGUESSED ${title.toUpperCase()}</span>${remaining.length?`<ol>${remaining.map(({a})=>`<li>${esc(a.hint||'Consider another mechanism for this observation.')}</li>`).join('')}</ol>`:'<p>You have found every configured answer in this category.</p>'}</div>`:''}<div class="match-list">${visible.map(i=>answerCard(answers[i],i,matches)).join('')}</div></fieldset></section>`;
 }).join('');
 function commit(){progress.commit?.();save();}
 const drafts={};
 function rerender(){for(const t of ['symptom','disease'])drafts[t]=root.querySelector('#flow-'+t)?.value||'';commit();render();for(const t of ['symptom','disease']){const el=document.querySelector('#flow-'+t);if(el)el.value=drafts[t]}}
 root.querySelectorAll('[data-flow-prompt]').forEach(b=>b.onclick=()=>{const i=b.dataset.flowPrompt;progress.hints[i]=Math.min(2,(progress.hints[i]||0)+1);DDLog?.event('hint',{...context,question:Number(i),level:progress.hints[i]});rerender()});
 root.querySelectorAll('[data-flow-reveal]').forEach(b=>b.onclick=()=>{const t=b.dataset.flowReveal;if(t==='disease'&&!diagnosesUnlocked)return;const n=matches.filter(i=>answers[i].type===t).length;if(n<flowLimits(stage,answers,t).needed)return;if(progress.revealed[t])progress.revealed[t]=false;else revealFlowAnswers(stage,progress,t);DDLog?.event('review',{...context,category:t,visible:progress.revealed[t]});rerender()});
 root.querySelectorAll('[data-flow-hints]').forEach(b=>b.onclick=()=>{const t=b.dataset.flowHints;if(t==='disease'&&!diagnosesUnlocked)return;progress.answerHints[t]=true;DDLog?.event('answer_hints',{...context,category:t});rerender()});
 for(const type of ['symptom','disease']){
  const input=root.querySelector('#flow-'+type),form=root.querySelector(`[data-flow-form="${type}"]`),list=root.querySelector('#flow-suggestions-'+type);
  let active=-1,options=[];
  const close=()=>{list.hidden=true;active=-1;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant')};
  function choose(i){input.value=answers[i].term;close();input.focus();}
  input.addEventListener('input',()=>{
   options=flowSuggestions(input.value,answers,type,config.suggestionsAfter??6);active=-1;list.innerHTML=options.map(({a,i},n)=>`<button type="button" role="option" aria-selected="false" id="option-${type}-${n}" data-option="${i}">${esc(a.term)}${matches.includes(i)?' · found':''}</button>`).join('');list.hidden=!options.length;input.setAttribute('aria-expanded',String(options.length>0));
   list.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>choose(Number(b.dataset.option)));
  });
  input.addEventListener('keydown',e=>{
   if(e.key==='Escape')return close();if(list.hidden)return;
   if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();active=(active+(e.key==='ArrowDown'?1:-1)+options.length)%options.length;list.querySelectorAll('button').forEach((b,n)=>{b.setAttribute('aria-selected',String(n===active));if(n===active)b.scrollIntoView({block:'nearest'})});input.setAttribute('aria-activedescendant',`option-${type}-${active}`)}
   if(e.key==='Enter'&&active>=0){e.preventDefault();choose(options[active].i)}
  });
  input.addEventListener('blur',()=>setTimeout(()=>{if(!list.contains(document.activeElement))close()},150));
  form.onsubmit=e=>{
   e.preventDefault();if(type==='disease'&&!diagnosesUnlocked)return;const raw=input.value;if(!raw.trim())return;
   const i=flowMatch(raw,answers,type),result=i<0?'incorrect':matches.includes(i)?'repeated':'correct';
   DDLog?.event('answer',{...context,category:type,raw,result,answer:i>=0?answers[i].term:''});
   if(i<0){form.querySelector('.flow-feedback').textContent='No match yet. Enter one answer, or choose a matching suggestion.';close();return}
   if(matches.includes(i)){form.querySelector('.flow-feedback').textContent='Already found. Another wording of the same category counts once.';close();return}
   progress.matches.push(i);input.value='';rerender();const next=document.querySelector('#flow-'+type);if(next&&!next.disabled)next.focus();toast('Match found');
  };
 }
}
