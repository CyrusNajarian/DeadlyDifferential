let config;
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
function answerCard(a,i,matches){return `<article class="answer-card ${matches.includes(i)?'found':''}"><div><strong>${esc(a.term)}</strong>${matches.includes(i)?'<span class="found-badge">FOUND</span>':''}</div><p>${esc(a.info||'Accepted interpretation for this clue.')}</p></article>`}
function render(){
  renderSectionNav();
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
 if(!window.SUSPECT_CLUES)await loadScript('suspect-data.js?v=23');
 if(typeof renderSuspects!=='function')await loadScript('suspects.js?v=23');
 if(!$('#sectionNav')){const nav=document.createElement('nav');nav.id='sectionNav';nav.className='section-nav';nav.setAttribute('aria-label','Investigation sections');$('#clueNav').before(nav)}
 if(!document.querySelector('link[href^="suspects.css"]')){const link=document.createElement('link');link.rel='stylesheet';link.href='suspects.css?v=23';document.head.append(link)}
}
async function initialize(){
 $('#startButton').disabled=true;
 await prepareSuspectSection();
 try{config=await window.DDPreviewStore.load()||window.CASE_CONFIG}
 catch(error){config=window.CASE_CONFIG;toast('Saved preview unavailable. Showing the published case.');console.warn(error.message)}
 if(config.suspectSets){window.SUSPECT_SETS=config.suspectSets;window.SUSPECT_CLUES=config.suspectSets[0];}
 document.title=config.title||'Deadly Differential';$('.brand span:last-child').textContent=(config.title||'Deadly Differential').toUpperCase();$('#caseLabel').textContent=config.caseLabel||'CASE 01 · DEPARTMENT RETREAT';$('#openingHeadline').textContent=config.openingHeadline||'The retreat is over. The investigation begins.';$('#openingDescription').textContent=config.openingDescription||'';$('#playerInstructions').textContent=config.playerInstructions||'';
 $('#exportLogs').onclick=()=>DDLog.download();
 $('#startButton').disabled=false;$('#startButton').onclick=start;$('#resetButton').onclick=()=>{if(confirm('Reset all saved progress on this phone?')){DDLog.reset();localStorage.removeItem('dd-state-v4');location.reload()}};
 if(state.team){DDLog.start(state.team);$('#welcome').classList.remove('active');$('#game').classList.add('active');$('#teamHeading').textContent=state.team;render();tick=setInterval(timer,1000);timer()}
}
window.caseReady=initialize();
