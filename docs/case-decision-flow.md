# Case decision checkpoints

## Sequence

1. Complete the culprit clues.
2. Rank exactly five distinct diagnoses and save the original ordered list. No correctness evaluation or feedback is produced here.
3. Review all suspect clues. These now assess symptoms or acknowledge observations; they do not grade or reveal a diagnosis per person.
4. Assign diagnoses to all six suspects on one form. Only a complete submission is graded. The original batch is saved and cannot be replaced.
5. Review the batch result, then continue to the final comparison: original top-five list alongside the correct suspect–diagnosis roster.
6. Choose a culprit and diagnosis and lock the final accusation. Only after locking does the diagnosis-specific explanation appear. The final answer cannot be changed within the attempt.

The three checkpoints participate in the same sequential route guards as the clues. Saved notes, clue matches, stars and existing routes are retained. Older attempts that have already visited suspects return to the newly required ranking checkpoint without losing their clue progress.

## Configuration

`case-resolution-data.js` holds the suspect diagnosis mapping and all 118 final diagnosis explanations. An exported workbook preview retains this configuration. The mapping uses the existing case identities: Silver/brain tumor, Emerald/stroke, Charcoal/Parkinson disease, Burgundy/ALS, Navy/myasthenia gravis, Rust/dermatomyositis. Equivalent permitted answer IDs are explicit.

The repository did not previously specify a final culprit. `culpritId` and `culpritDiagnosisId` are deliberately unset pending the author's answer. Do not publish the new flow to production until those fields and the associated explanatory key are confirmed. Local tests inject a fixture key; the fixture is not an author-approved solution.

## Persistence and logging

The original ranking, all-six assignment batch, results and final accusation live in `state.resolution`, with drafts stored separately. A saved ranking and a locked final answer are immutable through the UI. Reset clears them with the game state. Ranking submission is logged as ungraded; assignment rows are logged after the simultaneous submission; the final accusation is logged with its outcome.

## Validation

Tests cover all 22 ordered steps, prerequisites, distinct top-five validation, ungraded ranking logs, immutable snapshots, absence of per-suspect diagnosis controls, all-six validation before grading, no early correct roster, wrong and correct final accusations, no final explanation before lock, locked-answer protection, JSON persistence, all 118 diagnosis blurbs and logging. JavaScript syntax and whitespace checks pass. Full browser rendering is unavailable in the workspace.
