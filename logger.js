/* Every event stays in the device archive; only confirmed events leave the sync queue. */
const DDLog=(()=>{
 const endpoint='/.netlify/functions/log-events';
 const id=()=>globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const read=key=>{try{return localStorage.getItem(key)}catch{return null}};
 let attempt=read('dd-attempt-v2'),team='',current=null,since=null,busy=false,error='',storageFailed=false;
 let logs;try{logs=JSON.parse(read('dd-logs-v2')||'[]');if(!Array.isArray(logs))logs=[]}catch{logs=[]}
 // Legacy `dispatched` only meant an opaque request was sent, not that Google saved it.
 const pending=()=>logs.filter(x=>!x.syncedAt);
 function status(){return {pending:pending().length,syncing:busy,error,storageFailed,paused:new URLSearchParams(location.search).has('qa'),offline:navigator.onLine===false}}
 function updateStatus(){
  const el=document.querySelector('#logStatus');if(!el)return;
  const s=status();el.textContent=s.storageFailed?'Device backup unavailable. Download logs before leaving this page.':s.paused?'Saved on this device · automatic upload paused in QA mode.':s.offline?'Saved on this device · waiting for an internet connection.':s.error?'Saved on this device · '+s.error:s.syncing?'Saved on this device · syncing to Google Sheets…':s.pending?`Saved on this device · ${s.pending} event${s.pending===1?'':'s'} awaiting sync.`:logs.length?'Saved on this device and confirmed by Google Sheets.':'Answers will be saved automatically.';
  const retry=document.querySelector('#retryLogs');if(retry){retry.hidden=!s.pending&&!s.error;retry.disabled=s.syncing||s.offline||s.paused;}
 }
 const persist=()=>{try{localStorage.setItem('dd-logs-v2',JSON.stringify(logs));storageFailed=false}catch{storageFailed=true}updateStatus()};
 function event(kind,data={}){if(!attempt)return;logs.push({...data,eventId:id(),attemptId:attempt,team,timestamp:new Date().toISOString(),kind});persist();void flush();}
 function nextBatch(){
  const batch=[];for(const ev of pending()){
   if(batch.length===30||new Blob([JSON.stringify({schemaVersion:2,events:[...batch,ev]})]).size>48000)break;
   batch.push(ev);
  }return batch;
 }
 async function flush(){
  if(status().paused||busy||navigator.onLine===false){updateStatus();return}
  busy=true;error='';updateStatus();
  try{while(pending().length){
   const batch=nextBatch();if(!batch.length)throw Error('One log entry is too large to sync. Download the device backup.');
   const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),30000);
   try{
    const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({schemaVersion:2,events:batch}),keepalive:true,signal:controller.signal});
    let result;try{result=await response.json()}catch{}
    if(!response.ok||result?.ok!==true||!Array.isArray(result.eventIds)||batch.some(ev=>!result.eventIds.includes(ev.eventId)))throw Error(result?.error||'Upload not confirmed. Retrying automatically.');
    const syncedAt=new Date().toISOString();batch.forEach(ev=>{ev.syncedAt=syncedAt;ev.dispatched=true});persist();
   }finally{clearTimeout(timeout)}
  }}catch(err){error=err.name==='AbortError'?'Upload timed out. Retrying automatically.':err.message||'Upload failed. Retrying automatically.'}
  finally{busy=false;updateStatus()}
 }
 function dwell(){if(since!==null&&current){const durationMs=Math.max(0,performance.now()-since);if(durationMs>0)event('screen_time',{...current.data,screen:current.key,durationMs:Math.round(durationMs)});}since=document.visibilityState==='visible'?performance.now():null;}
 function screen(key,data){if(current?.key===key)return;dwell();current={key,data};since=document.visibilityState==='visible'?performance.now():null;event('screen_view',{...data,screen:key});}
 function start(name){team=name;if(!attempt){attempt=id();try{localStorage.setItem('dd-attempt-v2',attempt)}catch{}event('attempt_start')}void flush()}
 function reset(){dwell();event('attempt_end');try{localStorage.removeItem('dd-attempt-v2')}catch{}attempt=null;current=null;since=null;void flush()}
 function download(){dwell();if(!logs.some(x=>['answer','ranked_differential','final_accusation'].includes(x.kind)))toast('No submitted answers saved in this browser.');const blob=new Blob([JSON.stringify(logs,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Deadly_Differential_Logs.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),60000)}
 document.addEventListener('visibilitychange',()=>{dwell();if(document.visibilityState!=='visible')void flush()});window.addEventListener('pagehide',()=>{dwell();void flush()});window.addEventListener('online',()=>void flush());window.addEventListener('offline',updateStatus);
 setInterval(()=>{dwell();void flush()},15000);
 // Retry older archived requests, including attempts that were already reset.
 void flush();
 return {start,reset,event,screen,download,flush,status};
})();
