window.CASE_CONFIG={
  "title": "Deadly Differential",
  "caseLabel": "Case 01 · Department Retreat",
  "openingHeadline": "The retreat is over. The investigation begins.",
  "openingDescription": "The department chair has been found dead. The evidence suggests the killer left more than fingerprints behind.",
  "playerInstructions": "Translate everyday observations into neurologic signs. Build a differential. Identify the culprit, diagnosis, and localization.",
  "revealThreshold": 2,
  "clues": [
    {
      "title": "The Neck",
      "stages": [
        {
          "title": "Autopsy Report",
          "revealThreshold": 2,
          "media": {
            "type": "image",
            "src": "assets/culprit/autopsy-bilateral.webp",
            "alt": "Medical examiner report with neck examination photographs and case findings.",
            "caption": "Medical examiner report"
          },
          "questions": [
            {
              "label": "Notice the finding",
              "prompt": "Compare the marks on the two sides of the neck. What differs in their distribution or depth?",
              "hint": "Pay particular attention to the unilateral difference in the marks; pressure or contact may have differed between sides."
            },
            {
              "label": "Describe the symptom",
              "prompt": "If the victim was neurologically healthy, what functional problem in the assailant could create unequal bilateral force?",
              "hint": "Consider differences in strength, grip, coordination, sensation, attention, pain-limited effort, or involuntary movement between the arms."
            },
            {
              "label": "Where is it localized?",
              "prompt": "Where could a unilateral arm or grip deficit arise, especially if the leg on the same side is also abnormal?",
              "hint": "Compare contralateral brain and descending motor pathways with cervical cord, nerve root, brachial plexus, peripheral nerve, muscle, and orthopedic causes."
            },
            {
              "label": "Build the differential",
              "prompt": "Which conditions could produce the motor, sensory, attention, or pain-related changes you considered?",
              "hint": "Consider vascular, structural, inflammatory, movement, peripheral nerve, muscle, and local injury mechanisms. Do not assume that the marks establish a single mechanism."
            }
          ],
          "accepted": [
            {
              "type": "symptom",
              "term": "unilateral arm weakness",
              "aliases": [
                "one-sided arm weakness",
                "hemiparesis",
                "asymmetric arm strength",
                "arm hemiparesis",
                "one-sided upper limb weakness",
                "unilateral upper extremity weakness",
                "unilateral upper limb weakness",
                "weakness of one arm",
                "weakness on one side",
                "asymmetric arm weakness",
                "focal arm weakness",
                "contralateral arm weakness",
                "upper limb paresis",
                "arm paresis",
                "left arm weakness",
                "right arm weakness",
                "reduced strength in one arm",
                "weakness",
                "weak",
                "loss of strength",
                "reduced strength",
                "unilateral arm weakness"
              ],
              "info": "Reduced force in one arm can produce unequal pressure from the hands. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-unilateral-arm-weakness",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "asymmetric grip strength",
              "aliases": [
                "unequal grip",
                "weak grip on one side",
                "unilateral hand weakness",
                "asymmetrical grip strength",
                "asymmetric grip",
                "grip asymmetry",
                "unequal grip strength",
                "uneven grip strength",
                "unequal hand strength",
                "unequal hand pressure",
                "uneven hand pressure",
                "reduced grip on one side",
                "one hand weaker",
                "one sided grip weakness",
                "asymmetric hand strength",
                "weak left grip",
                "weak right grip",
                "asymmetric grip strength"
              ],
              "info": "Unequal hand force can produce an uneven pressure pattern. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-asymmetric-grip-strength",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "upper-limb dysmetria",
              "aliases": [
                "arm ataxia",
                "poor arm coordination",
                "past pointing",
                "arm dysmetria",
                "hand dysmetria",
                "upper limb ataxia",
                "upper extremity ataxia",
                "arm incoordination",
                "hand incoordination",
                "unilateral limb ataxia",
                "asymmetric coordination",
                "inaccurate arm movement",
                "poor hand coordination",
                "upper limb dysmetria"
              ],
              "info": "Imprecise placement or scaling of arm movement can alter applied pressure. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-upper-limb-dysmetria",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "unilateral tremor",
              "aliases": [
                "one-sided tremor",
                "asymmetric tremor",
                "asymmetric hand tremor",
                "unilateral hand tremor",
                "one sided hand tremor",
                "one sided shaking",
                "shaking in one hand",
                "one hand shakes",
                "left hand tremor",
                "right hand tremor",
                "asymmetrical tremor",
                "tremor on one side",
                "unilateral tremor"
              ],
              "info": "Rhythmic shaking on one side is a possible mechanism, but pressure marks do not document the movement itself.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-unilateral-tremor",
              "sources": [
                {
                  "title": "NINDS · Tremor",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "sensory loss",
              "aliases": [
                "arm numbness",
                "hand numbness",
                "impaired proprioception",
                "sensory deficit",
                "impaired sensation",
                "decreased sensation",
                "diminished sensation",
                "reduced sensation",
                "numbness",
                "hypoesthesia",
                "hypaesthesia",
                "hypesthesia",
                "loss of sensation",
                "loss of proprioception",
                "proprioceptive loss",
                "position sense loss",
                "impaired position sense",
                "tactile sensory loss",
                "impaired tactile feedback",
                "sensory loss"
              ],
              "info": "Reduced sensation or position feedback could affect movement. It requires a history or sensory examination and is not visible in pressure marks or scratches.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-sensory-loss",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "hemispatial neglect",
              "aliases": [
                "neglect",
                "unilateral neglect",
                "spatial neglect",
                "hemineglect",
                "spatial inattention",
                "unilateral spatial neglect",
                "unilateral inattention",
                "hemispatial inattention",
                "left neglect",
                "right neglect",
                "neglect of one side",
                "contralateral neglect",
                "sensory neglect",
                "motor neglect",
                "hemispatial neglect"
              ],
              "info": "Reduced attention to one side of space, rather than simply weakness or loss of vision on that side.",
              "hint": "Consider whether attention is distributed equally across both sides of space.",
              "id": "symptom-hemispatial-neglect",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "arm pain limiting effort",
              "aliases": [
                "pain-limited weakness",
                "guarding",
                "painful arm",
                "arm pain",
                "shoulder pain",
                "pain limited arm strength",
                "pain-limited arm weakness",
                "reduced effort due to pain",
                "pain with gripping",
                "painful grip",
                "shoulder guarding",
                "guarding due to pain",
                "weakness from pain",
                "painful hand weakness",
                "arm pain limiting effort"
              ],
              "info": "Discomfort can reduce force applied through an arm. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "symptom-arm-pain-limiting-effort",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "aliases": [
                "brain tumor",
                "tumor",
                "intracranial mass",
                "brain mass",
                "cerebral tumor",
                "brain tumour",
                "cerebral tumour",
                "intracranial tumour",
                "intracranial tumor",
                "intracranial neoplasm",
                "cerebral neoplasm",
                "brain neoplasm",
                "CNS tumor",
                "CNS tumour",
                "central nervous system tumor",
                "focal brain tumor",
                "focal intracranial mass",
                "intracerebral tumor",
                "intracerebral mass",
                "mass in the brain",
                "tumor in the brain",
                "tumour in the brain",
                "space occupying brain lesion",
                "brain space-occupying lesion",
                "intracranial space occupying lesion",
                "brain cancer",
                "malignant brain tumor",
                "benign brain tumor",
                "glioma",
                "glioblastoma",
                "GBM",
                "meningioma",
                "cerebral mass lesion",
                "focal mass lesion",
                "brain turmor",
                "right-hemisphere mass lesion",
                "tumour",
                "neoplasm"
              ],
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ]
            },
            {
              "type": "disease",
              "term": "Stroke",
              "aliases": [
                "ischemic stroke",
                "stroke",
                "CVA",
                "cerebral infarction",
                "ischaemic stroke",
                "ischemic CVA",
                "ischaemic CVA",
                "cerebrovascular accident",
                "cerebral ischemia",
                "cerebral ischaemia",
                "ischemic cerebral infarction",
                "ischaemic cerebral infarction",
                "brain infarction",
                "cerebral infarct",
                "prior stroke",
                "previous stroke",
                "old stroke",
                "remote stroke",
                "stroke residual",
                "stroke sequelae",
                "post stroke deficit",
                "embolic stroke",
                "thrombotic stroke",
                "focal cerebral infarction",
                "arterial ischemic stroke",
                "ishemic stroke",
                "hemorrhagic stroke",
                "brain bleed",
                "intracerebral hemorrhage",
                "haemorrhagic stroke",
                "hemorrhagic CVA",
                "haemorrhagic CVA",
                "ICH",
                "intracerebral haemorrhage",
                "cerebral haemorrhage",
                "intracranial hemorrhage",
                "intracranial haemorrhage",
                "bleeding in the brain",
                "hemorrhage in the brain",
                "haemorrhage in the brain",
                "bleeding stroke",
                "hemorragic stroke",
                "hemorrhagic cerebrovascular accident",
                "intraparenchymal hemorrhage"
              ],
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "multiple sclerosis",
              "aliases": [
                "MS",
                "demyelinating disease",
                "disseminated sclerosis",
                "central demyelinating disease",
                "CNS demyelination",
                "multiple scleroses",
                "multiple sclerosiss",
                "multiple scerlosis",
                "multiple slerosis",
                "relapsing remitting MS",
                "progressive MS",
                "demyelinating CNS disease",
                "multiple sclerosis"
              ],
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect arm force and placement.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "cervical myelopathy",
              "aliases": [
                "cervical cord compression",
                "cervical spinal stenosis",
                "cervical spinal cord compression",
                "cervical cord disease",
                "cervical spinal cord disease",
                "degenerative cervical myelopathy",
                "DCM",
                "CSM",
                "cervical spondylosis with myelopathy",
                "compressive cervical myelopathy",
                "cervical spinal stenosis with myelopathy",
                "spinal cord compression in neck",
                "neck cord compression",
                "cervical myelopthy",
                "cervical myelopaty",
                "cervical myelopathy"
              ],
              "info": "Spinal cord dysfunction can alter motor and sensory signals, which can affect arm force and placement.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "cervical radiculopathy",
              "aliases": [
                "pinched nerve in neck",
                "cervical nerve root disease",
                "cervical nerve root compression",
                "cervical root compression",
                "cervical radiculitis",
                "neck radiculopathy",
                "cervical root lesion",
                "neck nerve impingement",
                "pinched cervical nerve",
                "cervical nerve impingement",
                "cervical radiculopthy",
                "nerve root compression in neck",
                "cervical radiculopathy"
              ],
              "info": "Nerve-root dysfunction can affect muscle strength and sensation, which can affect arm force and placement.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-cervical-radiculopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "brachial plexopathy",
              "aliases": [
                "brachial plexus injury",
                "plexus neuropathy",
                "brachial plexus lesion",
                "brachial plexus damage",
                "brachial plexus neuropathy",
                "plexopathy",
                "brachial plexus compression",
                "brachial plexus palsy",
                "traumatic brachial plexopathy",
                "brachial plexitis",
                "brachial neuritis",
                "neuralgic amyotrophy",
                "Parsonage Turner syndrome",
                "brachial plexopathy"
              ],
              "info": "Plexus dysfunction can affect signals to arm muscles, which can affect arm force and placement.",
              "hint": "Consider a problem in the nerve network between the neck and arm.",
              "id": "disease-brachial-plexopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "peripheral mononeuropathy",
              "aliases": [
                "radial neuropathy",
                "median neuropathy",
                "ulnar neuropathy",
                "nerve injury",
                "mononeuropathy",
                "peripheral nerve lesion",
                "peripheral nerve palsy",
                "focal nerve injury",
                "focal neuropathy",
                "nerve palsy",
                "nerve entrapment",
                "radial nerve palsy",
                "radial nerve injury",
                "ulnar nerve lesion",
                "median nerve lesion",
                "focal peripheral neuropathy",
                "peripheral mononeuropathy"
              ],
              "info": "A focal nerve change can alter activation of selected muscles, which can affect arm force and placement.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-mononeuropathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "amyotrophic lateral sclerosis",
              "aliases": [
                "ALS",
                "motor neuron disease",
                "Lou Gehrig disease",
                "amyotrophic lateral scleroses",
                "motor neurone disease",
                "motor neuron disorder",
                "motor neurone disorder",
                "MND",
                "Lou Gehrigs disease",
                "Lou Gehrigs",
                "amyotrophic lateral sclerosiss",
                "amyotrophic lateral scerlosis",
                "progressive motor neuron disease",
                "bulbar ALS",
                "bulbar onset ALS",
                "limb onset ALS",
                "Amyotrophic lateral sclerosis"
              ],
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "type": "disease",
              "term": "Parkinson disease",
              "aliases": [
                "Parkinson's disease",
                "parkinsonism",
                "parkinsons",
                "Parkinson",
                "Parkinsonian syndrome",
                "Parkinsonian disorder",
                "idiopathic Parkinson disease",
                "idiopathic Parkinsons disease",
                "PD",
                "Parkinsonian disease",
                "Parkinsons desease",
                "Parkinsons diesease",
                "hypokinetic movement disorder",
                "Parkinson disease"
              ],
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "rotator cuff or arm injury",
              "aliases": [
                "shoulder injury",
                "orthopedic injury",
                "musculoskeletal injury",
                "rotator cuff injury",
                "rotator cuff tear",
                "rotator cuff disease",
                "shoulder trauma",
                "arm trauma",
                "injured shoulder",
                "injured arm",
                "upper limb injury",
                "upper extremity injury",
                "shoulder musculoskeletal disease",
                "mechanical arm weakness",
                "orthopedic arm injury",
                "rotator cuff or arm injury"
              ],
              "info": "Pain or mechanical limitation can alter arm force, which can affect arm force and placement.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-rotator-cuff-or-arm-injury",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "symptom",
              "term": "arm spasticity",
              "aliases": [
                "upper limb spasticity",
                "spastic arm",
                "increased arm tone",
                "arm hypertonia",
                "arm spasticity"
              ],
              "info": "Increased muscle tone can change how force is applied through an arm. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-arm-spasticity",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "motor fatigability",
              "aliases": [
                "fatigable weakness",
                "muscle fatigability",
                "muscle fatigue with use",
                "fatigable arm weakness",
                "motor fatigability"
              ],
              "info": "Muscle performance declines with repeated effort. General fatigue and sleepiness are not equivalent.",
              "hint": "Consider a change that becomes more apparent with use or over time.",
              "id": "symptom-motor-fatigability",
              "sources": [
                {
                  "title": "NINDS · Myasthenia gravis",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "arm rigidity",
              "aliases": [
                "upper limb rigidity",
                "rigid arm",
                "arm stiffness",
                "muscle rigidity",
                "arm rigidity"
              ],
              "info": "Increased resistance to movement can affect arm positioning and pressure. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-arm-rigidity",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "limb apraxia",
              "aliases": [
                "arm apraxia",
                "ideomotor apraxia",
                "motor planning impairment",
                "apraxic arm",
                "limb apraxia"
              ],
              "info": "Changes in planning a learned action can alter hand placement and force. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-limb-apraxia",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "corticobasal syndrome",
              "aliases": [
                "CBS",
                "corticobasal degeneration",
                "CBD",
                "corticobasal disease",
                "corticobasal syndrome"
              ],
              "info": "Changes in cortical and movement circuits can affect one arm's use and posture.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "seizure with postictal deficit",
              "aliases": [
                "Todd paralysis",
                "Todds paralysis",
                "Todd paresis",
                "postictal weakness",
                "focal seizure",
                "seizure with postictal deficit"
              ],
              "info": "Seizure-related changes can temporarily reduce force in an arm.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "traumatic brain injury",
              "aliases": [
                "TBI",
                "head injury",
                "brain injury",
                "traumatic brain damage",
                "traumatic brain injury"
              ],
              "info": "Injury to motor pathways can change force generated by an arm.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "focal limb dystonia",
              "aliases": [
                "arm dystonia",
                "upper limb dystonia",
                "focal arm dystonia",
                "limb dystonia",
                "focal limb dystonia"
              ],
              "info": "Involuntary muscle contraction can alter arm posture and applied pressure.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "disease-focal-limb-dystonia",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "myasthenia gravis",
              "aliases": [
                "MG",
                "myasthenia",
                "myasthenic weakness",
                "autoimmune myasthenia",
                "Myasthenia gravis",
                "myasthenic disorder"
              ],
              "info": "Immune-mediated failure of nerve-to-muscle signaling. Fluctuating weakness, ptosis and worsening with repeated use support this possibility. An isolated persistent one-sided pattern is less typical and needs other supporting evidence.",
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
              "type": "disease",
              "term": "inflammatory myopathy",
              "aliases": [
                "myositis",
                "autoimmune myositis",
                "polymyositis",
                "dermatomyositis",
                "immune mediated myopathy",
                "inflammatory myopathy"
              ],
              "info": "A group of inflammatory muscle diseases. Distribution of weakness and other findings determine the fit; a steroid prescription alone is nonspecific. An isolated persistent one-sided pattern is less typical and needs other supporting evidence.",
              "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
              "id": "disease-inflammatory-myopathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Inflammatory myopathies",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
                }
              ]
            }
          ],
          "symptomsNeeded": 2,
          "diagnosesNeeded": 2,
          "symptomStarThreshold": 4,
          "diagnosisStarThreshold": 4
        }
      ]
    },
    {
      "title": "The Footsteps",
      "stages": [
        {
          "title": "Muddy Path",
          "revealThreshold": 2,
          "media": {
            "type": "image",
            "src": "assets/culprit/footsteps.webp",
            "alt": "Footprint trail in mud leading to the shed.",
            "caption": "Footprints leading to the shed"
          },
          "questions": [
            {
              "label": "Notice the finding",
              "prompt": "What differs between the two tracks in stride length, foot clearance, width, direction, or regularity?",
              "hint": "Compare left and right steps within each track. Look for a unilateral difference in step length, clearance, direction, or regularity."
            },
            {
              "label": "Describe the symptom",
              "prompt": "What gait descriptions could account for an asymmetric short or dragging step?",
              "hint": "Consider weakness, foot-clearance failure, stiffness, slowness, incoordination, sensory dependence, or pain-limited walking."
            },
            {
              "label": "Where is it localized?",
              "prompt": "Which locations could affect walking in the ways you described?",
              "hint": "Consider brain, spinal cord, nerve root, peripheral nerve, muscle, and musculoskeletal structures. Distribution and additional observations could help distinguish them."
            },
            {
              "label": "Build the differential",
              "prompt": "Which sudden, progressive, degenerative, peripheral, or orthopedic disorders can cause this gait pattern?",
              "hint": "Consider sudden, fluctuating, and persistent causes involving central pathways, movement control, peripheral pathways, muscle, or painful movement."
            }
          ],
          "accepted": [
            {
              "type": "symptom",
              "term": "hemiparetic gait",
              "aliases": [
                "hemiplegic gait",
                "unilateral weak gait",
                "asymmetric gait",
                "pyramidal gait",
                "hemiparesis gait",
                "hemiparetic walking",
                "hemiplegic walking",
                "unilateral pyramidal gait",
                "asymmetric walking",
                "asymmetrical gait",
                "unilateral dragging gait",
                "dragging one leg",
                "one leg dragging",
                "one sided weak gait",
                "hemiparetic limp",
                "stroke gait",
                "spastic hemiparetic gait",
                "hemiparatic gait",
                "hemiparetic gait"
              ],
              "info": "A walking pattern related to weakness on one side. An asymmetric footprint trail can suggest this but cannot confirm hemiparesis.",
              "hint": "Compare how much each side contributes to walking.",
              "id": "symptom-hemiparetic-gait",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "unilateral leg weakness",
              "aliases": [
                "one-sided leg weakness",
                "lower extremity weakness",
                "leg paresis",
                "weakness of one leg",
                "weakness in one leg",
                "one leg weak",
                "one sided lower limb weakness",
                "unilateral lower extremity weakness",
                "unilateral lower limb weakness",
                "focal leg weakness",
                "leg hemiparesis",
                "left leg weakness",
                "right leg weakness",
                "reduced strength in one leg",
                "weakness",
                "weak",
                "loss of strength",
                "reduced strength",
                "unilateral leg weakness"
              ],
              "info": "Reduced force in one leg is one explanation for asymmetric steps; footprints do not directly measure strength.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-unilateral-leg-weakness",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "foot drop",
              "aliases": [
                "dropped foot",
                "dorsiflexion weakness",
                "steppage gait",
                "drop foot",
                "ankle dorsiflexor weakness",
                "weak dorsiflexion",
                "impaired ankle dorsiflexion",
                "difficulty lifting foot",
                "cannot lift foot",
                "toe dragging",
                "dragging toes",
                "toes catch on ground",
                "dorsiflexor paresis",
                "steppage",
                "high stepping gait",
                "foot drop"
              ],
              "info": "Difficulty lifting the front of the foot may reduce clearance or cause toe dragging; a specific nerve or root lesion requires further evidence.",
              "hint": "Consider whether the front of the foot clears the ground during a step.",
              "id": "symptom-foot-drop",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "circumduction gait",
              "aliases": [
                "leg circumduction",
                "swinging leg outward",
                "spastic hemiplegic gait",
                "circumducting gait",
                "circumducted gait",
                "circumduction",
                "leg swings outward",
                "leg swings in arc",
                "outward swinging leg",
                "circumducting leg",
                "circumducted leg",
                "hemiplegic circumduction",
                "stiff leg circumduction",
                "circumduction gait"
              ],
              "info": "An outward leg swing can change the shape of a footprint pattern. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider a leg swinging outward to clear the ground.",
              "id": "symptom-circumduction-gait",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "spastic gait",
              "aliases": [
                "stiff-legged gait",
                "scissoring gait",
                "spastic walking",
                "stiff gait",
                "stiff leg gait",
                "stiff-legged walking",
                "spastic paraparetic gait",
                "upper motor neuron gait",
                "UMN gait",
                "scissoring",
                "scissor gait",
                "increased tone gait",
                "spasticity affecting gait",
                "spastic gait"
              ],
              "info": "Increased muscle tone can make leg movement stiff during walking. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-spastic-gait",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "bradykinetic gait",
              "aliases": [
                "shuffling gait",
                "short-stepped gait",
                "festinating gait",
                "parkinsonian gait",
                "hypokinetic gait",
                "shuffling",
                "shuffling walk",
                "short steps",
                "small steps",
                "reduced stride length",
                "short stride",
                "slow shuffling gait",
                "festination",
                "festinating walk",
                "slow small steps",
                "shuffle gait",
                "bradykinetic gait"
              ],
              "info": "Reduced movement amplitude can make steps shorter. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-bradykinetic-gait",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "ataxic gait",
              "aliases": [
                "unsteady gait",
                "cerebellar gait",
                "wide-based gait",
                "gait ataxia",
                "ataxic walking",
                "wide based walking",
                "broad based gait",
                "uncoordinated walking",
                "irregular gait",
                "gait incoordination",
                "staggering gait",
                "staggering walk",
                "balance impairment",
                "unstable gait",
                "ataxic gait"
              ],
              "info": "Impaired coordination can change step placement and timing. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-ataxic-gait",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "antalgic gait",
              "aliases": [
                "painful gait",
                "limp due to pain",
                "pain-limited walking",
                "antalgic limp",
                "painful limp",
                "limping",
                "limp",
                "gait due to pain",
                "limping from pain",
                "pain avoidance gait",
                "pain related limp",
                "painful walking",
                "pain limited gait",
                "shortened stance phase",
                "guarding gait",
                "antalgic walking",
                "antalgic gait"
              ],
              "info": "Pain can change the time spent bearing weight on a leg. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "symptom-antalgic-gait",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "proprioceptive gait impairment",
              "aliases": [
                "sensory ataxia",
                "loss of position sense",
                "stamping gait",
                "sensory ataxic gait",
                "sensory gait ataxia",
                "proprioceptive ataxia",
                "sensory gait impairment",
                "sensory dependent gait",
                "visually dependent gait",
                "stomping gait",
                "stamping walk",
                "loss of joint position sense",
                "impaired proprioception when walking",
                "gait from proprioceptive loss",
                "proprioceptive gait impairment"
              ],
              "info": "Reduced position feedback can affect foot placement during walking. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-proprioceptive-gait-impairment",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "aliases": [
                "brain tumor",
                "tumor",
                "intracranial mass",
                "brain mass",
                "cerebral tumor",
                "brain tumour",
                "cerebral tumour",
                "intracranial tumour",
                "intracranial tumor",
                "intracranial neoplasm",
                "cerebral neoplasm",
                "brain neoplasm",
                "CNS tumor",
                "CNS tumour",
                "central nervous system tumor",
                "focal brain tumor",
                "focal intracranial mass",
                "intracerebral tumor",
                "intracerebral mass",
                "mass in the brain",
                "tumor in the brain",
                "tumour in the brain",
                "space occupying brain lesion",
                "brain space-occupying lesion",
                "intracranial space occupying lesion",
                "brain cancer",
                "malignant brain tumor",
                "benign brain tumor",
                "glioma",
                "glioblastoma",
                "GBM",
                "meningioma",
                "cerebral mass lesion",
                "focal mass lesion",
                "brain turmor",
                "right-hemisphere mass lesion",
                "tumour",
                "neoplasm"
              ],
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ]
            },
            {
              "type": "disease",
              "term": "Stroke",
              "aliases": [
                "ischemic stroke",
                "stroke",
                "CVA",
                "cerebral infarction",
                "ischaemic stroke",
                "ischemic CVA",
                "ischaemic CVA",
                "cerebrovascular accident",
                "cerebral ischemia",
                "cerebral ischaemia",
                "ischemic cerebral infarction",
                "ischaemic cerebral infarction",
                "brain infarction",
                "cerebral infarct",
                "prior stroke",
                "previous stroke",
                "old stroke",
                "remote stroke",
                "stroke residual",
                "stroke sequelae",
                "post stroke deficit",
                "embolic stroke",
                "thrombotic stroke",
                "focal cerebral infarction",
                "arterial ischemic stroke",
                "ishemic stroke",
                "hemorrhagic stroke",
                "brain bleed",
                "intracerebral hemorrhage",
                "haemorrhagic stroke",
                "hemorrhagic CVA"
              ],
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "multiple sclerosis",
              "aliases": [
                "MS",
                "demyelinating disease",
                "disseminated sclerosis",
                "central demyelinating disease",
                "CNS demyelination",
                "multiple scleroses",
                "multiple sclerosiss",
                "multiple scerlosis",
                "multiple slerosis",
                "relapsing remitting MS",
                "progressive MS",
                "demyelinating CNS disease",
                "multiple sclerosis"
              ],
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect leg movement during walking.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "Parkinson disease",
              "aliases": [
                "Parkinson's disease",
                "parkinsonism",
                "parkinsons",
                "Parkinson",
                "Parkinsonian syndrome",
                "Parkinsonian disorder",
                "idiopathic Parkinson disease",
                "idiopathic Parkinsons disease",
                "PD",
                "Parkinsonian disease",
                "Parkinsons desease",
                "Parkinsons diesease",
                "hypokinetic movement disorder",
                "Parkinson disease"
              ],
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "amyotrophic lateral sclerosis",
              "aliases": [
                "ALS",
                "motor neuron disease",
                "Lou Gehrig disease",
                "amyotrophic lateral scleroses",
                "motor neurone disease",
                "motor neuron disorder",
                "motor neurone disorder",
                "MND",
                "Lou Gehrigs disease",
                "Lou Gehrigs",
                "amyotrophic lateral sclerosiss",
                "amyotrophic lateral scerlosis",
                "progressive motor neuron disease",
                "bulbar ALS",
                "bulbar onset ALS",
                "limb onset ALS",
                "Amyotrophic lateral sclerosis"
              ],
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "type": "disease",
              "term": "cervical myelopathy",
              "aliases": [
                "cervical cord compression",
                "cervical spinal stenosis",
                "cervical spinal cord compression",
                "cervical cord disease",
                "cervical spinal cord disease",
                "degenerative cervical myelopathy",
                "DCM",
                "CSM",
                "cervical spondylosis with myelopathy",
                "compressive cervical myelopathy",
                "cervical spinal stenosis with myelopathy",
                "spinal cord compression in neck",
                "neck cord compression",
                "cervical myelopthy",
                "cervical myelopaty",
                "cervical myelopathy"
              ],
              "info": "Spinal cord dysfunction can alter motor and sensory signals, which can affect leg movement during walking.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "lumbar radiculopathy",
              "aliases": [
                "sciatica",
                "pinched lumbar nerve",
                "lumbosacral radiculopathy",
                "lumbar nerve root compression",
                "lumbosacral root lesion",
                "lumbar root lesion",
                "lumbar nerve impingement",
                "lumbar disc herniation with radiculopathy",
                "L5 radiculopathy",
                "L4 radiculopathy",
                "S1 radiculopathy",
                "lumbar radiculitis",
                "lumbar pinched nerve",
                "pinched nerve in lower back",
                "sciatic radiculopathy",
                "lumbar radiculopathy"
              ],
              "info": "A lumbar nerve-root change can affect leg strength and sensation, which can affect leg movement during walking.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-lumbar-radiculopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "common peroneal neuropathy",
              "aliases": [
                "peroneal nerve palsy",
                "fibular neuropathy",
                "peroneal nerve injury",
                "common fibular neuropathy",
                "fibular nerve palsy",
                "common peroneal nerve palsy",
                "peroneal neuropathy",
                "peroneal palsy",
                "peroneal nerve compression",
                "fibular nerve compression",
                "peroneal nerve entrapment",
                "common fibular nerve injury",
                "peroneal mononeuropathy",
                "fibular head neuropathy",
                "common peroneal neuropathy"
              ],
              "info": "Peroneal nerve dysfunction can reduce ankle lifting, which can affect leg movement during walking.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-common-peroneal-neuropathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "peripheral neuropathy",
              "aliases": [
                "neuropathy",
                "polyneuropathy",
                "nerve damage",
                "peripheral nerve disease",
                "peripheral nerve damage",
                "peripheral nerve dysfunction",
                "distal neuropathy",
                "sensorimotor neuropathy",
                "sensory neuropathy",
                "motor neuropathy",
                "length dependent neuropathy",
                "peripheral polyneuropathy",
                "peripheral neurophathy",
                "peripheral nueropathy",
                "polyneuropathies",
                "peripheral neuropathy"
              ],
              "info": "Peripheral nerve damage can impair strength or sensation. Distribution, reflexes and examination help distinguish it from central causes.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-neuropathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ]
            },
            {
              "type": "disease",
              "term": "cerebellar disease",
              "aliases": [
                "cerebellar lesion",
                "cerebellar ataxia",
                "cerebellar degeneration",
                "cerebellar dysfunction",
                "cerebellar disorder",
                "cerebellar pathology",
                "cerebellar syndrome",
                "cerebellar damage",
                "cerebellar injury",
                "cerebellar degeneration syndrome",
                "cerebellar motor syndrome",
                "cerebellar process",
                "cerebellum disease",
                "cerebellum lesion",
                "spinocerebellar ataxia",
                "SCA",
                "cerebellar stroke",
                "cerebellar tumor",
                "cerebellar disease"
              ],
              "info": "Changes in coordination pathways can alter movement timing and accuracy, which can affect leg movement during walking.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "hip knee or ankle injury",
              "aliases": [
                "orthopedic injury",
                "musculoskeletal injury",
                "painful joint",
                "hip injury",
                "knee injury",
                "ankle injury",
                "leg injury",
                "lower limb injury",
                "lower extremity injury",
                "joint pain",
                "hip pain",
                "knee pain",
                "ankle pain",
                "painful arthritis",
                "osteoarthritis",
                "orthopedic leg injury",
                "musculoskeletal leg injury",
                "ligament injury",
                "ankle sprain",
                "hip knee or ankle injury"
              ],
              "info": "Pain or joint restriction can change weight bearing and stride, which can affect leg movement during walking.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-hip-knee-or-ankle-injury",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "symptom",
              "term": "freezing of gait",
              "aliases": [
                "gait freezing",
                "freezing gait",
                "start hesitation",
                "gait initiation difficulty",
                "FOG",
                "freezing of gait"
              ],
              "info": "Difficulty initiating or continuing a step can interrupt a walking pattern. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-freezing-of-gait",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "leg rigidity",
              "aliases": [
                "lower limb rigidity",
                "rigid leg",
                "leg stiffness",
                "rigid lower limb",
                "leg rigidity"
              ],
              "info": "Increased resistance to leg movement can shorten or alter steps. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-leg-rigidity",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "dystonic gait",
              "aliases": [
                "gait dystonia",
                "walking dystonia",
                "foot dystonia",
                "dystonic walking",
                "lower limb dystonia",
                "dystonic gait"
              ],
              "info": "Involuntary leg or foot posturing can alter foot placement. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "symptom-dystonic-gait",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "reduced foot clearance",
              "aliases": [
                "poor foot clearance",
                "low foot clearance",
                "toe scuffing",
                "scuffing gait",
                "foot scraping",
                "reduced foot clearance"
              ],
              "info": "The foot passes unusually close to the ground or scuffs it. This can occur for several motor or sensory reasons.",
              "hint": "Consider whether the front of the foot clears the ground during a step.",
              "id": "symptom-reduced-foot-clearance",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "corticobasal syndrome",
              "aliases": [
                "CBS",
                "corticobasal degeneration",
                "CBD",
                "corticobasal disease",
                "corticobasal syndrome"
              ],
              "info": "Changes in motor planning and muscle tone can alter leg use during walking.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "progressive supranuclear palsy",
              "aliases": [
                "PSP",
                "supranuclear palsy",
                "Steele Richardson Olszewski syndrome",
                "progressive supranuclear palsy"
              ],
              "info": "An atypical parkinsonian disorder. Early balance problems and impaired eye movements help distinguish it from Parkinson disease.",
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
              "type": "disease",
              "term": "multiple system atrophy",
              "aliases": [
                "MSA",
                "MSA P",
                "MSA C",
                "multisystem atrophy",
                "multiple system atrophy"
              ],
              "info": "Changes in coordination and movement-control pathways can alter steps.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-multiple-system-atrophy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "hereditary spastic paraplegia",
              "aliases": [
                "HSP",
                "familial spastic paraplegia",
                "hereditary spastic paraparesis",
                "Strumpell Lorrain disease",
                "hereditary spastic paraplegia"
              ],
              "info": "Changes in motor pathways to the legs can increase stiffness during walking.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-hereditary-spastic-paraplegia",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "transverse myelitis",
              "aliases": [
                "TM",
                "spinal cord inflammation",
                "inflammatory myelitis",
                "acute transverse myelitis",
                "transverse myelitis"
              ],
              "info": "Spinal cord inflammation can affect strength, sensation, and leg control.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-transverse-myelitis",
              "evidenceLabel": "Differential possibility"
            }
          ],
          "symptomsNeeded": 2,
          "diagnosesNeeded": 2,
          "symptomStarThreshold": 4,
          "diagnosisStarThreshold": 4
        }
      ]
    },
    {
      "title": "The Key & Safe",
      "stages": [
        {
          "title": "Scene Inspection",
          "revealThreshold": 2,
          "media": {
            "type": "image",
            "src": "assets/culprit/safe-keyhole.webp",
            "alt": "Evidence sheet showing the safe keyhole and recovered key.",
            "caption": "Safe keyhole and recovered key"
          },
          "questions": [
            {
              "label": "Notice the finding",
              "prompt": "What do the repeated fresh scratches around the new keyhole suggest about the movement being attempted?",
              "hint": "The pattern suggests repeated difficulty aligning, inserting, or turning the key rather than one accidental scrape."
            },
            {
              "label": "Describe the symptom",
              "prompt": "What types of motor, sensory, or planning deficits could interfere with precise key use?",
              "hint": "Think about force, movement speed, steadiness, targeting accuracy, sensation, learned motor planning, and abnormal posture."
            },
            {
              "label": "Where is it localized?",
              "prompt": "Where could a one-handed dexterity problem arise along the motor and sensory systems?",
              "hint": "Consider contralateral cortex or subcortical pathways, cerebellum, basal ganglia, cervical cord or root, peripheral nerve, muscle, and local joint or tendon disease."
            },
            {
              "label": "Build the differential",
              "prompt": "Which neurologic and non-neurologic conditions could produce clumsy or inaccurate key use?",
              "hint": "Include focal central lesions, movement disorders, demyelination, cord or peripheral nerve disease, intoxication, visual limitations, pain, and mechanical explanations."
            }
          ],
          "accepted": [
            {
              "type": "symptom",
              "term": "impaired fine motor control",
              "aliases": [
                "poor dexterity",
                "impaired dexterity",
                "clumsy hand",
                "loss of fine motor skills",
                "fine motor impairment",
                "reduced fine motor control",
                "decreased dexterity",
                "reduced dexterity",
                "hand clumsiness",
                "clumsy hands",
                "fine motor difficulty",
                "difficulty with fine movements",
                "poor hand coordination",
                "loss of dexterity",
                "impaired hand dexterity",
                "fine motor deficit",
                "manual dexterity impairment",
                "difficulty manipulating objects",
                "trouble using a key",
                "dexterity loss",
                "impaired fine motor control"
              ],
              "info": "Less precise finger movements can make a small object difficult to manipulate.",
              "hint": "Consider a loss of precision during small, coordinated movements.",
              "id": "symptom-impaired-fine-motor-control",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "Hand or arm weakness",
              "aliases": [
                "hand weakness",
                "weak grip",
                "upper extremity weakness",
                "arm weakness",
                "weak hand",
                "weakness in hand",
                "weakness of the hand",
                "hand muscle weakness",
                "reduced hand strength",
                "decreased hand strength",
                "impaired grip strength",
                "grip weakness",
                "reduced grip",
                "decreased grip strength",
                "weak fingers",
                "finger weakness",
                "distal upper limb weakness",
                "wrist weakness",
                "hand paresis",
                "impaired thumb opposition",
                "weak thumb opposition",
                "loss of thumb opposition",
                "difficulty opposing thumb",
                "thumb opposition weakness",
                "finger extension weakness",
                "weak finger extension",
                "finger extensor weakness",
                "difficulty extending fingers",
                "weak finger extensors",
                "weakness",
                "weak",
                "loss of strength",
                "reduced strength",
                "Hand or arm weakness"
              ],
              "info": "Reduced hand or arm force can interfere with holding, aligning, or turning a key. This includes thumb and finger weakness.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-hand-or-arm-weakness",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "tremor",
              "aliases": [
                "shaking hand",
                "hand tremor",
                "action tremor",
                "intention tremor",
                "hand shaking",
                "trembling",
                "trembling hand",
                "tremulous hand",
                "shaky hands",
                "tremors",
                "movement tremor",
                "postural tremor",
                "kinetic tremor",
                "resting tremor",
                "rest tremor",
                "involuntary shaking",
                "shaking",
                "intention tremors",
                "tremor"
              ],
              "info": "Rhythmic involuntary shaking. Scratches on a keyhole do not show whether a tremor occurred at rest or during movement.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-tremor",
              "sources": [
                {
                  "title": "NINDS · Tremor",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "bradykinesia",
              "aliases": [
                "slowness of movement",
                "slow movement",
                "reduced movement amplitude",
                "bradykinetic movement",
                "slowed movements",
                "slow movements",
                "motor slowing",
                "movement slowness",
                "slowed motor activity",
                "small movements",
                "reduced amplitude movements",
                "decreased movement amplitude",
                "bradykinetic",
                "bradykenesia",
                "bradykinesa",
                "bradykinesia"
              ],
              "info": "Slowness of movement; a static photograph cannot demonstrate movement speed. Reduced amplitude and failure to initiate movement are related but distinct observations.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-bradykinesia",
              "sources": [
                {
                  "title": "NINDS · Parkinson’s disease",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "dysmetria",
              "aliases": [
                "past pointing",
                "overshoot",
                "undershoot",
                "limb ataxia",
                "inaccurate reaching",
                "impaired targeting",
                "inaccurate hand movement",
                "misjudging distance",
                "overshooting",
                "undershooting",
                "overshooting target",
                "undershooting target",
                "poor movement scaling",
                "limb incoordination",
                "inaccurate finger movements",
                "dysmetric movement",
                "dysmetric",
                "dismetria",
                "dysmetria"
              ],
              "info": "A movement misses its intended distance or target. Scratches suggest inaccurate placement but do not demonstrate overshoot or undershoot on examination.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-dysmetria",
              "sources": [
                {
                  "title": "NINDS · Neurological terminology",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/glossary-neurological-terms"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "sensory loss",
              "aliases": [
                "numb hand",
                "reduced sensation",
                "impaired proprioception",
                "loss of position sense",
                "sensory deficit",
                "impaired sensation",
                "decreased sensation",
                "diminished sensation",
                "numbness",
                "hypoesthesia",
                "hypaesthesia",
                "hypesthesia",
                "loss of sensation",
                "loss of proprioception",
                "proprioceptive loss",
                "position sense loss",
                "impaired position sense",
                "tactile sensory loss",
                "impaired tactile feedback",
                "sensory loss"
              ],
              "info": "Reduced sensation or position feedback could affect movement. It requires a history or sensory examination and is not visible in pressure marks or scratches.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-sensory-loss",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "apraxia",
              "aliases": [
                "limb apraxia",
                "motor planning deficit",
                "ideomotor apraxia",
                "dyspraxia",
                "impaired motor planning",
                "motor planning impairment",
                "motor planning difficulty",
                "difficulty performing learned movements",
                "learned movement impairment",
                "cortical motor planning problem",
                "limb kinetic apraxia",
                "ideational apraxia",
                "ideomotor dyspraxia",
                "apraxic movement",
                "apraxic",
                "apraxia"
              ],
              "info": "Disrupted planning of learned movements can affect use of a familiar object.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-apraxia",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "dystonia",
              "aliases": [
                "abnormal hand posture",
                "task-specific dystonia",
                "hand cramp",
                "dystonic posture",
                "dystonic movement",
                "involuntary muscle contractions",
                "abnormal muscle contractions",
                "twisted hand posture",
                "involuntary hand posturing",
                "sustained hand contraction",
                "sustained muscle contractions",
                "hand dystonia",
                "dystonic hand",
                "dystonic cramping",
                "dystonia"
              ],
              "info": "Involuntary muscle contraction can change hand posture during a task.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "symptom-dystonia",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "aliases": [
                "brain tumor",
                "tumor",
                "intracranial mass",
                "brain mass",
                "cerebral tumor",
                "brain tumour",
                "cerebral tumour",
                "intracranial tumour",
                "intracranial tumor",
                "intracranial neoplasm",
                "cerebral neoplasm",
                "brain neoplasm",
                "CNS tumor",
                "CNS tumour",
                "central nervous system tumor",
                "focal brain tumor",
                "focal intracranial mass",
                "intracerebral tumor",
                "intracerebral mass",
                "mass in the brain",
                "tumor in the brain",
                "tumour in the brain",
                "space occupying brain lesion",
                "brain space-occupying lesion",
                "intracranial space occupying lesion",
                "brain cancer",
                "malignant brain tumor",
                "benign brain tumor",
                "glioma",
                "glioblastoma",
                "GBM",
                "meningioma",
                "cerebral mass lesion",
                "focal mass lesion",
                "brain turmor",
                "right-hemisphere mass lesion",
                "tumour",
                "neoplasm"
              ],
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ]
            },
            {
              "type": "disease",
              "term": "Stroke",
              "aliases": [
                "ischemic stroke",
                "stroke",
                "CVA",
                "cerebral infarction",
                "ischaemic stroke",
                "ischemic CVA",
                "ischaemic CVA",
                "cerebrovascular accident",
                "cerebral ischemia",
                "cerebral ischaemia",
                "ischemic cerebral infarction",
                "ischaemic cerebral infarction",
                "brain infarction",
                "cerebral infarct",
                "prior stroke",
                "previous stroke",
                "old stroke",
                "remote stroke",
                "stroke residual",
                "stroke sequelae",
                "post stroke deficit",
                "embolic stroke",
                "thrombotic stroke",
                "focal cerebral infarction",
                "arterial ischemic stroke",
                "ishemic stroke",
                "hemorrhagic stroke",
                "brain bleed",
                "intracerebral hemorrhage",
                "intracranial haemorrhage",
                "hemorrhagic CVA",
                "haemorrhagic stroke"
              ],
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "Parkinson disease",
              "aliases": [
                "Parkinson's disease",
                "parkinsonism",
                "parkinsons",
                "Parkinson",
                "Parkinsonian syndrome",
                "Parkinsonian disorder",
                "idiopathic Parkinson disease",
                "idiopathic Parkinsons disease",
                "PD",
                "Parkinsonian disease",
                "Parkinsons desease",
                "Parkinsons diesease",
                "hypokinetic movement disorder",
                "Parkinson disease"
              ],
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "essential tremor",
              "aliases": [
                "familial tremor",
                "benign essential tremor",
                "action tremor disorder",
                "ET",
                "essential hand tremor",
                "familial essential tremor",
                "hereditary tremor",
                "idiopathic action tremor",
                "essential action tremor",
                "benign familial tremor",
                "bilateral action tremor",
                "essential tremor disorder",
                "essential tremors",
                "essential tremmor",
                "essential tremor"
              ],
              "info": "Action-related oscillation can affect precise movement, which can affect hand control.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "disease-essential-tremor",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "cerebellar disease",
              "aliases": [
                "cerebellar lesion",
                "cerebellar ataxia",
                "cerebellar degeneration",
                "cerebellar dysfunction",
                "cerebellar disorder",
                "cerebellar pathology",
                "cerebellar syndrome",
                "cerebellar damage",
                "cerebellar injury",
                "cerebellar degeneration syndrome",
                "cerebellar motor syndrome",
                "cerebellar process",
                "cerebellum disease",
                "cerebellum lesion",
                "spinocerebellar ataxia",
                "SCA",
                "cerebellar stroke",
                "cerebellar tumor",
                "cerebellar disease"
              ],
              "info": "Changes in coordination pathways can alter movement timing and accuracy, which can affect hand control.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "multiple sclerosis",
              "aliases": [
                "MS",
                "demyelinating disease",
                "disseminated sclerosis",
                "central demyelinating disease",
                "CNS demyelination",
                "multiple scleroses",
                "multiple sclerosiss",
                "multiple scerlosis",
                "multiple slerosis",
                "relapsing remitting MS",
                "progressive MS",
                "demyelinating CNS disease",
                "multiple sclerosis"
              ],
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect hand control.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "cervical myelopathy",
              "aliases": [
                "cervical cord compression",
                "cervical spinal stenosis",
                "cervical spondylotic myelopathy",
                "cervical spinal cord compression",
                "cervical cord disease",
                "cervical spinal cord disease",
                "degenerative cervical myelopathy",
                "DCM",
                "CSM",
                "cervical spondylosis with myelopathy",
                "compressive cervical myelopathy",
                "cervical spinal stenosis with myelopathy",
                "spinal cord compression in neck",
                "neck cord compression",
                "cervical myelopthy",
                "cervical myelopaty",
                "cervical myelopathy"
              ],
              "info": "Spinal cord dysfunction can alter motor and sensory signals, which can affect hand control.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "cervical radiculopathy",
              "aliases": [
                "pinched nerve in neck",
                "cervical nerve root disease",
                "cervical nerve root compression",
                "cervical root compression",
                "cervical radiculitis",
                "neck radiculopathy",
                "cervical root lesion",
                "neck nerve impingement",
                "pinched cervical nerve",
                "cervical nerve impingement",
                "cervical radiculopthy",
                "nerve root compression in neck",
                "cervical radiculopathy"
              ],
              "info": "Nerve-root dysfunction can affect muscle strength and sensation, which can affect hand control.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-cervical-radiculopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "peripheral neuropathy",
              "aliases": [
                "neuropathy",
                "polyneuropathy",
                "nerve damage",
                "peripheral nerve disease",
                "peripheral nerve damage",
                "peripheral nerve dysfunction",
                "distal neuropathy",
                "sensorimotor neuropathy",
                "sensory neuropathy",
                "motor neuropathy",
                "length dependent neuropathy",
                "peripheral polyneuropathy",
                "peripheral neurophathy",
                "peripheral nueropathy",
                "polyneuropathies",
                "peripheral neuropathy"
              ],
              "info": "Peripheral nerve damage can impair strength or sensation. Distribution, reflexes and examination help distinguish it from central causes.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-neuropathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ]
            },
            {
              "type": "disease",
              "term": "median or ulnar neuropathy",
              "aliases": [
                "carpal tunnel syndrome",
                "ulnar neuropathy",
                "mononeuropathy",
                "median neuropathy",
                "median nerve compression",
                "median nerve entrapment",
                "median nerve palsy",
                "ulnar nerve entrapment",
                "ulnar nerve compression",
                "ulnar nerve palsy",
                "cubital tunnel syndrome",
                "carpal tunnel",
                "CTS",
                "hand nerve entrapment",
                "median nerve injury",
                "ulnar nerve injury",
                "median or ulnar neuropathy"
              ],
              "info": "Hand nerve dysfunction can affect finger strength and sensation, which can affect hand control.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-median-or-ulnar-neuropathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "focal hand dystonia",
              "aliases": [
                "writer's cramp",
                "task-specific dystonia",
                "hand dystonia",
                "task specific hand dystonia",
                "focal dystonia of hand",
                "writer cramp",
                "musician dystonia",
                "occupational hand dystonia",
                "task induced hand cramping",
                "focal manual dystonia",
                "focal hand dystonia"
              ],
              "info": "Involuntary hand contractions can alter posture during a task, which can affect hand control.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "disease-focal-hand-dystonia",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "alcohol or sedative intoxication",
              "aliases": [
                "intoxication",
                "alcohol use",
                "sedative effect",
                "alcohol intoxication",
                "ethanol intoxication",
                "sedative intoxication",
                "benzodiazepine intoxication",
                "drunkenness",
                "sedative toxicity",
                "medication intoxication",
                "drug intoxication",
                "CNS depressant intoxication",
                "alcohol poisoning",
                "alcohol or drug effect",
                "alcohol-related impairment",
                "alcohol or sedative intoxication"
              ],
              "info": "Substance effects can change movement coordination, which can affect hand control.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-alcohol-or-sedative-intoxication",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "symptom",
              "term": "hand rigidity",
              "aliases": [
                "rigid hand",
                "wrist rigidity",
                "stiff wrist",
                "arm rigidity",
                "upper limb rigidity",
                "hand rigidity"
              ],
              "info": "Increased resistance to movement can make a hand harder to reposition.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-hand-rigidity",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "myoclonus",
              "aliases": [
                "myoclonic jerks",
                "hand jerks",
                "jerky hand movements",
                "sudden muscle jerks",
                "arm myoclonus",
                "myoclonus"
              ],
              "info": "Brief involuntary muscle jerks, distinct from a sustained posture or a rhythmic tremor.",
              "hint": "Consider brief, sudden muscle jerks.",
              "id": "symptom-myoclonus",
              "sources": [
                {
                  "title": "NINDS · Myoclonus",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/myoclonus"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "corticobasal syndrome",
              "aliases": [
                "CBS",
                "corticobasal degeneration",
                "CBD",
                "corticobasal disease",
                "corticobasal syndrome"
              ],
              "info": "Changes in cortical and movement-control pathways can affect skilled hand use.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "amyotrophic lateral sclerosis",
              "aliases": [
                "ALS",
                "motor neuron disease",
                "MND",
                "Lou Gehrig disease",
                "amyotrophic lateral sclerosus",
                "Amyotrophic lateral sclerosis",
                "Lou Gehrigs disease",
                "motor neurone disease"
              ],
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "type": "disease",
              "term": "Huntington disease",
              "aliases": [
                "Huntingtons",
                "Huntington chorea",
                "HD",
                "Huntingtons disease",
                "Huntington disease"
              ],
              "info": "Involuntary movement and altered motor control can affect key handling.",
              "hint": "Consider an inherited disorder that can produce unwanted movements and impaired motor control.",
              "id": "disease-huntington-disease",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "traumatic brain injury",
              "aliases": [
                "TBI",
                "head injury",
                "brain injury",
                "traumatic brain damage",
                "traumatic brain injury"
              ],
              "info": "Injury to motor or sensory pathways can affect hand precision.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "seizure with postictal deficit",
              "aliases": [
                "Todd paralysis",
                "Todds paralysis",
                "Todd paresis",
                "postictal weakness",
                "focal seizure",
                "post ictal deficit",
                "seizure with postictal deficit"
              ],
              "info": "Seizure-related changes can temporarily affect hand control.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "symptom",
              "term": "Ataxia",
              "aliases": [
                "incoordination",
                "poor coordination",
                "uncoordinated",
                "clumsy",
                "clumsiness",
                "coordination problems",
                "loss of coordination",
                "hand ataxia",
                "Ataxia"
              ],
              "info": "Impaired coordination. Consider it as a mechanism for inaccurate movements, not a diagnosis established by a scratched lock.",
              "hint": "Consider whether several parts of a movement are coordinated smoothly.",
              "id": "symptom-ataxia",
              "sources": [
                {
                  "title": "NINDS · Neurological terminology",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/glossary-neurological-terms"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            }
          ],
          "symptomsNeeded": 2,
          "diagnosesNeeded": 2,
          "symptomStarThreshold": 4,
          "diagnosisStarThreshold": 4
        }
      ]
    },
    {
      "title": "The Voicemail",
      "stages": [
        {
          "title": "Audio Evidence",
          "revealThreshold": 2,
          "media": {
            "type": "none",
            "src": "",
            "alt": "",
            "caption": ""
          },
          "questions": [
            {
              "label": "Notice the finding",
              "prompt": "What specifically sounds abnormal in the voicemail? Focus on how the words are produced rather than immediately naming a disease.",
              "hint": "Compare articulation, volume, rhythm, fluency, word choice, and comprehension. The speech sounds garbled or slurred."
            },
            {
              "label": "Describe the symptom",
              "prompt": "What clinical symptom terms could describe unclear or abnormal speech?",
              "hint": "Consider motor-speech, language, voice-volume, coordination, bulbar, and fatigability terms."
            },
            {
              "label": "Where is it localized?",
              "prompt": "Which parts of the nervous system can disturb speech production, and what additional features would separate them?",
              "hint": "Consider cortex and corticobulbar pathways, brainstem or cranial nerves, cerebellum, basal ganglia, neuromuscular junction, and muscle."
            },
            {
              "label": "Build the differential",
              "prompt": "Which acute, progressive, fluctuating, toxic, or degenerative disorders can produce this pattern?",
              "hint": "Organize possibilities by time course and by central, peripheral, neuromuscular, toxic, and metabolic causes."
            }
          ],
          "accepted": [
            {
              "type": "symptom",
              "term": "Dysarthria",
              "aliases": [
                "dysarthria",
                "slurred speech",
                "garbled speech",
                "unclear articulation",
                "imprecise speech",
                "dysarthric speech",
                "dysarthric",
                "slurring",
                "slurring words",
                "slurred words",
                "speech slurring",
                "difficulty articulating",
                "articulation difficulty",
                "impaired articulation",
                "poor articulation",
                "unclear speech",
                "unintelligible speech",
                "mumbling",
                "mumbled speech",
                "trouble pronouncing words",
                "speech sounds slurred",
                "motor speech disorder",
                "motor-speech impairment",
                "dysartria",
                "dysarthia",
                "ataxic dysarthria",
                "scanning speech",
                "irregular speech rhythm",
                "cerebellar speech",
                "ataxic speech",
                "scanning dysarthria",
                "cerebellar dysarthria",
                "scanning",
                "choppy speech",
                "staccato speech",
                "uneven speech rhythm",
                "irregular articulation",
                "irregular prosody",
                "poorly coordinated speech",
                "uncoordinated speech",
                "syllables spaced unevenly",
                "cerebellar motor speech disorder",
                "spastic dysarthria",
                "spastic speech",
                "strained speech",
                "strained slow speech",
                "spastic motor speech disorder",
                "flaccid dysarthria",
                "flaccid speech",
                "weak articulation",
                "flaccid motor speech disorder"
              ],
              "info": "Impaired execution of speech movements can make speech slurred or imprecise. This differs from impaired language (aphasia). A dysarthria subtype requires more than a garbled-speech description.",
              "hint": "Consider impaired control of the muscles that articulate words.",
              "id": "symptom-dysarthria",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "hypophonia",
              "aliases": [
                "soft voice",
                "quiet voice",
                "reduced vocal volume",
                "low voice",
                "low volume speech",
                "low vocal volume",
                "weak voice",
                "faint voice",
                "decreased voice volume",
                "diminished voice volume",
                "speaking softly",
                "speaks quietly",
                "whispery voice",
                "soft speech",
                "reduced loudness",
                "hypophonic speech",
                "hypophonic",
                "hypofonia",
                "hypophonia"
              ],
              "info": "Reduced voice loudness. A quiet recording needs context before low volume can be attributed to the speaker.",
              "hint": "Consider reduced loudness during speech.",
              "id": "symptom-hypophonia",
              "sources": [
                {
                  "title": "NINDS · Parkinson’s disease",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "bulbar weakness",
              "aliases": [
                "bulbar dysfunction",
                "weak speech muscles",
                "bulbar muscle weakness",
                "weakness of speech muscles",
                "weak tongue",
                "tongue weakness",
                "oropharyngeal weakness",
                "pharyngeal weakness",
                "palatal weakness",
                "weak palate",
                "bulbar paresis",
                "bulbar palsy",
                "speech and swallowing weakness",
                "bulbar motor dysfunction",
                "lower cranial nerve weakness",
                "bulbar weakness"
              ],
              "info": "Possible weakness of muscles used for speech or swallowing; slurred speech alone does not establish a bulbar palsy.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-bulbar-weakness",
              "sources": [
                {
                  "title": "NINDS · Amyotrophic lateral sclerosis",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_ALS_Booklet_Digital-508c.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "aphasia",
              "aliases": [
                "language impairment",
                "word-finding difficulty",
                "dysphasia",
                "aphasic speech",
                "aphasic",
                "language disorder",
                "language dysfunction",
                "impaired language",
                "trouble finding words",
                "word finding problems",
                "anomia",
                "difficulty producing language",
                "impaired comprehension",
                "difficulty understanding speech",
                "expressive aphasia",
                "receptive aphasia",
                "afasia",
                "aphasia"
              ],
              "info": "A language impairment affecting expression or understanding. Unclear articulation alone does not establish aphasia.",
              "hint": "Consider difficulty producing or understanding language itself.",
              "id": "symptom-aphasia",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "fatigable speech",
              "aliases": [
                "speech fatigue",
                "voice worsens with use",
                "fatigable dysarthria",
                "fatiguing speech",
                "fatigable voice",
                "fatigable bulbar weakness",
                "speech gets worse with talking",
                "voice tires",
                "tiring voice",
                "speech worsens with use",
                "speech worsens with repeated use",
                "slurring worsens with talking",
                "fluctuating dysarthria",
                "fluctuating speech weakness",
                "fatigability of speech",
                "fatigable speech"
              ],
              "info": "Speech performance declines with continued use and may improve after rest. This is more specific than feeling generally tired.",
              "hint": "Consider a change that becomes more apparent with use or over time.",
              "id": "symptom-fatigable-speech",
              "sources": [
                {
                  "title": "NINDS · Myasthenia gravis",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/myasthenia-gravis.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "vocal tremor",
              "aliases": [
                "shaky voice",
                "tremulous speech",
                "voice tremor",
                "voice shaking",
                "shaking voice",
                "tremor of the voice",
                "tremulous voice",
                "quivering voice",
                "wavering voice",
                "shaky speech",
                "tremor in speech",
                "vocal shaking",
                "vocal tremor"
              ],
              "info": "Rhythmic oscillation affecting the voice; an irregular or hoarse voice alone is not vocal tremor.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-vocal-tremor",
              "sources": [
                {
                  "title": "NINDS · Tremor",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "aliases": [
                "brain tumor",
                "tumor",
                "intracranial mass",
                "brain mass",
                "cerebral tumor",
                "neoplasm",
                "brain tumour",
                "cerebral tumour",
                "intracranial tumour",
                "intracranial tumor",
                "intracranial neoplasm",
                "cerebral neoplasm",
                "brain neoplasm",
                "CNS tumor",
                "CNS tumour",
                "central nervous system tumor",
                "focal brain tumor",
                "focal intracranial mass",
                "intracerebral tumor",
                "intracerebral mass",
                "mass in the brain",
                "tumor in the brain",
                "tumour in the brain",
                "space occupying brain lesion",
                "brain space-occupying lesion",
                "intracranial space occupying lesion",
                "brain cancer",
                "malignant brain tumor",
                "benign brain tumor",
                "glioma",
                "glioblastoma",
                "GBM",
                "meningioma",
                "cerebral mass lesion",
                "focal mass lesion",
                "brain turmor",
                "right-hemisphere mass lesion",
                "tumour"
              ],
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ]
            },
            {
              "type": "disease",
              "term": "Stroke",
              "aliases": [
                "ischemic stroke",
                "stroke",
                "CVA",
                "cerebral infarction",
                "brain infarct",
                "ischaemic stroke",
                "ischemic CVA",
                "ischaemic CVA",
                "cerebrovascular accident",
                "cerebral ischemia",
                "cerebral ischaemia",
                "ischemic cerebral infarction",
                "ischaemic cerebral infarction",
                "brain infarction",
                "cerebral infarct",
                "prior stroke",
                "previous stroke",
                "old stroke",
                "remote stroke",
                "stroke residual",
                "stroke sequelae",
                "post stroke deficit",
                "embolic stroke",
                "thrombotic stroke",
                "focal cerebral infarction",
                "arterial ischemic stroke",
                "ishemic stroke",
                "hemorrhagic stroke",
                "brain bleed",
                "intracerebral hemorrhage",
                "cerebral hemorrhage",
                "haemorrhagic stroke",
                "hemorrhagic CVA",
                "haemorrhagic CVA",
                "ICH",
                "intracerebral haemorrhage",
                "cerebral haemorrhage",
                "intracranial hemorrhage",
                "intracranial haemorrhage",
                "bleeding in the brain",
                "hemorrhage in the brain",
                "haemorrhage in the brain",
                "bleeding stroke",
                "hemorragic stroke",
                "hemorrhagic cerebrovascular accident",
                "intraparenchymal hemorrhage"
              ],
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "transient ischemic attack",
              "aliases": [
                "TIA",
                "mini stroke",
                "transient stroke",
                "transient ischaemic attack",
                "transient ischemia",
                "transient cerebral ischemia",
                "transient cerebral ischaemia",
                "temporary ischemic attack",
                "transient neurological ischemic episode",
                "transient focal ischemia",
                "transient ishemic attack",
                "transient ischemic attack"
              ],
              "info": "A transient episode of focal neurologic dysfunction. It does not explain a lasting deficit; resolution and timing must be established.",
              "hint": "Consider a short-lived interruption of blood supply that temporarily changes neurologic function.",
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
              "type": "disease",
              "term": "Parkinson disease",
              "aliases": [
                "Parkinson's disease",
                "parkinsonism",
                "parkinsons",
                "Parkinson",
                "Parkinsonian syndrome",
                "Parkinsonian disorder",
                "idiopathic Parkinson disease",
                "idiopathic Parkinsons disease",
                "PD",
                "Parkinsonian disease",
                "Parkinsons desease",
                "Parkinsons diesease",
                "hypokinetic movement disorder",
                "Parkinson disease"
              ],
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "amyotrophic lateral sclerosis",
              "aliases": [
                "ALS",
                "motor neuron disease",
                "Lou Gehrig disease",
                "amyotrophic lateral scleroses",
                "motor neurone disease",
                "motor neuron disorder",
                "motor neurone disorder",
                "MND",
                "Lou Gehrigs disease",
                "Lou Gehrigs",
                "amyotrophic lateral sclerosiss",
                "amyotrophic lateral scerlosis",
                "progressive motor neuron disease",
                "bulbar ALS",
                "bulbar onset ALS",
                "limb onset ALS",
                "Amyotrophic lateral sclerosis"
              ],
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "type": "disease",
              "term": "multiple sclerosis",
              "aliases": [
                "MS",
                "demyelinating disease",
                "disseminated sclerosis",
                "central demyelinating disease",
                "CNS demyelination",
                "multiple scleroses",
                "multiple sclerosiss",
                "multiple scerlosis",
                "multiple slerosis",
                "relapsing remitting MS",
                "progressive MS",
                "demyelinating CNS disease",
                "multiple sclerosis"
              ],
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect speech production.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "cerebellar disease",
              "aliases": [
                "cerebellar lesion",
                "cerebellar degeneration",
                "cerebellar ataxia",
                "cerebellar dysfunction",
                "cerebellar disorder",
                "cerebellar pathology",
                "cerebellar syndrome",
                "cerebellar damage",
                "cerebellar injury",
                "cerebellar degeneration syndrome",
                "cerebellar motor syndrome",
                "cerebellar process",
                "cerebellum disease",
                "cerebellum lesion",
                "spinocerebellar ataxia",
                "SCA",
                "cerebellar stroke",
                "cerebellar tumor",
                "cerebellar disease"
              ],
              "info": "Changes in coordination pathways can alter movement timing and accuracy, which can affect speech production.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "myasthenia gravis",
              "aliases": [
                "MG",
                "autoimmune myasthenia",
                "myasthenia",
                "myasthenic disorder",
                "myasthenic disease",
                "autoimmune neuromuscular junction disease",
                "myasthenia gravis disease",
                "generalized myasthenia gravis",
                "generalized MG",
                "bulbar myasthenia",
                "myasthenic weakness",
                "myasthenia gravas",
                "myastenia gravis",
                "myasthenia gravus",
                "Myasthenia gravis"
              ],
              "info": "Immune-mediated failure of nerve-to-muscle signaling. Fluctuating weakness, ptosis and worsening with repeated use support this possibility.",
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
              "type": "disease",
              "term": "seizure with postictal deficit",
              "aliases": [
                "postictal state",
                "Todd paralysis",
                "focal seizure",
                "postictal weakness",
                "postictal paralysis",
                "Todd paresis",
                "Todds paralysis",
                "Todd's paresis",
                "postictal speech deficit",
                "postictal dysarthria",
                "seizure",
                "focal epilepsy",
                "seizure related deficit",
                "post-ictal deficit",
                "seizure with postictal deficit"
              ],
              "info": "Seizure-related changes can temporarily alter neural function, which can affect speech production.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "alcohol intoxication",
              "aliases": [
                "drunk",
                "ethanol intoxication",
                "acute alcohol use",
                "intoxicated with alcohol",
                "alcohol poisoning",
                "alcohol-induced impairment",
                "acute ethanol intoxication",
                "acute alcohol intoxication",
                "drunkenness",
                "drinking alcohol",
                "drunk on wine",
                "inebriation",
                "inebriated",
                "intoxication from alcohol",
                "alcohol-related ataxia",
                "alcohol intoxication"
              ],
              "info": "Alcohol can affect coordination and motor control, which can affect speech production.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-alcohol-intoxication",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "sedative medication effect",
              "aliases": [
                "medication side effect",
                "benzodiazepine effect",
                "sedative intoxication",
                "sedating medication effect",
                "drug induced sedation",
                "drug-induced speech impairment",
                "sedative side effect",
                "sedative toxicity",
                "sedative overdose",
                "benzodiazepine intoxication",
                "benzodiazepine side effect",
                "benzodiazepines",
                "sedating drugs",
                "medication induced dysarthria",
                "drug induced dysarthria",
                "medication toxicity",
                "CNS depressant effect",
                "sedative medication effect"
              ],
              "info": "Sedating medication can affect movement coordination, which can affect speech production.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-sedative-medication-effect",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "metabolic encephalopathy",
              "aliases": [
                "toxic metabolic encephalopathy",
                "metabolic disturbance",
                "toxic encephalopathy",
                "systemic metabolic dysfunction",
                "metabolic brain dysfunction",
                "metabolic brain disorder",
                "encephalopathy",
                "hypoglycemic encephalopathy",
                "hypoglycemia",
                "hypoglycaemia",
                "electrolyte disturbance",
                "metabolic derangement",
                "metabolic encefalopathy",
                "metabolic encephalopathy"
              ],
              "info": "Metabolic disturbances can alter brain function, which can affect speech production.",
              "hint": "Consider a diffuse disturbance of brain function due to systemic chemistry.",
              "id": "disease-metabolic-encephalopathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "symptom",
              "term": "apraxia of speech",
              "aliases": [
                "verbal apraxia",
                "acquired apraxia of speech",
                "speech apraxia",
                "motor speech apraxia",
                "AOS",
                "apraxia of speech"
              ],
              "info": "Disrupted planning of speech movements can change the sequence and clarity of sounds.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-apraxia-of-speech",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "dysphonia",
              "aliases": [
                "voice change",
                "altered voice quality",
                "hoarseness",
                "hoarse voice",
                "rough voice",
                "dysphonia"
              ],
              "info": "Changes in voice production can alter the quality of a spoken message.",
              "hint": "Consider altered quality of the voice.",
              "id": "symptom-dysphonia",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "hypernasal speech",
              "aliases": [
                "hypernasality",
                "nasal speech",
                "nasal voice",
                "excessive nasal resonance",
                "hypernasal voice",
                "hypernasal speech"
              ],
              "info": "Altered closure between the mouth and nose can change speech resonance.",
              "hint": "Consider how airflow and closure between the mouth and nose affect speech.",
              "id": "symptom-hypernasal-speech",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "symptom",
              "term": "monoprosody",
              "aliases": [
                "monotone speech",
                "monotonous speech",
                "flat prosody",
                "reduced speech inflection",
                "loss of intonation",
                "monoprosody"
              ],
              "info": "Reduced variation in pitch and rhythm can make speech sound flat.",
              "hint": "Consider variation in pitch, stress, and rhythm during speech.",
              "id": "symptom-monoprosody",
              "evidenceLabel": "Possible interpretation"
            },
            {
              "type": "disease",
              "term": "progressive supranuclear palsy",
              "aliases": [
                "PSP",
                "supranuclear palsy",
                "Steele Richardson Olszewski syndrome",
                "progressive supranuclear palsy"
              ],
              "info": "An atypical parkinsonian disorder. Early balance problems and impaired eye movements help distinguish it from Parkinson disease.",
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
              "type": "disease",
              "term": "multiple system atrophy",
              "aliases": [
                "MSA",
                "MSA P",
                "MSA C",
                "multisystem atrophy",
                "multiple system atrophy"
              ],
              "info": "Changes in autonomic and movement pathways can affect speech control.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-multiple-system-atrophy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "Huntington disease",
              "aliases": [
                "Huntingtons disease",
                "Huntington chorea",
                "HD",
                "Huntingtons",
                "Huntington disease"
              ],
              "info": "Changes in movement-control circuits can affect articulation and speech rhythm.",
              "hint": "Consider an inherited disorder that can produce unwanted movements and impaired motor control.",
              "id": "disease-huntington-disease",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "traumatic brain injury",
              "aliases": [
                "TBI",
                "head injury",
                "brain injury",
                "traumatic brain damage",
                "traumatic brain injury"
              ],
              "info": "Injury to neural pathways can affect speech planning or muscle coordination.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "evidenceLabel": "Differential possibility"
            }
          ],
          "symptomsNeeded": 2,
          "diagnosesNeeded": 2,
          "symptomStarThreshold": 4,
          "diagnosisStarThreshold": 4
        }
      ]
    },
    {
      "title": "Medication",
      "stages": [
        {
          "title": "Record Review",
          "revealThreshold": 2,
          "media": {
            "type": "none",
            "src": "",
            "alt": "",
            "caption": ""
          },
          "questions": [
            {
              "label": "Notice the finding",
              "prompt": "What medication is named on the bottle?",
              "hint": "Read the label; distinguish the observed medication from its possible indications."
            },
            {
              "label": "Describe the symptom",
              "prompt": "Does the prescription alone establish a neurologic symptom?",
              "hint": "No specific symptom can be established from prednisone use alone."
            },
            {
              "label": "Where is it localized?",
              "prompt": "Can the prescription alone localize a lesion?",
              "hint": "No. A treatment can be used for several conditions affecting different tissues."
            },
            {
              "label": "Build the differential",
              "prompt": "Which conditions might explain corticosteroid treatment?",
              "hint": "Consider possible indications without treating the medication as proof of one diagnosis."
            }
          ],
          "accepted": [
            {
              "id": "symptom-corticosteroid-use",
              "term": "Corticosteroid use",
              "type": "symptom",
              "aliases": [
                "prednisone",
                "prednisone use",
                "steroid medication",
                "corticosteroids",
                "corticosteroid treatment",
                "steroid use",
                "taking prednisone",
                "no symptom established",
                "no symptom can be inferred",
                "insufficient evidence for symptoms"
              ],
              "info": "The label identifies prednisone use. A medication is an observation about treatment; it does not establish weakness, inflammation, cerebral edema or a specific diagnosis.",
              "hint": "Identify what is actually on the label before inferring why it was prescribed.",
              "evidenceLabel": "Treatment observation"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "aliases": [
                "brain tumor",
                "tumor",
                "intracranial mass",
                "brain mass",
                "cerebral tumor",
                "neoplasm",
                "brain tumour",
                "cerebral tumour",
                "intracranial tumour",
                "intracranial tumor",
                "intracranial neoplasm",
                "cerebral neoplasm",
                "brain neoplasm",
                "CNS tumor",
                "CNS tumour",
                "central nervous system tumor",
                "focal brain tumor",
                "focal intracranial mass",
                "intracerebral tumor",
                "intracerebral mass",
                "mass in the brain",
                "tumor in the brain",
                "tumour in the brain",
                "space occupying brain lesion",
                "brain space-occupying lesion",
                "intracranial space occupying lesion",
                "brain cancer",
                "malignant brain tumor",
                "benign brain tumor",
                "glioma",
                "glioblastoma",
                "GBM",
                "meningioma",
                "cerebral mass lesion",
                "focal mass lesion",
                "brain turmor",
                "right-hemisphere mass lesion",
                "tumour",
                "brain metastasis",
                "metastatic brain tumor",
                "cerebral metastasis",
                "intracranial metastasis",
                "brain metastases",
                "cerebral metastases",
                "intracranial metastases",
                "metastatic brain cancer",
                "metastatic tumor in brain",
                "metastatic tumour in brain",
                "secondary brain tumor",
                "secondary brain tumour",
                "brain mets",
                "cerebral mets",
                "CNS metastases",
                "metastatic intracranial disease",
                "primary CNS lymphoma",
                "CNS lymphoma",
                "brain lymphoma",
                "primary central nervous system lymphoma",
                "PCNSL",
                "primary CNS lymphomas",
                "primary brain lymphoma",
                "central nervous system lymphoma",
                "primary intracranial lymphoma",
                "intracerebral lymphoma",
                "lymphoma in the brain",
                "lymphoma of the brain",
                "primary cerebral lymphoma",
                "primary CNS lymphma"
              ],
              "info": "Corticosteroids may be used for selected edema associated with brain tumors. Prednisone use alone does not establish cerebral edema or identify a tumor; the specific regimen and indication matter.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ]
            },
            {
              "type": "disease",
              "term": "multiple sclerosis relapse",
              "aliases": [
                "MS flare",
                "multiple sclerosis exacerbation",
                "demyelinating relapse",
                "MS relapse",
                "MS exacerbation",
                "MS attack",
                "MS flare up",
                "multiple sclerosis flare",
                "multiple sclerosis attack",
                "acute MS relapse",
                "acute demyelinating relapse",
                "demyelinating exacerbation",
                "relapse of MS",
                "relapse of multiple sclerosis",
                "multiple sclerosis",
                "MS",
                "demyelination",
                "multiple sclerosis relapse"
              ],
              "info": "New or worsening neurologic symptoms from inflammatory demyelination may prompt corticosteroid treatment; a prescription does not establish a relapse.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis-relapse",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Multiple sclerosis",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/multiple-sclerosis-hope-through-research.pdf"
                }
              ]
            },
            {
              "type": "disease",
              "term": "inflammatory myopathy",
              "aliases": [
                "myositis",
                "polymyositis",
                "dermatomyositis",
                "inflammatory muscle disease",
                "autoimmune myopathy",
                "immune mediated myopathy",
                "inflammatory myositis",
                "autoimmune myositis",
                "idiopathic inflammatory myopathy",
                "IIM",
                "immune mediated necrotizing myopathy",
                "IMNM",
                "inflammatory myopthy",
                "inflammatory myopaty",
                "inflammatory myopathy"
              ],
              "info": "A group of inflammatory muscle diseases. Distribution of weakness and other findings determine the fit; a steroid prescription alone is nonspecific.",
              "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
              "id": "disease-inflammatory-myopathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Inflammatory myopathies",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
                }
              ]
            },
            {
              "type": "disease",
              "term": "myasthenia gravis",
              "aliases": [
                "MG",
                "autoimmune myasthenia",
                "myasthenia",
                "myasthenic disorder",
                "myasthenic disease",
                "autoimmune neuromuscular junction disease",
                "myasthenia gravis disease",
                "generalized myasthenia gravis",
                "generalized MG",
                "bulbar myasthenia",
                "myasthenic weakness",
                "myasthenia gravas",
                "myastenia gravis",
                "myasthenia gravus",
                "Myasthenia gravis",
                "ocular myasthenia",
                "ocular myasthenia gravis"
              ],
              "info": "Immune-mediated failure of nerve-to-muscle signaling. Fluctuating weakness, ptosis and worsening with repeated use support this possibility.",
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
              "type": "disease",
              "term": "CNS vasculitis",
              "aliases": [
                "central nervous system vasculitis",
                "cerebral vasculitis",
                "primary angiitis of the CNS",
                "CNS angiitis",
                "PACNS",
                "primary CNS vasculitis",
                "primary cerebral vasculitis",
                "central nervous system angiitis",
                "inflammatory cerebral vasculopathy",
                "autoimmune cerebral vasculitis",
                "vasculitis of brain",
                "vasculitis of the CNS",
                "brain vasculitis",
                "CNS vasculitis"
              ],
              "info": "Corticosteroids may be used to suppress inflammation in nervous-system blood vessels.",
              "hint": "Consider inflammation involving vessels that supply the nervous system.",
              "id": "disease-cns-vasculitis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "autoimmune encephalitis",
              "aliases": [
                "immune encephalitis",
                "antibody-mediated encephalitis",
                "AE",
                "autoimmune encephalopathy",
                "immune-mediated encephalitis",
                "immunologic encephalitis",
                "anti NMDA receptor encephalitis",
                "anti-NMDAR encephalitis",
                "autoimmune brain inflammation",
                "autoimmune encephalits",
                "autoimmune encefalitis",
                "limbic encephalitis",
                "autoimmune encephalitis"
              ],
              "info": "Corticosteroids may be used to reduce immune-mediated brain inflammation.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-autoimmune-encephalitis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "neurosarcoidosis",
              "aliases": [
                "neurologic sarcoidosis",
                "CNS sarcoidosis",
                "sarcoidosis of nervous system",
                "nervous system sarcoidosis",
                "cerebral sarcoidosis",
                "brain sarcoidosis",
                "neurologic sarcoid",
                "neurological sarcoidosis",
                "neuro sarcoid",
                "neurosarcoidosis"
              ],
              "info": "Corticosteroids may be used to reduce granulomatous nervous-system inflammation.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-neurosarcoidosis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "Bell palsy",
              "aliases": [
                "facial nerve palsy",
                "idiopathic facial palsy",
                "peripheral facial palsy",
                "Bells palsy",
                "Bell's paralysis",
                "idiopathic facial nerve palsy",
                "idiopathic peripheral facial palsy",
                "idiopathic facial paralysis",
                "peripheral facial paralysis",
                "seventh nerve palsy",
                "facial nerve paralysis",
                "acute idiopathic facial palsy",
                "Bell palsy disease",
                "Bell palsy"
              ],
              "info": "Corticosteroids may be used to reduce inflammation affecting facial nerve function.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "disease-bell-palsy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "giant cell arteritis",
              "aliases": [
                "temporal arteritis",
                "GCA",
                "cranial arteritis",
                "temporal artery inflammation",
                "temporal vasculitis",
                "giant cell temporal arteritis",
                "giant cell arthritis",
                "arteritis of temporal artery",
                "giant cell arteritis"
              ],
              "info": "Corticosteroids may be used to suppress inflammation in arteries.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-giant-cell-arteritis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "optic neuritis",
              "aliases": [
                "optic nerve inflammation",
                "inflammatory optic neuropathy",
                "demyelinating optic neuritis",
                "optic neuritis"
              ],
              "info": "Corticosteroids may be used to reduce inflammation affecting the optic nerve.",
              "hint": "Consider inflammation affecting the nerve carrying visual signals.",
              "id": "disease-optic-neuritis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "transverse myelitis",
              "aliases": [
                "TM",
                "spinal cord inflammation",
                "acute transverse myelitis",
                "inflammatory myelitis",
                "transverse myelitis"
              ],
              "info": "Corticosteroids may be used to reduce inflammation in the spinal cord.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-transverse-myelitis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "chronic inflammatory demyelinating polyneuropathy",
              "aliases": [
                "CIDP",
                "chronic inflammatory demyelinating polyradiculoneuropathy",
                "chronic inflammatory neuropathy",
                "chronic inflammatory demyelinating polyneuropathy"
              ],
              "info": "Corticosteroids may be used to suppress immune-mediated peripheral nerve inflammation.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-chronic-inflammatory-demyelinating-polyneuropathy",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "acute disseminated encephalomyelitis",
              "aliases": [
                "ADEM",
                "disseminated encephalomyelitis",
                "acute disseminated encephalomyelitis"
              ],
              "info": "Corticosteroids may be used to reduce inflammatory changes in the brain and spinal cord.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-acute-disseminated-encephalomyelitis",
              "evidenceLabel": "Differential possibility"
            },
            {
              "type": "disease",
              "term": "neuromyelitis optica spectrum disorder",
              "aliases": [
                "NMOSD",
                "NMO",
                "neuromyelitis optica",
                "Devic disease",
                "Devics disease",
                "neuromyelitis optica spectrum disorder"
              ],
              "info": "An inflammatory central nervous system disorder often involving optic nerves or spinal cord. A steroid prescription does not distinguish it from other inflammatory conditions.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-neuromyelitis-optica-spectrum-disorder",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neuromyelitis optica spectrum disorder",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neuromyelitis-optica-spectrum-disorder"
                }
              ]
            },
            {
              "type": "disease",
              "term": "MOG antibody associated disease",
              "aliases": [
                "MOGAD",
                "MOG antibody disease",
                "MOG associated disease",
                "myelin oligodendrocyte glycoprotein antibody disease",
                "MOG antibody associated disease"
              ],
              "info": "Corticosteroids may be used to reduce inflammatory attacks affecting central nervous-system pathways.",
              "hint": "Consider an antibody-associated inflammatory disorder of central myelin.",
              "id": "disease-mog-antibody-associated-disease",
              "evidenceLabel": "Differential possibility"
            }
          ],
          "symptomsNeeded": 1,
          "diagnosesNeeded": 2,
          "symptomStarThreshold": 1,
          "diagnosisStarThreshold": 4,
          "previousAnswerIds": [
            "symptom-vasogenic-cerebral-edema",
            "symptom-intracranial-pressure-symptoms",
            "symptom-inflammatory-neurologic-flare",
            "disease-brain-tumor",
            "disease-multiple-sclerosis-relapse",
            "disease-inflammatory-myopathy",
            "disease-myasthenia-gravis",
            "disease-cns-vasculitis",
            "disease-autoimmune-encephalitis",
            "disease-neurosarcoidosis",
            "disease-bell-palsy",
            "disease-giant-cell-arteritis",
            "symptom-proximal-muscle-weakness",
            "symptom-inflammatory-visual-loss",
            "disease-optic-neuritis",
            "disease-transverse-myelitis",
            "disease-chronic-inflammatory-demyelinating-polyneuropathy",
            "disease-acute-disseminated-encephalomyelitis",
            "disease-neuromyelitis-optica-spectrum-disorder",
            "disease-mog-antibody-associated-disease",
            "symptom-weakness",
            "symptom-fatigability",
            "symptom-inflammation"
          ],
          "answerRevision": 2,
          "symptomLabel": "Observations",
          "symptomSingular": "observation"
        }
      ]
    }
  ],
  "suggestionsAfter": 6,
  "symptomsNeeded": 2,
  "diagnosesNeeded": 2,
  "symptomStarThreshold": 4,
  "diagnosisStarThreshold": 4,
  "suspectSets": [
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
  ],
  "clueOrderRevision": 2
};
