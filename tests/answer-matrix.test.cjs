const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['case-config.js','reference-data.js','reference.js','case-resolution-data.js','answer-matrix.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const w=ctx.window,ref=w.DDReference,matrix=w.DDAnswerMatrix;
// Read the real distributable workbook, not a hand-built imitation.
const sheets=JSON.parse(fs.readFileSync(0,'utf8'));
const wb={Sheets:sheets},XLSX={utils:{sheet_to_json:s=>s}},copy=v=>JSON.parse(JSON.stringify(v));
const original=copy(w.CASE_CONFIG),roundtrip=matrix.parse(wb,XLSX),prepared=ref.prepareConfig(copy(original));
assert.equal(sheets.Symptoms.length-5,ref.lists.symptom.length);assert.equal(sheets.Diagnoses.length-5,ref.lists.disease.length);assert.equal(matrix.cases(roundtrip).length,19);
for(const screen of matrix.cases(roundtrip))for(const [sheetName,type] of [['Symptoms','symptom'],['Diagnoses','disease']]){
 const rows=sheets[sheetName],col=rows[4].findIndex(h=>String(h).startsWith(screen.code+' | '));
 const expected=ref.expandApprovedIds(rows.slice(5).filter(row=>row[col]==='Yes').map(row=>row[0]),type);
 assert.deepEqual([...ref.approved(screen.stage,type).map(a=>a.id)].sort(),[...expected].sort());
}
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
const legacy=copy(wb),cerebellar=legacy.Sheets.Diagnoses.find(r=>r[0]==='d-cerebellar-disorder');cerebellar[5]='No';legacy.Sheets.Diagnoses.push([...cerebellar]);legacy.Sheets.Diagnoses.at(-1)[0]='d-friedreich-ataxia';legacy.Sheets.Diagnoses.at(-1)[5]='Yes';const migrated=matrix.parse(legacy,XLSX);assert(ref.approved(migrated.clues[0].stages[0],'disease').some(a=>a.id==='d-cerebellar-disorder'));
console.log('PASS: real workbook catalog coverage, 19-case roundtrip, editable approvals, preserved evidence/key, sorted rows and invalid-upload rejection.');

const withRemoved=copy(wb);for(const [sheet,id] of [['Diagnoses','d-intracranial-mass'],['Symptoms','s-inflammation'],['Symptoms','s-extensor-plantar-response']]){const row=[...withRemoved.Sheets[sheet][5]];row[0]=id;row[5]='Yes';withRemoved.Sheets[sheet].push(row)}
const withoutRemoved=matrix.parse(withRemoved,XLSX);for(const screen of matrix.cases(withoutRemoved))assert(!screen.stage.accepted.some(a=>a.referenceIds?.some(id=>ref.data.removedIds.includes(id))));

const broadLegacy=copy(wb);broadLegacy.Sheets.Symptoms=broadLegacy.Sheets.Symptoms.filter(r=>!['s-reduced-touch-sensation','s-reduced-pain-sensation','s-reduced-temperature-sensation'].includes(r[0]));const oldRow=[...wb.Sheets.Symptoms[5]];oldRow[0]='s-sensory-loss';oldRow[5]='Yes';broadLegacy.Sheets.Symptoms.push(oldRow);const split=matrix.parse(broadLegacy,XLSX);assert(!ref.approved(split.clues[0].stages[0],'symptom').some(a=>a.id.startsWith('s-reduced-')&&a.id.endsWith('-sensation')));
