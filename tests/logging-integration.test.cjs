const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
// Exercise the exact user-supplied deployed Code.gs against an in-memory Sheet.
class Sheet {
 constructor(name,id){this.name=name;this.id=id;this.rows=[]}
 getLastRow(){let n=this.rows.length;while(n&&!this.rows[n-1]?.some(v=>v!==''&&v!=null))n--;return n}
 getMaxRows(){return 1000}insertRowsAfter(){}setFrozenRows(){}setColumnWidths(){}setColumnWidth(){}getSheetId(){return this.id}
 getRange(row,col,height=1,width=1){const s=this;return {getValues:()=>Array.from({length:height},(_,r)=>Array.from({length:width},(_,c)=>s.rows[row-1+r]?.[col-1+c]??'')),setValues(values){for(let r=0;r<height;r++){s.rows[row-1+r]??=[];for(let c=0;c<width;c++)s.rows[row-1+r][col-1+c]=values[r][c]}return this},clearContent(){this.setValues(Array.from({length:height},()=>Array(width).fill('')));return this},setBackground(){return this},setFontColor(){return this},setFontWeight(){return this},setWrap(){return this}}}
}
const sheets=new Map(),book={getId:()=> 'test-sheet',getSheetByName:n=>sheets.get(n),insertSheet:n=>{const s=new Sheet(n,sheets.size);sheets.set(n,s);return s},getUrl:()=> 'https://example.test/sheet',setActiveSheet(){},moveActiveSheet(){}};
const ctx={SpreadsheetApp:{getActiveSpreadsheet:()=>book,openById:()=>book},PropertiesService:{getScriptProperties:()=>({getProperty:()=> 'test-sheet',setProperty(){}})},LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},ContentService:{createTextOutput:text=>({text})}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(__dirname,'../logging/Code.gs'),'utf8'),ctx);ctx.setup();
const {handler}=require('../netlify/functions/log-events.js'),original=global.fetch;
global.fetch=async(_,options)=>({ok:true,text:async()=>ctx.doPost({postData:{contents:options.body}}).text});
(async()=>{try{
 const event=(id,kind,data={})=>({eventId:id,attemptId:'test-session-123',timestamp:'2026-11-05T12:00:00Z',team:'Test',section:'culprit',clue:'The Neck',stage:'Report',kind,...data});
 const events=[event('view','screen_view'),event('answer','answer',{category:'symptom',raw:'shaky',answer:'Tremor',result:'correct'}),event('outside','answer',{category:'disease',raw:'unknown term',result:'outside_catalog'}),event('time','screen_time',{durationMs:3500}),event('ranking','ranked_differential',{ranking:[{rank:1,diagnosis:'Brain tumor'}]}),event('final','final_accusation',{personId:'A',result:'correct'})];
 const req={httpMethod:'POST',body:JSON.stringify({schemaVersion:2,events})};
 let r=await handler(req);assert.equal(r.statusCode,200);assert.equal(JSON.parse(r.body).eventIds.length,6);
 const log=sheets.get('Attempt 1 Logs');assert.equal(log.getLastRow(),7);assert.equal(log.rows[2][9],'shaky');assert.equal(log.rows[2][11],'Tremor');assert.equal(log.rows[3][10],'incorrect');assert.equal(log.rows[4][12],3.5);assert.equal(JSON.parse(log.rows[5][13]).ranking[0].diagnosis,'Brain tumor');assert.equal(JSON.parse(log.rows[6][13]).personId,'A');
 const master=sheets.get('Attempts');assert.equal(master.rows[1][7],2);assert.equal(master.rows[1][8],1);assert.equal(master.rows[1][9],1);assert.equal(master.rows[1][5],3.5);
 r=await handler(req);assert.equal(r.statusCode,200);assert.equal(log.getLastRow(),7);assert.equal(master.rows[1][7],2);
 assert.equal((await handler({...req,body:JSON.stringify({schemaVersion:2,events:[event('bad','answer',{category:'other',result:'correct'})]})})).statusCode,400);
 console.log('PASS: real deployed Code.gs ingests translated answers, timing, ranking and final choices; old summaries and duplicate protection work.');
}finally{global.fetch=original}})().catch(e=>{console.error(e);process.exitCode=1});
