/* Local audit backup and optional Google Sheets receiver. No credentials are stored here. */
const DDLog=(()=>{
 const endpoint='https://script.google.com/macros/s/AKfycbzaFiqXTc9UYiDzw-ykDGQ1ncOrIS4M2twlHrdkyW89T204CLl9CDeiYdTZRtGf7tQ-/exec';
 const id=()=>crypto.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 let attempt=localStorage.getItem('dd-attempt-v2'),team='',current=null,since=null,busy=false;
 let logs;try{logs=JSON.parse(localStorage.getItem('dd-logs-v2')||'[]')}catch{logs=[]}
 const persist=()=>{try{localStorage.setItem('dd-logs-v2',JSON.stringify(logs))}catch{console.warn('Log backup storage is full. Export logs before clearing device storage.')}};
 function event(kind,data={}){if(!attempt)return;logs.push({eventId:id(),attemptId:attempt,team,timestamp:new Date().toISOString(),kind,...data});persist();}
 async function flush(){if(new URLSearchParams(location.search).has('qa')||busy||!navigator.onLine||!attempt)return;const batch=logs.filter(x=>!x.dispatched).slice(0,30);if(!batch.length)return;busy=true;try{
 // Apps Script redirects do not provide a readable cross-origin acknowledgement.
 await fetch(endpoint,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({schemaVersion:2,events:batch}),keepalive:true});
 batch.forEach(x=>x.dispatched=true);persist();
 }catch{}finally{busy=false}}
 function dwell(){if(since!==null&&current){const durationMs=Math.max(0,performance.now()-since);if(durationMs>0)event('screen_time',{...current.data,screen:current.key,durationMs:Math.round(durationMs)});}since=document.visibilityState==='visible'?performance.now():null;}
 function screen(key,data){if(current?.key===key)return;dwell();current={key,data};since=document.visibilityState==='visible'?performance.now():null;event('screen_view',{...data,screen:key});}
 function start(name){team=name;if(!attempt){attempt=id();localStorage.setItem('dd-attempt-v2',attempt);event('attempt_start')}flush()}
 function reset(){dwell();event('attempt_end');flush();localStorage.removeItem('dd-attempt-v2');attempt=null}
 function download(){dwell();if(!logs.some(x=>x.kind==='answer'))toast('No submitted answers saved in this browser.');const blob=new Blob([JSON.stringify(logs,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Deadly_Differential_Logs.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),60000)}
 document.addEventListener('visibilitychange',()=>{dwell();if(document.visibilityState!=='visible')flush()});window.addEventListener('pagehide',()=>{dwell();flush()});window.addEventListener('online',flush);
 setInterval(()=>{dwell();flush()},15000);
 return {start,reset,event,screen,download};
})();
