let config;
let debugMode=false;
const state=JSON.parse(localStorage.getItem('dd-state-v4')||'{}');
state.matches=state.matches||{};state.hints=state.hints||{};state.revealed=state.revealed||{};state.clue=state.clue||0;state.stage=state.stage||0;
const save=()=>localStorage.setItem('dd-state-v4',JSON.stringify(state));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];let tick;
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1700)}
function norm(s){return String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/^(?:i think (?:it is |its |this is )?|it is |its |this is |possible |possibly |maybe |the |a |an )/,'').replace(/[^a-z0-9]/g,'')}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function mediaSource(src,type){try{const u=new URL(src,location.href);return ['https:','http:'].includes(u.protocol)||u.protocol==='data:'&&new RegExp(`^data:${type==='image'?'image':'audio'}/`).test(src)?src:''}catch{return ''}}
function mediaCard(media){
 const type=media?.type,src=mediaSource(media?.src||'',type);
 if(!['image','audio'].includes(type)||!src)return '';
 return `<figure class="evidence-media card"><span class="eyebrow">${type==='audio'?'AUDIO':'IMAGE'} EVIDENCE</span>${type==='image'?`<a href="${esc(src)}" target="_blank" rel="noopener"><img src="${esc(src)}" alt="${esc(media.alt||'Clue evidence')}" loading="lazy"></a>`:`<audio controls preload="metadata" src="${esc(src)}" aria-label="${esc(media.alt||'Clue audio')}"></audio>`}${media.caption?`<figcaption>${esc(media.caption)}</figcaption>`:''}<p class="media-error" hidden>Could not load this evidence. Ask the organizer to check the media source.</p></figure>`;
}
function start(){state.team=$('#teamName').value.trim()||'Consult Team';state.started=state.started||Date.now();DDLog.start(state.team);save();$('#welcome').classList.remove('active');$('#game').classList.add('active');$('#teamHeading').textContent=state.team;render();tick=setInterval(timer,1000);timer()}
function timer(){const sec=Math.max(0,Math.floor((Date.now()-(state.started||Date.now()))/1000));$('#timer').textContent=String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0')}
const key=()=>state.clue+'-'+state.stage;
const found=()=>state.matches[key()]||[];
const hintLevel=i=>state.hints[`${key()}-${i}`]||0;
function answerCard(a,i,matches){
 const description=DDReference.byId.get(a.referenceId)?.description||a.info||'';
 return `<article class="answer-card ${matches.includes(i)?'found':''}"><div><strong>${esc(a.term)}</strong>${matches.includes(i)?'<span class="found-badge">FOUND</span>':''}</div>${description?`<p>${esc(description)}</p>`:''}</article>`;
}
function render(){
  $('#welcome').classList.toggle('active',!state.team);$('#game').classList.toggle('active',!!state.team);$('.case-head').hidden=!state.team;$('#exportLogs').hidden=!state.team;
  renderSectionNav();
  if(!state.team)return;
  if(state.section==='notes')return renderNotes();
  if(state.section==='suspects')return renderSuspects();
  $('#clueNav').hidden=false;
  renderCulprit();
}
function renderCulprit(){
 const clue=config.clues[state.clue],stage=clue.stages[state.stage]||clue.stages[0];
 const steps=investigationSteps(),current=steps.find(s=>s.id==='culprit-'+key());
 $('#clueNav').innerHTML=config.clues.map((c,i)=>{const group=steps.filter(s=>s.section==='culprit'&&s.ci===i),unlocked=isStepUnlocked(group[0].id);return `<button class="round ${i===state.clue?'active':''}" data-clue="${i}" ${unlocked?'':'disabled'}><b>${String(i+1).padStart(2,'0')} ${milestoneBadge(groupStatus(group))}</b><span>${esc(c.title.replace(/^The /,''))}${unlocked?'':' · Locked'}</span></button>`}).join('');
 $('#roundContent').innerHTML=`<span class="eyebrow">CLUE ${state.clue+1} OF ${config.clues.length}</span><h2 class="section-title">${esc(clue.title)} ${milestoneBadge(groupStatus(steps.filter(s=>s.section==='culprit'&&s.ci===state.clue)))}</h2><div class="stage-tabs">${clue.stages.map((s,i)=>{const step=steps.find(x=>x.id===`culprit-${state.clue}-${i}`);return `<button class="stage-tab ${i===state.stage?'active':''}" data-stage="${i}" ${isStepUnlocked(step.id)?'':'disabled'}>${esc(s.title)} ${milestoneBadge(stepStatus(step))}</button>`}).join('')}</div>${mediaCard(stage.media||clue.media)}<div id="sharedFlow"></div>${renderFlowNext(current)}`;
 mountFlow($('#sharedFlow'),stage,flowRecord(current.id),{section:'culprit',clue:clue.title,stage:stage.title});
 DDLog?.screen('culprit/'+key(),{section:'culprit',clue:clue.title,stage:stage.title});
 $$('[data-clue]').forEach(b=>b.onclick=()=>navigateStep(`culprit-${b.dataset.clue}-0`));
 $$('[data-stage]').forEach(b=>b.onclick=()=>navigateStep(`culprit-${state.clue}-${b.dataset.stage}`));
 $('#nextClue')?.addEventListener('click',e=>navigateStep(e.currentTarget.dataset.nextStep));
 $$('.evidence-media img,.evidence-media audio').forEach(el=>el.onerror=()=>{el.closest('figure').querySelector('.media-error').hidden=false});
 save();
}
async function prepareSuspectSection(){
 // An older cached HTML shell can load the newest app.js during a rollout.
 const loadScript=src=>new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src;script.onload=resolve;script.onerror=()=>reject(new Error('Suspect clues could not load. Please refresh.'));document.body.append(script)});
 if(!window.SUSPECT_CLUES)await loadScript('suspect-data.js?v=29');
 if(typeof renderSuspects!=='function')await loadScript('suspects.js?v=29');
 if(!$('#sectionNav')){const nav=document.createElement('nav');nav.id='sectionNav';nav.className='section-nav';nav.setAttribute('aria-label','Investigation sections');$('#clueNav').before(nav)}
 if(!document.querySelector('link[href^="suspects.css"]')){const link=document.createElement('link');link.rel='stylesheet';link.href='suspects.css?v=29';document.head.append(link)}
}
async function initialize(){
 $('#startButton').disabled=true;
 await prepareSuspectSection();
 try{config=await window.DDPreviewStore.load()||window.CASE_CONFIG}
 catch(error){config=window.CASE_CONFIG;toast('Saved preview unavailable. Showing the published case.');console.warn(error.message)}
 // Migrate bundled photo filenames retained in device-local previews.
 const legacyPhotos={"reception-1.webp":"reception-1-ptosis.webp","reception-3.webp":"reception-3-ptosis.webp","reception-4.webp":"reception-4-ptosis.webp","reception-5.webp":"reception-5-ptosis.webp","team-room.webp":"team-room-prevention.webp","team-room-head-wrap.webp":"team-room-prevention.webp","interview-notes-v2.webp":"annual-activity-log.webp","annual-review.webp":"annual-activity-log.webp"};
 for(const set of config.suspectSets||[])for(const photo of set.photos||[]){const prefix='assets/suspects/';if(photo.src?.startsWith(prefix)){const updated=legacyPhotos[photo.src.slice(prefix.length)];if(updated)photo.src=prefix+updated;}}
 for(const clue of config.clues||[]){const published=window.CASE_CONFIG.clues.find(c=>c.title===clue.title);if(['The Key & Safe','The Neck','The Footsteps','The Voicemail'].includes(clue.title)&&published)for(const [i,stage] of clue.stages.entries()){if(!stage.media?.src&&published.stages[i]?.media?.src)stage.media={...published.stages[i].media};}}
 for(const set of config.suspectSets||[])if(set.id==='team-room'&&set.photos?.[0]?.src==='assets/suspects/team-room-prevention.webp'){const published=window.CASE_CONFIG.suspectSets.find(s=>s.id==='team-room');set.photos=published.photos;set.people=published.people;}
 for(const set of config.suspectSets||[])if(set.id==='interview-notes'&&set.photos?.[0]?.src==='assets/suspects/annual-activity-log.webp'){const published=window.CASE_CONFIG.suspectSets.find(s=>s.id==='interview-notes');set.photos=published.photos;set.people=published.people;set.title=published.title;set.label=published.label;set.description=published.description;}
 if(config.suspectSets){window.SUSPECT_SETS=config.suspectSets;window.SUSPECT_CLUES=config.suspectSets[0];}
 // Apply the published order to the original five-clue case, including saved previews.
 const order=window.CASE_CONFIG.clues.map(c=>c.title);
 if(config.clues.length===order.length&&config.clues.every(c=>order.includes(c.title))){
  config.clues.sort((a,b)=>order.indexOf(a.title)-order.indexOf(b.title));config.clueOrderRevision=2;
  for(const clue of config.clues)for(const [i,stage] of clue.stages.entries()){
   const published=window.CASE_CONFIG.clues.find(c=>c.title===clue.title)?.stages[i];
   if(published?.previousAnswerIds&&stage.accepted.every(a=>published.previousAnswerIds.includes(a.id)))Object.assign(stage,{accepted:published.accepted,previousAnswerIds:published.previousAnswerIds,answerRevision:published.answerRevision,symptomsNeeded:1,symptomStarThreshold:1,symptomLabel:'Observations',symptomSingular:'observation',questions:published.questions});
  }
 }
 for(const id of ['emails','conference-recording'])if(config.suspectSets&&!config.suspectSets.some(s=>s.id===id)){const published=window.CASE_CONFIG.suspectSets.find(s=>s.id===id);if(published)config.suspectSets.push(published);}
 // Refresh known built-in answer definitions in saved previews, retaining custom entries.
 const refreshAnswers=(answers,published)=>{for(const answer of answers||[]){const reference=published?.find(a=>a.id===answer.id&&norm(a.term)===norm(answer.term));if(reference){answer.info=reference.info;delete answer.evidenceLabel;delete answer.sources;}}};
 for(const clue of config.clues)for(const [i,stage] of clue.stages.entries()){
  const published=window.CASE_CONFIG.clues.find(c=>c.title===clue.title)?.stages[i];
  refreshAnswers(stage.accepted,published?.accepted);
  if(published&&stage.accepted.every(a=>published.accepted.some(b=>b.id===a.id)))for(const answer of published.accepted)if(answer.id?.startsWith('expanded-')&&!stage.accepted.some(a=>a.id===answer.id))stage.accepted.push({...answer});
 }
 for(const set of config.suspectSets||[])for(const person of set.people){const published=window.CASE_CONFIG.suspectSets.find(s=>s.id===set.id)?.people.find(p=>p.id===person.id);if(published){refreshAnswers(person.symptoms,published.symptoms);refreshAnswers(person.diagnoses,published.diagnoses);if(published.symptomLabel){person.symptomLabel=published.symptomLabel;person.symptomSingular=published.symptomSingular;}}}
 config.suggestionsAfter=3;
 DDReference.prepareConfig(config);
 const migration=migrateCaseProgress(state,config);
 if(migration.orderChanged){const match=location.hash.match(/^#culprit\/(\d+)\/(\d+)$/);if(match)history.replaceState(null,'',`#culprit/${migration.indexMap[match[1]]??0}/${match[2]}`);}
 if(migration.changed)save();
 document.title=config.title||'Deadly Differential';$('.brand span:last-child').textContent=(config.title||'Deadly Differential').toUpperCase();$('#caseLabel').textContent=config.caseLabel||'CASE 01 · DEPARTMENT RETREAT';$('#openingHeadline').textContent=config.openingHeadline||'The retreat is over. The investigation begins.';$('#openingDescription').textContent=config.openingDescription||'';$('#playerInstructions').textContent=config.playerInstructions||'';
 initReferencePanel();
 $('#exportLogs').onclick=()=>DDLog.download();
 $('#debugButton').onclick=()=>{debugMode=!debugMode;$('#debugButton').setAttribute('aria-pressed',String(debugMode));$('#debugButton').textContent=`Debug mode: ${debugMode?'On':'Off'}`;if(state.team||state.section==='reference')render();toast(debugMode?'Debug mode on · requirements bypassed':'Debug mode off · requirements restored')};
 $('#startButton').disabled=false;$('#startButton').onclick=start;$('#resetButton').onclick=()=>{if(confirm('Reset all saved progress on this phone?')){DDLog.reset();localStorage.removeItem('dd-state-v4');location.reload()}};
 if(state.team){DDLog.start(state.team);$('#welcome').classList.remove('active');$('#game').classList.add('active');$('#teamHeading').textContent=state.team;render();tick=setInterval(timer,1000);timer()}
 else if(location.hash.startsWith('#reference'))render();
}
window.caseReady=initialize();
