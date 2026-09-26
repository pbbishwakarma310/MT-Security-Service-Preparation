# MT Security Service Preparation (नेपाल सुरक्षा सेवा तयारी पोर्टल)

A modern, responsive, educational preparation website built with pure **HTML5, CSS3, and Vanilla JavaScript**.

Designed specifically for candidates aspiring to join:
1. 🇳🇵 **Nepal Army (नेपाली सेना)** – सैनिक / सैन्य पद
2. 👮 **Nepal Police (नेपाल प्रहरी)** – प्रहरी जवान
3. 🛡️ **Armed Police Force (सशस्त्र प्रहरी बल)** – सशस्त्र प्रहरी जवान

---

## 🌟 Key Features

### 1. Bilingual Content (नेपाली र English)
- Syllabi, high-yield notes, exam instructions, questions, and explanations are carefully prepared in authentic Nepali and English.

### 2. Comprehensive Official Syllabus
- Covers all 4 recruitment phases:
  1. Registration, Physical Measurement & Endurance (दौड, पुस अप, सिट अप, चिन अप, हाइजम्प, लङजम्प)
  2. Written Examination (पूर्णाङ्क १००, उत्तीर्णाङ्क ४०) with breakdown of subjects
  3. Detailed Medical Examination
  4. Oral Interview (अन्तर्वार्ता)

### 3. Topic-Wise High-Yield Notes
- Grouped by service and subjects:
  - **Nepal Army**: English, Mathematics, नेपाली, सामान्य ज्ञान
  - **Nepal Police**: नेपाली रचना, English, गणित, सामान्य ज्ञान, प्रहरी सेवा, बौद्धिक परीक्षा (IQ)
  - **Armed Police Force**: नेपाली, English, गणित, पेशा सम्बन्धी
- Includes formulas, rules, examples, and memory tricks (💡 स्मरण टिप्स).

### 4. Topic-Wise Practice Exam
- Select Service, Subject, and Question Count (5, 10, 15, 25 Qs).
- Full Fisher-Yates randomization for **both questions and options**.
- Immediate scoring and comprehensive answer review with explanations.

### 5. Full Model Set Examination
- Real-time countdown timer with urgent warnings at 5 mins and 1 min.
- **Nepal Army Model Set**: 50 Questions, 50 Marks, 60 Minutes.
- **Nepal Police Model Set**: 40 Questions, 40 Marks, 50 Minutes.
- **Armed Police Force Model Set**: 15 Questions, 30 Marks (2 marks each!), 25 Minutes.
- Automatic submission when time expires.
- Question palette allowing quick jumps between questions with status indicators (Answered, Current, Unanswered).

### 6. Scorecard & Review Mode
- Shows total questions, attempted, correct, wrong, unattempted, obtained marks, percentage, and time spent.
- Full question review showing candidate choice, true correct answer, and explanation.

### 7. User System & LocalStorage
- No password or email needed: candidate enters their name.
- Tracks history of attempts, best scores, averages, and candidate dashboard.
- Device-level Leaderboard sorted by percentage and score.

### 8. Admin Panel
- **Questions Bank Manager**: Add, Edit, Delete, Search, and Filter questions.
- **Syllabus Manager**: Edit syllabus text, phases, and criteria.
- **Topic Notes Manager**: Add and edit study notes, key points, and formulas.
- **Model Sets & Timers**: Configure duration, total questions, marks per question, and subject distribution.
- **Exam Settings**: Toggle question and option randomization, warnings, etc.
- **Data Backup**: Export JSON and Reset to factory default data.

### 9. Modern UI & Dark Mode
- Single Page Application (SPA) architecture without page reloads.
- Responsive design for mobile, tablet, laptop, and desktop.
- Theme switch (Light / Dark) saved across sessions.

---

## 📁 Project Structure

```text
MT-Security-Service-Preparation/
│
├── index.html                  # Main SPA entry point
│
├── css/
│   └── style.css               # Complete stylesheet with CSS variables (Light/Dark)
│
├── js/
│   ├── storage.js              # LocalStorage persistence & memory fallback
│   ├── data.js                 # Seed data: 90 authentic MCQs, notes & syllabi
│   ├── exam.js                 # Exam engine: Fisher-Yates shuffle, timer & scoring
│   ├── admin.js                # Full CRUD Admin Panel
│   └── app.js                  # Main controller, SPA router & view renderers
│
├── assets/
│   ├── images/
│   │   └── flag-of-nepal.webp  # National Flag of Nepal
│   └── icons/
│
└── README.md                   # Documentation
```

---

## 🚀 How to Run

1. Open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
2. No Node.js, server, or build step is required.
3. All data will be automatically initialized into your browser's LocalStorage on first launch.

---

## 📞 Contact Information

- **Address**: Birendranagar, Surkhet, Karnali Province, Nepal
- **Phone**: 9866655255
- **Facebook**: PB Bishwakrma
- **Online Classes**: [Zoom Platform](https://zoom.us/)

---

## 🏛️ Official Examination Portals

- [Public Service Commission (लोक सेवा आयोग)](https://psc.gov.np/)
- [Nepal Army (नेपाली सेना)](https://www.nepalarmy.mil.np/)
- [Nepal Police (नेपाल प्रहरी)](https://www.nepalpolice.gov.np/)
- [Armed Police Force (सशस्त्र प्रहरी बल)](https://www.apf.gov.np/)

---
© 2026 MT Security Service Preparation. All Rights Reserved.
