const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const root = path.resolve(__dirname, '..');
const nodes = new Map();
function node() {
  return {
    value: '', innerHTML: '', dataset: {}, attrs: {}, events: {}, open: false,
    hidden: false, isConnected: true,
    addEventListener(name, fn) { this.events[name] = fn; },
    setAttribute(name, value) { this.attrs[name] = value; },
    removeAttribute(name) { delete this.attrs[name]; },
    focus() { this.focused = true; },
    scrollIntoView() {},
    querySelector(selector) { this.nodes ??= {}; return this.nodes[selector] ??= node(); },
    querySelectorAll() { return []; },
    showModal() { this.open = true; },
    close() { this.open = false; this.events.close?.(); },
    getBoundingClientRect() { return { left: 400, right: 1000, top: 0, bottom: 800 }; }
  };
}
const $ = selector => {
  if (!nodes.has(selector)) nodes.set(selector, node());
  return nodes.get(selector);
};
const events = [], focus = node(), referenceTrigger = node(), notesTrigger = node();
const context = {
  window: { addEventListener() {}, scrollTo() {} },
  document: {
    activeElement: focus,
    querySelector(selector) {
      if (selector === 'dialog[open]') return [...nodes.values()].find(n => n.open) || null;
      return $(selector);
    },
    querySelectorAll(selector) { return selector === '[data-notes-open]' ? [notesTrigger] : [referenceTrigger]; },
    addEventListener() {}
  },
  state: { team: 'QA', section: 'culprit', clue: 0, stage: 0, flow: {}, notes: 'Existing notes' },
  config: null, location: { hash: '' }, history: { replaceState() {} }, debugMode: false,
  DDLog: { event: (kind, data) => events.push({ kind, ...data }), screen() {} },
  save() {}, render() {}, toast() {}, mediaCard: media => media ? `<img src="${media.src}">` : '', $,
  $$: () => [], esc: value => String(value ?? ''),
  norm: value => String(value).toLowerCase().replace(/[^a-z0-9]/g, ''), setTimeout() {}, URL
};
vm.createContext(context);
for (const file of ['reference-data.js', 'reference.js', 'case-config.js', 'case-resolution-data.js', 'case-resolution.js', 'symptom-details.js', 'play-flow.js', 'suspects.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
}
context.DDReference = context.window.DDReference;
context.config = context.window.CASE_CONFIG;
const c = context, rules = c.resolutionRules(), steps = c.investigationSteps();
assert.equal(rules.culpritId, 'A');
assert.equal(steps.filter(s=>s.revision==='culprit').length,2);
assert.equal(steps.filter(s=>s.revision==='suspects').length,6);
assert.equal(steps.filter(s=>s.section==='culprit').length,5);
assert.equal(steps[2].id,'revise-culprit-2');
assert.equal(steps.at(-2).id, 'suspect-assignment');
assert.equal(steps.at(-1).id, 'final-answer');
for (const step of steps.filter(s => s.section === 'suspects')) {
  const view = node();
  c.mountFlow(view, step.stage, {}, {});
  assert(!view.innerHTML.includes('data-flow-form="disease"'));
  assert(!view.innerHTML.includes('data-flow-reveal="disease"'));
}
const ranking = ['d-brain-tumor', 'd-stroke', 'd-amyotrophic-lateral-sclerosis', 'd-myasthenia-gravis', 'd-parkinson-disease'];
assert(!c.submitRankedDifferential(ranking).ok);
function complete(step) {
  const record = c.flowRecord(step.id);
  record.catalogFound = c.DDReference.approved(step.stage).map(a => a.id);
  record.matches = [];
  if (step.stage.observationOnly) record.observationReviewed = true;
}
assert(!c.submitRevision('revise-culprit-2',ranking).ok);
for(const step of steps){
 if(step.section==='culprit')complete(step);
 if(step.revision==='culprit'){
  assert(!c.submitRevision(step.id,[ranking[0]]).ok);
  assert(c.submitRevision(step.id,step.through===4?ranking.toReversed():ranking).ok);
  assert.equal(events.at(-1).result,'ungraded');
  assert(!c.submitRevision(step.id,ranking.toReversed()).ok);
 }
}
assert.equal(JSON.stringify(c.latestRevision('culprit').ids),JSON.stringify(ranking.toReversed()));
assert.equal(JSON.stringify(c.resolutionState().revisions['revise-culprit-2'].ids),JSON.stringify(ranking));
const resumed=JSON.parse(JSON.stringify(c.state));assert.equal(JSON.stringify(resumed.resolution.revisions['revise-culprit-4'].ids),JSON.stringify(ranking.toReversed()));
assert(!c.isStepUnlocked(steps.find(s => s.section === 'suspects').id));
assert(!c.submitRankedDifferential([ranking[0], ...ranking.slice(0, 4)]).ok);
assert(c.submitRankedDifferential(ranking).ok);
const savedRanking = JSON.stringify(c.resolutionState().ranking);
assert.equal(events.at(-1).result, 'ungraded');
assert(!c.submitRankedDifferential(ranking.toReversed()).ok);
c.renderSuspectAssignments();
assert(!$('#roundContent').innerHTML.includes('Why Brain tumor fits'));
assert(!$('#roundContent').innerHTML.includes('suspect-explanation'));
assert.equal(($('#roundContent').innerHTML.match(/Clues to assess/g)||[]).length,6);
const guesses = { A: 'd-migraine', B: 'd-brain-tumor', C: 'd-essential-tremor', D: 'd-ulnar-neuropathy', E: 'd-horner-syndrome', F: 'd-cutaneous-lupus-erythematosus' };
assert(!c.submitSuspectAssignments(guesses).ok);
for(const step of steps){
 if(step.section==='suspects')complete(step);
 if(step.revision==='suspects'){
  const evidence=c.revisionEvidenceSteps(step),seen=[...new Set(evidence.map(s=>s.personId))];
  assert(!c.submitRevision(step.id,{}).ok);
  c.renderRevisionCheckpoint(step.id);
  const view=$('#roundContent').innerHTML;
  assert(view.includes('Clues to assess'));
  assert(!view.includes('Why Brain tumor fits'));
  assert(!view.includes('of 6 correct'));
  for(const set of c.config.suspectSets){if(!evidence.some(s=>s.setId===set.id))assert(!view.includes(`<h5>${set.title}</h5>`));}
  assert(c.submitRevision(step.id,Object.fromEntries(seen.map(id=>[id,guesses[id]]))).ok);
  assert.equal(events.at(-1).result,'ungraded');
 }
}
for(const person of c.resolutionPeople()){
 const html=c.suspectEvidence(person.id);
 for(const set of c.config.suspectSets.filter(s=>s.people.some(p=>p.id===person.id&&p.observable!==false))){
  assert(html.includes(set.title));
  if(set.emails){const p=set.people.find(p=>p.id===person.id);for(const email of set.emails.filter(e=>!p.emailId||e.id===p.emailId))assert(html.includes(email.body.replace(/\n/g,'<br>')));}
 }
}

assert(!c.submitSuspectAssignments({ A: guesses.A }).ok);
assert(c.submitSuspectAssignments(guesses).ok);
assert(!c.submitSuspectAssignments(rules.suspectDiagnoses).ok);
c.renderSuspectAssignments();
const assignmentView = $('#roundContent').innerHTML;
assert(assignmentView.includes('0 of 6 correct'));
for (const person of c.resolutionPeople()) {
  const assessment = c.suspectAssessment(person.id, guesses[person.id]);
  assert(assignmentView.includes(assessment.whyCorrect));
  assert(assignmentView.includes(assessment.whySelected));
  assert(assignmentView.includes(c.diagnosisName(assessment.correctId)));
}
c.state.section = 'checkpoint'; c.state.checkpoint = 'final';
c.renderFinalAccusation();
assert(!$('#roundContent').innerHTML.includes('id="finalDiagnosis"'));
assert($('#roundContent').innerHTML.includes('id="finalPerson"'));
assert(!$('#roundContent').innerHTML.includes('How the culprit clues fit together'));
assert(!c.lockFinalAccusation('').ok);
// The second argument is deliberately ignored: diagnosis is carried from the roster.
assert(c.lockFinalAccusation('C', 'd-brain-tumor').ok);
assert.equal(c.resolutionState().final.diagnosisId, 'd-parkinson-disease');
assert(!c.resolutionState().final.correct);
c.renderFinalAccusation();
const finalView = $('#roundContent').innerHTML;
assert(finalView.includes('How the culprit clues fit together'));
for (const clue of rules.culpritClueExplanations) assert(finalView.includes(clue.text));
for (const profile of Object.values(rules.suspectFeedback)) assert(!finalView.includes(profile.whyCorrect));
assert(!finalView.includes('navigation scan'));
assert(!finalView.includes('tissue sampling'));
const locked = JSON.stringify(c.resolutionState().final);
assert(!c.lockFinalAccusation('A').ok);
assert.equal(JSON.stringify(c.resolutionState().final), locked);
assert.equal(JSON.stringify(c.resolutionState().ranking), savedRanking);
c.state.resolution.final = undefined;
assert(c.lockFinalAccusation('A', 'd-parkinson-disease').ok);
assert(c.resolutionState().final.correct);
assert.equal(c.resolutionState().final.diagnosisId, 'd-brain-tumor');
// An old accusation preserves its suspect, timestamp and historical fields.
c.state.resolution.final = { personId: 'A', diagnosisId: 'd-parkinson-disease', correct: false, lockedAt: 'original-time' };
c.normalizeFinalAccusation();
assert.equal(c.resolutionState().final.legacyDiagnosisId, 'd-parkinson-disease');
assert.equal(c.resolutionState().final.legacyCorrect, false);
assert.equal(c.resolutionState().final.lockedAt, 'original-time');
assert(c.resolutionState().final.correct);
const normalized = JSON.stringify(c.resolutionState().final);
c.normalizeFinalAccusation();
assert.equal(JSON.stringify(c.resolutionState().final), normalized);
for (const item of c.DDReference.lists.disease) assert(c.finalDiagnosisExplanation(item.id).length > 30);
c.state.lastInvestigationRoute = '#final'; c.location.hash = '#final';
c.renderSectionNav();
const nav = $('#sectionNav').innerHTML;
assert(nav.indexOf('Culprit clues') < nav.indexOf('Top five'));
assert(nav.indexOf('Top five') < nav.indexOf('Suspect clues'));
assert(!nav.includes('>Notes<'));
assert(nav.includes('Suspect diagnoses'));
assert(nav.includes('Choose culprit'));
c.initNotesPanel();
const clueView = $('#roundContent').innerHTML, section = c.state.section, step = c.state.checkpoint;
$('#flow-symptom').value = 'unfinished answer';
c.openNotes();
assert($('#notesDrawer').open);
assert.equal($('#sideCaseNotes').value, 'Existing notes');
assert($('#sideCaseNotes').focused);
$('#sideCaseNotes').value = 'Private notes stay local';
$('#sideCaseNotes').oninput();
c.closeNotes();
assert(!$('#notesDrawer').open);
assert(focus.focused);
assert.equal(c.state.notes, 'Private notes stay local');
assert.equal(c.state.section, section);
assert.equal(c.state.checkpoint, step);
assert.equal($('#roundContent').innerHTML, clueView);
assert.equal($('#flow-symptom').value, 'unfinished answer');
assert(!JSON.stringify(events).includes('Private notes stay local'));
c.openNotes();
assert.equal($('#sideCaseNotes').value, 'Private notes stay local');
c.closeNotes();
c.location.hash = '#notes'; c.suspectRoute();
assert.equal(c.state.section, 'checkpoint');
assert.equal(c.state.checkpoint, 'final');
const reload = JSON.parse(JSON.stringify(c.state));
assert.equal(reload.notes, c.state.notes);
assert.equal(JSON.stringify(reload.resolution.ranking), savedRanking);
assert(events.some(event => event.kind === 'final_accusation' && event.mode === 'culprit-only'));
console.log('PASS: ordered checkpoints, delayed grading, six suspect debriefs, culprit-only locking and migration, culprit-only final rationale, tab order, notes drawer, persistence and local-only notes.');

// Tumor consolidation keeps search and saved progress compatible.
for(const term of ['Glioma','Glioblastoma','Meningioma','Brain metastasis'])assert.equal(c.DDReference.resolve(term,'disease').id,'d-brain-tumor');
assert.equal(c.DDReference.lists.disease.length,72);
const family=['d-parkinson-disease','d-drug-induced-parkinsonism','d-vascular-parkinsonism','d-progressive-supranuclear-palsy','d-multiple-system-atrophy','d-corticobasal-syndrome','d-dementia-with-lewy-bodies'];
for(const id of family){
 assert(c.suspectAssessment('C',id).correct);
 for(const anchor of family){const approvals=c.DDReference.approved({accepted:[{type:'disease',referenceIds:[anchor]}]},'disease');assert(approvals.some(a=>a.id===c.DDReference.canonicalId(id)));}
}
assert(!c.suspectAssessment('C','d-essential-tremor').correct);
for(const [id,rows] of Object.entries(c.resolutionRules().culpritDiagnosisClues)){assert.equal(rows.length,5);assert(rows.every(row=>row.title&&row.fit&&row.text));}
assert(c.resolutionRules().culpritDiagnosisClues['d-myasthenia-gravis'][3].text.includes('early in the morning'));
assert(c.resolutionRules().culpritDiagnosisClues['d-myasthenia-gravis'][3].text.includes('does not exclude MG'));
c.state.resolution={ranking:{ids:['d-glioma','d-glioblastoma','d-stroke','d-epilepsy','d-myasthenia-gravis'],submittedAt:'saved'},assignment:{answers:{C:'d-parkinson-disease'},results:[]},final:{personId:'E',diagnosisId:'d-myasthenia-gravis',mode:'culprit-only',correct:false,lockedAt:'saved'}};
assert.equal(c.resolutionState().ranking.ids.filter(id=>id==='d-brain-tumor').length,1);assert.equal(c.resolutionState().ranking.legacyIds.length,5);
c.renderFinalAccusation();assert($('#roundContent').innerHTML.includes('data-diagnosis-clue-review="d-myasthenia-gravis"'));assert($('#roundContent').innerHTML.includes('early in the morning'));
delete c.state.resolution.final;c.renderFinalAccusation();
const selector=$('#roundContent').innerHTML.split('<form id="finalForm"')[1];assert(selector.includes('aria-label="Select culprit"'));assert(!selector.includes('finalConfirmedDiagnosis'));assert(!selector.includes('carried forward'));assert(!selector.includes('This locks'));assert(!selector.includes('— Brain tumor'));assert(!selector.includes('early in the morning'));
console.log('PASS: consolidated tumor searches/history, all parkinsonian alternatives, five-clue final comparisons, morning MG rationale and minimal selector.');

const oldResolutionConfig=c.config.caseResolution;
c.config.caseResolution={...c.resolutionRules(),suspectAcceptedIds:{C:['d-parkinson-disease']}};
for(const id of family)assert(c.suspectAssessment('C',id).correct);
c.config.caseResolution=oldResolutionConfig;
const tumorProgress={catalogFound:['d-glioma','d-glioblastoma','d-brain-tumor']};
assert.equal(c.DDReference.progress({accepted:[{type:'disease',referenceIds:['d-brain-tumor']}]},tumorProgress).length,1);

c.state.resolution={ranking:{ids:['d-intracranial-mass','d-brain-tumor','d-stroke','d-epilepsy','d-myasthenia-gravis'],submittedAt:'saved'},assignment:{answers:{A:'d-intracranial-mass'},results:[{personId:'A',diagnosisId:'d-intracranial-mass',correct:true}]}};
assert(!c.resolutionState().ranking.ids.includes('d-intracranial-mass'));
assert(c.resolutionState().ranking.legacyIds.includes('d-intracranial-mass'));
assert(!c.validDiagnosis('d-intracranial-mass'));
assert(c.suspectAssessment('A','d-intracranial-mass').correct);
assert(c.diagnosisName('d-intracranial-mass').includes('(removed)'));

c.state.resolution={ranking:{ids:ranking,submittedAt:'original'},assignment:{answers:{...rules.suspectDiagnoses},results:[]}};
c.renderFinalAccusation();assert($('#roundContent').innerHTML.includes('Your original culprit differential'));assert(!$('#roundContent').innerHTML.includes('Edit differential'));assert(!$('#roundContent').innerHTML.includes('finalDifferentialForm'));

// Routes and archived attempts remain accessible after checkpoints are added.
c.location.hash='#revision/revise-culprit-2';c.suspectRoute();assert.equal(c.state.checkpoint,'revise-culprit-2');
c.state.resolution.assignment.submittedAt='historic';
assert(c.checkpointStatus('revise-culprit-2').complete);assert(c.checkpointStatus('revise-suspects-2').complete);
