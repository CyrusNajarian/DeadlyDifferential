/* Shared vocabulary. Clue approval is deliberately separate from discovery. */
window.DDReference=(()=>{
 const data=window.NEURO_REFERENCE;
 const key=v=>String(v??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]/g,'');
 const byId=new Map(data.items.map(a=>[a.id,a]));
 const types=['symptom','disease'];
 const lists=Object.fromEntries(types.map(t=>[t,data.items.filter(a=>a.type===t).sort((a,b)=>a.term.localeCompare(b.term))]));
 const index=Object.fromEntries(types.map(t=>{const map=new Map();for(const a of lists[t]){const k=key(a.term);if(!map.has(k))map.set(k,new Set());map.get(k).add(a.id)}return [t,map]}));
 function resolve(value,type){const found=index[type]?.get(key(value));return found?.size===1?byId.get([...found][0]):null}
 function search(value,type,min=3){if((String(value).match(/\p{L}/gu)||[]).length<min)return [];const q=key(value);return lists[type].filter(a=>key(a.term).includes(q))}
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
 function approvedIds(a){
  if(Array.isArray(a.referenceIds))return [...new Set(a.referenceIds.filter(id=>byId.get(id)?.type===a.type))];
  const migrated=data.legacyBindings?.[a.type+':'+key(a.term)];
  if(migrated)return migrated.filter(id=>byId.get(id)?.type===a.type);
  const names=legacyIndex.get(key(a.term))||[a.term];
  return [...new Set(names.map(name=>resolve(name,a.type)?.id).filter(Boolean))];
 }
 function approved(stage,type){
  const out=new Map();(stage.accepted||[]).forEach((answer,i)=>{if(!types.includes(answer.type)||(type&&answer.type!==type))return;for(const id of approvedIds(answer))if(!out.has(id))out.set(id,{id,i,entry:byId.get(id),answer})});return [...out.values()];
 }
 function progress(stage,p){
  if(!Array.isArray(p.catalogFound))p.catalogFound=[...new Set((p.matches||[]).flatMap(i=>{const a=stage.accepted[i];return a?approvedIds(a).slice(0,1):[]}))];
  const valid=new Set(approved(stage).map(a=>a.id));return [...new Set(p.catalogFound.filter(id=>valid.has(id)))];
 }
 function unknown(stage){return (stage.accepted||[]).filter(a=>types.includes(a.type)&&!approvedIds(a).length).map(a=>a.term)}
 function validateConfig(config){const unknownTerms=[];for(const c of config.clues||[])for(const s of c.stages||[])unknownTerms.push(...unknown(s));for(const set of config.suspectSets||[])for(const p of (set.people||[]).filter(p=>p.observable!==false))for(const [field,type] of [['symptoms','symptom'],['diagnoses','disease']])for(const a of p[field]||[])if(!['observation','context'].includes(a.type)&&!approvedIds({...a,type}).length)unknownTerms.push(a.term);return [...new Set(unknownTerms)]}
 function prepareConfig(config){
  function stage(stage){
   for(const answer of stage.accepted||[]){
    if(!types.includes(answer.type))continue;
    const original=answer.legacyTerm||answer.term;
    const observation=['Corticosteroid use','Antiplatelet and statin use','Investigation of a possible focal lesion','Abrupt illness followed by partial recovery'].includes(original);
    if(observation){answer.type='observation';answer.referenceIds=[];continue;}
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
 return {data,key,byId,lists,resolve,search,approvedIds,approved,progress,unknown,validateConfig,prepareConfig};
})();

function renderReference(){
 $('#clueNav').hidden=true;
 $('#roundContent').innerHTML=`<span class="eyebrow">ALWAYS AVAILABLE</span><h2 class="section-title">Neurology reference</h2><p class="section-copy">Browse symptoms, signs, and possible diagnoses. This list is the same for every clue and does not mark correct answers.</p><div class="reference-tools card"><label class="field-label" for="referenceSearch">SEARCH THE REFERENCE</label><input id="referenceSearch" class="text-input" type="search" placeholder="Search a name or description" autocomplete="off"><div class="reference-filters"><label>Show<select id="referenceType"><option value="all">All entries</option><option value="symptom">Symptoms &amp; signs</option><option value="disease">Diagnoses</option></select></label><label>Category<select id="referenceCategory"><option value="all">All categories</option></select></label></div></div><p id="referenceCount" class="small-status" role="status"></p><div id="referenceResults"></div><details class="reference-sources card"><summary>Sources and terminology</summary><p>Brief definitions are summarized from the clinical sources below. The selection and grouping are curated for this game; this is not an exhaustive disease classification. Broad diagnostic categories and related non-neurologic alternatives are labeled in the list.</p><p>Stroke labels may describe a cause, bleeding location, or prior injury and can overlap. Subtypes remain separate entries. Symptoms and signs include examination findings; descriptions do not identify a diagnosis for a clue.</p><ul>${Object.values(DDReference.data.sources).map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join('')}</ul><p>Reviewed ${esc(DDReference.data.reviewed)}.</p></details><a class="text-button reference-back" href="${esc(state.lastInvestigationRoute||'#culprit/0/0')}">${state.team?'Return to clue':'Back to case'}</a>`;
 const search=$('#referenceSearch'),type=$('#referenceType'),category=$('#referenceCategory');
 function categories(){const selected=category.value;const values=[...new Set(DDReference.data.items.filter(a=>type.value==='all'||a.type===type.value).map(a=>a.category))].sort();category.innerHTML='<option value="all">All categories</option>'+values.map(c=>`<option>${esc(c)}</option>`).join('');if(values.includes(selected))category.value=selected}
 function update(){
  const q=DDReference.key(search.value);
  const entries=DDReference.data.items.filter(a=>(type.value==='all'||a.type===type.value)&&(category.value==='all'||a.category===category.value)&&(!q||[a.term,a.description].some(v=>DDReference.key(v).includes(q))));
  $('#referenceCount').textContent=`${entries.length} ${entries.length===1?'entry':'entries'} · ${DDReference.lists.symptom.length} symptoms & signs · ${DDReference.lists.disease.length} diagnoses`;
  $('#referenceResults').innerHTML=entries.length?['symptom','disease'].map(t=>{const list=entries.filter(a=>a.type===t);if(!list.length)return '';return `<section class="reference-type"><h3>${t==='symptom'?'Symptoms & signs':'Diagnoses'}</h3>${[...new Set(list.map(a=>a.category))].map(c=>`<section class="reference-group"><h4>${esc(c)}</h4><dl>${list.filter(a=>a.category===c).sort((a,b)=>a.term.localeCompare(b.term)).map(a=>`<div class="reference-entry"><dt>${esc(a.term)}</dt><dd>${esc(a.description)}</dd></div>`).join('')}</dl></section>`).join('')}</section>`}).join(''):'<p class="card reference-empty">No matching entries. Try another term or clear a filter.</p>';
 }
 categories();update();search.oninput=update;type.onchange=()=>{categories();update()};category.onchange=update;
 DDLog?.screen('reference',{section:'reference',clue:'Reference',stage:'Reference'});
}
