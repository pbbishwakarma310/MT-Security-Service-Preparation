/**
 * MT Security Service Preparation
 * Admin Panel Management Module (js/admin.js)
 * Provides full CRUD for Syllabus, Notes, Questions, Model Sets, and Exam Settings.
 */

const AdminPanel = {
    currentTab: 'questions', // 'questions' | 'syllabus' | 'notes' | 'modelsets' | 'settings'
    filterService: 'All',
    filterSubject: 'All',
    searchQuery: '',

    /**
     * Initialize Admin Panel View inside container
     * @param {HTMLElement} container 
     */
    init(container) {
        if (!container) return;
        this.container = container;
        this.render();
    },

    /**
     * Render the Admin Panel skeleton and current active tab
     */
    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="admin-wrapper">
                <div class="admin-header">
                    <div class="admin-title-area">
                        <h2>🛠️ Admin Management Panel (प्रशासकीय प्यानल)</h2>
                        <p class="admin-subtitle">Manage examination syllabus, educational notes, question bank, model sets, and system settings.</p>
                    </div>
                    <div class="admin-quick-actions">
                        <button class="btn btn-secondary btn-sm" id="btn-export-data">📥 Export Data (JSON)</button>
                        <button class="btn btn-warning btn-sm" id="btn-reset-data">🔄 Reset All to Defaults</button>
                    </div>
                </div>

                <div class="admin-nav-tabs">
                    <button class="admin-tab-btn ${this.currentTab === 'questions' ? 'active' : ''}" data-tab="questions">
                        ❓ Questions Bank
                    </button>
                    <button class="admin-tab-btn ${this.currentTab === 'syllabus' ? 'active' : ''}" data-tab="syllabus">
                        📋 Syllabus Manager
                    </button>
                    <button class="admin-tab-btn ${this.currentTab === 'notes' ? 'active' : ''}" data-tab="notes">
                        📚 Topic Notes
                    </button>
                    <button class="admin-tab-btn ${this.currentTab === 'modelsets' ? 'active' : ''}" data-tab="modelsets">
                        ⏱️ Model Sets & Timers
                    </button>
                    <button class="admin-tab-btn ${this.currentTab === 'pdfs' ? 'active' : ''}" data-tab="pdfs">
                        📄 PDF Materials (पिडिएफ)
                    </button>
                    <button class="admin-tab-btn ${this.currentTab === 'settings' ? 'active' : ''}" data-tab="settings">
                        ⚙️ Exam Settings
                    </button>
                </div>

                <div class="admin-tab-content" id="admin-tab-container">
                    <!-- Dynamic Tab Content Rendered Here -->
                </div>
            </div>

            <!-- Global Admin Modal Container -->
            <div id="admin-modal" class="modal-overlay" style="display: none;">
                <div class="modal-card modal-lg">
                    <div class="modal-header">
                        <h3 id="admin-modal-title">Admin Editor</h3>
                        <button class="modal-close-btn" id="admin-modal-close">&times;</button>
                    </div>
                    <div class="modal-body" id="admin-modal-body">
                        <!-- Dynamic modal content -->
                    </div>
                </div>
            </div>
        `;

        this.bindGlobalEvents();
        this.renderActiveTabContent();
    },

    bindGlobalEvents() {
        // Tab switching
        const tabBtns = this.container.querySelectorAll('.admin-tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.currentTab = e.currentTarget.dataset.tab;
                tabBtns.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.renderActiveTabContent();
            });
        });

        // Reset Data button
        const resetBtn = this.container.querySelector('#btn-reset-data');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset all data back to original defaults? Any custom added questions, notes, or PDFs will be overwritten.')) {
                    Storage.deleteData(StorageKeys.SYLLABUS_DATA);
                    Storage.deleteData(StorageKeys.NOTES_DATA);
                    Storage.deleteData(StorageKeys.QUESTION_DATA);
                    Storage.deleteData(StorageKeys.MODEL_SET_DATA);
                    Storage.deleteData(StorageKeys.PDF_DATA);
                    window.initializeApplicationData();
                    if (window.App && window.App.showToast) {
                        window.App.showToast('All data successfully restored to default seed bank!', 'success');
                    }
                    this.renderActiveTabContent();
                }
            });
        }

        // Export Data button
        const exportBtn = this.container.querySelector('#btn-export-data');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                const bundle = {
                    syllabus: Storage.getData(StorageKeys.SYLLABUS_DATA),
                    notes: Storage.getData(StorageKeys.NOTES_DATA),
                    questions: Storage.getData(StorageKeys.QUESTION_DATA),
                    modelSets: Storage.getData(StorageKeys.MODEL_SET_DATA),
                    pdfs: Storage.getData(StorageKeys.PDF_DATA),
                    settings: Storage.getExamSettings(),
                    exportedAt: new Date().toISOString()
                };
                const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `MT_Security_Prep_Data_${Date.now()}.json`;
                a.click();
                URL.revokeObjectURL(url);
            });
        }

        // Modal Close
        const modalClose = this.container.querySelector('#admin-modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }
    },

    openModal(title, contentHtml) {
        const modal = document.getElementById('admin-modal');
        const modalTitle = document.getElementById('admin-modal-title');
        const modalBody = document.getElementById('admin-modal-body');
        if (modal && modalTitle && modalBody) {
            modalTitle.textContent = title;
            modalBody.innerHTML = contentHtml;
            modal.style.display = 'flex';
        }
    },

    closeModal() {
        const modal = document.getElementById('admin-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    },

    renderActiveTabContent() {
        const container = document.getElementById('admin-tab-container');
        if (!container) return;

        switch (this.currentTab) {
            case 'questions':
                this.renderQuestionsTab(container);
                break;
            case 'syllabus':
                this.renderSyllabusTab(container);
                break;
            case 'notes':
                this.renderNotesTab(container);
                break;
            case 'modelsets':
                this.renderModelSetsTab(container);
                break;
            case 'pdfs':
                this.renderPdfTab(container);
                break;
            case 'settings':
                this.renderSettingsTab(container);
                break;
            default:
                this.renderQuestionsTab(container);
        }
    },

    // =========================================================================
    // 1. QUESTIONS MANAGER
    // =========================================================================
    renderQuestionsTab(container) {
        const questions = Storage.getData(StorageKeys.QUESTION_DATA, window.defaultQuestionData || []);

        let filtered = questions.filter(q => {
            const matchesService = this.filterService === 'All' || q.service === this.filterService;
            const matchesSubject = this.filterSubject === 'All' || q.subject === this.filterSubject;
            const matchesSearch = !this.searchQuery || 
                q.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                q.explanation.toLowerCase().includes(this.searchQuery.toLowerCase());
            return matchesService && matchesSubject && matchesSearch;
        });

        // Get unique subjects for dropdown
        const availableSubjects = Array.from(new Set(questions.map(q => q.subject)));

        container.innerHTML = `
            <div class="admin-toolbar">
                <div class="admin-filters">
                    <div class="form-group inline">
                        <label>Service:</label>
                        <select id="filter-q-service" class="form-control">
                            <option value="All" ${this.filterService === 'All' ? 'selected' : ''}>All Services</option>
                            <option value="Nepal Army" ${this.filterService === 'Nepal Army' ? 'selected' : ''}>Nepal Army</option>
                            <option value="Nepal Police" ${this.filterService === 'Nepal Police' ? 'selected' : ''}>Nepal Police</option>
                            <option value="Armed Police Force" ${this.filterService === 'Armed Police Force' ? 'selected' : ''}>Armed Police Force</option>
                        </select>
                    </div>

                    <div class="form-group inline">
                        <label>Subject:</label>
                        <select id="filter-q-subject" class="form-control">
                            <option value="All" ${this.filterSubject === 'All' ? 'selected' : ''}>All Subjects</option>
                            ${availableSubjects.map(s => `<option value="${s}" ${this.filterSubject === s ? 'selected' : ''}>${s}</option>`).join('')}
                        </select>
                    </div>

                    <div class="form-group inline search-box">
                        <label>Search:</label>
                        <input type="text" id="filter-q-search" class="form-control" placeholder="Search questions..." value="${this.searchQuery}">
                    </div>
                </div>

                <div class="admin-action-btn">
                    <button class="btn btn-primary" id="btn-add-question">➕ Add New Question</button>
                </div>
            </div>

            <div class="admin-count-bar">
                Showing <strong>${filtered.length}</strong> of <strong>${questions.length}</strong> total questions in database
            </div>

            <div class="table-responsive">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th width="50">#</th>
                            <th width="140">Service</th>
                            <th width="120">Subject</th>
                            <th>Question</th>
                            <th width="60">Marks</th>
                            <th width="140">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.length === 0 ? `
                            <tr><td colspan="6" class="text-center text-muted">No questions found matching criteria.</td></tr>
                        ` : filtered.map((q, idx) => `
                            <tr>
                                <td>${idx + 1}</td>
                                <td><span class="badge badge-service">${q.service}</span></td>
                                <td><span class="badge badge-sub">${q.subject}</span></td>
                                <td>
                                    <div class="question-preview-text"><strong>${q.question}</strong></div>
                                    <div class="options-summary-pill">
                                        Options: ${q.options.map((opt, i) => i === q.answer ? `<strong>[${i+1}: ${opt}]</strong>` : `${i+1}: ${opt}`).join(' | ')}
                                    </div>
                                </td>
                                <td><span class="badge badge-mark">${q.marks || 1} M</span></td>
                                <td>
                                    <button class="btn-action edit-q" data-id="${q.id}" title="Edit Question">✏️</button>
                                    <button class="btn-action delete-q text-danger" data-id="${q.id}" title="Delete Question">🗑️</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        // Event bindings
        container.querySelector('#filter-q-service').addEventListener('change', (e) => {
            this.filterService = e.target.value;
            this.renderQuestionsTab(container);
        });

        container.querySelector('#filter-q-subject').addEventListener('change', (e) => {
            this.filterSubject = e.target.value;
            this.renderQuestionsTab(container);
        });

        container.querySelector('#filter-q-search').addEventListener('input', (e) => {
            this.searchQuery = e.target.value;
            this.renderQuestionsTab(container);
        });

        container.querySelector('#btn-add-question').addEventListener('click', () => {
            this.showQuestionEditor();
        });

        container.querySelectorAll('.edit-q').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = Number(e.currentTarget.dataset.id);
                const q = questions.find(item => item.id === id);
                if (q) this.showQuestionEditor(q);
            });
        });

        container.querySelectorAll('.delete-q').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = Number(e.currentTarget.dataset.id);
                if (confirm('Are you sure you want to permanently delete this question?')) {
                    const updated = questions.filter(item => item.id !== id);
                    Storage.saveData(StorageKeys.QUESTION_DATA, updated);
                    if (window.App && window.App.showToast) {
                        window.App.showToast('Question deleted successfully!', 'info');
                    }
                    this.renderQuestionsTab(container);
                }
            });
        });
    },

    showQuestionEditor(question = null) {
        const isEdit = !!question;
        const q = question || {
            id: Date.now(),
            service: this.filterService !== 'All' ? this.filterService : 'Nepal Army',
            subject: 'English',
            question: '',
            options: ['', '', '', ''],
            answer: 0,
            explanation: '',
            marks: 1
        };

        const subjectsByService = {
            "Nepal Army": ["English", "Mathematics", "नेपाली", "सामान्य ज्ञान"],
            "Nepal Police": ["नेपाली रचना", "English", "गणित", "सामान्य ज्ञान", "प्रहरी सेवा", "बौद्धिक परीक्षा"],
            "Armed Police Force": ["नेपाली", "English", "गणित", "पेशा सम्बन्धी"]
        };

        const modalHtml = `
            <form id="question-form">
                <div class="form-row">
                    <div class="form-group col-6">
                        <label>Security Service *</label>
                        <select id="modal-q-service" class="form-control" required>
                            <option value="Nepal Army" ${q.service === 'Nepal Army' ? 'selected' : ''}>Nepal Army (नेपाली सेना)</option>
                            <option value="Nepal Police" ${q.service === 'Nepal Police' ? 'selected' : ''}>Nepal Police (नेपाल प्रहरी)</option>
                            <option value="Armed Police Force" ${q.service === 'Armed Police Force' ? 'selected' : ''}>Armed Police Force (सशस्त्र प्रहरी बल)</option>
                        </select>
                    </div>
                    <div class="form-group col-6">
                        <label>Subject *</label>
                        <select id="modal-q-subject" class="form-control" required>
                            ${(subjectsByService[q.service] || ["General"]).map(s => `
                                <option value="${s}" ${q.subject === s ? 'selected' : ''}>${s}</option>
                            `).join('')}
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Question Text *</label>
                    <textarea id="modal-q-text" class="form-control" rows="3" placeholder="Enter question in Nepali or English..." required>${q.question}</textarea>
                </div>

                <div class="form-options-grid">
                    <label class="d-block w-100 mb-1">Options & Correct Answer * (Select the radio button of the correct option)</label>
                    ${[0, 1, 2, 3].map(i => `
                        <div class="option-input-row">
                            <input type="radio" name="modal-correct-opt" value="${i}" ${q.answer === i ? 'checked' : ''} required>
                            <span class="opt-label">Option ${i+1}:</span>
                            <input type="text" class="form-control modal-opt-input" data-index="${i}" value="${q.options[i] || ''}" placeholder="Option ${i+1} text" required>
                        </div>
                    `).join('')}
                </div>

                <div class="form-row mt-2">
                    <div class="form-group col-4">
                        <label>Marks *</label>
                        <input type="number" id="modal-q-marks" class="form-control" value="${q.marks || 1}" min="1" max="10" required>
                    </div>
                    <div class="form-group col-8">
                        <label>Explanation (स्पष्टीकरण)</label>
                        <input type="text" id="modal-q-explanation" class="form-control" value="${q.explanation || ''}" placeholder="Why is this the correct answer?">
                    </div>
                </div>

                <div class="modal-footer mt-3">
                    <button type="button" class="btn btn-secondary" onclick="AdminPanel.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Update Question' : 'Save Question'}</button>
                </div>
            </form>
        `;

        this.openModal(isEdit ? '✏️ Edit Question' : '➕ Add New Question', modalHtml);

        // Dynamic subject update on service change
        const serviceSelect = document.getElementById('modal-q-service');
        const subjectSelect = document.getElementById('modal-q-subject');
        serviceSelect.addEventListener('change', (e) => {
            const subs = subjectsByService[e.target.value] || [];
            subjectSelect.innerHTML = subs.map(s => `<option value="${s}">${s}</option>`).join('');
        });

        // Form submit handler
        const form = document.getElementById('question-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const options = [];
            document.querySelectorAll('.modal-opt-input').forEach(input => {
                options.push(input.value.trim());
            });

            const selectedCorrectRadio = document.querySelector('input[name="modal-correct-opt"]:checked');
            const answerIndex = selectedCorrectRadio ? Number(selectedCorrectRadio.value) : 0;

            const updatedQ = {
                id: q.id,
                service: serviceSelect.value,
                subject: subjectSelect.value,
                question: document.getElementById('modal-q-text').value.trim(),
                options,
                answer: answerIndex,
                explanation: document.getElementById('modal-q-explanation').value.trim(),
                marks: Number(document.getElementById('modal-q-marks').value) || 1
            };

            const questionsList = Storage.getData(StorageKeys.QUESTION_DATA, window.defaultQuestionData || []);
            if (isEdit) {
                const index = questionsList.findIndex(item => item.id === q.id);
                if (index !== -1) {
                    questionsList[index] = updatedQ;
                }
            } else {
                questionsList.unshift(updatedQ);
            }

            Storage.saveData(StorageKeys.QUESTION_DATA, questionsList);
            this.closeModal();
            if (window.App && window.App.showToast) {
                window.App.showToast(`Question ${isEdit ? 'updated' : 'added'} successfully!`, 'success');
            }
            this.renderQuestionsTab(document.getElementById('admin-tab-container'));
        });
    },

    // =========================================================================
    // 2. SYLLABUS MANAGER
    // =========================================================================
    renderSyllabusTab(container) {
        const syllabusData = Storage.getData(StorageKeys.SYLLABUS_DATA, window.defaultSyllabusData || {});
        const services = Object.keys(syllabusData);

        container.innerHTML = `
            <div class="admin-toolbar">
                <p>Manage and update official examination phases, criteria, and written syllabus for each security service.</p>
            </div>

            <div class="admin-syllabus-cards">
                ${services.map(svcKey => {
                    const svc = syllabusData[svcKey];
                    return `
                        <div class="admin-content-card">
                            <div class="card-header-flex">
                                <div>
                                    <h3>${svc.serviceNepali} (${svc.serviceName})</h3>
                                    <div class="text-muted">${svc.postName}</div>
                                </div>
                                <button class="btn btn-secondary btn-sm edit-syllabus-btn" data-service="${svcKey}">✏️ Edit Syllabus</button>
                            </div>
                            <p class="mt-2">${svc.description}</p>
                            <div class="phases-summary mt-2">
                                <strong>Phases configured (${svc.phases.length}):</strong>
                                <ul>
                                    ${svc.phases.map(p => `<li>${p.phaseTitle}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        container.querySelectorAll('.edit-syllabus-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svcKey = e.currentTarget.dataset.service;
                this.showSyllabusEditor(svcKey, syllabusData[svcKey]);
            });
        });
    },

    showSyllabusEditor(serviceKey, syllabus) {
        const modalHtml = `
            <form id="syllabus-form">
                <div class="form-group">
                    <label>Post Name (पदको नाम) *</label>
                    <input type="text" id="syl-post-name" class="form-control" value="${syllabus.postName}" required>
                </div>
                <div class="form-group">
                    <label>Description (विवरण) *</label>
                    <textarea id="syl-desc" class="form-control" rows="2" required>${syllabus.description}</textarea>
                </div>

                <div class="form-group mt-2">
                    <label>Phases & Written Criteria (JSON Structure) *</label>
                    <p class="form-hint">You can edit the phases, sub-points, and marks breakdown below:</p>
                    <textarea id="syl-phases-json" class="form-control code-editor" rows="12">${JSON.stringify(syllabus.phases, null, 2)}</textarea>
                </div>

                <div class="modal-footer mt-3">
                    <button type="button" class="btn btn-secondary" onclick="AdminPanel.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Syllabus</button>
                </div>
            </form>
        `;

        this.openModal(`Edit Syllabus: ${syllabus.serviceName}`, modalHtml);

        const form = document.getElementById('syllabus-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let parsedPhases;
            try {
                parsedPhases = JSON.parse(document.getElementById('syl-phases-json').value);
                if (!Array.isArray(parsedPhases)) throw new Error('Phases must be an array of objects.');
            } catch (err) {
                alert('Invalid JSON in Phases field: ' + err.message);
                return;
            }

            const syllabusData = Storage.getData(StorageKeys.SYLLABUS_DATA, window.defaultSyllabusData || {});
            syllabusData[serviceKey].postName = document.getElementById('syl-post-name').value.trim();
            syllabusData[serviceKey].description = document.getElementById('syl-desc').value.trim();
            syllabusData[serviceKey].phases = parsedPhases;

            Storage.saveData(StorageKeys.SYLLABUS_DATA, syllabusData);
            this.closeModal();
            if (window.App && window.App.showToast) {
                window.App.showToast('Syllabus updated successfully!', 'success');
            }
            this.renderSyllabusTab(document.getElementById('admin-tab-container'));
        });
    },

    // =========================================================================
    // 3. TOPIC NOTES MANAGER
    // =========================================================================
    renderNotesTab(container) {
        const notesData = Storage.getData(StorageKeys.NOTES_DATA, window.defaultNotesData || {});

        container.innerHTML = `
            <div class="admin-toolbar">
                <div>
                    <p>Add, edit or expand study notes, tips and formulas for each service subject.</p>
                </div>
                <button class="btn btn-primary" id="btn-add-note">➕ Add New Note</button>
            </div>

            <div class="notes-admin-list">
                ${Object.keys(notesData).map(svc => `
                    <div class="admin-section-block">
                        <h3 class="section-service-title">🎖️ ${svc}</h3>
                        <div class="subjects-notes-grid">
                            ${Object.keys(notesData[svc]).map(sub => {
                                const notes = notesData[svc][sub];
                                return `
                                    <div class="admin-note-subject-card">
                                        <div class="subject-title-row">
                                            <strong>${sub}</strong>
                                            <span class="badge">${notes.length} Topics</span>
                                        </div>
                                        <ul class="notes-topics-list">
                                            ${notes.map(n => `
                                                <li class="note-topic-item">
                                                    <span>${n.title}</span>
                                                    <div class="btn-group-sm">
                                                        <button class="btn-action edit-note" data-svc="${svc}" data-sub="${sub}" data-id="${n.id}">✏️</button>
                                                        <button class="btn-action delete-note text-danger" data-svc="${svc}" data-sub="${sub}" data-id="${n.id}">🗑️</button>
                                                    </div>
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        container.querySelector('#btn-add-note').addEventListener('click', () => {
            this.showNoteEditor();
        });

        container.querySelectorAll('.edit-note').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.svc;
                const sub = e.currentTarget.dataset.sub;
                const id = e.currentTarget.dataset.id;
                const note = (notesData[svc] && notesData[svc][sub]) ? notesData[svc][sub].find(n => n.id === id) : null;
                if (note) this.showNoteEditor(svc, sub, note);
            });
        });

        container.querySelectorAll('.delete-note').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.svc;
                const sub = e.currentTarget.dataset.sub;
                const id = e.currentTarget.dataset.id;
                if (confirm('Delete this note topic?')) {
                    notesData[svc][sub] = notesData[svc][sub].filter(n => n.id !== id);
                    Storage.saveData(StorageKeys.NOTES_DATA, notesData);
                    if (window.App && window.App.showToast) {
                        window.App.showToast('Note deleted successfully!', 'info');
                    }
                    this.renderNotesTab(container);
                }
            });
        });
    },

    showNoteEditor(service = 'Nepal Army', subject = 'English', note = null) {
        const isEdit = !!note;
        const currentNote = note || {
            id: 'note_' + Date.now(),
            title: '',
            subtitle: '',
            content: '',
            keyPoints: []
        };

        const modalHtml = `
            <form id="note-form">
                <div class="form-row">
                    <div class="form-group col-6">
                        <label>Security Service *</label>
                        <select id="modal-note-service" class="form-control" required>
                            <option value="Nepal Army" ${service === 'Nepal Army' ? 'selected' : ''}>Nepal Army</option>
                            <option value="Nepal Police" ${service === 'Nepal Police' ? 'selected' : ''}>Nepal Police</option>
                            <option value="Armed Police Force" ${service === 'Armed Police Force' ? 'selected' : ''}>Armed Police Force</option>
                        </select>
                    </div>
                    <div class="form-group col-6">
                        <label>Subject *</label>
                        <input type="text" id="modal-note-subject" class="form-control" value="${subject}" placeholder="e.g. English, Mathematics..." required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Topic Title *</label>
                    <input type="text" id="modal-note-title" class="form-control" value="${currentNote.title}" placeholder="e.g. Rules of Articles (A, An, The)" required>
                </div>

                <div class="form-group">
                    <label>Subtitle / Nepali Summary</label>
                    <input type="text" id="modal-note-subtitle" class="form-control" value="${currentNote.subtitle || ''}" placeholder="छोटो विवरण">
                </div>

                <div class="form-group">
                    <label>Main Note Content (Supports Markdown, points, and examples) *</label>
                    <textarea id="modal-note-content" class="form-control" rows="8" placeholder="Enter detailed note content..." required>${currentNote.content}</textarea>
                </div>

                <div class="form-group">
                    <label>Key Memory Points (One per line)</label>
                    <textarea id="modal-note-keypoints" class="form-control" rows="3" placeholder="Key point 1\nKey point 2">${(currentNote.keyPoints || []).join('\n')}</textarea>
                </div>

                <div class="modal-footer mt-3">
                    <button type="button" class="btn btn-secondary" onclick="AdminPanel.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">${isEdit ? 'Update Note' : 'Create Note'}</button>
                </div>
            </form>
        `;

        this.openModal(isEdit ? '✏️ Edit Study Note' : '➕ Create New Study Note', modalHtml);

        const form = document.getElementById('note-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const svc = document.getElementById('modal-note-service').value;
            const sub = document.getElementById('modal-note-subject').value.trim();
            const keyPoints = document.getElementById('modal-note-keypoints').value
                .split('\n')
                .map(s => s.trim())
                .filter(Boolean);

            const updatedNoteObj = {
                id: currentNote.id,
                title: document.getElementById('modal-note-title').value.trim(),
                subtitle: document.getElementById('modal-note-subtitle').value.trim(),
                content: document.getElementById('modal-note-content').value.trim(),
                keyPoints
            };

            const notesData = Storage.getData(StorageKeys.NOTES_DATA, window.defaultNotesData || {});
            if (!notesData[svc]) notesData[svc] = {};
            if (!notesData[svc][sub]) notesData[svc][sub] = [];

            if (isEdit) {
                const idx = notesData[svc][sub].findIndex(n => n.id === currentNote.id);
                if (idx !== -1) {
                    notesData[svc][sub][idx] = updatedNoteObj;
                } else {
                    notesData[svc][sub].push(updatedNoteObj);
                }
            } else {
                notesData[svc][sub].push(updatedNoteObj);
            }

            Storage.saveData(StorageKeys.NOTES_DATA, notesData);
            this.closeModal();
            if (window.App && window.App.showToast) {
                window.App.showToast('Note saved successfully!', 'success');
            }
            this.renderNotesTab(document.getElementById('admin-tab-container'));
        });
    },

    // =========================================================================
    // 4. MODEL SETS & TIMERS MANAGER
    // =========================================================================
    renderModelSetsTab(container) {
        const modelSets = Storage.getData(StorageKeys.MODEL_SET_DATA, window.defaultModelSetData || {});

        container.innerHTML = `
            <div class="admin-toolbar">
                <p>Configure examination timer duration, question counts, marks allocation, and subject distributions for official Model Sets.</p>
            </div>

            <div class="admin-model-cards-grid">
                ${Object.keys(modelSets).map(svc => {
                    const m = modelSets[svc];
                    return `
                        <div class="admin-content-card">
                            <div class="card-header-flex">
                                <h3>${svc} Model Set</h3>
                                <button class="btn btn-secondary btn-sm edit-model-btn" data-svc="${svc}">⚙️ Configure</button>
                            </div>
                            <div class="model-stat-badges mt-2">
                                <span class="badge">⏱️ ${m.duration} Minutes</span>
                                <span class="badge">❓ ${m.totalQuestions} Questions</span>
                                <span class="badge">🎯 ${m.totalMarks} Marks</span>
                                <span class="badge">⭐ ${m.markPerQuestion || 1} Mark/Q</span>
                            </div>

                            <div class="distribution-table mt-3">
                                <strong>Question Distribution:</strong>
                                <ul>
                                    ${(m.distribution || []).map(d => `
                                        <li>${d.subject}: <strong>${d.count} Questions</strong> (${d.marks} Marks)</li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        container.querySelectorAll('.edit-model-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.svc;
                this.showModelSetEditor(svc, modelSets[svc]);
            });
        });
    },

    showModelSetEditor(service, modelSet) {
        const modalHtml = `
            <form id="model-set-form">
                <div class="form-row">
                    <div class="form-group col-6">
                        <label>Exam Duration (Minutes) *</label>
                        <input type="number" id="ms-duration" class="form-control" value="${modelSet.duration}" min="5" max="180" required>
                    </div>
                    <div class="form-group col-6">
                        <label>Total Questions *</label>
                        <input type="number" id="ms-questions" class="form-control" value="${modelSet.totalQuestions}" min="5" max="100" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-6">
                        <label>Mark per Question *</label>
                        <input type="number" id="ms-mark-per-q" class="form-control" value="${modelSet.markPerQuestion || 1}" min="1" max="5" required>
                    </div>
                    <div class="form-group col-6">
                        <label>Total Marks *</label>
                        <input type="number" id="ms-total-marks" class="form-control" value="${modelSet.totalMarks}" min="5" max="200" required>
                    </div>
                </div>

                <div class="form-group mt-2">
                    <label>Distribution JSON (Array of subject distributions) *</label>
                    <textarea id="ms-dist-json" class="form-control code-editor" rows="6">${JSON.stringify(modelSet.distribution || [], null, 2)}</textarea>
                </div>

                <div class="modal-footer mt-3">
                    <button type="button" class="btn btn-secondary" onclick="AdminPanel.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Model Set Configuration</button>
                </div>
            </form>
        `;

        this.openModal(`Configure ${service} Model Set`, modalHtml);

        const form = document.getElementById('model-set-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let parsedDist;
            try {
                parsedDist = JSON.parse(document.getElementById('ms-dist-json').value);
            } catch (err) {
                alert('Invalid JSON in Distribution field: ' + err.message);
                return;
            }

            const modelSets = Storage.getData(StorageKeys.MODEL_SET_DATA, window.defaultModelSetData || {});
            modelSets[service].duration = Number(document.getElementById('ms-duration').value);
            modelSets[service].totalQuestions = Number(document.getElementById('ms-questions').value);
            modelSets[service].markPerQuestion = Number(document.getElementById('ms-mark-per-q').value);
            modelSets[service].totalMarks = Number(document.getElementById('ms-total-marks').value);
            modelSets[service].distribution = parsedDist;

            Storage.saveData(StorageKeys.MODEL_SET_DATA, modelSets);
            this.closeModal();
            if (window.App && window.App.showToast) {
                window.App.showToast(`${service} Model Set updated successfully!`, 'success');
            }
            this.renderModelSetsTab(document.getElementById('admin-tab-container'));
        });
    },

    // =========================================================================
    // 5. PDF RESOURCES MANAGER (पिडिएफ व्यवस्थापन)
    // =========================================================================
    filterPdfService: 'All',
    filterPdfCategory: 'All',
    pdfSearchQuery: '',

    renderPdfTab(container) {
        const pdfList = Storage.getPdfData();

        let filtered = pdfList.filter(p => {
            const matchesService = this.filterPdfService === 'All' || p.service === this.filterPdfService || p.service === 'All Services';
            const matchesCat = this.filterPdfCategory === 'All' || p.category === this.filterPdfCategory;
            const q = (this.pdfSearchQuery || '').toLowerCase();
            const matchesSearch = !q || 
                (p.title && p.title.toLowerCase().includes(q)) ||
                (p.description && p.description.toLowerCase().includes(q)) ||
                (p.fileName && p.fileName.toLowerCase().includes(q));
            return matchesService && matchesCat && matchesSearch;
        });

        container.innerHTML = `
            <div class="admin-toolbar">
                <div class="admin-filters">
                    <div class="form-group inline">
                        <label>Service:</label>
                        <select id="filter-pdf-service" class="form-control">
                            <option value="All" ${this.filterPdfService === 'All' ? 'selected' : ''}>All Services</option>
                            <option value="Nepal Army" ${this.filterPdfService === 'Nepal Army' ? 'selected' : ''}>Nepal Army</option>
                            <option value="Nepal Police" ${this.filterPdfService === 'Nepal Police' ? 'selected' : ''}>Nepal Police</option>
                            <option value="Armed Police Force" ${this.filterPdfService === 'Armed Police Force' ? 'selected' : ''}>Armed Police Force</option>
                        </select>
                    </div>

                    <div class="form-group inline">
                        <label>Category:</label>
                        <select id="filter-pdf-category" class="form-control">
                            <option value="All" ${this.filterPdfCategory === 'All' ? 'selected' : ''}>All Categories</option>
                            <option value="Syllabus" ${this.filterPdfCategory === 'Syllabus' ? 'selected' : ''}>Syllabus (पाठ्यक्रम)</option>
                            <option value="Notes" ${this.filterPdfCategory === 'Notes' ? 'selected' : ''}>Topic Notes (नोट्स)</option>
                            <option value="Model Questions" ${this.filterPdfCategory === 'Model Questions' ? 'selected' : ''}>Model Questions (नमुना प्रश्न)</option>
                            <option value="Official Notice" ${this.filterPdfCategory === 'Official Notice' ? 'selected' : ''}>Official Notice (सूचना)</option>
                        </select>
                    </div>

                    <div class="form-group inline search-box">
                        <label>Search:</label>
                        <input type="text" id="filter-pdf-search" class="form-control" placeholder="Search PDF title or file..." value="${this.pdfSearchQuery}">
                    </div>
                </div>

                <div class="admin-action-btn">
                    <button class="btn btn-primary" id="btn-add-pdf">➕ Add / Upload New PDF</button>
                </div>
            </div>

            <div class="admin-count-bar">
                Showing <strong>${filtered.length}</strong> of <strong>${pdfList.length}</strong> total PDF documents in repository
            </div>

            <div class="table-responsive">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th width="40">#</th>
                            <th width="140">Service</th>
                            <th width="120">Category</th>
                            <th>PDF Document Details</th>
                            <th width="130">File Info</th>
                            <th width="160">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.length === 0 ? `
                            <tr><td colspan="6" class="text-center text-muted">No PDF documents found matching criteria. Click 'Add / Upload New PDF' above to upload.</td></tr>
                        ` : filtered.map((pdf, idx) => `
                            <tr>
                                <td>${idx + 1}</td>
                                <td><span class="badge badge-service">${pdf.service}</span></td>
                                <td><span class="badge badge-sub">${pdf.category}</span></td>
                                <td>
                                    <div class="question-preview-text"><strong>${pdf.title}</strong></div>
                                    ${pdf.description ? `<div class="text-muted" style="font-size:0.825rem;">${pdf.description}</div>` : ''}
                                    <div class="text-muted" style="font-size:0.75rem; margin-top:3px;">
                                        📅 Uploaded: ${pdf.uploadedAt || 'N/A'} ${pdf.downloads ? ` • 📥 ${pdf.downloads} downloads` : ''}
                                    </div>
                                </td>
                                <td>
                                    <div style="font-weight:600; font-size:0.85rem;">📄 ${pdf.fileName || 'document.pdf'}</div>
                                    <div class="badge" style="margin-top:2px;">${pdf.fileSize || 'N/A'}</div>
                                    <div style="font-size:0.725rem; color:var(--text-muted); margin-top:2px;">
                                        ${pdf.sourceType === 'url' ? '🔗 External URL' : '📁 Uploaded File'}
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-group-sm" style="display:flex; gap:4px; flex-wrap:wrap;">
                                        <button class="btn btn-outline btn-sm view-pdf" data-id="${pdf.id}" title="Preview / Open PDF">👁️ View</button>
                                        <button class="btn btn-secondary btn-sm download-pdf" data-id="${pdf.id}" title="Download PDF">📥</button>
                                        <button class="btn-action edit-pdf" data-id="${pdf.id}" title="Edit / Replace PDF">✏️</button>
                                        <button class="btn-action delete-pdf text-danger" data-id="${pdf.id}" title="Delete PDF">🗑️</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        // Event listeners
        container.querySelector('#filter-pdf-service').addEventListener('change', (e) => {
            this.filterPdfService = e.target.value;
            this.renderPdfTab(container);
        });

        container.querySelector('#filter-pdf-category').addEventListener('change', (e) => {
            this.filterPdfCategory = e.target.value;
            this.renderPdfTab(container);
        });

        container.querySelector('#filter-pdf-search').addEventListener('input', (e) => {
            this.pdfSearchQuery = e.target.value;
            this.renderPdfTab(container);
        });

        container.querySelector('#btn-add-pdf').addEventListener('click', () => {
            this.showPdfEditor();
        });

        container.querySelectorAll('.view-pdf').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const pdf = pdfList.find(p => p.id === id);
                if (pdf) this.previewPdf(pdf);
            });
        });

        container.querySelectorAll('.download-pdf').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const pdf = pdfList.find(p => p.id === id);
                if (pdf) this.downloadPdf(pdf);
            });
        });

        container.querySelectorAll('.edit-pdf').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const pdf = pdfList.find(p => p.id === id);
                if (pdf) this.showPdfEditor(pdf);
            });
        });

        container.querySelectorAll('.delete-pdf').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                if (confirm('Are you sure you want to permanently delete this PDF material?')) {
                    Storage.deletePdf(id);
                    if (window.App && window.App.showToast) {
                        window.App.showToast('PDF material deleted successfully!', 'info');
                    }
                    this.renderPdfTab(container);
                }
            });
        });
    },

    previewPdf(pdf) {
        if (!pdf || !pdf.fileUrl) {
            alert('PDF file URL is missing.');
            return;
        }
        if (pdf.fileUrl.startsWith('data:')) {
            try {
                const arr = pdf.fileUrl.split(',');
                const mime = arr[0].match(/:(.*?);/)[1];
                const bstr = atob(arr[1]);
                let n = bstr.length;
                const u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                const blob = new Blob([u8arr], { type: mime });
                const blobUrl = URL.createObjectURL(blob);
                window.open(blobUrl, '_blank');
            } catch (err) {
                window.open(pdf.fileUrl, '_blank');
            }
        } else {
            window.open(pdf.fileUrl, '_blank');
        }
    },

    downloadPdf(pdf) {
        if (!pdf || !pdf.fileUrl) {
            alert('PDF file is not available.');
            return;
        }
        Storage.incrementPdfDownloads(pdf.id);
        const fileName = pdf.fileName || (pdf.title.replace(/[^a-zA-Z0-9_\-\u0900-\u097F]/g, '_') + '.pdf');

        if (pdf.fileUrl.startsWith('data:')) {
            const a = document.createElement('a');
            a.href = pdf.fileUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            const a = document.createElement('a');
            a.href = pdf.fileUrl;
            a.target = '_blank';
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        if (window.App && window.App.showToast) {
            window.App.showToast(`Downloading: ${fileName}`, 'success');
        }
    },

    showPdfEditor(pdf = null) {
        const isEdit = !!pdf;
        const current = pdf || {
            id: null,
            title: '',
            service: this.filterPdfService !== 'All' ? this.filterPdfService : 'Nepal Army',
            category: 'Syllabus',
            description: '',
            fileName: '',
            fileSize: '',
            fileUrl: '',
            sourceType: 'file'
        };

        const modalHtml = `
            <form id="pdf-form">
                <div class="form-row">
                    <div class="form-group col-6">
                        <label>Security Service (सुरक्षा निकाय) *</label>
                        <select id="modal-pdf-service" class="form-control" required>
                            <option value="Nepal Army" ${current.service === 'Nepal Army' ? 'selected' : ''}>Nepal Army (नेपाली सेना)</option>
                            <option value="Nepal Police" ${current.service === 'Nepal Police' ? 'selected' : ''}>Nepal Police (नेपाल प्रहरी)</option>
                            <option value="Armed Police Force" ${current.service === 'Armed Police Force' ? 'selected' : ''}>Armed Police Force (सशस्त्र प्रहरी)</option>
                            <option value="All Services" ${current.service === 'All Services' ? 'selected' : ''}>All Services (सबै सेवा)</option>
                        </select>
                    </div>

                    <div class="form-group col-6">
                        <label>Category (विधा / वर्ग) *</label>
                        <select id="modal-pdf-category" class="form-control" required>
                            <option value="Syllabus" ${current.category === 'Syllabus' ? 'selected' : ''}>Syllabus (पाठ्यक्रम PDF)</option>
                            <option value="Notes" ${current.category === 'Notes' ? 'selected' : ''}>Topic Notes (अध्ययन टिपोट PDF)</option>
                            <option value="Model Questions" ${current.category === 'Model Questions' ? 'selected' : ''}>Model Question Set (नमुना प्रश्नपत्र PDF)</option>
                            <option value="Official Notice" ${current.category === 'Official Notice' ? 'selected' : ''}>Official Notice (सूचना तथा कानुन)</option>
                        </select>
                    </div>
                </div>

                <div class="form-group mt-2">
                    <label>PDF Document Title (कागजातको शीर्षक) *</label>
                    <input type="text" id="modal-pdf-title" class="form-control" value="${current.title}" placeholder="उदा: नेपाली सेना - सैन्य पदको आधिकारिक पाठ्यक्रम" required>
                </div>

                <div class="form-group mt-2">
                    <label>Short Description (छोटो विवरण)</label>
                    <textarea id="modal-pdf-desc" class="form-control" rows="2" placeholder="कागजात सम्बन्धी संक्षिप्त जानकारी...">${current.description || ''}</textarea>
                </div>

                <!-- PDF SOURCE OPTIONS: UPLOAD FILE OR URL LINK -->
                <div class="form-group mt-3">
                    <label><strong>PDF Source (फाइल अपलोड वा लिंक) *</strong></label>
                    <div style="display:flex; gap:1rem; margin-bottom:0.75rem;">
                        <label class="radio-chip" style="flex:1;">
                            <input type="radio" name="pdf-source-choice" value="file" ${current.sourceType !== 'url' ? 'checked' : ''}> 📁 Upload PDF File
                        </label>
                        <label class="radio-chip" style="flex:1;">
                            <input type="radio" name="pdf-source-choice" value="url" ${current.sourceType === 'url' ? 'checked' : ''}> 🔗 PDF External URL / Drive Link
                        </label>
                    </div>

                    <!-- File Upload Input Area -->
                    <div id="pdf-file-area" style="${current.sourceType === 'url' ? 'display:none;' : 'display:block;'}">
                        <div class="file-upload-dropzone" style="border: 2px dashed var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; text-align: center; background: var(--bg-muted);">
                            <input type="file" id="modal-pdf-file-input" accept="application/pdf,.pdf" style="display: none;">
                            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('modal-pdf-file-input').click()">
                                📂 Choose PDF File from Computer/Phone
                            </button>
                            <div id="selected-file-label" class="mt-2 text-muted" style="font-size:0.875rem;">
                                ${current.fileName ? `Selected file: <strong>${current.fileName}</strong> (${current.fileSize || 'Existing'})` : 'No new file chosen (Maximum recommended size: 5MB for LocalStorage).'}
                            </div>
                        </div>
                    </div>

                    <!-- URL Input Area -->
                    <div id="pdf-url-area" style="${current.sourceType === 'url' ? 'display:block;' : 'display:none;'}">
                        <input type="url" id="modal-pdf-url-input" class="form-control" value="${current.sourceType === 'url' ? (current.fileUrl || '') : ''}" placeholder="https://example.com/syllabus.pdf वा Google Drive Direct Link">
                        <small class="text-muted d-block mt-1">Useful for large PDF files, PSC official PDFs, or Google Drive download links.</small>
                    </div>
                </div>

                <div class="modal-footer mt-4">
                    <button type="button" class="btn btn-secondary" onclick="AdminPanel.closeModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary" id="btn-save-pdf">
                        ${isEdit ? '💾 Update PDF Material' : '🚀 Upload & Save PDF'}
                    </button>
                </div>
            </form>
        `;

        this.openModal(isEdit ? '✏️ Update PDF Material (पिडिएफ अद्यावधिक)' : '➕ Add / Upload New PDF Material', modalHtml);

        let selectedBase64 = current.fileUrl || '';
        let selectedFileName = current.fileName || '';
        let selectedFileSize = current.fileSize || '';
        let selectedSourceType = current.sourceType || 'file';

        // Toggle file vs URL
        const fileArea = document.getElementById('pdf-file-area');
        const urlArea = document.getElementById('pdf-url-area');
        document.querySelectorAll('input[name="pdf-source-choice"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                selectedSourceType = e.target.value;
                if (selectedSourceType === 'file') {
                    fileArea.style.display = 'block';
                    urlArea.style.display = 'none';
                } else {
                    fileArea.style.display = 'none';
                    urlArea.style.display = 'block';
                }
            });
        });

        // File input change handler
        const fileInput = document.getElementById('modal-pdf-file-input');
        const labelEl = document.getElementById('selected-file-label');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
                    alert('Please select a valid PDF document (.pdf).');
                    fileInput.value = '';
                    return;
                }

                // Warn if file > 4.5MB for localStorage
                const sizeMB = file.size / (1024 * 1024);
                if (sizeMB > 4.5) {
                    alert(`The chosen file is ${sizeMB.toFixed(2)}MB. LocalStorage has a quota of ~5-10MB. We recommend using a compressed PDF or switching to the 'PDF External URL / Drive Link' option.`);
                }

                selectedFileName = file.name;
                selectedFileSize = sizeMB >= 1 ? `${sizeMB.toFixed(2)} MB` : `${(file.size / 1024).toFixed(0)} KB`;
                labelEl.innerHTML = `Selected file: <strong>${selectedFileName}</strong> (${selectedFileSize})`;

                // Read file as base64
                const reader = new FileReader();
                reader.onload = (loadEvt) => {
                    selectedBase64 = loadEvt.target.result;
                };
                reader.onerror = () => {
                    alert('Error reading the PDF file.');
                };
                reader.readAsDataURL(file);
            });
        }

        // Form submission
        const form = document.getElementById('pdf-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('modal-pdf-title').value.trim();
            const service = document.getElementById('modal-pdf-service').value;
            const category = document.getElementById('modal-pdf-category').value;
            const description = document.getElementById('modal-pdf-desc').value.trim();

            let finalFileUrl = '';
            let finalFileName = selectedFileName || 'document.pdf';
            let finalFileSize = selectedFileSize || '1.0 MB';

            if (selectedSourceType === 'url') {
                const urlVal = document.getElementById('modal-pdf-url-input').value.trim();
                if (!urlVal) {
                    alert('Please enter a valid PDF URL link.');
                    return;
                }
                finalFileUrl = urlVal;
                finalFileName = urlVal.split('/').pop().split('?')[0] || 'online_document.pdf';
                finalFileSize = 'Online Link';
            } else {
                if (!selectedBase64) {
                    alert('Please choose a PDF file to upload.');
                    return;
                }
                finalFileUrl = selectedBase64;
            }

            const pdfPayload = {
                title,
                service,
                category,
                description,
                fileName: finalFileName,
                fileSize: finalFileSize,
                fileUrl: finalFileUrl,
                sourceType: selectedSourceType
            };

            try {
                if (isEdit && current.id) {
                    Storage.updatePdf(current.id, pdfPayload);
                    if (window.App && window.App.showToast) {
                        window.App.showToast('PDF Material successfully updated! (पिडिएफ अद्यावधिक भयो)', 'success');
                    }
                } else {
                    Storage.addPdf(pdfPayload);
                    if (window.App && window.App.showToast) {
                        window.App.showToast('New PDF Material successfully uploaded and saved! (नयाँ पिडिएफ थपियो)', 'success');
                    }
                }
                this.closeModal();
                this.renderPdfTab(document.getElementById('admin-tab-container'));
            } catch (err) {
                console.error(err);
                alert('Storage quota exceeded or error saving PDF: ' + err.message + '\nTry using an external PDF URL link instead.');
            }
        });
    },

    // =========================================================================
    // 6. EXAM SETTINGS
    // =========================================================================
    renderSettingsTab(container) {
        const settings = Storage.getExamSettings();

        container.innerHTML = `
            <div class="admin-toolbar">
                <p>System-wide examination behavior and randomization preferences.</p>
            </div>

            <div class="admin-content-card max-w-600">
                <form id="exam-settings-form">
                    <div class="form-check-group">
                        <label class="toggle-switch-label">
                            <input type="checkbox" id="setting-random-q" ${settings.randomQuestions !== false ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                            <span class="toggle-text">
                                <strong>Randomize Question Order (Fisher-Yates)</strong>
                                <small class="d-block text-muted">Each student receives a freshly randomized sequence of questions.</small>
                            </span>
                        </label>
                    </div>

                    <div class="form-check-group mt-3">
                        <label class="toggle-switch-label">
                            <input type="checkbox" id="setting-random-opt" ${settings.randomOptions !== false ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                            <span class="toggle-text">
                                <strong>Randomize Options Order</strong>
                                <small class="d-block text-muted">A, B, C, D answer choices will be shuffled randomly for every question while preserving the true answer.</small>
                            </span>
                        </label>
                    </div>

                    <div class="form-check-group mt-3">
                        <label class="toggle-switch-label">
                            <input type="checkbox" id="setting-timer-warnings" ${settings.timerWarnings !== false ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                            <span class="toggle-text">
                                <strong>Timer Urgent Warnings</strong>
                                <small class="d-block text-muted">Show notification warnings at 5 minutes and 1 minute remaining.</small>
                            </span>
                        </label>
                    </div>

                    <div class="mt-4">
                        <button type="submit" class="btn btn-primary">Save Settings</button>
                    </div>
                </form>
            </div>
        `;

        const form = container.querySelector('#exam-settings-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newSettings = {
                randomQuestions: container.querySelector('#setting-random-q').checked,
                randomOptions: container.querySelector('#setting-random-opt').checked,
                timerWarnings: container.querySelector('#setting-timer-warnings').checked
            };
            Storage.saveExamSettings(newSettings);
            if (window.App && window.App.showToast) {
                window.App.showToast('Exam settings saved successfully!', 'success');
            }
        });
    }
};

window.AdminPanel = AdminPanel;
