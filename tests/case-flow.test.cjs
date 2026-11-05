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
  save() {}, render() {}, toast() {}, $,
  $$: () => [], esc: value => String(value ?? ''),
  norm: value => String(value).toLowerCase().replace(/[^a-z0-9]/g, ''), setTimeout() {}, URL
};
vm.createContext(context);
for (const file of ['reference-data.js', 'reference.js', 'case-config.js', 'suspect-data.js', 'case-resolution-data.js', 'case-resolution.js', 'play-flow.js', 'suspects.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
}
context.DDReference = context.window.DDReference;
context.config = context.window.CASE_CONFIG;
const c = context, rules = c.resolutionRules(), steps = c.investigationSteps();
assert.equal(rules.culpritId, 'A');
assert.equal(steps.length, 22);
assert.equal(steps[5].id, 'ranked-differential');
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
steps.filter(s => s.section === 'culprit').forEach(complete);
assert(!c.isStepUnlocked(steps.find(s => s.section === 'suspects').id));
assert(!c.submitRankedDifferential([ranking[0], ...ranking.slice(0, 4)]).ok);
assert(c.submitRankedDifferential(ranking).ok);
const savedRanking = JSON.stringify(c.resolutionState().ranking);
assert.equal(events.at(-1).result, 'ungraded');
assert(!c.submitRankedDifferential(ranking.toReversed()).ok);
c.renderSuspectAssignments();
assert(!$('#roundContent').innerHTML.includes('Why Brain tumor fits'));
assert(!$('#roundContent').innerHTML.includes('suspect-explanation'));
const guesses = { A: 'd-migraine', B: 'd-brain-tumor', C: 'd-essential-tremor', D: 'd-ulnar-neuropathy', E: 'd-horner-syndrome', F: 'd-cutaneous-lupus-erythematosus' };
assert(!c.submitSuspectAssignments(guesses).ok);
steps.filter(s => s.section === 'suspects').forEach(complete);
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
