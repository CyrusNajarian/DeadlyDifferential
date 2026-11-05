# November 5 fixed-catalog import

Imported from the user-supplied `Deadly_Differential_Netlify_Playtest.zip`. The shared chat link could not be fetched; the ZIP's README and implementation were used as the specification.

- Preserve `reference-data.js` exactly: 94 symptoms/signs and 122 diagnoses.
- Add an always-available, searchable Reference tab, including access before starting an attempt.
- Search the entire relevant catalog after three letters, independently of clue approval. Do not show approval markers for unseen answers.
- Submit a suggestion immediately when selected by pointer or keyboard.
- Match canonical names only. Synonyms and abbreviations are not player inputs. Legacy bindings exist only to migrate saved data and old workbook labels.
- Return Incorrect for a catalog entry not approved by the current clue. Keep stroke subtypes separate and group equivalent symptom labels through canonical IDs.
- Record found answers by catalog ID; retain legacy match indices for compatibility. Existing multi-entry legacy labels migrate conservatively to at most one found catalog entry.
- Include the supplied workbook and five local voicemail audio files.

This is a merge into the current repository, not a replacement with the older ZIP shell. It retains the current clue order, email evidence, face portraits, revised photos, notes, logging, debug controls, compact Check buttons, and existing progress migrations. The ZIP's `.openai/hosting.json` is intentionally excluded because this repository uses its existing hosting setup.

Treatment and history observations that are absent from the fixed vocabulary remain prose observations. Those stages do not require a fabricated symptom to unlock their diagnosis choices. Noncatalog contextual alternatives are not scored. Hidden people with no visible finding remain available in the identity key without becoming playable symptom stages.

Validation covers all 216 canonical entries, three-letter search, rejection of aliases, correct/incorrect/outside-catalog outcomes, immediate keyboard submission, all 18 clue/person screens, observation-only stages, Reference browsing without reveal penalties, portrait/email retention, and conservative migration of existing diagnosis matches. JavaScript syntax and patch whitespace checks pass. Full browser launch is unavailable in this execution environment.
