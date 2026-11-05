function renderVideoEvidence(set){return `<figure class="reception-gallery card"><video class="reception-main" controls playsinline preload="metadata" aria-label="Conference footage recorded by Dr. Charcoal"><source src="${esc(set.video.src)}" type="video/mp4">Your browser cannot play this video. <a href="${esc(set.video.src)}">Open the recording</a>.</video><figcaption>${esc(set.video.caption)} <a class="text-button" href="${esc(set.video.src)}" target="_blank" rel="noopener">Open recording ↗</a></figcaption></figure>`;}
function personFace(person){const id=/^[A-F]$/.test(person.id)?person.id:'A';return `<img class="person-face" src="assets/suspects/faces/${id}.webp" alt="" width="44" height="44">`;}
function renderEmailEvidence(set,person){
 const messages=person.emailId?set.emails.filter(e=>e.id===person.emailId):set.emails;
 const body=text=>esc(text).replace(/\n/g,'<br>');
 return `<section class="email-evidence" aria-label="Email evidence">${messages.map(e=>`<article class="email-message card"><span class="eyebrow">DEPARTMENT CORRESPONDENCE</span><h3>${esc(e.subject)}</h3><dl class="email-headers"><dt>From</dt><dd>${esc(e.from)}</dd><dt>To</dt><dd>${esc(e.to)}</dd></dl><p>${body(e.body)}</p>${e.reply?`<div class="email-reply"><strong>Reply · ${esc(e.to)}</strong><p>${body(e.reply)}</p></div>`:''}${e.earlier?`<div class="email-reply"><strong>Earlier message · ${esc(e.to)}</strong><p>${body(e.earlier)}</p></div>`:''}</article>`).join('')}</section>`;
}
let activeGallery="", selectedGalleryPhoto=0;
/* One answer per submission, with synonyms and conservative spelling suggestions. */
function answerWords(value){return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim()}
function answerDistance(a,b){const d=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){let prev=d[0];d[0]=i;for(let j=1;j<=b.length;j++){const old=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));prev=old}}return d[b.length]}
function matchAnswerInput(raw,answers){
 const chunk=String(raw).trim(),words=answerWords(chunk),compact=norm(chunk);
 if(!compact)return {found:[],suggestions:[],unmatched:[]};
 const exact=answers.findIndex(a=>[a.term,...(a.aliases||[])].some(alias=>norm(alias)===compact));
 if(exact>=0)return {found:[exact],suggestions:[],unmatched:[]};
 if(/\b(no|not|without|denies|absent|exclude|excluding)\b|ruled out|rule out|doesnt|isnt/.test(words))return {found:[],suggestions:[],unmatched:[chunk]};
 const found=[];
 answers.forEach((a,i)=>{if([a.term,...(a.aliases||[])].some(alias=>{const aw=answerWords(alias);return (aw.length>=5||/^[A-Z0-9]{2,5}$/.test(alias))&&(' '+words+' ').includes(' '+aw+' ')}))found.push(i)});
 if(found.length===1)return {found,suggestions:[],unmatched:[]};
 const suggestions=[];
 if(found.length===0&&compact.length>=6){let best=Infinity,candidates=[];answers.forEach((a,i)=>{const score=Math.min(...[a.term,...(a.aliases||[])].map(x=>answerDistance(compact,norm(x))));if(score<best){best=score;candidates=[i]}else if(score===best)candidates.push(i)});if(best<=Math.min(2,Math.floor(compact.length/6))&&candidates.length===1)suggestions.push(candidates[0])}
 return {found:[],suggestions,unmatched:[chunk]};
}
/* Uses the existing game's answer normalization, styles and saved state. */
function suspectSet(){return (window.SUSPECT_SETS||[window.SUSPECT_CLUES]).find(s=>s.id===state.suspectSet)||window.SUSPECT_CLUES}
function suspectRoute(){
 const sets=window.SUSPECT_SETS||[window.SUSPECT_CLUES],parts=location.hash.replace(/^#/,'').split('/');
 if(parts[0]==='suspects'){
  state.section='suspects';state.suspectSet=sets.some(s=>s.id===parts[1])?parts[1]:'reception';
  const people=suspectSet().people.filter(p=>p.observable!==false);
  state.suspectPerson=people.some(p=>p.id===parts[2])?parts[2]:people[0].id;
  state.suspectPhase=parts[3]==='diagnoses'?'diagnoses':'symptoms';
  if(parts[1]!==state.suspectSet||parts[2]!==state.suspectPerson){state.suspectPhase='symptoms';history.replaceState(null,'',`#suspects/${state.suspectSet}/${state.suspectPerson}/symptoms`)}
 }else if(parts[0]==='culprit'){state.section='culprit';if(parts[1]!==undefined)state.clue=Number(parts[1]);if(parts[2]!==undefined)state.stage=Number(parts[2]);}
 else if(parts[0]==='notes')state.section='notes';
 else if(parts[0]==='reference'){const route=state.lastInvestigationRoute||'#culprit/0/0';history.replaceState(null,'',route);state.section=route.startsWith('#suspects/')?'suspects':'culprit';openReference();}
 if(state.section==='reference')state.section='culprit';
 state.section=state.section||'culprit';
 enforceInvestigationRoute();
}
function suspectProgress(id){
 state.suspectProgress=state.suspectProgress||{};
 const key=suspectSet().id==='reception'?id:suspectSet().id+':'+id;
 const progress=state.suspectProgress[key]=state.suspectProgress[key]||{symptoms:[],diagnoses:[],hints:{},revealed:{}};
 const person=suspectSet().people.find(p=>p.id===id);
 if(!progress.diagnosesV2&&person?.legacyDiagnosisTerms){progress.diagnoses=[...new Set(progress.diagnoses.map(i=>person.diagnoses.findIndex(a=>a.term===person.legacyDiagnosisTerms[i])).filter(i=>i>=0))];progress.diagnosesV2=true}
 return progress;
}
function suspectNavigate(id,phase='symptoms'){
 const hash=`#suspects/${suspectSet().id}/${id}/${phase}`;
 if(location.hash===hash){suspectRoute();save();render()}else location.hash=hash;
}
function renderSectionNav(){
 suspectRoute();const section=state.section,steps=investigationSteps(),culprit=steps.filter(s=>s.section==='culprit'),suspects=steps.filter(s=>s.section==='suspects');
 const ci=culprit.find(s=>s.ci===state.clue&&s.si===state.stage)||culprit[0];
 const si=suspects.find(s=>s.setId===state.suspectSet&&s.personId===state.suspectPerson)||suspects[0];
 $('#sectionNav').innerHTML=state.team?`<a class="section-link ${section==='culprit'?'selected':''}" href="${ci.route}">Culprit clues ${milestoneBadge(groupStatus(culprit))}</a>${suspects.length?(isStepUnlocked(suspects[0].id)?`<a class="section-link ${section==='suspects'?'selected':''}" href="${si.route}">Suspect clues ${milestoneBadge(groupStatus(suspects))}</a>`:'<span class="section-link nav-locked" aria-disabled="true">Suspect clues · Locked</span>'):''}<a class="section-link ${section==='notes'?'selected':''}" href="#notes">Notes</a>`:'<a class="section-link" href="#culprit/0/0">Case briefing</a>';
}
function renderSuspects(){
  $('#clueNav').hidden=true;
  const set=suspectSet();
  const people=set.people.filter(p=>p.observable!==false);
  const person=people.find(p=>p.id===state.suspectPerson)||people[0];
  const progress=suspectProgress(person.id);
  const unlocked=progress.symptoms.length>=1;
  const galleryKey=set.id+':'+person.id;
  if(activeGallery!==galleryKey){activeGallery=galleryKey;selectedGalleryPhoto=0;}
  const photo=set.photos[selectedGalleryPhoto]?selectedGalleryPhoto:0;
  const image=set.photos[photo]||{};
  const steps=investigationSteps(),setSteps=steps.filter(s=>s.setId===set.id),current=steps.find(s=>s.id===`suspect-${set.id}-${person.id}`);
  const complete=setSteps.filter(s=>stepStatus(s).complete).length;
  const next=people[people.indexOf(person)+1];
  $('#roundContent').innerHTML=`
    <div class="suspect-set-head"><nav class="clue-set-nav" aria-label="Suspect clue sets">${(window.SUSPECT_SETS||[set]).map(clue=>{const group=steps.filter(s=>s.setId===clue.id),first=group[0],label=esc(clue.label||clue.title);return isStepUnlocked(first.id)?`<a class="section-link ${clue.id===set.id?'selected':''}" href="${first.route}">${label} ${milestoneBadge(groupStatus(group))}</a>`:`<span class="section-link nav-locked" aria-disabled="true">${label} · Locked</span>`}).join('')}</nav><span class="eyebrow">SUSPECT CLUES</span><h2 class="section-title">${esc(set.title)}</h2><p class="section-copy">${esc(set.description)}</p></div>
    <nav class="person-nav" aria-label="People in this clue">${people.map(p=>{const step=setSteps.find(s=>s.personId===p.id),label=`<b>${personFace(p)}${esc(p.name)} ${milestoneBadge(stepStatus(step))}</b>`;return isStepUnlocked(step.id)?`<a href="${step.route}" class="person-link ${p.id===person.id?'selected':''}">${label}</a>`:`<span class="person-link nav-locked" aria-disabled="true">${label}<span>Locked</span></span>`}).join('')}</nav>
    <div class="person-heading"><div class="person-identity">${personFace(person)}<h3>${esc(person.name)}</h3></div><span class="small-status">${complete}/${people.length} complete</span></div>
    ${set.video?renderVideoEvidence(set):set.emails?renderEmailEvidence(set,person):`<figure class="reception-gallery card ${set.id==='interview-notes'?'document-gallery':''}">
      <a href="${image.src}" target="_blank" rel="noopener" aria-label="Open photograph ${photo+1} at full size"><img class="reception-main" src="${image.src}" alt="${esc(image.alt)}" width="${image.width||1536}" height="${image.height||1024}" fetchpriority="high"></a>
      <figcaption><span>${set.photos.length>1?`Photo ${photo+1} of ${set.photos.length}`:'Evidence'} · ${esc(image.title)}</span><button type="button" class="text-button" id="zoomPhoto">Enlarge ↗</button></figcaption>
      <div class="photo-strip" ${set.photos.length===1?'hidden':''} aria-label="Photographs in order">${set.photos.map((p,i)=>`<button type="button" data-photo="${i}" class="photo-thumb ${photo===i?'selected':''}" aria-label="Photo ${i+1}: ${esc(p.title)}${p.people.includes(person.id)?'':` — ${esc(person.name)} not shown`}" aria-pressed="${photo===i}" ${p.people.includes(person.id)?'':'disabled'}><img src="${p.src.replace('.webp','-thumb.webp')}" alt="" loading="lazy"><span>${i+1} · ${esc(p.title)}</span></button>`).join('')}</div>
    </figure>`}
    <details class="photo-key card"><summary>Who’s who in this clue</summary><dl>${set.people.map(p=>`<div><dt>${personFace(p)}${esc(p.name)}</dt></div>`).join('')}</dl></details>
    <div id="sharedFlow"></div>
    ${renderFlowNext(current)}
    ${set.emails||set.video?'':`<dialog id="photoDialog" class="photo-dialog"><div class="dialog-bar"><span>Photo ${photo+1} · ${esc(image.title)}</span><button type="button" id="closePhoto" aria-label="Close enlarged photograph">Close ×</button></div><div class="zoom-scroll"><img src="${image.src}" alt="${esc(image.alt)}" width="${image.width||1536}" height="${image.height||1024}"></div><p>Scroll to inspect the full photograph. You can also <a href="${image.src}" target="_blank" rel="noopener">open the original</a>.</p></dialog>`}`;
  save();
  $$('[data-photo]').forEach(b=>b.onclick=()=>{selectedGalleryPhoto=+b.dataset.photo;render()});
  state.flow=state.flow||{};
  const flowId='suspect-'+set.id+'-'+person.id;
  const p=state.flow[flowId]=state.flow[flowId]||{};
  const stage=suspectStage(person);
  p.commit=()=>{progress.symptoms=p.matches.filter(i=>stage.accepted[i]?.type==='symptom');progress.diagnoses=p.matches.filter(i=>stage.accepted[i]?.type==='disease').map(i=>i-person.symptoms.length)};
  mountFlow($('#sharedFlow'),stage,p,{section:'suspects',clue:set.title,stage:person.name});
  DDLog?.screen(flowId,{section:'suspects',clue:set.title,stage:person.name});
  $('#nextClue')?.addEventListener('click',e=>navigateStep(e.currentTarget.dataset.nextStep));
  const dialog=$('#photoDialog');
  if(dialog){$('#zoomPhoto').onclick=()=>dialog.showModal();
  $('#closePhoto').onclick=()=>dialog.close();
  dialog.onclick=e=>{if(e.target===dialog)dialog.close()};}
}
window.addEventListener('hashchange',()=>{
  suspectRoute();save();if(state.team||state.section==='reference')render();else{$('#welcome').classList.add('active');$('#game').classList.remove('active')}
});
