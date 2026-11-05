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
            "id": "symptom-no-clear-neurologic-finding",
            "evidenceLabel": "Possible interpretation"
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
            "id": "disease-insufficient-evidence",
            "evidenceLabel": "Differential possibility"
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
            "id": "symptom-no-clear-neurologic-finding",
            "evidenceLabel": "Possible interpretation"
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
            "id": "disease-insufficient-evidence",
            "evidenceLabel": "Differential possibility"
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
            "info": "Reduced facial animation (hypomimia) is suggested across the photo sequence. A neutral pose alone is nonspecific; it does not establish Parkinson disease.",
            "type": "symptom",
            "hint": "Compare spontaneous facial movement across different situations.",
            "id": "symptom-reduced-facial-expression",
            "sources": [
              {
                "title": "NINDS · Parkinson’s disease",
                "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-hypomimia"
            ],
            "legacyTerm": "Reduced facial expression"
          }
        ],
        "diagnoses": [
          {
            "term": "Parkinson disease",
            "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-parkinson-disease",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Parkinson’s disease",
                "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease"
              }
            ],
            "referenceIds": [
              "d-parkinson-disease"
            ],
            "legacyTerm": "Parkinson disease"
          },
          {
            "term": "Drug-induced parkinsonism",
            "info": "Dopamine-blocking medication can reduce spontaneous movement, including facial expression.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-drug-induced-parkinsonism",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-drug-induced-parkinsonism"
            ],
            "legacyTerm": "Drug-induced parkinsonism"
          },
          {
            "term": "Progressive supranuclear palsy",
            "info": "An atypical parkinsonian disorder. Early balance problems and impaired eye movements help distinguish it from Parkinson disease.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-progressive-supranuclear-palsy",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Progressive supranuclear palsy",
                "url": "https://www.ninds.nih.gov/health-information/disorders/progressive-supranuclear-palsy-psp"
              }
            ],
            "referenceIds": [
              "d-progressive-supranuclear-palsy"
            ],
            "legacyTerm": "Progressive supranuclear palsy"
          },
          {
            "term": "Multiple system atrophy",
            "info": "Degeneration in movement-control systems can produce reduced spontaneous movement.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-multiple-system-atrophy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-multiple-system-atrophy"
            ],
            "legacyTerm": "Multiple system atrophy"
          },
          {
            "term": "Dementia with Lewy bodies",
            "info": "A disorder combining cognitive and other neurologic features, sometimes including parkinsonism. Reduced expression alone does not demonstrate dementia.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-dementia-with-lewy-bodies",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Lewy body dementia",
                "url": "https://www.ninds.nih.gov/health-information/disorders/lewy-body-dementia"
              }
            ],
            "referenceIds": [
              "d-dementia-with-lewy-bodies"
            ],
            "legacyTerm": "Dementia with Lewy bodies"
          },
          {
            "term": "Vascular parkinsonism",
            "info": "Vascular injury to movement-control pathways can produce parkinsonian features.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-vascular-parkinsonism",
            "evidenceLabel": "Differential possibility",
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
            "info": "Reduced muscle bulk is suggested by hand hollowing. A photograph cannot establish a particular motor-neuron, nerve, or root disorder.",
            "type": "symptom",
            "hint": "Look for changes in muscle bulk rather than just the position of a limb.",
            "id": "symptom-hand-muscle-wasting",
            "sources": [
              {
                "title": "NINDS · Amyotrophic lateral sclerosis",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_ALS_Booklet_Digital-508c.pdf"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-muscle-atrophy"
            ],
            "legacyTerm": "Hand-muscle wasting"
          }
        ],
        "diagnoses": [
          {
            "term": "Amyotrophic lateral sclerosis",
            "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-amyotrophic-lateral-sclerosis",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Amyotrophic lateral sclerosis",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_ALS_Booklet_Digital-508c.pdf"
              }
            ],
            "referenceIds": [
              "d-amyotrophic-lateral-sclerosis"
            ],
            "legacyTerm": "Amyotrophic lateral sclerosis"
          },
          {
            "term": "Ulnar neuropathy",
            "info": "An ulnar nerve disorder can also cause interosseous wasting.",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-ulnar-neuropathy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-ulnar-neuropathy"
            ],
            "legacyTerm": "Ulnar neuropathy"
          },
          {
            "term": "Cervical radiculopathy",
            "info": "Lower cervical nerve-root disease can cause hand-muscle wasting.",
            "type": "disease",
            "hint": "Consider dysfunction where a nerve root leaves the spine.",
            "id": "disease-cervical-radiculopathy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-cervical-radiculopathy"
            ],
            "legacyTerm": "Cervical radiculopathy"
          },
          {
            "term": "Multifocal motor neuropathy",
            "info": "A motor neuropathy that can mimic motor-neuron disease. Nerve studies and the clinical pattern are needed to separate them.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-multifocal-motor-neuropathy",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Peripheral neuropathy",
                "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
              }
            ],
            "referenceIds": [
              "d-multifocal-motor-neuropathy"
            ],
            "legacyTerm": "Multifocal motor neuropathy"
          },
          {
            "term": "Cervical myelopathy",
            "info": "Disease in the cervical cord can affect pathways and motor cells supplying the hands.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider pathways passing through the spinal cord.",
            "id": "disease-cervical-myelopathy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-cervical-myelopathy"
            ],
            "legacyTerm": "Cervical myelopathy"
          },
          {
            "term": "Brachial plexopathy",
            "info": "Injury to the nerve network supplying the arm can reduce hand-muscle function and bulk.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a problem in the nerve network between the neck and arm.",
            "id": "disease-brachial-plexopathy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-brachial-plexopathy"
            ],
            "legacyTerm": "Brachial plexopathy"
          },
          {
            "term": "Median neuropathy",
            "info": "Impaired median nerve supply can cause wasting of muscles at the base of the thumb.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-median-neuropathy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-median-neuropathy"
            ],
            "legacyTerm": "Median neuropathy"
          },
          {
            "term": "Spinal muscular atrophy",
            "info": "Loss of lower motor neurons can cause weakness and muscle wasting.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-spinal-muscular-atrophy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-spinal-muscular-atrophy"
            ],
            "legacyTerm": "Spinal muscular atrophy"
          },
          {
            "term": "Inclusion body myositis",
            "info": "Muscle disease can cause weakness and wasting, including in muscles used for finger flexion.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
            "id": "disease-inclusion-body-myositis",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-inclusion-body-myositis"
            ],
            "legacyTerm": "Inclusion body myositis"
          },
          {
            "term": "Kennedy disease",
            "info": "An inherited motor-neuron disorder can lead to weakness and loss of muscle bulk.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-kennedy-disease",
            "evidenceLabel": "Differential possibility",
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
            "info": "Drooping of an upper eyelid. The photographs suggest bilateral ptosis, greater on the right; cause requires additional evidence.",
            "type": "symptom",
            "hint": "Compare the height of the upper eyelids.",
            "id": "symptom-ptosis",
            "sources": [
              {
                "title": "NINDS · Myasthenia gravis",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-ptosis"
            ],
            "legacyTerm": "Ptosis"
          },
          {
            "term": "Motor fatigability",
            "info": "Worsening eyelid position across the sequence suggests fluctuation. Use-related worsening and improvement after rest would more strongly support fatigable weakness.",
            "type": "symptom",
            "hint": "Compare the height of the upper eyelids.",
            "id": "symptom-increasing-eyelid-droop-over-time",
            "sources": [
              {
                "title": "NINDS · Myasthenia gravis",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-motor-fatigability"
            ],
            "legacyTerm": "Increasing eyelid droop over time"
          }
        ],
        "diagnoses": [
          {
            "term": "Myasthenia gravis",
            "info": "Immune-mediated failure of nerve-to-muscle signaling. Fluctuating weakness, ptosis and worsening with repeated use support this possibility.",
            "type": "disease",
            "hint": "Consider impaired transmission between a nerve and its muscle.",
            "id": "disease-myasthenia-gravis",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Myasthenia gravis",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf"
              }
            ],
            "referenceIds": [
              "d-myasthenia-gravis"
            ],
            "legacyTerm": "Myasthenia gravis"
          },
          {
            "term": "Third nerve palsy",
            "info": "An oculomotor nerve disorder is another possible cause of ptosis.",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-third-nerve-palsy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-third-nerve-palsy"
            ],
            "legacyTerm": "Third nerve palsy"
          },
          {
            "term": "Horner syndrome",
            "info": "Interruption of sympathetic input to the eye can cause mild upper-eyelid drooping.",
            "type": "disease",
            "hint": "Consider interruption of the sympathetic pathway supplying the eye.",
            "id": "disease-horner-syndrome",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-horner-syndrome"
            ],
            "legacyTerm": "Horner syndrome"
          },
          {
            "term": "Aponeurotic ptosis",
            "info": "Stretching or separation of the eyelid support mechanism can cause lid droop.",
            "kind": "differential",
            "type": "disease",
            "hint": "Compare the height of the upper eyelids.",
            "id": "disease-aponeurotic-ptosis",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-aponeurotic-ptosis"
            ],
            "legacyTerm": "Aponeurotic ptosis"
          },
          {
            "term": "Mechanical ptosis",
            "info": "Additional weight or a local structural change can lower an eyelid.",
            "kind": "differential",
            "type": "disease",
            "hint": "Compare the height of the upper eyelids.",
            "id": "disease-mechanical-ptosis",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-mechanical-ptosis"
            ],
            "legacyTerm": "Mechanical ptosis"
          },
          {
            "term": "Chronic progressive external ophthalmoplegia",
            "info": "Disease affecting eye muscles can cause eyelid droop and impaired eye movements.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-chronic-progressive-external-ophthalmoplegia",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-chronic-progressive-external-ophthalmoplegia"
            ],
            "legacyTerm": "Chronic progressive external ophthalmoplegia"
          },
          {
            "term": "Myotonic dystrophy",
            "info": "An inherited muscle disorder can affect eyelid position and muscle function.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-myotonic-dystrophy",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-myotonic-dystrophy"
            ],
            "legacyTerm": "Myotonic dystrophy"
          },
          {
            "term": "Oculopharyngeal muscular dystrophy",
            "info": "An inherited muscle disorder can affect the eyelids and swallowing muscles.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-oculopharyngeal-muscular-dystrophy",
            "evidenceLabel": "Differential possibility",
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
            "info": "A violet or reddish eruption around the eyelids is suggestive of dermatomyositis, especially with the knuckle findings.",
            "type": "symptom",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "symptom-heliotrope-rash",
            "sources": [
              {
                "title": "NINDS · Inflammatory myopathies",
                "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-heliotrope-rash"
            ],
            "legacyTerm": "Heliotrope rash"
          },
          {
            "term": "Gottron papules",
            "info": "Raised lesions over extensor finger joints are a characteristic dermatomyositis finding. Flat redness alone is a less specific observation.",
            "type": "symptom",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "symptom-gottron-papules",
            "sources": [
              {
                "title": "NINDS · Inflammatory myopathies",
                "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-gottron-papules"
            ],
            "legacyTerm": "Gottron papules"
          }
        ],
        "diagnoses": [
          {
            "term": "Dermatomyositis",
            "info": "An inflammatory myopathy with characteristic skin findings. The eyelid and knuckle pattern supports it; skin disease can occur without obvious weakness.",
            "type": "disease",
            "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
            "id": "disease-dermatomyositis",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Inflammatory myopathies",
                "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
              }
            ],
            "referenceIds": [
              "d-dermatomyositis"
            ],
            "legacyTerm": "Dermatomyositis"
          },
          {
            "term": "Cutaneous lupus erythematosus",
            "info": "Autoimmune skin inflammation can cause discoloration or a sun-sensitive rash.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-cutaneous-lupus-erythematosus",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-cutaneous-lupus-erythematosus"
            ],
            "legacyTerm": "Cutaneous lupus erythematosus"
          },
          {
            "term": "Contact dermatitis",
            "info": "Skin inflammation after an exposure can produce redness or other changes involving exposed areas.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-contact-dermatitis",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-contact-dermatitis"
            ],
            "legacyTerm": "Contact dermatitis"
          },
          {
            "term": "Psoriasis",
            "info": "Inflammatory skin changes can produce raised patches over extensor surfaces.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-psoriasis",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-psoriasis"
            ],
            "legacyTerm": "Psoriasis"
          },
          {
            "term": "Lichen planus",
            "info": "An inflammatory skin condition can produce raised, violaceous lesions.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-lichen-planus",
            "evidenceLabel": "Differential possibility",
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
            "info": "A head cold pack and acetaminophen suggest possible headache treatment. They do not establish a headache type or an intracranial mass.",
            "type": "symptom",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "symptom-possible-headaches",
            "sources": [
              {
                "title": "NINDS · Headache",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-07/NINDS_Headache_Booklet_Digital_508c%20%281%29.pdf"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-headache"
            ],
            "legacyTerm": "Possible headaches"
          }
        ],
        "diagnoses": [
          {
            "term": "Migraine",
            "info": "A primary headache disorder with characteristic episodes and associated features. A cold pack and pain medicine alone do not establish migraine.",
            "type": "disease",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "disease-migraine",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Headache",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-07/NINDS_Headache_Booklet_Digital_508c%20%281%29.pdf"
              }
            ],
            "referenceIds": [
              "d-migraine"
            ],
            "legacyTerm": "Migraine"
          },
          {
            "term": "Tension-type headache",
            "info": "A common primary headache pattern, often pressure-like. The belongings do not establish its defining clinical features.",
            "type": "disease",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "disease-tension-type-headache",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Headache",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-07/NINDS_Headache_Booklet_Digital_508c%20%281%29.pdf"
              }
            ],
            "referenceIds": [
              "d-tension-type-headache"
            ],
            "legacyTerm": "Tension-type headache"
          },
          {
            "term": "Intracranial mass",
            "info": "A structural intracranial lesion is one possible cause of headache. Imaging is needed; the cold pack and analgesic cannot distinguish it from a primary headache.",
            "type": "disease",
            "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
            "id": "disease-intracranial-mass",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Neurological tests and procedures",
                "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
              }
            ],
            "referenceIds": [
              "d-intracranial-mass",
              "d-brain-tumor"
            ],
            "legacyTerm": "Intracranial mass"
          },
          {
            "term": "Chronic subdural hematoma",
            "info": "A persistent collection of blood around the brain can cause head discomfort or altered neurologic function.",
            "type": "disease",
            "hint": "Consider injury or its consequences for nearby brain pathways.",
            "id": "disease-chronic-subdural-hematoma",
            "evidenceLabel": "Differential possibility",
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
            "info": "Aspirin and atorvastatin are visible in a pouch labeled Dr. Emerald. These medicines can be used for vascular prevention; they do not establish a prior stroke or a specific neurologic deficit.",
            "type": "observation",
            "hint": "Read the two medication labels and consider their shared use.",
            "id": "symptom-antiplatelet-and-statin-use",
            "evidenceLabel": "Possible interpretation",
            "referenceIds": []
          }
        ],
        "diagnoses": [
          {
            "term": "Ischemic stroke",
            "info": "Antiplatelet therapy and intensive lipid lowering can be used after an ischemic stroke. The photograph alone cannot confirm this history.",
            "hint": "Consider a previous vascular injury to the brain.",
            "type": "disease",
            "id": "disease-prior-ischemic-stroke",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-ischemic-stroke"
            ],
            "legacyTerm": "Prior ischemic stroke"
          },
          {
            "term": "Transient ischemic attack",
            "info": "A transient episode of focal neurologic dysfunction. It does not explain a lasting deficit; resolution and timing must be established.",
            "hint": "Consider transient symptoms caused by reduced brain blood flow.",
            "type": "disease",
            "id": "disease-transient-ischemic-attack",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Stroke overview",
                "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
              }
            ],
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
            "evidenceLabel": "Differential possibility",
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
        "observationText": "Aspirin and atorvastatin are visible in a pouch labeled Dr. Emerald. These medicines can be used for vascular prevention; they do not establish a prior stroke or a specific neurologic deficit."
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
    "description": "Dr. Emerald returned this annual activity log. Both columns request the same type of entry for the same review year.",
    "photos": [
      {
        "src": "assets/suspects/annual-activity-log.webp",
        "title": "Annual activity log",
        "people": [
          "B"
        ],
        "alt": "Dr. Emerald’s annual activity log, with equivalent activity/date entry boxes in both columns.",
        "width": 1024,
        "height": 1536
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
            "info": "The left side of the annual activity log is underused despite equivalent entry boxes. This suggests spatial inattention, not simply weakness or inability to see.",
            "type": "symptom",
            "hint": "Consider whether attention is distributed equally across both sides of space.",
            "id": "symptom-left-sided-spatial-neglect",
            "sources": [
              {
                "title": "NINDS · Stroke overview",
                "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
              }
            ],
            "evidenceLabel": "Possible interpretation",
            "referenceIds": [
              "s-hemispatial-neglect"
            ],
            "legacyTerm": "Left-sided spatial neglect"
          }
        ],
        "diagnoses": [
          {
            "term": "Stroke",
            "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
            "type": "disease",
            "hint": "Consider a vascular event that interrupts or damages a region of brain tissue.",
            "id": "disease-stroke",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Stroke overview",
                "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
              }
            ],
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
            "info": "A right-sided cerebral lesion can affect attention to left space. Imaging is required to establish a mass.",
            "type": "disease",
            "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
            "id": "disease-right-hemisphere-mass-lesion",
            "evidenceLabel": "Differential possibility",
            "sources": [
              {
                "title": "NINDS · Neurological tests and procedures",
                "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
              }
            ],
            "referenceIds": [
              "d-intracranial-mass",
              "d-brain-tumor"
            ],
            "legacyTerm": "Right-hemisphere mass lesion"
          },
          {
            "term": "Traumatic brain injury",
            "info": "A right-sided brain injury is another possible cause of spatial inattention.",
            "type": "disease",
            "hint": "Consider whether discomfort changes how a movement is performed.",
            "id": "disease-traumatic-brain-injury",
            "evidenceLabel": "Differential possibility",
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
            "info": "A scan and planned sampling suggest investigation, not a demonstrated neurologic symptom. The site and diagnosis are not explicitly stated.",
            "type": "observation",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
              }
            ],
            "referenceIds": []
          }
        ],
        "diagnoses": [
          {
            "id": "disease-brain-tumor",
            "term": "Brain tumor",
            "info": "A mass is one possible reason for image-guided sampling; neither tumor type nor malignancy is established.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
            "evidenceLabel": "Differential possibility",
            "referenceIds": []
          },
          {
            "id": "disease-brain-infection",
            "term": "Brain abscess",
            "info": "Infection can sometimes prompt sampling. The email does not provide clinical evidence confirming infection.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
        "observationText": "A scan and planned sampling suggest investigation, not a demonstrated neurologic symptom. The site and diagnosis are not explicitly stated."
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
            "info": "Emergency admission followed by a phased return suggests an acute event with recovery. The email does not name its cause.",
            "type": "observation",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "referenceIds": []
          }
        ],
        "diagnoses": [
          {
            "id": "disease-stroke",
            "term": "Stroke",
            "info": "An abrupt acquired deficit followed by recovery can fit a stroke history, but this message alone does not confirm it.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
            "info": "Other acquired neurologic injuries can also require admission and a graded return; a trauma history would be needed.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
        "observationText": "Emergency admission followed by a phased return suggests an acute event with recovery. The email does not name its cause."
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
            "info": "Holding a camera is an active posture. The message suggests possible action-related instability, not a documented resting tremor.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
              }
            ],
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
            "info": "Action tremor is compatible with essential tremor, but camera shake alone is insufficient.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-essential-tremor"
            ],
            "legacyTerm": "Essential tremor"
          },
          {
            "id": "disease-parkinson-disease",
            "term": "Parkinson disease",
            "info": "Parkinsonism remains a possible context when other findings fit; this email does not demonstrate resting tremor or bradykinesia.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
            "evidenceLabel": "Differential possibility",
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
            "info": "Looser clothing suggests reduced body bulk but does not establish muscle atrophy or its cause.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "referenceIds": [
              "s-muscle-atrophy"
            ],
            "legacyTerm": "Possible loss of muscle bulk"
          },
          {
            "id": "symptom-hand-clumsiness",
            "term": "Impaired fine motor control",
            "info": "Dropping a key suggests hand difficulty; strength, sensation and coordination remain unmeasured.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
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
            "info": "Progressive weakness and muscle wasting can occur in ALS, but these emails do not establish either the diagnosis or an examination pattern.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-amyotrophic-lateral-sclerosis"
            ],
            "legacyTerm": "Amyotrophic lateral sclerosis"
          },
          {
            "id": "disease-peripheral-neuropathy",
            "term": "Peripheral neuropathy",
            "info": "Peripheral nerve disease can impair hand function; distribution and sensory findings help distinguish it.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-peripheral-neuropathy"
            ],
            "legacyTerm": "Peripheral neuropathy"
          },
          {
            "id": "disease-cervical-myelopathy",
            "term": "Cervical myelopathy",
            "info": "Spinal cord disease can cause hand clumsiness; examination and imaging are needed.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
            "info": "Declining performance with repeated effort and improvement after a break suggest fatigable weakness. This differs from general tiredness.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf"
              }
            ],
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
            "info": "Use-related weakness with recovery after rest supports this possibility; clinical assessment is still required.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
            "info": "The message describes skin symptoms aggravated by sun exposure. Several inflammatory or medication-related conditions can do this.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
              }
            ],
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
            "info": "Sun-aggravated skin disease can fit dermatomyositis, particularly with the separate eyelid and knuckle clues.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
            "referenceIds": [
              "d-dermatomyositis"
            ],
            "legacyTerm": "Dermatomyositis"
          },
          {
            "id": "disease-cutaneous-lupus-erythematosus",
            "term": "Cutaneous lupus erythematosus",
            "info": "Lupus is another possible cause of sun-sensitive skin disease; the email does not distinguish it.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility",
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
            "evidenceLabel": "Differential possibility",
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
  }
];
window.SUSPECT_CLUES=window.SUSPECT_SETS.find(set=>set.id==='reception');
