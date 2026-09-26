/**
 * MT Security Service Preparation
 * Main Application & SPA Controller (js/app.js)
 */

const App = {
    currentRoute: 'home',
    routeParams: {},

    /**
     * Application Initialization
     */
    init() {
        this.initTheme();
        this.bindNavEvents();
        this.bindGlobalModals();
        this.handleHashChange();

        // Listen for browser back/forward or hash changes
        window.addEventListener('hashchange', () => this.handleHashChange());
    },

    // =========================================================================
    // THEME MANAGEMENT (LIGHT / DARK MODE)
    // =========================================================================
    initTheme() {
        const savedTheme = Storage.getTheme() || 'light';
        this.applyTheme(savedTheme);

        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = current === 'dark' ? 'light' : 'dark';
                this.applyTheme(newTheme);
                Storage.setTheme(newTheme);
            });
        }
    },

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const iconSpan = document.getElementById('theme-toggle-icon');
        const textSpan = document.getElementById('theme-toggle-text');

        if (iconSpan) {
            iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
        if (textSpan) {
            textSpan.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
    },

    // =========================================================================
    // NAVIGATION & ROUTING
    // =========================================================================
    bindNavEvents() {
        // Mobile Hamburger menu toggle
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        const navBackdrop = document.getElementById('nav-backdrop');

        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                if (navBackdrop) navBackdrop.classList.toggle('active');
            });
        }

        if (navBackdrop && navMenu) {
            navBackdrop.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navBackdrop.classList.remove('active');
            });
        }

        // Close mobile nav on link click
        document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
            link.addEventListener('click', (e) => {
                // If it's a dropdown toggle on mobile, let mobile accordion work
                if (e.target.classList.contains('dropdown-toggle')) {
                    if (window.innerWidth <= 992) {
                        e.preventDefault();
                        const parent = e.target.closest('.nav-item.dropdown');
                        if (parent) parent.classList.toggle('open');
                        return;
                    }
                }

                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (navBackdrop) navBackdrop.classList.remove('active');
                }
            });
        });
    },

    navigateTo(route, params = {}) {
        // Check if an active exam is in progress
        if (ExamEngine.state.isActive && route !== 'active-exam') {
            if (!confirm('You have an active examination in progress. Leaving will cancel your current exam. Do you wish to leave?')) {
                return;
            }
            if (ExamEngine.state.timerInterval) {
                clearInterval(ExamEngine.state.timerInterval);
            }
            ExamEngine.state.isActive = false;
        }

        this.currentRoute = route;
        this.routeParams = params;
        this.updateActiveNavLinks(route);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const main = document.getElementById('main-content');
        if (!main) return;

        switch (route) {
            case 'home':
                this.renderHome(main);
                break;
            case 'about':
                this.renderAbout(main);
                break;
            case 'syllabus':
                this.renderSyllabus(main, params.service || 'Nepal Army');
                break;
            case 'notes':
                this.renderNotes(main, params.service || 'Nepal Army', params.subject);
                break;
            case 'topic-exam-setup':
                this.renderTopicExamSetup(main, params.service);
                break;
            case 'model-exam-setup':
                this.renderModelExamSetup(main, params.service);
                break;
            case 'active-exam':
                this.renderActiveExam();
                break;
            case 'dashboard':
                this.renderDashboard(main);
                break;
            case 'leaderboard':
                this.renderLeaderboard(main, params.service || 'All');
                break;
            case 'admin':
                AdminPanel.init(main);
                break;
            case 'pdf-materials':
                this.renderPdfMaterials(main, params.service || 'All');
                break;
            case 'contact':
                this.renderContact(main);
                break;
            default:
                this.renderHome(main);
        }
    },

    handleHashChange() {
        const hash = window.location.hash.replace('#', '') || 'home';
        const parts = hash.split('/');
        const route = parts[0] || 'home';
        const param1 = parts[1] ? decodeURIComponent(parts[1]) : undefined;
        const param2 = parts[2] ? decodeURIComponent(parts[2]) : undefined;

        this.navigateTo(route, { service: param1, subject: param2 });
    },

    updateActiveNavLinks(route) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href') || '';
            if (href.startsWith('#' + route)) {
                link.classList.add('active');
            }
        });
    },

    // =========================================================================
    // 1. HOME VIEW
    // =========================================================================
    renderHome(container) {
        container.innerHTML = `
            <!-- HERO SECTION -->
            <section class="hero-section">
                <div class="hero-container">
                    <div class="hero-content">
                        <span class="hero-badge">🇳🇵 नेपालको अग्रणी सुरक्षा सेवा तयारी पोर्टल</span>
                        <h1 class="hero-title">Welcome to MT Security Service Preparation</h1>
                        <p class="hero-subtitle">
                            Prepare for:
                            <span class="service-highlight">🇳🇵 Nepal Army</span> • 
                            <span class="service-highlight">👮 Nepal Police</span> • 
                            <span class="service-highlight">🛡️ Armed Police Force</span>
                        </p>
                        <p class="hero-desc">
                            Comprehensive syllabus, high-yield topic notes, randomized MCQ mock tests, timed model exams, performance analytics, and leaderboards.
                        </p>
                        <div class="hero-cta-buttons">
                            <a href="#topic-exam-setup" class="btn btn-primary btn-lg shadow-sm">
                                🎯 Start Practice
                            </a>
                            <a href="#model-exam-setup" class="btn btn-secondary btn-lg shadow-sm">
                                ⏱️ Take Model Exam
                            </a>
                        </div>
                    </div>
                    <div class="hero-graphic">
                        <div class="hero-card-display">
                            <div class="hero-flag-box">
                                <img src="assets/images/flag-of-nepal.webp" alt="Flag of Nepal" class="nepal-flag-img">
                            </div>
                            <div class="hero-stats-row">
                                <div class="stat-bubble">
                                    <strong>३</strong>
                                    <span>सुरक्षा निकाय</span>
                                </div>
                                <div class="stat-bubble">
                                    <strong>100%</strong>
                                    <span>Free & Responsive</span>
                                </div>
                                <div class="stat-bubble">
                                    <strong>MCQ</strong>
                                    <span>Model Sets</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- THREE MAIN SECURITY SERVICE CARDS -->
            <section class="section service-cards-section">
                <div class="section-header text-center">
                    <h2 class="section-title">Select Your Security Service (सुरक्षा निकाय छनोट)</h2>
                    <p class="section-subtitle">Dedicated preparation hubs tailored specifically to official PSC syllabi.</p>
                </div>

                <div class="services-grid">
                    <!-- Nepal Army -->
                    <div class="service-card army-theme">
                        <div class="service-card-top">
                            <div class="service-icon-box army-bg">🇳🇵</div>
                            <span class="service-tag">नेपाली सेना</span>
                        </div>
                        <h3 class="service-title">Nepal Army</h3>
                        <h4 class="service-nepali-title">सैनिक / सैन्य पद</h4>
                        <p class="service-info">
                            तयारी: शारीरिक तन्दुरुस्ती, अंग्रेजी (२०), गणित (२०), नेपाली (३०) र सामान्य ज्ञान (३० अंक)।
                        </p>
                        <div class="service-features-list">
                            <span>✓ ५० प्रश्न मोडल सेट (५० अंक)</span>
                            <span>✓ विस्तृत शारीरिक मापदण्ड</span>
                            <span>✓ विषयगत परीक्षा अभ्यास</span>
                        </div>
                        <div class="service-card-actions">
                            <a href="#syllabus/Nepal Army" class="btn btn-outline btn-sm">View Syllabus</a>
                            <a href="#notes/Nepal Army" class="btn btn-outline btn-sm">Study Notes</a>
                            <a href="#model-exam-setup/Nepal Army" class="btn btn-primary btn-sm">Take Model Set</a>
                        </div>
                    </div>

                    <!-- Nepal Police -->
                    <div class="service-card police-theme">
                        <div class="service-card-top">
                            <div class="service-icon-box police-bg">👮</div>
                            <span class="service-tag">नेपाल प्रहरी</span>
                        </div>
                        <h3 class="service-title">Nepal Police</h3>
                        <h4 class="service-nepali-title">प्रहरी जवान</h4>
                        <p class="service-info">
                            तयारी: नेपाली रचना, अंग्रेजी, गणित, सामान्य ज्ञान, प्रहरी सेवा तथा बौद्धिक परीक्षा (IQ)।
                        </p>
                        <div class="service-features-list">
                            <span>✓ ४० प्रश्न मोडल सेट (४० अंक)</span>
                            <span>✓ प्रहरी ऐन र दर्जा चिन्ह</span>
                            <span>✓ IQ & रीजनिंग ट्रिक्स</span>
                        </div>
                        <div class="service-card-actions">
                            <a href="#syllabus/Nepal Police" class="btn btn-outline btn-sm">View Syllabus</a>
                            <a href="#notes/Nepal Police" class="btn btn-outline btn-sm">Study Notes</a>
                            <a href="#model-exam-setup/Nepal Police" class="btn btn-primary btn-sm">Take Model Set</a>
                        </div>
                    </div>

                    <!-- Armed Police Force -->
                    <div class="service-card apf-theme">
                        <div class="service-card-top">
                            <div class="service-icon-box apf-bg">🛡️</div>
                            <span class="service-tag">सशस्त्र प्रहरी बल</span>
                        </div>
                        <h3 class="service-title">Armed Police Force</h3>
                        <h4 class="service-nepali-title">सशस्त्र प्रहरी जवान</h4>
                        <p class="service-info">
                            तयारी: सीमा सुरक्षा (BOP), विपद् व्यवस्थापन, दंगा नियन्त्रण र पेशा सम्बन्धी विशेष विषय।
                        </p>
                        <div class="service-features-list">
                            <span>✓ १५ प्रश्न मोडल सेट (२ अंक/प्रश्न = ३० अंक)</span>
                            <span>✓ सीमा सुरक्षा तथा उद्धार ज्ञान</span>
                            <span>✓ उच्च-अंक मोडल सेट</span>
                        </div>
                        <div class="service-card-actions">
                            <a href="#syllabus/Armed Police Force" class="btn btn-outline btn-sm">View Syllabus</a>
                            <a href="#notes/Armed Police Force" class="btn btn-outline btn-sm">Study Notes</a>
                            <a href="#model-exam-setup/Armed Police Force" class="btn btn-primary btn-sm">Take Model Set</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- WHY CHOOSE MT PREPARATION -->
            <section class="section features-highlight-section">
                <div class="features-grid">
                    <div class="feature-item">
                        <div class="feature-icon">🎲</div>
                        <h4>Double Randomization</h4>
                        <p>Questions and options (A, B, C, D) are freshly shuffled every session using Fisher-Yates algorithms.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">⏱️</div>
                        <h4>Real-Time Timed Exam</h4>
                        <p>Official countdown timers with urgent warnings and automatic submission when time concludes.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">📊</div>
                        <h4>Instant Analytics & Review</h4>
                        <p>Detailed scorecard, percentage, pass/fail status, and explanation for every correct and wrong answer.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🏆</div>
                        <h4>Local Leaderboard</h4>
                        <p>Track your high scores, compare past attempts, and monitor rank progress directly on your device.</p>
                    </div>
                </div>
            </section>
        `;
    },

    // =========================================================================
    // 2. ABOUT VIEW
    // =========================================================================
    renderAbout(container) {
        container.innerHTML = `
            <div class="page-container">
                <div class="page-header">
                    <h1 class="page-title">About MT Security Service Preparation</h1>
                    <p class="page-subtitle">हाम्रो उद्देश्य: नेपालका सुरक्षा निकायहरूमा प्रवेश गर्न चाहने युवाहरूका लागि निःशुल्क, स्तरीय र प्रभावकारी अनलाइन परीक्षा तयारी।</p>
                </div>

                <div class="about-card content-card">
                    <h3>हाम्रो परिचय (About the Platform)</h3>
                    <p>
                        <strong>MT Security Service Preparation</strong> is an educational preparation platform designed to help candidates prepare for Nepal Army (नेपाली सेना), Nepal Police (नेपाल प्रहरी), and Armed Police Force (सशस्त्र प्रहरी बल) examinations through syllabus, notes, topic-wise practice, and model examinations.
                    </p>
                    <p>
                        नेपालका सुरक्षा निकायहरू (सैनिक, प्रहरी जवान तथा सशस्त्र प्रहरी जवान) को खुला प्रतियोगितात्मक परीक्षामा सामेल हुने उम्मेदवारहरूलाई परीक्षा प्रणाली, शारीरिक तन्दुरुस्ती मापदण्ड, लिखित पाठ्यक्रम र वस्तुगत बहुउत्तर (MCQ) प्रश्नहरूको अभ्यासमार्फत आत्मविश्वास बढाउन यो प्लेटफर्म समर्पित छ।
                    </p>

                    <hr class="my-4">

                    <h3>प्रमुख विशेषताहरू (Key Features):</h3>
                    <div class="about-features-list">
                        <div class="about-feat-row">
                            <strong>📋 आधिकारिक पाठ्यक्रम (Official Syllabus):</strong>
                            <span>नेपाली सेना, नेपाल प्रहरी र सशस्त्र प्रहरी बलका भर्ना छनोटका सबै चरणहरूको स्पष्ट र विस्तृत विवरण।</span>
                        </div>
                        <div class="about-feat-row">
                            <strong>📖 विषयगत टिपोट तथा सुत्र (High-Yield Notes):</strong>
                            <span>नेपाली व्याकरण, अङ्ग्रेजी नियमहरू, गणितका सर्टकट सुत्रहरू, सामान्य ज्ञान र पेशा सम्बन्धी महत्वपूर्ण तथ्यहरू।</span>
                        </div>
                        <div class="about-feat-row">
                            <strong>🎯 विषयगत बहुउत्तर अभ्यास (Topic-wise MCQs):</strong>
                            <span>आफ्नो रोजाइको विषय र प्रश्न संख्या छानेर जतिपटक पनि अभ्यास गर्न सकिने सुविधा।</span>
                        </div>
                        <div class="about-feat-row">
                            <strong>⏱️ वास्तविक मोडल सेट परीक्षा (Full Model Sets):</strong>
                            <span>लोकसेवा आयोग र सम्बन्धित सुरक्षा निकायको तोकिएको अंक र समय अनुसार पूर्ण परीक्षाको अनुभव।</span>
                        </div>
                        <div class="about-feat-row">
                            <strong>📝 विस्तृत नतिजा र उत्तर विश्लेषण (Instant Review):</strong>
                            <span>कुन उत्तर सही र कुन गलत भयो, कारण र स्पष्टीकरण (Explanation) सहित तत्काल समीक्षा।</span>
                        </div>
                        <div class="about-feat-row">
                            <strong>🔒 गोपनीयता र सजिलो पहुँच (No Password Required):</strong>
                            <span>कुनै झन्झटिलो दर्ता वा पासवर्ड विना केवल आफ्नो नाम प्रविष्ट गरी निःशुल्क परीक्षा सुरु गर्न सकिने।</span>
                        </div>
                    </div>

                    <div class="about-quote-box mt-4">
                        <p><em>"अनुशासन, कर्तव्यनिष्ठा र राष्ट्रसेवा सुरक्षा निकायको मूल मन्त्र हो। सही तयारी नै सफलताको पहिलो कदम हो।"</em></p>
                    </div>
                </div>
            </div>
        `;
    },

    // =========================================================================
    // 3. SYLLABUS VIEW
    // =========================================================================
    renderSyllabus(container, selectedService = 'Nepal Army') {
        const syllabusData = Storage.getData(StorageKeys.SYLLABUS_DATA, window.defaultSyllabusData || {});
        const currentSyllabus = syllabusData[selectedService] || syllabusData['Nepal Army'];

        container.innerHTML = `
            <div class="page-container">
                <div class="page-header">
                    <span class="badge badge-lg badge-service">${currentSyllabus.serviceNepali}</span>
                    <h1 class="page-title">${currentSyllabus.serviceName} Syllabus</h1>
                    <p class="page-subtitle">${currentSyllabus.postName} पदको छनोट प्रक्रिया तथा लिखित परीक्षाको विस्तृत पाठ्यक्रम</p>
                </div>

                <!-- Service Selector Tabs -->
                <div class="service-pills-nav">
                    <button class="pill-btn ${selectedService === 'Nepal Army' ? 'active' : ''}" data-service="Nepal Army">
                        🇳🇵 Nepal Army (सैनिक)
                    </button>
                    <button class="pill-btn ${selectedService === 'Nepal Police' ? 'active' : ''}" data-service="Nepal Police">
                        👮 Nepal Police (प्रहरी जवान)
                    </button>
                    <button class="pill-btn ${selectedService === 'Armed Police Force' ? 'active' : ''}" data-service="Armed Police Force">
                        🛡️ Armed Police Force (सशस्त्र प्रहरी जवान)
                    </button>
                </div>

                <!-- Main Syllabus Content Area -->
                <div class="syllabus-main-box content-card mt-3">
                    <div class="syllabus-meta">
                        <p class="lead-text">${currentSyllabus.description}</p>
                    </div>

                    ${(() => {
                        const syllabusPdfs = Storage.getPdfData().filter(p => 
                            (p.service === selectedService || p.service === 'All Services') && p.category === 'Syllabus'
                        );
                        if (syllabusPdfs.length > 0) {
                            const p = syllabusPdfs[0];
                            return `
                                <div class="syllabus-pdf-box mt-3" style="background:var(--bg-muted); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1rem 1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                                    <div style="display:flex; align-items:center; gap:0.75rem;">
                                        <div style="font-size:2rem; width:45px; height:45px; border-radius:var(--radius-md); background:var(--bg-surface); display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-sm);">📄</div>
                                        <div>
                                            <strong>${p.title}</strong>
                                            <div style="font-size:0.825rem; color:var(--text-muted);">
                                                फाइल: ${p.fileName || 'Syllabus.pdf'} • आकार: ${p.fileSize || 'N/A'} • 📥 ${p.downloads || 0} downloads
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display:flex; gap:0.5rem;">
                                        <button class="btn btn-primary btn-sm btn-download-pdf-item" data-id="${p.id}">📥 Download PDF</button>
                                        <button class="btn btn-outline btn-sm btn-view-pdf-item" data-id="${p.id}">👁️ View PDF</button>
                                    </div>
                                </div>
                            `;
                        }
                        return '';
                    })()}

                    <div class="phases-timeline">
                        ${currentSyllabus.phases.map((phase, idx) => `
                            <div class="phase-card">
                                <div class="phase-badge">चरण ${idx + 1}</div>
                                <h3 class="phase-title">${phase.phaseTitle}</h3>
                                <div class="phase-items-list">
                                    ${phase.items.map(item => `
                                        <div class="phase-item-line ${item.startsWith('•') || item.startsWith('१.') || item.startsWith('२.') || item.startsWith('३.') || item.startsWith('४.') ? 'nested-item' : ''}">
                                            ${item}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="syllabus-footer-actions mt-4">
                        <a href="#pdf-materials/${selectedService}" class="btn btn-secondary">📄 View All ${selectedService} PDFs</a>
                        <a href="#notes/${selectedService}" class="btn btn-outline">📚 Study Notes for ${selectedService}</a>
                        <a href="#topic-exam-setup/${selectedService}" class="btn btn-outline">🎯 Practice Topic MCQs</a>
                        <a href="#model-exam-setup/${selectedService}" class="btn btn-primary">⏱️ Take Full Model Exam</a>
                    </div>
                </div>
            </div>
        `;

        // Switch service tab
        container.querySelectorAll('.service-pills-nav .pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.service;
                window.location.hash = `#syllabus/${svc}`;
            });
        });

        // PDF download & preview handlers
        container.querySelectorAll('.btn-download-pdf-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const pdf = Storage.getPdfData().find(p => p.id === id);
                if (pdf && window.AdminPanel) window.AdminPanel.downloadPdf(pdf);
            });
        });

        container.querySelectorAll('.btn-view-pdf-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const pdf = Storage.getPdfData().find(p => p.id === id);
                if (pdf && window.AdminPanel) window.AdminPanel.previewPdf(pdf);
            });
        });
    },

    // =========================================================================
    // 4. TOPIC WISE NOTES VIEW
    // =========================================================================
    renderNotes(container, selectedService = 'Nepal Army', selectedSubject = null) {
        const notesData = Storage.getData(StorageKeys.NOTES_DATA, window.defaultNotesData || {});
        const serviceNotes = notesData[selectedService] || {};
        const availableSubjects = Object.keys(serviceNotes);

        const activeSubject = selectedSubject && availableSubjects.includes(selectedSubject)
            ? selectedSubject
            : (availableSubjects[0] || '');

        const currentNotesList = (serviceNotes[activeSubject] || []);

        container.innerHTML = `
            <div class="page-container">
                <div class="page-header">
                    <span class="badge badge-lg badge-service">${selectedService} Notes</span>
                    <h1 class="page-title">Topic Wise Notes (विषयगत अध्ययन टिपोट)</h1>
                    <p class="page-subtitle">Exam-oriented, simple, and comprehensive notes with formulas, tips, and examples.</p>
                </div>

                <!-- Service Selector -->
                <div class="service-pills-nav">
                    <button class="pill-btn ${selectedService === 'Nepal Army' ? 'active' : ''}" data-service="Nepal Army">
                        🇳🇵 Nepal Army
                    </button>
                    <button class="pill-btn ${selectedService === 'Nepal Police' ? 'active' : ''}" data-service="Nepal Police">
                        👮 Nepal Police
                    </button>
                    <button class="pill-btn ${selectedService === 'Armed Police Force' ? 'active' : ''}" data-service="Armed Police Force">
                        🛡️ Armed Police Force
                    </button>
                </div>

                <!-- Subject Cards Grid -->
                <div class="subjects-selector-grid mt-3">
                    ${availableSubjects.map(sub => `
                        <button class="subject-card-btn ${sub === activeSubject ? 'active' : ''}" data-subject="${sub}">
                            <span class="sub-name">${sub}</span>
                            <span class="sub-count">${(serviceNotes[sub] || []).length} Topics</span>
                        </button>
                    `).join('')}
                </div>

                <!-- Notes Content Area -->
                <div class="notes-content-container mt-4">
                    ${currentNotesList.length === 0 ? `
                        <div class="empty-notice content-card text-center">
                            <p>No notes published for this subject yet. Check back soon or add via Admin Panel!</p>
                        </div>
                    ` : currentNotesList.map(note => `
                        <div class="note-viewer-card content-card">
                            <div class="note-header">
                                <h2 class="note-title">${note.title}</h2>
                                ${note.subtitle ? `<div class="note-subtitle text-muted">${note.subtitle}</div>` : ''}
                            </div>

                            <div class="note-body-text">
                                ${this.formatNoteMarkdown(note.content)}
                            </div>

                            ${note.keyPoints && note.keyPoints.length > 0 ? `
                                <div class="note-key-points">
                                    <h4>💡 स्मरण टिप्स र महत्वपूर्ण बुँदाहरू (Key Points):</h4>
                                    <ul>
                                        ${note.keyPoints.map(kp => `<li>${kp}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Switch service
        container.querySelectorAll('.service-pills-nav .pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.service;
                window.location.hash = `#notes/${svc}`;
            });
        });

        // Switch subject
        container.querySelectorAll('.subject-card-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const sub = e.currentTarget.dataset.subject;
                window.location.hash = `#notes/${selectedService}/${sub}`;
            });
        });
    },

    formatNoteMarkdown(text) {
        if (!text) return '';
        // Basic markdown formatting for headings, bullets, bold, tables
        let html = text
            .replace(/^### (.*$)/gim, '<h3 class="note-heading-3">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="note-heading-2">$1</h2>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/gim, '<em>$1</em>')
            .replace(/💡 (.*$)/gim, '<div class="note-tip-box">💡 $1</div>')
            .replace(/\n\n/g, '<p></p>')
            .replace(/\n/g, '<br>');

        return html;
    },

    // =========================================================================
    // 4.5 PDF MATERIALS & DOWNLOAD CENTER
    // =========================================================================
    pdfFilterCategory: 'All',
    pdfSearchQueryUser: '',

    renderPdfMaterials(container, selectedService = 'All') {
        const pdfList = Storage.getPdfData();
        const services = ['All', 'Nepal Army', 'Nepal Police', 'Armed Police Force'];
        const activeService = services.includes(selectedService) ? selectedService : 'All';

        let filtered = pdfList.filter(p => {
            const matchesService = activeService === 'All' || p.service === activeService || p.service === 'All Services';
            const matchesCategory = this.pdfFilterCategory === 'All' || p.category === this.pdfFilterCategory;
            const q = (this.pdfSearchQueryUser || '').toLowerCase();
            const matchesSearch = !q || 
                (p.title && p.title.toLowerCase().includes(q)) ||
                (p.description && p.description.toLowerCase().includes(q)) ||
                (p.fileName && p.fileName.toLowerCase().includes(q));
            return matchesService && matchesCategory && matchesSearch;
        });

        container.innerHTML = `
            <div class="page-container">
                <div class="page-header text-center">
                    <span class="badge badge-lg badge-service">📄 Resources & Downloads</span>
                    <h1 class="page-title">PDF Materials & Downloads (पिडिएफ सामग्री)</h1>
                    <p class="page-subtitle">आधिकारिक पाठ्यक्रम, नमुना प्रश्नपत्र र विषयगत टिपोटहरू निःशुल्क डाउनलोड गर्नुहोस्।</p>
                </div>

                <!-- Service Selector Pills -->
                <div class="service-pills-nav text-center">
                    <button class="pill-btn ${activeService === 'All' ? 'active' : ''}" data-service="All">All Services (सबै)</button>
                    <button class="pill-btn ${activeService === 'Nepal Army' ? 'active' : ''}" data-service="Nepal Army">🇳🇵 Nepal Army</button>
                    <button class="pill-btn ${activeService === 'Nepal Police' ? 'active' : ''}" data-service="Nepal Police">👮 Nepal Police</button>
                    <button class="pill-btn ${activeService === 'Armed Police Force' ? 'active' : ''}" data-service="Armed Police Force">🛡️ Armed Police Force</button>
                </div>

                <!-- Category & Search Filter Bar -->
                <div class="content-card mt-3 mb-4" style="padding: 1rem 1.5rem;">
                    <div class="d-flex-between">
                        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
                            <label style="font-weight:600; font-size:0.875rem;">Category:</label>
                            <select id="user-pdf-cat-filter" class="form-control" style="width:auto; padding:0.4rem 0.75rem;">
                                <option value="All" ${this.pdfFilterCategory === 'All' ? 'selected' : ''}>All Categories</option>
                                <option value="Syllabus" ${this.pdfFilterCategory === 'Syllabus' ? 'selected' : ''}>Syllabus (पाठ्यक्रम)</option>
                                <option value="Notes" ${this.pdfFilterCategory === 'Notes' ? 'selected' : ''}>Topic Notes (नोट्स)</option>
                                <option value="Model Questions" ${this.pdfFilterCategory === 'Model Questions' ? 'selected' : ''}>Model Question Papers (नमुना प्रश्नपत्र)</option>
                                <option value="Official Notice" ${this.pdfFilterCategory === 'Official Notice' ? 'selected' : ''}>Official Notice (सूचना तथा कानुन)</option>
                            </select>
                        </div>
                        <div style="min-width:240px;">
                            <input type="text" id="user-pdf-search" class="form-control" placeholder="Search PDF title or topic..." value="${this.pdfSearchQueryUser}">
                        </div>
                    </div>
                </div>

                <!-- PDF Cards Grid -->
                <div class="pdf-materials-grid">
                    ${filtered.length === 0 ? `
                        <div class="content-card text-center" style="grid-column: 1 / -1; padding: 3rem;">
                            <p class="text-muted" style="font-size:1.1rem;">No PDF materials found matching your filter.</p>
                            <div class="mt-3">
                                <a href="#admin" class="btn btn-outline btn-sm">🛠️ Upload PDFs via Admin Panel</a>
                            </div>
                        </div>
                    ` : filtered.map(pdf => `
                        <div class="pdf-card content-card" style="display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                                    <span class="badge badge-service">${pdf.service}</span>
                                    <span class="badge badge-sub">${pdf.category}</span>
                                </div>

                                <div style="display:flex; gap:0.75rem; align-items:flex-start; margin-bottom:0.75rem;">
                                    <div style="font-size:2.2rem; line-height:1;">📄</div>
                                    <div>
                                        <h3 style="font-size:1.15rem; margin-bottom:0.35rem; line-height:1.4;">${pdf.title}</h3>
                                        ${pdf.description ? `<p class="text-muted" style="font-size:0.875rem;">${pdf.description}</p>` : ''}
                                    </div>
                                </div>
                            </div>

                            <div style="border-top:1px solid var(--border-color); padding-top:1rem; margin-top:1rem;">
                                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">
                                    <span>📦 ${pdf.fileSize || 'PDF'}</span>
                                    <span>📅 ${pdf.uploadedAt || 'Recently updated'}</span>
                                    ${pdf.downloads ? `<span>📥 ${pdf.downloads} dl</span>` : ''}
                                </div>

                                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
                                    <button class="btn btn-outline btn-sm btn-user-view-pdf" data-id="${pdf.id}">
                                        👁️ View PDF
                                    </button>
                                    <button class="btn btn-primary btn-sm btn-user-download-pdf" data-id="${pdf.id}">
                                        📥 Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Filter events
        container.querySelectorAll('.service-pills-nav .pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.service;
                window.location.hash = `#pdf-materials/${svc}`;
            });
        });

        const catSelect = container.querySelector('#user-pdf-cat-filter');
        if (catSelect) {
            catSelect.addEventListener('change', (e) => {
                this.pdfFilterCategory = e.target.value;
                this.renderPdfMaterials(container, activeService);
            });
        }

        const searchInput = container.querySelector('#user-pdf-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.pdfSearchQueryUser = e.target.value;
                this.renderPdfMaterials(container, activeService);
            });
        }

        // View and Download click handlers
        container.querySelectorAll('.btn-user-view-pdf').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const pdf = Storage.getPdfData().find(p => p.id === id);
                if (pdf && window.AdminPanel) window.AdminPanel.previewPdf(pdf);
            });
        });

        container.querySelectorAll('.btn-user-download-pdf').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.dataset.id;
                const pdf = Storage.getPdfData().find(p => p.id === id);
                if (pdf && window.AdminPanel) {
                    window.AdminPanel.downloadPdf(pdf);
                    this.renderPdfMaterials(container, activeService);
                }
            });
        });
    },

    // =========================================================================
    // 5. TOPIC WISE EXAM SETUP
    // =========================================================================
    renderTopicExamSetup(container, preSelectedService = 'Nepal Army') {
        const questions = Storage.getData(StorageKeys.QUESTION_DATA, window.defaultQuestionData || []);
        const services = ["Nepal Army", "Nepal Police", "Armed Police Force"];
        const selectedService = services.includes(preSelectedService) ? preSelectedService : 'Nepal Army';

        // Extract subjects for this service
        const subjects = Array.from(new Set(
            questions.filter(q => q.service === selectedService).map(q => q.subject)
        ));

        const savedCandidateName = Storage.getCandidateName();

        container.innerHTML = `
            <div class="page-container max-w-700">
                <div class="page-header text-center">
                    <span class="badge badge-lg">🎯 Practice Mode</span>
                    <h1 class="page-title">Topic Wise MCQ Exam</h1>
                    <p class="page-subtitle">अभ्यास गर्नुहोस्: सेवा, विषय र प्रश्न संख्या छानेर आफ्नो गतिमा तयारी गर्नुहोस्।</p>
                </div>

                <div class="setup-card content-card">
                    <form id="topic-exam-form">
                        <div class="form-group">
                            <label><strong>1. Select Security Service (सुरक्षा निकाय) *</strong></label>
                            <select id="exam-service" class="form-control" required>
                                ${services.map(s => `
                                    <option value="${s}" ${s === selectedService ? 'selected' : ''}>${s}</option>
                                `).join('')}
                            </select>
                        </div>

                        <div class="form-group mt-3">
                            <label><strong>2. Select Subject (विषय) *</strong></label>
                            <select id="exam-subject" class="form-control" required>
                                ${subjects.map(sub => `
                                    <option value="${sub}">${sub}</option>
                                `).join('')}
                            </select>
                        </div>

                        <div class="form-group mt-3">
                            <label><strong>3. Number of Questions (प्रश्न संख्या) *</strong></label>
                            <div class="question-count-options">
                                <label class="radio-chip"><input type="radio" name="q-count" value="5"> 5 Qs</label>
                                <label class="radio-chip"><input type="radio" name="q-count" value="10" checked> 10 Qs</label>
                                <label class="radio-chip"><input type="radio" name="q-count" value="15"> 15 Qs</label>
                                <label class="radio-chip"><input type="radio" name="q-count" value="25"> 25 Qs</label>
                            </div>
                        </div>

                        <div class="form-group mt-3">
                            <label><strong>Candidate Name (परीक्षार्थीको नाम) *</strong></label>
                            <input type="text" id="exam-candidate-name" class="form-control" 
                                   value="${savedCandidateName}" placeholder="Enter your full name" required>
                        </div>

                        <div class="exam-rules-box mt-3">
                            <h4>📋 परीक्षा सम्बन्धी जानकारी:</h4>
                            <ul>
                                <li>प्रश्न र विकल्पहरू प्रत्येक पटक स्वचालित रूपमा <strong>Random</strong> हुनेछन्।</li>
                                <li>प्रत्येक प्रश्नको उत्तर पश्चात सही उत्तर र स्पष्टीकरण अन्तिम नतिजामा हेर्न पाइनेछ।</li>
                                <li>प्रति प्रश्न १ मिनेटको समय निर्धारण गरिएको छ।</li>
                            </ul>
                        </div>

                        <div class="mt-4 text-center">
                            <button type="submit" class="btn btn-primary btn-lg w-100">
                                🚀 Start Topic Exam
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        // Update subjects dropdown dynamically when service changes
        const serviceSelect = container.querySelector('#exam-service');
        const subjectSelect = container.querySelector('#exam-subject');

        serviceSelect.addEventListener('change', (e) => {
            const svc = e.target.value;
            const newSubjects = Array.from(new Set(
                questions.filter(q => q.service === svc).map(q => q.subject)
            ));
            subjectSelect.innerHTML = newSubjects.map(s => `<option value="${s}">${s}</option>`).join('');
        });

        // Form submission to start exam
        const form = container.querySelector('#topic-exam-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const service = serviceSelect.value;
            const subject = subjectSelect.value;
            const qCountRadio = container.querySelector('input[name="q-count"]:checked');
            const questionCount = qCountRadio ? Number(qCountRadio.value) : 10;
            const candidateName = container.querySelector('#exam-candidate-name').value.trim();

            if (!candidateName) {
                alert('Please enter candidate name.');
                return;
            }

            try {
                ExamEngine.startTopicWiseExam({
                    service,
                    subject,
                    questionCount,
                    candidateName
                });
            } catch (err) {
                alert(err.message);
            }
        });
    },

    // =========================================================================
    // 6. MODEL SET EXAM SETUP
    // =========================================================================
    renderModelExamSetup(container, preSelectedService = 'Nepal Army') {
        const modelConfigs = Storage.getData(StorageKeys.MODEL_SET_DATA, window.defaultModelSetData || {});
        const services = ["Nepal Army", "Nepal Police", "Armed Police Force"];
        const selectedService = services.includes(preSelectedService) ? preSelectedService : 'Nepal Army';
        const config = modelConfigs[selectedService] || modelConfigs['Nepal Army'];
        const savedCandidateName = Storage.getCandidateName();

        container.innerHTML = `
            <div class="page-container max-w-750">
                <div class="page-header text-center">
                    <span class="badge badge-lg badge-service">⏱️ Official Model Set</span>
                    <h1 class="page-title">Full Model Set Examination</h1>
                    <p class="page-subtitle">लोकसेवा आयोगको ढाँचा अनुसार निर्धारित समय र अंकमा आधारित पूर्ण नमुना परीक्षा।</p>
                </div>

                <!-- Service Selector -->
                <div class="service-pills-nav text-center">
                    ${services.map(s => `
                        <button class="pill-btn ${s === selectedService ? 'active' : ''}" data-service="${s}">
                            ${s === 'Nepal Army' ? '🇳🇵 Nepal Army' : (s === 'Nepal Police' ? '👮 Nepal Police' : '🛡️ APF')}
                        </button>
                    `).join('')}
                </div>

                <div class="setup-card content-card mt-3">
                    <div class="model-set-overview">
                        <div class="model-header-badge">
                            <h3>${config.serviceNepali || selectedService}</h3>
                            <div class="model-badge-row">
                                <span class="badge">❓ ${config.totalQuestions} Questions</span>
                                <span class="badge">🎯 ${config.totalMarks} Full Marks</span>
                                <span class="badge">⏱️ ${config.duration} Minutes</span>
                                <span class="badge">⭐ ${config.markPerQuestion || 1} Mark/Q</span>
                            </div>
                        </div>

                        <div class="distribution-list-box mt-3">
                            <h4>विषयगत प्रश्न विभाजन (Subject Distribution):</h4>
                            <div class="dist-grid">
                                ${(config.distribution || []).map(d => `
                                    <div class="dist-card">
                                        <strong>${d.subject}</strong>
                                        <span>${d.count} Questions (${d.marks} Marks)</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="instructions-box mt-3">
                            <h4>📋 परीक्षाका नियम तथा निर्देशनहरू:</h4>
                            <ul>
                                ${(config.instructions || []).map(ins => `<li>${ins}</li>`).join('')}
                                <li>परीक्षामा <strong>समय समाप्त हुनासाथ स्वतः सबमिट</strong> हुनेछ।</li>
                            </ul>
                        </div>
                    </div>

                    <form id="model-exam-form" class="mt-4">
                        <div class="form-group">
                            <label><strong>Enter Candidate Name (परीक्षार्थीको नाम) *</strong></label>
                            <input type="text" id="model-candidate-name" class="form-control form-control-lg" 
                                   value="${savedCandidateName}" placeholder="Your full name" required>
                        </div>

                        <div class="mt-4 text-center">
                            <button type="submit" class="btn btn-primary btn-lg w-100">
                                🚀 Start ${selectedService} Model Exam
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        // Switch service tabs
        container.querySelectorAll('.service-pills-nav .pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.service;
                window.location.hash = `#model-exam-setup/${svc}`;
            });
        });

        // Form submit
        const form = container.querySelector('#model-exam-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const candidateName = container.querySelector('#model-candidate-name').value.trim();
            if (!candidateName) {
                alert('Please enter your name.');
                return;
            }

            try {
                ExamEngine.startModelSetExam({
                    service: selectedService,
                    candidateName
                });
            } catch (err) {
                alert(err.message);
            }
        });
    },

    // =========================================================================
    // 7. ACTIVE EXAM VIEW (INTERACTIVE TEST TAKING)
    // =========================================================================
    renderActiveExam() {
        const state = ExamEngine.state;
        if (!state.isActive) {
            this.navigateTo('home');
            return;
        }

        const container = document.getElementById('main-content');
        if (!container) return;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        container.innerHTML = `
            <div class="exam-active-wrapper">
                <!-- STICKY EXAM TOP BAR -->
                <div class="exam-top-bar">
                    <div class="exam-info-col">
                        <div class="exam-title-badge">${state.service} - ${state.examType === 'model' ? 'Model Set' : state.subject}</div>
                        <div class="candidate-tag">👤 Candidate: <strong>${state.candidateName}</strong></div>
                    </div>

                    <div class="exam-timer-col">
                        <div class="timer-box">
                            <span class="timer-icon">⏳</span>
                            <span id="exam-timer-display" class="timer-digits">${ExamEngine.formatTime(state.timeRemainingSeconds)}</span>
                        </div>
                        <div class="timer-sub-bar-wrap"><div id="exam-timer-bar" class="exam-timer-bar" style="width: 100%;"></div></div>
                    </div>

                    <div class="exam-action-col">
                        <button class="btn btn-danger btn-sm" id="btn-submit-exam">
                            ✓ Submit Exam
                        </button>
                    </div>
                </div>

                <!-- PROGRESS BAR -->
                <div class="exam-progress-bar-container">
                    <div id="exam-progress-bar" class="exam-progress-bar" style="width: 0%;"></div>
                </div>

                <div class="exam-main-grid">
                    <!-- LEFT COLUMN: QUESTION CARD -->
                    <div class="exam-question-area" id="exam-question-card-container">
                        <!-- Dynamic Question Rendered Here -->
                    </div>

                    <!-- RIGHT COLUMN: QUESTION PALETTE -->
                    <div class="exam-palette-area">
                        <div class="palette-card content-card">
                            <div class="palette-header">
                                <h4>Question Status</h4>
                                <span class="palette-legend">
                                    <span class="legend-item"><span class="dot answered"></span> Answered</span>
                                    <span class="legend-item"><span class="dot current"></span> Current</span>
                                    <span class="legend-item"><span class="dot unvisited"></span> Unanswered</span>
                                </span>
                            </div>

                            <div class="palette-grid" id="palette-grid-container">
                                <!-- Palette items rendered here -->
                            </div>

                            <div class="palette-summary mt-3">
                                <div class="stat-row">
                                    <span>Total Questions:</span> <strong>${state.totalQuestions}</strong>
                                </div>
                                <div class="stat-row">
                                    <span>Answered:</span> <strong id="palette-answered-count">0</strong>
                                </div>
                                <div class="stat-row">
                                    <span>Remaining:</span> <strong id="palette-remaining-count">${state.totalQuestions}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.renderCurrentQuestion();
        this.renderQuestionPalette();

        // Submit button click
        document.getElementById('btn-submit-exam').addEventListener('click', () => {
            ExamEngine.confirmAndSubmit();
        });
    },

    renderCurrentQuestion() {
        const state = ExamEngine.state;
        const qContainer = document.getElementById('exam-question-card-container');
        if (!qContainer || !state.questions[state.currentIndex]) return;

        const q = state.questions[state.currentIndex];
        const currentIdx = state.currentIndex;
        const total = state.totalQuestions;
        const selectedOptIdx = state.userAnswers[currentIdx];

        // Update progress bar
        const progressBar = document.getElementById('exam-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${((currentIdx + 1) / total) * 100}%`;
        }

        qContainer.innerHTML = `
            <div class="question-card content-card">
                <div class="question-header">
                    <span class="q-number-badge">Question ${currentIdx + 1} of ${total}</span>
                    <span class="q-subject-badge">${q.subject}</span>
                    <span class="q-marks-badge">${q.marks} Mark${q.marks > 1 ? 's' : ''}</span>
                </div>

                <div class="question-text">
                    ${q.question}
                </div>

                <div class="options-group">
                    ${q.options.map((optText, optIdx) => `
                        <label class="option-label ${selectedOptIdx === optIdx ? 'selected' : ''}" data-opt="${optIdx}">
                            <input type="radio" name="q-option-choice" value="${optIdx}" ${selectedOptIdx === optIdx ? 'checked' : ''}>
                            <span class="opt-prefix">${['A', 'B', 'C', 'D'][optIdx] || optIdx + 1}</span>
                            <span class="opt-text">${optText}</span>
                        </label>
                    `).join('')}
                </div>

                <div class="question-card-footer">
                    <div class="left-nav-buttons">
                        <button class="btn btn-outline" id="btn-prev-q" ${currentIdx === 0 ? 'disabled' : ''}>
                            ⬅ Previous
                        </button>
                        <button class="btn btn-secondary btn-sm" id="btn-clear-answer" ${selectedOptIdx === undefined ? 'style="display:none;"' : ''}>
                            Clear Answer
                        </button>
                    </div>

                    <div class="right-nav-buttons">
                        ${currentIdx < total - 1 ? `
                            <button class="btn btn-primary" id="btn-next-q">
                                Next ➡
                            </button>
                        ` : `
                            <button class="btn btn-success" id="btn-final-submit">
                                Review & Submit
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;

        // Option click handlers
        qContainer.querySelectorAll('.option-label').forEach(label => {
            label.addEventListener('click', (e) => {
                const optIdx = Number(label.dataset.opt);
                ExamEngine.selectAnswer(currentIdx, optIdx);
                this.renderCurrentQuestion();
                this.updatePaletteCounts();
            });
        });

        // Clear button
        const clearBtn = qContainer.querySelector('#btn-clear-answer');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                ExamEngine.clearAnswer(currentIdx);
                this.renderCurrentQuestion();
                this.updatePaletteCounts();
            });
        }

        // Prev button
        const prevBtn = qContainer.querySelector('#btn-prev-q');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => ExamEngine.prevQuestion());
        }

        // Next button
        const nextBtn = qContainer.querySelector('#btn-next-q');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => ExamEngine.nextQuestion());
        }

        // Final Submit on last question
        const finalSubmit = qContainer.querySelector('#btn-final-submit');
        if (finalSubmit) {
            finalSubmit.addEventListener('click', () => ExamEngine.confirmAndSubmit());
        }

        this.renderQuestionPalette();
    },

    renderQuestionPalette() {
        const grid = document.getElementById('palette-grid-container');
        if (!grid) return;

        const state = ExamEngine.state;
        grid.innerHTML = state.questions.map((q, idx) => {
            const isAnswered = state.userAnswers[idx] !== undefined;
            const isCurrent = idx === state.currentIndex;

            let statusClass = 'unvisited';
            if (isAnswered) statusClass = 'answered';
            if (isCurrent) statusClass += ' current';

            return `
                <button class="palette-num-btn ${statusClass}" data-index="${idx}">
                    ${idx + 1}
                </button>
            `;
        }).join('');

        grid.querySelectorAll('.palette-num-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = Number(e.currentTarget.dataset.index);
                ExamEngine.jumpToQuestion(idx);
            });
        });

        this.updatePaletteCounts();
    },

    updatePaletteCounts() {
        const state = ExamEngine.state;
        const answered = Object.keys(state.userAnswers).length;
        const total = state.totalQuestions;

        const ansEl = document.getElementById('palette-answered-count');
        const remEl = document.getElementById('palette-remaining-count');
        if (ansEl) ansEl.textContent = answered;
        if (remEl) remEl.textContent = total - answered;
    },

    updateQuestionStatus(questionIndex) {
        this.renderQuestionPalette();
    },

    // =========================================================================
    // 8. EXAM RESULT & ANSWER REVIEW VIEW
    // =========================================================================
    renderExamResult(result) {
        const container = document.getElementById('main-content');
        if (!container) return;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        const isPassed = result.isPassed;
        const badgeColor = isPassed ? 'badge-success' : 'badge-danger';

        container.innerHTML = `
            <div class="page-container">
                <div class="result-header-card content-card text-center ${isPassed ? 'pass-theme' : 'fail-theme'}">
                    <div class="result-badge-icon">${isPassed ? '🎉' : '📚'}</div>
                    <span class="badge badge-lg ${badgeColor}">${isPassed ? 'PASSED (उत्तीर्ण)' : 'NEEDS PRACTICE (अभ्यास आवश्यक)'}</span>
                    <h1 class="result-score-title">
                        Score: <strong>${result.score}</strong> / ${result.totalMarks}
                        <span class="percent-tag">(${result.percentage}%)</span>
                    </h1>
                    <p class="result-summary-text">${result.resultSummary}</p>

                    <div class="result-meta-grid">
                        <div class="meta-item">
                            <span class="lbl">Candidate Name:</span>
                            <strong>${result.candidateName}</strong>
                        </div>
                        <div class="meta-item">
                            <span class="lbl">Security Service:</span>
                            <strong>${result.service}</strong>
                        </div>
                        <div class="meta-item">
                            <span class="lbl">Exam Type:</span>
                            <strong>${result.examType}</strong>
                        </div>
                        <div class="meta-item">
                            <span class="lbl">Time Used:</span>
                            <strong>${result.timeUsedFormatted}</strong>
                        </div>
                    </div>
                </div>

                <!-- METRICS COUNTER CARDS -->
                <div class="metrics-grid mt-3">
                    <div class="metric-card">
                        <div class="num text-primary">${result.totalQuestions}</div>
                        <div class="lbl">Total Questions</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-info">${result.attemptedQuestions}</div>
                        <div class="lbl">Attempted</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-success">${result.correctAnswers}</div>
                        <div class="lbl">Correct Answers</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-danger">${result.wrongAnswers}</div>
                        <div class="lbl">Wrong Answers</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-muted">${result.unattemptedQuestions}</div>
                        <div class="lbl">Unattempted</div>
                    </div>
                </div>

                <!-- ACTION BUTTONS -->
                <div class="result-actions-bar mt-4">
                    <button class="btn btn-primary" id="btn-retake-exam">🔄 Retake Exam</button>
                    <a href="#leaderboard/${result.service}" class="btn btn-secondary">🏆 View Leaderboard</a>
                    <a href="#dashboard" class="btn btn-outline">👤 My Profile & History</a>
                    <a href="#home" class="btn btn-outline">🏠 Back to Home</a>
                </div>

                <!-- REVIEW ANSWERS ACCORDION/SECTION -->
                <div class="review-section mt-5">
                    <div class="review-section-header">
                        <h2>📝 Detailed Answer Review (उत्तर तथा स्पष्टीकरण)</h2>
                        <p class="text-muted">Review every question, your selected choice, the correct answer, and detailed explanations.</p>
                    </div>

                    <div class="review-questions-list">
                        ${result.reviewDetails.map(item => {
                            const statusBadge = !item.isAttempted 
                                ? `<span class="badge badge-unattempted">⚠️ Unattempted</span>`
                                : (item.isCorrect 
                                    ? `<span class="badge badge-correct">✓ Correct (+${item.marks})</span>` 
                                    : `<span class="badge badge-wrong">✗ Incorrect</span>`);

                            return `
                                <div class="review-item-card content-card ${item.isCorrect ? 'border-correct' : (item.isAttempted ? 'border-wrong' : 'border-skipped')}">
                                    <div class="review-item-top">
                                        <div class="q-meta">
                                            <span class="q-idx">Q${item.questionIndex}.</span>
                                            <span class="badge badge-sub">${item.subject}</span>
                                        </div>
                                        <div>${statusBadge}</div>
                                    </div>

                                    <div class="review-question-text">
                                        <strong>${item.questionText}</strong>
                                    </div>

                                    <div class="review-options-list">
                                        ${item.options.map((opt, oIdx) => {
                                            const isSelectedByUser = item.userSelectedIndex === oIdx;
                                            const isTheCorrectOpt = item.correctIndex === oIdx;

                                            let optClass = 'review-opt';
                                            let icon = '';

                                            if (isTheCorrectOpt) {
                                                optClass += ' correct-opt';
                                                icon = '<span class="status-icon text-success">✓ Correct Answer</span>';
                                            }
                                            if (isSelectedByUser && !isTheCorrectOpt) {
                                                optClass += ' wrong-opt';
                                                icon = '<span class="status-icon text-danger">✗ Your Choice</span>';
                                            } else if (isSelectedByUser && isTheCorrectOpt) {
                                                icon = '<span class="status-icon text-success">✓ Your Correct Choice</span>';
                                            }

                                            return `
                                                <div class="${optClass}">
                                                    <span class="opt-prefix">${['A', 'B', 'C', 'D'][oIdx]}:</span>
                                                    <span class="opt-text">${opt}</span>
                                                    ${icon}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>

                                    ${item.explanation ? `
                                        <div class="review-explanation-box">
                                            <strong>💡 स्पष्टीकरण (Explanation):</strong> ${item.explanation}
                                        </div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;

        // Retake exam button
        const retakeBtn = document.getElementById('btn-retake-exam');
        if (retakeBtn) {
            retakeBtn.addEventListener('click', () => {
                if (result.examType === 'Model Set Exam') {
                    window.location.hash = `#model-exam-setup/${result.service}`;
                } else {
                    window.location.hash = `#topic-exam-setup/${result.service}`;
                }
            });
        }
    },

    // =========================================================================
    // 9. USER DASHBOARD & HISTORY VIEW
    // =========================================================================
    renderDashboard(container) {
        const candidateName = Storage.getCandidateName() || 'Candidate';
        const progress = Storage.getUserProgress();
        const history = Storage.getExamHistory();

        const avgScore = history.length > 0 
            ? (history.reduce((sum, h) => sum + (h.percentage || 0), 0) / history.length).toFixed(1)
            : '0.0';

        container.innerHTML = `
            <div class="page-container">
                <div class="page-header d-flex-between">
                    <div>
                        <span class="badge badge-lg">👤 Candidate Dashboard</span>
                        <h1 class="page-title">${candidateName}'s Profile</h1>
                        <p class="page-subtitle">Track your examination progress, performance analytics, and recent attempt records.</p>
                    </div>
                    <div class="header-action">
                        <button class="btn btn-outline btn-sm" id="btn-edit-candidate-name">✏️ Edit Name</button>
                    </div>
                </div>

                <!-- OVERALL STATS CARDS -->
                <div class="metrics-grid">
                    <div class="metric-card">
                        <div class="num text-primary">${history.length}</div>
                        <div class="lbl">Exams Attempted</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-info">${progress.totalQuestionsAttempted}</div>
                        <div class="lbl">Questions Solved</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-success">${progress.totalCorrect}</div>
                        <div class="lbl">Correct Answers</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-warning">${progress.bestScorePercentage}%</div>
                        <div class="lbl">Best Score</div>
                    </div>
                    <div class="metric-card">
                        <div class="num text-secondary">${avgScore}%</div>
                        <div class="lbl">Average Score</div>
                    </div>
                </div>

                <!-- EXAM HISTORY TABLE -->
                <div class="content-card mt-4">
                    <div class="card-header-flex">
                        <h3>📜 Recent Exam History (${history.length})</h3>
                        ${history.length > 0 ? `
                            <button class="btn btn-warning btn-sm" id="btn-clear-history">🗑️ Clear History</button>
                        ` : ''}
                    </div>

                    <div class="table-responsive mt-3">
                        <table class="admin-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Service</th>
                                    <th>Exam Type</th>
                                    <th>Score</th>
                                    <th>Percentage</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${history.length === 0 ? `
                                    <tr><td colspan="6" class="text-center text-muted">No exams attempted yet. Start practicing now!</td></tr>
                                ` : history.map(h => `
                                    <tr>
                                        <td>${h.dateFormatted}</td>
                                        <td><span class="badge badge-service">${h.service}</span></td>
                                        <td>${h.examType}</td>
                                        <td><strong>${h.score}</strong> / ${h.totalMarks}</td>
                                        <td><strong>${h.percentage}%</strong></td>
                                        <td>
                                            <span class="badge ${h.isPassed ? 'badge-success' : 'badge-danger'}">
                                                ${h.isPassed ? 'Pass' : 'Failed'}
                                            </span>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;

        // Edit candidate name handler
        const editNameBtn = container.querySelector('#btn-edit-candidate-name');
        if (editNameBtn) {
            editNameBtn.addEventListener('click', () => {
                const newName = prompt('Enter your candidate name:', candidateName);
                if (newName && newName.trim()) {
                    Storage.setCandidateName(newName.trim());
                    this.renderDashboard(container);
                }
            });
        }

        // Clear history handler
        const clearBtn = container.querySelector('#btn-clear-history');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to clear your local exam history?')) {
                    Storage.clearExamHistory();
                    this.renderDashboard(container);
                }
            });
        }
    },

    // =========================================================================
    // 10. LEADERBOARD VIEW
    // =========================================================================
    renderLeaderboard(container, selectedService = 'All') {
        const board = Storage.getLeaderboard();

        const filtered = selectedService === 'All' 
            ? board 
            : board.filter(b => b.service === selectedService);

        container.innerHTML = `
            <div class="page-container">
                <div class="page-header text-center">
                    <span class="badge badge-lg">🏆 Rankings</span>
                    <h1 class="page-title">Candidate Leaderboard</h1>
                    <p class="page-subtitle">Based on scores and performance records stored on this device / browser.</p>
                </div>

                <!-- Service Filter Tabs -->
                <div class="service-pills-nav text-center">
                    <button class="pill-btn ${selectedService === 'All' ? 'active' : ''}" data-service="All">All Services</button>
                    <button class="pill-btn ${selectedService === 'Nepal Army' ? 'active' : ''}" data-service="Nepal Army">🇳🇵 Nepal Army</button>
                    <button class="pill-btn ${selectedService === 'Nepal Police' ? 'active' : ''}" data-service="Nepal Police">👮 Nepal Police</button>
                    <button class="pill-btn ${selectedService === 'Armed Police Force' ? 'active' : ''}" data-service="Armed Police Force">🛡️ APF</button>
                </div>

                <div class="content-card mt-3">
                    <div class="table-responsive">
                        <table class="admin-table leaderboard-table">
                            <thead>
                                <tr>
                                    <th width="70">Rank</th>
                                    <th>Candidate Name</th>
                                    <th>Security Service</th>
                                    <th>Exam</th>
                                    <th>Score</th>
                                    <th>Percentage</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${filtered.length === 0 ? `
                                    <tr><td colspan="7" class="text-center text-muted">No records found. Take an exam to enter the leaderboard!</td></tr>
                                ` : filtered.map((entry, idx) => {
                                    let rankBadge = `${idx + 1}`;
                                    if (idx === 0) rankBadge = '🥇 1st';
                                    else if (idx === 1) rankBadge = '🥈 2nd';
                                    else if (idx === 2) rankBadge = '🥉 3rd';

                                    return `
                                        <tr class="${idx < 3 ? 'top-rank-row' : ''}">
                                            <td><strong>${rankBadge}</strong></td>
                                            <td><strong>${entry.candidateName}</strong></td>
                                            <td><span class="badge badge-service">${entry.service}</span></td>
                                            <td>${entry.examType}</td>
                                            <td><strong>${entry.score}</strong> / ${entry.totalMarks}</td>
                                            <td><span class="score-percent-badge">${entry.percentage}%</span></td>
                                            <td class="text-muted">${entry.dateFormatted}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="leaderboard-note text-center mt-3 text-muted">
                        <small>💡 Note: This leaderboard represents verified local records stored on your browser.</small>
                    </div>
                </div>
            </div>
        `;

        container.querySelectorAll('.service-pills-nav .pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const svc = e.currentTarget.dataset.service;
                window.location.hash = `#leaderboard/${svc}`;
            });
        });
    },

    // =========================================================================
    // 11. CONTACT VIEW
    // =========================================================================
    renderContact(container) {
        container.innerHTML = `
            <div class="page-container max-w-750">
                <div class="page-header text-center">
                    <span class="badge badge-lg">📞 Get In Touch</span>
                    <h1 class="page-title">Contact MT Security Service Preparation</h1>
                    <p class="page-subtitle">हामीलाई सिधै सम्पर्क गर्नुहोस् वा अनलाइन कक्षा/सोधपुछका लागि सन्देश पठाउनुहोस्।</p>
                </div>

                <div class="content-card">
                    <div class="contact-details-grid">
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <h4>ठेगाना (Address)</h4>
                            <p>Birendranagar, Surkhet<br>Karnali Province, Nepal</p>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📱</div>
                            <h4>फोन सम्पर्क (Phone)</h4>
                            <p><a href="tel:9866655255">9866655255</a></p>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">🌐</div>
                            <h4>फेसबुक (Facebook)</h4>
                            <p><strong>PB Bishwakrma</strong></p>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">💻</div>
                            <h4>Online Classes</h4>
                            <p><a href="https://zoom.us/" target="_blank" rel="noopener">Zoom Platform</a></p>
                        </div>
                    </div>

                    <hr class="my-4">

                    <form id="contact-form" onsubmit="event.preventDefault(); App.showToast('सन्देश प्राप्त भयो! हामी छिट्टै सम्पर्क गर्नेछौं।', 'success'); this.reset();">
                        <h3>Send a Message (सन्देश पठाउनुहोस्)</h3>
                        <div class="form-group mt-2">
                            <label>Your Name *</label>
                            <input type="text" class="form-control" placeholder="Enter your name" required>
                        </div>
                        <div class="form-group mt-2">
                            <label>Mobile Number *</label>
                            <input type="tel" class="form-control" placeholder="98XXXXXXXX" required>
                        </div>
                        <div class="form-group mt-2">
                            <label>Interested Security Service</label>
                            <select class="form-control">
                                <option>Nepal Army (सैनिक)</option>
                                <option>Nepal Police (प्रहरी जवान)</option>
                                <option>Armed Police Force (सशस्त्र प्रहरी जवान)</option>
                            </select>
                        </div>
                        <div class="form-group mt-2">
                            <label>Message / Question *</label>
                            <textarea class="form-control" rows="4" placeholder="Type your message here..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">✉️ Send Message</button>
                    </form>
                </div>
            </div>
        `;
    },

    // =========================================================================
    // MODALS & TOAST NOTIFICATIONS
    // =========================================================================
    bindGlobalModals() {
        // Confirmation modal cancel button
        const cancelBtn = document.getElementById('confirm-modal-cancel');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeConfirmModal());
        }
    },

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    },

    showConfirmModal({ title, message, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm }) {
        const modal = document.getElementById('confirm-modal');
        const titleEl = document.getElementById('confirm-modal-title');
        const msgEl = document.getElementById('confirm-modal-message');
        const okBtn = document.getElementById('confirm-modal-ok');
        const cancelBtn = document.getElementById('confirm-modal-cancel');

        if (!modal) return;

        titleEl.textContent = title;
        msgEl.textContent = message;
        okBtn.textContent = confirmText;
        cancelBtn.textContent = cancelText;

        // Clone button to strip previous handlers
        const newOk = okBtn.cloneNode(true);
        okBtn.parentNode.replaceChild(newOk, okBtn);

        newOk.addEventListener('click', () => {
            this.closeConfirmModal();
            if (typeof onConfirm === 'function') onConfirm();
        });

        modal.style.display = 'flex';
    },

    closeConfirmModal() {
        const modal = document.getElementById('confirm-modal');
        if (modal) modal.style.display = 'none';
    },

    showNotificationModal(title, message, onOk) {
        this.showConfirmModal({
            title,
            message,
            confirmText: "OK",
            cancelText: "Close",
            onConfirm: onOk
        });
    }
};

window.App = App;

// Start app once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
