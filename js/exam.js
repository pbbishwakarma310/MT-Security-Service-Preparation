/**
 * MT Security Service Preparation
 * Exam Engine Module (js/exam.js)
 * Manages Topic-wise and Model Set exams, timers, randomization, scoring, and review.
 */

const ExamEngine = {
    // Current Active Exam State
    state: {
        isActive: false,
        examType: 'topic', // 'topic' or 'model'
        service: '',
        subject: '',
        candidateName: '',
        questions: [], // Array of prepared questions (cloned with randomized options)
        userAnswers: {}, // Map: questionId -> selectedOptionIndex (or option text)
        currentIndex: 0,
        totalQuestions: 0,
        totalMarks: 0,
        timeLimitSeconds: 0,
        timeRemainingSeconds: 0,
        timerInterval: null,
        startTime: null,
        endTime: null,
        lastSubmittedResult: null
    },

    /**
     * Fisher-Yates Shuffle Algorithm for arrays (clones array)
     * @param {Array} array 
     * @returns {Array} Shuffled copy
     */
    shuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    },

    /**
     * Prepare a single question: clone it and optionally shuffle options
     * while preserving which option is the correct one.
     */
    prepareQuestion(q, shuffleOptions = true) {
        const originalOptions = q.options;
        const originalCorrectAnswerText = originalOptions[q.answer];

        let preparedOptions;
        let newAnswerIndex;

        if (shuffleOptions) {
            preparedOptions = this.shuffle(originalOptions);
            newAnswerIndex = preparedOptions.indexOf(originalCorrectAnswerText);
        } else {
            preparedOptions = [...originalOptions];
            newAnswerIndex = q.answer;
        }

        return {
            id: q.id,
            service: q.service,
            subject: q.subject,
            question: q.question,
            options: preparedOptions,
            answer: newAnswerIndex, // Index within preparedOptions
            correctAnswerText: originalCorrectAnswerText,
            explanation: q.explanation || "No explanation provided.",
            marks: q.marks || 1
        };
    },

    /**
     * Start a Topic-Wise Exam
     * @param {Object} config { service, subject, questionCount, candidateName }
     */
    startTopicWiseExam({ service, subject, questionCount, candidateName }) {
        const allQuestions = Storage.getData(StorageKeys.QUESTION_DATA, window.defaultQuestionData || []);
        const settings = Storage.getExamSettings();

        // Filter questions by service and subject
        let filtered = allQuestions.filter(q => q.service === service && q.subject === subject);

        // Fallback: If not enough questions in exact match, allow all matching the service
        if (filtered.length === 0) {
            filtered = allQuestions.filter(q => q.service === service);
        }

        if (filtered.length === 0) {
            throw new Error(`No questions found for ${service} - ${subject}. Please add questions via Admin Panel.`);
        }

        // Shuffle questions if enabled
        if (settings.randomQuestions !== false) {
            filtered = this.shuffle(filtered);
        }

        // Slice requested count
        const count = Math.min(Number(questionCount) || 10, filtered.length);
        const selectedQuestions = filtered.slice(0, count);

        // Prepare questions (with randomized options if enabled)
        const prepared = selectedQuestions.map(q => 
            this.prepareQuestion(q, settings.randomOptions !== false)
        );

        // Standard 1 minute per question for Topic Wise
        const durationMinutes = Math.max(5, count); // at least 5 mins

        this.initExamSession({
            examType: 'topic',
            service,
            subject,
            candidateName,
            questions: prepared,
            durationMinutes
        });
    },

    /**
     * Start a Model Set Exam according to official syllabus rules
     * @param {Object} config { service, candidateName }
     */
    startModelSetExam({ service, candidateName }) {
        const allQuestions = Storage.getData(StorageKeys.QUESTION_DATA, window.defaultQuestionData || []);
        const modelConfigs = Storage.getData(StorageKeys.MODEL_SET_DATA, window.defaultModelSetData || {});
        const settings = Storage.getExamSettings();

        const config = modelConfigs[service] || {
            totalQuestions: 20,
            totalMarks: 20,
            duration: 30,
            markPerQuestion: 1,
            distribution: []
        };

        let preparedQuestions = [];

        // Build question set based on distribution if defined
        if (config.distribution && config.distribution.length > 0) {
            config.distribution.forEach(dist => {
                let subjectQuestions = allQuestions.filter(
                    q => q.service === service && q.subject === dist.subject
                );

                if (settings.randomQuestions !== false) {
                    subjectQuestions = this.shuffle(subjectQuestions);
                }

                // If not enough questions in subject, use what is available
                const countNeeded = dist.count;
                let picked = subjectQuestions.slice(0, countNeeded);

                // If fewer questions available in this specific subject, replenish from same service
                if (picked.length < countNeeded) {
                    const fallbackQuestions = allQuestions.filter(
                        q => q.service === service && !picked.some(p => p.id === q.id)
                    );
                    const neededMore = countNeeded - picked.length;
                    picked = picked.concat(this.shuffle(fallbackQuestions).slice(0, neededMore));
                }

                picked.forEach(q => {
                    const prepared = this.prepareQuestion(q, settings.randomOptions !== false);
                    // Ensure model set marks are applied (e.g. APF 2 marks)
                    if (config.markPerQuestion) {
                        prepared.marks = config.markPerQuestion;
                    }
                    preparedQuestions.push(prepared);
                });
            });
        }

        // If preparedQuestions is empty or less than total, pull from service general pool
        if (preparedQuestions.length < config.totalQuestions) {
            let serviceQuestions = allQuestions.filter(q => q.service === service);
            if (settings.randomQuestions !== false) {
                serviceQuestions = this.shuffle(serviceQuestions);
            }
            
            // Exclude already added
            const addedIds = new Set(preparedQuestions.map(q => q.id));
            const remaining = serviceQuestions.filter(q => !addedIds.has(q.id));
            
            const needed = config.totalQuestions - preparedQuestions.length;
            const extra = remaining.slice(0, needed);
            
            extra.forEach(q => {
                const prepared = this.prepareQuestion(q, settings.randomOptions !== false);
                if (config.markPerQuestion) {
                    prepared.marks = config.markPerQuestion;
                }
                preparedQuestions.push(prepared);
            });
        }

        // Final safety check: if we have fewer questions in database than required total,
        // we use all available questions for that service rather than failing
        if (preparedQuestions.length === 0) {
            throw new Error(`Insufficient questions found to generate Model Set for ${service}. Please add more questions in Admin Panel.`);
        }

        // Final shuffle of the entire model set
        if (settings.randomQuestions !== false) {
            preparedQuestions = this.shuffle(preparedQuestions);
        }

        this.initExamSession({
            examType: 'model',
            service,
            subject: 'Full Model Set Examination',
            candidateName,
            questions: preparedQuestions,
            durationMinutes: config.duration || 45
        });
    },

    /**
     * Common initialization of active exam state
     */
    initExamSession({ examType, service, subject, candidateName, questions, durationMinutes }) {
        // Clear any lingering timers
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }

        // Calculate total possible marks
        const totalMarks = questions.reduce((sum, q) => sum + (Number(q.marks) || 1), 0);
        const timeLimitSeconds = (Number(durationMinutes) || 30) * 60;

        this.state = {
            isActive: true,
            examType,
            service,
            subject,
            candidateName: candidateName || Storage.getCandidateName() || 'Candidate',
            questions,
            userAnswers: {}, // key: question index (0 to N-1), value: selected option index
            currentIndex: 0,
            totalQuestions: questions.length,
            totalMarks,
            timeLimitSeconds,
            timeRemainingSeconds: timeLimitSeconds,
            timerInterval: null,
            startTime: Date.now(),
            endTime: null,
            lastSubmittedResult: null
        };

        // Save candidate name if not set
        if (candidateName) {
            Storage.setCandidateName(candidateName);
        }

        // Hook window beforeunload warning to prevent accidental exit
        window.addEventListener('beforeunload', this.beforeUnloadHandler);

        // Start countdown timer
        this.startTimer();

        // Notify UI to render active exam interface
        if (window.App && typeof window.App.renderActiveExam === 'function') {
            window.App.renderActiveExam();
        }
    },

    beforeUnloadHandler(e) {
        if (ExamEngine.state.isActive) {
            e.preventDefault();
            e.returnValue = 'You have an active exam in progress. If you leave now, your progress will be lost.';
            return e.returnValue;
        }
    },

    /**
     * Countdown Timer
     */
    startTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }

        this.updateTimerDisplay();

        this.state.timerInterval = setInterval(() => {
            if (!this.state.isActive) {
                clearInterval(this.state.timerInterval);
                return;
            }

            this.state.timeRemainingSeconds -= 1;
            this.updateTimerDisplay();

            // Flash warning when 5 minutes or 1 minute remaining
            if (this.state.timeRemainingSeconds === 300) {
                if (window.App && window.App.showToast) {
                    window.App.showToast('Notice: 5 minutes remaining in the examination!', 'warning');
                }
            } else if (this.state.timeRemainingSeconds === 60) {
                if (window.App && window.App.showToast) {
                    window.App.showToast('Urgent: Only 1 minute left!', 'danger');
                }
            }

            // Auto-submit when time is up
            if (this.state.timeRemainingSeconds <= 0) {
                clearInterval(this.state.timerInterval);
                this.state.timeRemainingSeconds = 0;
                this.updateTimerDisplay();
                this.autoSubmitExam();
            }
        }, 1000);
    },

    /**
     * Format seconds to mm:ss or hh:mm:ss
     */
    formatTime(seconds) {
        const sec = Math.max(0, Math.floor(seconds));
        const hrs = Math.floor(sec / 3600);
        const mins = Math.floor((sec % 3600) / 60);
        const remainingSecs = sec % 60;

        if (hrs > 0) {
            return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
        }
        return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
    },

    /**
     * Update timer in UI DOM
     */
    updateTimerDisplay() {
        const timerElement = document.getElementById('exam-timer-display');
        const timerBar = document.getElementById('exam-timer-bar');

        if (timerElement) {
            timerElement.textContent = this.formatTime(this.state.timeRemainingSeconds);

            // Visual styling based on urgency
            if (this.state.timeRemainingSeconds <= 60) {
                timerElement.classList.add('timer-critical');
                timerElement.classList.remove('timer-warning');
            } else if (this.state.timeRemainingSeconds <= 300) {
                timerElement.classList.add('timer-warning');
                timerElement.classList.remove('timer-critical');
            } else {
                timerElement.classList.remove('timer-critical', 'timer-warning');
            }
        }

        if (timerBar && this.state.timeLimitSeconds > 0) {
            const percentage = (this.state.timeRemainingSeconds / this.state.timeLimitSeconds) * 100;
            timerBar.style.width = `${percentage}%`;
        }
    },

    /**
     * User Answer Selection
     * @param {number} questionIndex 
     * @param {number} optionIndex 
     */
    selectAnswer(questionIndex, optionIndex) {
        if (!this.state.isActive) return;
        this.state.userAnswers[questionIndex] = optionIndex;

        // Update Question Palette UI
        if (window.App && typeof window.App.updateQuestionStatus === 'function') {
            window.App.updateQuestionStatus(questionIndex);
        }
    },

    /**
     * Clear answer for current question
     */
    clearAnswer(questionIndex) {
        if (!this.state.isActive) return;
        delete this.state.userAnswers[questionIndex];
        if (window.App && typeof window.App.updateQuestionStatus === 'function') {
            window.App.updateQuestionStatus(questionIndex);
        }
    },

    /**
     * Navigation
     */
    nextQuestion() {
        if (this.state.currentIndex < this.state.totalQuestions - 1) {
            this.state.currentIndex += 1;
            if (window.App && typeof window.App.renderCurrentQuestion === 'function') {
                window.App.renderCurrentQuestion();
            }
        }
    },

    prevQuestion() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex -= 1;
            if (window.App && typeof window.App.renderCurrentQuestion === 'function') {
                window.App.renderCurrentQuestion();
            }
        }
    },

    jumpToQuestion(index) {
        if (index >= 0 && index < this.state.totalQuestions) {
            this.state.currentIndex = index;
            if (window.App && typeof window.App.renderCurrentQuestion === 'function') {
                window.App.renderCurrentQuestion();
            }
        }
    },

    /**
     * Automated submission triggered by timer expiration
     */
    autoSubmitExam() {
        if (!this.state.isActive) return;

        // Show auto-submit modal/toast
        const alertMsg = "Time is over.\nYour exam has been submitted automatically.";
        if (window.App && window.App.showNotificationModal) {
            window.App.showNotificationModal("Time Expired", alertMsg, () => {
                this.finalizeSubmission(true);
            });
        } else {
            alert(alertMsg);
            this.finalizeSubmission(true);
        }
    },

    /**
     * Manual submit requested by candidate
     */
    confirmAndSubmit() {
        if (!this.state.isActive) return;

        const attempted = Object.keys(this.state.userAnswers).length;
        const total = this.state.totalQuestions;
        const unattempted = total - attempted;

        const message = `You have attempted ${attempted} of ${total} questions (${unattempted} unattempted).\n\nAre you sure you want to submit the exam?`;

        if (window.App && window.App.showConfirmModal) {
            window.App.showConfirmModal({
                title: "Submit Examination",
                message,
                confirmText: "Submit Exam",
                cancelText: "Keep Answering",
                onConfirm: () => {
                    this.finalizeSubmission(false);
                }
            });
        } else {
            if (confirm(message)) {
                this.finalizeSubmission(false);
            }
        }
    },

    /**
     * Calculate score and finalize result
     * @param {boolean} isAutoSubmitted 
     */
    finalizeSubmission(isAutoSubmitted = false) {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
        }
        window.removeEventListener('beforeunload', this.beforeUnloadHandler);

        this.state.isActive = false;
        this.state.endTime = Date.now();

        const timeUsedSeconds = this.state.timeLimitSeconds - this.state.timeRemainingSeconds;
        const timeUsedFormatted = this.formatTime(timeUsedSeconds);
        const timeRemainingFormatted = this.formatTime(this.state.timeRemainingSeconds);

        let correctCount = 0;
        let wrongCount = 0;
        let obtainedMarks = 0;

        const reviewDetails = this.state.questions.map((q, idx) => {
            const userSelectedIndex = this.state.userAnswers[idx];
            const isAttempted = userSelectedIndex !== undefined && userSelectedIndex !== null;
            const isCorrect = isAttempted && userSelectedIndex === q.answer;
            const qMarks = Number(q.marks) || 1;

            if (isCorrect) {
                correctCount += 1;
                obtainedMarks += qMarks;
            } else if (isAttempted) {
                wrongCount += 1;
            }

            return {
                questionIndex: idx + 1,
                id: q.id,
                subject: q.subject,
                service: q.service,
                questionText: q.question,
                options: q.options,
                userSelectedIndex: isAttempted ? userSelectedIndex : null,
                userSelectedText: isAttempted ? q.options[userSelectedIndex] : null,
                correctIndex: q.answer,
                correctText: q.options[q.answer],
                isAttempted,
                isCorrect,
                explanation: q.explanation,
                marks: qMarks
            };
        });

        const totalQuestions = this.state.totalQuestions;
        const attemptedCount = Object.keys(this.state.userAnswers).length;
        const unattemptedCount = totalQuestions - attemptedCount;
        const percentage = this.state.totalMarks > 0 
            ? Number(((obtainedMarks / this.state.totalMarks) * 100).toFixed(2)) 
            : 0;

        const passThreshold = 40; // 40% standard pass mark
        const isPassed = percentage >= passThreshold;

        let resultSummary = '';
        if (percentage >= 80) {
            resultSummary = 'उत्कृष्ट (Distinction) - Exceptional performance!';
        } else if (percentage >= 60) {
            resultSummary = 'प्रथम श्रेणी (First Division) - Very Good!';
        } else if (percentage >= 40) {
            resultSummary = 'उत्तीर्ण (Pass) - Qualified!';
        } else {
            resultSummary = 'अनुत्तीर्ण (Not Qualified) - Needs Practice!';
        }

        const examResult = {
            candidateName: this.state.candidateName,
            service: this.state.service,
            examType: this.state.examType === 'model' ? 'Model Set Exam' : 'Topic Wise Exam',
            subject: this.state.subject,
            totalQuestions,
            attemptedQuestions: attemptedCount,
            correctAnswers: correctCount,
            wrongAnswers: wrongCount,
            unattemptedQuestions: unattemptedCount,
            totalMarks: this.state.totalMarks,
            score: obtainedMarks,
            percentage,
            isPassed,
            resultSummary,
            timeUsedFormatted,
            timeRemainingFormatted,
            isAutoSubmitted,
            reviewDetails
        };

        this.state.lastSubmittedResult = examResult;

        // Persist result in Storage (history + leaderboard + progress)
        Storage.addExamRecord(examResult);

        // Notify App to render result view
        if (window.App && typeof window.App.renderExamResult === 'function') {
            window.App.renderExamResult(examResult);
        }
    }
};

window.ExamEngine = ExamEngine;
