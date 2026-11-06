const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),vm=require('node:vm'),XLSX=require('xlsx');
const {buildDefaultCase}=require('../scripts/build-default-case.cjs');
const root=path.resolve(__dirname,'..'),source=fs.readFileSync(path.join(root,'case-config.js'),'utf8'),temp=fs.mkdtempSync(path.join(os.tmpdir(),'dd-workbook-'));
function configFrom(source){const ctx={window:{}};vm.createContext(ctx);vm.runInContext(source,ctx);return ctx.window.CASE_CONFIG}
try {
 const initial=configFrom(buildDefaultCase());assert.equal(initial.answerMatrixVersion,1);assert.equal(initial.suspectSets.length,5);assert.ok(initial.suspectSets[4].video.src);assert.equal(initial.caseResolution.culpritId,'A');
 // The default artifact contains the reviewed clinical approvals, not stale JS lists.
 const approved=(stage,id)=>stage.accepted.some(a=>a.referenceIds?.includes(id));
 assert(approved(initial.clues[4].stages[0],'d-dermatomyositis'));
 assert(approved(initial.clues[4].stages[0],'d-peripheral-neuropathy')); // CIDP is a steroid-responsive subtype.
 assert(!approved(initial.clues[4].stages[0],'d-guillain-barr-syndrome'));
 assert(!approved(initial.clues[4].stages[0],'d-inclusion-body-myositis'));
 assert(!initial.clues[4].stages[0].accepted.some(a=>a.type==='symptom'));
 assert(!approved(initial.clues[3].stages[0],'d-transverse-myelitis'));
 const yearly=initial.suspectSets.find(s=>s.id==='interview-notes').people[0];
 assert(!yearly.diagnoses.some(a=>a.referenceIds?.includes('d-transverse-myelitis')));
 const hand=initial.suspectSets.find(s=>s.id==='reception').people.find(p=>p.id==='D');
 assert(!hand.diagnoses.some(a=>a.referenceIds?.includes('d-radial-neuropathy')));
 const eyelid=initial.suspectSets.find(s=>s.id==='reception').people.find(p=>p.id==='E');
 assert(!eyelid.diagnoses.some(a=>a.referenceIds?.includes('d-amyotrophic-lateral-sclerosis')));
 const workbook=XLSX.readFile(path.join(root,'Deadly_Differential_Answer_Matrix.xlsx')),sheet=workbook.Sheets.Symptoms,rows=XLSX.utils.sheet_to_json(sheet,{header:1,defval:''});
 const row=rows.findIndex((r,i)=>i>4&&r[5]==='No'),id=rows[row][0];sheet[XLSX.utils.encode_cell({r:row,c:5})]={t:'s',v:'Yes'};
 const edited=path.join(temp,'edited.xlsx');XLSX.writeFile(workbook,edited);
 const compiled=configFrom(buildDefaultCase(edited));assert.ok(compiled.clues[0].stages[0].accepted.some(a=>a.referenceIds?.includes(id)));
 sheet[XLSX.utils.encode_cell({r:row,c:5})]={t:'s',v:'Maybe'};XLSX.writeFile(workbook,edited);assert.throws(()=>buildDefaultCase(edited),/Yes or No/);
 assert.equal(fs.readFileSync(path.join(root,'case-config.js'),'utf8'),source);
 console.log('PASS: repository workbook compiles by default; edited approvals reach the generated case, invalid edits fail and source content stays intact.');
} finally {fs.rmSync(temp,{recursive:true,force:true})}
