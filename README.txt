DEADLY DIFFERENTIAL — ORDERED PLAYTEST UPDATE

NETLIFY
Extract this ZIP. Upload the extracted folder containing index.html to your existing Netlify project's Deploys page. index.html must be directly inside the uploaded folder. This package is a normal static site and does not require a ChatGPT account.

PLAYER CHANGES
- Clue tabs display a check after BOTH symptom and diagnosis requirements are met, or a star after BOTH star milestones are earned. The same applies to suspect/person tabs; suspect-set badges summarize everyone in that set.
- Stars must be earned before revealing answers. Revealing diagnoses permanently blocks any unearned stars for that clue; hiding the list or refreshing does not restore eligibility. Already earned stars remain. Revealing symptoms also closes off an unearned symptom star.
- Clues must be completed in the displayed order: all culprit stages, then the suspect sets and their people. Later tabs and Next stay locked until the current symptom AND diagnosis requirements are met. Completed clues can be revisited. Direct links cannot bypass this sequence.
- Notes is always available. Notes save automatically on the player's device for the current attempt, including across page refreshes. Reset clears them with the attempt. Notes text is not sent to Google Sheets; time on the Notes screen is logged.
- Matching suggestions appear after THREE letters and search the fixed reference catalog.
- Each submission checks one answer. Choosing a suggestion submits that entry immediately; Check submits a typed canonical name.
- Every clue uses the same symptom-first controls, including the suspect clues.
- The symptom requirement must be met with correct, distinct answers. Reviewing or requesting hints cannot bypass it.
- Diagnosis entry, its Check button, and its hint controls stay disabled until then.
- Checkbox milestones appear at the required counts. Stars appear at the configured star counts. If there is only one configured symptom, both milestones can occur at one.
- Symptoms and diagnoses each have an adjacent optional review control. Reaching the count never reveals answers automatically.
- Give me a hint provides one clue for every unguessed answer in that category. Found answers are omitted.
- Similar entries, including dysarthria subtypes and stroke types, are grouped and count once.
- Suspect clues default to ONE correct symptom and ONE correct diagnosis per person; answers must still be submitted separately.
- Suspect descriptions are self-contained, without cross-clue references or comparisons favoring another diagnosis.

EXCEL SETTINGS
Open setup.html to upload the included workbook. It includes five culprit clue sheets and seven suspect/person sheets.
The hint table (A–D) and accepted-answer table (F–J) are independent and can be extended downward. Accepted alternatives are separated by semicolons. J contains an answer-specific clue used by Give me a hint.
The L–M settings on each sheet control Symptoms needed, Diagnoses needed, Symptom star threshold, and Diagnosis star threshold. Counts refer to distinct answer categories, not aliases. Keep star counts at least as high as required counts and no higher than the available answers. Preserve Section, Set ID, and Person ID for suspect worksheets.
Case Settings includes Suggestions after letters, set to 6.
Uploading previews the case on this device. Download case-config.js and replace the site's copy to publish changes; redeploy the folder. The supplied suspect galleries are retained. Culprit media can be embedded or referenced through public URLs using setup.html.

LOGGING
This uploaded older ZIP did not contain the logging files from the later conversation. Logging has been included again, with the previously supplied receiver URL. To use this package's log format, update the Google Apps Script using LOGGING_SETUP.txt. No live Google Sheet writes were performed during verification.
The app logs submitted answers (correct, incorrect, repeated) and visible screen time for both sections. It keeps a local JSON backup downloadable at the bottom of the player page. It does not record every keystroke.

VERIFICATION
Checked persisted star/reveal rules, sequential progression through all 12 clue/person screens, direct-link guards, and notes persistence after navigation and refresh. Checked all 2,557 configured terms/aliases for unambiguous category matching. Checked the six-letter boundary, grouped-answer counting, symptom gating, milestones, independent reviews, and suspect navigation. Excel import roundtrip preserves all answer lists, aliases, hints, and configured requirements. Included photographs load in the preview.

PHOTO CLUE UPDATE
Reception: Dr. Navy is Black, with bilateral ptosis greater on the right. Dr. Rust is East Asian. The team-room cold pack is a head wrap. Dr. Emerald returned a two-column administrative form with only the right column completed. The neck report records 10:00 AM and describes bimanual compression with weaker pressure on one side.

FINAL CLUE CORRECTIONS
The department form is one yearly review completed at one sitting. Neck contusions occur bilaterally, more pronounced on one side. Dr. Navy has clearer right-greater-than-left ptosis.

FIXED REFERENCE CATALOG
The Reference tab is available before and during play. reference-data.js contains the fixed 94 symptoms/signs and 122 diagnoses supplied in the November 5 playtest ZIP. Player inputs accept canonical catalog names only, with no alias or abbreviation matching. A catalog entry not approved for the clue returns Incorrect; suggestions never mark which unseen entries are approved. Stroke subtypes remain separate. The workbook alias column is ignored and old workbook labels are migrated internally. The included four-message voicemail audio is bundled locally.

The current portraits, revised evidence photos, email clues, debug toggle, compact Check buttons and choking/footsteps/safe/voicemail/medication order are retained. Treatment/history-only clues show an observation and assess only their diagnosis possibilities; they do not invent a symptom outside the fixed catalog. Reading the Reference does not reveal answers or block stars.
