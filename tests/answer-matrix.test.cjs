const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['case-config.js','reference-data.js','reference.js','case-resolution-data.js','answer-matrix.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const w=ctx.window,ref=w.DDReference,matrix=w.DDAnswerMatrix;
// Read the real distributable workbook, not a hand-built imitation.
const sheets=JSON.parse(fs.readFileSync(0,'utf8'));
const wb={Sheets:sheets},XLSX={utils:{sheet_to_json:s=>s}},copy=v=>JSON.parse(JSON.stringify(v));
const original=copy(w.CASE_CONFIG),roundtrip=matrix.parse(wb,XLSX),prepared=ref.prepareConfig(copy(original));
assert.equal(sheets.Symptoms.length-5,95);assert.equal(sheets.Diagnoses.length-5,118);assert.equal(matrix.cases(roundtrip).length,19);
for(const [i,screen] of matrix.cases(prepared).entries())for(const type of ['symptom','disease'])assert.deepEqual([...ref.approved(matrix.cases(roundtrip)[i].stage,type).map(a=>a.id)].sort(),[...ref.approved(screen.stage,type).map(a=>a.id)].sort());
assert.deepEqual(copy(w.CASE_CONFIG),original);assert.equal(roundtrip.answerMatrixVersion,1);assert.equal(roundtrip.suspectSets[4].video.src,original.suspectSets[4].video.src);assert.equal(roundtrip.caseResolution.culpritId,'A');
// A changed approval actually changes the imported case, retaining the rest of the case.
const edited=copy(wb),col=5,row=edited.Sheets.Symptoms.findIndex((r,i)=>i>4&&r[col]==='No'),id=edited.Sheets.Symptoms[row][0];
edited.Sheets.Symptoms[row][col]='Yes';let changed=matrix.parse(edited,XLSX);assert.ok(ref.approved(changed.clues[0].stages[0],'symptom').some(a=>a.id===id));
const remove=edited.Sheets.Diagnoses.findIndex((r,i)=>i>4&&r[col]==='Yes'),removedId=edited.Sheets.Diagnoses[remove][0];edited.Sheets.Diagnoses[remove][col]='No';changed=matrix.parse(edited,XLSX);assert.ok(!ref.approved(changed.clues[0].stages[0],'disease').some(a=>a.id===removedId));
const bad=copy(wb);bad.Sheets.Symptoms[row][col]='Maybe';assert.throws(()=>matrix.parse(bad,XLSX),/Yes or No/);
const missing=copy(wb);missing.Sheets.Symptoms.pop();assert.throws(()=>matrix.parse(missing,XLSX),/keep every reference/);
const empty=copy(wb);empty.Sheets.Diagnoses.slice(5).forEach(r=>r[col]='No');assert.throws(()=>matrix.parse(empty,XLSX),/keep at least one diagnosis/);
const unknown=copy(wb);unknown.Sheets.Symptoms[5][0]='unknown';assert.throws(()=>matrix.parse(unknown,XLSX),/unknown or duplicate/);
const sorted=copy(wb);sorted.Sheets.Symptoms=[...sorted.Sheets.Symptoms.slice(0,5),...sorted.Sheets.Symptoms.slice(5).reverse()];assert.equal(matrix.parse(sorted,XLSX).answerMatrixVersion,1);
console.log('PASS: real workbook catalog coverage, 19-case roundtrip, editable approvals, preserved evidence/key, sorted rows and invalid-upload rejection.');
