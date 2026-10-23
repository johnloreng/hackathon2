/**
 * Mama Cloud & Bro Cloud: AZ-900 Exam Simulator Engine
 * Unofficial Community Exam Prep for the #1MillionDevs Movement.
 */

class ExamEngine {
  constructor(questions) {
    this.allQuestions = questions || [];
    this.activeQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { questionId: selectedIndex }
    this.flagged = new Set();
    this.timeRemaining = 0; // seconds
    this.timerInterval = null;
    this.mode = 'quick'; // 'quick', 'domain', 'full'
    this.isSubmitted = false;
    this.audioCtx = null;
  }

  initAudio() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playBeep(frequency = 440, duration = 0.15, type = 'sine') {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio not supported or blocked", e);
    }
  }

  playSuccessSound() {
    this.playBeep(523.25, 0.1, 'triangle');
    setTimeout(() => this.playBeep(659.25, 0.1, 'triangle'), 100);
    setTimeout(() => this.playBeep(783.99, 0.25, 'triangle'), 200);
  }

  playErrorSound() {
    this.playBeep(330, 0.15, 'sawtooth');
    setTimeout(() => this.playBeep(261.63, 0.25, 'sawtooth'), 150);
  }

  startExam(mode = 'quick', filterDomain = null) {
    this.mode = mode;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flagged.clear();
    this.isSubmitted = false;

    let pool = [...this.allQuestions];

    if (filterDomain && filterDomain !== 'all') {
      pool = pool.filter(q => q.domain === filterDomain);
    }

    // Shuffle pool
    pool = pool.sort(() => Math.random() - 0.5);

    if (mode === 'quick') {
      this.activeQuestions = pool.slice(0, 5);
      this.timeRemaining = 5 * 60; // 5 mins
    } else if (mode === 'domain') {
      this.activeQuestions = pool.slice(0, 8);
      this.timeRemaining = 10 * 60; // 10 mins
    } else {
      // Full Mock
      this.activeQuestions = pool.slice(0, 25);
      this.timeRemaining = 35 * 60; // 35 mins
    }

    this.startTimer();
    return this.getCurrentQuestion();
  }

  startTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        if (typeof this.onTick === 'function') {
          this.onTick(this.formatTime(this.timeRemaining));
        }
      } else {
        clearInterval(this.timerInterval);
        if (typeof this.onTimeUp === 'function') {
          this.onTimeUp();
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  getCurrentQuestion() {
    if (!this.activeQuestions.length) return null;
    return {
      index: this.currentIndex,
      total: this.activeQuestions.length,
      question: this.activeQuestions[this.currentIndex],
      userSelected: this.userAnswers[this.activeQuestions[this.currentIndex].id],
      isFlagged: this.flagged.has(this.activeQuestions[this.currentIndex].id),
      isAnswered: this.userAnswers[this.activeQuestions[this.currentIndex].id] !== undefined
    };
  }

  selectAnswer(answerIndex) {
    if (this.isSubmitted) return;
    const currentQ = this.activeQuestions[this.currentIndex];
    this.userAnswers[currentQ.id] = answerIndex;
    this.playBeep(480, 0.08, 'sine');
  }

  toggleFlag() {
    const currentQ = this.activeQuestions[this.currentIndex];
    if (this.flagged.has(currentQ.id)) {
      this.flagged.delete(currentQ.id);
    } else {
      this.flagged.add(currentQ.id);
      this.playBeep(600, 0.1, 'sine');
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.activeQuestions.length - 1) {
      this.currentIndex++;
      return this.getCurrentQuestion();
    }
    return null;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.getCurrentQuestion();
    }
    return null;
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.activeQuestions.length) {
      this.currentIndex = index;
      return this.getCurrentQuestion();
    }
    return null;
  }

  submitExam() {
    this.stopTimer();
    this.isSubmitted = true;

    let score = 0;
    const domainBreakdown = {
      concepts: { total: 0, correct: 0, name: "Cloud Concepts" },
      architecture: { total: 0, correct: 0, name: "Architecture & Services" },
      governance: { total: 0, correct: 0, name: "Management & Governance" }
    };

    const details = this.activeQuestions.map(q => {
      const userSelected = this.userAnswers[q.id];
      const isCorrect = userSelected === q.correctIndex;
      if (isCorrect) score++;

      if (domainBreakdown[q.domain]) {
        domainBreakdown[q.domain].total++;
        if (isCorrect) domainBreakdown[q.domain].correct++;
      }

      return {
        question: q,
        userSelected,
        isCorrect
      };
    });

    const percentage = Math.round((score / this.activeQuestions.length) * 100);
    const scaledScore = Math.round((percentage / 100) * 1000); // Azure standard 1000 scaled score
    const passed = scaledScore >= 700; // AZ-900 pass mark is 700 / 1000

    if (passed) {
      this.playSuccessSound();
    } else {
      this.playErrorSound();
    }

    return {
      score,
      total: this.activeQuestions.length,
      percentage,
      scaledScore,
      passed,
      passThreshold: 700,
      domainBreakdown,
      details
    };
  }
}

window.ExamEngine = ExamEngine;
