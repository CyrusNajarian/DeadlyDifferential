window.SUSPECT_SETS=[
  {
    "id": "reception",
    "title": "The reception photographs",
    "photos": [
      {
        "src": "assets/suspects/reception-1-ptosis.webp",
        "title": "Arrival",
        "people": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "alt": "Six colleagues at a wedding reception before dinner."
      },
      {
        "src": "assets/suspects/reception-2.webp",
        "title": "Drinks",
        "people": [
          "A",
          "B",
          "C"
        ],
        "alt": "Three colleagues talking over drinks and appetizers."
      },
      {
        "src": "assets/suspects/reception-3-ptosis.webp",
        "title": "Dinner",
        "people": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "alt": "Colleagues in conversation during the main course."
      },
      {
        "src": "assets/suspects/reception-4-ptosis.webp",
        "title": "Cake",
        "people": [
          "D",
          "E",
          "F"
        ],
        "alt": "Three colleagues serving wedding cake."
      },
      {
        "src": "assets/suspects/reception-5-ptosis.webp",
        "title": "Dancing",
        "people": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F"
        ],
        "alt": "Colleagues on the dance floor after cake."
      }
    ],
    "people": [
      {
        "id": "A",
        "name": "Dr. Silver",
        "color": "#c5ced7",
        "observable": false,
        "look": "Navy suit · silver tie",
        "cover": 0,
        "symptoms": [
          {
            "term": "No clear neurologic finding",
            "aliases": [
              "none",
              "normal",
              "normal appearance",
              "no symptoms",
              "no symptom",
              "no finding",
              "no abnormality",
              "no abnormal findings",
              "no neurological findings",
              "nothing apparent",
              "nothing visible",
              "no visible symptoms",
              "no clear finding",
              "insufficient evidence",
              "not enough information",
              "cannot tell",
              "No clear neurologic finding"
            ],
            "info": "No specific neurologic finding is clearly established for Dr. Silver in these photographs.",
            "type": "symptom",
            "hint": "Think about the functional change described by this answer's category.",
            "id": "symptom-no-clear-neurologic-finding"
          }
        ],
        "diagnoses": [
          {
            "term": "Insufficient evidence",
            "aliases": [
              "cannot determine",
              "cannot tell",
              "not enough information",
              "unknown",
              "undetermined",
              "uncertain",
              "not enough evidence",
              "cannot diagnose",
              "no diagnosis",
              "no clear diagnosis",
              "unable to determine",
              "Insufficient evidence"
            ],
            "info": "A diagnosis requires additional evidence beyond these photographs.",
            "type": "disease",
            "hint": "Think about the disease mechanism described by this answer's category.",
            "id": "disease-insufficient-evidence"
          }
        ],
        "prompts": [
          "Inspect Dr. Silver across the photographs. What, if anything, can you observe?",
          "Would the visible evidence support a specific diagnosis?"
        ],
        "hints": [
          "An absence of an obvious finding is a valid observation.",
          "Separate a possible explanation from a diagnosis supported by this evidence."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 1,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Inspect Dr. Silver across the photographs. What, if anything, can you observe?",
            "hint": "An absence of an obvious finding is a valid observation."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "Would the visible evidence support a specific diagnosis?",
            "hint": "Separate a possible explanation from a diagnosis supported by this evidence."
          }
        ]
      },
      {
        "id": "B",
        "name": "Dr. Emerald",
        "color": "#5ab38c",
        "observable": false,
        "look": "Emerald sari",
        "cover": 1,
        "symptoms": [
          {
            "term": "No clear neurologic finding",
            "aliases": [
              "none",
              "normal",
              "normal appearance",
              "no symptoms",
              "no symptom",
              "no finding",
              "no abnormality",
              "no abnormal findings",
              "no neurological findings",
              "nothing apparent",
              "nothing visible",
              "no visible symptoms",
              "no clear finding",
              "insufficient evidence",
              "not enough information",
              "cannot tell",
              "No clear neurologic finding"
            ],
            "info": "These photographs do not clearly demonstrate a focal neurologic deficit in Dr. Emerald.",
            "type": "symptom",
            "hint": "Think about the functional change described by this answer's category.",
            "id": "symptom-no-clear-neurologic-finding"
          }
        ],
        "diagnoses": [
          {
            "term": "Insufficient evidence",
            "aliases": [
              "cannot determine",
              "cannot tell",
              "not enough information",
              "unknown",
              "undetermined",
              "uncertain",
              "not enough evidence",
              "cannot diagnose",
              "no diagnosis",
              "no clear diagnosis",
              "unable to determine",
              "Insufficient evidence"
            ],
            "info": "Dr. Emerald’s diagnosis needs another clue; age and appearance are insufficient.",
            "type": "disease",
            "hint": "Think about the disease mechanism described by this answer's category.",
            "id": "disease-insufficient-evidence"
          }
        ],
        "prompts": [
          "Inspect Dr. Emerald. Which findings can you actually support from these images?",
          "How specific is the evidence available for Dr. Emerald?"
        ],
        "hints": [
          "Do not assume a deficit from age or a single pose.",
          "It is acceptable to defer a diagnosis when evidence is limited."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 1,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Inspect Dr. Emerald. Which findings can you actually support from these images?",
            "hint": "Do not assume a deficit from age or a single pose."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "How specific is the evidence available for Dr. Emerald?",
            "hint": "It is acceptable to defer a diagnosis when evidence is limited."
          }
        ]
      },
      {
        "id": "C",
        "name": "Dr. Charcoal",
        "color": "#a1aab3",
        "observable": true,
        "look": "Charcoal suit · green tie · glasses",
        "cover": 4,
        "symptoms": [
          {
            "term": "Hypomimia",
            "info": "Reduced spontaneous facial expression.",
            "type": "symptom",
            "hint": "Compare spontaneous facial movement across different situations.",
            "id": "symptom-reduced-facial-expression",
            "referenceIds": [
              "s-hypomimia"
            ],
            "legacyTerm": "Reduced facial expression"
          }
        ],
        "diagnoses": [
          {
            "term": "Parkinson disease",
            "info": "A progressive disorder causing bradykinesia with rigidity or rest tremor.",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-parkinson-disease",
            "referenceIds": [
              "d-parkinson-disease"
            ],
            "legacyTerm": "Parkinson disease"
          },
          {
            "term": "Drug-induced parkinsonism",
            "info": "Parkinsonian movement abnormalities caused by medication.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-drug-induced-parkinsonism",
            "referenceIds": [
              "d-drug-induced-parkinsonism"
            ],
            "legacyTerm": "Drug-induced parkinsonism"
          },
          {
            "term": "Progressive supranuclear palsy",
            "info": "A degenerative disorder affecting movement, balance, and eye control.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-progressive-supranuclear-palsy",
            "referenceIds": [
              "d-progressive-supranuclear-palsy"
            ],
            "legacyTerm": "Progressive supranuclear palsy"
          },
          {
            "term": "Multiple system atrophy",
            "info": "Degeneration affecting autonomic function and movement.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-multiple-system-atrophy",
            "referenceIds": [
              "d-multiple-system-atrophy"
            ],
            "legacyTerm": "Multiple system atrophy"
          },
          {
            "term": "Dementia with Lewy bodies",
            "info": "Dementia often accompanied by fluctuations, hallucinations, and parkinsonism.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-dementia-with-lewy-bodies",
            "referenceIds": [
              "d-dementia-with-lewy-bodies"
            ],
            "legacyTerm": "Dementia with Lewy bodies"
          },
          {
            "term": "Vascular parkinsonism",
            "info": "Parkinsonism associated with cerebrovascular disease.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-vascular-parkinsonism",
            "referenceIds": [
              "d-vascular-parkinsonism"
            ],
            "legacyTerm": "Vascular parkinsonism"
          }
        ],
        "prompts": [
          "Compare Dr. Charcoal’s expression across the evening. What stays the same?",
          "Which neurologic disorders could account for this pattern?"
        ],
        "hints": [
          "Look at spontaneous movement of the face in different situations.",
          "Consider disorders that reduce the amount of spontaneous movement."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Compare Dr. Charcoal’s expression across the evening. What stays the same?",
            "hint": "Look at spontaneous movement of the face in different situations."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "Which neurologic disorders could account for this pattern?",
            "hint": "Consider disorders that reduce the amount of spontaneous movement."
          }
        ]
      },
      {
        "id": "D",
        "name": "Dr. Burgundy",
        "color": "#c87891",
        "observable": true,
        "look": "Burgundy jacket · cream shirt · mustache",
        "cover": 3,
        "symptoms": [
          {
            "term": "Muscle atrophy",
            "info": "Loss of muscle bulk.",
            "type": "symptom",
            "hint": "Look for changes in muscle bulk rather than just the position of a limb.",
            "id": "symptom-hand-muscle-wasting",
            "referenceIds": [
              "s-muscle-atrophy"
            ],
            "legacyTerm": "Hand-muscle wasting"
          }
        ],
        "diagnoses": [
          {
            "term": "Amyotrophic lateral sclerosis",
            "info": "A progressive disease affecting upper and lower motor neurons.",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-amyotrophic-lateral-sclerosis",
            "referenceIds": [
              "d-amyotrophic-lateral-sclerosis"
            ],
            "legacyTerm": "Amyotrophic lateral sclerosis"
          },
          {
            "term": "Ulnar neuropathy",
            "info": "Dysfunction of the ulnar nerve.",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-ulnar-neuropathy",
            "referenceIds": [
              "d-ulnar-neuropathy"
            ],
            "legacyTerm": "Ulnar neuropathy"
          },
          {
            "term": "Cervical radiculopathy",
            "info": "Dysfunction of a spinal nerve root in the neck.",
            "type": "disease",
            "hint": "Consider dysfunction where a nerve root leaves the spine.",
            "id": "disease-cervical-radiculopathy",
            "referenceIds": [
              "d-cervical-radiculopathy"
            ],
            "legacyTerm": "Cervical radiculopathy"
          },
          {
            "term": "Multifocal motor neuropathy",
            "info": "An immune-mediated neuropathy predominantly affecting motor nerves.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-multifocal-motor-neuropathy",
            "referenceIds": [
              "d-multifocal-motor-neuropathy"
            ],
            "legacyTerm": "Multifocal motor neuropathy"
          },
          {
            "term": "Cervical myelopathy",
            "info": "Spinal cord dysfunction in the neck.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider pathways passing through the spinal cord.",
            "id": "disease-cervical-myelopathy",
            "referenceIds": [
              "d-cervical-myelopathy"
            ],
            "legacyTerm": "Cervical myelopathy"
          },
          {
            "term": "Brachial plexopathy",
            "info": "Dysfunction of the nerve network supplying the arm.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a problem in the nerve network between the neck and arm.",
            "id": "disease-brachial-plexopathy",
            "referenceIds": [
              "d-brachial-plexopathy"
            ],
            "legacyTerm": "Brachial plexopathy"
          },
          {
            "term": "Median neuropathy",
            "info": "Dysfunction of the median nerve.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-median-neuropathy",
            "referenceIds": [
              "d-median-neuropathy"
            ],
            "legacyTerm": "Median neuropathy"
          },
          {
            "term": "Spinal muscular atrophy",
            "info": "Inherited motor neuron disorders predominantly causing weakness.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-spinal-muscular-atrophy",
            "referenceIds": [
              "d-spinal-muscular-atrophy"
            ],
            "legacyTerm": "Spinal muscular atrophy"
          },
          {
            "term": "Inclusion body myositis",
            "info": "A progressive muscle disease often affecting finger flexors and knee extensors.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
            "id": "disease-inclusion-body-myositis",
            "referenceIds": [
              "d-inclusion-body-myositis"
            ],
            "legacyTerm": "Inclusion body myositis"
          },
          {
            "term": "Kennedy disease",
            "info": "An inherited disorder affecting lower motor neurons and androgen function.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-kennedy-disease",
            "referenceIds": [
              "d-kennedy-disease"
            ],
            "legacyTerm": "Kennedy disease"
          }
        ],
        "prompts": [
          "Inspect Dr. Burgundy’s hands. What has changed in their shape or bulk?",
          "What conditions could explain the visible hand changes?"
        ],
        "hints": [
          "Look at the spaces between the thumb and index finger and between the metacarpals.",
          "Consider motor-neuron, nerve-root and peripheral-nerve causes."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Inspect Dr. Burgundy’s hands. What has changed in their shape or bulk?",
            "hint": "Look at the spaces between the thumb and index finger and between the metacarpals."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "What conditions could explain the visible hand changes?",
            "hint": "Consider motor-neuron, nerve-root and peripheral-nerve causes."
          }
        ]
      },
      {
        "id": "E",
        "name": "Dr. Navy",
        "color": "#7fa6df",
        "observable": true,
        "look": "Navy wrap dress · gold pendant",
        "cover": 4,
        "symptoms": [
          {
            "term": "Ptosis",
            "info": "Drooping of the upper eyelid.",
            "type": "symptom",
            "hint": "Compare the height of the upper eyelids.",
            "id": "symptom-ptosis",
            "referenceIds": [
              "s-ptosis"
            ],
            "legacyTerm": "Ptosis"
          },
          {
            "term": "Motor fatigability",
            "info": "Muscle performance worsens with repeated use.",
            "type": "symptom",
            "hint": "Compare the height of the upper eyelids.",
            "id": "symptom-increasing-eyelid-droop-over-time",
            "referenceIds": [
              "s-motor-fatigability"
            ],
            "legacyTerm": "Increasing eyelid droop over time"
          }
        ],
        "diagnoses": [
          {
            "term": "Myasthenia gravis",
            "info": "An autoimmune neuromuscular junction disorder causing fatigable weakness.",
            "type": "disease",
            "hint": "Consider impaired transmission between a nerve and its muscle.",
            "id": "disease-myasthenia-gravis",
            "referenceIds": [
              "d-myasthenia-gravis"
            ],
            "legacyTerm": "Myasthenia gravis"
          },
          {
            "term": "Third nerve palsy",
            "info": "Dysfunction of the oculomotor nerve controlling several eye and eyelid muscles.",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-third-nerve-palsy",
            "referenceIds": [
              "d-third-nerve-palsy"
            ],
            "legacyTerm": "Third nerve palsy"
          },
          {
            "term": "Horner syndrome",
            "info": "A sympathetic pathway disorder causing ptosis and a small pupil.",
            "type": "disease",
            "hint": "Consider interruption of the sympathetic pathway supplying the eye.",
            "id": "disease-horner-syndrome",
            "referenceIds": [
              "d-horner-syndrome"
            ],
            "legacyTerm": "Horner syndrome"
          },
          {
            "term": "Aponeurotic ptosis",
            "info": "Eyelid droop caused by stretching or detachment of the lifting-muscle tendon.",
            "kind": "differential",
            "type": "disease",
            "hint": "Compare the height of the upper eyelids.",
            "id": "disease-aponeurotic-ptosis",
            "referenceIds": [
              "d-aponeurotic-ptosis"
            ],
            "legacyTerm": "Aponeurotic ptosis"
          },
          {
            "term": "Mechanical ptosis",
            "info": "Eyelid droop caused by excess weight or a local physical obstruction.",
            "kind": "differential",
            "type": "disease",
            "hint": "Compare the height of the upper eyelids.",
            "id": "disease-mechanical-ptosis",
            "referenceIds": [
              "d-mechanical-ptosis"
            ],
            "legacyTerm": "Mechanical ptosis"
          },
          {
            "term": "Chronic progressive external ophthalmoplegia",
            "info": "A syndrome of slowly progressive ptosis and restricted eye movements.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-chronic-progressive-external-ophthalmoplegia",
            "referenceIds": [
              "d-chronic-progressive-external-ophthalmoplegia"
            ],
            "legacyTerm": "Chronic progressive external ophthalmoplegia"
          },
          {
            "term": "Myotonic dystrophy",
            "info": "Inherited multisystem disorders featuring myotonia and muscle weakness.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-myotonic-dystrophy",
            "referenceIds": [
              "d-myotonic-dystrophy"
            ],
            "legacyTerm": "Myotonic dystrophy"
          },
          {
            "term": "Oculopharyngeal muscular dystrophy",
            "info": "An inherited myopathy affecting eyelids and swallowing muscles.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-oculopharyngeal-muscular-dystrophy",
            "referenceIds": [
              "d-oculopharyngeal-muscular-dystrophy"
            ],
            "legacyTerm": "Oculopharyngeal muscular dystrophy"
          }
        ],
        "prompts": [
          "Compare Dr. Navy at arrival, dinner and after cake. What changes?",
          "Which conditions could account for the eye findings and their time course?"
        ],
        "hints": [
          "Compare the height of each upper eyelid across the photographs.",
          "Consider nerve-to-muscle signaling as well as other causes of an eyelid sitting lower."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 2,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Compare Dr. Navy at arrival, dinner and after cake. What changes?",
            "hint": "Compare the height of each upper eyelid across the photographs."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "Which conditions could account for the eye findings and their time course?",
            "hint": "Consider nerve-to-muscle signaling as well as other causes of an eyelid sitting lower."
          }
        ]
      },
      {
        "id": "F",
        "name": "Dr. Rust",
        "color": "#dc986d",
        "observable": true,
        "look": "Rust dress · pearl earrings · curls",
        "cover": 3,
        "symptoms": [
          {
            "term": "Heliotrope rash",
            "info": "Purple discoloration around the upper eyelids.",
            "type": "symptom",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "symptom-heliotrope-rash",
            "referenceIds": [
              "s-heliotrope-rash"
            ],
            "legacyTerm": "Heliotrope rash"
          },
          {
            "term": "Gottron papules",
            "info": "Raised reddish-purple lesions over the knuckles.",
            "type": "symptom",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "symptom-gottron-papules",
            "referenceIds": [
              "s-gottron-papules"
            ],
            "legacyTerm": "Gottron papules"
          }
        ],
        "diagnoses": [
          {
            "term": "Dermatomyositis",
            "info": "An autoimmune disease with characteristic skin changes, sometimes with muscle involvement.",
            "type": "disease",
            "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
            "id": "disease-dermatomyositis",
            "referenceIds": [
              "d-dermatomyositis"
            ],
            "legacyTerm": "Dermatomyositis"
          },
          {
            "term": "Cutaneous lupus erythematosus",
            "info": "Autoimmune skin disease that may be sensitive to sunlight.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-cutaneous-lupus-erythematosus",
            "referenceIds": [
              "d-cutaneous-lupus-erythematosus"
            ],
            "legacyTerm": "Cutaneous lupus erythematosus"
          },
          {
            "term": "Contact dermatitis",
            "info": "Skin inflammation caused by contact with an irritant or allergen.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-contact-dermatitis",
            "referenceIds": [
              "d-contact-dermatitis"
            ],
            "legacyTerm": "Contact dermatitis"
          },
          {
            "term": "Psoriasis",
            "info": "A chronic inflammatory skin disease causing characteristic plaques.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-psoriasis",
            "referenceIds": [
              "d-psoriasis"
            ],
            "legacyTerm": "Psoriasis"
          },
          {
            "term": "Lichen planus",
            "info": "An inflammatory condition affecting skin or mucosal surfaces.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-lichen-planus",
            "referenceIds": [
              "d-lichen-planus"
            ],
            "legacyTerm": "Lichen planus"
          }
        ],
        "prompts": [
          "Inspect Dr. Rust’s face and hands. What skin changes can you describe?",
          "Which condition could explain this distribution of findings?"
        ],
        "hints": [
          "Describe both the color and the location of the patches.",
          "Consider a disorder that can affect skin as well as skeletal muscle."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 2,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Inspect Dr. Rust’s face and hands. What skin changes can you describe?",
            "hint": "Describe both the color and the location of the patches."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "Which condition could explain this distribution of findings?",
            "hint": "Consider a disorder that can affect skin as well as skeletal muscle."
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "Merck Manual · Secondary and atypical parkinsonism",
        "url": "https://www.merckmanuals.com/professional/neurologic-disorders/movement-and-cerebellar-disorders/secondary-and-atypical-parkinsonism"
      },
      {
        "title": "AAO EyeWiki · Myogenic ptosis",
        "url": "https://eyewiki.aao.org/Myogenic_Ptosis"
      },
      {
        "title": "DermNet · Adult-onset dermatomyositis",
        "url": "https://dermnetnz.org/topics/adult-onset-dermatomyositis"
      },
      {
        "title": "AAFP · Muscle weakness differential",
        "url": "https://www.aafp.org/afp/2020/0115/p95"
      }
    ],
    "description": "Five photographs. Follow each person through the evening.",
    "label": "Reception photos"
  },
  {
    "id": "team-room",
    "label": "Team room",
    "title": "The team-room photograph",
    "description": "Personal belongings left on the shared desk. Look for their owners’ names.",
    "photos": [
      {
        "src": "assets/suspects/team-room-prevention.webp",
        "title": "Shared workroom",
        "people": [
          "A",
          "B"
        ],
        "alt": "Shared hospital workroom desk with belongings labeled Dr. Silver and Dr. Emerald.",
        "width": 1536,
        "height": 1024
      }
    ],
    "people": [
      {
        "id": "A",
        "name": "Dr. Silver",
        "color": "#c5ced7",
        "look": "Navy suit · silver tie",
        "observable": true,
        "cover": 0,
        "symptoms": [
          {
            "term": "Headache",
            "info": "Pain in the head.",
            "type": "symptom",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "symptom-possible-headaches",
            "referenceIds": [
              "s-headache"
            ],
            "legacyTerm": "Possible headaches"
          }
        ],
        "diagnoses": [
          {
            "term": "Migraine",
            "info": "A recurrent headache disorder often accompanied by sensory sensitivity or nausea.",
            "type": "disease",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "disease-migraine",
            "referenceIds": [
              "d-migraine"
            ],
            "legacyTerm": "Migraine"
          },
          {
            "term": "Tension-type headache",
            "info": "A primary headache disorder commonly producing pressing or tightening pain.",
            "type": "disease",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "disease-tension-type-headache",
            "referenceIds": [
              "d-tension-type-headache"
            ],
            "legacyTerm": "Tension-type headache"
          },
          {
            "term": "Intracranial mass",
            "info": "A space-occupying lesion inside the skull; the cause is unspecified.",
            "type": "disease",
            "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
            "id": "disease-intracranial-mass",
            "referenceIds": [
              "d-intracranial-mass",
              "d-brain-tumor"
            ],
            "legacyTerm": "Intracranial mass"
          },
          {
            "term": "Chronic subdural hematoma",
            "info": "A persistent blood collection beneath the dura.",
            "type": "disease",
            "hint": "Consider injury or its consequences for nearby brain pathways.",
            "id": "disease-chronic-subdural-hematoma",
            "referenceIds": [
              "d-chronic-subdural-hematoma"
            ],
            "legacyTerm": "Chronic subdural hematoma"
          }
        ],
        "prompts": [
          "Which belongings appear to belong to Dr. Silver, and what might they be used for?",
          "What conditions could explain the symptom you inferred?"
        ],
        "hints": [
          "Consider what the cold pack and analgesic might be used for together.",
          "Keep common explanations as well as secondary causes in mind."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Which belongings appear to belong to Dr. Silver, and what might they be used for?",
            "hint": "Consider what the cold pack and analgesic might be used for together."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "What conditions could explain the symptom you inferred?",
            "hint": "Keep common explanations as well as secondary causes in mind."
          }
        ]
      },
      {
        "id": "B",
        "name": "Dr. Emerald",
        "color": "#5ab38c",
        "look": "Emerald sari",
        "observable": true,
        "cover": 0,
        "symptoms": [
          {
            "term": "Antiplatelet and statin use",
            "aliases": [
              "aspirin",
              "atorvastatin",
              "aspirin and atorvastatin",
              "antiplatelet",
              "statin",
              "antiplatelet therapy",
              "statin therapy",
              "vascular risk reduction",
              "stroke prevention medications",
              "secondary prevention",
              "secondary stroke prevention",
              "medications for stroke prevention",
              "aspirin 81 mg",
              "atorvastatin 80 mg"
            ],
            "info": "Dr. Emerald’s pouch contains aspirin and atorvastatin.",
            "type": "observation",
            "hint": "Read the two medication labels and consider their shared use.",
            "id": "symptom-antiplatelet-and-statin-use",
            "referenceIds": []
          }
        ],
        "diagnoses": [
          {
            "term": "Ischemic stroke",
            "info": "Brain infarction caused by inadequate arterial blood supply.",
            "hint": "Consider a previous vascular injury to the brain.",
            "type": "disease",
            "id": "disease-prior-ischemic-stroke",
            "referenceIds": [
              "d-ischemic-stroke"
            ],
            "legacyTerm": "Prior ischemic stroke"
          },
          {
            "term": "Transient ischemic attack",
            "info": "Transient focal ischemic symptoms without acute infarction.",
            "hint": "Consider transient symptoms caused by reduced brain blood flow.",
            "type": "disease",
            "id": "disease-transient-ischemic-attack",
            "referenceIds": [
              "d-transient-ischemic-attack"
            ],
            "legacyTerm": "Transient ischemic attack"
          },
          {
            "term": "Coronary artery disease",
            "aliases": [
              "CAD",
              "ischemic heart disease",
              "ischaemic heart disease",
              "coronary heart disease",
              "prior myocardial infarction",
              "heart attack",
              "MI",
              "atherosclerotic cardiovascular disease",
              "ASCVD"
            ],
            "info": "Aspirin and atorvastatin can also be used for coronary disease. Medication use is not specific to cerebrovascular disease.",
            "hint": "Consider another organ affected by atherosclerotic vascular disease.",
            "type": "context",
            "id": "disease-coronary-artery-disease",
            "referenceIds": []
          }
        ],
        "symptomsNeeded": 0,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 0,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Which medicines belong to Dr. Emerald?",
            "hint": "Use the ownership tag and the labels on the bottles."
          },
          {
            "label": "Describe the observation",
            "prompt": "What type of treatment do the medicines suggest?",
            "hint": "Consider platelet inhibition and cholesterol lowering; these are treatment clues, not visible neurologic symptoms."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Can these medicines alone localize a neurologic problem?",
            "hint": "They do not establish a deficit or localize a lesion. Look for other evidence."
          },
          {
            "label": "Build the differential",
            "prompt": "What medical histories could explain taking both medicines?",
            "hint": "Consider cerebrovascular and coronary disease; distinguish an observation from an unconfirmed history."
          }
        ],
        "prompts": [
          "Which medicines belong to Dr. Emerald?",
          "What medical histories could explain taking both medicines?"
        ],
        "hints": [
          "Use the ownership tag and the labels on the bottles.",
          "Consider cerebrovascular and coronary disease; distinguish an observation from an unconfirmed history."
        ],
        "symptomLabel": "Observations",
        "symptomSingular": "observation",
        "observationOnly": true,
        "observationText": "Dr. Emerald’s pouch contains aspirin and atorvastatin."
      }
    ],
    "sources": [
      {
        "title": "Merck Manual · Secondary and atypical parkinsonism",
        "url": "https://www.merckmanuals.com/professional/neurologic-disorders/movement-and-cerebellar-disorders/secondary-and-atypical-parkinsonism"
      },
      {
        "title": "AAO EyeWiki · Myogenic ptosis",
        "url": "https://eyewiki.aao.org/Myogenic_Ptosis"
      },
      {
        "title": "DermNet · Adult-onset dermatomyositis",
        "url": "https://dermnetnz.org/topics/adult-onset-dermatomyositis"
      },
      {
        "title": "AAFP · Muscle weakness differential",
        "url": "https://www.aafp.org/afp/2020/0115/p95"
      }
    ]
  },
  {
    "id": "interview-notes",
    "label": "Annual review",
    "title": "The yearly department review",
    "description": "Dr. Emerald returned this two-page annual activity log, covering every month of the review year. Both columns request the same type of entry.",
    "photos": [
      {
        "src": "assets/suspects/annual-activity-log-layered.webp",
        "title": "Annual activity log",
        "people": [
          "B"
        ],
        "alt": "Two overlapping pages of Dr. Emerald’s annual activity log, covering January through December with all entries in the right-hand columns.",
        "width": 1536,
        "height": 1024
      }
    ],
    "people": [
      {
        "id": "B",
        "name": "Dr. Emerald",
        "color": "#5ab38c",
        "look": "Emerald sari",
        "observable": true,
        "cover": 0,
        "symptoms": [
          {
            "term": "Hemispatial neglect",
            "info": "Reduced attention to one side of space or the body.",
            "type": "symptom",
            "hint": "Consider whether attention is distributed equally across both sides of space.",
            "id": "symptom-left-sided-spatial-neglect",
            "referenceIds": [
              "s-hemispatial-neglect"
            ],
            "legacyTerm": "Left-sided spatial neglect"
          }
        ],
        "diagnoses": [
          {
            "term": "Stroke",
            "info": "Brain injury caused by interrupted blood flow or bleeding.",
            "type": "disease",
            "hint": "Consider a vascular event that interrupts or damages a region of brain tissue.",
            "id": "disease-stroke",
            "referenceIds": [
              "d-stroke",
              "d-ischemic-stroke",
              "d-large-artery-atherosclerotic-stroke",
              "d-cardioembolic-stroke",
              "d-lacunar-stroke",
              "d-watershed-stroke",
              "d-cryptogenic-stroke",
              "d-hemorrhagic-stroke",
              "d-intracerebral-hemorrhage",
              "d-subarachnoid-hemorrhage",
              "d-prior-stroke-with-residual-deficits"
            ],
            "legacyTerm": "Stroke"
          },
          {
            "term": "Intracranial mass",
            "info": "A space-occupying lesion inside the skull; the cause is unspecified.",
            "type": "disease",
            "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
            "id": "disease-right-hemisphere-mass-lesion",
            "referenceIds": [
              "d-intracranial-mass",
              "d-brain-tumor"
            ],
            "legacyTerm": "Right-hemisphere mass lesion"
          },
          {
            "term": "Traumatic brain injury",
            "info": "Brain dysfunction or damage caused by external force.",
            "type": "disease",
            "hint": "Consider whether discomfort changes how a movement is performed.",
            "id": "disease-traumatic-brain-injury",
            "referenceIds": [
              "d-traumatic-brain-injury"
            ],
            "legacyTerm": "Traumatic brain injury"
          }
        ],
        "prompts": [
          "What do you notice about how Dr. Emerald completed the form?",
          "What could account for this pattern of completion?"
        ],
        "hints": [
          "Compare the two sides of the sheet.",
          "Consider a persistent change in spatial attention."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What do you notice about where Dr. Emerald entered the activities?",
            "hint": "Compare equivalent entry boxes on the two sides. Both columns belong to the same annual log."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which clinical term describes the observation?",
            "hint": "Describe the change in appearance or function, and distinguish observation from a possible explanation."
          },
          {
            "label": "Where is it localized?",
            "prompt": "Which structures or functional systems could produce the observation?",
            "hint": "Consider central pathways, peripheral pathways, the nerve–muscle connection, muscle, and local tissues as appropriate to what is visible."
          },
          {
            "label": "Build the differential",
            "prompt": "What could explain this spatial pattern of completion?",
            "hint": "Consider a persistent change in spatial attention."
          }
        ]
      }
    ],
    "sources": [
      {
        "title": "ASHA · Right hemisphere disorder",
        "url": "https://www.asha.org/practice-portal/clinical-topics/right-hemisphere-disorder/"
      }
    ]
  },
  {
    "id": "emails",
    "label": "Emails",
    "title": "The department emails",
    "description": "Administrative correspondence collected with the case. Read the messages, identify the reported findings, and consider possible explanations.",
    "photos": [],
    "emails": [
      {
        "id": "silver-cover",
        "from": "Dr. Silver",
        "to": "Department administrator",
        "subject": "Cover for Thursday",
        "body": "Could someone cover my Thursday morning teaching? The navigation scan has to be done before the procedure, and the unit has brought both appointments forward. They said the next clinic discussion will depend on what comes back from the sample.\n\nI’d prefer the rota just say “medical appointment.” I’ll send the slides beforehand.",
        "reply": "Thursday is covered. Please don’t try to fit the afternoon clinic around it as well; we can move those patients. Your appointment details won’t appear on the shared rota.\n\nCan you leave the teaching-room key with reception before you go?"
      },
      {
        "id": "emerald-review",
        "from": "Dr. Emerald",
        "to": "Department administrator",
        "subject": "Annual review attachment",
        "body": "I’ve attached the completed review. I’ve included activities from across the year. Please let me know if anything is missing.",
        "reply": "Thanks. Could you open the original attachment once more? Several entry boxes are still empty, although you’ve marked the form complete. I’ve attached a clean copy with the same layout.",
        "earlier": "Your phased-return timetable is attached. The emergency cover from your admission has now been closed out. Let me know if occupational health wants the mornings shortened further."
      },
      {
        "id": "charcoal-camera",
        "from": "Dr. Charcoal",
        "to": "AV support",
        "subject": "Conference recording",
        "body": "The handheld recording is rather shaky again, even during the quiet parts when I was standing still. Could I borrow the fixed stand next time? The picture settles when I brace the camera against the lectern.\n\nThe sound seems fine, so hopefully we can still use the discussion."
      },
      {
        "id": "burgundy-scrubs",
        "from": "Dr. Burgundy",
        "to": "Department administrator",
        "subject": "Scrub order",
        "body": "Could you change my usual tops to small? The current ones have become loose across the shoulders. I’ve also been dropping the little locker key more often, so a longer pull tab would help if stores has one.\n\nPlease keep the trouser order as it is for now."
      },
      {
        "id": "navy-packets",
        "from": "Dr. Navy",
        "to": "Conference coordinator",
        "subject": "Packet preparation",
        "body": "Could we split the hole-punching into a couple of short sessions? The first stack is usually fine, but I struggle to get through the later ones. After a break I can manage another small batch.",
        "reply": "Of course. I’ll bring the electric punch too. No need to finish them all in one sitting."
      },
      {
        "id": "rust-photo",
        "from": "Dr. Rust",
        "to": "Conference coordinator",
        "subject": "Group photograph",
        "body": "Could we use the shaded courtyard rather than the sunny steps for the group photo? My skin has been flaring after the outdoor sessions. I’ll still come to the reception; I’d just rather stay out of direct sun if possible."
      }
    ],
    "people": [
      {
        "id": "A",
        "name": "Dr. Silver",
        "color": "#c5ced7",
        "observable": true,
        "look": "Navy suit · silver tie",
        "cover": 0,
        "symptoms": [
          {
            "id": "symptom-investigation-of-a-possible-focal-lesion",
            "term": "Investigation of a possible focal lesion",
            "aliases": [
              "navigation scan",
              "tissue sampling",
              "biopsy",
              "planned biopsy",
              "sample results",
              "lesion investigation",
              "procedure and scan",
              "no symptom established"
            ],
            "info": "Dr. Silver mentions a navigation scan, a procedure, and pending sample results.",
            "type": "observation",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": []
          }
        ],
        "diagnoses": [
          {
            "id": "disease-brain-tumor",
            "term": "Brain tumor",
            "info": "An abnormal growth of cells within or around the brain.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-brain-tumor"
            ],
            "legacyTerm": "Brain tumor"
          },
          {
            "id": "disease-inflammatory-brain-lesion",
            "term": "Inflammatory brain lesion",
            "aliases": [
              "inflammatory lesion",
              "brain inflammation"
            ],
            "info": "Selected inflammatory lesions may require tissue diagnosis. The procedural reference alone cannot distinguish them from a tumor.",
            "type": "context",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": []
          },
          {
            "id": "disease-brain-infection",
            "term": "Brain abscess",
            "info": "A localized collection of infection within the brain.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-brain-abscess",
              "d-infectious-encephalitis"
            ],
            "legacyTerm": "Brain infection"
          }
        ],
        "prompts": [
          "Inspect Dr. Silver across the photographs. What, if anything, can you observe?",
          "Would the visible evidence support a specific diagnosis?"
        ],
        "hints": [
          "An absence of an obvious finding is a valid observation.",
          "Separate a possible explanation from a diagnosis supported by this evidence."
        ],
        "symptomsNeeded": 0,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 0,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What does this person actually report in the emails?",
            "hint": "Separate their words from a medical explanation."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which observation or symptom pattern is supported?",
            "hint": "Use the time course, task and response to rest where relevant."
          },
          {
            "label": "Build the differential",
            "prompt": "Which explanations fit, and what evidence is still missing?",
            "hint": "A brief administrative message cannot establish a diagnosis."
          }
        ],
        "symptomLabel": "Findings & observations",
        "symptomSingular": "finding",
        "emailId": "silver-cover",
        "observationOnly": true,
        "observationText": "Dr. Silver mentions a navigation scan, a procedure, and pending sample results."
      },
      {
        "id": "B",
        "name": "Dr. Emerald",
        "color": "#5ab38c",
        "observable": true,
        "look": "Emerald sari",
        "cover": 0,
        "symptoms": [
          {
            "id": "symptom-abrupt-illness-followed-by-partial-recovery",
            "term": "Abrupt illness followed by partial recovery",
            "aliases": [
              "sudden onset",
              "abrupt onset",
              "phased return",
              "recovery after admission",
              "acute illness with recovery"
            ],
            "info": "Dr. Emerald mentions an emergency admission and a phased return to work.",
            "type": "observation",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": []
          }
        ],
        "diagnoses": [
          {
            "id": "disease-stroke",
            "term": "Stroke",
            "info": "Brain injury caused by interrupted blood flow or bleeding.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-stroke",
              "d-ischemic-stroke",
              "d-large-artery-atherosclerotic-stroke",
              "d-cardioembolic-stroke",
              "d-lacunar-stroke",
              "d-watershed-stroke",
              "d-cryptogenic-stroke",
              "d-hemorrhagic-stroke",
              "d-intracerebral-hemorrhage",
              "d-subarachnoid-hemorrhage",
              "d-prior-stroke-with-residual-deficits"
            ],
            "legacyTerm": "Stroke"
          },
          {
            "id": "disease-acquired-brain-injury",
            "term": "Traumatic brain injury",
            "info": "Brain dysfunction or damage caused by external force.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-traumatic-brain-injury"
            ],
            "legacyTerm": "Acquired brain injury"
          }
        ],
        "prompts": [
          "Inspect Dr. Emerald. Which findings can you actually support from these images?",
          "How specific is the evidence available for Dr. Emerald?"
        ],
        "hints": [
          "Do not assume a deficit from age or a single pose.",
          "It is acceptable to defer a diagnosis when evidence is limited."
        ],
        "symptomsNeeded": 0,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 0,
        "diagnosisStarThreshold": 2,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What does this person actually report in the emails?",
            "hint": "Separate their words from a medical explanation."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which observation or symptom pattern is supported?",
            "hint": "Use the time course, task and response to rest where relevant."
          },
          {
            "label": "Build the differential",
            "prompt": "Which explanations fit, and what evidence is still missing?",
            "hint": "A brief administrative message cannot establish a diagnosis."
          }
        ],
        "symptomLabel": "Findings & observations",
        "symptomSingular": "finding",
        "emailId": "emerald-review",
        "observationOnly": true,
        "observationText": "Dr. Emerald mentions an emergency admission and a phased return to work."
      },
      {
        "id": "C",
        "name": "Dr. Charcoal",
        "color": "#a1aab3",
        "observable": true,
        "look": "Charcoal suit · green tie · glasses",
        "cover": 0,
        "symptoms": [
          {
            "id": "symptom-possible-action-tremor",
            "term": "Tremor",
            "info": "Rhythmic involuntary shaking.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "s-tremor"
            ],
            "legacyTerm": "Possible action tremor"
          }
        ],
        "diagnoses": [
          {
            "id": "disease-essential-tremor",
            "term": "Essential tremor",
            "info": "An action tremor disorder, often affecting both hands.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-essential-tremor"
            ],
            "legacyTerm": "Essential tremor"
          },
          {
            "id": "disease-parkinson-disease",
            "term": "Parkinson disease",
            "info": "A progressive disorder causing bradykinesia with rigidity or rest tremor.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-parkinson-disease"
            ],
            "legacyTerm": "Parkinson disease"
          },
          {
            "id": "disease-enhanced-physiologic-tremor",
            "term": "Enhanced physiologic tremor",
            "aliases": [
              "physiological tremor",
              "enhanced physiological tremor",
              "physiologic tremor"
            ],
            "info": "Stress, stimulants or fatigue can accentuate normal physiologic tremor; history is needed.",
            "type": "context",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": []
          }
        ],
        "prompts": [
          "Compare Dr. Charcoal’s expression across the evening. What stays the same?",
          "Which neurologic disorders could account for this pattern?"
        ],
        "hints": [
          "Look at spontaneous movement of the face in different situations.",
          "Consider disorders that reduce the amount of spontaneous movement."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What does this person actually report in the emails?",
            "hint": "Separate their words from a medical explanation."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which observation or symptom pattern is supported?",
            "hint": "Use the time course, task and response to rest where relevant."
          },
          {
            "label": "Build the differential",
            "prompt": "Which explanations fit, and what evidence is still missing?",
            "hint": "A brief administrative message cannot establish a diagnosis."
          }
        ],
        "symptomLabel": "Findings & observations",
        "symptomSingular": "finding",
        "emailId": "charcoal-camera"
      },
      {
        "id": "D",
        "name": "Dr. Burgundy",
        "color": "#c87891",
        "observable": true,
        "look": "Burgundy jacket · cream shirt · mustache",
        "cover": 0,
        "symptoms": [
          {
            "id": "symptom-possible-loss-of-muscle-bulk",
            "term": "Muscle atrophy",
            "info": "Loss of muscle bulk.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "s-muscle-atrophy"
            ],
            "legacyTerm": "Possible loss of muscle bulk"
          },
          {
            "id": "symptom-hand-clumsiness",
            "term": "Impaired fine motor control",
            "info": "Difficulty making small, precise movements.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "s-impaired-fine-motor-control"
            ],
            "legacyTerm": "Hand clumsiness"
          }
        ],
        "diagnoses": [
          {
            "id": "disease-amyotrophic-lateral-sclerosis",
            "term": "Amyotrophic lateral sclerosis",
            "info": "A progressive disease affecting upper and lower motor neurons.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-amyotrophic-lateral-sclerosis"
            ],
            "legacyTerm": "Amyotrophic lateral sclerosis"
          },
          {
            "id": "disease-peripheral-neuropathy",
            "term": "Peripheral neuropathy",
            "info": "A broad category of disorders affecting peripheral nerves.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-peripheral-neuropathy"
            ],
            "legacyTerm": "Peripheral neuropathy"
          },
          {
            "id": "disease-cervical-myelopathy",
            "term": "Cervical myelopathy",
            "info": "Spinal cord dysfunction in the neck.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-cervical-myelopathy"
            ],
            "legacyTerm": "Cervical myelopathy"
          }
        ],
        "prompts": [
          "Inspect Dr. Burgundy’s hands. What has changed in their shape or bulk?",
          "What conditions could explain the visible hand changes?"
        ],
        "hints": [
          "Look at the spaces between the thumb and index finger and between the metacarpals.",
          "Consider motor-neuron, nerve-root and peripheral-nerve causes."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 2,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What does this person actually report in the emails?",
            "hint": "Separate their words from a medical explanation."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which observation or symptom pattern is supported?",
            "hint": "Use the time course, task and response to rest where relevant."
          },
          {
            "label": "Build the differential",
            "prompt": "Which explanations fit, and what evidence is still missing?",
            "hint": "A brief administrative message cannot establish a diagnosis."
          }
        ],
        "symptomLabel": "Findings & observations",
        "symptomSingular": "finding",
        "emailId": "burgundy-scrubs"
      },
      {
        "id": "E",
        "name": "Dr. Navy",
        "color": "#7fa6df",
        "observable": true,
        "look": "Navy wrap dress · gold pendant",
        "cover": 0,
        "symptoms": [
          {
            "id": "symptom-fatigable-limb-weakness",
            "term": "Motor fatigability",
            "info": "Muscle performance worsens with repeated use.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "s-motor-fatigability"
            ],
            "legacyTerm": "Fatigable limb weakness"
          }
        ],
        "diagnoses": [
          {
            "id": "disease-myasthenia-gravis",
            "term": "Myasthenia gravis",
            "info": "An autoimmune neuromuscular junction disorder causing fatigable weakness.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-myasthenia-gravis"
            ],
            "legacyTerm": "Myasthenia gravis"
          }
        ],
        "prompts": [
          "Compare Dr. Navy at arrival, dinner and after cake. What changes?",
          "Which conditions could account for the eye findings and their time course?"
        ],
        "hints": [
          "Compare the height of each upper eyelid across the photographs.",
          "Consider nerve-to-muscle signaling as well as other causes of an eyelid sitting lower."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 1,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What does this person actually report in the emails?",
            "hint": "Separate their words from a medical explanation."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which observation or symptom pattern is supported?",
            "hint": "Use the time course, task and response to rest where relevant."
          },
          {
            "label": "Build the differential",
            "prompt": "Which explanations fit, and what evidence is still missing?",
            "hint": "A brief administrative message cannot establish a diagnosis."
          }
        ],
        "symptomLabel": "Findings & observations",
        "symptomSingular": "finding",
        "emailId": "navy-packets"
      },
      {
        "id": "F",
        "name": "Dr. Rust",
        "color": "#dc986d",
        "observable": true,
        "look": "Rust dress · pearl earrings · curls",
        "cover": 0,
        "symptoms": [
          {
            "id": "symptom-photosensitivity",
            "term": "Cutaneous photosensitivity",
            "info": "An abnormal skin reaction to sunlight.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "s-cutaneous-photosensitivity"
            ],
            "legacyTerm": "Photosensitivity"
          }
        ],
        "diagnoses": [
          {
            "id": "disease-dermatomyositis",
            "term": "Dermatomyositis",
            "info": "An autoimmune disease with characteristic skin changes, sometimes with muscle involvement.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-dermatomyositis"
            ],
            "legacyTerm": "Dermatomyositis"
          },
          {
            "id": "disease-cutaneous-lupus-erythematosus",
            "term": "Cutaneous lupus erythematosus",
            "info": "Autoimmune skin disease that may be sensitive to sunlight.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": [
              "d-cutaneous-lupus-erythematosus"
            ],
            "legacyTerm": "Cutaneous lupus erythematosus"
          },
          {
            "id": "disease-drug-induced-photosensitivity",
            "term": "Drug-induced photosensitivity",
            "aliases": [
              "medication induced photosensitivity",
              "photosensitizing medication"
            ],
            "info": "A medication-related reaction is another possibility if a relevant exposure is established.",
            "type": "context",
            "hint": "Consider the reported observation and its possible explanations.",
            "referenceIds": []
          }
        ],
        "prompts": [
          "Inspect Dr. Rust’s face and hands. What skin changes can you describe?",
          "Which condition could explain this distribution of findings?"
        ],
        "hints": [
          "Describe both the color and the location of the patches.",
          "Consider a disorder that can affect skin as well as skeletal muscle."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What does this person actually report in the emails?",
            "hint": "Separate their words from a medical explanation."
          },
          {
            "label": "Describe the symptom",
            "prompt": "Which observation or symptom pattern is supported?",
            "hint": "Use the time course, task and response to rest where relevant."
          },
          {
            "label": "Build the differential",
            "prompt": "Which explanations fit, and what evidence is still missing?",
            "hint": "A brief administrative message cannot establish a diagnosis."
          }
        ],
        "symptomLabel": "Findings & observations",
        "symptomSingular": "finding",
        "emailId": "rust-photo"
      }
    ]
  },
  {
    "id": "conference-recording",
    "label": "Conference recording",
    "title": "Dr. Charcoal’s conference recording",
    "description": "A short recording made by Dr. Charcoal during conference preparations. He is behind the camera.",
    "photos": [],
    "video": {
      "src": "https://resource2.heygen.ai/videos/4ef0e4a638ce4d88a780ad9cc251bd23/4ef0e4a638ce4d88a780ad9cc251bd23/01a1ad1e-67d1-72f8-8b50-7d4bb1307b38.mp4",
      "caption": "Recorded by Dr. Charcoal · conference preparations"
    },
    "people": [
      {
        "id": "C",
        "name": "Dr. Charcoal",
        "color": "#a1aab3",
        "observable": true,
        "look": "Charcoal suit · green tie · glasses",
        "cover": 4,
        "symptoms": [
          {
            "id": "symptom-filmed-camera-tremor",
            "term": "Tremor",
            "type": "symptom",
            "referenceIds": [
              "s-tremor"
            ],
            "info": "Rhythmic involuntary shaking affecting the hands or other body parts.",
            "hint": "Watch the rapid movement of the whole frame while the recorder holds the phone."
          }
        ],
        "diagnoses": [
          {
            "id": "disease-d-parkinson-disease",
            "term": "Parkinson disease",
            "type": "disease",
            "referenceIds": [
              "d-parkinson-disease"
            ],
            "info": "A progressive movement disorder involving slowness, rigidity, or tremor.",
            "hint": "Consider possible tremor syndromes without treating camera shake as diagnostic."
          },
          {
            "id": "disease-d-essential-tremor",
            "term": "Essential tremor",
            "type": "disease",
            "referenceIds": [
              "d-essential-tremor"
            ],
            "info": "A tremor disorder commonly affecting the hands during posture or movement.",
            "hint": "Consider possible tremor syndromes without treating camera shake as diagnostic."
          }
        ],
        "prompts": [
          "Compare Dr. Charcoal’s expression across the evening. What stays the same?",
          "Which neurologic disorders could account for this pattern?"
        ],
        "hints": [
          "Look at spontaneous movement of the face in different situations.",
          "Consider disorders that reduce the amount of spontaneous movement."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 2,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "What do you notice about the movement of the whole recording?",
            "hint": "Follow the entire frame rather than the colleague’s hands."
          },
          {
            "label": "Describe the symptom",
            "prompt": "What could make a handheld recording oscillate rhythmically?",
            "hint": "Consider the recorder’s hand control, while allowing ordinary camera instability."
          },
          {
            "label": "Build the differential",
            "prompt": "Which conditions could explain an unsteady handheld recording, and what would you need to distinguish them?",
            "hint": "Compare shaking during movement with shaking at rest."
          }
        ]
      }
    ]
  }
];
window.SUSPECT_CLUES=window.SUSPECT_SETS.find(s=>s.id==='reception');
