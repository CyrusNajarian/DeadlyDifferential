const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),nodes=new Map();
const $=id=>{if(!nodes.has(id))nodes.set(id,{value:'',innerHTML:'',textContent:''});return nodes.get(id)};
const ctx={window:{},$,esc:s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))};vm.createContext(ctx);
for(const f of ['reference-data.js','reference.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
ctx.DDReference=ctx.window.DDReference;const ref=ctx.DDReference;
for(const [query,type,id,name] of [
 ['freidrechs ataxia','disease','d-cerebellar-disorder','Cerebellar dysfunction'],
 ["Friedreich's ataxia",'disease','d-cerebellar-disorder','Cerebellar dysfunction'],
 ['fiedreich ataxia','disease','d-cerebellar-disorder','Cerebellar dysfunction'],
 ['spinocerebellar','disease','d-cerebellar-disorder','Cerebellar dysfunction'],
 ['cardioembolic stroke','disease','d-ischemic-stroke','Ischemic stroke'],
 ['lacunar stroke','disease','d-ischemic-stroke','Ischemic stroke'],
 ['status epilepticus','disease','d-epilepsy','Epilepsy'],
 ['focal seizures','disease','d-epilepsy','Epilepsy'],
 ['generalized seizures','disease','d-epilepsy','Epilepsy'],
 ['postictal deficit','disease','d-epilepsy','Epilepsy'],
 ['paralysis','symptom','s-weakness','Weakness'],
 ['slurred speech','symptom','s-dysarthria','Dysarthria'],
 ['MG','disease','d-myasthenia-gravis','Myasthenia gravis'],
 ['MS','disease','d-multiple-sclerosis','Multiple sclerosis']
]){
 const entries=ref.search(query,type);assert.equal(entries[0]?.id,id,query);assert.equal(entries[0].term,name);assert.equal(new Set(entries.map(a=>a.id)).size,entries.length);
 assert.equal(ref.resolve(entries[0].term,type).id,id);
}
assert.equal(ref.resolve('fiedreich ataxia','disease'),null); // A typo suggests; selection submits the canonical term.
assert.equal(ref.search('at','symptom').length,0);assert.equal(ref.search('','disease').length,0);
for(const id of ['d-friedreich-ataxia','d-spinocerebellar-ataxia','d-cardioembolic-stroke','d-lacunar-stroke','s-paralysis'])assert(!ref.byId.has(id));
for(const [id,canonical] of Object.entries(ref.data.retiredIds))assert.equal(ref.canonicalId(id),canonical);
$('#referenceType').value='all';$('#referenceCategory').value='all';
ctx.renderReference($('#referencePanelContent'));
assert($('#referenceResults').innerHTML.includes('<dt>Cerebellar dysfunction</dt>'));
assert(!$('#referenceResults').innerHTML.includes('<dt>Friedreich ataxia</dt>'));
assert($('#referenceResults').innerHTML.includes('<strong>Friedreich ataxia</strong>'));
for(const term of ['Focal seizures','Generalized seizures','Status epilepticus','Postictal neurologic deficit'])assert($('#referenceResults').innerHTML.includes(`<strong>${term}</strong>`));
$('#referenceSearch').value='freidrechs ataxia';$('#referenceSearch').oninput();assert($('#referenceResults').innerHTML.includes('<dt>Cerebellar dysfunction</dt>'));assert(!$('#referenceResults').innerHTML.includes('<dt>Epilepsy</dt>'));
$('#referenceSearch').value='status epilepticus';$('#referenceSearch').oninput();assert($('#referenceResults').innerHTML.includes('<dt>Epilepsy</dt>'));
console.log('PASS: synonym/subtype/typo suggestions, short abbreviations, canonical submission names, retired IDs and nested searchable reference types.');
