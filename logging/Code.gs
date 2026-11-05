// Paste into your sheet's Apps Script editor. Run setup, then update the
// existing web-app deployment to a New version, preserving its /exec URL.
const LOG_COLUMNS=['id','session','timestamp','team','screen','clue','stage','event','category','answer','result','canonical','duration_seconds','reason'];
const MASTER_COLUMNS=['Attempt','Session ID','Team','First activity (UTC)','Last activity (UTC)','Visible case seconds','Clue/stage screens visited','Answer submissions','Correct submissions','Incorrect submissions','Repeated submissions','Distinct correct symptoms','Distinct correct diagnoses','Detailed log'];
const SUMMARY_COLUMNS=['Attempt','Session ID','Team','Clue','Stage','Category','Submissions','Correct','Incorrect','Repeated','Accepted answers (counts)','Incorrect inputs (counts)','Repeated inputs (counts)','Visible screen seconds','Correct raw inputs (counts)'];
function setup(){
 const book=SpreadsheetApp.getActiveSpreadsheet();if(!book)throw Error('Open Apps Script from your Google Sheet.');
 PropertiesService.getScriptProperties().setProperty('SHEET_ID',book.getId());
 const master=sheet_(book,'Attempts',MASTER_COLUMNS),summary=sheet_(book,'Inputs Summary',SUMMARY_COLUMNS);
 book.setActiveSheet(master);book.moveActiveSheet(1);book.setActiveSheet(summary);book.moveActiveSheet(2);book.setActiveSheet(master);
 const old=book.getSheetByName('Player Logs');
 if(old&&old.getLastRow()>1){const events=rows_(old,LOG_COLUMNS.length).map(r=>Object.fromEntries(LOG_COLUMNS.map((c,i)=>[c,r[i]])));const lock=LockService.getScriptLock();lock.waitLock(30000);try{ingest_(book,events)}finally{lock.releaseLock()}}
}
function doPost(e){
 const data=JSON.parse(e.postData.contents);if(!Array.isArray(data.events)||data.events.length>40)throw Error('Invalid batch');
 const id=PropertiesService.getScriptProperties().getProperty('SHEET_ID');if(!id)throw Error('Run setup from your Google Sheet first.');
 const lock=LockService.getScriptLock();lock.waitLock(30000);
 try{ingest_(SpreadsheetApp.openById(id),data.events);return ContentService.createTextOutput('OK')}finally{lock.releaseLock()}
}
function sheet_(book,name,cols){
 const s=book.getSheetByName(name)||book.insertSheet(name);
 if(!s.getLastRow()){s.getRange(1,1,1,cols.length).setValues([cols]);s.getRange(1,1,1,cols.length).setBackground('#123940').setFontColor('#ffffff').setFontWeight('bold');s.setFrozenRows(1);s.setColumnWidths(1,cols.length,150)}
 return s;
}
function rows_(s,n){return s.getLastRow()>1?s.getRange(2,1,s.getLastRow()-1,n).getValues():[]}
function safe_(v){return typeof v==='number'&&Number.isFinite(v)?v:String(v??'').replace(/^[=+@-]/,"'$&")}
function write_(s,row,values){
 const end=row+values.length-1;if(end>s.getMaxRows())s.insertRowsAfter(s.getMaxRows(),end-s.getMaxRows());
 if(values.length)s.getRange(row,1,values.length,values[0].length).setValues(values.map(r=>r.map(safe_)));
}
function counts_(events,field){const m=new Map();events.forEach(e=>{const t=String(e[field]||e.answer||'');m.set(t,(m.get(t)||0)+1)});return [...m].map(([t,n])=>t+(n>1?' ×'+n:'')).join('\n')}
function ingest_(book,events){
 const groups=new Map();events.forEach(e=>{
  if(!e||typeof e.id!=='string'||!/^[a-zA-Z0-9_-]{8,64}$/.test(e.session||'')||!['answer','screen_time','screen_enter'].includes(e.event))return;
  if(e.event==='answer'&&(!['symptom','disease'].includes(e.category)||!['correct','incorrect','repeated'].includes(e.result)))return;
  if(!groups.has(e.session))groups.set(e.session,[]);groups.get(e.session).push(e);
 });
 const master=sheet_(book,'Attempts',MASTER_COLUMNS),summary=sheet_(book,'Inputs Summary',SUMMARY_COLUMNS);
 let masters=rows_(master,MASTER_COLUMNS.length),summaries=rows_(summary,SUMMARY_COLUMNS.length);
 for(const [session,batch] of groups){
  let index=masters.findIndex(r=>r[1]===session);
  if(index<0){index=masters.length;const number=masters.reduce((n,r)=>Math.max(n,Number(r[0])||0),0)+1;masters.push([number,session,...Array(MASTER_COLUMNS.length-2).fill('')])}
  const number=masters[index][0],log=sheet_(book,'Attempt '+number+' Logs',LOG_COLUMNS);
  const previous=rows_(log,LOG_COLUMNS.length),ids=new Set(previous.map(r=>r[0])),fresh=[];
  batch.forEach(e=>{if(ids.has(e.id))return;ids.add(e.id);fresh.push(LOG_COLUMNS.map(k=>k==='duration_seconds'?Math.max(0,Number(e[k])||0):e[k]??''))});
  write_(log,log.getLastRow()+1,fresh);
  const all=[...previous,...fresh].map(r=>Object.fromEntries(LOG_COLUMNS.map((col,i)=>[col,r[i]]))),a=summarize_(all,number,session);
  masters[index]=[number,session,a.team,a.first,a.last,a.seconds,a.screens,a.answers,a.correct,a.incorrect,a.repeated,a.symptoms,a.diagnoses,book.getUrl().split('#')[0]+'#gid='+log.getSheetId()];
  summaries=summaries.filter(r=>r[1]!==session).concat(a.rows);
 }
 if(groups.size){
  write_(master,2,masters);
  if(summary.getLastRow()>1)summary.getRange(2,1,summary.getLastRow()-1,SUMMARY_COLUMNS.length).clearContent();
  summaries.sort((a,b)=>Number(a[0])-Number(b[0])||String(a[3]).localeCompare(String(b[3]))||String(a[5]).localeCompare(String(b[5])));
  write_(summary,2,summaries);summary.getRange(2,11,Math.max(1,summaries.length),5).setWrap(true);summary.setColumnWidths(11,3,260);summary.setColumnWidth(15,260);
 }
}
// Screen seconds repeat on the two category rows; use Attempts for total time.
function summarize_(events,number,session){
 const ordered=[...events].sort((a,b)=>String(a.timestamp).localeCompare(String(b.timestamp))),team=[...ordered].reverse().find(e=>e.team)?.team||'';
 const answers=ordered.filter(e=>e.event==='answer'),screens=new Map(),rows=[];
 ordered.forEach(e=>{if(!e.screen||e.screen==='welcome')return;if(!screens.has(e.screen))screens.set(e.screen,{clue:e.clue,stage:e.stage,seconds:0,answers:[]});const s=screens.get(e.screen);if(e.event==='screen_time')s.seconds+=Math.max(0,Number(e.duration_seconds)||0);if(e.event==='answer')s.answers.push(e)});
 for(const s of screens.values()){
  const seconds=Math.round(s.seconds*100)/100;
  for(const category of ['symptom','disease']){
   const inputs=s.answers.filter(e=>e.category===category);if(!inputs.length)continue;
   const correct=inputs.filter(e=>e.result==='correct'),incorrect=inputs.filter(e=>e.result==='incorrect'),repeated=inputs.filter(e=>e.result==='repeated');
   rows.push([number,session,team,s.clue,s.stage,category==='symptom'?'Symptoms':'Diagnoses',inputs.length,correct.length,incorrect.length,repeated.length,counts_(correct,'canonical'),counts_(incorrect,'answer'),counts_(repeated,'answer'),seconds,counts_(correct,'answer')]);
  }
  if(!s.answers.length)rows.push([number,session,team,s.clue,s.stage,'No answers submitted',0,0,0,0,'','','',seconds,'']);
 }
 const correct=answers.filter(e=>e.result==='correct'),unique=category=>new Set(correct.filter(e=>e.category===category).map(e=>[e.screen,e.canonical||e.answer].join('|'))).size;
 return {team,first:ordered[0]?.timestamp||'',last:ordered[ordered.length-1]?.timestamp||'',seconds:Math.round([...screens.values()].reduce((n,s)=>n+s.seconds,0)*100)/100,screens:screens.size,answers:answers.length,correct:correct.length,incorrect:answers.filter(e=>e.result==='incorrect').length,repeated:answers.filter(e=>e.result==='repeated').length,symptoms:unique('symptom'),diagnoses:unique('disease'),rows};
}
