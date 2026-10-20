/**
 * BMAN121 Semester Test 3 Prep Application
 * Dynamic Engine, Analytics, Pedagogical Rationale Tutor
 * Pure Vanilla JavaScript (Client-side, Zero CORS, Offline-Ready)
 */

(function () {
  'use strict';

  // Application State
  const state = {
    mode: 'mock', // 'mock', 'practice', 'su7', 'su8', 'su9', 'remedial'
    questionCount: 40,
    shuffleQuestions: true,
    shuffleOptions: true,
    instantFeedback: false,
    
    // Active session
    questions: [],       // Processed array of question objects for current run
    currentIndex: 0,
    userAnswers: {},     // { questionId: selectedOptionIndex }
    flagged: new Set(),  // Set of flagged questionIds
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeRemaining: 50 * 60, // 50 mins in seconds for mock exam
    isSubmitted: false,

    // Review filters
    activeReviewFilter: 'all',
    missedQuestionIds: []
  };

  // DOM Elements Cache
  const el = {};

  function initElements() {
    el.themeToggle = document.getElementById('themeToggle');
    el.brandHome = document.getElementById('brandHome');
    
    // Views
    el.viewHub = document.getElementById('viewHub');
    el.viewCheatSheet = document.getElementById('viewCheatSheet');
    el.viewTest = document.getElementById('viewTest');
    el.viewResults = document.getElementById('viewResults');
    el.tabBtnQuiz = document.getElementById('tabBtnQuiz');
    el.tabBtnCheatSheet = document.getElementById('tabBtnCheatSheet');
    el.btnStartRapid20 = document.getElementById('btnStartRapid20');

    // Hub controls
    el.modeCards = document.querySelectorAll('.mode-card');
    el.settingQuestionCount = document.getElementById('settingQuestionCount');
    el.settingShuffleQuestions = document.getElementById('settingShuffleQuestions');
    el.settingShuffleOptions = document.getElementById('settingShuffleOptions');
    el.settingInstantFeedback = document.getElementById('settingInstantFeedback');
    
    // Tools
    el.btnCalcBE = document.getElementById('btnCalcBE');
    el.btnCalcEOQ = document.getElementById('btnCalcEOQ');
    el.btnCalcRatios = document.getElementById('btnCalcRatios');
    el.lastScoreBanner = document.getElementById('lastScoreBanner');

    // Test Screen
    el.testModeBadge = document.getElementById('testModeBadge');
    el.questionCounter = document.getElementById('questionCounter');
    el.testTimer = document.getElementById('testTimer');
    el.progressBarFill = document.getElementById('progressBarFill');
    el.questionUnitTag = document.getElementById('questionUnitTag');
    el.btnFlag = document.getElementById('btnFlag');
    el.questionText = document.getElementById('questionText');
    el.optionsList = document.getElementById('optionsList');
    el.explanationBox = document.getElementById('explanationBox');
    
    el.btnPrev = document.getElementById('btnPrev');
    el.btnNext = document.getElementById('btnNext');
    el.btnSubmitExam = document.getElementById('btnSubmitExam');
    el.btnOpenNav = document.getElementById('btnOpenNav');
    el.btnExitTest = document.getElementById('btnExitTest');

    // Navigator Modal
    el.navModal = document.getElementById('navModal');
    el.navGrid = document.getElementById('navGrid');
    el.btnCloseNav = document.getElementById('btnCloseNav');

    // Results Screen
    el.scoreBadge = document.getElementById('scoreBadge');
    el.scorePercentage = document.getElementById('scorePercentage');
    el.scoreDetailsText = document.getElementById('scoreDetailsText');
    el.statTotal = document.getElementById('statTotal');
    el.statCorrect = document.getElementById('statCorrect');
    el.statIncorrect = document.getElementById('statIncorrect');
    el.statTime = document.getElementById('statTime');
    el.statAvgTime = document.getElementById('statAvgTime');
    
    el.chapterBreakdownContainer = document.getElementById('chapterBreakdownContainer');
    el.reviewList = document.getElementById('reviewList');
    el.reviewFilterBtns = document.querySelectorAll('.filter-btn');

    el.btnRetakeTest = document.getElementById('btnRetakeTest');
    el.btnPracticeMissed = document.getElementById('btnPracticeMissed');
    el.btnBackHome = document.getElementById('btnBackHome');
  }

  // =========================================================================
  // Theme Management
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('bman121_theme') || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    
    if (el.themeToggle) {
      el.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bman121_theme', theme);
    if (el.themeToggle) {
      el.themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      el.themeToggle.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      el.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
  }

  // =========================================================================
  // Navigation / View Switching
  // =========================================================================
  function showView(viewName) {
    if (el.viewHub) el.viewHub.classList.remove('active');
    if (el.viewCheatSheet) el.viewCheatSheet.classList.remove('active');
    if (el.viewTest) el.viewTest.classList.remove('active');
    if (el.viewResults) el.viewResults.classList.remove('active');

    if (el.tabBtnQuiz) el.tabBtnQuiz.classList.toggle('active', viewName === 'hub' || viewName === 'test' || viewName === 'results');
    if (el.tabBtnCheatSheet) el.tabBtnCheatSheet.classList.toggle('active', viewName === 'cheatsheet');

    if (viewName === 'hub' && el.viewHub) {
      el.viewHub.classList.add('active');
      renderPreviousScore();
    } else if (viewName === 'cheatsheet' && el.viewCheatSheet) {
      el.viewCheatSheet.classList.add('active');
    } else if (viewName === 'test' && el.viewTest) {
      el.viewTest.classList.add('active');
    } else if (viewName === 'results' && el.viewResults) {
      el.viewResults.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // Question Randomization & Engine Setup
  // =========================================================================
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function prepareQuestions(mode) {
    let pool = [];

    if (typeof BMAN121_QUESTIONS === 'undefined' || !Array.isArray(BMAN121_QUESTIONS)) {
      console.error('BMAN121_QUESTIONS bank is not loaded!');
      return [];
    }

    if (mode === 'su7') {
      pool = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU7');
    } else if (mode === 'su8') {
      pool = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU8');
    } else if (mode === 'su9') {
      pool = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU9');
    } else if (mode === 'remedial') {
      pool = BMAN121_QUESTIONS.filter(q => state.missedQuestionIds.includes(q.id));
    } else {
      // Full mock or practice: balanced sample across SU7, SU8, and SU9
      const su7 = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU7');
      const su8 = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU8');
      const su9 = BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU9');

      if (state.shuffleQuestions) {
        pool = [...shuffleArray(su7), ...shuffleArray(su8), ...shuffleArray(su9)];
      } else {
        pool = [...su7, ...su8, ...su9];
      }
    }

    let count = mode === 'rapid20' ? 20 : parseInt(el.settingQuestionCount ? el.settingQuestionCount.value : 20, 10);
    if (isNaN(count) || count <= 0 || count > pool.length) {
      count = pool.length;
    }

    let selected = [];
    if (mode === 'mock' || mode === 'practice' || mode === 'rapid20') {
      // Stratified random selection for balanced unit distribution
      const perUnit = Math.floor(count / 3);
      const remainder = count % 3;

      const su7Items = shuffleArray(BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU7')).slice(0, perUnit + (remainder > 0 ? 1 : 0));
      const su8Items = shuffleArray(BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU8')).slice(0, perUnit + (remainder > 1 ? 1 : 0));
      const su9Items = shuffleArray(BMAN121_QUESTIONS.filter(q => q.studyUnit === 'SU9')).slice(0, perUnit);

      selected = [...su7Items, ...su8Items, ...su9Items];
      if (state.shuffleQuestions) {
        selected = shuffleArray(selected);
      }
    } else {
      if (state.shuffleQuestions) {
        pool = shuffleArray(pool);
      }
      selected = pool.slice(0, count);
    }

    // Process questions and shuffle options if enabled
    return selected.map(rawQ => {
      const q = JSON.parse(JSON.stringify(rawQ)); // Deep clone
      const originalCorrectOption = q.options[q.correctIndex];

      if (state.shuffleOptions) {
        // Map original option indices to preserve correct answer tracking
        const indexedOptions = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correctIndex }));
        const shuffled = shuffleArray(indexedOptions);
        q.options = shuffled.map(item => item.opt);
        q.correctIndex = shuffled.findIndex(item => item.isCorrect);
      }

      q.originalCorrectOptionText = originalCorrectOption;
      return q;
    });
  }

  function startQuiz(mode) {
    state.mode = mode;
    state.shuffleQuestions = el.settingShuffleQuestions ? el.settingShuffleQuestions.checked : true;
    state.shuffleOptions = el.settingShuffleOptions ? el.settingShuffleOptions.checked : true;
    state.instantFeedback = (mode === 'practice' || mode === 'rapid20' || (el.settingInstantFeedback && el.settingInstantFeedback.checked));

    state.questions = prepareQuestions(mode);
    if (!state.questions || state.questions.length === 0) {
      alert('No questions available for the selected mode.');
      return;
    }

    state.currentIndex = 0;
    state.userAnswers = {};
    state.flagged.clear();
    state.isSubmitted = false;
    state.startTime = new Date();
    state.endTime = null;

    // Timer setup
    clearInterval(state.timerInterval);
    if (mode === 'mock') {
      // 50 minutes for 40 questions (or scaled: 1.25 mins per question)
      state.timeRemaining = Math.max(10, Math.round(state.questions.length * 75)); // 75 seconds per question
      startTimer();
    } else {
      state.timeRemaining = 0;
      startPracticeStopwatch();
    }

    // Set badge
    updateModeBadge();
    showView('test');
    renderQuestion(state.currentIndex);
    updateNavigatorModal();
  }

  function updateModeBadge() {
    if (!el.testModeBadge) return;
    const badges = {
      rapid20: '⚡ Fast 20-Question Rapid Quiz',
      mock: '⏱️ Full Mock Exam (Timed)',
      practice: '💡 Study Mode (Instant Feedback)',
      su7: '🏭 SU7: Operations Management',
      su8: '🎯 SU8: Marketing Management',
      su9: '💼 SU9: Finance & HR Management',
      remedial: '🎯 Remedial Missed Questions'
    };
    el.testModeBadge.textContent = badges[state.mode] || 'Quiz Session';
  }

  // =========================================================================
  // Timer Functions
  // =========================================================================
  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function startTimer() {
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();

      if (state.timeRemaining <= 300 && el.testTimer) {
        el.testTimer.classList.add('warning');
      }

      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        alert('Time has expired! Submitting your exam for grading.');
        submitExam();
      }
    }, 1000);
  }

  function startPracticeStopwatch() {
    updateStopwatchDisplay();
    state.timerInterval = setInterval(() => {
      state.timeRemaining++;
      updateStopwatchDisplay();
    }, 1000);
  }

  function updateTimerDisplay() {
    if (el.testTimer) {
      el.testTimer.textContent = `⏳ ${formatTime(Math.max(0, state.timeRemaining))}`;
    }
  }

  function updateStopwatchDisplay() {
    if (el.testTimer) {
      el.testTimer.textContent = `⏱️ ${formatTime(state.timeRemaining)}`;
      el.testTimer.classList.remove('warning');
    }
  }

  // =========================================================================
  // Question Rendering & Interaction
  // =========================================================================
  function renderQuestion(index) {
    if (index < 0 || index >= state.questions.length) return;
    state.currentIndex = index;
    const q = state.questions[index];

    // Progress and counters
    const currentNum = index + 1;
    const total = state.questions.length;
    if (el.questionCounter) el.questionCounter.textContent = `Question ${currentNum} of ${total}`;
    if (el.progressBarFill) el.progressBarFill.style.width = `${(currentNum / total) * 100}%`;

    // Unit tag
    if (el.questionUnitTag) {
      el.questionUnitTag.innerHTML = `<span>${q.studyUnit}</span> • ${q.topic || q.unitTitle}`;
    }

    // Flag button state
    if (el.btnFlag) {
      const isFlagged = state.flagged.has(q.id);
      el.btnFlag.classList.toggle('flagged', isFlagged);
      el.btnFlag.innerHTML = isFlagged ? '🚩 Flagged' : '🏳️ Flag for Review';
    }

    // Question scenario text
    if (el.questionText) {
      el.questionText.textContent = q.question;
    }

    // Render options
    renderOptions(q);

    // Render explanation if already answered in instant mode or review
    const selectedAns = state.userAnswers[q.id];
    if (state.instantFeedback && selectedAns !== undefined) {
      renderExplanation(q, selectedAns);
    } else {
      if (el.explanationBox) {
        el.explanationBox.style.display = 'none';
        el.explanationBox.innerHTML = '';
      }
    }

    // Update bottom nav buttons
    if (el.btnPrev) el.btnPrev.disabled = index === 0;
    if (el.btnNext) {
      if (index === total - 1) {
        el.btnNext.style.display = 'none';
        if (el.btnSubmitExam) el.btnSubmitExam.style.display = 'inline-flex';
      } else {
        el.btnNext.style.display = 'inline-flex';
        if (el.btnSubmitExam) el.btnSubmitExam.style.display = 'none';
      }
    }
  }

  function renderOptions(q) {
    if (!el.optionsList) return;
    el.optionsList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    const selectedIdx = state.userAnswers[q.id];
    const isAnswered = selectedIdx !== undefined;

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-item';
      btn.setAttribute('data-index', optIdx);

      // Classes based on answer status
      if (selectedIdx === optIdx) {
        btn.classList.add('selected');
      }

      if (state.instantFeedback && isAnswered) {
        btn.disabled = true;
        if (optIdx === q.correctIndex) {
          btn.classList.add('correct');
        } else if (optIdx === selectedIdx) {
          btn.classList.add('wrong');
        }
      }

      const letterBadge = document.createElement('span');
      letterBadge.className = 'option-letter';
      letterBadge.textContent = letters[optIdx];

      const textSpan = document.createElement('span');
      textSpan.className = 'option-text';
      textSpan.textContent = optText;

      btn.appendChild(letterBadge);
      btn.appendChild(textSpan);

      btn.addEventListener('click', () => selectOption(optIdx));
      el.optionsList.appendChild(btn);
    });
  }

  function selectOption(optIdx) {
    const q = state.questions[state.currentIndex];
    state.userAnswers[q.id] = optIdx;

    if (state.instantFeedback) {
      renderOptions(q);
      renderExplanation(q, optIdx);
    } else {
      // In mock mode, simply highlight the selected option
      const items = el.optionsList.querySelectorAll('.option-item');
      items.forEach((item, idx) => {
        item.classList.toggle('selected', idx === optIdx);
      });
    }

    updateNavigatorModal();
  }

  function renderExplanation(q, userChoice) {
    if (!el.explanationBox) return;
    const isCorrect = userChoice === q.correctIndex;
    const exp = q.explanation || {};

    el.explanationBox.className = `explanation-box ${isCorrect ? 'correct-box' : 'wrong-box'}`;
    el.explanationBox.style.display = 'block';

    const headerClass = isCorrect ? 'correct-text' : 'wrong-text';
    const headerTitle = isCorrect ? '✅ Correct Answer!' : '❌ Incorrect Selection';

    let distractorHtml = '';
    if (Array.isArray(exp.whyDistractors) && exp.whyDistractors.length > 0) {
      distractorHtml = `
        <div class="explanation-section">
          <h4>🔍 Why the Distractors are Incorrect:</h4>
          <ul class="distractor-list">
            ${exp.whyDistractors.map(d => `<li class="distractor-item">${escapeHtml(d)}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    el.explanationBox.innerHTML = `
      <div class="explanation-header ${headerClass}">
        ${headerTitle}
      </div>
      <div class="explanation-summary">
        ${escapeHtml(exp.summary || '')}
      </div>
      <div class="explanation-section">
        <h4>🎯 Theoretical Rationale:</h4>
        <p>${escapeHtml(exp.whyCorrect || '')}</p>
      </div>
      ${distractorHtml}
      <div class="explanation-ref">
        📚 Reference: ${escapeHtml(exp.reference || 'BMAN121 Prescribed Syllabus')}
      </div>
    `;
  }

  function toggleFlagCurrent() {
    const q = state.questions[state.currentIndex];
    if (!q) return;

    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }

    const isFlagged = state.flagged.has(q.id);
    if (el.btnFlag) {
      el.btnFlag.classList.toggle('flagged', isFlagged);
      el.btnFlag.innerHTML = isFlagged ? '🚩 Flagged' : '🏳️ Flag for Review';
    }
    updateNavigatorModal();
  }

  // =========================================================================
  // Navigator Modal
  // =========================================================================
  function openNavigatorModal() {
    updateNavigatorModal();
    if (el.navModal) el.navModal.classList.add('active');
  }

  function closeNavigatorModal() {
    if (el.navModal) el.navModal.classList.remove('active');
  }

  function updateNavigatorModal() {
    if (!el.navGrid) return;
    el.navGrid.innerHTML = '';

    state.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'nav-grid-btn';
      btn.textContent = idx + 1;

      if (idx === state.currentIndex) {
        btn.classList.add('current');
      }
      if (state.userAnswers[q.id] !== undefined) {
        btn.classList.add('answered');
      }
      if (state.flagged.has(q.id)) {
        btn.classList.add('flagged');
      }

      btn.addEventListener('click', () => {
        renderQuestion(idx);
        closeNavigatorModal();
      });

      el.navGrid.appendChild(btn);
    });
  }

  // =========================================================================
  // Submission & Scoring
  // =========================================================================
  function confirmSubmit() {
    const unansweredCount = state.questions.filter(q => state.userAnswers[q.id] === undefined).length;
    let msg = 'Are you sure you want to finish and submit your exam?';
    if (unansweredCount > 0) {
      msg = `You still have ${unansweredCount} unanswered question(s). Are you sure you want to submit?`;
    }
    if (confirm(msg)) {
      submitExam();
    }
  }

  function submitExam() {
    clearInterval(state.timerInterval);
    state.isSubmitted = true;
    state.endTime = new Date();

    // Grade Test
    let correctCount = 0;
    const unitBreakdown = {
      SU7: { total: 0, correct: 0, title: 'SU7: Operations Management' },
      SU8: { total: 0, correct: 0, title: 'SU8: Marketing Management' },
      SU9: { total: 0, correct: 0, title: 'SU9: Finance, HR & Labour Law' }
    };

    const missedIds = [];

    state.questions.forEach(q => {
      const u = q.studyUnit || 'SU7';
      if (!unitBreakdown[u]) {
        unitBreakdown[u] = { total: 0, correct: 0, title: q.unitTitle };
      }
      unitBreakdown[u].total++;

      const userAns = state.userAnswers[q.id];
      if (userAns !== undefined && userAns === q.correctIndex) {
        correctCount++;
        unitBreakdown[u].correct++;
      } else {
        missedIds.push(q.id);
      }
    });

    state.missedQuestionIds = missedIds;

    const totalQuestions = state.questions.length;
    const scorePct = Math.round((correctCount / totalQuestions) * 100);

    // Save to local storage for persistent analytics
    savePerformance(scorePct, correctCount, totalQuestions, unitBreakdown);

    // Render Results Screen
    renderResults(scorePct, correctCount, totalQuestions, unitBreakdown);
    showView('results');
  }

  function savePerformance(pct, correct, total, breakdown) {
    const resultRecord = {
      date: new Date().toLocaleDateString(),
      scorePct: pct,
      correct: correct,
      total: total,
      mode: state.mode,
      breakdown: breakdown
    };
    try {
      localStorage.setItem('bman121_last_result', JSON.stringify(resultRecord));
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }
  }

  function renderPreviousScore() {
    if (!el.lastScoreBanner) return;
    try {
      const saved = localStorage.getItem('bman121_last_result');
      if (saved) {
        const data = JSON.parse(saved);
        el.lastScoreBanner.style.display = 'block';
        el.lastScoreBanner.innerHTML = `
          <strong>📊 Previous Test Attempt (${data.date}):</strong> 
          Scored <strong>${data.scorePct}%</strong> (${data.correct}/${data.total} marks). 
          Keep grinding to secure your distinction!
        `;
      } else {
        el.lastScoreBanner.style.display = 'none';
      }
    } catch (e) {
      el.lastScoreBanner.style.display = 'none';
    }
  }

  function renderResults(pct, correct, total, breakdown) {
    // Score Badge & percentage
    if (el.scorePercentage) el.scorePercentage.textContent = `${pct}%`;
    if (el.scoreDetailsText) el.scoreDetailsText.textContent = `You achieved ${correct} out of ${total} marks.`;

    if (el.scoreBadge) {
      if (pct >= 75) {
        el.scoreBadge.className = 'score-badge distinction';
        el.scoreBadge.textContent = '🏆 Distinction Standard (≥75%)';
      } else if (pct >= 50) {
        el.scoreBadge.className = 'score-badge pass';
        el.scoreBadge.textContent = '✅ Satisfactory Pass (50%–74%)';
      } else {
        el.scoreBadge.className = 'score-badge at-risk';
        el.scoreBadge.textContent = '⚠️ Attention Needed (<50%)';
      }
    }

    // Stats Grid
    if (el.statTotal) el.statTotal.textContent = total;
    if (el.statCorrect) el.statCorrect.textContent = correct;
    if (el.statIncorrect) el.statIncorrect.textContent = total - correct;

    // Time calculations
    const elapsedSeconds = Math.round((state.endTime - state.startTime) / 1000);
    const avgSeconds = Math.round(elapsedSeconds / total);
    if (el.statTime) el.statTime.textContent = formatTime(elapsedSeconds);
    if (el.statAvgTime) el.statAvgTime.textContent = `${avgSeconds}s`;

    // Render Chapter Breakdown Cards
    renderChapterBreakdown(breakdown);

    // Enable/disable Remedial Button
    if (el.btnPracticeMissed) {
      if (state.missedQuestionIds.length > 0) {
        el.btnPracticeMissed.style.display = 'inline-flex';
        el.btnPracticeMissed.textContent = `🎯 Drill Missed Questions (${state.missedQuestionIds.length})`;
      } else {
        el.btnPracticeMissed.style.display = 'none';
      }
    }

    // Render Review Log
    state.activeReviewFilter = 'all';
    renderReviewLog();
  }

  function renderChapterBreakdown(breakdown) {
    if (!el.chapterBreakdownContainer) return;
    el.chapterBreakdownContainer.innerHTML = '';

    const diagnostics = {
      SU7: {
        weak: '⚠️ Priority Review: Re-read Operations Transformation, JIT/Kanban pull systems, Product vs Process layouts, and the EOQ inventory model.',
        good: '✨ Solid Mastery: Excellent grasp of operations layouts, capacity planning, and total quality management.'
      },
      SU8: {
        weak: '⚠️ Priority Review: Focus on Market Segmentation criteria, 4 Ps marketing mix, Product Life Cycle stages, and consumer decision-making.',
        good: '✨ Solid Mastery: Comprehensive command of marketing strategies, pricing tactics, and distribution coverage.'
      },
      SU9: {
        weak: '⚠️ Priority Review: Memorise BCEA working hours/leave days, LRA dismissal categories, and Financial Ratio formulas (Current & Acid-Test).',
        good: '✨ Solid Mastery: Strong understanding of financial ratios, working capital management, and SA labour legislation.'
      }
    };

    Object.keys(breakdown).forEach(key => {
      const item = breakdown[key];
      const unitPct = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;

      let statusColor = 'var(--error)';
      let statusBg = 'var(--error-bg)';
      let statusText = 'Needs Review';
      let diagText = diagnostics[key]?.weak || 'Review syllabus materials for this study unit.';

      if (unitPct >= 80) {
        statusColor = 'var(--success)';
        statusBg = 'var(--success-bg)';
        statusText = 'Mastered';
        diagText = diagnostics[key]?.good || 'Great performance in this study unit.';
      } else if (unitPct >= 60) {
        statusColor = 'var(--warning)';
        statusBg = 'var(--warning-bg)';
        statusText = 'Proficient';
      }

      const card = document.createElement('div');
      card.className = 'chapter-card';
      card.innerHTML = `
        <div class="chapter-header">
          <div class="chapter-title">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${item.correct} / ${item.total} correct</p>
          </div>
          <span class="chapter-score-pill" style="color: ${statusColor}; background: ${statusBg};">
            ${unitPct}% • ${statusText}
          </span>
        </div>
        <div class="chapter-progress">
          <div class="chapter-progress-bar" style="width: ${unitPct}%; background: ${statusColor};"></div>
        </div>
        <div class="chapter-diagnosis">
          ${diagText}
        </div>
      `;
      el.chapterBreakdownContainer.appendChild(card);
    });
  }

  // =========================================================================
  // Review Log & Filtering
  // =========================================================================
  function renderReviewLog() {
    if (!el.reviewList) return;
    el.reviewList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    let filteredQuestions = state.questions;

    if (state.activeReviewFilter === 'missed') {
      filteredQuestions = state.questions.filter(q => state.userAnswers[q.id] !== q.correctIndex);
    } else if (state.activeReviewFilter === 'flagged') {
      filteredQuestions = state.questions.filter(q => state.flagged.has(q.id));
    } else if (state.activeReviewFilter === 'su7') {
      filteredQuestions = state.questions.filter(q => q.studyUnit === 'SU7');
    } else if (state.activeReviewFilter === 'su8') {
      filteredQuestions = state.questions.filter(q => q.studyUnit === 'SU8');
    } else if (state.activeReviewFilter === 'su9') {
      filteredQuestions = state.questions.filter(q => q.studyUnit === 'SU9');
    }

    if (filteredQuestions.length === 0) {
      el.reviewList.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No questions match the selected filter.
        </div>
      `;
      return;
    }

    filteredQuestions.forEach((q, idx) => {
      const userAns = state.userAnswers[q.id];
      const isCorrect = userAns === q.correctIndex;
      const exp = q.explanation || {};

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'correct-item' : 'wrong-item'}`;

      let userAnsText = userAns !== undefined ? `${letters[userAns]}: ${escapeHtml(q.options[userAns])}` : '<em>Unanswered</em>';
      let correctAnsText = `${letters[q.correctIndex]}: ${escapeHtml(q.options[q.correctIndex])}`;

      let distractorsHtml = '';
      if (Array.isArray(exp.whyDistractors) && exp.whyDistractors.length > 0) {
        distractorsHtml = `
          <div style="margin-top: 0.6rem;">
            <strong style="font-size: 0.85rem; color: var(--text-primary);">Distractor Breakdown:</strong>
            <ul class="distractor-list" style="margin-top: 0.35rem;">
              ${exp.whyDistractors.map(d => `<li class="distractor-item">${escapeHtml(d)}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      item.innerHTML = `
        <div class="review-item-header">
          <span class="question-unit-tag"><span>${q.studyUnit}</span> • ${escapeHtml(q.topic || '')}</span>
          <span style="font-size: 0.85rem; font-weight: 800; color: ${isCorrect ? 'var(--success)' : 'var(--error)'};">
            ${isCorrect ? '✅ Correct' : '❌ Incorrect'}
          </span>
        </div>
        <p style="font-size: 0.95rem; font-weight: 600; margin-bottom: 0.85rem; color: var(--text-primary);">
          ${escapeHtml(q.question)}
        </p>
        <div style="font-size: 0.88rem; margin-bottom: 0.4rem;">
          <strong>Your Answer:</strong> <span style="color: ${isCorrect ? 'var(--success)' : 'var(--error)'}; font-weight: 700;">${userAnsText}</span>
        </div>
        ${!isCorrect ? `<div style="font-size: 0.88rem; margin-bottom: 0.6rem;"><strong>Correct Answer:</strong> <span style="color: var(--success); font-weight: 700;">${correctAnsText}</span></div>` : ''}
        <div class="explanation-box ${isCorrect ? 'correct-box' : 'wrong-box'}" style="margin-top: 0.85rem; padding: 1rem;">
          <div class="explanation-summary" style="margin-bottom: 0.5rem;">${escapeHtml(exp.summary || '')}</div>
          <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${escapeHtml(exp.whyCorrect || '')}</div>
          ${distractorsHtml}
          <div class="explanation-ref" style="margin-top: 0.5rem;">📚 ${escapeHtml(exp.reference || '')}</div>
        </div>
      `;

      el.reviewList.appendChild(item);
    });
  }

  // =========================================================================
  // Interactive Calculators & Tools
  // =========================================================================
  function initTools() {
    // Break-even calculator
    if (el.btnCalcBE) {
      el.btnCalcBE.addEventListener('click', () => {
        const fc = parseFloat(document.getElementById('beFixedCost').value) || 0;
        const sp = parseFloat(document.getElementById('bePrice').value) || 0;
        const vc = parseFloat(document.getElementById('beVarCost').value) || 0;
        const resultEl = document.getElementById('beResult');

        if (sp <= vc) {
          resultEl.textContent = 'Error: Selling Price must be greater than Variable Cost.';
          return;
        }
        const cm = sp - vc;
        const beUnits = Math.ceil(fc / cm);
        const beRevenue = beUnits * sp;
        resultEl.innerHTML = `Break-Even Quantity: <strong>${beUnits.toLocaleString()} units</strong> (Revenue: R${beRevenue.toLocaleString()})`;
      });
    }

    // EOQ calculator
    if (el.btnCalcEOQ) {
      el.btnCalcEOQ.addEventListener('click', () => {
        const d = parseFloat(document.getElementById('eoqDemand').value) || 0;
        const s = parseFloat(document.getElementById('eoqOrderCost').value) || 0;
        const h = parseFloat(document.getElementById('eoqHoldCost').value) || 0;
        const resultEl = document.getElementById('eoqResult');

        if (h <= 0 || d <= 0 || s <= 0) {
          resultEl.textContent = 'Please enter positive values for all fields.';
          return;
        }
        const eoq = Math.round(Math.sqrt((2 * d * s) / h));
        resultEl.innerHTML = `Optimal Order Quantity (EOQ): <strong>${eoq.toLocaleString()} units</strong>`;
      });
    }

    // Financial Ratios calculator
    if (el.btnCalcRatios) {
      el.btnCalcRatios.addEventListener('click', () => {
        const ca = parseFloat(document.getElementById('ratioCA').value) || 0;
        const cl = parseFloat(document.getElementById('ratioCL').value) || 0;
        const inv = parseFloat(document.getElementById('ratioInv').value) || 0;
        const resultEl = document.getElementById('ratioResult');

        if (cl <= 0) {
          resultEl.textContent = 'Current liabilities must be greater than zero.';
          return;
        }
        const cr = (ca / cl).toFixed(2);
        const qr = ((ca - inv) / cl).toFixed(2);
        const nwc = ca - cl;

        resultEl.innerHTML = `
          Current Ratio: <strong>${cr}:1</strong> | 
          Quick Ratio: <strong>${qr}:1</strong> | 
          Net Working Capital: <strong>R${nwc.toLocaleString()}</strong>
        `;
      });
    }
  }

  // =========================================================================
  // Keyboard Shortcuts
  // =========================================================================
  function initKeyboardNav() {
    window.addEventListener('keydown', (e) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (el.viewTest && el.viewTest.classList.contains('active')) {
        const key = e.key.toUpperCase();
        if (['1', 'A'].includes(key)) {
          selectOption(0);
        } else if (['2', 'B'].includes(key)) {
          selectOption(1);
        } else if (['3', 'C'].includes(key)) {
          selectOption(2);
        } else if (['4', 'D'].includes(key)) {
          selectOption(3);
        } else if (key === 'ARROWLEFT' || key === 'P') {
          if (state.currentIndex > 0) renderQuestion(state.currentIndex - 1);
        } else if (key === 'ARROWRIGHT' || key === 'N') {
          if (state.currentIndex < state.questions.length - 1) renderQuestion(state.currentIndex + 1);
        } else if (key === 'F') {
          toggleFlagCurrent();
        }
      }
    });
  }

  // =========================================================================
  // Helper functions
  // =========================================================================
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // =========================================================================
  // Initialization & Event Binding
  // =========================================================================
  function init() {
    initElements();
    initTheme();
    initTools();
    initKeyboardNav();

    // Brand click returns to hub
    if (el.brandHome) {
      el.brandHome.addEventListener('click', (e) => {
        e.preventDefault();
        if (el.viewTest && el.viewTest.classList.contains('active')) {
          if (confirm('Exit your current test session and return to the main dashboard?')) {
            clearInterval(state.timerInterval);
            showView('hub');
          }
        } else {
          showView('hub');
        }
      });
    }

    // Tab buttons (Cheat Sheet vs Quiz Hub)
    if (el.tabBtnQuiz) {
      el.tabBtnQuiz.addEventListener('click', () => {
        if (el.viewTest && el.viewTest.classList.contains('active')) {
          if (confirm('Exit current quiz and return to Quiz Hub?')) {
            clearInterval(state.timerInterval);
            showView('hub');
          }
        } else {
          showView('hub');
        }
      });
    }
    if (el.tabBtnCheatSheet) {
      el.tabBtnCheatSheet.addEventListener('click', () => {
        showView('cheatsheet');
      });
    }
    if (el.btnStartRapid20) {
      el.btnStartRapid20.addEventListener('click', () => {
        startQuiz('rapid20');
      });
    }

    // Mode Card triggers
    if (el.modeCards) {
      el.modeCards.forEach(card => {
        card.addEventListener('click', () => {
          const mode = card.getAttribute('data-mode');
          if (mode) startQuiz(mode);
        });
      });
    }

    // Test Navigation buttons
    if (el.btnPrev) {
      el.btnPrev.addEventListener('click', () => {
        if (state.currentIndex > 0) renderQuestion(state.currentIndex - 1);
      });
    }
    if (el.btnNext) {
      el.btnNext.addEventListener('click', () => {
        if (state.currentIndex < state.questions.length - 1) renderQuestion(state.currentIndex + 1);
      });
    }
    if (el.btnSubmitExam) {
      el.btnSubmitExam.addEventListener('click', confirmSubmit);
    }
    if (el.btnFlag) {
      el.btnFlag.addEventListener('click', toggleFlagCurrent);
    }
    if (el.btnOpenNav) {
      el.btnOpenNav.addEventListener('click', openNavigatorModal);
    }
    if (el.btnCloseNav) {
      el.btnCloseNav.addEventListener('click', closeNavigatorModal);
    }
    if (el.btnExitTest) {
      el.btnExitTest.addEventListener('click', () => {
        if (confirm('Are you sure you want to end this test session and return to the dashboard?')) {
          clearInterval(state.timerInterval);
          showView('hub');
        }
      });
    }

    // Modal background click close
    if (el.navModal) {
      el.navModal.addEventListener('click', (e) => {
        if (e.target === el.navModal) closeNavigatorModal();
      });
    }

    // Results Actions
    if (el.btnRetakeTest) {
      el.btnRetakeTest.addEventListener('click', () => startQuiz(state.mode));
    }
    if (el.btnPracticeMissed) {
      el.btnPracticeMissed.addEventListener('click', () => startQuiz('remedial'));
    }
    if (el.btnBackHome) {
      el.btnBackHome.addEventListener('click', () => showView('hub'));
    }

    // Review Filters
    if (el.reviewFilterBtns) {
      el.reviewFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          el.reviewFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.activeReviewFilter = btn.getAttribute('data-filter') || 'all';
          renderReviewLog();
        });
      });
    }

    // Initial View setup
    showView('hub');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
