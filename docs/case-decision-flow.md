# Case decision checkpoints

## Sequence

1. Complete the culprit clues.
2. Rank exactly five distinct diagnoses and save the original ordered list. No correctness evaluation or feedback is produced here.
3. Review all suspect clues. These now assess symptoms or acknowledge observations; they do not grade or reveal a diagnosis per person.
4. Assign diagnoses to all six suspects on one form. Only a complete submission is graded. The results explain each correct diagnosis and why an incorrect selection fits less well for that particular suspect. The original batch is saved and cannot be replaced.
5. Review the batch result, then continue to the final comparison: original top-five list alongside the correct suspect–diagnosis roster.
6. Choose only the culprit and lock the accusation. The diagnosis is carried forward from the confirmed roster rather than selected again. Only after locking does the culprit-clue debrief appear; suspect-clue explanations are not repeated here. The culprit choice cannot be changed within the attempt.

The three checkpoints participate in the same sequential route guards as the clues. Saved notes, clue matches, stars and existing routes are retained. Older attempts that have already visited suspects return to the newly required ranking checkpoint without losing their clue progress.

## Configuration

`case-resolution-data.js` holds the suspect diagnosis mapping and all 107 final diagnosis explanations. An exported workbook preview retains this configuration. The mapping uses the existing case identities: Silver/brain tumor, Emerald/stroke, Charcoal/Parkinson disease, Burgundy/ALS, Navy/myasthenia gravis, Rust/dermatomyositis. Equivalent permitted answer IDs are explicit.

The author confirmed Dr. Silver (A) with a brain tumor as the final solution. `culpritId` is `A` and `culpritDiagnosisId` is `d-brain-tumor`. The broader intracranial-mass category remains accepted for Dr. Silver in the diagnosis-assignment stage. Final scoring uses only the chosen suspect. Tests use this configured answer key.

## Persistence and logging

The original ranking, all-six assignment batch, results and final accusation live in `state.resolution`, with drafts stored separately. A saved ranking and a locked final answer are immutable through the UI. Reset clears them with the game state. Ranking submission is logged as ungraded; assignment rows are logged after the simultaneous submission; the final accusation is logged with its outcome.

## Validation

Tests cover all 22 ordered steps, prerequisites, distinct top-five validation, ungraded ranking logs, immutable snapshots, absence of per-suspect diagnosis controls, all-six validation before grading, no early correct roster, wrong and correct final accusations, no final explanation before lock, locked-answer protection, JSON persistence, all 107 diagnosis blurbs and logging. JavaScript syntax and whitespace checks pass. Full browser rendering is unavailable in the workspace.

## Side tools and compatibility

Top navigation follows the play sequence: Culprit clues, Top five, Suspect clues, Suspect diagnoses, Choose culprit. Notes is now an autosaving side drawer beside Reference. Neither drawer replaces the live clue, so input drafts stay intact. Notes text is not sent to the logging receiver. Old #notes links restore the last investigation route and open the drawer.

Older locked accusations retain their chosen suspect and lock timestamp. Their entered diagnosis and old result are retained as legacy fields while display/scoring adopts the culprit-only format. New records explicitly identify this mode. The suspect debrief uses suspect evidence; the final debrief uses only choking, footsteps, safe/key, voicemail and medication.

Run `node tests/case-flow.test.cjs` for the current regression checks.
