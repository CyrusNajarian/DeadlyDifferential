const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../logger.js'), 'utf8');
function browser(initial = {}, fetcher, online = true) {
 const values = new Map(Object.entries(initial)), nodes = new Map(), timers = [], requests = [];
 const listeners = {};
 const ctx = {
  localStorage: {getItem: k => values.get(k) ?? null, setItem: (k,v) => values.set(k,v), removeItem: k => values.delete(k)},
  navigator: {onLine: online}, location: {search: ''}, crypto: require('node:crypto').webcrypto,
  performance: {now: () => 100}, Blob, AbortController, URLSearchParams, URL, console,
  setTimeout: () => 1, clearTimeout() {}, setInterval: fn => timers.push(fn),
  document: {visibilityState: 'visible', querySelector: id => {if (!nodes.has(id)) nodes.set(id, {});return nodes.get(id)}, addEventListener: (k,fn) => listeners[k] = fn},
  window: {addEventListener: (k,fn) => listeners[k] = fn},
  fetch: async (url,options) => {requests.push({url,options,body:JSON.parse(options.body)});return fetcher(url, options)},
 };
 vm.createContext(ctx);vm.runInContext(source+'\nthis.log=DDLog;',ctx);
 return {log:ctx.log, ctx, values, requests, nodes, timers, listeners, events:() => JSON.parse(values.get('dd-logs-v2') || '[]')};
}
const ok = async (_, options) => ({ok:true,json:async()=>({ok:true,eventIds:JSON.parse(options.body).events.map(e=>e.eventId)})});
const settle = () => new Promise(resolve=>setImmediate(resolve));
(async()=>{
 // Submission is saved synchronously and uploaded immediately, without waiting 15 seconds.
 let b=browser({},ok);b.log.start('Test Team');await settle();b.log.event('answer',{raw:'seizure',result:'correct'});
 assert.equal(b.events().at(-1).raw,'seizure');await settle();
 assert.ok(b.events().every(e=>e.syncedAt));assert.equal(b.log.status().pending,0);
 assert.equal(b.requests.at(-1).url,'/.netlify/functions/log-events');
 assert.ok(b.nodes.get('#logStatus').textContent.includes('confirmed by Google Sheets'));
 // Neither opaque replies nor receiver errors acknowledge anything. A retry can recover it.
 let works=false;b=browser({},async(...args)=>works?ok(...args):({ok:true,json:async()=>({ok:false,error:'Receiver rejected batch'})}));
 b.log.start('Keep me');await settle();b.log.event('answer',{raw:'Stroke'});await settle();
 assert.ok(b.events().every(e=>!e.syncedAt));assert.ok(b.log.status().error);
 works=true;await b.log.flush();assert.equal(b.log.status().pending,0);
 // Legacy dispatched=true events are replayed with their original IDs, even after reset.
 const old=Array.from({length:65},(_,i)=>({eventId:'old-'+i,attemptId:'reset-attempt',team:'Old Team',kind:'answer',raw:'old input',dispatched:true}));
 b=browser({'dd-logs-v2':JSON.stringify(old)},ok);await settle();
 assert.equal(b.requests.length,3);assert.equal(b.events().length,65);assert.ok(b.events().every(e=>e.syncedAt));assert.equal(b.requests[0].body.events[0].eventId,'old-0');
 // Offline play and reset retain the entire archive. Reconnection drains it without a new game.
 b=browser({},ok,false);b.log.start('Offline Team');b.log.event('answer',{raw:'Epilepsy'});b.log.reset();
 assert.equal(b.requests.length,0);assert.ok(b.events().some(e=>e.kind==='attempt_end'));assert.ok(b.events().some(e=>e.raw==='Epilepsy'));
 b.ctx.navigator.onLine=true;await b.log.flush();assert.equal(b.log.status().pending,0);assert.equal(b.values.has('dd-attempt-v2'),false);
 // A missing function / HTML response and a partial acknowledgement must remain retryable.
 b=browser({},async()=>({ok:false,json:async()=>{throw Error('HTML')}}));b.log.start('404');await settle();assert.ok(b.log.status().pending);assert.ok(b.log.status().error);
 b=browser({},async()=>({ok:true,json:async()=>({ok:true,eventIds:[]})}));b.log.start('Partial');await settle();assert.ok(b.log.status().pending);
 // QA never sends data. Normal payloads stay below the browser keepalive byte limit.
 b=browser({},ok,false);b.ctx.location.search='?qa=1';b.ctx.navigator.onLine=true;b.log.start('QA');await b.log.flush();assert.equal(b.requests.length,0);
 const large=Array.from({length:8},(_,i)=>({eventId:'large-'+i,attemptId:'large',kind:'answer',raw:'é'.repeat(6000)}));
 b=browser({'dd-logs-v2':JSON.stringify(large)},ok);await settle();assert.ok(b.requests.length>1);assert.ok(b.requests.every(r=>Buffer.byteLength(r.options.body)<=48000));assert.equal(b.log.status().pending,0);
 // Server bridge only acknowledges an explicit successful receiver response.
 const {handler}=require('../netlify/functions/log-events.js'), original=global.fetch;
 const request={httpMethod:'POST',body:JSON.stringify({schemaVersion:2,events:[{eventId:'e1',attemptId:'a1',kind:'answer'}]})};
 try {
  let forwarded;
  global.fetch=async(url,options)=>{forwarded={url,options};return {ok:true,json:async()=>({ok:true,schemaVersion:2,eventIds:['e1']})}};
  let r=await handler(request);assert.equal(r.statusCode,200);assert.deepEqual(JSON.parse(r.body).eventIds,['e1']);assert.ok(forwarded.url.startsWith('https://script.google.com/'));assert.equal(JSON.parse(forwarded.options.body).schemaVersion,2);
  global.fetch=async()=>({ok:true,json:async()=>({ok:true})});assert.equal((await handler(request)).statusCode,502);
  global.fetch=async()=>({ok:true,json:async()=>({ok:false,error:'Sheet missing'})});r=await handler(request);assert.equal(r.statusCode,502);assert.equal(JSON.parse(r.body).ok,false);
  global.fetch=async()=>({ok:true,json:async()=>{throw Error('Login page')}});assert.equal((await handler(request)).statusCode,502);
  global.fetch=async()=>{throw Error('Network')};assert.equal((await handler(request)).statusCode,502);
  assert.equal((await handler({httpMethod:'GET'})).statusCode,405);
  assert.equal((await handler({...request,body:'not json'})).statusCode,400);
  assert.equal((await handler({...request,body:JSON.stringify({schemaVersion:1,events:[]})})).statusCode,400);
  assert.equal((await handler({...request,body:'x'.repeat(50001)})).statusCode,413);
 } finally {global.fetch=original}
 console.log('PASS: immediate saved answers, confirmed uploads, retryable failures, legacy replay, reset/offline recovery, QA pause, bounded batches and receiver validation.');
})().catch(e=>{console.error(e);process.exitCode=1});
