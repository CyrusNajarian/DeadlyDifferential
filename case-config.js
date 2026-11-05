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
              "info": "Reduced force in one arm can produce unequal pressure from the hands. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-unilateral-arm-weakness",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "unilateral arm weakness"
            },
            {
              "type": "symptom",
              "term": "Weakness",
              "info": "Unequal hand force can produce an uneven pressure pattern. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-asymmetric-grip-strength",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "asymmetric grip strength"
            },
            {
              "type": "symptom",
              "term": "Dysmetria",
              "info": "Imprecise placement or scaling of arm movement can alter applied pressure. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-upper-limb-dysmetria",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-dysmetria"
              ],
              "legacyTerm": "upper-limb dysmetria"
            },
            {
              "type": "symptom",
              "term": "Tremor",
              "info": "Rhythmic shaking on one side is a possible mechanism, but pressure marks do not document the movement itself.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-unilateral-tremor",
              "sources": [
                {
                  "title": "NINDS · Tremor",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-tremor"
              ],
              "legacyTerm": "unilateral tremor"
            },
            {
              "type": "symptom",
              "term": "Sensory loss",
              "info": "Reduced sensation or position feedback could affect movement. It requires a history or sensory examination and is not visible in pressure marks or scratches.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-sensory-loss",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-sensory-loss"
              ],
              "legacyTerm": "sensory loss"
            },
            {
              "type": "symptom",
              "term": "Hemispatial neglect",
              "info": "Reduced attention to one side of space, rather than simply weakness or loss of vision on that side.",
              "hint": "Consider whether attention is distributed equally across both sides of space.",
              "id": "symptom-hemispatial-neglect",
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
              "legacyTerm": "hemispatial neglect"
            },
            {
              "type": "symptom",
              "term": "Arm pain",
              "info": "Discomfort can reduce force applied through an arm. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "symptom-arm-pain-limiting-effort",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-arm-pain"
              ],
              "legacyTerm": "arm pain limiting effort"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ],
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect arm force and placement.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Cervical myelopathy",
              "info": "Spinal cord dysfunction can alter motor and sensory signals, which can affect arm force and placement.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cervical-myelopathy"
              ],
              "legacyTerm": "cervical myelopathy"
            },
            {
              "type": "disease",
              "term": "Cervical radiculopathy",
              "info": "Nerve-root dysfunction can affect muscle strength and sensation, which can affect arm force and placement.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-cervical-radiculopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cervical-radiculopathy"
              ],
              "legacyTerm": "cervical radiculopathy"
            },
            {
              "type": "disease",
              "term": "Brachial plexopathy",
              "info": "Plexus dysfunction can affect signals to arm muscles, which can affect arm force and placement.",
              "hint": "Consider a problem in the nerve network between the neck and arm.",
              "id": "disease-brachial-plexopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-brachial-plexopathy"
              ],
              "legacyTerm": "brachial plexopathy"
            },
            {
              "type": "disease",
              "term": "Peripheral mononeuropathy",
              "info": "A focal nerve change can alter activation of selected muscles, which can affect arm force and placement.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-mononeuropathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-peripheral-mononeuropathy"
              ],
              "legacyTerm": "peripheral mononeuropathy"
            },
            {
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "Upper-limb injury",
              "info": "Pain or mechanical limitation can alter arm force, which can affect arm force and placement.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-rotator-cuff-or-arm-injury",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-upper-limb-injury"
              ],
              "legacyTerm": "rotator cuff or arm injury"
            },
            {
              "type": "symptom",
              "term": "Spasticity",
              "info": "Increased muscle tone can change how force is applied through an arm. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-arm-spasticity",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-spasticity"
              ],
              "legacyTerm": "arm spasticity"
            },
            {
              "type": "symptom",
              "term": "Motor fatigability",
              "info": "Muscle performance declines with repeated effort. General fatigue and sleepiness are not equivalent.",
              "hint": "Consider a change that becomes more apparent with use or over time.",
              "id": "symptom-motor-fatigability",
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
              "legacyTerm": "motor fatigability"
            },
            {
              "type": "symptom",
              "term": "Rigidity",
              "info": "Increased resistance to movement can affect arm positioning and pressure. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-arm-rigidity",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-rigidity"
              ],
              "legacyTerm": "arm rigidity"
            },
            {
              "type": "symptom",
              "term": "Apraxia",
              "info": "Changes in planning a learned action can alter hand placement and force. This is a possible mechanism, not a finding demonstrated by pressure marks.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-limb-apraxia",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-apraxia"
              ],
              "legacyTerm": "limb apraxia"
            },
            {
              "type": "disease",
              "term": "Corticobasal syndrome",
              "info": "Changes in cortical and movement circuits can affect one arm's use and posture.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-corticobasal-syndrome"
              ],
              "legacyTerm": "corticobasal syndrome"
            },
            {
              "type": "disease",
              "term": "Postictal neurologic deficit",
              "info": "Seizure-related changes can temporarily reduce force in an arm.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-postictal-neurologic-deficit"
              ],
              "legacyTerm": "seizure with postictal deficit"
            },
            {
              "type": "disease",
              "term": "Traumatic brain injury",
              "info": "Injury to motor pathways can change force generated by an arm.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-traumatic-brain-injury"
              ],
              "legacyTerm": "traumatic brain injury"
            },
            {
              "type": "disease",
              "term": "Focal dystonia",
              "info": "Involuntary muscle contraction can alter arm posture and applied pressure.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "disease-focal-limb-dystonia",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-focal-dystonia"
              ],
              "legacyTerm": "focal limb dystonia"
            },
            {
              "type": "disease",
              "term": "Myasthenia gravis",
              "info": "Immune-mediated failure of nerve-to-muscle signaling. Fluctuating weakness, ptosis and worsening with repeated use support this possibility. An isolated persistent one-sided pattern is less typical and needs other supporting evidence.",
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
              "legacyTerm": "myasthenia gravis"
            },
            {
              "type": "disease",
              "term": "Inflammatory myopathy",
              "info": "A group of inflammatory muscle diseases. Distribution of weakness and other findings determine the fit; a steroid prescription alone is nonspecific. An isolated persistent one-sided pattern is less typical and needs other supporting evidence.",
              "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
              "id": "disease-inflammatory-myopathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Inflammatory myopathies",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
                }
              ],
              "referenceIds": [
                "d-inflammatory-myopathy"
              ],
              "legacyTerm": "inflammatory myopathy"
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
              "info": "A walking pattern related to weakness on one side. An asymmetric footprint trail can suggest this but cannot confirm hemiparesis.",
              "hint": "Compare how much each side contributes to walking.",
              "id": "symptom-hemiparetic-gait",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-hemiparetic-gait"
              ],
              "legacyTerm": "hemiparetic gait"
            },
            {
              "type": "symptom",
              "term": "Weakness",
              "info": "Reduced force in one leg is one explanation for asymmetric steps; footprints do not directly measure strength.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-unilateral-leg-weakness",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "unilateral leg weakness"
            },
            {
              "type": "symptom",
              "term": "Foot drop",
              "info": "Difficulty lifting the front of the foot may reduce clearance or cause toe dragging; a specific nerve or root lesion requires further evidence.",
              "hint": "Consider whether the front of the foot clears the ground during a step.",
              "id": "symptom-foot-drop",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-foot-drop"
              ],
              "legacyTerm": "foot drop"
            },
            {
              "type": "symptom",
              "term": "Circumduction gait",
              "info": "An outward leg swing can change the shape of a footprint pattern. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider a leg swinging outward to clear the ground.",
              "id": "symptom-circumduction-gait",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-circumduction-gait"
              ],
              "legacyTerm": "circumduction gait"
            },
            {
              "type": "symptom",
              "term": "Spastic gait",
              "info": "Increased muscle tone can make leg movement stiff during walking. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-spastic-gait",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-spastic-gait"
              ],
              "legacyTerm": "spastic gait"
            },
            {
              "type": "symptom",
              "term": "Parkinsonian gait",
              "info": "Reduced movement amplitude can make steps shorter. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-bradykinetic-gait",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-parkinsonian-gait"
              ],
              "legacyTerm": "bradykinetic gait"
            },
            {
              "type": "symptom",
              "term": "Ataxic gait",
              "info": "Impaired coordination can change step placement and timing. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-ataxic-gait",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-ataxic-gait"
              ],
              "legacyTerm": "ataxic gait"
            },
            {
              "type": "symptom",
              "term": "Antalgic gait",
              "info": "Pain can change the time spent bearing weight on a leg. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "symptom-antalgic-gait",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-antalgic-gait"
              ],
              "legacyTerm": "antalgic gait"
            },
            {
              "type": "symptom",
              "term": "Sensory ataxia",
              "info": "Reduced position feedback can affect foot placement during walking. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-proprioceptive-gait-impairment",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-sensory-ataxia"
              ],
              "legacyTerm": "proprioceptive gait impairment"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ],
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect leg movement during walking.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Cervical myelopathy",
              "info": "Spinal cord dysfunction can alter motor and sensory signals, which can affect leg movement during walking.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cervical-myelopathy"
              ],
              "legacyTerm": "cervical myelopathy"
            },
            {
              "type": "disease",
              "term": "Lumbar radiculopathy",
              "info": "A lumbar nerve-root change can affect leg strength and sensation, which can affect leg movement during walking.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-lumbar-radiculopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-lumbar-radiculopathy"
              ],
              "legacyTerm": "lumbar radiculopathy"
            },
            {
              "type": "disease",
              "term": "Common fibular neuropathy",
              "info": "Peroneal nerve dysfunction can reduce ankle lifting, which can affect leg movement during walking.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-common-peroneal-neuropathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-common-fibular-neuropathy"
              ],
              "legacyTerm": "common peroneal neuropathy"
            },
            {
              "type": "disease",
              "term": "Peripheral neuropathy",
              "info": "Peripheral nerve damage can impair strength or sensation. Distribution, reflexes and examination help distinguish it from central causes.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-neuropathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "referenceIds": [
                "d-peripheral-neuropathy"
              ],
              "legacyTerm": "peripheral neuropathy"
            },
            {
              "type": "disease",
              "term": "Cerebellar disorder",
              "info": "Changes in coordination pathways can alter movement timing and accuracy, which can affect leg movement during walking.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cerebellar-disorder"
              ],
              "legacyTerm": "cerebellar disease"
            },
            {
              "type": "disease",
              "term": "Lower-limb injury",
              "info": "Pain or joint restriction can change weight bearing and stride, which can affect leg movement during walking.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-hip-knee-or-ankle-injury",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-lower-limb-injury"
              ],
              "legacyTerm": "hip knee or ankle injury"
            },
            {
              "type": "symptom",
              "term": "Freezing of gait",
              "info": "Difficulty initiating or continuing a step can interrupt a walking pattern. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-freezing-of-gait",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-freezing-of-gait"
              ],
              "legacyTerm": "freezing of gait"
            },
            {
              "type": "symptom",
              "term": "Rigidity",
              "info": "Increased resistance to leg movement can shorten or alter steps. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-leg-rigidity",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-rigidity"
              ],
              "legacyTerm": "leg rigidity"
            },
            {
              "type": "symptom",
              "term": "Dystonic gait",
              "info": "Involuntary leg or foot posturing can alter foot placement. Footprints alone do not establish this specific gait pattern.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "symptom-dystonic-gait",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-dystonic-gait"
              ],
              "legacyTerm": "dystonic gait"
            },
            {
              "type": "symptom",
              "term": "Reduced foot clearance",
              "info": "The foot passes unusually close to the ground or scuffs it. This can occur for several motor or sensory reasons.",
              "hint": "Consider whether the front of the foot clears the ground during a step.",
              "id": "symptom-reduced-foot-clearance",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-reduced-foot-clearance"
              ],
              "legacyTerm": "reduced foot clearance"
            },
            {
              "type": "disease",
              "term": "Corticobasal syndrome",
              "info": "Changes in motor planning and muscle tone can alter leg use during walking.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-corticobasal-syndrome"
              ],
              "legacyTerm": "corticobasal syndrome"
            },
            {
              "type": "disease",
              "term": "Progressive supranuclear palsy",
              "info": "An atypical parkinsonian disorder. Early balance problems and impaired eye movements help distinguish it from Parkinson disease.",
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
              "legacyTerm": "progressive supranuclear palsy"
            },
            {
              "type": "disease",
              "term": "Multiple system atrophy",
              "info": "Changes in coordination and movement-control pathways can alter steps.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-multiple-system-atrophy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-multiple-system-atrophy"
              ],
              "legacyTerm": "multiple system atrophy"
            },
            {
              "type": "disease",
              "term": "Hereditary spastic paraplegia",
              "info": "Changes in motor pathways to the legs can increase stiffness during walking.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-hereditary-spastic-paraplegia",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-hereditary-spastic-paraplegia"
              ],
              "legacyTerm": "hereditary spastic paraplegia"
            },
            {
              "type": "disease",
              "term": "Transverse myelitis",
              "info": "Spinal cord inflammation can affect strength, sensation, and leg control.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-transverse-myelitis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-transverse-myelitis"
              ],
              "legacyTerm": "transverse myelitis"
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
              "info": "Less precise finger movements can make a small object difficult to manipulate.",
              "hint": "Consider a loss of precision during small, coordinated movements.",
              "id": "symptom-impaired-fine-motor-control",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-impaired-fine-motor-control"
              ],
              "legacyTerm": "impaired fine motor control"
            },
            {
              "type": "symptom",
              "term": "Weakness",
              "info": "Reduced hand or arm force can interfere with holding, aligning, or turning a key. This includes thumb and finger weakness.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-hand-or-arm-weakness",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-weakness"
              ],
              "legacyTerm": "Hand or arm weakness"
            },
            {
              "type": "symptom",
              "term": "Tremor",
              "info": "Rhythmic involuntary shaking. Scratches on a keyhole do not show whether a tremor occurred at rest or during movement.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-tremor",
              "sources": [
                {
                  "title": "NINDS · Tremor",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-tremor"
              ],
              "legacyTerm": "tremor"
            },
            {
              "type": "symptom",
              "term": "Bradykinesia",
              "info": "Slowness of movement; a static photograph cannot demonstrate movement speed. Reduced amplitude and failure to initiate movement are related but distinct observations.",
              "hint": "Consider difficulty initiating or sustaining movements at their usual speed.",
              "id": "symptom-bradykinesia",
              "sources": [
                {
                  "title": "NINDS · Parkinson’s disease",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-bradykinesia"
              ],
              "legacyTerm": "bradykinesia"
            },
            {
              "type": "symptom",
              "term": "Dysmetria",
              "info": "A movement misses its intended distance or target. Scratches suggest inaccurate placement but do not demonstrate overshoot or undershoot on examination.",
              "hint": "Consider difficulty calibrating the direction, timing, or size of a movement.",
              "id": "symptom-dysmetria",
              "sources": [
                {
                  "title": "NINDS · Neurological terminology",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/glossary-neurological-terms"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-dysmetria"
              ],
              "legacyTerm": "dysmetria"
            },
            {
              "type": "symptom",
              "term": "Sensory loss",
              "info": "Reduced sensation or position feedback could affect movement. It requires a history or sensory examination and is not visible in pressure marks or scratches.",
              "hint": "Consider impaired feedback about touch or the position of a body part.",
              "id": "symptom-sensory-loss",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-sensory-loss"
              ],
              "legacyTerm": "sensory loss"
            },
            {
              "type": "symptom",
              "term": "Apraxia",
              "info": "Disrupted planning of learned movements can affect use of a familiar object.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-apraxia",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-apraxia"
              ],
              "legacyTerm": "apraxia"
            },
            {
              "type": "symptom",
              "term": "Dystonia",
              "info": "Involuntary muscle contraction can change hand posture during a task.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "symptom-dystonia",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-dystonia"
              ],
              "legacyTerm": "dystonia"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ],
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "Essential tremor",
              "info": "Action-related oscillation can affect precise movement, which can affect hand control.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "disease-essential-tremor",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-essential-tremor"
              ],
              "legacyTerm": "essential tremor"
            },
            {
              "type": "disease",
              "term": "Cerebellar disorder",
              "info": "Changes in coordination pathways can alter movement timing and accuracy, which can affect hand control.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cerebellar-disorder"
              ],
              "legacyTerm": "cerebellar disease"
            },
            {
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect hand control.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Cervical myelopathy",
              "info": "Spinal cord dysfunction can alter motor and sensory signals, which can affect hand control.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-cervical-myelopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cervical-myelopathy"
              ],
              "legacyTerm": "cervical myelopathy"
            },
            {
              "type": "disease",
              "term": "Cervical radiculopathy",
              "info": "Nerve-root dysfunction can affect muscle strength and sensation, which can affect hand control.",
              "hint": "Consider dysfunction where a nerve root leaves the spine.",
              "id": "disease-cervical-radiculopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cervical-radiculopathy"
              ],
              "legacyTerm": "cervical radiculopathy"
            },
            {
              "type": "disease",
              "term": "Peripheral neuropathy",
              "info": "Peripheral nerve damage can impair strength or sensation. Distribution, reflexes and examination help distinguish it from central causes.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-peripheral-neuropathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Peripheral neuropathy",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/peripheral-neuropathy"
                }
              ],
              "referenceIds": [
                "d-peripheral-neuropathy"
              ],
              "legacyTerm": "peripheral neuropathy"
            },
            {
              "type": "disease",
              "term": "Median neuropathy",
              "info": "Hand nerve dysfunction can affect finger strength and sensation, which can affect hand control.",
              "hint": "Consider dysfunction in a peripheral nerve supplying a particular region.",
              "id": "disease-median-or-ulnar-neuropathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-median-neuropathy",
                "d-ulnar-neuropathy"
              ],
              "legacyTerm": "median or ulnar neuropathy"
            },
            {
              "type": "disease",
              "term": "Focal dystonia",
              "info": "Involuntary hand contractions can alter posture during a task, which can affect hand control.",
              "hint": "Consider involuntary sustained or patterned muscle contractions.",
              "id": "disease-focal-hand-dystonia",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-focal-dystonia"
              ],
              "legacyTerm": "focal hand dystonia"
            },
            {
              "type": "disease",
              "term": "Alcohol intoxication",
              "info": "Substance effects can change movement coordination, which can affect hand control.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-alcohol-or-sedative-intoxication",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-alcohol-intoxication",
                "d-sedative-medication-effect"
              ],
              "legacyTerm": "alcohol or sedative intoxication"
            },
            {
              "type": "symptom",
              "term": "Rigidity",
              "info": "Increased resistance to movement can make a hand harder to reposition.",
              "hint": "Consider increased resistance to movement.",
              "id": "symptom-hand-rigidity",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-rigidity"
              ],
              "legacyTerm": "hand rigidity"
            },
            {
              "type": "symptom",
              "term": "Myoclonus",
              "info": "Brief involuntary muscle jerks, distinct from a sustained posture or a rhythmic tremor.",
              "hint": "Consider brief, sudden muscle jerks.",
              "id": "symptom-myoclonus",
              "sources": [
                {
                  "title": "NINDS · Myoclonus",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/myoclonus"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-myoclonus"
              ],
              "legacyTerm": "myoclonus"
            },
            {
              "type": "disease",
              "term": "Corticobasal syndrome",
              "info": "Changes in cortical and movement-control pathways can affect skilled hand use.",
              "hint": "Consider a disorder combining impaired learned actions with abnormal tone and movement control.",
              "id": "disease-corticobasal-syndrome",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-corticobasal-syndrome"
              ],
              "legacyTerm": "corticobasal syndrome"
            },
            {
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Huntington disease",
              "info": "Involuntary movement and altered motor control can affect key handling.",
              "hint": "Consider an inherited disorder that can produce unwanted movements and impaired motor control.",
              "id": "disease-huntington-disease",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-huntington-disease"
              ],
              "legacyTerm": "Huntington disease"
            },
            {
              "type": "disease",
              "term": "Traumatic brain injury",
              "info": "Injury to motor or sensory pathways can affect hand precision.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-traumatic-brain-injury"
              ],
              "legacyTerm": "traumatic brain injury"
            },
            {
              "type": "disease",
              "term": "Postictal neurologic deficit",
              "info": "Seizure-related changes can temporarily affect hand control.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-postictal-neurologic-deficit"
              ],
              "legacyTerm": "seizure with postictal deficit"
            },
            {
              "type": "symptom",
              "term": "Ataxia",
              "info": "Impaired coordination. Consider it as a mechanism for inaccurate movements, not a diagnosis established by a scratched lock.",
              "hint": "Consider whether several parts of a movement are coordinated smoothly.",
              "id": "symptom-ataxia",
              "sources": [
                {
                  "title": "NINDS · Neurological terminology",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/glossary-neurological-terms"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-ataxia"
              ],
              "legacyTerm": "Ataxia"
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
              "info": "Impaired execution of speech movements can make speech slurred or imprecise. This differs from impaired language (aphasia). A dysarthria subtype requires more than a garbled-speech description.",
              "hint": "Consider impaired control of the muscles that articulate words.",
              "id": "symptom-dysarthria",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-dysarthria"
              ],
              "legacyTerm": "Dysarthria"
            },
            {
              "type": "symptom",
              "term": "Hypophonia",
              "info": "Reduced voice loudness. A quiet recording needs context before low volume can be attributed to the speaker.",
              "hint": "Consider reduced loudness during speech.",
              "id": "symptom-hypophonia",
              "sources": [
                {
                  "title": "NINDS · Parkinson’s disease",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-hypophonia"
              ],
              "legacyTerm": "hypophonia"
            },
            {
              "type": "symptom",
              "term": "Bulbar weakness",
              "info": "Possible weakness of muscles used for speech or swallowing; slurred speech alone does not establish a bulbar palsy.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "symptom-bulbar-weakness",
              "sources": [
                {
                  "title": "NINDS · Amyotrophic lateral sclerosis",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/NINDS_ALS_Booklet_Digital-508c.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-bulbar-weakness"
              ],
              "legacyTerm": "bulbar weakness"
            },
            {
              "type": "symptom",
              "term": "Aphasia",
              "info": "A language impairment affecting expression or understanding. Unclear articulation alone does not establish aphasia.",
              "hint": "Consider difficulty producing or understanding language itself.",
              "id": "symptom-aphasia",
              "sources": [
                {
                  "title": "NINDS · Stroke overview",
                  "url": "https://www.ninds.nih.gov/health-information/stroke/stroke-overview"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-aphasia"
              ],
              "legacyTerm": "aphasia"
            },
            {
              "type": "symptom",
              "term": "Motor fatigability",
              "info": "Speech performance declines with continued use and may improve after rest. This is more specific than feeling generally tired.",
              "hint": "Consider a change that becomes more apparent with use or over time.",
              "id": "symptom-fatigable-speech",
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
              "legacyTerm": "fatigable speech"
            },
            {
              "type": "symptom",
              "term": "Vocal tremor",
              "info": "Rhythmic oscillation affecting the voice; an irregular or hoarse voice alone is not vocal tremor.",
              "hint": "Consider a rhythmic back-and-forth movement that interferes with steadiness.",
              "id": "symptom-vocal-tremor",
              "sources": [
                {
                  "title": "NINDS · Tremor",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf"
                }
              ],
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-vocal-tremor"
              ],
              "legacyTerm": "vocal tremor"
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "A possible focal brain lesion; imaging and sometimes tissue sampling determine its nature. Headache or a single motor clue alone cannot identify a tumor.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ],
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Stroke",
              "info": "A vascular brain injury. Persistent focal deficits may follow a prior stroke; abrupt onset helps distinguish it from a slowly progressive process.",
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
              "type": "disease",
              "term": "Transient ischemic attack",
              "info": "A transient episode of focal neurologic dysfunction. It does not explain a lasting deficit; resolution and timing must be established.",
              "hint": "Consider a short-lived interruption of blood supply that temporarily changes neurologic function.",
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
              "legacyTerm": "transient ischemic attack"
            },
            {
              "type": "disease",
              "term": "Parkinson disease",
              "info": "A progressive movement disorder. Reduced facial expression can support this possibility, but slowness, rigidity, tremor and history are needed to assess a parkinsonian pattern.",
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
              "type": "disease",
              "term": "Amyotrophic lateral sclerosis",
              "info": "A progressive motor-neuron disorder that can cause weakness, wasting and speech changes. A single photographed finding cannot establish ALS.",
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
              "legacyTerm": "amyotrophic lateral sclerosis"
            },
            {
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "Inflammation and demyelination can disrupt neural signals, which can affect speech production.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis"
            },
            {
              "type": "disease",
              "term": "Cerebellar disorder",
              "info": "Changes in coordination pathways can alter movement timing and accuracy, which can affect speech production.",
              "hint": "Consider a disorder of the system that calibrates timing and accuracy of movement.",
              "id": "disease-cerebellar-disease",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cerebellar-disorder"
              ],
              "legacyTerm": "cerebellar disease"
            },
            {
              "type": "disease",
              "term": "Myasthenia gravis",
              "info": "Immune-mediated failure of nerve-to-muscle signaling. Fluctuating weakness, ptosis and worsening with repeated use support this possibility.",
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
              "legacyTerm": "myasthenia gravis"
            },
            {
              "type": "disease",
              "term": "Postictal neurologic deficit",
              "info": "Seizure-related changes can temporarily alter neural function, which can affect speech production.",
              "hint": "Consider a transient change in function following abnormal electrical activity.",
              "id": "disease-seizure-with-postictal-deficit",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-postictal-neurologic-deficit"
              ],
              "legacyTerm": "seizure with postictal deficit"
            },
            {
              "type": "disease",
              "term": "Alcohol intoxication",
              "info": "Alcohol can affect coordination and motor control, which can affect speech production.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-alcohol-intoxication",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-alcohol-intoxication"
              ],
              "legacyTerm": "alcohol intoxication"
            },
            {
              "type": "disease",
              "term": "Sedative medication effect",
              "info": "Sedating medication can affect movement coordination, which can affect speech production.",
              "hint": "Consider a substance effect on alertness or movement control.",
              "id": "disease-sedative-medication-effect",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-sedative-medication-effect"
              ],
              "legacyTerm": "sedative medication effect"
            },
            {
              "type": "disease",
              "term": "Metabolic encephalopathy",
              "info": "Metabolic disturbances can alter brain function, which can affect speech production.",
              "hint": "Consider a diffuse disturbance of brain function due to systemic chemistry.",
              "id": "disease-metabolic-encephalopathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-metabolic-encephalopathy"
              ],
              "legacyTerm": "metabolic encephalopathy"
            },
            {
              "type": "symptom",
              "term": "Apraxia of speech",
              "info": "Disrupted planning of speech movements can change the sequence and clarity of sounds.",
              "hint": "Consider difficulty organizing a learned action despite knowing what to do.",
              "id": "symptom-apraxia-of-speech",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-apraxia-of-speech"
              ],
              "legacyTerm": "apraxia of speech"
            },
            {
              "type": "symptom",
              "term": "Dysphonia",
              "info": "Changes in voice production can alter the quality of a spoken message.",
              "hint": "Consider altered quality of the voice.",
              "id": "symptom-dysphonia",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-dysphonia"
              ],
              "legacyTerm": "dysphonia"
            },
            {
              "type": "symptom",
              "term": "Hypernasal speech",
              "info": "Altered closure between the mouth and nose can change speech resonance.",
              "hint": "Consider how airflow and closure between the mouth and nose affect speech.",
              "id": "symptom-hypernasal-speech",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-hypernasal-speech"
              ],
              "legacyTerm": "hypernasal speech"
            },
            {
              "type": "symptom",
              "term": "Monoprosody",
              "info": "Reduced variation in pitch and rhythm can make speech sound flat.",
              "hint": "Consider variation in pitch, stress, and rhythm during speech.",
              "id": "symptom-monoprosody",
              "evidenceLabel": "Possible interpretation",
              "referenceIds": [
                "s-monoprosody"
              ],
              "legacyTerm": "monoprosody"
            },
            {
              "type": "disease",
              "term": "Progressive supranuclear palsy",
              "info": "An atypical parkinsonian disorder. Early balance problems and impaired eye movements help distinguish it from Parkinson disease.",
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
              "legacyTerm": "progressive supranuclear palsy"
            },
            {
              "type": "disease",
              "term": "Multiple system atrophy",
              "info": "Changes in autonomic and movement pathways can affect speech control.",
              "hint": "Consider a movement disorder affecting automatic movement and motor control.",
              "id": "disease-multiple-system-atrophy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-multiple-system-atrophy"
              ],
              "legacyTerm": "multiple system atrophy"
            },
            {
              "type": "disease",
              "term": "Huntington disease",
              "info": "Changes in movement-control circuits can affect articulation and speech rhythm.",
              "hint": "Consider an inherited disorder that can produce unwanted movements and impaired motor control.",
              "id": "disease-huntington-disease",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-huntington-disease"
              ],
              "legacyTerm": "Huntington disease"
            },
            {
              "type": "disease",
              "term": "Traumatic brain injury",
              "info": "Injury to neural pathways can affect speech planning or muscle coordination.",
              "hint": "Consider whether discomfort changes how a movement is performed.",
              "id": "disease-traumatic-brain-injury",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-traumatic-brain-injury"
              ],
              "legacyTerm": "traumatic brain injury"
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
              "info": "The label identifies prednisone use. A medication is an observation about treatment; it does not establish weakness, inflammation, cerebral edema or a specific diagnosis.",
              "hint": "Identify what is actually on the label before inferring why it was prescribed.",
              "evidenceLabel": "Treatment observation",
              "referenceIds": []
            },
            {
              "type": "disease",
              "term": "Brain tumor",
              "info": "Corticosteroids may be used for selected edema associated with brain tumors. Prednisone use alone does not establish cerebral edema or identify a tumor; the specific regimen and indication matter.",
              "hint": "Consider a space-occupying process that can affect nearby neural pathways.",
              "id": "disease-brain-tumor",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neurological tests and procedures",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neurological-diagnostic-tests-and-procedures"
                }
              ],
              "referenceIds": [
                "d-brain-tumor"
              ],
              "legacyTerm": "Brain tumor"
            },
            {
              "type": "disease",
              "term": "Multiple sclerosis",
              "info": "New or worsening neurologic symptoms from inflammatory demyelination may prompt corticosteroid treatment; a prescription does not establish a relapse.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-multiple-sclerosis-relapse",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Multiple sclerosis",
                  "url": "https://www.ninds.nih.gov/sites/default/files/2025-05/multiple-sclerosis-hope-through-research.pdf"
                }
              ],
              "referenceIds": [
                "d-multiple-sclerosis"
              ],
              "legacyTerm": "multiple sclerosis relapse"
            },
            {
              "type": "disease",
              "term": "Inflammatory myopathy",
              "info": "A group of inflammatory muscle diseases. Distribution of weakness and other findings determine the fit; a steroid prescription alone is nonspecific.",
              "hint": "Consider disease affecting muscle tissue itself, sometimes with skin involvement.",
              "id": "disease-inflammatory-myopathy",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Inflammatory myopathies",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/inflammatory-myopathies"
                }
              ],
              "referenceIds": [
                "d-inflammatory-myopathy"
              ],
              "legacyTerm": "inflammatory myopathy"
            },
            {
              "type": "disease",
              "term": "Myasthenia gravis",
              "info": "Immune-mediated failure of nerve-to-muscle signaling. Fluctuating weakness, ptosis and worsening with repeated use support this possibility.",
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
              "legacyTerm": "myasthenia gravis"
            },
            {
              "type": "disease",
              "term": "CNS vasculitis",
              "info": "Corticosteroids may be used to suppress inflammation in nervous-system blood vessels.",
              "hint": "Consider inflammation involving vessels that supply the nervous system.",
              "id": "disease-cns-vasculitis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-cns-vasculitis"
              ],
              "legacyTerm": "CNS vasculitis"
            },
            {
              "type": "disease",
              "term": "Autoimmune encephalitis",
              "info": "Corticosteroids may be used to reduce immune-mediated brain inflammation.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-autoimmune-encephalitis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-autoimmune-encephalitis"
              ],
              "legacyTerm": "autoimmune encephalitis"
            },
            {
              "type": "disease",
              "term": "Neurosarcoidosis",
              "info": "Corticosteroids may be used to reduce granulomatous nervous-system inflammation.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-neurosarcoidosis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-neurosarcoidosis"
              ],
              "legacyTerm": "neurosarcoidosis"
            },
            {
              "type": "disease",
              "term": "Bell palsy",
              "info": "Corticosteroids may be used to reduce inflammation affecting facial nerve function.",
              "hint": "Consider reduced force production in the muscles used for this task.",
              "id": "disease-bell-palsy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-bell-palsy"
              ],
              "legacyTerm": "Bell palsy"
            },
            {
              "type": "disease",
              "term": "Giant cell arteritis",
              "info": "Corticosteroids may be used to suppress inflammation in arteries.",
              "hint": "Consider immune activity that can disturb tissue function.",
              "id": "disease-giant-cell-arteritis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-giant-cell-arteritis"
              ],
              "legacyTerm": "giant cell arteritis"
            },
            {
              "type": "disease",
              "term": "Optic neuritis",
              "info": "Corticosteroids may be used to reduce inflammation affecting the optic nerve.",
              "hint": "Consider inflammation affecting the nerve carrying visual signals.",
              "id": "disease-optic-neuritis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-optic-neuritis"
              ],
              "legacyTerm": "optic neuritis"
            },
            {
              "type": "disease",
              "term": "Transverse myelitis",
              "info": "Corticosteroids may be used to reduce inflammation in the spinal cord.",
              "hint": "Consider pathways passing through the spinal cord.",
              "id": "disease-transverse-myelitis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-transverse-myelitis"
              ],
              "legacyTerm": "transverse myelitis"
            },
            {
              "type": "disease",
              "term": "Chronic inflammatory demyelinating polyneuropathy",
              "info": "Corticosteroids may be used to suppress immune-mediated peripheral nerve inflammation.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-chronic-inflammatory-demyelinating-polyneuropathy",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-chronic-inflammatory-demyelinating-polyneuropathy"
              ],
              "legacyTerm": "chronic inflammatory demyelinating polyneuropathy"
            },
            {
              "type": "disease",
              "term": "Acute disseminated encephalomyelitis",
              "info": "Corticosteroids may be used to reduce inflammatory changes in the brain and spinal cord.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-acute-disseminated-encephalomyelitis",
              "evidenceLabel": "Differential possibility",
              "referenceIds": [
                "d-acute-disseminated-encephalomyelitis"
              ],
              "legacyTerm": "acute disseminated encephalomyelitis"
            },
            {
              "type": "disease",
              "term": "Neuromyelitis optica spectrum disorder",
              "info": "An inflammatory central nervous system disorder often involving optic nerves or spinal cord. A steroid prescription does not distinguish it from other inflammatory conditions.",
              "hint": "Consider immune-mediated injury to pathways that carry nerve signals.",
              "id": "disease-neuromyelitis-optica-spectrum-disorder",
              "evidenceLabel": "Differential possibility",
              "sources": [
                {
                  "title": "NINDS · Neuromyelitis optica spectrum disorder",
                  "url": "https://www.ninds.nih.gov/health-information/disorders/neuromyelitis-optica-spectrum-disorder"
                }
              ],
              "referenceIds": [
                "d-neuromyelitis-optica-spectrum-disorder"
              ],
              "legacyTerm": "neuromyelitis optica spectrum disorder"
            },
            {
              "type": "disease",
              "term": "MOG antibody-associated disease",
              "info": "Corticosteroids may be used to reduce inflammatory attacks affecting central nervous-system pathways.",
              "hint": "Consider an antibody-associated inflammatory disorder of central myelin.",
              "id": "disease-mog-antibody-associated-disease",
              "evidenceLabel": "Differential possibility",
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
          "observationText": "The label identifies prednisone use. A medication is an observation about treatment; it does not establish weakness, inflammation, cerebral edema or a specific diagnosis."
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
  ],
  "clueOrderRevision": 2
};
