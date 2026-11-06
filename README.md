# Deadly Differential

A browser-based neurology murder mystery, hosted on Netlify. Players inspect evidence, identify symptoms, build a differential, diagnose six suspects together, and choose the culprit at the end.

## Play sequence

1. Complete the culprit clues: choking → footsteps → safe/key → voicemail → medication.
2. Save a ranked list of five diagnoses, without correctness feedback.
3. Review the suspect clues: reception photos, team-room photo, annual review, emails, and phone recording.
4. Assign diagnoses to all six suspects in one submission, then read the explanations.
5. Compare the original ranking with the confirmed diagnoses and lock in the culprit. The diagnosis carries forward automatically.

Reference and Notes open from the side of the screen. Notes save on the player's device. Debug mode bypasses progression requirements; it does not submit answers or complete missing decisions.

## Deploy with GitHub Pages

The game now targets GitHub Pages. `.github/workflows/pages.yml` installs dependencies, runs tests, compiles the committed Excel approvals, and deploys a browser-only `_site/` artifact on pushes to `main` or a manual workflow run.

One-time setup: repository **Settings → Pages → Build and deployment → Source → GitHub Actions**. Then run **Actions → Deploy GitHub Pages → Run workflow** if the first push ran before Pages was enabled. The connected GitHub app cannot change the repository’s Pages setting.

This repository is private. GitHub Pages for private repositories requires an eligible paid GitHub plan. Keep the repository private; do not change its visibility merely to enable hosting. See [GitHub’s publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

After a successful deployment the intended project URL is `https://cyrusnajarian.github.io/DeadlyDifferential/`. Use the URL reported by the deployment job as the verified live address. All browser assets use relative paths and support the repository subdirectory.

### Logging backend

GitHub Pages cannot execute server functions. The game uses `https://deadly-differential.netlify.app/.netlify/functions/log-events` for confirmed Google Sheets delivery. The Netlify function permits requests from `https://cyrusnajarian.github.io`. Keep that backend deployed; deploy this commit on Netlify too so the CORS change takes effect. The game itself is served by GitHub Pages.

The existing `netlify.toml` remains for backend deployment. No Apps Script change is required. If uploads are unavailable, the device archive and retry queue remain intact and the status reports the failure. Do not delete the Netlify project while it supplies this backend.

Browser saves are origin-specific: old Netlify progress/logs do not automatically appear on the GitHub Pages origin. Reopen the old Netlify site to export or sync that browser’s retained logs before abandoning it.

To preview the actual Pages artifact locally:

```sh
npm ci
npm run build:pages
python -m http.server 8000 --directory _site
```

A local static server does not execute the logging function. After deployment, submit a test answer and verify both confirmed browser status and the Google Sheet row.

## Edit answers in Excel

Download [Deadly_Differential_Answer_Matrix.xlsx](Deadly_Differential_Answer_Matrix.xlsx).

The workbook includes:

| Sheet | Contents |
| --- | --- |
| Read me | Editing and publishing instructions |
| Symptoms | All 92 symptoms/signs, definitions, and Yes/No approval columns for 19 clue/person screens |
| Diagnoses | All 106 diagnoses, definitions, and the same case columns |
| Cases | A guide to each case-column code and its scoring role |
| Answer key | Correct diagnoses and permitted alternatives for the final six-suspect assignment |

Use filters to show accepted answers for one case. The reference columns and headers stay frozen as you scroll. Green **Yes** cells identify approved answers; dropdowns make approvals easy to edit. The count column updates automatically.

**The checked-in workbook is the default source for answer approvals.** To publish edits:

1. Edit **Yes/No** cells in Symptoms or Diagnoses. Keep the Reference IDs, case columns, all reference rows, and headers in row 5. Sorting rows is supported.
2. Replace `Deadly_Differential_Answer_Matrix.xlsx` in the repository with your edited copy.
3. Push to `main`. The GitHub Pages workflow automatically imports its approvals during the build. No manual configuration export is needed.

For a device-only preview, open `/setup.html`: it loads the repository workbook automatically. Upload a different copy to try changes before committing them. The config download remains available for inspection; the committed workbook controls the next deployment’s approvals.

Previewing starts fresh progress on that device, preserves its log archive, and does not publish changes. An uncommitted local Excel edit does not change the live app. Uploaded approvals retain the photos, audio, emails, video, and final answer key; thresholds are bounded to the available answers.

Names, definitions, and the Answer key sheet are reference information; workbook upload applies only the Yes/No approvals. Edit `reference-data.js` to change the vocabulary/definitions. Edit `case-resolution-data.js` to change the final key or explanations. Suspect-clue diagnosis columns represent supporting possibilities: diagnoses are graded together at the later assignment step.

After changing source data, regenerate the workbook:

```sh
python -m pip install xlsxwriter openpyxl
python scripts/build-answer-workbook.py
```

Generation also requires Node.js. Regeneration preserves existing workbook approvals by Reference ID and case code, while adding new catalog rows/case columns from source. The workbook supplies default approvals; `case-config.js` supplies the underlying clue content and media. There is no duplicate suspect-data snapshot to keep synchronized.

## Answer grouping and review

Tumor subtypes (glioma, glioblastoma, meningioma and brain metastasis) share the **Brain tumor** entry. Their names still work as searches/inputs, and saved IDs migrate without duplicate credit. The nonspecific Intracranial mass entry has been removed; tumor, abscess and hematoma remain separate diagnoses.

Whenever any listed parkinsonian diagnosis is accepted, all seven are accepted: Parkinson disease, drug-induced parkinsonism, vascular parkinsonism, progressive supranuclear palsy, multiple system atrophy, corticobasal syndrome and dementia with Lewy bodies. This applies to clue checks and Dr. Charcoal’s final diagnosis assignment. It is a game acceptance rule, not clinical equivalence. Set every family row to No to turn off the family for a workbook case.

All 198 current main catalog entries were reviewed against the 19 clue/person screens. See [the answer review](docs/answer-review.md) for case-by-case criteria, changes and sources. A Yes means a reasonable answer/differential for that single clue, not proof or the final best diagnosis.

After the final culprit is locked, an incorrect choice receives a summary plus a five-clue comparison for that suspect’s confirmed diagnosis. Morning timing makes a typical MG fatigue explanation less persuasive but does not exclude MG. The selector itself shows only suspect names, with a lock button.

The dropdown and reference share the same canonical names. Typing subtype names, common synonyms, abbreviations or a close misspelling suggests the canonical entry: for example, “freidrechs ataxia” suggests **Cerebellar dysfunction**. Suggestions never disclose which answers a clue accepts. Known short abbreviations such as MG/MS can trigger a suggestion before three letters; ordinary searches still start after three letters.

Ischemic stroke mechanisms now share **Ischemic stroke**, inherited ataxia diagnoses share **Cerebellar dysfunction**, and paralysis is grouped under **Weakness**. The reference displays relevant types/terms beneath these headings; Epilepsy lists focal/generalized seizures, status epilepticus and postictal deficits. These are game groupings, not statements that every related term is clinically identical. Fatigue and motor fatigability, spasticity and rigidity, and aphasia and dysarthria remain separate.

Older workbooks and saved IDs migrate to the canonical entries. Merged workbook approvals use Yes when any previous subtype was Yes, preserving existing edits.

## Symptom location and distribution

After entering/selecting a localized symptom, players must choose its side/distribution and, where applicable, its body region before checking it. Options include one-sided, bilateral, unequal bilateral, or not established. Foot/gait and eyelid terms already specify their region, so they ask only for distribution. Other symptoms such as headache do not show irrelevant arm/leg controls.

The selected distribution is matched against the evidence where the clue establishes a location: arm/hand for neck/key/hand/camera tasks, leg/foot for footsteps, speech muscles for voicemail fatigability, and eyelids for the ptosis photos. The photos accept bilateral or unequal bilateral ptosis. Visual and spatial mechanisms retain their appropriate exceptions rather than being rejected as arm symptoms. Existing saved matches for retained entries are preserved; new submissions require the follow-up choices. The choices save with progress and in detailed logging JSON. A different qualifier does not earn a second credit for the same main symptom.

Arm pain is now **Extremity pain**, with arm/leg pain retained as search terms. The generic Inflammation, Extensor plantar response and Intracranial mass entries have been removed. Older workbook rows for removed entries are ignored rather than reassigned to a different diagnosis.

Foot drop remains distinct from reduced foot clearance; sensory loss from impaired proprioception; visual loss from visual-field loss; and loss of consciousness from coma. Their reference definitions explain the differences. Location qualifiers refine these terms without combining clinically different findings.

## Automatic logging

Answers save immediately in the browser, then upload through the Netlify function to Google Sheets. The app retries failed uploads automatically and shows pending/failed/confirmed status. **Retry log upload** retries manually; **Download this device's log backup** exports the entire archive.

The delivery layer now translates current events into the field names required by the existing deployed Apps Script. The supplied `Code.gs` can stay deployed at its existing URL. See [logging setup and recovery](docs/logging.md) for the cause of the earlier failure, what gets recorded, recovery limits, and setup for a new receiver.

## Local development and checks

Build the default case before serving the player and setup UI:

```sh
npm ci
npm run build
python -m http.server 8000
```

Open `http://localhost:8000`. A plain static server cannot run the Netlify logging function; local backups still work. Use `?qa=1` to deliberately pause uploads during testing. Use Netlify Dev when testing the full upload path locally.

Run the regression checks from the repository root:

```sh
npm test
python tests/workbook.test.py
```

The logging integration test runs the supplied Apps Script against an in-memory Sheet. Tests do not write live Google Sheet rows. The workbook test requires `openpyxl` and checks the actual `.xlsx`, including an import roundtrip and edited approvals.

## File guide

| Path | Purpose |
| --- | --- |
| `index.html`, `app.js` | Player shell, startup, saved state, evidence rendering |
| `case-config.js` | Published clue/suspect content, approved answers, media |
| `reference-data.js`, `reference.js` | Vocabulary, matching, reference and notes drawers |
| `play-flow.js`, `symptom-details.js`, `suspects.js` | Clue controls, progress, suspect galleries and routing |
| `case-resolution-data.js`, `case-resolution.js` | Final answer key, checkpoints, grading and explanations |
| `setup.html`, `setup.js`, `answer-matrix.js` | Excel approval import, preview and config export |
| `preview-storage.js`, `progress-migrations.js` | Device-local previews and saved-progress compatibility |
| `logger.js`, `netlify/functions/log-events.js`, `logging/Code.gs` | Device archive, confirmed delivery, Google Sheets receiver |
| `assets/` | Current bundled photos, portraits and audio |
| `scripts/`, `tests/` | Default workbook compilation, workbook generation and regression checks |
| `netlify.toml`, `package.json`, `package-lock.json` | Automatic build configuration and locked dependencies |
| `docs/` | Current decision flow, logging, and clinical sources |

The `.css` files are all used by the current player or setup pages. The conference video plays from its hosted provider URL; it is not a local MP4. Superseded media, the older workbook, duplicate data, and historical update notes were removed; previous versions remain in Git history. Filename migrations retain compatibility with saved device previews.
