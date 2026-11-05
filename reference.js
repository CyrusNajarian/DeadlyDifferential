/* Shared vocabulary. Clue approval is deliberately separate from discovery. */
window.DDReference=(()=>{
 const data=window.NEURO_REFERENCE;
 const key=v=>String(v??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
 const byId=new Map(data.items.map(a=>[a.id,a]));
 const types=['symptom','disease'];
 const lists=Object.fromEntries(types.map(t=>[t,data.items.filter(a=>a.type===t).sort((a,b)=>a.term.localeCompare(b.term))]));
 const index=Object.fromEntries(types.map(t=>{const map=new Map();for(const a of lists[t])for(const name of [a.term,...a.aliases||[]]){const k=key(name);if(!map.has(k))map.set(k,new Set());map.get(k).add(a.id)}return [t,map]}));
 const searchIndex=new Map(data.items.map(a=>[a.id,{
  name:key(a.term),
  aliases:[...new Set([...a.aliases||[],...a.searchTerms||[],...(a.subtypes||[]).map(s=>s.name)].map(key))],
  descriptions:[a.description,...(a.subtypes||[]).map(s=>s.description)].map(key)
 }]));
 function resolve(value,type){const found=index[type]?.get(key(value));return found?.size===1?byId.get([...found][0]):byId.get(data.inputBindings?.[type+':'+key(value)])||null}
 // Adjacent transpositions count as one typo; fuzzy matches suggest names only.
 function distance(a,b){
  const rows=Array.from({length:a.length+1},(_,i)=>Array.from({length:b.length+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++){
   rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
   if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])rows[i][j]=Math.min(rows[i][j],rows[i-2][j-2]+1);
  }return rows[a.length][b.length];
 }
 function search(value,type,min=3){
  const query=key(value);if(!query)return [];
  // Exact known abbreviations such as MG and MS work before three letters.
  if((String(value).match(/\p{L}/gu)||[]).length<min)return lists[type].filter(a=>[a.term,...a.aliases||[]].some(name=>key(name)===query));
  function rank(a){
   const item=searchIndex.get(a.id),name=item.name;
   if(name===query)return 0;if(name.startsWith(query))return 1;
   if(item.aliases.includes(query))return 2;
   if(item.aliases.some(v=>v.startsWith(query)))return 3;
   if(name.includes(query))return 4;
   if(item.aliases.some(v=>v.includes(query)))return 5;
   if(query.length>=5&&query.length<=64){const limit=query.length>=12?2:1;for(const value of [name,...item.aliases]){
    if(distance(query,value.slice(0,query.length))<=limit||Math.abs(query.length-value.length)<=limit&&distance(query,value)<=limit)return 6;
   }}
   if(item.descriptions.some(v=>v.includes(query)))return 7;
   return Infinity;
  }
  return lists[type].map(a=>({a,score:rank(a)})).filter(x=>Number.isFinite(x.score)).sort((a,b)=>a.score-b.score||a.a.term.localeCompare(b.a.term)).map(x=>x.a);
 }
 const legacy={
  'Prior ischemic stroke':['Ischemic stroke'], 'Acquired brain injury':['Traumatic brain injury'], 'Brain infection':['Brain abscess','Infectious encephalitis'], 'Possible action tremor':['Tremor'], 'Possible loss of muscle bulk':['Muscle atrophy'], 'Hand clumsiness':['Impaired fine motor control'], 'Fatigable limb weakness':['Motor fatigability'], 'Photosensitivity':['Cutaneous photosensitivity'],
  'Hand or arm weakness':['Weakness'],'unilateral arm weakness':['Weakness'],'unilateral leg weakness':['Weakness'],'proximal muscle weakness':['Weakness'],
  'median or ulnar neuropathy':['Median neuropathy','Ulnar neuropathy'],
  'alcohol or sedative intoxication':['Alcohol intoxication','Sedative medication effect'],
  'Intracranial mass':['Intracranial mass','Brain tumor'],
  'Right-hemisphere mass lesion':['Intracranial mass','Brain tumor'],
  'Stroke':['Stroke','Ischemic stroke','Large-artery atherosclerotic stroke','Cardioembolic stroke','Lacunar stroke','Watershed stroke','Cryptogenic stroke','Hemorrhagic stroke','Intracerebral hemorrhage','Subarachnoid hemorrhage','Prior stroke with residual deficits']
 };
 const legacyIndex=new Map(Object.entries(legacy).map(([k,v])=>[key(k),v]));
 function canonicalId(id){return data.retiredIds?.[id]||id}
 function expandApprovedIds(ids,type='disease'){
  const out=new Set(ids.map(canonicalId).filter(id=>byId.get(id)?.type===type));
  for(const group of data.approvalGroups||[])if(group.some(id=>out.has(id)))for(const id of group)if(byId.get(id)?.type===type)out.add(id);
  return [...out];
 }
 function approvedIds(a){
  if(Array.isArray(a.referenceIds))return expandApprovedIds(a.referenceIds,a.type);
  const migrated=data.legacyBindings?.[a.type+':'+key(a.term)];
  if(migrated)return expandApprovedIds(migrated,a.type);
  const names=legacyIndex.get(key(a.term))||[a.term];
  return expandApprovedIds(names.map(name=>resolve(name,a.type)?.id).filter(Boolean),a.type);
 }
 function approved(stage,type){
  const out=new Map();(stage.accepted||[]).forEach((answer,i)=>{if(!types.includes(answer.type)||(type&&answer.type!==type))return;for(const id of approvedIds(answer))if(!out.has(id))out.set(id,{id,i,entry:byId.get(id),answer})});return [...out.values()];
 }
 function progress(stage,p){
  if(!Array.isArray(p.catalogFound))p.catalogFound=[...new Set((p.matches||[]).flatMap(i=>{const a=stage.accepted[i];return a?approvedIds(a).slice(0,1):[]}))];
  p.catalogFound=[...new Set(p.catalogFound.map(id=>data.retiredIds?.[id]||id))];
  const valid=new Set(approved(stage).map(a=>a.id));return [...new Set(p.catalogFound.filter(id=>valid.has(id)))];
 }
 function unknown(stage){return (stage.accepted||[]).filter(a=>types.includes(a.type)&&!approvedIds(a).length).map(a=>a.term)}
 function validateConfig(config){const unknownTerms=[];for(const c of config.clues||[])for(const s of c.stages||[])unknownTerms.push(...unknown(s));for(const set of config.suspectSets||[])for(const p of (set.people||[]).filter(p=>p.observable!==false))for(const [field,type] of [['symptoms','symptom'],['diagnoses','disease']])for(const a of p[field]||[])if(!['observation','context'].includes(a.type)&&!approvedIds({...a,type}).length)unknownTerms.push(a.term);return [...new Set(unknownTerms)]}
 function prepareConfig(config){
  function stage(stage){
   for(const answer of stage.accepted||[]){
    if(answer.type==='observation'){const descriptions={'Corticosteroid use':'The bottle is labeled prednisone, a corticosteroid.','Antiplatelet and statin use':'Dr. Emerald’s pouch contains aspirin and atorvastatin.','Investigation of a possible focal lesion':'Dr. Silver mentions a navigation scan, a procedure, and pending sample results.','Abrupt illness followed by partial recovery':'Dr. Emerald mentions an emergency admission and a phased return to work.'};answer.info=descriptions[answer.legacyTerm||answer.term]||answer.info;}
    if(!types.includes(answer.type))continue;
    const original=answer.legacyTerm||answer.term;
    const observation=['Corticosteroid use','Antiplatelet and statin use','Investigation of a possible focal lesion','Abrupt illness followed by partial recovery'].includes(original);
    if(observation){answer.type='observation';answer.referenceIds=[];const descriptions={'Corticosteroid use':'The bottle is labeled prednisone, a corticosteroid.','Antiplatelet and statin use':'Dr. Emerald’s pouch contains aspirin and atorvastatin.','Investigation of a possible focal lesion':'Dr. Silver mentions a navigation scan, a procedure, and pending sample results.','Abrupt illness followed by partial recovery':'Dr. Emerald mentions an emergency admission and a phased return to work.'};answer.info=descriptions[original];continue;}
    const contextual=['Coronary artery disease','Inflammatory brain lesion','Enhanced physiologic tremor','Drug-induced photosensitivity'].includes(original);
    if(contextual){answer.type='context';answer.referenceIds=[];continue;}
    const ids=approvedIds(answer);answer.referenceIds=ids;
    if(ids.length){answer.legacyTerm=original;answer.term=byId.get(ids[0]).term;delete answer.aliases;}
   }
   const observations=(stage.accepted||[]).filter(a=>a.type==='observation');
   if(observations.length&&!approved(stage,'symptom').length){stage.observationOnly=true;stage.observationText=observations.map(a=>a.info||a.term).join(' ');stage.symptomsNeeded=0;stage.symptomStarThreshold=0;}
  }
  for(const clue of config.clues||[])for(const item of clue.stages||[])stage(item);
  for(const set of config.suspectSets||[])for(const person of set.people||[]){
   if(person.observable===false)continue;
   const item={accepted:[...(person.symptoms||[]),...(person.diagnoses||[])]};stage(item);
   if(item.observationOnly){person.observationOnly=true;person.observationText=item.observationText;person.symptomsNeeded=0;person.symptomStarThreshold=0;}
  }
  config.suggestionsAfter=3;return config;
 }
 return {data,key,byId,lists,resolve,search,canonicalId,expandApprovedIds,approvedIds,approved,progress,unknown,validateConfig,prepareConfig};
})();

function renderReference(target=$('#referencePanelContent')){
 target.innerHTML=`<div class="reference-tools card"><label class="field-label" for="referenceSearch">SEARCH THE REFERENCE</label><input id="referenceSearch" class="text-input" type="search" placeholder="Search a name or description" autocomplete="off"><div class="reference-filters"><label>Show<select id="referenceType"><option value="all">All entries</option><option value="symptom">Symptoms &amp; signs</option><option value="disease">Diagnoses</option></select></label><label>Category<select id="referenceCategory"><option value="all">All categories</option></select></label></div></div><p id="referenceCount" class="small-status" role="status"></p><div id="referenceResults"></div><details class="reference-sources card"><summary>Sources</summary><ul>${Object.values(DDReference.data.sources).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join('')}</ul></details>`;
 const search=$('#referenceSearch'),type=$('#referenceType'),category=$('#referenceCategory');
 function categories(){const selected=category.value;const values=[...new Set(DDReference.data.items.filter(a=>type.value==='all'||a.type===type.value).map(a=>a.category))].sort();category.innerHTML='<option value="all">All categories</option>'+values.map(c=>`<option>${esc(c)}</option>`).join('');if(values.includes(selected))category.value=selected}
 function update(){
  const q=DDReference.key(search.value),matched=new Set(q?['symptom','disease'].flatMap(t=>DDReference.search(search.value,t,1).map(a=>a.id)):[]);
  const entries=DDReference.data.items.filter(a=>(type.value==='all'||a.type===type.value)&&(category.value==='all'||a.category===category.value)&&(!q||matched.has(a.id)));
  $('#referenceCount').textContent=`${entries.length} ${entries.length===1?'entry':'entries'} · ${DDReference.lists.symptom.length} symptoms & signs · ${DDReference.lists.disease.length} diagnoses`;
  $('#referenceResults').innerHTML=entries.length?['symptom','disease'].map(t=>{const list=entries.filter(a=>a.type===t);if(!list.length)return '';return `<section class="reference-type"><h3>${t==='symptom'?'Symptoms & signs':'Diagnoses'}</h3>${[...new Set(list.map(a=>a.category))].map(c=>`<section class="reference-group"><h4>${esc(c)}</h4><dl>${list.filter(a=>a.category===c).sort((a,b)=>a.term.localeCompare(b.term)).map(a=>`<div class="reference-entry"><dt>${esc(a.term)}</dt><dd>${esc(a.description)}${a.subtypes?.length?`<section class="reference-subtypes"><h5>${esc(a.subtypeLabel||'Types and related terms')}</h5><ul>${a.subtypes.map(item=>`<li><strong>${esc(item.name)}</strong> — ${esc(item.description)}</li>`).join('')}</ul></section>`:''}</dd></div>`).join('')}</dl></section>`).join('')}</section>`}).join(''):'<p class="card reference-empty">No matching entries. Try another term or clear a filter.</p>';
 }
 categories();update();search.oninput=update;type.onchange=()=>{categories();update()};category.onchange=update;

}

let referenceReturnFocus=null;
function openReference(){
 closeNotes();
 const drawer=$('#referenceDrawer');if(!drawer||drawer.open)return;
 referenceReturnFocus=document.activeElement;
 if(!$('#referenceSearch'))renderReference();
 drawer.showModal();
 document.querySelectorAll('[data-reference-open]').forEach(b=>b.setAttribute('aria-expanded','true'));
 $('#referenceSearch').focus();
}
function closeReference(){const drawer=$('#referenceDrawer');if(drawer?.open)drawer.close();}
function initReferencePanel(){
 const drawer=$('#referenceDrawer');if(!drawer||drawer.dataset.initialized)return;
 drawer.dataset.initialized='true';
 document.addEventListener('click',e=>{if(e.target.closest('[data-reference-open]')){e.preventDefault();openReference();}});
 $('#closeReference').onclick=closeReference;
 drawer.addEventListener('click',e=>{if(e.target===drawer){const b=drawer.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)closeReference();}});
 drawer.addEventListener('close',()=>{document.querySelectorAll('[data-reference-open]').forEach(b=>b.setAttribute('aria-expanded','false'));if(!document.querySelector('dialog[open]')&&referenceReturnFocus?.isConnected)referenceReturnFocus.focus();});
}

let notesReturnFocus=null;
function openNotes(){
 const drawer=$('#notesDrawer');if(!drawer||drawer.open)return;
 closeReference();notesReturnFocus=document.activeElement;
 $('#sideCaseNotes').value=state.notes||'';
 $('#sideNotesStatus').textContent='Saved on this device.';
 drawer.showModal();
 document.querySelectorAll('[data-notes-open]').forEach(b=>b.setAttribute('aria-expanded','true'));
 $('#sideCaseNotes').focus();
}
function closeNotes(){const drawer=$('#notesDrawer');if(drawer?.open)drawer.close();}
function initNotesPanel(){
 const drawer=$('#notesDrawer');if(!drawer||drawer.dataset.initialized)return;drawer.dataset.initialized='true';
 document.addEventListener('click',e=>{if(e.target.closest('[data-notes-open]')){e.preventDefault();openNotes();}});
 $('#closeNotes').onclick=closeNotes;
 $('#sideCaseNotes').oninput=()=>{state.notes=$('#sideCaseNotes').value;try{save();$('#sideNotesStatus').textContent='Saved on this device.'}catch{$('#sideNotesStatus').textContent='Storage is full. Copy your notes somewhere safe before leaving this page.'}};
 drawer.addEventListener('click',e=>{if(e.target===drawer){const b=drawer.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)closeNotes();}});
 drawer.addEventListener('close',()=>{document.querySelectorAll('[data-notes-open]').forEach(b=>b.setAttribute('aria-expanded','false'));if(!document.querySelector('dialog[open]')&&notesReturnFocus?.isConnected)notesReturnFocus.focus();});
}
