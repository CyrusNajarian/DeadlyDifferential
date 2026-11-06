window.CASE_RESOLUTION={
  "version": 2,
  "suspectDiagnoses": {
    "A": "d-brain-tumor",
    "B": "d-stroke",
    "C": "d-parkinson-disease",
    "D": "d-amyotrophic-lateral-sclerosis",
    "E": "d-myasthenia-gravis",
    "F": "d-dermatomyositis"
  },
  "suspectAcceptedIds": {
    "A": [
      "d-brain-tumor"
    ],
    "B": [
      "d-stroke",
      "d-prior-stroke-with-residual-deficits",
      "d-ischemic-stroke"
    ],
    "C": [
      "d-parkinson-disease",
      "d-drug-induced-parkinsonism",
      "d-vascular-parkinsonism",
      "d-progressive-supranuclear-palsy",
      "d-multiple-system-atrophy",
      "d-corticobasal-syndrome",
      "d-dementia-with-lewy-bodies"
    ],
    "D": [
      "d-amyotrophic-lateral-sclerosis"
    ],
    "E": [
      "d-myasthenia-gravis"
    ],
    "F": [
      "d-dermatomyositis"
    ]
  },
  "culpritId": "A",
  "culpritDiagnosisId": "d-brain-tumor",
  "culpritAcceptedIds": [
    "d-brain-tumor",
    "d-intracranial-mass"
  ],
  "suspectFeedback": {
    "A": {
      "whyCorrect": "Dr. Silver’s head cold wrap and acetaminophen suggest headache treatment. His email describes a navigation scan before a procedure and waiting for sample results. Together, these clues support investigation of a brain mass, matching the case diagnosis of brain tumor.",
      "contrast": "The scan, procedure and sample-results thread gives this suspect a focal-lesion workup, beyond headache treatment alone.",
      "wrongByDiagnosis": {
        "d-migraine": "Migraine explains headaches and use of a cold wrap, but not the navigation scan and tissue-sampling workup described in the email.",
        "d-tension-type-headache": "Tension-type headache fits simple pain relief, but does not explain the navigation imaging and planned sampling.",
        "d-chronic-subdural-hematoma": "A chronic subdural collection can cause headache and focal deficits. The planned navigation imaging and sampling favor investigation of a mass rather than drainage of a blood collection.",
        "d-amyotrophic-lateral-sclerosis": "ALS is a motor-neuron disorder; this suspect’s evidence is headache treatment and a lesion-directed scan and sampling workup."
      }
    },
    "B": {
      "whyCorrect": "Dr. Emerald fills only the right side of equivalent boxes on the annual review, suggesting left spatial neglect. The earlier emergency admission and phased return describe abrupt illness followed by recovery. Aspirin and atorvastatin fit vascular prevention. The combined case pattern favors stroke.",
      "contrast": "The combination to explain is spatial inattention, an abrupt illness with recovery, and vascular-prevention medication.",
      "wrongByDiagnosis": {
        "d-brain-tumor": "A right-sided mass can cause left neglect, but an emergency illness followed by phased recovery and vascular-prevention medication fit the stroke storyline more closely.",
        "d-migraine": "Migraine is episodic; it does not explain the continuing spatial pattern on the form together with the admission-and-recovery history.",
        "d-parkinson-disease": "Parkinson disease can slow movement, but it is not the best explanation for neglect of one side of an otherwise equivalent form after an abrupt illness.",
        "d-multiple-sclerosis": "MS can cause focal deficits, but the sudden admission, recovery pattern and vascular-prevention medicines support the intended vascular diagnosis.",
        "d-amyotrophic-lateral-sclerosis": "ALS primarily affects motor function. Neglect is an attention problem, not a consequence of weak hand muscles."
      }
    },
    "C": {
      "whyCorrect": "Dr. Charcoal shows reduced facial animation across the reception photographs. His handheld recording and email about repeated camera shake add a tremor-related clue. The case combines hypomimia with a movement-disorder pattern and assigns Parkinson disease.",
      "contrast": "The key pairing is reduced facial animation across the photos with repeated camera instability, rather than camera shake alone.",
      "wrongByDiagnosis": {
        "d-essential-tremor": "Essential tremor can explain the handheld shake, but reduced facial animation is the extra feature favoring the case’s parkinsonian pattern.",
        "d-drug-induced-parkinsonism": "Drug-induced parkinsonism can look similar, but the case provides no causative medication exposure. Its intended diagnosis is Parkinson disease.",
        "d-progressive-supranuclear-palsy": "PSP can reduce facial expression, but the case lacks its distinguishing eye-movement and early-fall pattern.",
        "d-multiple-system-atrophy": "MSA can include parkinsonism, but no prominent autonomic failure or cerebellar pattern is supplied for this suspect.",
        "d-dementia-with-lewy-bodies": "Lewy body disease can include parkinsonism, but the case does not describe the cognitive fluctuations, hallucinations or dementia needed to favor this diagnosis.",
        "d-myasthenia-gravis": "The clue pattern is reduced facial animation with tremor-related camera movement, rather than fluctuating eyelid or task-related muscle weakness."
      },
      "acceptanceNote": "For this game, Parkinson disease and the other parkinsonian diagnoses are all accepted. The case’s intended diagnosis is Parkinson disease."
    },
    "D": {
      "whyCorrect": "Dr. Burgundy’s reception photographs show reduced hand-muscle bulk. His email adds looser clothing across the shoulders and increasing difficulty holding a small key. The case uses this motor weakness and wasting pattern for ALS.",
      "contrast": "The hand wasting must be considered alongside declining body bulk and worsening everyday motor function.",
      "wrongByDiagnosis": {
        "d-ulnar-neuropathy": "An ulnar lesion can explain some intrinsic hand wasting, but it is a narrower explanation than the broader loss-of-bulk and motor-function story used for this suspect.",
        "d-median-neuropathy": "Median neuropathy can affect selected hand muscles, but the evidence is not confined to a median-nerve distribution and includes wider loss of bulk.",
        "d-cervical-radiculopathy": "A root lesion can cause focal hand wasting and weakness, but no matching radicular pain or root-distribution story is given; the intended case pattern is progressive motor-unit loss.",
        "d-parkinson-disease": "Parkinson disease explains slowness and rigidity more directly than conspicuous hand-muscle wasting and loss of body bulk.",
        "d-myasthenia-gravis": "Myasthenia is characterized by fluctuating, use-related weakness. Prominent muscle wasting and declining body bulk are not its characteristic presentation.",
        "d-dermatomyositis": "Dermatomyositis more often produces proximal weakness with characteristic skin findings. This suspect’s emphasis is hand wasting and progressive motor difficulty."
      }
    },
    "E": {
      "whyCorrect": "Dr. Navy’s eyelid droop varies across the ordered photographs. Her packet-preparation email says repeated punching becomes harder and improves after a break. Ptosis plus use-related weakness with recovery after rest fits myasthenia gravis.",
      "contrast": "The strongest feature is fatigability: performance worsens with repetition and improves after rest, alongside variable ptosis.",
      "wrongByDiagnosis": {
        "d-amyotrophic-lateral-sclerosis": "ALS can cause weakness and speech problems, but variable ptosis and clear recovery after rest favor impaired neuromuscular transmission.",
        "d-parkinson-disease": "Parkinson disease can slow repetitive tasks, but the combination of variable eyelid droop and recovery after a short break favors myasthenia.",
        "d-third-nerve-palsy": "A third-nerve palsy can cause ptosis, but would not explain limb performance recovering after rest; no corresponding eye-movement pattern is shown.",
        "d-horner-syndrome": "Horner syndrome can cause mild ptosis, but does not account for the use-related limb weakness described in the email.",
        "d-aponeurotic-ptosis": "An eyelid-structure problem could explain drooping lids, but not the separate weakness-and-rest pattern during packet preparation.",
        "d-lambert-eaton-myasthenic-syndrome": "Lambert–Eaton more often emphasizes proximal limb and autonomic features, with brief facilitation after activation. The ocular-dominant, worsening-with-use story here favors myasthenia gravis."
      }
    },
    "F": {
      "whyCorrect": "Dr. Rust has a violet eyelid eruption and raised changes over the knuckles, corresponding to heliotrope rash and Gottron papules. Her email adds skin flares after sun exposure. This cutaneous combination is characteristic of dermatomyositis.",
      "contrast": "The combination is the eyelid eruption, extensor-knuckle papules and sun-sensitive skin changes.",
      "wrongByDiagnosis": {
        "d-cutaneous-lupus-erythematosus": "Lupus can cause a sun-sensitive rash, but the combined heliotrope-type eyelid change and Gottron-type knuckle papules favor dermatomyositis.",
        "d-contact-dermatitis": "Contact dermatitis can affect eyelids or hands, but the characteristic paired distribution and sun-related flares fit dermatomyositis better than an exposure-specific dermatitis.",
        "d-psoriasis": "Psoriasis can affect extensor surfaces, but it does not fit the violet eyelid and knuckle-papule combination as well.",
        "d-myasthenia-gravis": "Myasthenia causes muscle weakness and eyelid droop, rather than a violet skin eruption and raised knuckle lesions.",
        "d-polymyositis": "Polymyositis is an inflammatory muscle disease without the characteristic dermatomyositis skin eruption emphasized here."
      }
    }
  },
  "culpritDiagnosisFeedback": {
    "d-stroke": "Stroke can explain speech and one-sided motor problems. A single abrupt event is a weaker match for the evolving sequence of messages and motor changes, and corticosteroids are not routine stroke treatment.",
    "d-ischemic-stroke": "Brain infarction caused by inadequate arterial blood supply. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-intracerebral-hemorrhage": "Bleeding directly into brain tissue. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-subarachnoid-hemorrhage": "Bleeding into the space around the brain. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-hemorrhagic-stroke": "Stroke caused by bleeding; a broader category than location-specific types. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-prior-stroke-with-residual-deficits": "A prior stroke can leave an asymmetric deficit, but a stable residual problem fits the progressive sequence less well.",
    "d-transient-ischemic-attack": "Transient focal ischemic symptoms without acute infarction. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-cerebral-venous-thrombosis": "Clotting in cerebral veins or dural venous sinuses. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-cervical-artery-dissection": "A tear within a neck artery wall. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-cerebral-aneurysm": "An abnormal bulge in a brain artery. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-cns-vasculitis": "Inflammation of blood vessels supplying the brain or spinal cord. A vascular event can explain focal deficits, but the serial progression of speech and motor problems and the corticosteroid clue fit less neatly than an evolving focal lesion.",
    "d-parkinson-disease": "Parkinson disease can explain soft speech, reduced dexterity and gait change. A clear focal weakness pattern and markedly unequal arm force fit less well than bradykinesia and rigidity, and corticosteroids do not tie the pattern together.",
    "d-drug-induced-parkinsonism": "Parkinsonian movement abnormalities caused by medication. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-vascular-parkinsonism": "Parkinsonism associated with cerebrovascular disease. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-progressive-supranuclear-palsy": "A degenerative disorder affecting movement, balance, and eye control. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-multiple-system-atrophy": "Degeneration affecting autonomic function and movement. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-corticobasal-syndrome": "Asymmetric movement and cortical dysfunction with several possible underlying causes. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-essential-tremor": "Essential tremor can interfere with precise key placement, but does not explain the full progressive speech and unequal arm/leg-force pattern.",
    "d-huntington-disease": "An inherited degenerative disorder affecting movement, thinking, and behavior. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-focal-dystonia": "Dystonic contractions affecting one body region or a specific task. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-cerebellar-disorder": "A broad diagnostic category involving cerebellar dysfunction. A movement disorder can explain selected hand, speech or gait changes, but compare its pattern with unequal arm force and one-sided leg dysfunction across the evidence.",
    "d-alzheimer-disease": "A degenerative disease that commonly causes progressive memory and cognitive decline. A primarily cognitive or behavioral syndrome does not unite the progressive speech, hand-control and asymmetric arm/leg findings.",
    "d-vascular-dementia": "Cognitive impairment severe enough for dementia due to cerebrovascular injury. A primarily cognitive or behavioral syndrome does not unite the progressive speech, hand-control and asymmetric arm/leg findings.",
    "d-dementia-with-lewy-bodies": "Dementia often accompanied by fluctuations, hallucinations, and parkinsonism. A primarily cognitive or behavioral syndrome does not unite the progressive speech, hand-control and asymmetric arm/leg findings.",
    "d-frontotemporal-dementia": "Degeneration predominantly affecting behavior or language. A primarily cognitive or behavioral syndrome does not unite the progressive speech, hand-control and asymmetric arm/leg findings.",
    "d-delirium": "Acute, fluctuating disturbance of attention and awareness. A primarily cognitive or behavioral syndrome does not unite the progressive speech, hand-control and asymmetric arm/leg findings.",
    "d-metabolic-encephalopathy": "Brain dysfunction caused by a metabolic disturbance. A primarily cognitive or behavioral syndrome does not unite the progressive speech, hand-control and asymmetric arm/leg findings.",
    "d-brain-tumor": "An evolving focal brain lesion can link the progressive speech change, impaired fine hand control, unequal arm force and one-sided gait change. Corticosteroid use can fit treatment of selected lesion-associated swelling.",
    "d-hydrocephalus": "Abnormal accumulation of cerebrospinal fluid in brain ventricles. A focal structural process can affect speech and motor pathways together. The sequence favors a process evolving over time, with corticosteroid use as a supporting treatment clue.",
    "d-normal-pressure-hydrocephalus": "A hydrocephalus syndrome often affecting gait, cognition, and bladder control. A focal structural process can affect speech and motor pathways together. The sequence favors a process evolving over time, with corticosteroid use as a supporting treatment clue.",
    "d-idiopathic-intracranial-hypertension": "Raised intracranial pressure without an identified secondary cause. A focal structural process can affect speech and motor pathways together. The sequence favors a process evolving over time, with corticosteroid use as a supporting treatment clue.",
    "d-chronic-subdural-hematoma": "A chronic subdural collection can also cause progressive focal deficits and remains a reasonable structural differential from the culprit clues alone. The culprit pattern favors a focal brain process, but these clues do not establish its tissue type.",
    "d-acute-subdural-hematoma": "A newly developed blood collection beneath the dura. A focal structural process can affect speech and motor pathways together. The sequence favors a process evolving over time, with corticosteroid use as a supporting treatment clue.",
    "d-epidural-hematoma": "A blood collection between the skull and dura. A focal structural process can affect speech and motor pathways together. The sequence favors a process evolving over time, with corticosteroid use as a supporting treatment clue.",
    "d-traumatic-brain-injury": "Brain dysfunction or damage caused by external force. A focal structural process can affect speech and motor pathways together. The sequence favors a process evolving over time, with corticosteroid use as a supporting treatment clue.",
    "d-multiple-sclerosis": "An immune-mediated disease affecting myelin and axons in the CNS. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-neuromyelitis-optica-spectrum-disorder": "An inflammatory disorder often affecting optic nerves and spinal cord. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-mog-antibody-associated-disease": "An inflammatory CNS disorder associated with antibodies to MOG. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-acute-disseminated-encephalomyelitis": "An acute inflammatory demyelinating CNS illness. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-transverse-myelitis": "Inflammation of the spinal cord. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-optic-neuritis": "Inflammation of an optic nerve. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-autoimmune-encephalitis": "Brain inflammation associated with an immune response against neural targets. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-meningitis": "Inflammation of the membranes surrounding brain and spinal cord. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-infectious-encephalitis": "Brain inflammation caused by infection. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-brain-abscess": "A localized collection of infection within the brain. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-neurosarcoidosis": "Sarcoidosis involving the nervous system. Inflammation can connect focal deficits and corticosteroid treatment. Its time course and distribution must still explain the speech, arm, hand and gait findings together.",
    "d-migraine": "Migraine is episodic and does not explain persistent or progressive speech, hand-control and asymmetric arm/leg dysfunction across the clue sequence.",
    "d-tension-type-headache": "A primary headache disorder commonly producing pressing or tightening pain. A headache or facial-pain condition does not explain the combined progressive speech change, unequal arm force and asymmetric walking pattern.",
    "d-cluster-headache": "Recurrent severe unilateral headaches with cranial autonomic symptoms. A headache or facial-pain condition does not explain the combined progressive speech change, unequal arm force and asymmetric walking pattern.",
    "d-medication-overuse-headache": "Frequent headache associated with repeated overuse of acute headache medication. A headache or facial-pain condition does not explain the combined progressive speech change, unequal arm force and asymmetric walking pattern.",
    "d-trigeminal-neuralgia": "Brief episodes of severe electric-shock facial pain. A headache or facial-pain condition does not explain the combined progressive speech change, unequal arm force and asymmetric walking pattern.",
    "d-cervical-myelopathy": "Cervical myelopathy can combine hand dysfunction and gait abnormalities. It does not explain the speech problem from the same cervical cord lesion.",
    "d-cervical-radiculopathy": "Dysfunction of a spinal nerve root in the neck. A cord or root lesion can affect limbs, but does not explain the speech abnormality from the same lesion.",
    "d-lumbar-radiculopathy": "Dysfunction of a lower-back spinal nerve root. A cord or root lesion can affect limbs, but does not explain the speech abnormality from the same lesion.",
    "d-spinal-cord-compression": "Pressure on the spinal cord causing dysfunction. A cord or root lesion can affect limbs, but does not explain the speech abnormality from the same lesion.",
    "d-cauda-equina-syndrome": "Dysfunction of multiple nerve roots below the spinal cord. A cord or root lesion can affect limbs, but does not explain the speech abnormality from the same lesion.",
    "d-hereditary-spastic-paraplegia": "Inherited disorders causing progressive leg spasticity and weakness. A cord or root lesion can affect limbs, but does not explain the speech abnormality from the same lesion.",
    "d-peripheral-neuropathy": "A broad category of disorders affecting peripheral nerves. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-diabetic-polyneuropathy": "Diffuse peripheral nerve damage associated with diabetes. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-peripheral-mononeuropathy": "Dysfunction of a single peripheral nerve. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-median-neuropathy": "Dysfunction of the median nerve. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-ulnar-neuropathy": "Dysfunction of the ulnar nerve. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-radial-neuropathy": "Dysfunction of the radial nerve. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-common-fibular-neuropathy": "Dysfunction of the common fibular nerve near the knee. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-brachial-plexopathy": "Dysfunction of the nerve network supplying the arm. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-guillain-barr-syndrome": "An acute immune-mediated polyradiculoneuropathy. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-chronic-inflammatory-demyelinating-polyneuropathy": "A chronic immune-mediated demyelinating peripheral nerve disorder. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-multifocal-motor-neuropathy": "An immune-mediated neuropathy predominantly affecting motor nerves. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-charcot-marie-tooth-disease": "A group of inherited peripheral neuropathies. A limb nerve disorder can impair hand or foot function, but does not unify speech changes with problems in both an arm and a leg.",
    "d-amyotrophic-lateral-sclerosis": "ALS can link progressive speech impairment with limb weakness and poor hand function. The weaker link is the medication clue: corticosteroids are not standard treatment for the motor-neuron disease itself.",
    "d-spinal-muscular-atrophy": "Inherited motor neuron disorders predominantly causing weakness. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-kennedy-disease": "An inherited disorder affecting lower motor neurons and androgen function. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-myasthenia-gravis": "Myasthenia can explain speech weakness and prednisone treatment. Persistent asymmetric arm/leg dysfunction fits less well than fluctuating fatigability, and the early-morning calls and murder weaken the usual later-day fatigue pattern. Morning symptoms do not exclude MG, but it is a weaker fit for the combined culprit evidence.",
    "d-lambert-eaton-myasthenic-syndrome": "A presynaptic neuromuscular junction disorder causing weakness and autonomic symptoms. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-inflammatory-myopathy": "A diagnostic category of immune-mediated muscle diseases. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-dermatomyositis": "Dermatomyositis fits corticosteroid treatment and muscle weakness. Its usual proximal, often bilateral weakness is a poorer match for the focal arm/leg pattern and fine hand-control problem.",
    "d-polymyositis": "An inflammatory myopathy diagnosed after excluding better-defined alternatives. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-inclusion-body-myositis": "A progressive muscle disease often affecting finger flexors and knee extensors. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-myotonic-dystrophy": "Inherited multisystem disorders featuring myotonia and muscle weakness. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-oculopharyngeal-muscular-dystrophy": "An inherited myopathy affecting eyelids and swallowing muscles. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-chronic-progressive-external-ophthalmoplegia": "A syndrome of slowly progressive ptosis and restricted eye movements. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-steroid-myopathy": "Muscle weakness caused by glucocorticoid exposure. The diagnosis needs to explain speech, hand control and the asymmetric motor distribution, as well as the medication clue.",
    "d-bell-palsy": "An acute idiopathic peripheral facial nerve palsy. An isolated eye, cranial-nerve or vestibular disorder does not explain the complete speech-plus-limb pattern.",
    "d-third-nerve-palsy": "Dysfunction of the oculomotor nerve controlling several eye and eyelid muscles. An isolated eye, cranial-nerve or vestibular disorder does not explain the complete speech-plus-limb pattern.",
    "d-horner-syndrome": "A sympathetic pathway disorder causing ptosis and a small pupil. An isolated eye, cranial-nerve or vestibular disorder does not explain the complete speech-plus-limb pattern.",
    "d-aponeurotic-ptosis": "Eyelid droop caused by stretching or detachment of the lifting-muscle tendon. An isolated eye, cranial-nerve or vestibular disorder does not explain the complete speech-plus-limb pattern.",
    "d-mechanical-ptosis": "Eyelid droop caused by excess weight or a local physical obstruction. An isolated eye, cranial-nerve or vestibular disorder does not explain the complete speech-plus-limb pattern.",
    "d-benign-paroxysmal-positional-vertigo": "Brief position-triggered vertigo caused by displaced inner-ear particles. An isolated eye, cranial-nerve or vestibular disorder does not explain the complete speech-plus-limb pattern.",
    "d-vestibular-neuritis": "Acute dysfunction of a vestibular nerve, typically causing prolonged vertigo. An isolated eye, cranial-nerve or vestibular disorder does not explain the complete speech-plus-limb pattern.",
    "d-pure-autonomic-failure": "Progressive autonomic dysfunction without other prominent neurologic syndromes. The case emphasizes progressive focal speech and motor changes, rather than a dominant sleep or autonomic pattern.",
    "d-postural-orthostatic-tachycardia-syndrome": "Orthostatic symptoms with excessive heart-rate rise on standing. The case emphasizes progressive focal speech and motor changes, rather than a dominant sleep or autonomic pattern.",
    "d-narcolepsy": "A sleep–wake regulation disorder causing excessive daytime sleepiness. The case emphasizes progressive focal speech and motor changes, rather than a dominant sleep or autonomic pattern.",
    "d-rem-sleep-behavior-disorder": "Loss of normal REM sleep muscle inhibition, allowing dream enactment. The case emphasizes progressive focal speech and motor changes, rather than a dominant sleep or autonomic pattern.",
    "d-restless-legs-syndrome": "An urge to move the legs that worsens at rest and improves with movement. The case emphasizes progressive focal speech and motor changes, rather than a dominant sleep or autonomic pattern.",
    "d-functional-neurological-disorder": "Neurologic symptoms associated with altered nervous-system functioning, diagnosed by positive clinical signs. The case emphasizes progressive focal speech and motor changes, rather than a dominant sleep or autonomic pattern.",
    "d-alcohol-intoxication": "Acute impairment caused by alcohol. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-sedative-medication-effect": "Impaired function caused by sedating medication. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-upper-limb-injury": "Injury affecting the shoulder, arm, wrist, or hand. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-lower-limb-injury": "Injury affecting the hip, knee, ankle, or foot. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-giant-cell-arteritis": "Inflammatory disease of medium and large arteries, sometimes threatening vision. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-cutaneous-lupus-erythematosus": "Autoimmune skin disease that may be sensitive to sunlight. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-contact-dermatitis": "Skin inflammation caused by contact with an irritant or allergen. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-psoriasis": "A chronic inflammatory skin disease causing characteristic plaques. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-lichen-planus": "An inflammatory condition affecting skin or mucosal surfaces. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-rosacea": "A chronic facial skin disorder often causing redness and flushing. A local injury, skin disorder or drug effect may explain a single observation, but does not readily unite the speech, dexterity and asymmetric limb clues.",
    "d-epilepsy": "Seizures and postictal weakness can produce temporary focal deficits. A sequence of persistent or worsening speech and motor abnormalities fits an evolving lesion more closely."
  },
  "culpritClueExplanations": [
    {
      "title": "Choking / neck marks",
      "text": "A lesion affecting one side of the brain can reduce force or control in the opposite arm, making unequal two-handed pressure compatible with a focal motor deficit. The marks alone do not identify a tumor."
    },
    {
      "title": "Footsteps",
      "text": "A focal brain lesion can also impair the leg on the same side as the affected arm. This can link the asymmetric trail with the unequal arm output."
    },
    {
      "title": "Safe and key",
      "text": "Weakness, impaired targeting or loss of fine hand control can make key alignment and turning difficult. This fits the same focal motor pattern rather than requiring a separate hand disorder."
    },
    {
      "title": "Voicemail",
      "text": "An evolving lesion involving motor-speech or language pathways can produce the progressive speech change. Symptoms present during the early-morning calls and murder do not require an end-of-day fatigue pattern."
    },
    {
      "title": "Medication",
      "text": "Corticosteroids can be used for edema associated with a brain tumor. Prednisone is a treatment clue, not proof of a tumor, and several other conditions can explain it."
    }
  ],
  "culpritDiagnosisClues": {
    "d-brain-tumor": [
      {
        "title": "Choking / neck marks",
        "fit": "Supports",
        "text": "A lesion affecting one side of the brain can reduce force or control in the opposite arm, making unequal two-handed pressure compatible with a focal motor deficit. The marks alone do not identify a tumor."
      },
      {
        "title": "Footsteps",
        "fit": "Supports",
        "text": "A focal brain lesion can also impair the leg on the same side as the affected arm. This can link the asymmetric trail with the unequal arm output."
      },
      {
        "title": "Safe and key",
        "fit": "Supports",
        "text": "Weakness, impaired targeting or loss of fine hand control can make key alignment and turning difficult. This fits the same focal motor pattern rather than requiring a separate hand disorder."
      },
      {
        "title": "Voicemail",
        "fit": "Supports",
        "text": "An evolving lesion involving motor-speech or language pathways can produce the progressive speech change. Symptoms present during the early-morning calls and murder do not require an end-of-day fatigue pattern."
      },
      {
        "title": "Medication",
        "fit": "Compatible",
        "text": "Corticosteroids can be used for edema associated with a brain tumor. Prednisone is a treatment clue, not proof of a tumor, and several other conditions can explain it."
      }
    ],
    "d-stroke": [
      {
        "title": "Choking / neck marks",
        "fit": "Supports",
        "text": "Stroke can produce asymmetric arm weakness, altered sensation or neglect, any of which could affect the force or control of the two hands."
      },
      {
        "title": "Footsteps",
        "fit": "Supports",
        "text": "One-sided leg weakness or spasticity after stroke can produce an asymmetric, dragging or circumducting gait."
      },
      {
        "title": "Safe and key",
        "fit": "Supports",
        "text": "Post-stroke weakness, sensory loss, apraxia or incoordination can interfere with key use. This clue is compatible with stroke."
      },
      {
        "title": "Voicemail",
        "fit": "Weaker fit",
        "text": "Stroke can cause dysarthria or aphasia at any time, including early morning. A single completed stroke is a weaker explanation for an evolving sequence of messages than for speech that changes suddenly and then persists; recurrent events remain possible."
      },
      {
        "title": "Medication",
        "fit": "Not supportive",
        "text": "Prednisone is not routine treatment for an uncomplicated ischemic or hemorrhagic stroke. Stroke explains several motor clues but does not naturally explain this prescription as treatment of the same condition."
      }
    ],
    "d-parkinson-disease": [
      {
        "title": "Choking / neck marks",
        "fit": "Compatible",
        "text": "Asymmetric bradykinesia, rigidity or tremor could affect hand control or contact. Markedly unequal force from focal weakness is less characteristic than reduced movement speed and amplitude."
      },
      {
        "title": "Footsteps",
        "fit": "Compatible",
        "text": "Short shuffling steps, reduced foot clearance and asymmetric movement can fit a parkinsonian disorder. A hemiparetic dragging pattern is not specific to parkinsonism."
      },
      {
        "title": "Safe and key",
        "fit": "Supports",
        "text": "Bradykinesia, rigidity, tremor or impaired dexterity can interfere with aligning and turning a key. This is a reasonable explanation for this clue."
      },
      {
        "title": "Voicemail",
        "fit": "Compatible",
        "text": "Hypophonia and dysarthria can occur in parkinsonian disorders. Early-morning speech changes are possible, but the evolving focal arm/leg/speech pattern is not explained specifically by parkinsonism."
      },
      {
        "title": "Medication",
        "fit": "Not supportive",
        "text": "Prednisone is not standard treatment for Parkinson disease or the common degenerative parkinsonian syndromes. It leaves an important part of the combined evidence unexplained."
      }
    ],
    "d-amyotrophic-lateral-sclerosis": [
      {
        "title": "Choking / neck marks",
        "fit": "Supports",
        "text": "ALS can begin asymmetrically and weaken a hand or arm, making unequal grip force plausible."
      },
      {
        "title": "Footsteps",
        "fit": "Supports",
        "text": "Asymmetric leg weakness, foot drop or spasticity in ALS can alter foot clearance and the walking pattern."
      },
      {
        "title": "Safe and key",
        "fit": "Supports",
        "text": "Hand weakness and loss of fine motor function can make a key difficult to manipulate."
      },
      {
        "title": "Voicemail",
        "fit": "Supports",
        "text": "Bulbar involvement can cause progressive dysarthria. Morning symptoms are possible because ALS weakness does not have to follow the rest-responsive daily pattern typical of MG."
      },
      {
        "title": "Medication",
        "fit": "Not supportive",
        "text": "Corticosteroids are not standard disease-modifying treatment for ALS. ALS is a strong motor-pattern alternative, but the medication clue does not tie into it as well as into a steroid-treated condition."
      }
    ],
    "d-myasthenia-gravis": [
      {
        "title": "Choking / neck marks",
        "fit": "Compatible",
        "text": "Fatigable weakness could reduce sustained grip force, and MG can be asymmetric. The neck marks do not demonstrate deterioration with repeated effort or recovery after rest."
      },
      {
        "title": "Footsteps",
        "fit": "Weaker fit",
        "text": "Generalized MG can weaken the legs and change walking, but a persistent one-sided dragging or spastic-looking pattern is less typical than fluctuating fatigable weakness."
      },
      {
        "title": "Safe and key",
        "fit": "Compatible",
        "text": "Fatigable hand weakness could impair repeated key use. The scratches do not show whether performance worsened with use or improved after resting."
      },
      {
        "title": "Voicemail",
        "fit": "Weaker fit",
        "text": "MG can cause dysarthria, hypophonia or nasal speech. The calls and murder occur early in the morning, when symptoms are often milder after overnight rest, so the timing weakens a fatigue-based explanation. Morning symptoms remain possible and the time alone does not exclude MG."
      },
      {
        "title": "Medication",
        "fit": "Supports",
        "text": "Prednisone is used to suppress the autoimmune process in MG. This medication supports MG as a differential, even though the focal pattern and early-morning timing make it a weaker explanation for all five clues together."
      }
    ],
    "d-dermatomyositis": [
      {
        "title": "Choking / neck marks",
        "fit": "Compatible",
        "text": "Muscle weakness could reduce the ability to sustain force. Dermatomyositis usually causes proximal, often bilateral weakness, which is less characteristic of the strongly asymmetric arm-output pattern."
      },
      {
        "title": "Footsteps",
        "fit": "Weaker fit",
        "text": "Hip-girdle weakness can change walking and cause difficulty rising or climbing. A persistent unilateral dragging pattern is less typical than a proximal myopathic gait."
      },
      {
        "title": "Safe and key",
        "fit": "Weaker fit",
        "text": "Weakness can make arm tasks harder, but isolated fine finger-control trouble is less typical of dermatomyositis than proximal shoulder weakness."
      },
      {
        "title": "Voicemail",
        "fit": "Compatible",
        "text": "Bulbar muscle involvement can affect swallowing and sometimes speech. The recording does not specifically establish inflammatory muscle disease; morning timing is not a distinctive clue for it."
      },
      {
        "title": "Medication",
        "fit": "Supports",
        "text": "Prednisone is a standard treatment option for the muscle inflammation of dermatomyositis. That fits the prescription, but does not resolve the poorer match to the focal motor pattern."
      }
    ]
  }
};
