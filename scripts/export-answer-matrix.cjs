// Machine-readable export used by build-answer-workbook.py.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const name of ['case-config.js','reference-data.js','reference.js','case-resolution-data.js','answer-matrix.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx);
const w=ctx.window,config=JSON.parse(JSON.stringify(w.CASE_CONFIG)),ref=w.DDReference;ref.prepareConfig(config);
const cases=w.DDAnswerMatrix.cases(config).map(c=>({code:c.code,label:c.label,detail:c.detail,section:c.section,observationOnly:!!c.stage.observationOnly,symptoms:ref.approved(c.stage,'symptom').map(a=>a.id),diagnoses:ref.approved(c.stage,'disease').map(a=>a.id)}));
const roster=config.suspectSets.find(s=>s.id==='reception').people;
console.log(JSON.stringify({items:ref.data.items,cases,key:roster.map(p=>({name:p.name,id:p.id,primary:w.CASE_RESOLUTION.suspectDiagnoses[p.id],accepted:w.CASE_RESOLUTION.suspectAcceptedIds?.[p.id]||[w.CASE_RESOLUTION.suspectDiagnoses[p.id]]}))}));
