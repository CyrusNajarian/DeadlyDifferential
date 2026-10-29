window.SUSPECT_SETS=[
  {
    "id": "reception",
    "title": "The reception photographs",
    "photos": [
      {
        "src": "assets/suspects/reception-1.webp",
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
        "src": "assets/suspects/reception-3.webp",
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
        "src": "assets/suspects/reception-4.webp",
        "title": "Cake",
        "people": [
          "D",
          "E",
          "F"
        ],
        "alt": "Three colleagues serving wedding cake."
      },
      {
        "src": "assets/suspects/reception-5.webp",
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
            "term": "Reduced facial expression",
            "aliases": [
              "hypomimia",
              "masked facies",
              "mask like face",
              "masklike face",
              "masked face",
              "facial masking",
              "flat expression",
              "flat affect",
              "expressionless face",
              "reduced expression",
              "lack of expression",
              "little facial expression",
              "decreased facial expression",
              "reduced facial movement",
              "hypokinesia",
              "bradykinesia",
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
            "info": "This finding involves little facial movement across different social situations.",
            "type": "symptom",
            "hint": "Compare spontaneous facial movement across different situations.",
            "id": "symptom-reduced-facial-expression"
          }
        ],
        "diagnoses": [
          {
            "term": "Parkinson disease",
            "aliases": [
              "parkinsons",
              "parkinson",
              "parkinsons disease",
              "Parkinson’s disease",
              "parkinson disease",
              "PD",
              "parkinsonism",
              "idiopathic parkinson disease",
              "Parkinson disease",
              "Parkinsons disease",
              "Parkinson",
              "Parkinsons"
            ],
            "info": "Reduced facial expression can occur in parkinsonism.",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-parkinson-disease"
          },
          {
            "term": "Drug-induced parkinsonism",
            "aliases": [
              "drug induced parkinsonism",
              "medication induced parkinsonism",
              "neuroleptic induced parkinsonism",
              "DIP",
              "Drug induced parkinsonism"
            ],
            "info": "Dopamine-blocking medication can reduce spontaneous movement, including facial expression.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-drug-induced-parkinsonism"
          },
          {
            "term": "Progressive supranuclear palsy",
            "aliases": [
              "PSP",
              "Steele Richardson Olszewski syndrome",
              "Progressive supranuclear palsy"
            ],
            "info": "This degenerative movement disorder can reduce spontaneous facial and other movements.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-progressive-supranuclear-palsy"
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
            "id": "disease-multiple-system-atrophy"
          },
          {
            "term": "Dementia with Lewy bodies",
            "aliases": [
              "DLB",
              "Lewy body dementia",
              "LBD",
              "Dementia with Lewy bodies"
            ],
            "info": "This neurodegenerative disorder can involve parkinsonian movement changes.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider a movement disorder affecting automatic movement and motor control.",
            "id": "disease-dementia-with-lewy-bodies"
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
            "id": "disease-vascular-parkinsonism"
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
            "info": "Hollowing between the metacarpals indicates reduced intrinsic hand-muscle bulk.",
            "type": "symptom",
            "hint": "Look for changes in muscle bulk rather than just the position of a limb.",
            "id": "symptom-hand-muscle-wasting"
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
            "info": "ALS can cause focal hand-muscle wasting.",
            "type": "disease",
            "hint": "Consider disease affecting the neurons that drive muscle contraction.",
            "id": "disease-amyotrophic-lateral-sclerosis"
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
            "id": "disease-ulnar-neuropathy"
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
            "id": "disease-cervical-radiculopathy"
          },
          {
            "term": "Multifocal motor neuropathy",
            "aliases": [
              "MMN",
              "multifocal motor neuropathy with conduction block",
              "Multifocal motor neuropathy"
            ],
            "info": "Impaired motor nerve function can cause focal weakness and loss of muscle bulk.",
            "kind": "differential",
            "type": "disease",
            "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
            "id": "disease-multifocal-motor-neuropathy"
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
            "id": "disease-cervical-myelopathy"
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
            "id": "disease-brachial-plexopathy"
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
            "id": "disease-median-neuropathy"
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
            "id": "disease-spinal-muscular-atrophy"
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
            "id": "disease-inclusion-body-myositis"
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
            "id": "disease-kennedy-disease"
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
            "info": "One upper eyelid sits lower than the other.",
            "type": "symptom",
            "hint": "Compare the height of the upper eyelids.",
            "id": "symptom-ptosis"
          },
          {
            "term": "Increasing eyelid droop over time",
            "aliases": [
              "fatigability",
              "fatigable weakness",
              "fatigue",
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
            "info": "Comparing the ordered photographs shows increasing eyelid asymmetry.",
            "type": "symptom",
            "hint": "Compare the height of the upper eyelids.",
            "id": "symptom-increasing-eyelid-droop-over-time"
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
            "info": "Fluctuating or fatigable ptosis is compatible with myasthenia gravis.",
            "type": "disease",
            "hint": "Consider impaired transmission between a nerve and its muscle.",
            "id": "disease-myasthenia-gravis"
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
            "id": "disease-third-nerve-palsy"
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
            "id": "disease-horner-syndrome"
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
            "id": "disease-aponeurotic-ptosis"
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
            "id": "disease-mechanical-ptosis"
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
            "id": "disease-chronic-progressive-external-ophthalmoplegia"
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
            "id": "disease-myotonic-dystrophy"
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
            "id": "disease-oculopharyngeal-muscular-dystrophy"
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
            "info": "A violaceous discoloration is visible around the upper eyelids.",
            "type": "symptom",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "symptom-heliotrope-rash"
          },
          {
            "term": "Gottron papules",
            "aliases": [
              "Gottrons papules",
              "Gottron",
              "Gottrons",
              "Gottron sign",
              "Gottrons sign",
              "knuckle rash",
              "rash over knuckles",
              "knuckle papules",
              "raised knuckle patches",
              "purple knuckles",
              "rash on hands",
              "hand rash",
              "papules over knuckles",
              "rash",
              "skin rash",
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
            "info": "Raised discolored patches appear over the dorsal knuckle joints.",
            "type": "symptom",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "symptom-gottron-papules"
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
              "dermatomyositis",
              "dermatomyostitis"
            ],
            "info": "An inflammatory muscle and skin condition can produce eyelid or knuckle changes and photosensitive rashes.",
            "type": "disease",
            "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
            "id": "disease-dermatomyositis"
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
            "id": "disease-cutaneous-lupus-erythematosus"
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
            "id": "disease-contact-dermatitis"
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
            "id": "disease-psoriasis"
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
            "id": "disease-lichen-planus"
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
        "src": "assets/suspects/team-room.webp",
        "title": "Shared workroom",
        "people": [
          "A",
          "F"
        ],
        "alt": "Personal bags, lunch items and everyday belongings on a shared hospital workroom desk.",
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
              "headache medication",
              "Possible headaches"
            ],
            "info": "Head discomfort could lead someone to use a cold pack or an over-the-counter pain reliever.",
            "type": "symptom",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "symptom-possible-headaches"
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
            "info": "A primary headache disorder can cause episodes of head pain and prompt symptom-relief measures.",
            "type": "disease",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "disease-migraine"
          },
          {
            "term": "Tension-type headache",
            "aliases": [
              "tension headache",
              "tension headaches",
              "Tension-type headache",
              "tension type headache",
              "TTH",
              "Tension type headache"
            ],
            "info": "A primary headache disorder can cause head discomfort that prompts use of common pain-relief measures.",
            "type": "disease",
            "hint": "Consider discomfort involving the head and the mechanisms that can produce it.",
            "id": "disease-tension-type-headache"
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
              "neoplasm",
              "Intracranial mass"
            ],
            "info": "A mass can irritate pain-sensitive structures or alter pressure within the skull.",
            "type": "disease",
            "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
            "id": "disease-intracranial-mass"
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
            "id": "disease-chronic-subdural-hematoma"
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
        "id": "F",
        "name": "Dr. Rust",
        "color": "#dc986d",
        "look": "Rust dress · pearl earrings · curls",
        "observable": true,
        "cover": 0,
        "symptoms": [
          {
            "term": "Possible photosensitivity",
            "aliases": [
              "sun protection",
              "sunscreen",
              "SPF",
              "SPF 50",
              "concealer",
              "makeup",
              "foundation",
              "skin camouflage",
              "rash concealment",
              "covering a rash",
              "photosensitivity",
              "photosensitive rash",
              "photosensitive skin",
              "sun sensitivity",
              "sensitivity to sunlight",
              "Possible photosensitivity"
            ],
            "info": "Skin changes aggravated by sunlight could prompt sun protection or cosmetic coverage.",
            "type": "symptom",
            "hint": "Consider whether exposure to light could aggravate a skin change.",
            "id": "symptom-possible-photosensitivity"
          }
        ],
        "diagnoses": [
          {
            "term": "Dermatomyositis",
            "aliases": [
              "DM",
              "dermatomiositis",
              "dermatomyositits",
              "cutaneous dermatomyositis",
              "amyopathic dermatomyositis",
              "Dermatomyositis",
              "dermatomyositis",
              "dermatomyosytis",
              "dermatomyostitis"
            ],
            "info": "An inflammatory muscle and skin condition can produce eyelid or knuckle changes and photosensitive rashes.",
            "type": "disease",
            "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
            "id": "disease-dermatomyositis"
          },
          {
            "term": "Cutaneous lupus erythematosus",
            "aliases": [
              "cutaneous lupus",
              "lupus",
              "SLE",
              "systemic lupus erythematosus",
              "discoid lupus",
              "Cutaneous lupus erythematosus"
            ],
            "info": "Autoimmune skin inflammation can cause discoloration or a sun-sensitive rash.",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-cutaneous-lupus-erythematosus"
          },
          {
            "term": "Rosacea",
            "aliases": [
              "acne rosacea",
              "Rosacea"
            ],
            "info": "Facial skin inflammation can cause redness that prompts sun protection or cosmetic coverage.",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-rosacea"
          },
          {
            "term": "Contact dermatitis",
            "aliases": [
              "eczema",
              "allergic contact dermatitis",
              "irritant contact dermatitis",
              "eyelid dermatitis",
              "Contact dermatitis"
            ],
            "info": "Skin inflammation after an exposure can produce redness or other changes involving exposed areas.",
            "type": "disease",
            "hint": "Consider the distribution and character of changes in the skin.",
            "id": "disease-contact-dermatitis"
          }
        ],
        "prompts": [
          "Which personal-care items belong to Dr. Rust? What might explain their use?",
          "How might these belongings fit with the other clues you have seen?"
        ],
        "hints": [
          "Consider the purposes of sunscreen and concealer.",
          "Use the skin distribution seen elsewhere to refine your possibilities."
        ],
        "symptomsNeeded": 1,
        "diagnosesNeeded": 1,
        "symptomStarThreshold": 1,
        "diagnosisStarThreshold": 3,
        "questions": [
          {
            "label": "Notice the finding",
            "prompt": "Which personal-care items belong to Dr. Rust? What might explain their use?",
            "hint": "Consider the purposes of sunscreen and concealer."
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
            "prompt": "How might these belongings fit with the other clues you have seen?",
            "hint": "Use the skin distribution seen elsewhere to refine your possibilities."
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
    ]
  },
  {
    "id": "interview-notes",
    "label": "Interview notes",
    "title": "The handwritten interview notes",
    "description": "Dr. Emerald wrote these notes during a patient interview. Examine the document as well as its contents.",
    "photos": [
      {
        "src": "assets/suspects/interview-notes-v2.webp",
        "title": "Patient-interview notes",
        "people": [
          "B"
        ],
        "alt": "A printed patient-interview form completed in blue handwriting and signed by Dr. Emerald.",
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
              "Left sided spatial neglect"
            ],
            "info": "Reduced attention to the left side of space can leave that side underused during a written task.",
            "type": "symptom",
            "hint": "Consider whether attention is distributed equally across both sides of space.",
            "id": "symptom-left-sided-spatial-neglect"
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
              "hemorrhagic stroke",
              "Stroke"
            ],
            "info": "A current or prior vascular injury can disrupt pathways responsible for attention to space.",
            "type": "disease",
            "hint": "Consider a vascular event that interrupts or damages a region of brain tissue.",
            "id": "disease-stroke"
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
              "neoplasm",
              "Right hemisphere mass lesion"
            ],
            "info": "A mass affecting attention networks can reduce awareness of one side of space.",
            "type": "disease",
            "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
            "id": "disease-right-hemisphere-mass-lesion"
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
            "id": "disease-traumatic-brain-injury"
          }
        ],
        "prompts": [
          "What do you notice about how Dr. Emerald used the page?",
          "What could account for this pattern in the author’s writing?"
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
            "prompt": "What do you notice about how Dr. Emerald used the page?",
            "hint": "Compare the two sides of the sheet."
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
            "prompt": "What could account for this pattern in the author’s writing?",
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
  }
];
window.SUSPECT_CLUES=window.SUSPECT_SETS[0];
