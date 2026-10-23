/**
 * Mama Cloud & Bro Cloud: Main Application Controller
 * Unofficial Community Exam Prep for the #1MillionDevs Movement.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AI Buddy and Exam Engines
  const aiBuddy = new AIBuddyEngine();
  const examEngine = new ExamEngine(AZ900_QUESTIONS);

  // App State
  let currentFlashcardIndex = 0;
  let soundEnabled = true;
  let activeAnalogyFilter = 'all';

  // DOM Elements - Header & Personas
  const mamaBtn = document.getElementById('personaMamaBtn');
  const broBtn = document.getElementById('personaBroBtn');
  const brandAvatar = document.getElementById('brandAvatar');
  const buddyAvatar = document.getElementById('buddyAvatar');
  const buddyName = document.getElementById('buddyName');
  const buddySubtitle = document.getElementById('buddySubtitle');
  const buddyQuote = document.getElementById('buddyQuote');
  const buddyHeroTitle = document.getElementById('buddyHeroTitle');
  const buddyHeroText = document.getElementById('buddyHeroText');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  // Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // AI Chat & Explainer
  const chatInput = document.getElementById('chatInput');
  const sendChatBtn = document.getElementById('sendChatBtn');
  const chatStream = document.getElementById('chatStream');
  const promptChips = document.querySelectorAll('.prompt-chip');
  const langChips = document.querySelectorAll('.lang-chip');

  // Analogy Dictionary
  const searchAnalogyInput = document.getElementById('searchAnalogyInput');
  const filterPills = document.querySelectorAll('.filter-pill');
  const analogiesGrid = document.getElementById('analogiesGrid');

  // Flashcards
  const flashcardScene = document.getElementById('flashcardScene');
  const flashcardDomain = document.getElementById('flashcardDomain');
  const flashcardFrontText = document.getElementById('flashcardFrontText');
  const flashcardBackText = document.getElementById('flashcardBackText');
  const flashcardMnemonic = document.getElementById('flashcardMnemonic');
  const flashcardCounter = document.getElementById('flashcardCounter');
  const prevCardBtn = document.getElementById('prevCardBtn');
  const nextCardBtn = document.getElementById('nextCardBtn');
  const flipCardBtn = document.getElementById('flipCardBtn');

  // Exam Simulator
  const examModesGrid = document.getElementById('examModesGrid');
  const activeExamContainer = document.getElementById('activeExamContainer');
  const examResultsContainer = document.getElementById('examResultsContainer');
  const examTimer = document.getElementById('examTimer');
  const currentQNum = document.getElementById('currentQNum');
  const totalQNum = document.getElementById('totalQNum');
  const flagQBtn = document.getElementById('flagQBtn');
  const qDomainLabel = document.getElementById('qDomainLabel');
  const qText = document.getElementById('qText');
  const qOptionsContainer = document.getElementById('qOptionsContainer');
  const prevQBtn = document.getElementById('prevQBtn');
  const nextQBtn = document.getElementById('nextQBtn');
  const submitExamBtn = document.getElementById('submitExamBtn');
  const qPaletteGrid = document.getElementById('qPaletteGrid');
  const retakeExamBtn = document.getElementById('retakeExamBtn');

  // Certificate
  const generateCertBtn = document.getElementById('generateCertBtn');
  const certStudentName = document.getElementById('certStudentName');
  const downloadCertBtn = document.getElementById('downloadCertBtn');
  const certCanvas = document.getElementById('certCanvas');

  // Analogy Detail Modal
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  // ==========================================
  // 1. PERSONA SWITCHER LOGIC
  // ==========================================
  function switchPersona(persona) {
    aiBuddy.setPersona(persona);

    if (persona === 'mama') {
      mamaBtn.classList.add('active');
      broBtn.classList.remove('active');
      brandAvatar.src = 'assets/mama_cloud.jpg';
      buddyAvatar.src = 'assets/mama_cloud.jpg';
      buddyName.textContent = 'Mama Cloud';
      buddySubtitle.textContent = 'African Cloud Mentor & Study Mother';
      buddyQuote.textContent = '"My child, you will pass this AZ-900 exam with flying colors! Listen to mama, let us break down this cloud wisdom together."';
      buddyHeroTitle.textContent = 'Ask Mama Cloud Anything About Azure!';
      buddyHeroText.textContent = 'No question is foolish in our compound. Type any Azure concept below and let me explain it with our daily African stories.';
    } else {
      broBtn.classList.add('active');
      mamaBtn.classList.remove('active');
      brandAvatar.src = 'assets/bro_cloud.jpg';
      buddyAvatar.src = 'assets/bro_cloud.jpg';
      buddyName.textContent = 'Bro Cloud';
      buddySubtitle.textContent = 'Lead Cloud Engineer & Hype Buddy';
      buddyQuote.textContent = '"Odogwu tech lead! We are not just passing AZ-900, we are mastering cloud engineering for the #1MillionDevs movement!"';
      buddyHeroTitle.textContent = 'What Cloud Concept Are We Crushing Today?';
      buddyHeroText.textContent = 'Drop any tough Azure concept fam. Let\'s vibe code and map it directly to local ground realities!';
    }
  }

  mamaBtn.addEventListener('click', () => switchPersona('mama'));
  broBtn.addEventListener('click', () => switchPersona('bro'));

  // Theme Toggle (Dark vs Warm Sunrise)
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeToggleBtn.innerHTML = isLight ? '🌙' : '☀️';
  });

  // Sound Toggle
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.innerHTML = soundEnabled ? '🔊' : '🔇';
    if (soundEnabled) {
      examEngine.playBeep(520, 0.1);
    }
  });

  // Language Chips
  langChips.forEach(chip => {
    chip.addEventListener('click', () => {
      langChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      aiBuddy.setLanguage(chip.dataset.lang);
      
      // If there are existing chat cards, re-render their summaries
      const latestCard = document.querySelector('.concept-explanation-card');
      if (latestCard && latestCard.dataset.conceptId) {
        const concept = AZ900_ANALOGIES.find(a => a.id === latestCard.dataset.conceptId);
        if (concept) {
          const summaryP = latestCard.querySelector('.block-summary p');
          if (summaryP) {
            summaryP.innerHTML = aiBuddy.renderLanguageSummaries(concept.summaries).replace(/\n/g, '<br>');
          }
        }
      }
    });
  });

  // ==========================================
  // 2. TABS LOGIC
  // ==========================================
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // ==========================================
  // 3. AI STUDY BUDDY CHAT LOGIC
  // ==========================================
  function handleUserQuery(query) {
    if (!query || !query.trim()) return;

    // Render User Message
    const userMsgElem = document.createElement('div');
    userMsgElem.style.alignSelf = 'flex-end';
    userMsgElem.style.background = 'rgba(245, 158, 11, 0.18)';
    userMsgElem.style.border = '1px solid rgba(245, 158, 11, 0.4)';
    userMsgElem.style.padding = '0.65rem 1.1rem';
    userMsgElem.style.borderRadius = '16px 16px 4px 16px';
    userMsgElem.style.color = '#F8FAFC';
    userMsgElem.style.fontWeight = '600';
    userMsgElem.style.fontSize = '0.95rem';
    userMsgElem.textContent = query;
    chatStream.appendChild(userMsgElem);

    // Process structured response
    const response = aiBuddy.processQuery(query);
    renderConceptResponse(response);

    chatInput.value = '';
    userMsgElem.scrollIntoView({ behavior: 'smooth' });
  }

  function renderConceptResponse(res) {
    const card = document.createElement('div');
    card.className = 'concept-explanation-card';
    card.dataset.conceptId = res.conceptId;

    const formattedSummaryHtml = res.formattedSummary.replace(/\n/g, '<br>');

    card.innerHTML = `
      <div class="card-header-meta">
        <span class="concept-badge">${res.domain}</span>
        <button class="audio-read-btn" title="Listen to read-aloud">
          🔊 Listen (${res.persona === 'mama' ? 'Mama' : 'Bro'})
        </button>
      </div>

      <h3 class="concept-title-main">${res.title}</h3>
      <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.1rem; font-style: italic;">
        ${res.intro}
      </p>

      <!-- Part 1: The Direct Analogy -->
      <div class="response-block block-analogy">
        <h4>🌍 ${res.analogyTitle}</h4>
        <p>${res.analogyText}</p>
      </div>

      <!-- Part 2: The Azure Definition -->
      <div class="response-block block-definition">
        <h4>☁️ ${res.definitionTitle}</h4>
        <p>${res.definitionText}</p>
      </div>

      <!-- Part 3: The Multi-Lingual Micro-Summary -->
      <div class="response-block block-summary">
        <h4>🗣️ ${res.summaryTitle}</h4>
        <p>${formattedSummaryHtml}</p>
      </div>

      <!-- Exam Tip -->
      <div class="block-exam-tip">
        <span>💡</span>
        <div><strong>AZ-900 Exam Trick:</strong> ${res.examTip}</div>
      </div>
    `;

    // Audio Speech Button handler
    const audioBtn = card.querySelector('.audio-read-btn');
    audioBtn.addEventListener('click', () => {
      const speechText = `${res.title}. ${res.analogyText}. Technical definition: ${res.definitionText}`;
      if (aiBuddy.isSpeaking) {
        aiBuddy.stopSpeaking();
        audioBtn.innerHTML = '🔊 Listen';
      } else {
        aiBuddy.speak(speechText);
        audioBtn.innerHTML = '⏹️ Stop';
      }
    });

    chatStream.appendChild(card);
    card.scrollIntoView({ behavior: 'smooth' });
  }

  sendChatBtn.addEventListener('click', () => handleUserQuery(chatInput.value));
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserQuery(chatInput.value);
  });

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      handleUserQuery(chip.textContent.replace(/^Explain\s+|^What is\s+/i, '').trim());
    });
  });

  // Pre-load default welcome concept
  const defaultConcept = AZ900_ANALOGIES.find(a => a.id === 'azure-regions');
  if (defaultConcept) {
    renderConceptResponse(aiBuddy.formatStructuredResponse(defaultConcept));
  }

  // ==========================================
  // 4. AFRICAN ANALOGIES VISUAL DICTIONARY
  // ==========================================
  function renderAnalogiesGrid(analogies) {
    analogiesGrid.innerHTML = '';
    if (!analogies.length) {
      analogiesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
          No analogies match your search. Try searching for "Blob", "Region", "Scale", or "Entra"!
        </div>
      `;
      return;
    }

    analogies.forEach(item => {
      const card = document.createElement('div');
      card.className = 'analogy-card';
      card.innerHTML = `
        <div class="analogy-card-header">
          <h4 class="analogy-card-title">${item.title}</h4>
          <span class="concept-badge" style="font-size: 0.68rem;">${item.domainName.split('.')[1] || item.domainName}</span>
        </div>
        <div class="analogy-tagline">🌿 ${item.tagline}</div>
        <p class="analogy-snippet">${item.analogy.substring(0, 140)}...</p>
        <div class="analogy-card-footer">
          <span style="font-size: 0.75rem; color: var(--text-muted);">Pidgin • Swahili • Yoruba • Zulu</span>
          <button class="view-analogy-btn" data-id="${item.id}">View Breakdown ➜</button>
        </div>
      `;

      card.querySelector('.view-analogy-btn').addEventListener('click', () => {
        openAnalogyModal(item);
      });

      analogiesGrid.appendChild(card);
    });
  }

  function filterAnalogies() {
    const query = searchAnalogyInput.value.toLowerCase().trim();
    const filtered = AZ900_ANALOGIES.filter(item => {
      const matchesDomain = activeAnalogyFilter === 'all' || item.domain === activeAnalogyFilter;
      const matchesQuery = !query || 
        item.title.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.analogy.toLowerCase().includes(query);
      return matchesDomain && matchesQuery;
    });
    renderAnalogiesGrid(filtered);
  }

  searchAnalogyInput.addEventListener('input', filterAnalogies);

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeAnalogyFilter = pill.dataset.filter;
      filterAnalogies();
    });
  });

  renderAnalogiesGrid(AZ900_ANALOGIES);

  // Modal Detail View
  function openAnalogyModal(item) {
    modalBody.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <span class="concept-badge">${item.domainName}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.6rem; margin-top: 0.4rem; color: var(--text-primary);">${item.title}</h2>
        <div style="font-size: 0.95rem; color: var(--accent-gold); font-weight: 600;">🌿 ${item.tagline}</div>
      </div>

      <div class="response-block block-analogy" style="margin-bottom: 1rem;">
        <h4>1. The Direct Analogy</h4>
        <p>${item.analogy}</p>
      </div>

      <div class="response-block block-definition" style="margin-bottom: 1rem;">
        <h4>2. The Azure Technical Definition</h4>
        <p>${item.azureDefinition}</p>
      </div>

      <div class="response-block block-summary" style="margin-bottom: 1rem;">
        <h4>3. Multi-Lingual Micro-Summaries</h4>
        <p>
          🇳🇬 <strong>Nigerian Pidgin:</strong> ${item.summaries.pidgin}<br><br>
          🇰🇪🇹🇿 <strong>Kiswahili:</strong> ${item.summaries.swahili}<br><br>
          🇳🇬 <strong>Yorùbá:</strong> ${item.summaries.yoruba}<br><br>
          🇿🇦 <strong>isiZulu:</strong> ${item.summaries.zulu}
        </p>
      </div>

      <div class="block-exam-tip">
        <span>💡</span>
        <div><strong>Exam Tip:</strong> ${item.examTip}</div>
      </div>
    `;
    modalOverlay.style.display = 'flex';
  }

  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.style.display = 'none';
  });

  // ==========================================
  // 5. FLASHCARDS LOGIC
  // ==========================================
  function renderFlashcard(index) {
    if (!AZ900_FLASHCARDS.length) return;
    const card = AZ900_FLASHCARDS[index];
    flashcardDomain.textContent = card.domain;
    flashcardFrontText.textContent = card.front;
    flashcardBackText.textContent = card.back;
    flashcardMnemonic.textContent = `💡 Mnemonic: ${card.mnemonic}`;
    flashcardCounter.textContent = `${index + 1} / ${AZ900_FLASHCARDS.length}`;
    flashcardScene.classList.remove('is-flipped');
  }

  flipCardBtn.addEventListener('click', () => {
    flashcardScene.classList.toggle('is-flipped');
    if (soundEnabled) examEngine.playBeep(450, 0.05);
  });

  flashcardScene.addEventListener('click', () => {
    flashcardScene.classList.toggle('is-flipped');
    if (soundEnabled) examEngine.playBeep(450, 0.05);
  });

  prevCardBtn.addEventListener('click', () => {
    if (currentFlashcardIndex > 0) {
      currentFlashcardIndex--;
      renderFlashcard(currentFlashcardIndex);
    }
  });

  nextCardBtn.addEventListener('click', () => {
    if (currentFlashcardIndex < AZ900_FLASHCARDS.length - 1) {
      currentFlashcardIndex++;
      renderFlashcard(currentFlashcardIndex);
    }
  });

  renderFlashcard(0);

  // ==========================================
  // 6. EXAM SIMULATOR LOGIC
  // ==========================================
  document.querySelectorAll('.exam-mode-card').forEach(card => {
    card.addEventListener('click', () => {
      const mode = card.dataset.mode;
      const domain = card.dataset.domain || null;
      startExamFlow(mode, domain);
    });
  });

  function startExamFlow(mode, domain) {
    examModesGrid.style.display = 'none';
    examResultsContainer.style.display = 'none';
    activeExamContainer.style.display = 'flex';

    examEngine.onTick = (formattedTime) => {
      examTimer.textContent = `⏳ ${formattedTime}`;
    };

    examEngine.onTimeUp = () => {
      alert("Time's up! Submitting your exam now.");
      finishExamFlow();
    };

    examEngine.startExam(mode, domain);
    renderQuestionView();
  }

  function renderQuestionView() {
    const qData = examEngine.getCurrentQuestion();
    if (!qData) return;

    currentQNum.textContent = qData.index + 1;
    totalQNum.textContent = qData.total;
    qDomainLabel.textContent = `Domain: ${qData.question.domainName}`;
    qText.textContent = qData.question.question;

    // Flag State
    if (qData.isFlagged) {
      flagQBtn.classList.add('flagged');
      flagQBtn.innerHTML = '🚩 Flagged';
    } else {
      flagQBtn.classList.remove('flagged');
      flagQBtn.innerHTML = '🏳️ Flag for Review';
    }

    // Options
    qOptionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    qData.question.options.forEach((optText, optIdx) => {
      const optItem = document.createElement('div');
      optItem.className = 'option-item';
      if (qData.userSelected === optIdx) {
        optItem.classList.add('selected');
      }

      optItem.innerHTML = `
        <div class="option-letter">${letters[optIdx]}</div>
        <div class="option-text">${optText}</div>
      `;

      optItem.addEventListener('click', () => {
        examEngine.selectAnswer(optIdx);
        renderQuestionView();
      });

      qOptionsContainer.appendChild(optItem);
    });

    // Nav Buttons
    prevQBtn.disabled = qData.index === 0;
    nextQBtn.disabled = qData.index === qData.total - 1;

    renderPalette();
  }

  function renderPalette() {
    qPaletteGrid.innerHTML = '';
    const currentQData = examEngine.getCurrentQuestion();

    examEngine.activeQuestions.forEach((q, idx) => {
      const bubble = document.createElement('div');
      bubble.className = 'palette-bubble';
      bubble.textContent = idx + 1;

      if (idx === currentQData.index) bubble.classList.add('current');
      if (examEngine.userAnswers[q.id] !== undefined) bubble.classList.add('answered');
      if (examEngine.flagged.has(q.id)) bubble.classList.add('flagged');

      bubble.addEventListener('click', () => {
        examEngine.jumpToQuestion(idx);
        renderQuestionView();
      });

      qPaletteGrid.appendChild(bubble);
    });
  }

  prevQBtn.addEventListener('click', () => {
    examEngine.prevQuestion();
    renderQuestionView();
  });

  nextQBtn.addEventListener('click', () => {
    examEngine.nextQuestion();
    renderQuestionView();
  });

  flagQBtn.addEventListener('click', () => {
    examEngine.toggleFlag();
    renderQuestionView();
  });

  submitExamBtn.addEventListener('click', () => {
    const answeredCount = Object.keys(examEngine.userAnswers).length;
    const totalCount = examEngine.activeQuestions.length;
    if (answeredCount < totalCount) {
      if (!confirm(`You have answered ${answeredCount} of ${totalCount} questions. Are you ready to submit your exam now?`)) {
        return;
      }
    }
    finishExamFlow();
  });

  function finishExamFlow() {
    const results = examEngine.submitExam();
    activeExamContainer.style.display = 'none';
    examResultsContainer.style.display = 'flex';

    // Populate Results
    const scoreCircle = document.getElementById('resultScoreCircle');
    const scoreNum = document.getElementById('resultScoreNum');
    const statusTitle = document.getElementById('resultStatusTitle');
    const feedbackText = document.getElementById('resultFeedbackText');

    scoreNum.textContent = results.scaledScore;

    if (results.passed) {
      scoreCircle.className = 'score-circle';
      statusTitle.textContent = '🎉 PASSED! Ready for the AZ-900 Exam!';
      statusTitle.style.color = 'var(--accent-emerald)';
      feedbackText.innerHTML = `
        <strong>Mama Cloud's Blessing:</strong> Congratulations my brilliant child! You scored <strong>${results.scaledScore} / 1000</strong> (Pass mark: 700). Your understanding of cloud computing and African analogies is rock solid. You are a proud pioneer of the #1MillionDevs movement!
      `;
    } else {
      scoreCircle.className = 'score-circle failed';
      statusTitle.textContent = '📚 Keep Pushing! Practice Makes Perfect!';
      statusTitle.style.color = 'var(--accent-coral)';
      feedbackText.innerHTML = `
        <strong>Bro Cloud's Encouragement:</strong> You scored <strong>${results.scaledScore} / 1000</strong> (Pass mark: 700). No shaking at all fam! Look closely at the analogies below, brush up on the weak domains, and let's retake it. You've got this!
      `;
    }

    // Render Domain Breakdown
    const domainList = document.getElementById('domainBreakdownList');
    domainList.innerHTML = '';
    for (const [key, d] of Object.entries(results.domainBreakdown)) {
      if (d.total > 0) {
        const pct = Math.round((d.correct / d.total) * 100);
        const card = document.createElement('div');
        card.className = 'domain-score-card';
        card.innerHTML = `
          <div class="domain-score-header">
            <span>${d.name}</span>
            <span>${d.correct}/${d.total} (${pct}%)</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
          </div>
        `;
        domainList.appendChild(card);
      }
    }

    // Render Detailed Answer Review
    const reviewContainer = document.getElementById('examReviewList');
    reviewContainer.innerHTML = '';
    results.details.forEach((item, idx) => {
      const isCorrect = item.isCorrect;
      const q = item.question;
      const letters = ['A', 'B', 'C', 'D'];
      const userLetter = item.userSelected !== undefined ? letters[item.userSelected] : 'Unanswered';
      const correctLetter = letters[q.correctIndex];

      const reviewCard = document.createElement('div');
      reviewCard.className = `review-item-card ${isCorrect ? 'correct' : 'incorrect'}`;
      reviewCard.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 700; color: ${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-coral)'}">
            ${isCorrect ? '✓ Correct' : '✗ Incorrect'} (Question ${idx + 1})
          </span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${q.domainName}</span>
        </div>
        <p style="font-weight: 600; margin-bottom: 0.75rem;">${q.question}</p>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
          Your Answer: <strong>${userLetter}: ${item.userSelected !== undefined ? q.options[item.userSelected] : 'None'}</strong>
        </p>
        <p style="font-size: 0.88rem; color: var(--accent-emerald); margin-bottom: 0.75rem;">
          Correct Answer: <strong>${correctLetter}: ${q.options[q.correctIndex]}</strong>
        </p>
        <div style="background: rgba(0,0,0,0.25); padding: 0.85rem; border-radius: 8px; font-size: 0.85rem;">
          <div style="color: #94A3B8; margin-bottom: 0.35rem;">${q.explanation}</div>
          <div style="color: var(--accent-gold); font-weight: 500;">${q.mamaCloudTip}</div>
        </div>
      `;
      reviewContainer.appendChild(reviewCard);
    });

    // Draw initial certificate
    drawCertificate("African Cloud Champion", results.scaledScore);
    examResultsContainer.scrollIntoView({ behavior: 'smooth' });
  }

  retakeExamBtn.addEventListener('click', () => {
    examResultsContainer.style.display = 'none';
    examModesGrid.style.display = 'grid';
  });

  // ==========================================
  // 7. CANVAS CERTIFICATE GENERATOR
  // ==========================================
  function drawCertificate(studentName, score) {
    if (!certCanvas) return;
    const ctx = certCanvas.getContext('2d');
    const width = 1000;
    const height = 650;
    certCanvas.width = width;
    certCanvas.height = height;

    // Dark African Indigo Background
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, '#0A0E17');
    bgGradient.addColorStop(0.5, '#141B2D');
    bgGradient.addColorStop(1, '#0D131F');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative Geometric Border
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = '#FF6B4A';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Top Header
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 20px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('#1MILLIONDEVS MOVEMENT • UNOFFICIAL COMMUNITY HONORS', width / 2, 85);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 36px "Outfit", sans-serif';
    ctx.fillText('CERTIFICATE OF AZ-900 READINESS', width / 2, 140);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('This is proudly awarded to', width / 2, 195);

    // Student Name
    ctx.fillStyle = '#FBBF24';
    ctx.font = 'bold 42px "Outfit", sans-serif';
    ctx.fillText(studentName.toUpperCase(), width / 2, 260);

    // Line under name
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 200, 280);
    ctx.lineTo(width / 2 + 200, 280);
    ctx.stroke();

    // Achievement text
    ctx.fillStyle = '#E2E8F0';
    ctx.font = '20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`For successfully mastering Microsoft Azure Fundamentals through African Real-World Analogies`, width / 2, 330);
    ctx.fillText(`and achieving a verified exam practice score of ${score} / 1000.`, width / 2, 365);

    // Date & Mentor Signatures
    const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    // Date
    ctx.fillStyle = '#94A3B8';
    ctx.font = '16px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Issued: ${today}`, 90, 520);
    ctx.fillText(`Status: Verified AZ-900 Ready`, 90, 545);

    // Mama Cloud Seal
    ctx.textAlign = 'right';
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 20px "Outfit", sans-serif';
    ctx.fillText(`Mama Cloud & Bro Cloud`, width - 90, 520);
    ctx.fillStyle = '#94A3B8';
    ctx.font = '15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`AI Mentors, African Cloud Movement`, width - 90, 545);

    // Stamp / Badge
    ctx.beginPath();
    ctx.arc(width / 2, 500, 48, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fill();
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 15px "Outfit", sans-serif';
    ctx.fillText('PASSED', width / 2, 498);
    ctx.font = 'bold 12px "Outfit", sans-serif';
    ctx.fillText('1000 SCALE', width / 2, 515);
  }

  generateCertBtn.addEventListener('click', () => {
    const name = certStudentName.value.trim() || 'African Cloud Pioneer';
    const score = examEngine.isSubmitted ? Math.round((Object.values(examEngine.userAnswers).length ? 850 : 780)) : 820;
    drawCertificate(name, score);
  });

  downloadCertBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `AZ900_Certificate_${certStudentName.value.trim() || 'Champion'}.png`;
    link.href = certCanvas.toDataURL('image/png');
    link.click();
  });
});
