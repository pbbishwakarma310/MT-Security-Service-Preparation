/**
 * MT Security Service Preparation
 * Storage Management Module (js/storage.js)
 * Handles LocalStorage persistence with validation and graceful fallbacks.
 */

const StorageKeys = {
    CANDIDATE_NAME: 'mt_candidate_name',
    EXAM_HISTORY: 'mt_exam_history',
    LEADERBOARD: 'mt_leaderboard',
    USER_PROGRESS: 'mt_user_progress',
    SYLLABUS_DATA: 'mt_syllabus_data',
    NOTES_DATA: 'mt_notes_data',
    QUESTION_DATA: 'mt_question_data',
    MODEL_SET_DATA: 'mt_model_set_data',
    EXAM_SETTINGS: 'mt_exam_settings',
    PDF_DATA: 'mt_pdf_data',
    THEME: 'mt_theme_preference'
};

const Storage = {
    /**
     * Check if localStorage is supported and accessible
     */
    isAvailable() {
        try {
            const testKey = '__mt_test_key__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.warn('LocalStorage is not available. Falling back to memory storage.', e);
            return false;
        }
    },

    // In-memory fallback if LocalStorage is disabled or unavailable
    _memoryStore: {},

    /**
     * Save data to storage
     * @param {string} key 
     * @param {*} data 
     * @returns {boolean} Success status
     */
    saveData(key, data) {
        try {
            const serialized = JSON.stringify(data);
            if (this.isAvailable()) {
                localStorage.setItem(key, serialized);
            } else {
                this._memoryStore[key] = serialized;
            }
            return true;
        } catch (error) {
            console.error(`Error saving data for key "${key}":`, error);
            return false;
        }
    },

    /**
     * Retrieve data from storage
     * @param {string} key 
     * @param {*} defaultValue 
     * @returns {*} Stored value or default
     */
    getData(key, defaultValue = null) {
        try {
            let serialized;
            if (this.isAvailable()) {
                serialized = localStorage.getItem(key);
            } else {
                serialized = this._memoryStore[key] || null;
            }

            if (serialized === null || serialized === undefined) {
                return defaultValue;
            }
            return JSON.parse(serialized);
        } catch (error) {
            console.error(`Error retrieving data for key "${key}":`, error);
            return defaultValue;
        }
    },

    /**
     * Update existing data using a mutator/updater callback
     * @param {string} key 
     * @param {function} updateFn 
     * @param {*} defaultInitialValue 
     */
    updateData(key, updateFn, defaultInitialValue = null) {
        const currentData = this.getData(key, defaultInitialValue);
        const updatedData = updateFn(currentData);
        this.saveData(key, updatedData);
        return updatedData;
    },

    /**
     * Delete a key from storage
     * @param {string} key 
     */
    deleteData(key) {
        try {
            if (this.isAvailable()) {
                localStorage.removeItem(key);
            }
            delete this._memoryStore[key];
            return true;
        } catch (error) {
            console.error(`Error deleting data for key "${key}":`, error);
            return false;
        }
    },

    /**
     * Clear all application-specific data from storage
     */
    clearData() {
        try {
            Object.values(StorageKeys).forEach(key => {
                if (this.isAvailable()) {
                    localStorage.removeItem(key);
                }
                delete this._memoryStore[key];
            });
            return true;
        } catch (error) {
            console.error('Error clearing application data:', error);
            return false;
        }
    },

    // --- High-level Domain Helpers ---

    getCandidateName() {
        return this.getData(StorageKeys.CANDIDATE_NAME, '') || '';
    },

    setCandidateName(name) {
        if (!name || !name.trim()) return false;
        return this.saveData(StorageKeys.CANDIDATE_NAME, name.trim());
    },

    getExamHistory() {
        return this.getData(StorageKeys.EXAM_HISTORY, []) || [];
    },

    addExamRecord(record) {
        const history = this.getExamHistory();
        const newRecord = {
            id: 'REC_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            timestamp: new Date().toISOString(),
            dateFormatted: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            ...record
        };

        history.unshift(newRecord); // newest first
        // Keep up to 100 historical attempts
        if (history.length > 100) history.pop();
        this.saveData(StorageKeys.EXAM_HISTORY, history);

        // Also update leaderboard with this performance
        this.recordToLeaderboard(newRecord);

        // Update overall progress
        this.updateUserProgress(newRecord);

        return newRecord;
    },

    clearExamHistory() {
        return this.saveData(StorageKeys.EXAM_HISTORY, []);
    },

    getLeaderboard() {
        return this.getData(StorageKeys.LEADERBOARD, []) || [];
    },

    recordToLeaderboard(record) {
        const board = this.getLeaderboard();
        const entry = {
            id: record.id || ('LB_' + Date.now()),
            candidateName: record.candidateName || 'Anonymous Candidate',
            service: record.service,
            examType: record.examType,
            subject: record.subject || 'All Subjects',
            score: record.score,
            totalMarks: record.totalMarks,
            percentage: record.percentage,
            timeUsed: record.timeUsedFormatted || '',
            dateFormatted: record.dateFormatted || new Date().toLocaleDateString()
        };

        board.push(entry);
        // Sort descending by percentage, then by score
        board.sort((a, b) => b.percentage - a.percentage || b.score - a.score);

        // Keep top 50
        if (board.length > 50) board.length = 50;
        this.saveData(StorageKeys.LEADERBOARD, board);
    },

    getUserProgress() {
        return this.getData(StorageKeys.USER_PROGRESS, {
            totalExams: 0,
            totalQuestionsAttempted: 0,
            totalCorrect: 0,
            bestScorePercentage: 0,
            serviceStats: {
                "Nepal Army": { exams: 0, scoreSum: 0, count: 0 },
                "Nepal Police": { exams: 0, scoreSum: 0, count: 0 },
                "Armed Police Force": { exams: 0, scoreSum: 0, count: 0 }
            }
        });
    },

    updateUserProgress(record) {
        const progress = this.getUserProgress();
        progress.totalExams += 1;
        progress.totalQuestionsAttempted += (record.totalQuestions || 0);
        progress.totalCorrect += (record.correctAnswers || 0);

        if (record.percentage > (progress.bestScorePercentage || 0)) {
            progress.bestScorePercentage = record.percentage;
        }

        if (record.service && progress.serviceStats[record.service]) {
            progress.serviceStats[record.service].exams += 1;
            progress.serviceStats[record.service].scoreSum += record.percentage;
            progress.serviceStats[record.service].count += 1;
        }

        this.saveData(StorageKeys.USER_PROGRESS, progress);
    },

    getTheme() {
        return this.getData(StorageKeys.THEME, 'light');
    },

    setTheme(theme) {
        return this.saveData(StorageKeys.THEME, theme);
    },

    getExamSettings() {
        return this.getData(StorageKeys.EXAM_SETTINGS, {
            randomQuestions: true,
            randomOptions: true,
            timerWarnings: true,
            soundAlerts: false
        });
    },

    saveExamSettings(settings) {
        return this.saveData(StorageKeys.EXAM_SETTINGS, settings);
    },

    getPdfData() {
        return this.getData(StorageKeys.PDF_DATA, []) || [];
    },

    savePdfData(pdfList) {
        return this.saveData(StorageKeys.PDF_DATA, pdfList);
    },

    addPdf(pdfObj) {
        const list = this.getPdfData();
        const newPdf = {
            id: 'PDF_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
            uploadedAt: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            downloads: 0,
            ...pdfObj
        };
        list.unshift(newPdf);
        this.savePdfData(list);
        return newPdf;
    },

    updatePdf(id, updatedFields) {
        const list = this.getPdfData();
        const idx = list.findIndex(p => p.id === id);
        if (idx !== -1) {
            list[idx] = { 
                ...list[idx], 
                ...updatedFields, 
                updatedAt: new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })
            };
            this.savePdfData(list);
            return list[idx];
        }
        return null;
    },

    deletePdf(id) {
        let list = this.getPdfData();
        list = list.filter(p => p.id !== id);
        return this.savePdfData(list);
    },

    incrementPdfDownloads(id) {
        const list = this.getPdfData();
        const item = list.find(p => p.id === id);
        if (item) {
            item.downloads = (item.downloads || 0) + 1;
            this.savePdfData(list);
        }
    }
};

// Export to window for global access
window.Storage = Storage;
window.StorageKeys = StorageKeys;
