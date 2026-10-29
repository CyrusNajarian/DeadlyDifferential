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
            "term": "Reduced facial expression",
            "aliases": [
              "hypomimia",
              "masked facies",
              "mask like face",
              "masked face",
              "facial masking",
              "flat expression",
              "expressionless face",
              "reduced expression",
              "lack of expression",
              "little facial expression",
              "decreased facial expression",
              "reduced facial movement",
              "hypomimic",
              "facial hypokinesia",
              "masklike facies",
              "poker face",
              "blank face",
              "blank expression",
              "unexpressive face",
              "not smiling",
              "does not smile",
              "doesnt smile",
              "barely smiling",
              "same expression in every photo",
              "face barely moves",
              "little expression",
              "diminished facial expression",
              "amimia",
              "hypomimic face",
              "limited facial animation",
              "Reduced facial expression"
            ],
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
            "evidenceLabel": "Possible interpretation"
          }
        ],
        "diagnoses": [
          {
            "term": "Parkinson disease",
            "aliases": [
              "parkinsons",
              "parkinson",
              "parkinsons disease",
              "parkinson disease",
              "PD",
              "parkinsonism",
              "idiopathic parkinson disease"
            ],
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
            ]
          },
          {
            "term": "Drug-induced parkinsonism",
            "aliases": [
              "drug induced parkinsonism",
              "medication induced parkinsonism",
              "neuroleptic induced parkinsonism",
              "DIP"
            ],
            "info": "Dopamine-blocking medication can reduce spontaneous movement, including facial expression.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-drug-induced-parkinsonism",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Progressive supranuclear palsy",
            "aliases": [
              "PSP",
              "Steele Richardson Olszewski syndrome",
              "Progressive supranuclear palsy"
            ],
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
            ]
          },
          {
            "term": "Multiple system atrophy",
            "aliases": [
              "MSA",
              "Shy Drager syndrome",
              "Multiple system atrophy"
            ],
            "info": "Degeneration in movement-control systems can produce reduced spontaneous movement.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-multiple-system-atrophy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Dementia with Lewy bodies",
            "aliases": [
              "DLB",
              "Lewy body dementia",
              "LBD",
              "Dementia with Lewy bodies"
            ],
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
            ]
          },
          {
            "term": "Vascular parkinsonism",
            "aliases": [
              "vascular Parkinson disease",
              "arteriosclerotic parkinsonism",
              "Vascular parkinsonism"
            ],
            "info": "Vascular injury to movement-control pathways can produce parkinsonian features.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-vascular-parkinsonism",
            "evidenceLabel": "Differential possibility"
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
            "term": "Hand-muscle wasting",
            "aliases": [
              "atrophy",
              "muscle atrophy",
              "muscle wasting",
              "hand atrophy",
              "hand wasting",
              "intrinsic hand wasting",
              "intrinsic hand muscle wasting",
              "intrinsic muscle atrophy",
              "first dorsal interosseous atrophy",
              "interosseous wasting",
              "interosseous atrophy",
              "thenar atrophy",
              "thenar wasting",
              "loss of muscle bulk",
              "muscle loss",
              "amyotrophy",
              "wasting",
              "atrophied hand",
              "split hand",
              "split hand syndrome",
              "thin hands",
              "bony hands",
              "sunken hands",
              "hollow hands",
              "hollowing between fingers",
              "hollow between thumb and index finger",
              "wasted hand muscles",
              "reduced hand muscle bulk",
              "small hand muscles",
              "muscle wasting in hands",
              "atrophy of intrinsic hand muscles",
              "dorsal interosseous atrophy",
              "thenar eminence wasting",
              "hypothenar wasting",
              "hand muscle atrophy",
              "skinny hands",
              "hollowing of the hand",
              "Hand muscle wasting"
            ],
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
            "evidenceLabel": "Possible interpretation"
          }
        ],
        "diagnoses": [
          {
            "term": "Amyotrophic lateral sclerosis",
            "aliases": [
              "ALS",
              "motor neuron disease",
              "motor neurone disease",
              "MND",
              "Lou Gehrig disease",
              "Lou Gehrigs disease",
              "amyotrophic lateral sclerosis disease",
              "Amyotrophic lateral sclerosis"
            ],
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
            ]
          },
          {
            "term": "Ulnar neuropathy",
            "aliases": [
              "ulnar nerve injury",
              "ulnar nerve palsy",
              "ulnar nerve lesion",
              "ulnar nerve damage",
              "ulnar nerve entrapment",
              "cubital tunnel syndrome",
              "Ulnar neuropathy"
            ],
            "info": "An ulnar nerve disorder can also cause interosseous wasting.",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-ulnar-neuropathy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Cervical radiculopathy",
            "aliases": [
              "radiculopathy",
              "C8 radiculopathy",
              "T1 radiculopathy",
              "C8 T1 radiculopathy",
              "cervical nerve root lesion",
              "Cervical radiculopathy"
            ],
            "info": "Lower cervical nerve-root disease can cause hand-muscle wasting.",
            "type": "disease",
            "hint": "Consider dysfunction where a nerve root leaves the spine.",
            "id": "disease-cervical-radiculopathy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Multifocal motor neuropathy",
            "aliases": [
              "MMN",
              "multifocal motor neuropathy with conduction block",
              "Multifocal motor neuropathy"
            ],
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
            ]
          },
          {
            "term": "Cervical myelopathy",
            "aliases": [
              "cervical spondylotic myelopathy",
              "degenerative cervical myelopathy",
              "cervical myeloradiculopathy",
              "Cervical myelopathy"
            ],
            "info": "Disease in the cervical cord can affect pathways and motor cells supplying the hands.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider pathways passing through the spinal cord.",
            "id": "disease-cervical-myelopathy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Brachial plexopathy",
            "aliases": [
              "lower trunk plexopathy",
              "lower brachial plexus lesion",
              "brachial plexus injury",
              "Brachial plexopathy"
            ],
            "info": "Injury to the nerve network supplying the arm can reduce hand-muscle function and bulk.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a problem in the nerve network between the neck and arm.",
            "id": "disease-brachial-plexopathy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Median neuropathy",
            "aliases": [
              "median nerve lesion",
              "median nerve palsy",
              "carpal tunnel syndrome",
              "CTS",
              "Median neuropathy"
            ],
            "info": "Impaired median nerve supply can cause wasting of muscles at the base of the thumb.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-median-neuropathy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Spinal muscular atrophy",
            "aliases": [
              "SMA",
              "adult onset spinal muscular atrophy",
              "Spinal muscular atrophy"
            ],
            "info": "Loss of lower motor neurons can cause weakness and muscle wasting.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-spinal-muscular-atrophy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Inclusion body myositis",
            "aliases": [
              "IBM",
              "sporadic inclusion body myositis",
              "Inclusion body myositis"
            ],
            "info": "Muscle disease can cause weakness and wasting, including in muscles used for finger flexion.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
            "id": "disease-inclusion-body-myositis",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Kennedy disease",
            "aliases": [
              "Kennedys disease",
              "spinobulbar muscular atrophy",
              "SBMA",
              "Kennedy disease"
            ],
            "info": "An inherited motor-neuron disorder can lead to weakness and loss of muscle bulk.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-kennedy-disease",
            "evidenceLabel": "Differential possibility"
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
            "aliases": [
              "drooping eyelid",
              "eyelid droop",
              "droopy eyelid",
              "drooping eyelids",
              "droopy eyelids",
              "lid droop",
              "right ptosis",
              "right eyelid droop",
              "unilateral ptosis",
              "blepharoptosis",
              "eyelid weakness",
              "asymmetric eyelids",
              "droopy eye",
              "one eyelid is lower",
              "one eye is more closed",
              "one eye looks smaller",
              "her eyelid is drooping",
              "right eye drooping",
              "drooping upper eyelid",
              "droopy lid",
              "upper lid droop",
              "asymmetric eye opening",
              "uneven eyelids",
              "partially closed eye",
              "Ptosis"
            ],
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
            "evidenceLabel": "Possible interpretation"
          },
          {
            "term": "Increasing eyelid droop over time",
            "aliases": [
              "fatigability",
              "fatigable weakness",
              "fatiguability",
              "fatiguable weakness",
              "fluctuating ptosis",
              "fatigable ptosis",
              "worsening ptosis",
              "progressive ptosis",
              "worsening eyelid droop",
              "eyelid fatigability",
              "fatigable eyelid weakness",
              "increasing ptosis",
              "eyelid droops more later",
              "eye gets droopier",
              "worse by the end of the evening",
              "worse later in the evening",
              "eyelid gets lower over time",
              "worsening throughout the evening",
              "fluctuating eyelid weakness",
              "fatigable muscle weakness",
              "diurnal variation",
              "diurnal worsening",
              "ptosis worse at night",
              "ptosis increases during the evening",
              "Increasing eyelid droop over time"
            ],
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
            "evidenceLabel": "Possible interpretation"
          }
        ],
        "diagnoses": [
          {
            "term": "Myasthenia gravis",
            "aliases": [
              "MG",
              "myasthenia",
              "ocular myasthenia",
              "ocular MG",
              "ocular myasthenia gravis",
              "generalized myasthenia gravis",
              "myastenia gravis",
              "myasthenia gravas",
              "Myasthenia gravis",
              "myasthenic disorder"
            ],
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
            ]
          },
          {
            "term": "Third nerve palsy",
            "aliases": [
              "oculomotor palsy",
              "oculomotor nerve palsy",
              "CN III palsy",
              "cranial nerve 3 palsy",
              "cranial nerve III palsy",
              "Third nerve palsy"
            ],
            "info": "An oculomotor nerve disorder is another possible cause of ptosis.",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-third-nerve-palsy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Horner syndrome",
            "aliases": [
              "horners",
              "Horners syndrome",
              "Horner",
              "Horner syndrome"
            ],
            "info": "Interruption of sympathetic input to the eye can cause mild upper-eyelid drooping.",
            "type": "disease",
            "hint": "Consider interruption of the sympathetic pathway supplying the eye.",
            "id": "disease-horner-syndrome",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Aponeurotic ptosis",
            "aliases": [
              "levator aponeurosis dehiscence",
              "levator dehiscence",
              "involutional ptosis",
              "Aponeurotic ptosis"
            ],
            "info": "Stretching or separation of the eyelid support mechanism can cause lid droop.",
            "kind": "differential",
            "type": "disease",
            "hint": "Compare the height of the upper eyelids.",
            "id": "disease-aponeurotic-ptosis",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Mechanical ptosis",
            "aliases": [
              "mechanical eyelid droop",
              "Mechanical ptosis"
            ],
            "info": "Additional weight or a local structural change can lower an eyelid.",
            "kind": "differential",
            "type": "disease",
            "hint": "Compare the height of the upper eyelids.",
            "id": "disease-mechanical-ptosis",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Chronic progressive external ophthalmoplegia",
            "aliases": [
              "CPEO",
              "progressive external ophthalmoplegia",
              "mitochondrial myopathy",
              "Chronic progressive external ophthalmoplegia"
            ],
            "info": "Disease affecting eye muscles can cause eyelid droop and impaired eye movements.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-chronic-progressive-external-ophthalmoplegia",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Myotonic dystrophy",
            "aliases": [
              "DM1",
              "DM2",
              "dystrophia myotonica",
              "Steinert disease",
              "Myotonic dystrophy"
            ],
            "info": "An inherited muscle disorder can affect eyelid position and muscle function.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-myotonic-dystrophy",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Oculopharyngeal muscular dystrophy",
            "aliases": [
              "OPMD",
              "oculopharyngeal dystrophy",
              "Oculopharyngeal muscular dystrophy"
            ],
            "info": "An inherited muscle disorder can affect the eyelids and swallowing muscles.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a muscle disorder that can involve the eyes or other muscle groups.",
            "id": "disease-oculopharyngeal-muscular-dystrophy",
            "evidenceLabel": "Differential possibility"
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
            "aliases": [
              "heliotrope",
              "violet eyelids",
              "purple eyelids",
              "purple eyelid rash",
              "eyelid rash",
              "periorbital rash",
              "violaceous eyelid rash",
              "purple discoloration around eyes",
              "violet discoloration around eyes",
              "periorbital discoloration",
              "rash around eyes",
              "purple around eyes",
              "purple around her eyes",
              "purple rash around eyes",
              "dusky eyelids",
              "violet rash around eyes",
              "purple upper eyelids",
              "reddish purple eyelids",
              "discolored eyelids",
              "periorbital erythema",
              "violaceous periorbital rash",
              "heliotrope eruption",
              "Heliotrope rash"
            ],
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
            "evidenceLabel": "Possible interpretation"
          },
          {
            "term": "Gottron papules",
            "aliases": [
              "Gottrons papules",
              "Gottron",
              "Gottrons",
              "knuckle rash",
              "rash over knuckles",
              "knuckle papules",
              "raised knuckle patches",
              "purple knuckles",
              "rash on hands",
              "hand rash",
              "papules over knuckles",
              "red knuckles",
              "red patches on knuckles",
              "scaly knuckles",
              "scaly knuckle rash",
              "red bumps on knuckles",
              "purple bumps on knuckles",
              "violaceous papules over knuckles",
              "extensor joint rash",
              "gottron lesions",
              "gottron eruption",
              "rash on finger joints",
              "raised rash on knuckles",
              "Gottron papules"
            ],
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
            "evidenceLabel": "Possible interpretation"
          }
        ],
        "diagnoses": [
          {
            "term": "Dermatomyositis",
            "aliases": [
              "dermatomyositis disease",
              "DM",
              "dermatomiositis",
              "dermatomyositits",
              "dermatomyosytis",
              "dermatomyositis with rash",
              "Dermatomyositis",
              "dermatomyostitis"
            ],
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
            ]
          },
          {
            "term": "Cutaneous lupus erythematosus",
            "aliases": [
              "lupus",
              "SLE",
              "systemic lupus erythematosus",
              "cutaneous lupus",
              "discoid lupus",
              "Cutaneous lupus erythematosus"
            ],
            "info": "Autoimmune skin inflammation can cause discoloration or a sun-sensitive rash.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-cutaneous-lupus-erythematosus",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Contact dermatitis",
            "aliases": [
              "allergic contact dermatitis",
              "irritant contact dermatitis",
              "eyelid dermatitis",
              "eczema",
              "atopic dermatitis",
              "Contact dermatitis"
            ],
            "info": "Skin inflammation after an exposure can produce redness or other changes involving exposed areas.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-contact-dermatitis",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Psoriasis",
            "aliases": [
              "psoriatic rash",
              "Psoriasis"
            ],
            "info": "Inflammatory skin changes can produce raised patches over extensor surfaces.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-psoriasis",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Lichen planus",
            "aliases": [
              "lichen planus rash",
              "Lichen planus"
            ],
            "info": "An inflammatory skin condition can produce raised, violaceous lesions.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-lichen-planus",
            "evidenceLabel": "Differential possibility"
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
            "term": "Possible headaches",
            "aliases": [
              "headache",
              "headaches",
              "head pain",
              "possible headache",
              "possible headaches",
              "cold pack",
              "ice pack",
              "analgesics",
              "acetaminophen",
              "pain relief",
              "headache remedies",
              "headache medication"
            ],
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
            "evidenceLabel": "Possible interpretation"
          }
        ],
        "diagnoses": [
          {
            "term": "Migraine",
            "aliases": [
              "migraine headache",
              "migraines",
              "Migraine",
              "migraine headaches"
            ],
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
            ]
          },
          {
            "term": "Tension-type headache",
            "aliases": [
              "tension headache",
              "tension headaches",
              "Tension-type headache",
              "TTH"
            ],
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
            ]
          },
          {
            "term": "Intracranial mass",
            "aliases": [
              "brain tumor",
              "brain tumour",
              "brain mass",
              "intracranial tumor",
              "intracranial tumour",
              "space occupying lesion",
              "intracranial neoplasm",
              "glioma",
              "intracranial mass",
              "right-hemisphere mass lesion",
              "tumor",
              "tumour",
              "brain neoplasm",
              "cerebral tumor",
              "cerebral tumour",
              "neoplasm"
            ],
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
            ]
          },
          {
            "term": "Chronic subdural hematoma",
            "aliases": [
              "subdural hematoma",
              "subdural haematoma",
              "chronic subdural haematoma",
              "SDH",
              "Chronic subdural hematoma"
            ],
            "info": "A persistent collection of blood around the brain can cause head discomfort or altered neurologic function.",
            "type": "disease",
            "hint": "Consider injury or its consequences for nearby brain pathways.",
            "id": "disease-chronic-subdural-hematoma",
            "evidenceLabel": "Differential possibility"
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
            "type": "symptom",
            "hint": "Read the two medication labels and consider their shared use.",
            "id": "symptom-antiplatelet-and-statin-use",
            "evidenceLabel": "Possible interpretation"
          }
        ],
        "diagnoses": [
          {
            "term": "Prior ischemic stroke",
            "aliases": [
              "stroke",
              "ischemic stroke",
              "ischaemic stroke",
              "prior stroke",
              "previous stroke",
              "old stroke",
              "CVA",
              "cerebrovascular accident",
              "secondary stroke prevention"
            ],
            "info": "Antiplatelet therapy and intensive lipid lowering can be used after an ischemic stroke. The photograph alone cannot confirm this history.",
            "hint": "Consider a previous vascular injury to the brain.",
            "type": "disease",
            "id": "disease-prior-ischemic-stroke",
            "evidenceLabel": "Differential possibility"
          },
          {
            "term": "Transient ischemic attack",
            "aliases": [
              "TIA",
              "transient ischaemic attack",
              "prior TIA"
            ],
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
            ]
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
            "type": "disease",
            "id": "disease-coronary-artery-disease",
            "evidenceLabel": "Differential possibility"
          }
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
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
        "symptomSingular": "observation"
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
            "term": "Left-sided spatial neglect",
            "aliases": [
              "left neglect",
              "left sided neglect",
              "hemineglect",
              "hemispatial neglect",
              "left hemispatial neglect",
              "unilateral neglect",
              "spatial neglect",
              "visual neglect",
              "neglect",
              "left inattention",
              "left sided inattention",
              "left visual inattention",
              "neglect dysgraphia",
              "rightward writing bias",
              "writing only on the right",
              "writing on right side",
              "notes on right half",
              "blank left half",
              "left half blank",
              "writing crowded to the right",
              "writing confined to the right side",
              "Left sided spatial neglect",
              "left column blank",
              "blank left column",
              "left column unfilled",
              "only right column filled",
              "only right side completed",
              "omitted left column",
              "incomplete left side",
              "ignoring left side",
              "left column neglected"
            ],
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
            "evidenceLabel": "Possible interpretation"
          }
        ],
        "diagnoses": [
          {
            "term": "Stroke",
            "aliases": [
              "Prior right-hemisphere stroke",
              "prior stroke",
              "stroke",
              "old stroke",
              "previous stroke",
              "CVA",
              "cerebrovascular accident",
              "right parietal stroke",
              "right MCA stroke",
              "right middle cerebral artery stroke",
              "right hemispheric stroke",
              "ischemic stroke",
              "haemorrhagic stroke",
              "hemorrhagic stroke"
            ],
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
            ]
          },
          {
            "term": "Right-hemisphere mass lesion",
            "aliases": [
              "brain tumor",
              "brain tumour",
              "brain mass",
              "right parietal tumor",
              "right parietal tumour",
              "intracranial mass",
              "space occupying lesion",
              "right-hemisphere mass lesion",
              "tumor",
              "tumour",
              "brain neoplasm",
              "cerebral tumor",
              "cerebral tumour",
              "intracranial neoplasm",
              "intracranial tumor",
              "intracranial tumour",
              "neoplasm"
            ],
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
            ]
          },
          {
            "term": "Traumatic brain injury",
            "aliases": [
              "TBI",
              "head injury",
              "brain injury",
              "Traumatic brain injury"
            ],
            "info": "A right-sided brain injury is another possible cause of spatial inattention.",
            "type": "disease",
            "hint": "Consider whether discomfort changes how a movement is performed.",
            "id": "disease-traumatic-brain-injury",
            "evidenceLabel": "Differential possibility"
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
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
              }
            ]
          }
        ],
        "diagnoses": [
          {
            "id": "disease-brain-tumor",
            "term": "Brain tumor",
            "aliases": [
              "brain tumour",
              "intracranial mass",
              "glioma"
            ],
            "info": "A mass is one possible reason for image-guided sampling; neither tumor type nor malignancy is established.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-inflammatory-brain-lesion",
            "term": "Inflammatory brain lesion",
            "aliases": [
              "inflammatory lesion",
              "brain inflammation"
            ],
            "info": "Selected inflammatory lesions may require tissue diagnosis. The procedural reference alone cannot distinguish them from a tumor.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-brain-infection",
            "term": "Brain infection",
            "aliases": [
              "brain abscess",
              "cerebral abscess"
            ],
            "info": "Infection can sometimes prompt sampling. The email does not provide clinical evidence confirming infection.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
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
        "emailId": "silver-cover"
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
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation"
          }
        ],
        "diagnoses": [
          {
            "id": "disease-stroke",
            "term": "Stroke",
            "aliases": [
              "prior stroke",
              "ischemic stroke",
              "ischaemic stroke",
              "CVA"
            ],
            "info": "An abrupt acquired deficit followed by recovery can fit a stroke history, but this message alone does not confirm it.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-acquired-brain-injury",
            "term": "Acquired brain injury",
            "aliases": [
              "traumatic brain injury",
              "TBI",
              "brain injury"
            ],
            "info": "Other acquired neurologic injuries can also require admission and a graded return; a trauma history would be needed.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
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
        "emailId": "emerald-review"
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
            "term": "Possible action tremor",
            "aliases": [
              "action tremor",
              "postural tremor",
              "hand tremor",
              "shaking while holding camera",
              "shaky camera",
              "tremor"
            ],
            "info": "Holding a camera is an active posture. The message suggests possible action-related instability, not a documented resting tremor.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
              }
            ]
          }
        ],
        "diagnoses": [
          {
            "id": "disease-essential-tremor",
            "term": "Essential tremor",
            "aliases": [
              "ET"
            ],
            "info": "Action tremor is compatible with essential tremor, but camera shake alone is insufficient.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-parkinson-disease",
            "term": "Parkinson disease",
            "aliases": [
              "PD",
              "parkinsons disease",
              "parkinson disease"
            ],
            "info": "Parkinsonism remains a possible context when other findings fit; this email does not demonstrate resting tremor or bradykinesia.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
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
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
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
            "term": "Possible loss of muscle bulk",
            "aliases": [
              "muscle wasting",
              "atrophy",
              "loss of muscle bulk",
              "weight loss",
              "loose scrubs"
            ],
            "info": "Looser clothing suggests reduced body bulk but does not establish muscle atrophy or its cause.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation"
          },
          {
            "id": "symptom-hand-clumsiness",
            "term": "Hand clumsiness",
            "aliases": [
              "hand weakness",
              "dropping objects",
              "dropping key",
              "impaired dexterity"
            ],
            "info": "Dropping a key suggests hand difficulty; strength, sensation and coordination remain unmeasured.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation"
          }
        ],
        "diagnoses": [
          {
            "id": "disease-amyotrophic-lateral-sclerosis",
            "term": "Amyotrophic lateral sclerosis",
            "aliases": [
              "ALS",
              "motor neuron disease"
            ],
            "info": "Progressive weakness and muscle wasting can occur in ALS, but these emails do not establish either the diagnosis or an examination pattern.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-peripheral-neuropathy",
            "term": "Peripheral neuropathy",
            "aliases": [
              "neuropathy",
              "ulnar neuropathy"
            ],
            "info": "Peripheral nerve disease can impair hand function; distribution and sensory findings help distinguish it.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-cervical-myelopathy",
            "term": "Cervical myelopathy",
            "aliases": [
              "cervical cord disease",
              "cervical spondylotic myelopathy"
            ],
            "info": "Spinal cord disease can cause hand clumsiness; examination and imaging are needed.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
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
            "term": "Fatigable limb weakness",
            "aliases": [
              "fatigable weakness",
              "motor fatigability",
              "fatigability",
              "weakness with repeated use",
              "improves with rest",
              "use dependent weakness"
            ],
            "info": "Declining performance with repeated effort and improvement after a break suggest fatigable weakness. This differs from general tiredness.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf"
              }
            ]
          }
        ],
        "diagnoses": [
          {
            "id": "disease-myasthenia-gravis",
            "term": "Myasthenia gravis",
            "aliases": [
              "MG",
              "generalized myasthenia gravis",
              "myasthenia"
            ],
            "info": "Use-related weakness with recovery after rest supports this possibility; clinical assessment is still required.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
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
            "term": "Photosensitivity",
            "aliases": [
              "sun sensitivity",
              "sun sensitive rash",
              "photosensitive rash",
              "skin worsens in sunlight",
              "rash with sun"
            ],
            "info": "The message describes skin symptoms aggravated by sun exposure. Several inflammatory or medication-related conditions can do this.",
            "type": "symptom",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Reported observation",
            "sources": [
              {
                "title": "NINDS · Further reading",
                "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
              }
            ]
          }
        ],
        "diagnoses": [
          {
            "id": "disease-dermatomyositis",
            "term": "Dermatomyositis",
            "aliases": [
              "DM",
              "cutaneous dermatomyositis",
              "amyopathic dermatomyositis"
            ],
            "info": "Sun-aggravated skin disease can fit dermatomyositis, particularly with the separate eyelid and knuckle clues.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-cutaneous-lupus-erythematosus",
            "term": "Cutaneous lupus erythematosus",
            "aliases": [
              "lupus",
              "cutaneous lupus",
              "SLE",
              "systemic lupus erythematosus"
            ],
            "info": "Lupus is another possible cause of sun-sensitive skin disease; the email does not distinguish it.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
          },
          {
            "id": "disease-drug-induced-photosensitivity",
            "term": "Drug-induced photosensitivity",
            "aliases": [
              "medication induced photosensitivity",
              "photosensitizing medication"
            ],
            "info": "A medication-related reaction is another possibility if a relevant exposure is established.",
            "type": "disease",
            "hint": "Consider the reported observation and its possible explanations.",
            "evidenceLabel": "Differential possibility"
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
