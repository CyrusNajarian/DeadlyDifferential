DEADLY DIFFERENTIAL — PLAYTEST UPDATE

NETLIFY
Extract this ZIP. Upload the extracted folder containing index.html to your existing Netlify project's Deploys page. index.html must be directly inside the uploaded folder. This package is a normal static site and does not require a ChatGPT account.

PLAYER CHANGES
- Matching suggestions appear after SIX alphabetic characters (spaces and numbers do not count).
- Each submission checks one answer. Choosing a suggestion fills the field; Check submits it.
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
Checked all 2,557 configured terms/aliases for unambiguous category matching. Checked the six-letter boundary, grouped-answer counting, symptom gating, milestones, independent reviews, and suspect navigation. Excel import roundtrip preserves all answer lists, aliases, hints, and configured requirements. Included photographs load in the preview.
