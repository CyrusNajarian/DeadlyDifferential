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
              "term": "Weakness",
              "info": "Reduced muscle strength.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-unilateral-arm-weakness",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "unilateral arm weakness"
            },
            {
              "type": "symptom",
              "term": "Weakness",
              "info": "Reduced muscle strength.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-asymmetric-grip-strength",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "asymmetric grip strength"
            },
            {
              "type": "symptom",
              "term": "Dysmetria",
              "info": "Overshooting or undershooting a movement target.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-upper-limb-dysmetria",
              "referenceIds": [
                "s-dysmetria"
              ],
              "legacyTerm": "upper-limb dysmetria"
            },
            {
              "type": "symptom",
              "term": "Tremor",
              "info": "Rhythmic involuntary shaking.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-unilateral-tremor",
              "referenceIds": [
                "s-tremor"
              ],
              "legacyTerm": "unilateral tremor"
            },
            {
              "type": "symptom",
              "term": "Sensory loss",
              "info": "Reduced ability to feel touch, pain, or temperature.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-sensory-loss",
              "referenceIds": [
                "s-sensory-loss"
              ],
              "legacyTerm": "sensory loss"
            },
            {
              "type": "symptom",
              "term": "Hemispatial neglect",
              "info": "Reduced attention to one side of space or the body.",
              "hint": "Consider whether attention is distributed equally across both sides of space.",
              "id": "symptom-hemispatial-neglect",
              "referenceIds": [
                "s-hemispatial-neglect"
              ],
              "legacyTerm": "hemispatial neglect"
            },
            {
              "type": "symptom",
              "term": "Arm pain",
              "info": "Pain affecting an upper limb, sometimes limiting effort.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "symptom-arm-pain-limiting-effort",
              "referenceIds": [
                "s-arm-pain"
              ],
              "legacyTerm": "arm pain limiting effort"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "An abnormal growth of cells within or around the brain.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "Brain injury caused by interrupted blood flow or bleeding.",
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
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "An immune-mediated disease affecting myelin and axons in the CNS.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Cervical myelopathy",
              "info": "Spinal cord dysfunction in the neck.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "referenceIds": [
                "d-cervical-myelopathy"
              ],
              "legacyTerm": "cervical myelopathy"
            },
            {
              "type": "disease",
              "term": "Cervical radiculopathy",
              "info": "Dysfunction of a spinal nerve root in the neck.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-cervical-radiculopathy",
              "referenceIds": [
                "d-cervical-radiculopathy"
              ],
              "legacyTerm": "cervical radiculopathy"
            },
            {
              "type": "disease",
              "term": "Brachial plexopathy",
              "info": "Dysfunction of the nerve network supplying the arm.",
              "hint": "Consider a problem in the nerve network between the neck and arm.",
              "id": "disease-brachial-plexopathy",
              "referenceIds": [
                "d-brachial-plexopathy"
              ],
              "legacyTerm": "brachial plexopathy"
            },
            {
              "type": "disease",
              "term": "Peripheral mononeuropathy",
              "info": "Dysfunction of a single peripheral nerve.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-mononeuropathy",
              "referenceIds": [
                "d-peripheral-mononeuropathy"
              ],
              "legacyTerm": "peripheral mononeuropathy"
            },
            {
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive disease affecting upper and lower motor neurons.",
              "hint": "Consider disease affecting the neurons that drive muscle contraction.",
              "id": "disease-amyotrophic-lateral-sclerosis",
              "referenceIds": [
                "d-amyotrophic-lateral-sclerosis"
              ],
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive disorder causing bradykinesia with rigidity or rest tremor.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-parkinson-disease",
              "referenceIds": [
                "d-parkinson-disease"
              ],
              "legacyTerm": "Parkinson disease"
            },
            {
              "type": "disease",
              "term": "Upper-limb injury",
              "info": "Injury affecting the shoulder, arm, wrist, or hand.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-rotator-cuff-or-arm-injury",
              "referenceIds": [
                "d-upper-limb-injury"
              ],
              "legacyTerm": "rotator cuff or arm injury"
            },
            {
              "type": "symptom",
              "term": "Spasticity",
              "info": "Muscle tone increases more with faster stretching.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-arm-spasticity",
              "referenceIds": [
                "s-spasticity"
              ],
              "legacyTerm": "arm spasticity"
            },
            {
              "type": "symptom",
              "term": "Motor fatigability",
              "info": "Muscle performance worsens with repeated use.",
              "hint": "Consider a change that becomes more apparent with use or over time.",
              "id": "symptom-motor-fatigability",
              "referenceIds": [
                "s-motor-fatigability"
              ],
              "legacyTerm": "motor fatigability"
            },
            {
              "type": "symptom",
              "term": "Rigidity",
              "info": "Increased resistance throughout passive limb movement.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-arm-rigidity",
              "referenceIds": [
                "s-rigidity"
              ],
              "legacyTerm": "arm rigidity"
            },
            {
              "type": "symptom",
              "term": "Apraxia",
              "info": "Difficulty performing learned purposeful actions despite sufficient basic strength.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-limb-apraxia",
              "referenceIds": [
                "s-apraxia"
              ],
              "legacyTerm": "limb apraxia"
            },
            {
              "type": "disease",
              "term": "Corticobasal syndrome",
              "info": "Asymmetric movement and cortical dysfunction with several possible underlying causes.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "referenceIds": [
                "d-corticobasal-syndrome"
              ],
              "legacyTerm": "corticobasal syndrome"
            },
            {
              "type": "disease",
              "term": "Epilepsy",
              "info": "A disorder involving recurrent seizures. Seizures can affect movement or awareness and may be followed by temporary neurologic deficits.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "referenceIds": [
                "d-epilepsy"
              ],
              "legacyTerm": "seizure with postictal deficit"
            },
            {
              "type": "disease",
              "term": "Traumatic brain injury",
              "info": "Brain dysfunction or damage caused by external force.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "referenceIds": [
                "d-traumatic-brain-injury"
              ],
              "legacyTerm": "traumatic brain injury"
            },
            {
              "type": "disease",
              "term": "Focal dystonia",
              "info": "Dystonic contractions affecting one body region or a specific task.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "disease-focal-limb-dystonia",
              "referenceIds": [
                "d-focal-dystonia"
              ],
              "legacyTerm": "focal limb dystonia"
            },
            {
              "type": "disease",
              "term": "Myasthenia gravis",
              "info": "An autoimmune neuromuscular junction disorder causing fatigable weakness.",
              "hint": "Consider impaired transmission between a nerve and its muscle.",
              "id": "disease-myasthenia-gravis",
              "referenceIds": [
                "d-myasthenia-gravis"
              ],
              "legacyTerm": "myasthenia gravis"
            },
            {
              "type": "disease",
              "term": "Inflammatory myopathy",
              "info": "A diagnostic category of immune-mediated muscle diseases.",
              "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
              "id": "disease-inflammatory-myopathy",
              "referenceIds": [
                "d-inflammatory-myopathy"
              ],
              "legacyTerm": "inflammatory myopathy"
            },
            {
              "id": "expanded-s-hypotonia",
              "term": "Hypotonia",
              "type": "symptom",
              "referenceIds": [
                "s-hypotonia"
              ],
              "info": "Abnormally low muscle tone.",
              "hint": "Abnormally low muscle tone."
            },
            {
              "id": "expanded-s-hypertonia",
              "term": "Hypertonia",
              "type": "symptom",
              "referenceIds": [
                "s-hypertonia"
              ],
              "info": "Increased muscle tone that makes a limb stiff and harder to move passively.",
              "hint": "Increased muscle tone that makes a limb stiff and harder to move passively."
            },
            {
              "id": "expanded-s-dystonia",
              "term": "Dystonia",
              "type": "symptom",
              "referenceIds": [
                "s-dystonia"
              ],
              "info": "Sustained or intermittent contractions cause abnormal postures or movements.",
              "hint": "Sustained or intermittent contractions cause abnormal postures or movements."
            },
            {
              "id": "expanded-s-myotonia",
              "term": "Myotonia",
              "type": "symptom",
              "referenceIds": [
                "s-myotonia"
              ],
              "info": "Delayed muscle relaxation after contraction.",
              "hint": "Delayed muscle relaxation after contraction."
            },
            {
              "id": "expanded-s-impaired-fine-motor-control",
              "term": "Impaired fine motor control",
              "type": "symptom",
              "referenceIds": [
                "s-impaired-fine-motor-control"
              ],
              "info": "Difficulty making small, precise movements.",
              "hint": "Difficulty making small, precise movements."
            },
            {
              "id": "expanded-d-peripheral-neuropathy",
              "term": "Peripheral neuropathy",
              "type": "disease",
              "referenceIds": [
                "d-peripheral-neuropathy"
              ],
              "info": "A broad category of disorders affecting peripheral nerves.",
              "hint": "A broad category of disorders affecting peripheral nerves."
            },
            {
              "id": "expanded-d-multifocal-motor-neuropathy",
              "term": "Multifocal motor neuropathy",
              "type": "disease",
              "referenceIds": [
                "d-multifocal-motor-neuropathy"
              ],
              "info": "An immune-mediated neuropathy predominantly affecting motor nerves.",
              "hint": "An immune-mediated neuropathy predominantly affecting motor nerves."
            },
            {
              "id": "expanded-d-median-neuropathy",
              "term": "Median neuropathy",
              "type": "disease",
              "referenceIds": [
                "d-median-neuropathy"
              ],
              "info": "Dysfunction of the median nerve.",
              "hint": "Dysfunction of the median nerve."
            },
            {
              "id": "expanded-d-ulnar-neuropathy",
              "term": "Ulnar neuropathy",
              "type": "disease",
              "referenceIds": [
                "d-ulnar-neuropathy"
              ],
              "info": "Dysfunction of the ulnar nerve.",
              "hint": "Dysfunction of the ulnar nerve."
            },
            {
              "id": "expanded-d-radial-neuropathy",
              "term": "Radial neuropathy",
              "type": "disease",
              "referenceIds": [
                "d-radial-neuropathy"
              ],
              "info": "Dysfunction of the radial nerve.",
              "hint": "Dysfunction of the radial nerve."
            },
            {
              "id": "expanded-d-myotonic-dystrophy",
              "term": "Myotonic dystrophy",
              "type": "disease",
              "referenceIds": [
                "d-myotonic-dystrophy"
              ],
              "info": "Inherited multisystem disorders featuring myotonia and muscle weakness.",
              "hint": "Inherited multisystem disorders featuring myotonia and muscle weakness."
            },
            {
              "id": "expanded-d-spinal-cord-compression",
              "term": "Spinal cord compression",
              "type": "disease",
              "referenceIds": [
                "d-spinal-cord-compression"
              ],
              "info": "Pressure on the spinal cord causing dysfunction.",
              "hint": "Pressure on the spinal cord causing dysfunction."
            },
            {
              "id": "expanded-d-cerebellar-disorder",
              "term": "Cerebellar disorder",
              "type": "disease",
              "referenceIds": [
                "d-cerebellar-disorder"
              ],
              "info": "A broad diagnostic category involving cerebellar dysfunction.",
              "hint": "A broad diagnostic category involving cerebellar dysfunction."
            },
            {
              "id": "expanded-d-seizure",
              "term": "Epilepsy",
              "type": "disease",
              "referenceIds": [
                "d-epilepsy"
              ],
              "info": "A disorder involving recurrent seizures. Seizures can affect movement or awareness and may be followed by temporary neurologic deficits.",
              "hint": "An episode of abnormal brain electrical activity affecting movement, sensation, behavior or awareness."
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
              "term": "Hemiparetic gait",
              "info": "Walking altered by weakness on one side.",
              "hint": "Compare how much each side contributes to walking.",
              "id": "symptom-hemiparetic-gait",
              "referenceIds": [
                "s-hemiparetic-gait"
              ],
              "legacyTerm": "hemiparetic gait"
            },
            {
              "type": "symptom",
              "term": "Weakness",
              "info": "Reduced muscle strength.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-unilateral-leg-weakness",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "unilateral leg weakness"
            },
            {
              "type": "symptom",
              "term": "Foot drop",
              "info": "Difficulty lifting the front of the foot.",
              "hint": "Consider whether the front of the foot clears the ground during a step.",
              "id": "symptom-foot-drop",
              "referenceIds": [
                "s-foot-drop"
              ],
              "legacyTerm": "foot drop"
            },
            {
              "type": "symptom",
              "term": "Circumduction gait",
              "info": "The leg swings outward in an arc.",
              "hint": "Consider a leg swinging outward to clear the ground.",
              "id": "symptom-circumduction-gait",
              "referenceIds": [
                "s-circumduction-gait"
              ],
              "legacyTerm": "circumduction gait"
            },
            {
              "type": "symptom",
              "term": "Spastic gait",
              "info": "Stiff-legged walking associated with increased muscle tone.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-spastic-gait",
              "referenceIds": [
                "s-spastic-gait"
              ],
              "legacyTerm": "spastic gait"
            },
            {
              "type": "symptom",
              "term": "Parkinsonian gait",
              "info": "Short, shuffling steps with reduced automatic movement.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-bradykinetic-gait",
              "referenceIds": [
                "s-parkinsonian-gait"
              ],
              "legacyTerm": "bradykinetic gait"
            },
            {
              "type": "symptom",
              "term": "Ataxic gait",
              "info": "Unsteady walking from impaired coordination or sensory guidance.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-ataxic-gait",
              "referenceIds": [
                "s-ataxic-gait"
              ],
              "legacyTerm": "ataxic gait"
            },
            {
              "type": "symptom",
              "term": "Antalgic gait",
              "info": "Walking modified to avoid pain.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "symptom-antalgic-gait",
              "referenceIds": [
                "s-antalgic-gait"
              ],
              "legacyTerm": "antalgic gait"
            },
            {
              "type": "symptom",
              "term": "Sensory ataxia",
              "info": "Poor coordination caused by impaired position sense.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-proprioceptive-gait-impairment",
              "referenceIds": [
                "s-sensory-ataxia"
              ],
              "legacyTerm": "proprioceptive gait impairment"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "An abnormal growth of cells within or around the brain.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "Brain injury caused by interrupted blood flow or bleeding.",
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
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "An immune-mediated disease affecting myelin and axons in the CNS.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive disorder causing bradykinesia with rigidity or rest tremor.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-parkinson-disease",
              "referenceIds": [
                "d-parkinson-disease"
              ],
              "legacyTerm": "Parkinson disease"
            },
            {
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive disease affecting upper and lower motor neurons.",
              "hint": "Consider disease affecting the neurons that drive muscle contraction.",
              "id": "disease-amyotrophic-lateral-sclerosis",
              "referenceIds": [
                "d-amyotrophic-lateral-sclerosis"
              ],
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Cervical myelopathy",
              "info": "Spinal cord dysfunction in the neck.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "referenceIds": [
                "d-cervical-myelopathy"
              ],
              "legacyTerm": "cervical myelopathy"
            },
            {
              "type": "disease",
              "term": "Lumbar radiculopathy",
              "info": "Dysfunction of a lower-back spinal nerve root.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-lumbar-radiculopathy",
              "referenceIds": [
                "d-lumbar-radiculopathy"
              ],
              "legacyTerm": "lumbar radiculopathy"
            },
            {
              "type": "disease",
              "term": "Common fibular neuropathy",
              "info": "Dysfunction of the common fibular nerve near the knee.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-common-peroneal-neuropathy",
              "referenceIds": [
                "d-common-fibular-neuropathy"
              ],
              "legacyTerm": "common peroneal neuropathy"
            },
            {
              "type": "disease",
              "term": "Peripheral neuropathy",
              "info": "A broad category of disorders affecting peripheral nerves.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-neuropathy",
              "referenceIds": [
                "d-peripheral-neuropathy"
              ],
              "legacyTerm": "peripheral neuropathy"
            },
            {
              "type": "disease",
              "term": "Cerebellar disorder",
              "info": "A broad diagnostic category involving cerebellar dysfunction.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "referenceIds": [
                "d-cerebellar-disorder"
              ],
              "legacyTerm": "cerebellar disease"
            },
            {
              "type": "disease",
              "term": "Lower-limb injury",
              "info": "Injury affecting the hip, knee, ankle, or foot.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-hip-knee-or-ankle-injury",
              "referenceIds": [
                "d-lower-limb-injury"
              ],
              "legacyTerm": "hip knee or ankle injury"
            },
            {
              "type": "symptom",
              "term": "Freezing of gait",
              "info": "Brief inability to initiate or continue stepping.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-freezing-of-gait",
              "referenceIds": [
                "s-freezing-of-gait"
              ],
              "legacyTerm": "freezing of gait"
            },
            {
              "type": "symptom",
              "term": "Rigidity",
              "info": "Increased resistance throughout passive limb movement.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-leg-rigidity",
              "referenceIds": [
                "s-rigidity"
              ],
              "legacyTerm": "leg rigidity"
            },
            {
              "type": "symptom",
              "term": "Dystonic gait",
              "info": "Walking distorted by abnormal muscle contractions or postures.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "symptom-dystonic-gait",
              "referenceIds": [
                "s-dystonic-gait"
              ],
              "legacyTerm": "dystonic gait"
            },
            {
              "type": "symptom",
              "term": "Reduced foot clearance",
              "info": "The foot does not lift adequately during a step.",
              "hint": "Consider whether the front of the foot clears the ground during a step.",
              "id": "symptom-reduced-foot-clearance",
              "referenceIds": [
                "s-reduced-foot-clearance"
              ],
              "legacyTerm": "reduced foot clearance"
            },
            {
              "type": "disease",
              "term": "Corticobasal syndrome",
              "info": "Asymmetric movement and cortical dysfunction with several possible underlying causes.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "referenceIds": [
                "d-corticobasal-syndrome"
              ],
              "legacyTerm": "corticobasal syndrome"
            },
            {
              "type": "disease",
              "term": "Progressive supranuclear palsy",
              "info": "A degenerative disorder affecting movement, balance, and eye control.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-progressive-supranuclear-palsy",
              "referenceIds": [
                "d-progressive-supranuclear-palsy"
              ],
              "legacyTerm": "progressive supranuclear palsy"
            },
            {
              "type": "disease",
              "term": "Multiple system atrophy",
              "info": "Degeneration affecting autonomic function and movement.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-multiple-system-atrophy",
              "referenceIds": [
                "d-multiple-system-atrophy"
              ],
              "legacyTerm": "multiple system atrophy"
            },
            {
              "type": "disease",
              "term": "Hereditary spastic paraplegia",
              "info": "Inherited disorders causing progressive leg spasticity and weakness.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-hereditary-spastic-paraplegia",
              "referenceIds": [
                "d-hereditary-spastic-paraplegia"
              ],
              "legacyTerm": "hereditary spastic paraplegia"
            },
            {
              "type": "disease",
              "term": "Transverse myelitis",
              "info": "Inflammation of the spinal cord.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-transverse-myelitis",
              "referenceIds": [
                "d-transverse-myelitis"
              ],
              "legacyTerm": "transverse myelitis"
            },
            {
              "id": "expanded-s-hypotonia",
              "term": "Hypotonia",
              "type": "symptom",
              "referenceIds": [
                "s-hypotonia"
              ],
              "info": "Abnormally low muscle tone.",
              "hint": "Abnormally low muscle tone."
            },
            {
              "id": "expanded-s-hypertonia",
              "term": "Hypertonia",
              "type": "symptom",
              "referenceIds": [
                "s-hypertonia"
              ],
              "info": "Increased muscle tone that makes a limb stiff and harder to move passively.",
              "hint": "Increased muscle tone that makes a limb stiff and harder to move passively."
            },
            {
              "id": "expanded-s-dystonia",
              "term": "Dystonia",
              "type": "symptom",
              "referenceIds": [
                "s-dystonia"
              ],
              "info": "Sustained or intermittent contractions cause abnormal postures or movements.",
              "hint": "Sustained or intermittent contractions cause abnormal postures or movements."
            },
            {
              "id": "expanded-s-spasticity",
              "term": "Spasticity",
              "type": "symptom",
              "referenceIds": [
                "s-spasticity"
              ],
              "info": "Muscle tone increases more with faster stretching.",
              "hint": "Muscle tone increases more with faster stretching."
            },
            {
              "id": "expanded-d-spinal-cord-compression",
              "term": "Spinal cord compression",
              "type": "disease",
              "referenceIds": [
                "d-spinal-cord-compression"
              ],
              "info": "Pressure on the spinal cord causing dysfunction.",
              "hint": "Pressure on the spinal cord causing dysfunction."
            },
            {
              "id": "expanded-d-myotonic-dystrophy",
              "term": "Myotonic dystrophy",
              "type": "disease",
              "referenceIds": [
                "d-myotonic-dystrophy"
              ],
              "info": "Inherited multisystem disorders featuring myotonia and muscle weakness.",
              "hint": "Inherited multisystem disorders featuring myotonia and muscle weakness."
            },
            {
              "id": "expanded-d-inclusion-body-myositis",
              "term": "Inclusion body myositis",
              "type": "disease",
              "referenceIds": [
                "d-inclusion-body-myositis"
              ],
              "info": "A progressive muscle disease often affecting finger flexors and knee extensors.",
              "hint": "A progressive muscle disease often affecting finger flexors and knee extensors."
            },
            {
              "id": "expanded-d-postictal-neurologic-deficit",
              "term": "Epilepsy",
              "type": "disease",
              "referenceIds": [
                "d-epilepsy"
              ],
              "info": "A disorder involving recurrent seizures. Seizures can affect movement or awareness and may be followed by temporary neurologic deficits.",
              "hint": "Temporary neurologic dysfunction following a seizure."
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
              "term": "Impaired fine motor control",
              "info": "Difficulty making small, precise movements.",
              "hint": "Consider a loss of precision during small, coordinated movements.",
              "id": "symptom-impaired-fine-motor-control",
              "referenceIds": [
                "s-impaired-fine-motor-control"
              ],
              "legacyTerm": "impaired fine motor control"
            },
            {
              "type": "symptom",
              "term": "Weakness",
              "info": "Reduced muscle strength.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-hand-or-arm-weakness",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "Hand or arm weakness"
            },
            {
              "type": "symptom",
              "term": "Tremor",
              "info": "Rhythmic involuntary shaking.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-tremor",
              "referenceIds": [
                "s-tremor"
              ],
              "legacyTerm": "tremor"
            },
            {
              "type": "symptom",
              "term": "Bradykinesia",
              "info": "Slowed movement with reduced amplitude or speed during repetition.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-bradykinesia",
              "referenceIds": [
                "s-bradykinesia"
              ],
              "legacyTerm": "bradykinesia"
            },
            {
              "type": "symptom",
              "term": "Dysmetria",
              "info": "Overshooting or undershooting a movement target.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-dysmetria",
              "referenceIds": [
                "s-dysmetria"
              ],
              "legacyTerm": "dysmetria"
            },
            {
              "type": "symptom",
              "term": "Sensory loss",
              "info": "Reduced ability to feel touch, pain, or temperature.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-sensory-loss",
              "referenceIds": [
                "s-sensory-loss"
              ],
              "legacyTerm": "sensory loss"
            },
            {
              "type": "symptom",
              "term": "Apraxia",
              "info": "Difficulty performing learned purposeful actions despite sufficient basic strength.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-apraxia",
              "referenceIds": [
                "s-apraxia"
              ],
              "legacyTerm": "apraxia"
            },
            {
              "type": "symptom",
              "term": "Dystonia",
              "info": "Sustained or intermittent contractions cause abnormal postures or movements.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "symptom-dystonia",
              "referenceIds": [
                "s-dystonia"
              ],
              "legacyTerm": "dystonia"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "An abnormal growth of cells within or around the brain.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "Brain injury caused by interrupted blood flow or bleeding.",
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
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive disorder causing bradykinesia with rigidity or rest tremor.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-parkinson-disease",
              "referenceIds": [
                "d-parkinson-disease"
              ],
              "legacyTerm": "Parkinson disease"
            },
            {
              "type": "disease",
              "term": "Essential tremor",
              "info": "An action tremor disorder, often affecting both hands.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "disease-essential-tremor",
              "referenceIds": [
                "d-essential-tremor"
              ],
              "legacyTerm": "essential tremor"
            },
            {
              "type": "disease",
              "term": "Cerebellar disorder",
              "info": "A broad diagnostic category involving cerebellar dysfunction.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "referenceIds": [
                "d-cerebellar-disorder"
              ],
              "legacyTerm": "cerebellar disease"
            },
            {
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "An immune-mediated disease affecting myelin and axons in the CNS.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Cervical myelopathy",
              "info": "Spinal cord dysfunction in the neck.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "referenceIds": [
                "d-cervical-myelopathy"
              ],
              "legacyTerm": "cervical myelopathy"
            },
            {
              "type": "disease",
              "term": "Cervical radiculopathy",
              "info": "Dysfunction of a spinal nerve root in the neck.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-cervical-radiculopathy",
              "referenceIds": [
                "d-cervical-radiculopathy"
              ],
              "legacyTerm": "cervical radiculopathy"
            },
            {
              "type": "disease",
              "term": "Peripheral neuropathy",
              "info": "A broad category of disorders affecting peripheral nerves.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-neuropathy",
              "referenceIds": [
                "d-peripheral-neuropathy"
              ],
              "legacyTerm": "peripheral neuropathy"
            },
            {
              "type": "disease",
              "term": "Median neuropathy",
              "info": "Dysfunction of the median nerve.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-median-or-ulnar-neuropathy",
              "referenceIds": [
                "d-median-neuropathy",
                "d-ulnar-neuropathy"
              ],
              "legacyTerm": "median or ulnar neuropathy"
            },
            {
              "type": "disease",
              "term": "Focal dystonia",
              "info": "Dystonic contractions affecting one body region or a specific task.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "disease-focal-hand-dystonia",
              "referenceIds": [
                "d-focal-dystonia"
              ],
              "legacyTerm": "focal hand dystonia"
            },
            {
              "type": "disease",
              "term": "Alcohol intoxication",
              "info": "Acute impairment caused by alcohol.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-alcohol-or-sedative-intoxication",
              "referenceIds": [
                "d-alcohol-intoxication",
                "d-sedative-medication-effect"
              ],
              "legacyTerm": "alcohol or sedative intoxication"
            },
            {
              "type": "symptom",
              "term": "Rigidity",
              "info": "Increased resistance throughout passive limb movement.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-hand-rigidity",
              "referenceIds": [
                "s-rigidity"
              ],
              "legacyTerm": "hand rigidity"
            },
            {
              "type": "symptom",
              "term": "Myoclonus",
              "info": "Brief, sudden involuntary muscle jerks.",
              "hint": "Consider brief, sudden muscle jerks.",
              "id": "symptom-myoclonus",
              "referenceIds": [
                "s-myoclonus"
              ],
              "legacyTerm": "myoclonus"
            },
            {
              "type": "disease",
              "term": "Corticobasal syndrome",
              "info": "Asymmetric movement and cortical dysfunction with several possible underlying causes.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "referenceIds": [
                "d-corticobasal-syndrome"
              ],
              "legacyTerm": "corticobasal syndrome"
            },
            {
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive disease affecting upper and lower motor neurons.",
              "hint": "Consider disease affecting the neurons that drive muscle contraction.",
              "id": "disease-amyotrophic-lateral-sclerosis",
              "referenceIds": [
                "d-amyotrophic-lateral-sclerosis"
              ],
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Huntington disease",
              "info": "An inherited degenerative disorder affecting movement, thinking, and behavior.",
              "hint": "Consider an inherited disorder that can produce unwanted movements and impaired motor control.",
              "id": "disease-huntington-disease",
              "referenceIds": [
                "d-huntington-disease"
              ],
              "legacyTerm": "Huntington disease"
            },
            {
              "type": "disease",
              "term": "Traumatic brain injury",
              "info": "Brain dysfunction or damage caused by external force.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "referenceIds": [
                "d-traumatic-brain-injury"
              ],
              "legacyTerm": "traumatic brain injury"
            },
            {
              "type": "disease",
              "term": "Epilepsy",
              "info": "A disorder involving recurrent seizures. Seizures can affect movement or awareness and may be followed by temporary neurologic deficits.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "referenceIds": [
                "d-epilepsy"
              ],
              "legacyTerm": "seizure with postictal deficit"
            },
            {
              "type": "symptom",
              "term": "Ataxia",
              "info": "Impaired coordination of movement or balance.",
              "hint": "Consider whether several parts of a movement are coordinated smoothly.",
              "id": "symptom-ataxia",
              "referenceIds": [
                "s-ataxia"
              ],
              "legacyTerm": "Ataxia"
            },
            {
              "id": "expanded-s-motor-fatigability",
              "term": "Motor fatigability",
              "type": "symptom",
              "referenceIds": [
                "s-motor-fatigability"
              ],
              "info": "Muscle performance worsens with repeated use.",
              "hint": "Muscle performance worsens with repeated use."
            },
            {
              "id": "expanded-s-hypotonia",
              "term": "Hypotonia",
              "type": "symptom",
              "referenceIds": [
                "s-hypotonia"
              ],
              "info": "Abnormally low muscle tone.",
              "hint": "Abnormally low muscle tone."
            },
            {
              "id": "expanded-s-hypertonia",
              "term": "Hypertonia",
              "type": "symptom",
              "referenceIds": [
                "s-hypertonia"
              ],
              "info": "Increased muscle tone that makes a limb stiff and harder to move passively.",
              "hint": "Increased muscle tone that makes a limb stiff and harder to move passively."
            },
            {
              "id": "expanded-s-muscle-atrophy",
              "term": "Muscle atrophy",
              "type": "symptom",
              "referenceIds": [
                "s-muscle-atrophy"
              ],
              "info": "Loss of muscle bulk.",
              "hint": "Loss of muscle bulk."
            },
            {
              "id": "expanded-s-myotonia",
              "term": "Myotonia",
              "type": "symptom",
              "referenceIds": [
                "s-myotonia"
              ],
              "info": "Delayed muscle relaxation after contraction.",
              "hint": "Delayed muscle relaxation after contraction."
            },
            {
              "id": "expanded-d-myasthenia-gravis",
              "term": "Myasthenia gravis",
              "type": "disease",
              "referenceIds": [
                "d-myasthenia-gravis"
              ],
              "info": "An autoimmune neuromuscular junction disorder causing fatigable weakness.",
              "hint": "An autoimmune neuromuscular junction disorder causing fatigable weakness."
            },
            {
              "id": "expanded-d-multifocal-motor-neuropathy",
              "term": "Multifocal motor neuropathy",
              "type": "disease",
              "referenceIds": [
                "d-multifocal-motor-neuropathy"
              ],
              "info": "An immune-mediated neuropathy predominantly affecting motor nerves.",
              "hint": "An immune-mediated neuropathy predominantly affecting motor nerves."
            },
            {
              "id": "expanded-d-radial-neuropathy",
              "term": "Radial neuropathy",
              "type": "disease",
              "referenceIds": [
                "d-radial-neuropathy"
              ],
              "info": "Dysfunction of the radial nerve.",
              "hint": "Dysfunction of the radial nerve."
            },
            {
              "id": "expanded-d-inclusion-body-myositis",
              "term": "Inclusion body myositis",
              "type": "disease",
              "referenceIds": [
                "d-inclusion-body-myositis"
              ],
              "info": "A progressive muscle disease often affecting finger flexors and knee extensors.",
              "hint": "A progressive muscle disease often affecting finger flexors and knee extensors."
            },
            {
              "id": "expanded-d-spinal-cord-compression",
              "term": "Spinal cord compression",
              "type": "disease",
              "referenceIds": [
                "d-spinal-cord-compression"
              ],
              "info": "Pressure on the spinal cord causing dysfunction.",
              "hint": "Pressure on the spinal cord causing dysfunction."
            },
            {
              "id": "expanded-d-myotonic-dystrophy",
              "term": "Myotonic dystrophy",
              "type": "disease",
              "referenceIds": [
                "d-myotonic-dystrophy"
              ],
              "info": "Inherited multisystem disorders featuring myotonia and muscle weakness.",
              "hint": "Inherited multisystem disorders featuring myotonia and muscle weakness."
            },
            {
              "id": "expanded-d-seizure",
              "term": "Epilepsy",
              "type": "disease",
              "referenceIds": [
                "d-epilepsy"
              ],
              "info": "A disorder involving recurrent seizures. Seizures can affect movement or awareness and may be followed by temporary neurologic deficits.",
              "hint": "An episode of abnormal brain electrical activity affecting movement, sensation, behavior or awareness."
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
            "type": "audio",
            "src": "assets/culprit/voicemail-sequence-v2.mp3",
            "alt": "Four dated anonymous voicemail messages.",
            "caption": "Voicemail sequence"
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
              "info": "Imprecise speech due to impaired control of speech muscles.",
              "hint": "Consider impaired control of the muscles that articulate words.",
              "id": "symptom-dysarthria",
              "referenceIds": [
                "s-dysarthria"
              ],
              "legacyTerm": "Dysarthria"
            },
            {
              "type": "symptom",
              "term": "Hypophonia",
              "info": "Abnormally quiet speech.",
              "hint": "Consider reduced loudness during speech.",
              "id": "symptom-hypophonia",
              "referenceIds": [
                "s-hypophonia"
              ],
              "legacyTerm": "hypophonia"
            },
            {
              "type": "symptom",
              "term": "Bulbar weakness",
              "info": "Weakness affecting speech, chewing, or swallowing muscles.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-bulbar-weakness",
              "referenceIds": [
                "s-bulbar-weakness"
              ],
              "legacyTerm": "bulbar weakness"
            },
            {
              "type": "symptom",
              "term": "Aphasia",
              "info": "Impaired language expression or understanding.",
              "hint": "Consider difficulty producing or understanding language itself.",
              "id": "symptom-aphasia",
              "referenceIds": [
                "s-aphasia"
              ],
              "legacyTerm": "aphasia"
            },
            {
              "type": "symptom",
              "term": "Motor fatigability",
              "info": "Muscle performance worsens with repeated use.",
              "hint": "Consider a change that becomes more apparent with use or over time.",
              "id": "symptom-fatigable-speech",
              "referenceIds": [
                "s-motor-fatigability"
              ],
              "legacyTerm": "fatigable speech"
            },
            {
              "type": "symptom",
              "term": "Vocal tremor",
              "info": "Rhythmic shaking of the voice.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-vocal-tremor",
              "referenceIds": [
                "s-vocal-tremor"
              ],
              "legacyTerm": "vocal tremor"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "An abnormal growth of cells within or around the brain.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "Brain injury caused by interrupted blood flow or bleeding.",
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
              "type": "disease",
              "term": "Transient ischemic attack",
              "info": "Transient focal ischemic symptoms without acute infarction.",
              "hint": "Consider a short-lived interruption of blood supply that temporarily changes neurologic function.",
              "id": "disease-transient-ischemic-attack",
              "referenceIds": [
                "d-transient-ischemic-attack"
              ],
              "legacyTerm": "transient ischemic attack"
            },
            {
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive disorder causing bradykinesia with rigidity or rest tremor.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-parkinson-disease",
              "referenceIds": [
                "d-parkinson-disease"
              ],
              "legacyTerm": "Parkinson disease"
            },
            {
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive disease affecting upper and lower motor neurons.",
              "hint": "Consider disease affecting the neurons that drive muscle contraction.",
              "id": "disease-amyotrophic-lateral-sclerosis",
              "referenceIds": [
                "d-amyotrophic-lateral-sclerosis"
              ],
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "An immune-mediated disease affecting myelin and axons in the CNS.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Cerebellar disorder",
              "info": "A broad diagnostic category involving cerebellar dysfunction.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "referenceIds": [
                "d-cerebellar-disorder"
              ],
              "legacyTerm": "cerebellar disease"
            },
            {
              "type": "disease",
              "term": "Myasthenia gravis",
              "info": "An autoimmune neuromuscular junction disorder causing fatigable weakness.",
              "hint": "Consider impaired transmission between a nerve and its muscle.",
              "id": "disease-myasthenia-gravis",
              "referenceIds": [
                "d-myasthenia-gravis"
              ],
              "legacyTerm": "myasthenia gravis"
            },
            {
              "type": "disease",
              "term": "Epilepsy",
              "info": "A disorder involving recurrent seizures. Seizures can affect movement or awareness and may be followed by temporary neurologic deficits.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "referenceIds": [
                "d-epilepsy"
              ],
              "legacyTerm": "seizure with postictal deficit"
            },
            {
              "type": "disease",
              "term": "Alcohol intoxication",
              "info": "Acute impairment caused by alcohol.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-alcohol-intoxication",
              "referenceIds": [
                "d-alcohol-intoxication"
              ],
              "legacyTerm": "alcohol intoxication"
            },
            {
              "type": "disease",
              "term": "Sedative medication effect",
              "info": "Impaired function caused by sedating medication.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-sedative-medication-effect",
              "referenceIds": [
                "d-sedative-medication-effect"
              ],
              "legacyTerm": "sedative medication effect"
            },
            {
              "type": "disease",
              "term": "Metabolic encephalopathy",
              "info": "Brain dysfunction caused by a metabolic disturbance.",
              "hint": "Consider a diffuse disturbance of brain function due to systemic chemistry.",
              "id": "disease-metabolic-encephalopathy",
              "referenceIds": [
                "d-metabolic-encephalopathy"
              ],
              "legacyTerm": "metabolic encephalopathy"
            },
            {
              "type": "symptom",
              "term": "Apraxia of speech",
              "info": "Impaired planning or programming of speech movements.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-apraxia-of-speech",
              "referenceIds": [
                "s-apraxia-of-speech"
              ],
              "legacyTerm": "apraxia of speech"
            },
            {
              "type": "symptom",
              "term": "Dysphonia",
              "info": "Altered voice quality, such as hoarseness or strain.",
              "hint": "Consider altered quality of the voice.",
              "id": "symptom-dysphonia",
              "referenceIds": [
                "s-dysphonia"
              ],
              "legacyTerm": "dysphonia"
            },
            {
              "type": "symptom",
              "term": "Hypernasal speech",
              "info": "Excess nasal resonance during speech.",
              "hint": "Consider how airflow and closure between the mouth and nose affect speech.",
              "id": "symptom-hypernasal-speech",
              "referenceIds": [
                "s-hypernasal-speech"
              ],
              "legacyTerm": "hypernasal speech"
            },
            {
              "type": "symptom",
              "term": "Monoprosody",
              "info": "Reduced variation in speech pitch, stress, or rhythm.",
              "hint": "Consider variation in pitch, stress, and rhythm during speech.",
              "id": "symptom-monoprosody",
              "referenceIds": [
                "s-monoprosody"
              ],
              "legacyTerm": "monoprosody"
            },
            {
              "type": "disease",
              "term": "Progressive supranuclear palsy",
              "info": "A degenerative disorder affecting movement, balance, and eye control.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-progressive-supranuclear-palsy",
              "referenceIds": [
                "d-progressive-supranuclear-palsy"
              ],
              "legacyTerm": "progressive supranuclear palsy"
            },
            {
              "type": "disease",
              "term": "Multiple system atrophy",
              "info": "Degeneration affecting autonomic function and movement.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-multiple-system-atrophy",
              "referenceIds": [
                "d-multiple-system-atrophy"
              ],
              "legacyTerm": "multiple system atrophy"
            },
            {
              "type": "disease",
              "term": "Huntington disease",
              "info": "An inherited degenerative disorder affecting movement, thinking, and behavior.",
              "hint": "Consider an inherited disorder that can produce unwanted movements and impaired motor control.",
              "id": "disease-huntington-disease",
              "referenceIds": [
                "d-huntington-disease"
              ],
              "legacyTerm": "Huntington disease"
            },
            {
              "type": "disease",
              "term": "Traumatic brain injury",
              "info": "Brain dysfunction or damage caused by external force.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "referenceIds": [
                "d-traumatic-brain-injury"
              ],
              "legacyTerm": "traumatic brain injury"
            },
            {
              "id": "expanded-d-focal-dystonia",
              "term": "Focal dystonia",
              "type": "disease",
              "referenceIds": [
                "d-focal-dystonia"
              ],
              "info": "Dystonic contractions affecting one body region or a specific task.",
              "hint": "Dystonic contractions affecting one body region or a specific task."
            },
            {
              "id": "expanded-d-myotonic-dystrophy",
              "term": "Myotonic dystrophy",
              "type": "disease",
              "referenceIds": [
                "d-myotonic-dystrophy"
              ],
              "info": "Inherited multisystem disorders featuring myotonia and muscle weakness.",
              "hint": "Inherited multisystem disorders featuring myotonia and muscle weakness."
            },
            {
              "id": "expanded-d-seizure",
              "term": "Epilepsy",
              "type": "disease",
              "referenceIds": [
                "d-epilepsy"
              ],
              "info": "A disorder involving recurrent seizures. Seizures can affect movement or awareness and may be followed by temporary neurologic deficits.",
              "hint": "An episode of abnormal brain electrical activity affecting movement, sensation, behavior or awareness."
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
              "type": "observation",
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
              "info": "The medication bottle is labeled prednisone, a corticosteroid.",
              "hint": "Identify what is actually on the label before inferring why it was prescribed.",
              "referenceIds": []
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "An abnormal growth of cells within or around the brain.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "An immune-mediated disease affecting myelin and axons in the CNS.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis-relapse",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis relapse"
            },
            {
              "type": "disease",
              "term": "Inflammatory myopathy",
              "info": "A diagnostic category of immune-mediated muscle diseases.",
              "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
              "id": "disease-inflammatory-myopathy",
              "referenceIds": [
                "d-inflammatory-myopathy"
              ],
              "legacyTerm": "inflammatory myopathy"
            },
            {
              "type": "disease",
              "term": "Myasthenia gravis",
              "info": "An autoimmune neuromuscular junction disorder causing fatigable weakness.",
              "hint": "Consider impaired transmission between a nerve and its muscle.",
              "id": "disease-myasthenia-gravis",
              "referenceIds": [
                "d-myasthenia-gravis"
              ],
              "legacyTerm": "myasthenia gravis"
            },
            {
              "type": "disease",
              "term": "CNS vasculitis",
              "info": "Inflammation of blood vessels supplying the brain or spinal cord.",
              "hint": "Consider inflammation involving vessels that supply the nervous system.",
              "id": "disease-cns-vasculitis",
              "referenceIds": [
                "d-cns-vasculitis"
              ],
              "legacyTerm": "CNS vasculitis"
            },
            {
              "type": "disease",
              "term": "Autoimmune encephalitis",
              "info": "Brain inflammation associated with an immune response against neural targets.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-autoimmune-encephalitis",
              "referenceIds": [
                "d-autoimmune-encephalitis"
              ],
              "legacyTerm": "autoimmune encephalitis"
            },
            {
              "type": "disease",
              "term": "Neurosarcoidosis",
              "info": "Sarcoidosis involving the nervous system.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-neurosarcoidosis",
              "referenceIds": [
                "d-neurosarcoidosis"
              ],
              "legacyTerm": "neurosarcoidosis"
            },
            {
              "type": "disease",
              "term": "Bell palsy",
              "info": "An acute idiopathic peripheral facial nerve palsy.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "disease-bell-palsy",
              "referenceIds": [
                "d-bell-palsy"
              ],
              "legacyTerm": "Bell palsy"
            },
            {
              "type": "disease",
              "term": "Giant cell arteritis",
              "info": "Inflammatory disease of medium and large arteries, sometimes threatening vision.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-giant-cell-arteritis",
              "referenceIds": [
                "d-giant-cell-arteritis"
              ],
              "legacyTerm": "giant cell arteritis"
            },
            {
              "type": "disease",
              "term": "Optic neuritis",
              "info": "Inflammation of an optic nerve.",
              "hint": "Consider inflammation affecting the nerve carrying visual signals.",
              "id": "disease-optic-neuritis",
              "referenceIds": [
                "d-optic-neuritis"
              ],
              "legacyTerm": "optic neuritis"
            },
            {
              "type": "disease",
              "term": "Transverse myelitis",
              "info": "Inflammation of the spinal cord.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-transverse-myelitis",
              "referenceIds": [
                "d-transverse-myelitis"
              ],
              "legacyTerm": "transverse myelitis"
            },
            {
              "type": "disease",
              "term": "Chronic inflammatory demyelinating polyneuropathy",
              "info": "A chronic immune-mediated demyelinating peripheral nerve disorder.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-chronic-inflammatory-demyelinating-polyneuropathy",
              "referenceIds": [
                "d-chronic-inflammatory-demyelinating-polyneuropathy"
              ],
              "legacyTerm": "chronic inflammatory demyelinating polyneuropathy"
            },
            {
              "type": "disease",
              "term": "Acute disseminated encephalomyelitis",
              "info": "An acute inflammatory demyelinating CNS illness.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-acute-disseminated-encephalomyelitis",
              "referenceIds": [
                "d-acute-disseminated-encephalomyelitis"
              ],
              "legacyTerm": "acute disseminated encephalomyelitis"
            },
            {
              "type": "disease",
              "term": "Neuromyelitis optica spectrum disorder",
              "info": "An inflammatory disorder often affecting optic nerves and spinal cord.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-neuromyelitis-optica-spectrum-disorder",
              "referenceIds": [
                "d-neuromyelitis-optica-spectrum-disorder"
              ],
              "legacyTerm": "neuromyelitis optica spectrum disorder"
            },
            {
              "type": "disease",
              "term": "MOG antibody-associated disease",
              "info": "An inflammatory CNS disorder associated with antibodies to MOG.",
              "hint": "Consider an antibody-associated inflammatory disorder of central myelin.",
              "id": "disease-mog-antibody-associated-disease",
              "referenceIds": [
                "d-mog-antibody-associated-disease"
              ],
              "legacyTerm": "MOG antibody associated disease"
            }
          ],
          "symptomsNeeded": 0,
          "diagnosesNeeded": 2,
          "symptomStarThreshold": 0,
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
          "symptomSingular": "observation",
          "observationOnly": true,
          "observationText": "The medication bottle is labeled prednisone, a corticosteroid."
        }
      ]
    }
  ],
  "suggestionsAfter": 3,
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
  ],
  "clueOrderRevision": 2
};
