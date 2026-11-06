/* Shared Excel export/import schema. The checked-in workbook supplies approvals; case-config.js supplies clue content. */
window.DDAnswerMatrix=(()=>{
 const prefixes={'reception':'R','team-room':'T','interview-notes':'Y','emails':'E','conference-recording':'V'};
 function cases(config){
  const out=[];
  config.clues.forEach((clue,ci)=>clue.stages.forEach((stage,si)=>out.push({code:`C${String(ci+1).padStart(2,'0')}${clue.stages.length>1?'-'+(si+1):''}`,label:clue.title,detail:stage.title,section:'culprit',ci,si,stage})));
  for(const set of config.suspectSets)for(const person of set.people.filter(p=>p.observable!==false))out.push({code:`${prefixes[set.id]||set.id}-${person.id}`,label:set.label||set.title,detail:person.name,section:'suspects',setId:set.id,personId:person.id,stage:{...person,accepted:[...person.symptoms,...person.diagnoses]}});
  return out;
 }
 const header=c=>`${c.code} | ${c.label} | ${c.detail}`;
 function parse(workbook,XLSX){
  const ref=window.DDReference,config=JSON.parse(JSON.stringify(window.CASE_CONFIG));ref.prepareConfig(config);
  const screens=cases(config),selected={};
  for(const [sheetName,type] of [['Symptoms','symptom'],['Diagnoses','disease']]){
   const sheet=workbook.Sheets[sheetName];if(!sheet)throw Error(`Missing ${sheetName} worksheet. Use the current answer matrix.`);
   const rows=XLSX.utils.sheet_to_json(sheet,{header:1,defval:''}),headers=rows[4]||[];
   if(headers[0]!=='Reference ID')throw Error(`${sheetName}: keep the header in row 5 and the Reference ID column.`);
   const columns=new Map();headers.forEach((value,i)=>{const code=String(value).split(' | ')[0];if(screens.some(s=>s.code===code)){if(columns.has(code))throw Error(`${sheetName}: duplicate case column ${code}.`);columns.set(code,i)}});
   if(screens.some(s=>!columns.has(s.code)))throw Error(`${sheetName}: a case column is missing. Download a fresh matrix.`);
   const seen=new Set(),rawSeen=new Set();selected[type]=Object.fromEntries(screens.map(s=>[s.code,[]]));
   for(const [index,row] of rows.slice(5).entries()){
    if(row.every(v=>String(v).trim()===''))continue;
    const rawId=String(row[0]).trim();if(ref.data.splitIds?.[rawId]){for(const id of ref.data.splitIds[rawId])seen.add(id);continue}if(ref.data.removedIds?.includes(rawId))continue;const id=ref.canonicalId(rawId),entry=ref.byId.get(id);if(!entry||entry.type!==type||rawSeen.has(rawId))throw Error(`${sheetName} row ${index+6}: unknown or duplicate Reference ID.`);rawSeen.add(rawId);seen.add(id);
    for(const screen of screens){const value=String(row[columns.get(screen.code)]??'').trim().toLowerCase();if(!['yes','no',''].includes(value))throw Error(`${sheetName} row ${index+6}, ${screen.code}: choose Yes or No.`);if(value==='yes')selected[type][screen.code].push(id)}
   }
   if(seen.size!==ref.lists[type].length)throw Error(`${sheetName}: keep every reference row; use No rather than deleting rows.`);
  }
  for(const screen of screens){
   const symptoms=[...new Set(selected.symptom[screen.code])],diagnoses=ref.expandApprovedIds(selected.disease[screen.code]);
   if(!diagnoses.length)throw Error(`${screen.code}: keep at least one diagnosis possibility.`);
   if(!symptoms.length&&!screen.stage.observationOnly)throw Error(`${screen.code}: keep at least one symptom or sign.`);
   const original=screen.stage.accepted;
   function answers(ids,type){return ids.map(id=>{const entry=ref.byId.get(id),old=original.find(a=>a.type===type&&ref.approvedIds(a).includes(id));return {...old,id:old?.id||`matrix-${id}`,type,term:entry.term,referenceIds:[id],info:entry.description,hint:old?.hint||entry.description}})}
   let target;if(screen.section==='culprit')target=config.clues[screen.ci].stages[screen.si];else target=config.suspectSets.find(s=>s.id===screen.setId).people.find(p=>p.id===screen.personId);
   const symptomAnswers=answers(symptoms,'symptom'),diagnosisAnswers=answers(diagnoses,'disease'),context=original.filter(a=>!['symptom','disease'].includes(a.type));
   if(screen.section==='culprit')target.accepted=[...context,...symptomAnswers,...diagnosisAnswers];
   else {target.symptoms=[...context.filter(a=>a.type==='observation'),...symptomAnswers];target.diagnoses=[...context.filter(a=>a.type==='context'),...diagnosisAnswers]}
   if(symptoms.length){delete target.observationOnly;delete target.observationText;target.symptomsNeeded=Math.min(symptoms.length,Math.max(1,Number(target.symptomsNeeded)||1));target.symptomStarThreshold=Math.min(symptoms.length,Math.max(target.symptomsNeeded,Number(target.symptomStarThreshold)||target.symptomsNeeded));}
   target.diagnosesNeeded=Math.min(diagnoses.length,Math.max(1,Number(target.diagnosesNeeded)||1));target.diagnosisStarThreshold=Math.min(diagnoses.length,Math.max(target.diagnosesNeeded,Number(target.diagnosisStarThreshold)||target.diagnosesNeeded));
  }
  config.answerMatrixVersion=1;config.caseResolution=JSON.parse(JSON.stringify(window.CASE_RESOLUTION));return config;
 }
 return {cases,header,parse};
})();
