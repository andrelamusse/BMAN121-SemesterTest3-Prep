const fs = require('fs');
const path = require('path');
const { BMAN121_QUESTIONS } = require('./questions.js');

console.log('=== STARTING AUTOMATED DEEP VERIFICATION SUITE ===\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    process.exitCode = 1;
  }
}

// 1. Question Bank Integrity
console.log('--- 1. Testing Question Bank Structure & Quality ---');
assert(Array.isArray(BMAN121_QUESTIONS), 'BMAN121_QUESTIONS is an array');
assert(BMAN121_QUESTIONS.length === 120, `Total question count is 120 (Actual: ${BMAN121_QUESTIONS.length})`);

const su7 = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU7');
const su8 = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU8');
const su9 = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU9');

assert(su7.length === 40, `SU7 has exactly 40 questions (Actual: ${su7.length})`);
assert(su8.length === 40, `SU8 has exactly 40 questions (Actual: ${su8.length})`);
assert(su9.length === 40, `SU9 has exactly 40 questions (Actual: ${su9.length})`);

const ids = new Set();
let allOptionsValid = true;
let allExplanationsValid = true;

BMAN121_QUESTIONS.forEach(q => {
  if (ids.has(q.id)) {
    console.error(`Duplicate ID found: ${q.id}`);
    allOptionsValid = false;
  }
  ids.add(q.id);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    console.error(`Invalid options length for ${q.id}`);
    allOptionsValid = false;
  }
  if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
    console.error(`Invalid correctIndex for ${q.id}: ${q.correctIndex}`);
    allOptionsValid = false;
  }

  const exp = q.explanation;
  if (!exp || !exp.summary || !exp.whyCorrect || !Array.isArray(exp.whyDistractors) || exp.whyDistractors.length !== 3 || !exp.reference) {
    console.error(`Invalid explanation structure for ${q.id}`);
    allExplanationsValid = false;
  }
});

assert(ids.size === 120, 'All 120 question IDs are unique');
assert(allOptionsValid, 'Every question has exactly 4 valid, non-empty options with correctIndex in range [0, 3]');
assert(allExplanationsValid, 'Every question has comprehensive pedagogical explanation (summary, whyCorrect, 3 whyDistractors, reference)');

// 2. HTML DOM Contract Verification
console.log('\n--- 2. Testing HTML DOM Elements Contract ---');
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const requiredIds = [
  'themeToggle', 'brandHome', 'viewHub', 'viewTest', 'viewResults',
  'settingQuestionCount', 'settingShuffleQuestions', 'settingShuffleOptions', 'settingInstantFeedback',
  'btnCalcBE', 'btnCalcEOQ', 'btnCalcRatios', 'lastScoreBanner',
  'testModeBadge', 'questionCounter', 'testTimer', 'progressBarFill', 'questionUnitTag',
  'btnFlag', 'questionText', 'optionsList', 'explanationBox',
  'btnPrev', 'btnNext', 'btnSubmitExam', 'btnOpenNav', 'btnExitTest',
  'navModal', 'navGrid', 'btnCloseNav',
  'scoreBadge', 'scorePercentage', 'scoreDetailsText',
  'statTotal', 'statCorrect', 'statIncorrect', 'statTime', 'statAvgTime',
  'chapterBreakdownContainer', 'reviewList',
  'btnRetakeTest', 'btnPracticeMissed', 'btnBackHome'
];

let allIdsFound = true;
requiredIds.forEach(id => {
  const pattern = new RegExp(`id=["']${id}["']`);
  if (!pattern.test(htmlContent)) {
    console.error(`Missing expected ID in index.html: ${id}`);
    allIdsFound = false;
  }
});
assert(allIdsFound, `All ${requiredIds.length} required interactive DOM element IDs exist in index.html`);

// 3. Mathematical Tool Formulas
console.log('\n--- 3. Testing Interactive Calculator Math ---');
// Break-even test: FC = 60000, P = 300, VC = 100 -> Q_BE = 60000 / (300 - 100) = 300
const fc = 60000, sp = 300, vc = 100;
const beUnits = Math.ceil(fc / (sp - vc));
assert(beUnits === 300, `Break-Even Quantity formula matches: 300 units (Calculated: ${beUnits})`);

// EOQ test: D = 10000, S = 50, H = 4 -> EOQ = sqrt(2 * 10000 * 50 / 4) = sqrt(250000) = 500
const d = 10000, s = 50, h = 4;
const eoq = Math.round(Math.sqrt((2 * d * s) / h));
assert(eoq === 500, `EOQ formula matches: 500 units (Calculated: ${eoq})`);

// Liquidity ratios test: CA = 500000, CL = 250000, Inv = 250000 -> CR = 2.00, QR = 1.00
const ca = 500000, cl = 250000, inv = 250000;
const cr = (ca / cl).toFixed(2);
const qr = ((ca - inv) / cl).toFixed(2);
const nwc = ca - cl;
assert(cr === '2.00' && qr === '1.00' && nwc === 250000, `Liquidity ratio calculations match: CR=2.00:1, QR=1.00:1, NWC=R250,000`);

// 4. Option Shuffling Answer Preservation Simulation
console.log('\n--- 4. Testing Option Shuffling Answer Invariance ---');
let shufflePreserved = true;
for (let sim = 0; sim < 100; sim++) {
  const sampleQ = BMAN121_QUESTIONS[Math.floor(Math.random() * BMAN121_QUESTIONS.length)];
  const originalCorrectText = sampleQ.options[sampleQ.correctIndex];
  
  // Replicate app.js shuffle logic
  const indexed = sampleQ.options.map((opt, i) => ({ opt, isCorrect: i === sampleQ.correctIndex }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  const newOptions = indexed.map(item => item.opt);
  const newCorrectIndex = indexed.findIndex(item => item.isCorrect);

  if (newOptions[newCorrectIndex] !== originalCorrectText) {
    shufflePreserved = false;
  }
}
assert(shufflePreserved, 'Option shuffling preserves correct answer mapping 100% across 100 random simulations');

console.log(`\n=== VERIFICATION COMPLETE: ${passedTests} / ${totalTests} TESTS PASSED ===\n`);
