const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const rootPath=path.resolve(__dirname,'..'),events=[];
function node(){const children=new Map();return {value:'',innerHTML:'',hidden:false,events:{},attrs:{},querySelector(s){if(!children.has(s))children.set(s,node());return children.get(s)},querySelectorAll(){return []},addEventListener(name,fn){this.events[name]=fn},setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]},focus(){this.focused=true},contains(){return false},scrollIntoView(){},requestSubmit(){this.onsubmit({preventDefault(){}})}}}
let activeRoot;const c={window:{},config:null,state:{},debugMode:false,save(){},render(){},toast(){},answerCard:a=>a.term,esc:v=>String(v??''),setTimeout(){},DDLog:{event:(kind,data)=>events.push({kind,...data})},document:{visibilityState:'visible',querySelector:s=>activeRoot.querySelector(s),activeElement:null}};vm.createContext(c);
for(const file of ['answer-matrix.js','case-config.js','reference-data.js','reference.js','symptom-details.js','play-flow.js'])vm.runInContext(fs.readFileSync(path.join(rootPath,file),'utf8'),c);
c.DDReference=c.window.DDReference;c.config=c.window.CASE_CONFIG;c.DDReference.prepareConfig(c.config);
const ref=c.DDReference,details=c.window.DDSymptomDetails,weak=ref.byId.get('s-weakness'),neck=c.config.clues[0].stages[0];
assert.equal(details.resolve('unilateral arm weakness').id,'s-weakness');assert.equal(details.resolve('leg pain').id,'s-extremity-pain');
assert(!details.validate(weak,{},neck).complete);
assert(details.validate(weak,{side:'right',region:'upper'},neck).valid);
assert(!details.validate(weak,{side:'right',region:'lower'},neck).valid);
assert(details.validate(weak,{side:'bilateral',region:'upper'},neck).valid);
assert(details.validate(weak,{side:'asymmetric_bilateral',region:'upper'},neck).valid);
assert(details.validate(weak,{side:'right',region:'lower'},c.config.clues[1].stages[0]).valid);
const photo=c.config.suspectSets.find(s=>s.id==='reception').people.find(p=>p.id==='E'),ptosis=ref.byId.get('s-ptosis');
assert(details.validate(ptosis,{side:'bilateral'},photo).valid);assert(!details.validate(ptosis,{side:'right'},photo).valid);
assert(details.validate(ref.byId.get('s-visual-field-loss'),{side:'right'},c.config.clues[2].stages[0]).valid);
assert.deepEqual(Array.from(details.fields(ref.byId.get('s-headache'))),[]);
// UI submission cannot grade a localized answer before its secondary selections.
activeRoot=node();const progress={};c.mountFlow(activeRoot,neck,progress,{section:'culprit',clue:'The Neck'});
const input=activeRoot.querySelector('#flow-symptom'),form=activeRoot.querySelector('[data-flow-form="symptom"]');input.value='Weakness';input.events.input();
assert(!form.querySelector('[data-symptom-details]').hidden);assert(form.querySelector('[data-symptom-details]').innerHTML.includes('required'));
form.requestSubmit();assert.equal(events.length,0);assert(!progress.catalogFound.includes('s-weakness'));
form.querySelector('[data-detail="side"]').value='right';form.querySelector('[data-detail="region"]').value='lower';form.requestSubmit();assert.equal(events.at(-1).result,'incorrect');assert.equal(events.at(-1).reason,'region_mismatch');assert(!progress.catalogFound.includes('s-weakness'));
form.querySelector('[data-detail="region"]').value='upper';form.requestSubmit();assert.equal(events.at(-1).result,'correct');assert.equal(events.at(-1).symptomDetails.region,'upper');assert.equal(progress.symptomDetails['s-weakness'].side,'right');assert.equal(progress.catalogFound.filter(id=>id==='s-weakness').length,1);
activeRoot=node();c.mountFlow(activeRoot,neck,progress,{section:'culprit',clue:'The Neck'});const again=activeRoot.querySelector('#flow-symptom'),againForm=activeRoot.querySelector('[data-flow-form="symptom"]');again.value='Weakness';again.events.input();againForm.querySelector('[data-detail="side"]').value='bilateral';againForm.querySelector('[data-detail="region"]').value='upper';againForm.requestSubmit();assert.equal(events.at(-1).result,'repeated');assert.equal(progress.catalogFound.filter(id=>id==='s-weakness').length,1);
for(const id of ['s-inflammation','s-extensor-plantar-response','d-intracranial-mass'])assert(!ref.byId.has(id));
assert.equal(ref.resolve('Arm pain','symptom').term,'Extremity pain');assert.equal(ref.resolve('Intracranial mass','disease'),null);
console.log('PASS: required secondary selections, arm/leg and side matching, asymmetric bilateral ptosis, qualifier logs/persistence, no duplicate credit and retired entries.');

// Every approved symptom in the built default case has a valid distribution.
const {buildDefaultCase}=require('../scripts/build-default-case.cjs');vm.runInContext(buildDefaultCase(),c);
for(const screen of c.window.DDAnswerMatrix.cases(c.window.CASE_CONFIG))for(const item of ref.approved(screen.stage,'symptom')){
 let possible=false;for(const [side] of details.sides)for(const [region] of details.regions)if(details.validate(item.entry,{side,region},screen.stage).valid)possible=true;
 assert(possible,screen.code+' has no valid distribution for '+item.entry.term);
}

assert.equal(details.resolve('unilateral leg pain').id,'s-extremity-pain');assert.equal(c.flowSuggestions('unilateral arm weakness',[],'symptom')[0].a.id,'s-weakness');

for(const id of ['s-coma','s-visual-loss','s-reduced-foot-clearance','s-sensory-loss'])assert(!ref.byId.has(id));
assert.equal(ref.resolve('sensory loss','symptom'),null);
for(const id of ['s-reduced-touch-sensation','s-reduced-pain-sensation','s-reduced-temperature-sensation','s-impaired-proprioception'])assert(ref.search('sensory loss','symptom').some(a=>a.id===id));
for(const screen of c.window.DDAnswerMatrix.cases(c.window.CASE_CONFIG))assert(!ref.approved(screen.stage,'symptom').some(a=>['s-reduced-pain-sensation','s-reduced-temperature-sensation'].includes(a.id)));
for(const i of [0,1,2])assert(ref.approved(c.window.CASE_CONFIG.clues[i].stages[0],'symptom').some(a=>a.id==='s-reduced-touch-sensation'));
const oldSensory={catalogFound:['s-sensory-loss']};assert.equal(ref.progress(c.window.CASE_CONFIG.clues[0].stages[0],oldSensory).length,0);

assert.deepEqual(Array.from(details.sides, v=>v[0]),['right','left','bilateral']);
assert.deepEqual(Array.from(details.regions, v=>v[0]),['upper','lower']);
const voice=c.window.CASE_CONFIG.clues[3].stages[0];
assert.deepEqual(Array.from(details.fields(ref.byId.get('s-motor-fatigability'),voice)),[]);
assert.deepEqual(Array.from(details.fields(ref.byId.get('s-motor-fatigability'),photo)),[]);
assert(!details.fields(ref.byId.get('s-facial-weakness')).includes('region'));
assert(!details.fields(ref.byId.get('s-bulbar-weakness')).includes('region'));
assert.notEqual(ref.byId.get('s-facial-weakness').id,ref.byId.get('s-bulbar-weakness').id);
assert(!details.validate(weak,{side:'unspecified',region:'upper'},neck).valid);
assert(!details.validate(weak,{side:'right',region:'generalized'},neck).valid);

for(const id of ['s-chorea','s-tremor','s-dystonia','s-myoclonus','s-tics','s-bradykinesia','s-motor-fatigability','s-ataxia','s-hypertonia'])assert.deepEqual(Array.from(details.fields(ref.byId.get(id))),[],id);
const yearly=c.window.CASE_CONFIG.suspectSets.find(s=>s.id==='interview-notes').people[0];
assert(details.validate(ref.byId.get('s-hemispatial-neglect'),{side:'left'},yearly).valid);
assert(!details.validate(ref.byId.get('s-hemispatial-neglect'),{side:'right'},yearly).valid);
assert(details.validate(weak,{side:'left',region:'upper'},neck).valid);
assert(!details.validate(weak,{side:'unilateral',region:'upper'},neck).valid);
