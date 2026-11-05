# Google Sheets logging

## Why uploads stopped

The original deployed Apps Script expects events with `id`, `session`, and `event`. The newer browser logger sent `eventId`, `attemptId`, and `kind`. The original receiver silently skipped those events but returned `OK`. The browser's cross-origin, `no-cors` request could not inspect that response and marked a request dispatched anyway, so it never retried the missing rows.

The Netlify function now translates event fields into the deployed receiver's format. It validates the fields required by that receiver before sending. It reads the receiver response and confirms the event IDs to the browser only after success. The supplied original receiver remains compatible: **no Apps Script redeployment is needed for this fix**. The bridge also supports the explicit version-2 event-ID acknowledgement used by the interim receiver.

`logging/Code.gs` is the user-supplied original receiver, retained as the source for the deployed script. The incompatible replacement receiver has been removed.

## Delivery and recovery

- Every submitted event is archived immediately under `dd-logs-v2` in the browser's local storage.
- Events upload immediately, in bounded batches. Failed uploads retry every 15 seconds, on reconnection, and when the page reopens.
- Confirmation requires a successful server response; HTML/login pages, timeouts, missing functions and receiver failures remain pending.
- Older records with only `dispatched: true` are replayed for confirmed delivery. Original event IDs are retained, and the receiver ignores duplicates.
- Reset ends an attempt and clears game progress; it preserves the log archive and pending uploads. Archived events can upload even before a new game starts.
- `?qa=1` pauses uploads deliberately. Offline play keeps a device backup until connection returns.
- The device archive is retained after confirmation. Use the download control to export all of it.

To recover retained logs, reopen the same site in the original browser/device after the updated deployment. Wait for confirmed sync or use Retry log upload. Logs are tied to that browser and site origin; switching domains does not move local storage. Answers never recorded, or removed by clearing browser storage, cannot be reconstructed by this fix. Notes and unsubmitted keystrokes are not uploaded.

## Sheet layout

The original `Attempts`, `Attempt N Logs`, and `Inputs Summary` layout is preserved. Each attempt has its own detailed log, and retries preserve its session ID and team.

Answers retain raw text, canonical matches, category and result. An out-of-catalog submission is counted as incorrect in the old summary; its original `outside_catalog` result remains in Details. Screen time uses seconds for the receiver and milliseconds in the original event.

The old receiver has only three event types. Ranking, final-choice, hint and review events therefore use its supported `screen_enter` type, while the **reason** column stores the complete original event JSON, including the original `kind`, ranked list, suspect choice and result. These decision events are preserved in the detailed log without inflating its ordinary correct/incorrect answer counts. They are not separate ranked-list columns in the old summary.

## Configure a new receiver

Existing users of the supplied deployed Code.gs can skip these steps.

1. Open the intended Google Sheet and choose **Extensions → Apps Script**.
2. Paste `logging/Code.gs`, save, run `setup`, and authorize it. Setup stores the bound sheet ID.
3. Deploy a web app executing as **Me**, accessible to **Anyone**. When updating an existing deployment, choose **New version** and preserve its `/exec` URL.
4. If the URL changes, update the `receiver` constant in `netlify/functions/log-events.js` and deploy through Netlify's Git integration.
5. Submit a test answer, confirm the browser status, and verify its row in the Sheet.

The repository stores no Google account credentials. The Apps Script and Sheet permissions determine where the receiver can write.

## Troubleshooting

| Status / symptom | Check |
| --- | --- |
| Upload paused in QA mode | Remove `?qa=1` from the URL for a live attempt |
| Waiting for an internet connection | Reconnect on the same device; queued events retry |
| Upload not confirmed / missing endpoint | Confirm Netlify deployed the `log-events` function, not only static files |
| Google Sheets did not confirm saving | Check the `/exec` deployment URL, Anyone access, Apps Script authorization and stored SHEET_ID |
| Confirmed status but looking at the wrong tab | Use the attempt's Detailed log link; decisions are JSON in the reason column |
| No local answers in the download | Check the original site origin/browser/device; reset alone does not erase the archive |

Live Google Sheets delivery and Netlify deployment must be verified after deployment. Local regression tests use a simulated Sheet and do not create test rows in the live log.
