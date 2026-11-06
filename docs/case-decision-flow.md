# Case decisions

Culprit clues run in order: choking, footsteps, safe/key, voicemail, medication. After segments two and four, players rank five distinct diagnoses. The next checkpoint carries forward the preceding choices so they can revise them. Each saved checkpoint is a separate ungraded snapshot. After the fifth clue, players save their pre-suspect top five; that list remains read-only on the final culprit screen.

Suspect clues defer diagnosis grading. After every two clue/person segments, players select or revise one working diagnosis for each suspect encountered so far. The preceding checkpoint’s choices carry forward. Each selector has that suspect’s revealed photos, email correspondence, or video underneath. Future evidence and answer-key explanations stay hidden. The final all-six diagnosis form shows all evidence under each suspect’s selector.

After all suspect clues, players submit all six diagnoses together. Only then does the app give correctness feedback and explain the correct diagnosis and why the selected alternative does not fit. Finally, players compare their pre-suspect differential with the confirmed roster and choose only the culprit. The final debrief explains the culprit clues without repeating suspect-clue explanations.

## State and compatibility

`state.resolution.revisions` stores ungraded checkpoint snapshots. `revisionDrafts` stores unfinished choices. Each checkpoint has a stable `#revision/revise-culprit-N` or `#revision/revise-suspects-N` route and participates in sequential progression. Checkpoint navigation lets players revisit saved versions. New snapshots log a `diagnostic_revision` event with the checkpoint ID, canonical diagnosis IDs, and `ungraded` result.

The pre-suspect ranking, simultaneous suspect assignment, and locked culprit remain in the existing `ranking`, `assignment`, and `final` fields. Submitted rankings satisfy newly inserted culprit checkpoints; submitted assignments satisfy newly inserted suspect checkpoints, so older completed attempts remain accessible. Existing snapshots normalize retired diagnosis IDs through the canonical catalog mapping. Reset clears decisions along with the game state.

## Configuration and validation

`case-resolution-data.js` contains the final diagnosis mapping and feedback. Silver/brain tumor is the culprit; Emerald/stroke, Charcoal/Parkinsonism, Burgundy/ALS, Navy/MG, and Rust/Myositis (dermatomyositis subtype) complete the roster. Answer approvals still come from the repository workbook.

`npm test` checks checkpoint order, sequential guards, distinct rankings, revision persistence, no premature feedback or future evidence, evidence grouped by suspect, all-six grading, legacy attempt compatibility, final locking, side tools, logging, and Pages artifact creation. Tests run without writing live Google Sheet rows.
