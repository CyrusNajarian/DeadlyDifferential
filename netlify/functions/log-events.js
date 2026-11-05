// A same-origin bridge lets the browser read Google's acknowledgement.
const receiver = 'https://script.google.com/macros/s/AKfycbzaFiqXTc9UYiDzw-ykDGQ1ncOrIS4M2twlHrdkyW89T204CLl9CDeiYdTZRtGf7tQ-/exec';
const reply = (statusCode, body) => ({statusCode, headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-store'}, body: JSON.stringify(body)});
exports.handler = async function(event) {
 if (event.httpMethod !== 'POST') return reply(405, {ok: false, error: 'Use POST.'});
 let body;
 try {
  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body || '';
  if (Buffer.byteLength(raw) > 50000) return reply(413, {ok: false, error: 'Log batch is too large.'});
  body = JSON.parse(raw);
 } catch { return reply(400, {ok: false, error: 'Invalid log batch.'}); }
 if (body.schemaVersion !== 2 || !Array.isArray(body.events) || !body.events.length || body.events.length > 30 || body.events.some(e => !e || typeof e.eventId !== 'string' || !e.eventId || typeof e.attemptId !== 'string' || !e.attemptId)) return reply(400, {ok: false, error: 'Invalid log events.'});
 const controller = new AbortController(), timeout = setTimeout(() => controller.abort(), 25000);
 try {
  const response = await fetch(receiver, {method: 'POST', headers: {'Content-Type': 'text/plain;charset=utf-8'}, body: JSON.stringify({schemaVersion: 2, events: body.events}), signal: controller.signal, redirect: 'follow'});
  let result;try { result = await response.json(); } catch { /* Google may return a login or deployment error page. */ }
  if (!response.ok || result?.ok !== true || result.schemaVersion !== 2 || !Array.isArray(result.eventIds) || body.events.some(e => !result.eventIds.includes(e.eventId))) return reply(502, {ok: false, error: 'Google Sheets did not confirm saving. Deploy the updated Google_Sheets_Logger.gs from the repository and check sheet access.'});
  return reply(200, {ok: true, eventIds: body.events.map(e => e.eventId)});
 } catch { return reply(502, {ok: false, error: 'Cannot reach Google Sheets. Saved logs will retry automatically.'}); }
 finally { clearTimeout(timeout); }
};
