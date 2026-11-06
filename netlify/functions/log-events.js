// This bridge supports the original deployed Code.gs and the version 2 receiver.
const receiver = 'https://script.google.com/macros/s/AKfycbzaFiqXTc9UYiDzw-ykDGQ1ncOrIS4M2twlHrdkyW89T204CLl9CDeiYdTZRtGf7tQ-/exec';
const reply = (statusCode, body) => ({statusCode, headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin':'https://cyrusnajarian.github.io', 'Access-Control-Allow-Methods':'POST, OPTIONS', 'Access-Control-Allow-Headers':'Content-Type'}, body: JSON.stringify(body)});
function transportEvent(e) {
 // Original Code.gs accepts only these three event names and validates session IDs.
 // Keep the full original event in reason so ranking, hints and final choices survive.
 return {...e, id:e.eventId, session:e.attemptId,
  screen:[e.section||'case', e.clue||'Attempt', e.stage||'Session'].join('/'),
  event:e.kind==='answer'?'answer':e.kind==='screen_time'?'screen_time':'screen_enter',
  category:e.category==='symptom'?'symptom':'disease',
  answer:e.raw??e.answer??'', canonical:e.answer||'', matchedAnswer:e.answer||'',
  result:e.result==='outside_catalog'?'incorrect':e.result,
  duration_seconds:Math.max(0,Number(e.durationMs)||0)/1000,
  reason:JSON.stringify(e)};
}
exports.handler = async function(event) {
 if (event.httpMethod === 'OPTIONS') return reply(204, {});
 if (event.httpMethod !== 'POST') return reply(405, {ok:false, error:'Use POST.'});
 let body;
 try {
  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body || '';
  if (Buffer.byteLength(raw) > 50000) return reply(413, {ok:false, error:'Log batch is too large.'});
  body = JSON.parse(raw);
 } catch { return reply(400, {ok:false, error:'Invalid log batch.'}); }
 if (body.schemaVersion !== 2 || !Array.isArray(body.events) || !body.events.length || body.events.length > 30 || body.events.some(e => !e || typeof e.eventId !== 'string' || !e.eventId || !/^[a-zA-Z0-9_-]{8,64}$/.test(e.attemptId||'') || typeof e.kind!=='string' || e.kind==='answer'&&(!['symptom','disease'].includes(e.category)||!['correct','incorrect','repeated','outside_catalog'].includes(e.result)))) return reply(400, {ok:false, error:'Invalid log events.'});
 const controller = new AbortController(), timeout = setTimeout(() => controller.abort(), 25000);
 try {
  const response = await fetch(receiver, {method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify({schemaVersion:2,events:body.events.map(transportEvent)}), signal:controller.signal, redirect:'follow'});
  const text=await response.text();let result;try {result=JSON.parse(text)} catch {}
  // Original Code.gs returns literal OK only after ingest_ finishes. New receivers
  // confirm IDs explicitly. An opaque response, login page or generic JSON OK fails.
  const confirmed=text.trim()==='OK'||result?.ok===true&&result.schemaVersion===2&&Array.isArray(result.eventIds)&&body.events.every(e=>result.eventIds.includes(e.eventId));
  if (!response.ok || !confirmed) return reply(502, {ok:false,error:'Google Sheets did not confirm saving. Check the Apps Script deployment and sheet access.'});
  return reply(200, {ok:true,eventIds:body.events.map(e=>e.eventId)});
 } catch {return reply(502, {ok:false,error:'Cannot reach Google Sheets. Saved logs will retry automatically.'});}
 finally {clearTimeout(timeout);}
};
exports.transportEvent=transportEvent;
