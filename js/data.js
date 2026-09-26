/**
 * MT Security Service Preparation
 * Data Module (js/data.js)
 * High-quality seed data for Syllabus, Notes, Question Bank, and Model Sets.
 */

// --- 1. DEFAULT SYLLABUS DATA ---
const defaultSyllabusData = {
    "Nepal Army": {
        serviceName: "Nepal Army",
        serviceNepali: "नेपाली सेना",
        postName: "सैन्य / सैनिक पद",
        description: "नेपाली सेनामा सैन्य पदको खुला प्रतियोगितात्मक परीक्षाको विस्तृत पाठ्यक्रम तथा छनोट चरणहरू।",
        phases: [
            {
                phaseTitle: "प्रथम चरण: दरखास्त फाराम दर्ता, प्रारम्भिक स्वास्थ्य तथा शारीरिक परीक्षण",
                items: [
                    "उचाइ (न्यूनतम): पुरुष - ५ फिट २ इन्च, महिला - ५ फिट ० इन्च",
                    "छाती (पुरुष मात्र): नफुलाउँदा ३१ इन्च र फुलाउँदा ३३ इन्च",
                    "तौल (न्यूनतम): पुरुष - ५० के.जी., महिला - ४० के.जी.",
                    "आँखा: +२.०० देखि -२.०० भन्दा कमजोर नभएको (कलर ब्लाइन्डनेस नभएको)",
                    "शारीरिक तन्दुरुस्ती परीक्षा (Physical Fitness Test):",
                    "• २ माइल दौड (3.2 KM): पुरुष (अधिकतम १५ मिनेट), महिला (अधिकतम १८ मिनेट)",
                    "• पुस अप (Push-ups): पुरुष (कम्तीमा १५ पटक), महिला (कम्तीमा ८ पटक)",
                    "• सिट अप (Sit-ups): पुरुष (कम्तीमा १५ पटक), महिला (कम्तीमा १० पटक)",
                    "• चिन अप (Chin-ups / Pull-ups): पुरुष (कम्तीमा ५ पटक), महिला (लागु नहुने वा ह्याङ्गिङ)"
                ]
            },
            {
                phaseTitle: "दोस्रो चरण: लिखित परीक्षा (पूर्णाङ्क १००, उत्तीर्णाङ्क ४०, समय २ घण्टा ३० मिनेट)",
                items: [
                    "विषयगत तथा वस्तुगत अंक विभाजन:",
                    "१. अंग्रेजी (English) - २० अंक:",
                    "   • Articles (a, an, the), Prepositions (in, on, at, under...)",
                    "   • Singular and Plural, Tense (Simple Present, Past, Future)",
                    "   • Opposite words, Word translation into Nepali/English",
                    "२. गणित (Mathematics) - २० अंक:",
                    "   • अंक र अक्षर लेखन, जोड, घटाउ, गुणन, भाग",
                    "   • ऐकिक नियम (Unitary Method), प्रतिशत (Percentage)",
                    "   • नाफा र नोक्सान (Profit and Loss)",
                    "३. नेपाली (Nepali) - ३० अंक:",
                    "   • व्याकरण: नाम, सर्वनाम, विशेषण, क्रियापद",
                    "   • शब्द शुद्धिकरण (ह्रस्व-दीर्घ), विपरीतार्थक शब्द, पर्यायवाची शब्द",
                    "   • वाक्य रचना, पत्र लेखन वा घरायसी निवेदन, छोटो निबन्ध (करिब १०० शब्द)",
                    "४. सामान्य ज्ञान (General Knowledge) - ३० अंक:",
                    "   • नेपालको भूगोल (प्रमुख नदी, ताल, हिमाल, सिमाना, संरक्षित क्षेत्र)",
                    "   • नेपालको इतिहास तथा राष्ट्रिय प्रतीकहरू (झण्डा, गान, निशान छाप, फूल, चरा)",
                    "   • नेपालको वर्तमान संविधान (मौलिक हक र कर्तव्य)",
                    "   • नेपाली सेना सम्बन्धी आधारभूत जानकारी (स्थापना, परमाधिपति, प्रधान सेनापति, दर्जा र फुली)"
                ]
            },
            {
                phaseTitle: "तेस्रो चरण: विस्तृत स्वास्थ्य परीक्षण (Detailed Medical Examination)",
                items: [
                    "नेपाली सेनाको श्री वीरेन्द्र अस्पताल (छाउनी) वा तोकिएको सैनिक अस्पतालमा विस्तृत स्वास्थ्य परीक्षण गरिनेछ।",
                    "रक्तचाप (Blood Pressure), छातीको एक्स-रे (Chest X-ray), ईसीजी (ECG), रगत तथा पिसाब परीक्षण।",
                    "शल्यक्रिया नगरिएको, स्थायी रोग वा अपाङ्गता नभएको यकिन गरिनेछ।"
                ]
            },
            {
                phaseTitle: "चौथो चरण: अन्तर्वार्ता (Interview - २० अंक)",
                items: [
                    "लिखित परीक्षा तथा विस्तृत स्वास्थ्य परीक्षणमा उत्तीर्ण उम्मेदवारहरूलाई अन्तर्वार्तामा समावेश गरिनेछ।",
                    "व्यक्तित्व परीक्षण, आत्मविश्वास, सामान्य ज्ञान र राष्ट्रसेवाप्रतिको लगनशीलताको मूल्यांकन।"
                ]
            }
        ]
    },
    "Nepal Police": {
        serviceName: "Nepal Police",
        serviceNepali: "नेपाल प्रहरी",
        postName: "प्रहरी जवान (Police Constable)",
        description: "नेपाल प्रहरीमा जनपद प्रहरी जवान पदको पदपूर्ति सम्बन्धी नयाँ पाठ्यक्रम तथा परीक्षा ढाँचा।",
        phases: [
            {
                phaseTitle: "प्रथम चरण: प्रारम्भिक स्वास्थ्य तथा शारीरिक तन्दुरुस्ती परीक्षा",
                items: [
                    "शारीरिक नाप-जोख:",
                    "• उचाइ: पुरुष कम्तीमा ५ फिट २ इन्च, महिला कम्तीमा ५ फिट",
                    "• छाती (पुरुष): नफुलाउँदा कम्तीमा ३१ इन्च, फुलाउँदा कम्तीमा ३३ इन्च",
                    "• तौल: पुरुष ५० के.जी., महिला ४२ के.जी.",
                    "• दृष्टि: चस्मा प्रयोग नगरेको +२ वा -२ भन्दा कमजोर नभएको",
                    "शारीरिक तन्दुरुस्ती परीक्षा (Physical Test):",
                    "• १०० मिटर दौड: पुरुष (१५ सेकेन्डभित्र), महिला (१८ सेकेन्डभित्र)",
                    "• ३००० मिटर (३ कि.मि.) दौड: पुरुष (१४ मिनेटभित्र), महिला (१७ मिनेटभित्र)",
                    "• हाइजम्प: पुरुष (कम्तीमा ३ फिट), महिला (कम्तीमा २ फिट ६ इन्च)",
                    "• लङजम्प: पुरुष (कम्तीमा १२ फिट), महिला (कम्तीमा ८ फिट)",
                    "• पुस अप (कम्तीमा १५ पटक) र सिट अप (कम्तीमा २० पटक)"
                ]
            },
            {
                phaseTitle: "दोस्रो चरण: लिखित परीक्षा (पूर्णाङ्क १००, उत्तीर्णाङ्क ४०, समय २ घण्टा)",
                items: [
                    "१. नेपाली रचना (३० अंक):",
                    "   • नेपाली व्याकरण (नाम, सर्वनाम, विशेषण, काल, लिंग, वचन)",
                    "   • शुद्ध र अशुद्ध शब्द छुट्याउने, वाक्य परिवर्तन",
                    "   • कार्यालयीय निवेदन, सूचना लेखन वा समसामयिक निबन्ध",
                    "२. अंग्रेजी (English) - १५ अंक:",
                    "   • Alphabet, Spelling, Capitalization, Simple sentence making",
                    "   • Use of Articles (A, An, The), Prepositions (in, on, under, from, to)",
                    "   • Singular / Plural, Gender, Common everyday vocabulary",
                    "३. गणित (Mathematics) - १५ अंक:",
                    "   • जोड, घटाउ, गुणन, भाग, सरल (Simplification)",
                    "   • प्रतिशत (Percentage), नाफा-नोक्सान (Profit & Loss), ऐकिक नियम (Unitary method)",
                    "   • साधारण ब्याज (Simple Interest)",
                    "४. सामान्य ज्ञान (General Knowledge) - २० अंक:",
                    "   • नेपालको भूगोल, प्रदेश, जिल्ला र स्थानीय तह",
                    "   • नेपालको राजनीतिक इतिहास, राष्ट्रिय विभूतिहरू",
                    "   • सार्क (SAARC) तथा संयुक्त राष्ट्रसंघ (UN) को आधारभूत ज्ञान",
                    "   • समसामयिक राष्ट्रिय घटनाहरू",
                    "५. प्रहरी सेवा सम्बन्धी (Police Service) - १० अंक:",
                    "   • नेपाल प्रहरीको स्थापना (वि.सं. २०१२), काम, कर्तव्य र अधिकार",
                    "   • प्रहरी दर्ज्यानी चिन्ह तथा पदसोपान (जवान देखि IGP सम्म)",
                    "   • ट्राफिक नियम, सडक सुरक्षा संकेतहरू, अपराध नियन्त्रणमा नागरिकको भूमिका",
                    "६. बौद्धिक परीक्षा / Reasoning Test - १० अंक:",
                    "   • संख्या श्रेणी (Number Series), अक्षर अनुक्रम (Alphabet Series)",
                    "   • भिन्न चित्र छुट्याउने, कोडिङ र डिकोडिङ, दिशा र दुरी ज्ञान"
                ]
            },
            {
                phaseTitle: "तेस्रो चरण: विस्तृत स्वास्थ्य परीक्षण (Detailed Medical Examination)",
                items: [
                    "नेपाल प्रहरी अस्पताल, महाराजगञ्जमा हुनेछ।",
                    "रक्त परीक्षण (HIV, Hepatitis B, C, VDRL), छाती परीक्षण, दाँत, कान, आँखा तथा मानसिक तन्दुरुस्ती।"
                ]
            },
            {
                phaseTitle: "चौथो चरण: अन्तर्वार्ता (Interview - २० अंक)",
                items: [
                    "लिखित परीक्षामा सफल उम्मेदवारहरूको मौखिक परीक्षा।",
                    "निर्णय क्षमता, इमान्दारिता, शारीरिक स्फूर्ति र प्रहरी आचरणको मूल्यांकन।"
                ]
            }
        ]
    },
    "Armed Police Force": {
        serviceName: "Armed Police Force",
        serviceNepali: "सशस्त्र प्रहरी बल, नेपाल",
        postName: "सशस्त्र प्रहरी जवान (APF Constable)",
        description: "सशस्त्र प्रहरी बल, नेपालमा सशस्त्र प्रहरी जवान पदको विज्ञापन तथा लोकसेवा आयोगद्वारा सञ्चालन हुने परीक्षाको पाठ्यक्रम।",
        phases: [
            {
                phaseTitle: "प्रथम चरण: शारीरिक नापजोख, प्रारम्भिक स्वास्थ्य तथा शारीरिक सहिष्णुता परीक्षा",
                items: [
                    "शारीरिक मापदण्ड:",
                    "• उचाइ: पुरुष ५ फिट २ इन्च, महिला ५ फिट ० इन्च",
                    "• छाती (पुरुष): कम्तीमा ३१ इन्च (फुलाउँदा ३३ इन्च)",
                    "• तौल: पुरुष ५० के.जी., महिला ४२ के.जी.",
                    "शारीरिक सहिष्णुता (Physical Endurance):",
                    "• १०० मिटर दौड: पुरुष १५ सेकेन्ड, महिला १८ सेकेन्ड",
                    "• २ माइल दौड (३.२ कि.मि.): पुरुष १८ मिनेट, महिला २२ मिनेट",
                    "• सिट अप (Sit-ups): पुरुष कम्तीमा १५ पटक, महिला कम्तीमा १० पटक",
                    "• पुस अप (Push-ups): पुरुष कम्तीमा १५ पटक, महिला कम्तीमा ८ पटक",
                    "• चिन अप (Chin-ups): पुरुष कम्तीमा ४ पटक"
                ]
            },
            {
                phaseTitle: "दोस्रो चरण: लिखित परीक्षा (पूर्णाङ्क १००, उत्तीर्णाङ्क ४०, समय २ घण्टा)",
                items: [
                    "१. नेपाली (Nepali) - ३० अंक:",
                    "   • वर्ण विन्यास (ह्रस्व, दीर्घ, श, ष, स को प्रयोग)",
                    "   • पदवर्ग (नाम, सर्वनाम, विशेषण, अव्यय)",
                    "   • पर्यायवाची, विपरितार्थी तथा अनेकार्थी शब्द",
                    "   • सरल निवेदन, प्रतिवेदन वा समसामयिक विषयमा निबन्ध",
                    "२. अंग्रेजी (English) - २० अंक:",
                    "   • Articles, Prepositions, Subject-Verb Agreement",
                    "   • Simple Tense, Punctuation, Opposite Words",
                    "   • Common security-related terms translation",
                    "३. गणित (Mathematics) - २० अंक:",
                    "   • संख्या प्रणाली, ल.स. र म.स. (LCM & HCF)",
                    "   • प्रतिशत, नाफा र नोक्सान, ऐकिक नियम, अनुपात र समानुपात (Ratio & Proportion)",
                    "   • समय र काम (Time and Work - सरल प्रश्नहरू)",
                    "४. पेशा सम्बन्धी तथा सामान्य ज्ञान (Professional & GK) - ३० अंक:",
                    "   • सशस्त्र प्रहरी बल, नेपालको स्थापना (वि.सं. २०५७ अध्यादेश, २०५८ ऐन)",
                    "   • सशस्त्र प्रहरी बलको आदर्श वाक्य (Motto): 'शान्ति, सुरक्षा, प्रतिबद्धता'",
                    "   • मुख्य काम र कर्तव्य (सीमा सुरक्षा, विपद् व्यवस्थापन, दंगा नियन्त्रण, विद्रोही गतिविधि नियन्त्रण)",
                    "   • सशस्त्र प्रहरीको पदसोपान (दर्जा) तथा दर्ज्यानी चिन्हहरू",
                    "   • नेपालको राष्ट्रिय सुरक्षा नीति तथा आधारभूत सामान्य ज्ञान"
                ]
            },
            {
                phaseTitle: "तेस्रो चरण: विस्तृत स्वास्थ्य परीक्षण (Detailed Medical Examination)",
                items: [
                    "सशस्त्र प्रहरी बल नेपाल अस्पताल, बलम्बु (काठमाडौं) मा स्वास्थ्य परीक्षण।",
                    "सम्पूर्ण शारीरिक अङ्गहरूको परीक्षण तथा ल्याब रिपोर्ट।"
                ]
            },
            {
                phaseTitle: "चौथो चरण: अन्तर्वार्ता (Interview - २० अंक)",
                items: [
                    "मौखिक परीक्षा, व्यावसायिक ज्ञान, राष्ट्रप्रेम तथा मनोवैज्ञानिक तयारीको मूल्यांकन।"
                ]
            }
        ]
    }
};

// --- 2. DEFAULT TOPIC-WISE NOTES ---
const defaultNotesData = {
    "Nepal Army": {
        "English": [
            {
                id: "na_eng_1",
                title: "Rules of Articles (A, An, The)",
                subtitle: "अंग्रेजीमा Article को प्रयोग गर्ने नियमहरू र अपवाद",
                content: `
### १. Indefinite Articles: 'A' र 'An'
• **'A' को प्रयोग:** Consonant Sound (व्यञ्जन ध्वनि: क, ख, ग...) बाट सुरु हुने Singular Countable Noun अगाडि प्रयोग हुन्छ।
  - *Examples:* a boy, a car, a pen, a university (उच्चारण 'युनिभर्सिटी' - Consonant Sound), a European, a one-rupee note.
• **'An' को प्रयोग:** Vowel Sound (स्वर ध्वनि: अ, आ, इ, ई...) बाट सुरु हुने Singular Countable Noun अगाडि प्रयोग हुन्छ।
  - *Examples:* an apple, an elephant, an orange, an umbrella.
  - *अत्यन्त महत्वपूर्ण अपवाद (Silent 'h' र Abbreviations):*
    - **an hour** ('आवर' उच्चारण हुने भएकोले)
    - **an honest man** ('अनेस्ट' उच्चारण हुने भएकोले)
    - **an heir** (उत्तराधिकारी)
    - **an M.A. / an M.Sc. / an S.P. / an M.P.** ('एम' को सुरु उच्चारण 'ए' स्वर ध्वनि हो)

### २. Definite Article: 'The'
• विश्वमा एउटै मात्र भएको वस्तु अगाडि: *the sun, the moon, the earth, the sky.*
• नदी, महासागर, सागर, खाडी: *the Koshi, the Gandaki, the Pacific Ocean, the Red Sea.*
• हिमालका शृङ्खला (Mountain Range): *the Himalayas, the Alps.* (तर एकल चुचुरो अगाडि 'the' लाग्दैन: Everest अगाडि Article लाग्दैन!)
• धार्मिक ग्रन्थ तथा प्रसिद्ध पुस्तक: *the Ramayana, the Gita, the Quran, the Bible.*
• पत्रिका तथा समाचारपत्र: *the Rising Nepal, the Kathmandu Post.*
• दिशा तथा निश्चित स्थान: *the east, the west, the north, the south.*
• Superlative Degree अगाडि: *the highest mountain, the best soldier, the tallest building.*

💡 **स्मरण टिप्स (Exam Tip):** अक्षर हेरेर होइन, शब्दको **उच्चारण (Sound)** सुनेर मात्र 'a' वा 'an' छान्नुहोस्!
                `,
                keyPoints: [
                    "A/An = Singular Countable Noun अगाडि मात्र",
                    "An hour, An honest man, An MLA (स्वर उच्चारण)",
                    "A university, A union, A European (व्यञ्जन 'य' उच्चारण)",
                    "Single mountain peak (उदा. Mt. Everest) अगाडि 'The' लाग्दैन"
                ]
            },
            {
                id: "na_eng_2",
                title: "Essential Prepositions (In, On, At, By, With, Into)",
                subtitle: "सुरक्षा सेवा परीक्षामा बारम्बार सोधिने Preposition का नियमहरू",
                content: `
### १. समय जनाउन (Time Prepositions):
• **AT:** घडीको निश्चित समय जनाउन (*at 5 o'clock, at noon, at night, at midnight*).
• **ON:** बार र गते/तारिख जनाउन (*on Sunday, on Monday, on 1st January, on Dashain day*).
• **IN:** महिना, वर्ष, ऋतु तथा दिनको प्रहर (*in January, in 2026, in winter, in the morning, in the evening*).

### २. स्थान जनाउन (Place Prepositions):
• **AT:** सानो ठाउँ, निश्चित बिन्दु जनाउन (*at Birendranagar, at bus stop, at the door*).
• **IN:** ठूलो सहर, देश वा घेराभित्र जनाउन (*in Kathmandu, in Nepal, in the room*).
• **ON:** सतहमाथि छोएर रहेको (*on the table, on the wall*).

### ३. अन्य महत्वपूर्ण Prepositions:
• **INTO:** बाहिरबाट भित्र गति (Motion) सहित प्रवेश गर्दा: *He jumped into the river. The soldier entered into the zone.*
• **BY:** साधन वा सवारी जनाउन (*by bus, by plane, by train*) तथा कर्ता जनाउन (*killed by a hunter*).
• **WITH:** कुनै हतियार वा औजार प्रयोग गर्दा: *He cut the apple with a knife. The soldier fought with a rifle.*
• **BETWEEN vs AMONG:** दुई जना वा वस्तु बीच हुँदा *Between* (उदा. between Ram and Shyam), दुई भन्दा बढी बीच हुँदा *Among* (उदा. among the soldiers).

💡 **सुरक्षा परीक्षामा आउने महत्वपूर्ण वाक्यांश:**
- He is good **at** English / Mathematics. (Good पछि सधैं 'at')
- He is fond **of** reading.
- The soldier died **of** cholera (रोगबाट मर्दा 'of'). He died **for** his country (देशका लागि मर्दा 'for').
                `,
                keyPoints: [
                    "At 5 o'clock, On Sunday, In 2026",
                    "Cut with a knife, Travel by bus",
                    "Good at something (न कि Good in)",
                    "Between (२ जना/वस्तु), Among (३ वा बढी)"
                ]
            }
        ],
        "Mathematics": [
            {
                id: "na_math_1",
                title: "प्रतिशत (Percentage) - आधारभूत सुत्र र सर्टकट",
                subtitle: "सैन्य पदको लिखित परीक्षामा सोधिने प्रतिशत सम्बन्धी नियम",
                content: `
### १. प्रतिशतको परिभाषा
प्रतिशत भनेको प्रति सय (Per Hundred) मा कति हो भन्ने मान हो। यसको संकेत **%** हुन्छ।
• कुनै भिन्नलाई प्रतिशतमा बदल्न १०० ले गुणन गरिन्छ:
  $$\\frac{a}{b} \\times 100\\%$$
  *उदाहरण:* $\\frac{4}{5} = \\frac{4}{5} \\times 100 = 80\\%$
• प्रतिशतलाई भिन्नमा बदल्न १०० ले भाग गरिन्छ:
  $$25\\% = \\frac{25}{100} = \\frac{1}{4}$$

### २. परीक्षामा आउने महत्वपूर्ण मोडलहरू:
• **मोडल १: कुनै संख्याको प्रतिशत पत्ता लगाउने**
  - *प्रश्न:* ६०० को ३०% कति हुन्छ?
  - *समाधान:* $600 \\times \\frac{30}{100} = 6 \\times 30 = 180$
• **मोडल २: कति प्रतिशत हो पत्ता लगाउने**
  - *प्रश्न:* ५० पूर्णाङ्कमा विद्यार्थीले ३५ अंक ल्याए कति प्रतिशत भयो?
  - *समाधान:* $\\frac{35}{50} \\times 100\\% = 70\\%$
• **मोडल ३: तलब वा मूल्य वृद्धि/घटबढ**
  - *प्रश्न:* एक सिपाहीको सुरुको तलब रु २०,००० थियो। १०% वृद्धि भए नयाँ तलब कति हुन्छ?
  - *समाधान:* वृद्धि रकम = $20000 \\times \\frac{10}{100} = 2000$
  - नयाँ तलब = $20000 + 2000 =$ **रु २२,०००**

💡 **सर्टकट ट्रिक:** १०% निकाल्न पछाडिको एउटा शून्य हटाउनुहोस्!
- ५०० को १०% = ५०
- ५०० को २०% = ५० × २ = १००
                `,
                keyPoints: [
                    "प्रतिशत = प्रति सय (Per 100)",
                    "भिन्नबाट प्रतिशत: × १००%",
                    "प्रतिशतबाट भिन्न: ÷ १००",
                    "पास प्रतिशत: (प्राप्ताङ्क ÷ पूर्णाङ्क) × १००"
                ]
            },
            {
                id: "na_math_2",
                title: "नाफा र नोक्सान (Profit & Loss)",
                subtitle: "क्रय मूल्य, विक्रय मूल्य र नाफा-नोक्सान प्रतिशत सुत्रहरू",
                content: `
### १. मुख्य पारिभाषिक शब्दहरू:
• **क्रय मूल्य (Cost Price - CP):** कुनै सामान किन्दा तिरेको मूल्य।
• **विक्रय मूल्य (Selling Price - SP):** कुनै सामान बेच्दा पाएको मूल्य।

### २. आधारभूत सुत्रहरू:
1. यदि $SP > CP$ भए **नाफा (Profit)** हुन्छ:
   $$\\text{नाफा} = SP - CP$$
2. यदि $CP > SP$ भए **नोक्सान (Loss)** हुन्छ:
   $$\\text{नोक्सान} = CP - SP$$
3. नाफा प्रतिशत:
   $$\\text{नाफा }\\% = \\left(\\frac{\\text{नाफा}}{CP}\\right) \\times 100\\%$$
4. नोक्सान प्रतिशत:
   $$\\text{नोक्सान }\\% = \\left(\\frac{\\text{नोक्सान}}{CP}\\right) \\times 100\\%$$
5. *ध्यान दिनुहोस्:* नाफा वा नोक्सान प्रतिशत सधैं **क्रय मूल्य (CP)** मा मात्र हिसाब गरिन्छ!

### ३. परीक्षा उपयोगी उदाहरण:
• *उदाहरण:* एउटा ब्याग रु ८०० मा किनेर रु १,००० मा बेचियो भने कति प्रतिशत नाफा भयो?
  - $CP = 800$, $SP = 1000$
  - नाफा = $1000 - 800 = 200$
  - नाफा % = $\\frac{200}{800} \\times 100\\% = \\frac{1}{4} \\times 100 = 25\\%$
                `,
                keyPoints: [
                    "नाफा = बिक्रि मूल्य (SP) - खरीद मूल्य (CP)",
                    "नोक्सान = खरीद मूल्य (CP) - बिक्रि मूल्य (SP)",
                    "नाफा वा नोक्सान सधैं CP (क्रय मूल्य) मा हिसाब हुन्छ"
                ]
            }
        ],
        "नेपाली": [
            {
                id: "na_nep_1",
                title: "शब्दवर्ग (पदवर्ग) र व्याकरण",
                subtitle: "नाम, सर्वनाम, विशेषण र क्रियापद चिन्ने सजिलो तरिका",
                content: `
### १. नाम (Noun)
कुनै व्यक्ति, जाति, वस्तु, स्थान वा भाव बुझाउने शब्दलाई नाम भनिन्छ।
• व्यक्ति: राम, सीता, पृथ्वीनारायण शाह
• स्थान: नेपाल, पोखरा, सुर्खेत, काठमाडौं
• वस्तु: किताब, बन्दुक, झण्डा, नदी
• भाव: माया, दया, वीरता, सैनिकत्व

### २. सर्वनाम (Pronoun)
नामको सट्टामा प्रयोग हुने शब्दलाई सर्वनाम भनिन्छ।
• म, हामी (प्रथम पुरुष)
• तँ, तिमी, तपाईं (द्वितीय पुरुष)
• उ, उनी, त्यो, उहाँ (तृतीय पुरुष)
• जो, जे, जुन (सम्बन्धवाचक)
• को, के, कुन (प्रश्नवाचक)

### ३. विशेषण (Adjective)
नाम वा सर्वनामको गुण, दोष, संख्या, परिमाण वा विशेषता बुझाउने शब्द।
• कस्तो? -> असल, बहादुर, वीर, कायर
• कति? -> पाँच, दश, धेरै, थोरै, आधा
• कुन? -> यो, त्यो, अर्को

### ४. महत्वपूर्ण शुद्ध-अशुद्ध शब्द सूची (सैन्य परीक्षाको लागि):
| अशुद्ध | शुद्ध |
|---|---|
| उज्वल | **उज्ज्वल** |
| कवी | **कवि** |
| आशिर्वाद | **आशीर्वाद** |
| सन्तुष्ट | **सन्तुष्ट** |
| शैनिक | **सैनिक** |
| नेपालि | **नेपाली** |
| ऐतिहासीक | **ऐतिहासिक** |
                `,
                keyPoints: [
                    "कसले? के? को? को उत्तर = नाम",
                    "नामको साटो आउने = सर्वनाम",
                    "कस्तो? कति? को उत्तर = विशेषण",
                    "उज्ज्वल, आशीर्वाद, कवयित्री शुद्ध रूप याद गर्नुहोस्"
                ]
            }
        ],
        "सामान्य ज्ञान": [
            {
                id: "na_gk_1",
                title: "नेपाली सेना सम्बन्धी आधारभूत जानकारी",
                subtitle: "संगठन, दर्जा तह, परमाधिपति र ऐतिहासिक तथ्यहरू",
                content: `
### १. नेपाली सेनाको परिचय:
• **नेपाली सेनाको परमाधिपति (Supreme Commander):** सम्माननीय **राष्ट्रपति** (नेपालको संविधानको धारा २६७ अनुसार)।
• **वर्तमान नेपाली सेनाको सर्वोच्च कमाण्डर:** प्रधान सेनापति (Chief of Army Staff - COAS)।
• **नेपाली सेना दिवस:** प्रत्येक वर्ष **महाशिवरात्रि** का दिन मनाइन्छ।
• नेपाली सेनाको मुख्य कार्यालय: **जङ्गी अड्डा**, भद्रकाली, काठमाडौं।

### २. नेपाली सेनाको दर्जा तह (Rank Hierarchy):
1. **महारथी (General - प्रधान सेनापति)** - १ जना
2. **रथी (Lieutenant General)**
3. **उपरथी (Major General)**
4. **सहायक रथी (Brigadier General)**
5. **महासेनानी (Colonel)**
6. **प्रमुख सेनानी (Lieutenant Colonel)**
7. **सेनानी (Major)**
8. **सह-सेनानी (Captain)**
9. **उप-सेनानी (Lieutenant)**
10. **सहायक सेनानी (Second Lieutenant)**
--- पदिक (JCO) र अन्य दर्जा ---
11. **प्रमुख सुवेदार (Subedar Major)**
12. **सुवेदार (Subedar)**
13. **जमदार (Naib Subedar)**
14. **हुद्दा (Havildar)**
15. **अमल्दार (Lance Naik)**
16. **प्युठ (Piyuth)**
17. **सिपाही (Sepoy / Sainik)**
18. **फलोअर्स (Followers)**

### ३. नेपालको भूगोल तथा राष्ट्रिय ज्ञान:
• नेपालमा विश्वका ८,००० मिटरभन्दा अग्ला ८ वटा हिमाल छन् (सगरमाथा, कञ्चनजंघा, ल्होत्से, मकालु, चोयु, धौलागिरी, मनास्लु, अन्नपूर्ण)।
• नेपालको सबैभन्दा लामो नदी: **कर्णाली नदी** (५०७ कि.मि.)।
• नेपालको सबैभन्दा गहिरो नदी: **गण्डकी / नारायणी नदी**।
• नेपालको सबैभन्दा ठूलो ताल: **रारा ताल** (मुगु)।
• नेपालको सबैभन्दा गहिरो ताल: **फोक्सुण्डो ताल** (डोल्पा)।
                `,
                keyPoints: [
                    "परमाधिपति = राष्ट्रपति",
                    "सेना दिवस = महाशिवरात्रि",
                    "नेपालको लामो नदी = कर्णाली (५०७ कि.मि.)",
                    "नेपालको सबैभन्दा ठूलो ताल = रारा ताल"
                ]
            }
        ]
    },
    "Nepal Police": {
        "नेपाली रचना": [
            {
                id: "np_nep_1",
                title: "कार्यालयीय निवेदन तथा शुद्ध लेखन",
                subtitle: "प्रहरी जवान परीक्षामा सोधिने निवेदन ढाँचा र शुद्ध शब्द",
                content: `
### १. कार्यालयीय निवेदनको ढाँचा (Structure of Formal Application):
1. **दायाँ भागमा मिति:** मिति: २०८१/०५/१०
2. **सम्बोधन:** श्रीमान् कार्यालय प्रमुखज्यू, / श्रीमान् प्रहरी नायव उपरीक्षकज्यू, जिल्ला प्रहरी कार्यालय, सुर्खेत।
3. **विषय:** विषय: बिदा पाउँ सम्बन्धमा / निवेदन पेश गरेको सम्बन्धमा।
4. **महोदय:** उपयुक्त विषयमा... व्यहोरा अनुरोध छ।
5. **मुख्य व्यहोरा:** समस्या वा मागको स्पष्ट २-३ अनुच्छेदमा विवरण।
6. **दायाँ तल निवेदक:** भवदीय / निवेदक: (नाम, ठेगाना, सम्पर्क नं.)

### २. बारम्बार सोधिने विपरीतार्थक शब्द:
• अग्रज $\\leftrightarrow$ अनुज
• अमृत $\\leftrightarrow$ विष
• आकाश $\\leftrightarrow$ पाताल
• उत्थान $\\leftrightarrow$ पतन
• कृतज्ञ $\\leftrightarrow$ कृतघ्न
• प्रत्यक्ष $\\leftrightarrow$ अप्रत्यक्ष
• स्वाधीन $\\leftrightarrow$ पराधीन
                `,
                keyPoints: [
                    "मिति दायाँ माथि लेख्ने",
                    "सम्बोधन र विषय प्रस्ट हुनुपर्ने",
                    "कृतज्ञ (उपकार मान्ने) को उल्टो कृतघ्न (उपकार नमान्ने)"
                ]
            }
        ],
        "English": [
            {
                id: "np_eng_1",
                title: "Basic English Grammar for Police Constable",
                subtitle: "Tense, Pronouns, and Simple Sentences",
                content: `
### 1. Subject-Verb Agreement:
• Singular Subject takes **Singular Verb** (is, was, has, goes).
  - *He runs fast. She is a police officer.*
• Plural Subject takes **Plural Verb** (are, were, have, go).
  - *They are patrolling. The police officers protect citizens.*

### 2. Common Security Vocabulary:
• **Law:** कानुन
• **Investigation:** अनुसन्धान
• **Arrest:** पक्राउ
• **Witness:** साक्षी
• **Evidence:** प्रमाण/सबूत
• **Duty:** कर्तव्य/डिउटी
• **Patrol:** गस्ती
                `,
                keyPoints: [
                    "Singular Subject = Singular Verb",
                    "Plural Subject = Plural Verb",
                    "Security vocabulary meanings"
                ]
            }
        ],
        "गणित": [
            {
                id: "np_math_1",
                title: "साधारण ब्याज (Simple Interest) र ऐकिक नियम",
                subtitle: "I = PTR/100 को प्रयोग र परीक्षाका महत्वपूर्ण प्रश्नहरू",
                content: `
### १. साधारण ब्याज (Simple Interest):
• **साधारण ब्याज ($I$):**
  $$I = \\frac{P \\times T \\times R}{100}$$
  जहाँ:
  - $P$ = मूलधन (Principal)
  - $T$ = समय (Time in Years)
  - $R$ = ब्याजदर (Rate of Interest %)
• **मिश्रधन (Amount - $A$):**
  $$A = P + I$$

### उदाहरण:
• *प्रश्न:* रु ५,००० को १०% वार्षिक ब्याजदरले २ वर्षमा कति साधारण ब्याज हुन्छ?
  - $P = 5000$, $R = 10\\%$, $T = 2$ वर्ष
  - $I = \\frac{5000 \\times 2 \\times 10}{100} = 50 \\times 20 = $ **रु १,०००**
  - मिश्रधन $A = 5000 + 1000 = $ **रु ६,०००**
                `,
                keyPoints: [
                    "सुत्र: I = (P × T × R) / 100",
                    "मिश्रधन A = P + I",
                    "समय सधैं वर्षमा हुनुपर्छ (महिना भए १२ ले भाग गर्ने)"
                ]
            }
        ],
        "सामान्य ज्ञान": [
            {
                id: "np_gk_1",
                title: "नेपालको संविधान र प्रशासनिक स्वरूप",
                subtitle: "प्रहरी जवानका लागि जान्नै पर्ने मौलिक हक र संरचना",
                content: `
### १. नेपालको वर्तमान संविधान (२०७२):
• जारी मिति: **२०७२ असोज ३ गते**
• भाग: **३५**, धारा: **३०८**, अनुसूची: **९**
• मौलिक हकहरू: भाग ३, **धारा १६ देखि ४६ सम्म (कुल ३१ वटा मौलिक हक)**
  - धारा १६: सम्मानपूर्वक बाँच्न पाउने हक
  - धारा १७: स्वतन्त्रताको हक
  - धारा १८: समानताको हक
  - धारा २०: न्याय सम्बन्धी हक (पक्राउ सम्बन्धी २४ घण्टाभित्र अदालतमा उपस्थित गराउनु पर्ने)

### २. प्रशासनिक विभाजन:
• प्रदेश: **७ वटा**
• जिल्ला: **७७ वटा** (नवलपरासी र रुकुम विभाजन पश्चात)
• स्थानीय तह: **७५३ वटा** (६ महानगरपालिका, ११ उपमहानगरपालिका, २७६ नगरपालिका, ४६० गाउँपालिका)
• सबैभन्दा बढी स्थानीय तह भएको जिल्ला: **सर्लाही** (२० वटा)
• सबैभन्दा कम स्थानीय तह भएको जिल्ला: **मनाङ र मुस्ताङ** (४/४ वटा)
                `,
                keyPoints: [
                    "संविधान जारी: २०७२ असोज ३ गते",
                    "३५ भाग, ३०८ धारा, ९ अनुसूची",
                    "३१ वटा मौलिक हक (धारा १६ देखि ४६)",
                    "७७ जिल्ला, ७५३ स्थानीय तह"
                ]
            }
        ],
        "प्रहरी सेवा": [
            {
                id: "np_pol_1",
                title: "नेपाल प्रहरीको दर्जा, चिन्ह र काम-कर्तव्य",
                subtitle: "प्रहरी ऐन तथा नियमावली सम्बन्धी आधारभूत जानकारी",
                content: `
### १. नेपाल प्रहरीको स्थापना र पृष्ठभूमि:
• नेपाल प्रहरी ऐन: **वि.सं. २०१२ साल** मा जारी भयो।
• प्रहरी दिवस: प्रत्येक वर्ष **असोज महिना** मा मनाइन्छ।
• नेपाल प्रहरीको केन्द्रीय कार्यालय: **प्रहरी प्रधान कार्यालय, नक्साल, काठमाडौं**।
• सर्वोच्च पद: **प्रहरी महानिरीक्षक (Inspector General of Police - IGP)**।

### २. नेपाल प्रहरीको दर्जा क्रम (उच्च देखि न्यून):
1. **प्रहरी महानिरीक्षक (IGP)** - १ जना
2. **प्रहरी अतिरिक्त महानिरीक्षक (AIGP)**
3. **प्रहरी नायव महानिरीक्षक (DIGP)**
4. **प्रहरी वरिष्ठ उपरीक्षक (SSP)**
5. **प्रहरी उपरीक्षक (SP)**
6. **प्रहरी नायव उपरीक्षक (DSP)**
7. **प्रहरी निरीक्षक (Inspector)**
--- जुनियर अधिकृत (Junior Officers) ---
8. **प्रहरी वरिष्ठ नायव निरीक्षक (Senior Sub Inspector)**
9. **प्रहरी नायव निरीक्षक (Sub Inspector - SI)**
10. **प्रहरी सहायक निरीक्षक (Assistant Sub Inspector - ASI)**
--- अन्य दर्जा ---
11. **प्रहरी वरिष्ठ हवल्दार (Senior Head Constable)**
12. **प्रहरी हवल्दार (Head Constable)**
13. **प्रहरी सहायक हवल्दार (Assistant Head Constable)**
14. **प्रहरी जवान (Police Constable)**
15. **प्रहरी कार्यालय सहयोगी (Followers)**

### ३. प्रहरीका आधारभूत कर्तव्यहरू:
• शान्ति सुरक्षा कायम राख्ने र जनधनको रक्षा गर्ने।
• अपराध नियन्त्रण र अनुसन्धान गर्ने।
• गैरकानुनी कार्य रोकथाम गर्ने र कानुन कार्यान्वयन गर्ने।
• विपद्को समयमा खोज तथा उद्धार कार्यमा खटिने।
                `,
                keyPoints: [
                    "प्रहरी ऐन जारी: २०१२ साल",
                    "सर्वोच्च पद: प्रहरी महानिरीक्षक (IGP)",
                    "प्रहरी जवानको न्यूनतम पदसोपान",
                    "प्रहरीको मुख्य ध्येय: सत्य, सेवा, सुरक्षणम्"
                ]
            }
        ],
        "बौद्धिक परीक्षा": [
            {
                id: "np_iq_1",
                title: "बौद्धिक परीक्षा (IQ) - संख्या श्रेणी र कोडिङ",
                subtitle: "प्रहरी जवानका लागि सोधिने तर्कशक्ति प्रश्नका ट्रिक्स",
                content: `
### १. संख्या श्रेणी (Number Series) सुल्झाउने तरिका:
• **जोड/घटाउ अन्तर (Difference Method):**
  - *श्रृङ्खला:* २, ४, ६, ८, ? -> (प्रत्येकमा +२ भएकोले उत्तर: १०)
  - *श्रृङ्खला:* ३, ६, ११, १८, २७, ?
    - ३ (+३) ६ (+५) ११ (+७) १८ (+९) २७ (+११) -> उत्तर: **३८**
• **वर्ग संख्या (Square Numbers):**
  - १, ४, ९, १६, २५, ३६, ४९, ६४, ८१, १००, १२१...
  - *श्रृङ्खला:* ४, ९, १६, २५, ? -> $6^2 =$ **३६**

### २. कोडिङ-डिकोडिङ (Coding - Decoding):
• अंग्रेजी वर्णमालाको स्थानमान (Alphabet Position):
  - A=1, B=2, C=3 ... M=13 ... Z=26
  - स्मरण सुत्र: **EJOTY** (E=5, J=10, O=15, T=20, Y=25)
• *उदाहरण:* यदि CAT लाई 3-1-20 लेखिन्छ भने DOG लाई के लेखिन्छ?
  - D=4, O=15, G=7 -> उत्तर: **4-15-7**

### ३. दिशा ज्ञान (Direction Sense):
• माथि = उत्तर (North), तल = दक्षिण (South), दायाँ = पूर्व (East), बायाँ = पश्चिम (West)।
• सूर्य बिहान पूर्वबाट उदाउँछ (छायाँ पश्चिम पर्छ), साँझ पश्चिममा अस्ताउँछ (छायाँ पूर्व पर्छ)।
                `,
                keyPoints: [
                    "Number Series मा पहिलो काम अन्तर (Difference) निकाल्ने",
                    "EJOTY सुत्र याद राख्ने (5, 10, 15, 20, 25)",
                    "दिशा: दायाँ पूर्व, बायाँ पश्चिम, माथि उत्तर"
                ]
            }
        ]
    },
    "Armed Police Force": {
        "नेपाली": [
            {
                id: "apf_nep_1",
                title: "नेपाली वर्णविन्यास र वाक्य गठन",
                subtitle: "सशस्त्र प्रहरी जवान परीक्षामा सोधिने ह्रस्व-दीर्घ र शुद्धता नियम",
                content: `
### १. ह्रस्व र दीर्घको आधारभूत नियम:
• स्त्रीलिङ्गी शब्दहरू प्रायः दीर्घ हुन्छन्: *नानी, दिदी, बहिनी, छोरी, काली, ज्ञानी।*
• पुल्लिङ्गी वा निर्जीव शब्दका अन्त्य प्रायः ह्रस्व हुन्छन्: *भाइ, रुख, गोरु।*
• संख्या बुझाउने शब्दहरू दीर्घ हुन्छन्: *तीन, बीस, तीस, साठी।*
• 'इ' र 'उ' बाट सुरु हुने शब्दहरू: *इच्छा (ह्रस्व), ईश्वर (दीर्घ), उज्यालो (ह्रस्व), ऊर्जा (दीर्घ)।*

### २. अनेकार्थी शब्दहरू:
• **कर:** हात, राजश्व (ट्याक्स), करकाप।
• **साल:** वर्ष, एक प्रकारको काठ (रुख), सालनाल।
• **तीर:** बाण, नदीको किनार (छेउ)।
• **पत्र:** चिठ्ठी, पात, पत्रपत्रिका, तह (layer)।
                `,
                keyPoints: [
                    "स्त्रीलिङ्गी शब्द सामान्यतया दीर्घ (दिदी, बहिनी)",
                    "संख्या: तीन, बीस, तीस दीर्घ हुन्छन्",
                    "अनेकार्थी शब्दका विभिन्न सन्दर्भका अर्थ बुझ्ने"
                ]
            }
        ],
        "English": [
            {
                id: "apf_eng_1",
                title: "Basic Sentence Formation & Punctuation",
                subtitle: "Rules of Capital Letters, Full Stops, and Tenses",
                content: `
### 1. Punctuation Rules:
• Capital letters are used for:
  - First letter of a sentence.
  - Proper nouns (Nepal, Kathmandu, Ramesh).
  - The pronoun 'I'.
  - Days and months (Sunday, January).
• Full stop (.) at the end of affirmative sentences.
• Question mark (?) at the end of interrogative sentences.

### 2. Simple Present Tense for Routines:
• Formula: **Subject + V1/V5 + Object**
  - *The APF personnel guard the border.* (Guard = V1 for plural)
  - *He salutes the national flag.* (Salutes = V5 for singular)
                `,
                keyPoints: [
                    "Capital letter for proper nouns & sentence start",
                    "Simple Present for daily duties and facts",
                    "Punctuation marks"
                ]
            }
        ],
        "गणित": [
            {
                id: "apf_math_1",
                title: "अनुपात र समानुपात (Ratio and Proportion)",
                subtitle: "सरल नियम र परीक्षा उपयोगी हिसाबहरू",
                content: `
### १. अनुपात (Ratio):
दुई समान एकाइ भएका परिमाणहरूको तुलनालाई अनुपात भनिन्छ। यसलाई $a:b$ ले जनाइन्छ।
• *उदाहरण:* एउटा ब्यारेकमा ६० जना जवान र २० जना अधिकृत छन् भने जवान र अधिकृतको अनुपात कति हुन्छ?
  - अनुपात = $60 : 20 = \\frac{60}{20} = \\frac{3}{1} = 3:1$

### २. समानुपात (Proportion):
दुईवटा अनुपातहरू बराबर हुनुलाई समानुपात भनिन्छ ($a:b :: c:d$)।
• यसमा: **पहिलो पद $\\times$ चौथो पद = दोस्रो पद $\\times$ तेस्रो पद** ($a \\times d = b \\times c$)
• *उदाहरण:* यदि $2 : 3 :: 4 : x$ भए $x$ को मान कति हुन्छ?
  - $2 \\times x = 3 \\times 4$
  - $2x = 12 \\implies x = 6$
                `,
                keyPoints: [
                    "अनुपात = तुलना (समान एकाइ हुनुपर्छ)",
                    "समानुपातमा a × d = b × c",
                    "सरल रूपमा बदल्न दुवैलाई साझा अंकले भाग गर्ने"
                ]
            }
        ],
        "पेशा सम्बन्धी": [
            {
                id: "apf_pro_1",
                title: "सशस्त्र प्रहरी बल, नेपालको परिचय, काम र संगठन",
                subtitle: "ऐन, आदर्श वाक्य, सीमा सुरक्षा र दर्जा सम्बन्धी सम्पूर्ण विवरण",
                content: `
### १. सशस्त्र प्रहरी बलको स्थापना:
• स्थापना अध्यादेश: **वि.सं. २०५७ माघ ९ गते**
• सशस्त्र प्रहरी ऐन जारी: **वि.सं. २०५८ श्रावण ८ गते**
• प्रथम सशस्त्र प्रहरी महानिरीक्षक (IGP): **कृष्णमोहन श्रेष्ठ**
• आदर्श वाक्य (Motto): **"शान्ति, सुरक्षा, प्रतिबद्धता" (Peace, Security, Commitment)**
• प्रधान कार्यालय: **सशस्त्र प्रहरी बल नेपाल प्रधान कार्यालय, हल्चोक, काठमाडौं**

### २. मुख्य कार्य तथा जिम्मेवारीहरू (Mandates):
1. **सीमा सुरक्षा (Border Security):** नेपालको अन्तर्राष्ट्रिय सीमा स्तम्भ तथा सीमावर्ती क्षेत्रको सुरक्षा गर्ने (BOP - Border Out Post मार्फत)।
2. **विपद् व्यवस्थापन (Disaster Management):** बाढी, पहिरो, भूकम्प, आगलागी जस्ता विपद्मा खोज तथा उद्धार (Search and Rescue) गर्ने।
3. **दंगा नियन्त्रण (Riot Control):** सशस्त्र विद्रोह तथा पृथकतावादी गतिविधि नियन्त्रण गर्ने।
4. **विशिष्ट व्यक्ति तथा प्रतिष्ठान सुरक्षा:** VIP/VVIP सुरक्षा, भन्सार, कारागार, औद्योगिक क्षेत्र तथा महत्वपूर्ण सरकारी प्रतिष्ठानको सुरक्षा।

### ३. सशस्त्र प्रहरी बलको दर्जा क्रम (Rank Hierarchy):
1. **सशस्त्र प्रहरी महानिरीक्षक (IGP)** - १ जना
2. **सशस्त्र प्रहरी अतिरिक्त महानिरीक्षक (AIGP)**
3. **सशस्त्र प्रहरी नायव महानिरीक्षक (DIGP)**
4. **सशस्त्र प्रहरी वरिष्ठ उपरीक्षक (SSP)**
5. **सशस्त्र प्रहरी उपरीक्षक (SP)**
6. **सशस्त्र प्रहरी नायव उपरीक्षक (DSP)**
7. **सशस्त्र प्रहरी निरीक्षक (Inspector)**
--- जुनियर अधिकृत ---
8. **सशस्त्र प्रहरी वरिष्ठ नायव निरीक्षक (Senior Sub Inspector)**
9. **सशस्त्र प्रहरी नायव निरीक्षक (Sub Inspector - SI)**
10. **सशस्त्र प्रहरी सहायक निरीक्षक (Assistant Sub Inspector - ASI)**
--- अन्य दर्जा ---
11. **सशस्त्र प्रहरी वरिष्ठ हवल्दार (Senior Head Constable)**
12. **सशस्त्र प्रहरी हवल्दार (Head Constable)**
13. **सशस्त्र प्रहरी सहायक हवल्दार (Assistant Head Constable)**
14. **सशस्त्र प्रहरी जवान (Constable)**
15. **सशस्त्र प्रहरी परिचर (Followers)**
                `,
                keyPoints: [
                    "स्थापना: २०५८ साल (ऐन)",
                    "आदर्श वाक्य: 'शान्ति, सुरक्षा, प्रतिबद्धता'",
                    "प्रथम IGP: कृष्णमोहन श्रेष्ठ",
                    "सीमा सुरक्षा र विपद् व्यवस्थापन मुख्य दायित्व"
                ]
            }
        ]
    }
};

// --- 3. DEFAULT QUESTION BANK (75+ AUTHENTIC EDUCATIONAL QUESTIONS) ---
const defaultQuestionData = [
    // === NEPAL ARMY - ENGLISH (10 Qs) ===
    {
        id: 1,
        service: "Nepal Army",
        subject: "English",
        question: "Choose the correct article: 'He is ________ honest soldier.'",
        options: ["a", "an", "the", "no article"],
        answer: 1,
        explanation: "Although 'honest' begins with 'h', it has a silent 'h' and begins with a vowel sound (आनेस्ट), so 'an' is used.",
        marks: 1
    },
    {
        id: 2,
        service: "Nepal Army",
        subject: "English",
        question: "Select the appropriate preposition: 'The soldiers are marching ________ the border.'",
        options: ["towards", "in", "at", "by"],
        answer: 0,
        explanation: "'Towards' indicates movement in the direction of a place.",
        marks: 1
    },
    {
        id: 3,
        service: "Nepal Army",
        subject: "English",
        question: "What is the plural form of 'Army'?",
        options: ["Armys", "Armies", "Armyes", "Armis"],
        answer: 1,
        explanation: "Nouns ending in consonant + 'y' change 'y' into 'ies' in the plural form (Army -> Armies).",
        marks: 1
    },
    {
        id: 4,
        service: "Nepal Army",
        subject: "English",
        question: "Choose the correct preposition: 'The commander is good ________ strategy.'",
        options: ["in", "at", "on", "with"],
        answer: 1,
        explanation: "The adjective 'good' is followed by the preposition 'at' when referring to skills or abilities.",
        marks: 1
    },
    {
        id: 5,
        service: "Nepal Army",
        subject: "English",
        question: "What is the antonym (opposite word) of 'Brave'?",
        options: ["Heroic", "Coward", "Courageous", "Bold"],
        answer: 1,
        explanation: "'Brave' means courageous; its opposite is 'Coward' or 'Cowardly'.",
        marks: 1
    },
    {
        id: 6,
        service: "Nepal Army",
        subject: "English",
        question: "Fill in the blank with the correct tense: 'The national anthem ________ every morning at the parade.'",
        options: ["played", "is played", "playing", "plays"],
        answer: 1,
        explanation: "Passive voice in Simple Present tense is formed with 'is/am/are + Past Participle (V3)'.",
        marks: 1
    },
    {
        id: 7,
        service: "Nepal Army",
        subject: "English",
        question: "Choose the correct article: 'Mt. Everest is ________ highest peak in the world.'",
        options: ["a", "an", "the", "no article"],
        answer: 2,
        explanation: "The definite article 'the' is always used before superlative degree adjectives ('highest').",
        marks: 1
    },
    {
        id: 8,
        service: "Nepal Army",
        subject: "English",
        question: "Identify the correct spelling:",
        options: ["Lieutinent", "Lieutenant", "Lietenant", "Leiutenant"],
        answer: 1,
        explanation: "The correct spelling of the military rank is 'Lieutenant'.",
        marks: 1
    },
    {
        id: 9,
        service: "Nepal Army",
        subject: "English",
        question: "Complete the sentence: 'Divide these rations equally ________ the two soldiers.'",
        options: ["between", "among", "with", "into"],
        answer: 0,
        explanation: "'Between' is used when dividing or referring to exactly two individuals.",
        marks: 1
    },
    {
        id: 10,
        service: "Nepal Army",
        subject: "English",
        question: "Which of the following is an interrogative sentence?",
        options: [
            "Salute the flag.",
            "Are you ready for the physical test?",
            "What a brave soldier he is!",
            "I want to join the army."
        ],
        answer: 1,
        explanation: "Interrogative sentences ask questions and conclude with a question mark.",
        marks: 1
    },

    // === NEPAL ARMY - MATHEMATICS (5 Qs) ===
    {
        id: 11,
        service: "Nepal Army",
        subject: "Mathematics",
        question: "८०० को २५% कति हुन्छ?",
        options: ["१५०", "२००", "२५०", "३००"],
        answer: 1,
        explanation: "८०० × (२५/१००) = ८ × २५ = २००।",
        marks: 1
    },
    {
        id: 12,
        service: "Nepal Army",
        subject: "Mathematics",
        question: "एउटा सामान रु ५०० मा किनेर रु ६०० मा बेच्दा कति प्रतिशत नाफा हुन्छ?",
        options: ["१०%", "१५%", "२०%", "२५%"],
        answer: 2,
        explanation: "नाफा = ६०० - ५०० = रु १००। नाफा % = (१०० / ५००) × १००% = २०%।",
        marks: 1
    },
    {
        id: 13,
        service: "Nepal Army",
        subject: "Mathematics",
        question: "यदि ५ जना व्यक्तिलाई एउटा खाडल खन्न १० दिन लाग्छ भने, सोही काम १० जना व्यक्तिलाई कति दिन लाग्छ?",
        options: ["२ दिन", "५ दिन", "१० दिन", "२० दिन"],
        answer: 1,
        explanation: "व्यस्त विचरण (Inverse variation): ५ × १० = १० × दिन => दिन = ५० / १० = ५ दिन।",
        marks: 1
    },
    {
        id: 14,
        service: "Nepal Army",
        subject: "Mathematics",
        question: "मान पत्ता लगाउनुहोस्: १५ + २५ ÷ ५ × ३",
        options: ["२४", "३०", "४०", "४५"],
        answer: 1,
        explanation: "BODMAS नियम अनुसार पहिले भाग (२५ ÷ ५ = ५), त्यसपछि गुणन (५ × ३ = १५), अनि जोड (१५ + १५ = ३०)।",
        marks: 1
    },
    {
        id: 15,
        service: "Nepal Army",
        subject: "Mathematics",
        question: "एउटा सिपाहीको मासिक तलब रु २५,००० छ। उसको तलबमा २०% वृद्धि हुँदा नयाँ तलब कति पुग्छ?",
        options: ["रु २८,०००", "रु २९,०००", "रु ३०,०००", "रु ३२,०००"],
        answer: 2,
        explanation: "बढेको रकम = २५,००० को २०% = रु ५,०००। नयाँ तलब = २५,००० + ५,००० = रु ३०,०००।",
        marks: 1
    },

    // === NEPAL ARMY - NEPALI (10 Qs) ===
    {
        id: 16,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "तलका मध्ये कुन शब्द शुद्ध छ?",
        options: ["उज्वल", "उज्जवल", "उज्ज्वल", "उज्वल"],
        answer: 2,
        explanation: "शुद्ध रूप 'उज्ज्वल' (दुईवटा आधा 'ज्' र 'व') हो।",
        marks: 1
    },
    {
        id: 17,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "'वीर' शब्दको विपरीतार्थक (उल्टो अर्थ दिने) शब्द कुन हो?",
        options: ["बहादुर", "कायर", "साहसी", "योद्धा"],
        answer: 1,
        explanation: "'वीर' को विपरितार्थी शब्द 'कायर' हुन्छ।",
        marks: 1
    },
    {
        id: 18,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "'सैनिकहरू देशको रक्षा गर्छन्।' यस वाक्यमा 'सैनिकहरू' कुन पदवर्ग हो?",
        options: ["सर्वनाम", "नाम", "विशेषण", "क्रियापद"],
        answer: 1,
        explanation: "'सैनिकहरू' जातिवाचक नाम शब्द हो।",
        marks: 1
    },
    {
        id: 19,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "तलका मध्ये कुन शब्द भाववाचक नाम हो?",
        options: ["काठमाडौं", "सिपाही", "दया", "बन्दुक"],
        answer: 2,
        explanation: "अनुभव गर्न सकिने तर देख्न वा छुन नसकिने गुण/भावलाई भाववाचक नाम भनिन्छ (उदा. दया, माया)।",
        marks: 1
    },
    {
        id: 20,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "तल दिएका शब्दमध्ये कुन शब्दको हिज्जे शुद्ध छ?",
        options: ["आशिर्वाद", "आशीर्वाद", "असिर्वाद", "आसिरवाद"],
        answer: 1,
        explanation: "शुद्ध हिज्जे 'आशीर्वाद' हो (शी दीर्घ र व माथि रेफ)।",
        marks: 1
    },
    {
        id: 21,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "'आकाश' शब्दको पर्यायवाची शब्द कुन हो?",
        options: ["धरा", "गगन", "नीर", "समीर"],
        answer: 1,
        explanation: "आकाशको पर्यायवाची गगन, नभ, व्योम हुन्।",
        marks: 1
    },
    {
        id: 22,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "'तिमी' शब्द कुन पुरुषको सर्वनाम हो?",
        options: ["प्रथम पुरुष", "द्वितीय पुरुष", "तृतीय पुरुष", "कुनै पनि होइन"],
        answer: 1,
        explanation: "सुन्ने मान्छे (तँ, तिमी, तपाईं) लाई द्वितीय पुरुष भनिन्छ।",
        marks: 1
    },
    {
        id: 23,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "'हामी परेड खेल्छौं।' यो वाक्य कुन कालमा छ?",
        options: ["भूत काल", "वर्तमान काल", "भविष्यत् काल", "हेतुहेतुमद्भुत"],
        answer: 1,
        explanation: "वर्तमान समयमा हुने सामान्य क्रियालाई वर्तमान काल भनिन्छ।",
        marks: 1
    },
    {
        id: 24,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "उपकार मान्ने व्यक्तिलाई एक शब्दमा के भनिन्छ?",
        options: ["कृतघ्न", "कृतज्ञ", "सहिष्णु", "परोपकारी"],
        answer: 1,
        explanation: "उपकार मान्नेलाई 'कृतज्ञ' र उपकार नमान्नेलाई 'कृतघ्न' भनिन्छ।",
        marks: 1
    },
    {
        id: 25,
        service: "Nepal Army",
        subject: "नेपाली",
        question: "'रातो झण्डा' मा 'रातो' कुन शब्दवर्ग हो?",
        options: ["नाम", "विशेषण", "क्रियायोगी", "अव्यय"],
        answer: 1,
        explanation: "नाम (झण्डा) को रंग वा विशेषता बुझाउने शब्द विशेषण हो।",
        marks: 1
    },

    // === NEPAL ARMY - GENERAL KNOWLEDGE (25 Qs) ===
    {
        id: 26,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपाली सेनाको सर्वोच्च कमाण्डर (परमाधिपति) को रहने संवैधानिक व्यवस्था छ?",
        options: ["प्रधानमन्त्री", "रक्षा मन्त्री", "राष्ट्रपति", "प्रधान सेनापति"],
        answer: 2,
        explanation: "नेपालको संविधानको धारा २६७ अनुसार नेपाली सेनाको परमाधिपति सम्माननीय राष्ट्रपति हुने व्यवस्था छ।",
        marks: 1
    },
    {
        id: 27,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपाली सेना दिवस कहिले मनाइन्छ?",
        options: ["घोडेजात्रा", "महाशिवरात्रि", "दशैंको फूलपाती", "गणतन्त्र दिवस"],
        answer: 1,
        explanation: "प्रत्येक वर्ष महाशिवरात्रिको दिन नेपाली सेना दिवस विशेष समारोहका साथ मनाइन्छ।",
        marks: 1
    },
    {
        id: 28,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपाली सेनाको सबैभन्दा उच्च दर्जा कुन हो?",
        options: ["रथी", "उपरथी", "महारथी", "सहायक रथी"],
        answer: 2,
        explanation: "नेपाली सेनाको सर्वोच्च पद महारथी (प्रधान सेनापति - General) हो।",
        marks: 1
    },
    {
        id: 29,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको सबैभन्दा लामो नदी कुन हो?",
        options: ["कोशी", "गण्डकी", "कर्णाली", "महाकाली"],
        answer: 2,
        explanation: "नेपालको सबैभन्दा लामो नदी कर्णाली (५०७ कि.मि.) हो।",
        marks: 1
    },
    {
        id: 30,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "विश्वको सर्वोच्च शिखर सगरमाथाको आधिकारिक नयाँ उचाइ कति हो?",
        options: ["८,८४८ मिटर", "८,८४८.८६ मिटर", "८,८५० मिटर", "८,८४०.८६ मिटर"],
        answer: 1,
        explanation: "नेपाल र चीनद्वारा २०७७ मंसिर २३ मा घोषित सगरमाथाको नयाँ उचाइ ८,८४८.८६ मिटर हो।",
        marks: 1
    },
    {
        id: 31,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको राष्ट्रिय गानका रचनाकार को हुन्?",
        options: ["अम्बर गुरुङ", "व्याकुल माइला (प्रदीप कुमार राई)", "माधवप्रसाद घिमिरे", "गोपालप्रसाद रिमाल"],
        answer: 1,
        explanation: "राष्ट्रिय गानका शब्द रचनाकार व्याकुल माइला र संगीतकार अम्बर गुरुङ हुन्।",
        marks: 1
    },
    {
        id: 32,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको पहिलो राष्ट्रिय निकुञ्ज कुन हो?",
        options: ["सगरमाथा राष्ट्रिय निकुञ्ज", "चितवन राष्ट्रिय निकुञ्ज", "बर्दिया राष्ट्रिय निकुञ्ज", "रारा राष्ट्रिय निकुञ्ज"],
        answer: 1,
        explanation: "वि.सं. २०३० मा स्थापित चितवन राष्ट्रिय निकुञ्ज नेपालको पहिलो राष्ट्रिय निकुञ्ज हो।",
        marks: 1
    },
    {
        id: 33,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको क्षेत्रफल कति वर्ग किलोमिटर रहेको छ?",
        options: ["१,४७,१८१ वर्ग कि.मि.", "१,४७,५१६ वर्ग कि.मि.", "१,४८,००० वर्ग कि.मि.", "१,४५,३९१ वर्ग कि.मि."],
        answer: 0,
        explanation: "नेपालको कुल क्षेत्रफल १,४७,१८१ वर्ग किलोमिटर (५६,८२७ वर्ग माइल) रहेको छ।",
        marks: 1
    },
    {
        id: 34,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपाली सेनाको मुख्यालयलाई के भनिन्छ?",
        options: ["प्रहरी हेडक्वार्टर", "जङ्गी अड्डा", "सिंहदरबार", "छाउनी ब्यारेक"],
        answer: 1,
        explanation: "काठमाडौंको भद्रकालीस्थित नेपाली सेनाको प्रधान कार्यालयलाई 'जङ्गी अड्डा' भनिन्छ।",
        marks: 1
    },
    {
        id: 35,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
        options: ["फेवा ताल", "रारा ताल", "शे-फोक्सुण्डो ताल", "तिलिचो ताल"],
        answer: 1,
        explanation: "मुगु जिल्लामा अवस्थित रारा ताल नेपालको सबैभन्दा ठूलो ताल हो।",
        marks: 1
    },
    {
        id: 36,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको राष्ट्रिय रंग कुन हो?",
        options: ["रातो", "सिम्रिक", "पहेंलो", "हरियो"],
        answer: 1,
        explanation: "नेपालको राष्ट्रिय रंग सिम्रिक (Crimson) हो।",
        marks: 1
    },
    {
        id: 37,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपाली सेनामा संयुक्त राष्ट्रसंघीय (UN) शान्ति मिसनमा पहिलो पटक नेपाली सैनिक कुन वर्ष सहभागी भएका थिए?",
        options: ["सन् १९५५", "सन् १९५८", "सन् १९६२", "सन् १९७४"],
        answer: 1,
        explanation: "नेपाली सेना सन् १९५८ मा लेबनान (UNOGIL) बाट पहिलो पटक राष्ट्रसंघीय शान्ति मिसनमा सहभागी भएको थियो।",
        marks: 1
    },
    {
        id: 38,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको वर्तमान संविधान कहिले जारी भयो?",
        options: ["२०७२ असोज ३", "२०७२ भदौ २४", "२०६३ माघ १", "२०७० मंसिर ४"],
        answer: 0,
        explanation: "नेपालको संविधान २०७२ साल असोज ३ गते संविधान सभाबाट पारित भई जारी भएको हो।",
        marks: 1
    },
    {
        id: 39,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपाली सेनाको अधिकृत (Officer) क्याडेट तहको सुरुवाती कमिसन दर्जा कुन हो?",
        options: ["सहायक सेनानी (Second Lieutenant)", "उप-सेनानी (Lieutenant)", "सह-सेनानी (Captain)", "जमदार"],
        answer: 0,
        explanation: "अधिकृत तहको सुरुवाती कमिसन दर्जा सहायक सेनानी (Second Lieutenant) हो।",
        marks: 1
    },
    {
        id: 40,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको प्रमाणिक समय कुन हिमाललाई आधार मानी निर्धारण गरिएको छ?",
        options: ["सगरमाथा", "गौरीशंकर", "मनास्लु", "माछापुच्छ्रे"],
        answer: 1,
        explanation: "दोलखा जिल्लामा अवस्थित गौरीशंकर हिमाल (८६° १५' पूर्वी देशान्तर) लाई आधार मानी वि.सं. २०४२ वैशाख १ देखि प्रमाणिक समय लागु गरिएको हो।",
        marks: 1
    },
    {
        id: 41,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको राष्ट्रिय जनावर कुन हो?",
        options: ["एकसिंगे गैंडा", "गाई", "हात्ती", "बाघ"],
        answer: 1,
        explanation: "नेपालको राष्ट्रिय जनावर गाई हो।",
        marks: 1
    },
    {
        id: 42,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नालापानीको युद्धमा नेपाली सेनाको नेतृत्व कसले गरेका थिए?",
        options: ["अमरसिंह थापा", "बलभद्र कुँवर", "भक्ति थापा", "उजिरसिंह थापा"],
        answer: 1,
        explanation: "ऐतिहासिक नालापानी किल्लाको लडाइँमा कप्तान बलभद्र कुँवरले अङ्ग्रेज फौज विरुद्ध अद्भूत वीरता प्रदर्शन गरेका थिए।",
        marks: 1
    },
    {
        id: 43,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालमा कतिवटा प्रदेशहरू रहेका छन्?",
        options: ["५", "६", "७", "८"],
        answer: 2,
        explanation: "नेपालको संविधान अनुसार नेपाललाई ७ वटा प्रदेशमा विभाजन गरिएको छ।",
        marks: 1
    },
    {
        id: 44,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "विश्वको दोस्रो अग्लो हिमाल 'के-टु' (K2) कुन देशमा पर्छ?",
        options: ["नेपाल", "भारत", "पाकिस्तान", "चीन"],
        answer: 2,
        explanation: "विश्वको दोस्रो अग्लो हिमाल K2 (८,६११ मि.) पाकिस्तानमा पर्दछ।",
        marks: 1
    },
    {
        id: 45,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको राष्ट्रिय झण्डामा कुन कुन खगोलीय चिन्ह अंकित छन्?",
        options: ["तारा र चन्द्रमा", "सूर्य र चन्द्रमा", "तारा र सूर्य", "त्रिशूल र डमरु"],
        answer: 1,
        explanation: "नेपालको त्रिकोणात्मक राष्ट्रिय झण्डाको माथिल्लो भागमा चन्द्रमा र तल्लो भागमा सूर्य अंकित छ।",
        marks: 1
    },
    {
        id: 46,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "सार्क (SAARC) को सचिवालय कहाँ रहेको छ?",
        options: ["नयाँ दिल्ली, भारत", "इस्लामाबाद, पाकिस्तान", "काठमाडौं, नेपाल", "ढाका, बंगलादेश"],
        answer: 2,
        explanation: "सार्कको स्थायी सचिवालय नेपालको राजधानी काठमाडौंमा अवस्थित छ।",
        marks: 1
    },
    {
        id: 47,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपाली सेनामा 'हुद्दा' दर्जाको काँधमा कुन चिन्ह रहन्छ?",
        options: ["एक फित्ता (V stripe)", "दुई फित्ता", "तीन फित्ता", "फुलीसहित खुकुरी"],
        answer: 2,
        explanation: "अमल्दारको दुई फित्ता र हुद्दाको तीन फित्ता (Three Chevrons) हुन्छ।",
        marks: 1
    },
    {
        id: 48,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "पृथ्वीनारायण शाहले काठमाडौं उपत्यका विजय कहिले गरेका थिए?",
        options: ["वि.सं. १८२५", "वि.सं. १८३१", "वि.सं. १८०१", "वि.सं. १७९९"],
        answer: 0,
        explanation: "पृथ्वीनारायण शाहले वि.सं. १८२५ मा इन्द्रजात्राको दिन कान्तिपुर विजय गरेका थिए।",
        marks: 1
    },
    {
        id: 49,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "नेपालको सबैभन्दा गहिरो ताल कुन हो?",
        options: ["रारा ताल", "फेवा ताल", "शे-फोक्सुण्डो ताल", "रूपा ताल"],
        answer: 2,
        explanation: "डोल्पा जिल्लामा रहेको शे-फोक्सुण्डो ताल नेपालको सबैभन्दा गहिरो ताल (१४५ मिटर) मानिन्छ।",
        marks: 1
    },
    {
        id: 50,
        service: "Nepal Army",
        subject: "सामान्य ज्ञान",
        question: "संयुक्त राष्ट्रसंघ (UN) को स्थापना कहिले भएको थियो?",
        options: ["२४ अक्टोबर १९४५", "१ जनवरी १९४२", "१५ अगस्ट १९४७", "१० डिसेम्बर १९४८"],
        answer: 0,
        explanation: "संयुक्त राष्ट्रसंघको स्थापना २४ अक्टोबर १९४५ मा भएको थियो।",
        marks: 1
    },

    // === NEPAL POLICE - GENERAL KNOWLEDGE (20 Qs) ===
    {
        id: 51,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "नेपालको संविधान अनुसार मौलिक हक कुन भागमा उल्लेख गरिएको छ?",
        options: ["भाग २", "भाग ३", "भाग ४", "भाग ५"],
        answer: 1,
        explanation: "नेपालको संविधानको भाग ३, धारा १६ देखि ४६ सम्म ३१ वटा मौलिक हकको व्यवस्था छ।",
        marks: 1
    },
    {
        id: 52,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "नेपालमा ७७ जिल्ला कहिले कायम गरियो?",
        options: ["२०७२ असोज ३", "२०७४ भदौ ५", "२०७१ वैशाख २५", "२०७५ जेठ १५"],
        answer: 1,
        explanation: "नवलपरासी र रुकुमलाई दुई-दुई जिल्लामा विभाजन गरी २०७४ भदौ ५ मा ७७ जिल्ला कायम गरिएको हो।",
        marks: 1
    },
    {
        id: 53,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "नेपालको राष्ट्रिय फूल कुन हो?",
        options: ["सूर्यमुखी", "कमल", "लालीगुराँस", "गुलाब"],
        answer: 2,
        explanation: "नेपालको राष्ट्रिय फूल लालीगुराँस (Rhododendron) हो।",
        marks: 1
    },
    {
        id: 54,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "सार्क (SAARC) को पूरा रूप के हो?",
        options: [
            "South Asian Association for Regional Cooperation",
            "South Asian Alliance for Regional Community",
            "Southern Asian Association for Rural Cooperation",
            "South Asian Authority for Regional Commerce"
        ],
        answer: 0,
        explanation: "SAARC stands for 'South Asian Association for Regional Cooperation'.",
        marks: 1
    },
    {
        id: 55,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "कर्णाली प्रदेशको राजधानी कहाँ तोकिएको छ?",
        options: ["नेपालगञ्ज", "वीरेन्द्रनगर (सुर्खेत)", "जुम्ला", "दैलेख"],
        answer: 1,
        explanation: "कर्णाली प्रदेशको राजधानी वीरेन्द्रनगर, सुर्खेत हो।",
        marks: 1
    },
    {
        id: 56,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "नेपालको पहिलो महिला राष्ट्रपति को हुन्?",
        options: ["ओनसरी घर्ती मगर", "विद्यादेवी भण्डारी", "सुशीला कार्की", "रामकुमारी झाँक्री"],
        answer: 1,
        explanation: "श्रीमती विद्यादेवी भण्डारी नेपालको पहिलो महिला राष्ट्रपति हुन्।",
        marks: 1
    },
    {
        id: 57,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "प्रसिद्ध धार्मिक स्थल मुक्तिनाथ कुन जिल्लामा अवस्थित छ?",
        options: ["मनाङ", "मुस्ताङ", "जुम्ला", "हुम्ला"],
        answer: 1,
        explanation: "मुक्तिनाथ मन्दिर मुस्ताङ जिल्लामा ३,७१० मिटरको उचाइमा पर्दछ।",
        marks: 1
    },
    {
        id: 58,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "विश्व वातावरण दिवस कहिले मनाइन्छ?",
        options: ["५ जुन", "८ मार्च", "२२ अप्रिल", "११ जुलाई"],
        answer: 0,
        explanation: "प्रत्येक वर्ष जुन ५ तारिखका दिन विश्व वातावरण दिवस मनाइन्छ।",
        marks: 1
    },
    {
        id: 59,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "नेपालको राष्ट्रिय चरा कुन हो?",
        options: ["मयूर", "डाँफे", "काग", "ढुकुर"],
        answer: 1,
        explanation: "नेपालको राष्ट्रिय चरा डाँफे (Lophophorus) हो।",
        marks: 1
    },
    {
        id: 60,
        service: "Nepal Police",
        subject: "सामान्य ज्ञान",
        question: "नेपालमा कुल कतिवटा स्थानीय तहहरू रहेका छन्?",
        options: ["७४४", "७५३", "७६५", "७००"],
        answer: 1,
        explanation: "नेपालमा ७५३ वटा स्थानीय तह (महानगर, उपमहानगर, नगर, गाउँपालिका) रहेका छन्।",
        marks: 1
    },

    // === NEPAL POLICE - POLICE SERVICE (10 Qs) ===
    {
        id: 61,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "नेपाल प्रहरीको स्थापना कुन ऐनद्वारा भएको हो?",
        options: ["प्रहरी ऐन, २०६३", "प्रहरी ऐन, २०१२", "सैनिक ऐन, २०६३", "सुरक्षा ऐन, २०५८"],
        answer: 1,
        explanation: "नेपाल प्रहरीको स्थापना वि.सं. २०१२ सालको प्रहरी ऐनद्वारा भएको हो।",
        marks: 1
    },
    {
        id: 62,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "नेपाल प्रहरीको सर्वोच्च दर्जा कुन हो?",
        options: ["प्रहरी अतिरिक्त महानिरीक्षक (AIGP)", "प्रहरी महानिरीक्षक (IGP)", "प्रहरी वरिष्ठ उपरीक्षक (SSP)", "गृह सचिव"],
        answer: 1,
        explanation: "नेपाल प्रहरीको व्यवसायिक नेतृत्व प्रहरी महानिरीक्षक (Inspector General of Police - IGP) ले गर्नुहुन्छ।",
        marks: 1
    },
    {
        id: 63,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "आपतकालीन प्रहरी सहायताका लागि नेपालमा कुन फोन नम्बर डायल गर्नुपर्छ?",
        options: ["१०१", "१०२", "१००", "१०३"],
        answer: 2,
        explanation: "नेपाल प्रहरी आपतकालीन नियन्त्रण कक्षको टोल-फ्री नम्बर १०० हो। (१०१: दमकल, १०२: एम्बुलेन्स, १०३: ट्राफिक)।",
        marks: 1
    },
    {
        id: 64,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "ट्राफिक बत्तीमा रातो बत्ती बाल्दा सवारी चालकले के गर्नुपर्छ?",
        options: ["गाडी रोक्नुपर्छ", "गाडी तीव्र गतिमा कुदाउनुपर्छ", "तयार हुनुपर्छ", "हर्न बजाउनुपर्छ"],
        answer: 0,
        explanation: "रातो बत्तीले गाडी पूर्ण रूपमा रोक्न (Stop) संकेत गर्दछ।",
        marks: 1
    },
    {
        id: 65,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "नेपाल प्रहरीको केन्द्रीय अनुसन्धान ब्यूरो (CIB) को मुख्य जिम्मेवारी के हो?",
        options: ["ट्राफिक व्यवस्थापन", "जटिल तथा संगठित अपराध अनुसन्धान", "सीमा सुरक्षा", "ब्यारेक सुरक्षा"],
        answer: 1,
        explanation: "CIB ले गम्भीर, अन्तरदेशीय र संगठित प्रकृतिका अपराधहरूको गहन अनुसन्धान गर्दछ।",
        marks: 1
    },
    {
        id: 66,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "प्रहरी जवान भन्दा एक तह माथिल्लो पद कुन हो?",
        options: ["प्रहरी हवल्दार", "प्रहरी सहायक हवल्दार", "प्रहरी सहायक निरीक्षक (ASI)", "प्रहरी वरिष्ठ हवल्दार"],
        answer: 1,
        explanation: "नयाँ पदसोपान अनुसार प्रहरी जवानपछि तुरुन्तै माथिल्लो पद प्रहरी सहायक हवल्दार हो।",
        marks: 1
    },
    {
        id: 67,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "प्रहरीले कुनै व्यक्तिलाई पक्राउ गर्दा कति समयभित्र अदालत वा न्यायिक निकायमा उपस्थित गराउनुपर्छ?",
        options: ["१२ घण्टाभित्र", "२४ घण्टाभित्र (बाटोको म्याद बाहेक)", "४८ घण्टाभित्र", "७२ घण्टाभित्र"],
        answer: 1,
        explanation: "संविधानको धारा २०(३) अनुसार पक्राउ गरिएको व्यक्तिलाई बाटोको म्याद बाहेक २४ घण्टाभित्र मुद्दा हेर्ने अधिकारी समक्ष उपस्थित गराउनुपर्छ।",
        marks: 1
    },
    {
        id: 68,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "नेपाल प्रहरीको आदर्श वाक्य (Motto) के हो?",
        options: ["सत्य, सेवा, सुरक्षणम्", "शान्ति, सुरक्षा, प्रतिबद्धता", "राष्ट्र सेवा परमो धर्मः", "जनहितमा समर्पित"],
        answer: 0,
        explanation: "नेपाल प्रहरीको आदर्श वाक्य 'सत्य, सेवा, सुरक्षणम्' (Truth, Service, Security) हो।",
        marks: 1
    },
    {
        id: 69,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "ट्राफिक प्रहरीको आपतकालीन तथा जानकारी नम्बर कुन हो?",
        options: ["१००", "१०१", "१०२", "१०३"],
        answer: 3,
        explanation: "सवारी तथा ट्राफिक जानकारीको लागि टोल-फ्री नम्बर १०३ हो।",
        marks: 1
    },
    {
        id: 70,
        service: "Nepal Police",
        subject: "प्रहरी सेवा",
        question: "प्रहरी निरीक्षक (Inspector) को दर्ज्यानी चिन्हमा काँधमा के रहन्छ?",
        options: ["एक तारा", "दुई तारा", "तीन तारा", "खुकुरी र डण्डा"],
        answer: 1,
        explanation: "प्रहरी निरीक्षक (Inspector) को दर्ज्यानी चिन्ह काँधमा दुई तारा (Two Stars) हुन्छ। (ASI: १ तारा, SI: २ तारा तर रातो निलो रिबन सहित, Inspector: दुई तारा)।",
        marks: 1
    },

    // === NEPAL POLICE - REASONING / IQ (10 Qs) ===
    {
        id: 71,
        service: "Nepal Police",
        subject: "बौद्धिक परीक्षा",
        question: "क्रम पुरा गर्नुहोस्: ३, ६, ९, १२, १५, ?",
        options: ["१६", "१७", "१८", "२१"],
        answer: 2,
        explanation: "प्रत्येक संख्यामा ३ थपिँदै गएको छ (३ को गुणन): १५ + ३ = १८।",
        marks: 1
    },
    {
        id: 72,
        service: "Nepal Police",
        subject: "बौद्धिक परीक्षा",
        question: "यदि CAT = 24 र DOG = 26 हुन्छ भने BAT = कति हुन्छ?",
        options: ["२१", "२२", "२३", "२५"],
        answer: 2,
        explanation: "B(2) + A(1) + T(20) = 23। (वर्णमालाको स्थानमानको जोड)।",
        marks: 1
    },
    {
        id: 73,
        service: "Nepal Police",
        subject: "बौद्धिक परीक्षा",
        question: "तलका मध्ये अरु भन्दा फरक (Odd one out) कुन हो?",
        options: ["गाई", "बाख्रा", "भैंसी", "बाघ"],
        answer: 3,
        explanation: "गाई, बाख्रा र भैंसी शाकाहारी एवं घरपालुवा जनावर हुन् भने बाघ मांसाहारी र जंगली जनावर हो।",
        marks: 1
    },
    {
        id: 74,
        service: "Nepal Police",
        subject: "बौद्धिक परीक्षा",
        question: "क्रम पुरा गर्नुहोस्: २, ४, ८, १६, ३२, ?",
        options: ["४८", "५०", "६४", "७२"],
        answer: 2,
        explanation: "अघिल्लो संख्यालाई २ ले गुणन गरिँदै लगिएको छ: ३२ × २ = ६४।",
        marks: 1
    },
    {
        id: 75,
        service: "Nepal Police",
        subject: "बौद्धिक परीक्षा",
        question: "राम पूर्वतर्फ १० मिटर हिँड्यो, त्यसपछि दायाँ फर्केर ५ मिटर हिँड्यो भने अहिले ऊ कुन दिशामा हिँडिरहेको छ?",
        options: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
        answer: 1,
        explanation: "पूर्वतर्फ फर्केको व्यक्तिको दायाँ दक्षिण दिशा पर्दछ।",
        marks: 1
    },

    // === ARMED POLICE FORCE - PROFESSIONAL (पेशा सम्बन्धी - 15 Qs, 2 MARKS EACH) ===
    {
        id: 76,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी बल, नेपालको स्थापना कुन ऐन बमोजिम भएको हो?",
        options: ["सशस्त्र प्रहरी ऐन, २०५८", "सशस्त्र प्रहरी नियमावली, २०७१", "प्रहरी ऐन, २०१२", "सैनिक ऐन, २०६३"],
        answer: 0,
        explanation: "सशस्त्र प्रहरी बल, नेपालको स्थापना सशस्त्र प्रहरी ऐन, २०५८ अनुसार भएको हो।",
        marks: 2
    },
    {
        id: 77,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी बल, नेपालको आदर्श वाक्य (Motto) के हो?",
        options: ["शान्ति, सुरक्षा, सुव्यवस्था", "शान्ति, सुरक्षा, प्रतिबद्धता", "सत्य, सेवा, सुरक्षणम्", "राष्ट्र रक्षा हाम्रो संकल्प"],
        answer: 1,
        explanation: "सशस्त्र प्रहरी बलको आदर्श वाक्य 'शान्ति, सुरक्षा, प्रतिबद्धता' (Peace, Security, Commitment) हो।",
        marks: 2
    },
    {
        id: 78,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी बल, नेपालको पहिलो महानिरीक्षक (IGP) को हुनुहुन्थ्यो?",
        options: ["सहमवीर थापा", "कृष्णमोहन श्रेष्ठ", "किशोर कुमार लामा", "सनत कुमार बस्नेत"],
        answer: 1,
        explanation: "सशस्त्र प्रहरी बलका प्रथम सशस्त्र प्रहरी महानिरीक्षक स्व. कृष्णमोहन श्रेष्ठ हुनुहुन्थ्यो।",
        marks: 2
    },
    {
        id: 79,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सीमा सुरक्षामा खटिने सशस्त्र प्रहरी बलको सुरक्षा पोष्टलाई छोटकरीमा के भनिन्छ?",
        options: ["BOP (Border Out Post)", "COP (Check Out Post)", "SOP (Security Out Post)", "FOB (Forward Base)"],
        answer: 0,
        explanation: "सीमा सुरक्षाको अग्रपंक्तिमा तैनाथ सशस्त्र प्रहरी पोष्टलाई Border Out Post (BOP) भनिन्छ।",
        marks: 2
    },
    {
        id: 80,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी बलको प्रधान कार्यालय कहाँ अवस्थित छ?",
        options: ["नक्साल, काठमाडौं", "भद्रकाली, काठमाडौं", "हल्चोक, स्वयम्भू, काठमाडौं", "बलम्बु, काठमाडौं"],
        answer: 2,
        explanation: "सशस्त्र प्रहरी बल नेपालको प्रधान कार्यालय हल्चोक, काठमाडौंमा अवस्थित छ।",
        marks: 2
    },
    {
        id: 81,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "विपद् व्यवस्थापन (Disaster Management) तथा खोज र उद्धारको प्रमुख सुरक्षा अंग कुन हो?",
        options: ["नेपाल प्रहरी मात्र", "सशस्त्र प्रहरी बल, नेपाल", "वन रक्षक", "ट्राफिक प्रहरी"],
        answer: 1,
        explanation: "सशस्त्र प्रहरी बल, नेपाललाई विपद् व्यवस्थापन र विशेष खोज तथा उद्धार (Disaster Response) को मुख्य जिम्मेवारी दिइएको छ।",
        marks: 2
    },
    {
        id: 82,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी ऐन अनुसार सशस्त्र प्रहरी कसको नियन्त्रण र रेखदेखमा रहने व्यवस्था छ?",
        options: ["रक्षा मन्त्रालय", "नेपाल सरकार, गृह मन्त्रालय", "अर्थ मन्त्रालय", "प्रधानमन्त्री कार्यालय"],
        answer: 1,
        explanation: "सशस्त्र प्रहरी बल गृह मन्त्रालय मातहत रहने अर्धसैनिक सुरक्षा बल हो।",
        marks: 2
    },
    {
        id: 83,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी जवान पदको लिखित परीक्षामा 'पेशा सम्बन्धी' विषयमा प्रतिप्रश्न कति अंकको हुन्छ?",
        options: ["१ अंक", "२ अंक", "३ अंक", "०.५ अंक"],
        answer: 1,
        explanation: "सशस्त्र प्रहरी जवानको मोडल सेट अनुसार पेशा सम्बन्धी वस्तुगत प्रश्नहरू प्रत्येक २ अंकका हुन्छन्।",
        marks: 2
    },
    {
        id: 84,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी बल अस्पताल कहाँ अवस्थित छ?",
        options: ["महाराजगञ्ज, काठमाडौं", "छाउनी, काठमाडौं", "बलम्बु, काठमाडौं", "ललितपुर"],
        answer: 2,
        explanation: "नेपाल एपिएफ अस्पताल काठमाडौंको बलम्बुमा अवस्थित छ।",
        marks: 2
    },
    {
        id: 85,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरीको जुनियर अधिकृत तहको सुरुवाती दर्जा कुन हो?",
        options: ["सशस्त्र प्रहरी सहायक निरीक्षक (ASI)", "सशस्त्र प्रहरी हवल्दार", "सशस्त्र प्रहरी निरीक्षक (Inspector)", "सशस्त्र प्रहरी जवान"],
        answer: 0,
        explanation: "जुनियर अधिकृतको सुरुवाती पद सशस्त्र प्रहरी सहायक निरीक्षक (Assistant Sub Inspector - ASI) हो।",
        marks: 2
    },
    {
        id: 86,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "नेपालको अन्तर्राष्ट्रिय सीमा स्तम्भ (Border Pillar) को सुरक्षा र मर्मत सम्भारको जिम्मा कुन सुरक्षा निकायलाई दिइएको छ?",
        options: ["नेपाल आर्मी मात्र", "सशस्त्र प्रहरी बल, नेपाल", "स्थानीय बासिन्दा", "नेपाल ट्राफिक प्रहरी"],
        answer: 1,
        explanation: "नेपालको सीमा स्तम्भ र सीमा सुरक्षाको प्रमुख कार्यादेश सशस्त्र प्रहरी बल (APF) लाई सुम्पिएको छ।",
        marks: 2
    },
    {
        id: 87,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी बलको विशिष्ट तालिम शिक्षालय (Disaster Management Training School) कहाँ रहेको छ?",
        options: ["कुरिनटार, चितवन", "सप्तरी", "नौबस्ते, बाँके", "सुनसरी"],
        answer: 0,
        explanation: "विपद् व्यवस्थापन तालिम शिक्षालय चितवनको कुरिनटारमा अवस्थित छ।",
        marks: 2
    },
    {
        id: 88,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी जवान कुन दर्जा समूहभित्र पर्दछ?",
        options: ["विशिष्ट श्रेणी", "अधिकृत स्तर", "अन्य दर्जा (Non-Officer Rank)", "राजपत्रांकित प्रथम श्रेणी"],
        answer: 2,
        explanation: "जवान, हवल्दार आदि गैर-अधिकृत अर्थात अन्य दर्जा (Non-Gazetted / Other Ranks) मा पर्दछन्।",
        marks: 2
    },
    {
        id: 89,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "दंगा नियन्त्रण (Riot Control) गर्दा भीड तितरबितर पार्न सामान्यतया के प्रयोग गरिन्छ?",
        options: ["अश्रुग्यास (Tear Gas) र पानीको फोहोरा", "घातक हतियार", "सिधै गोली प्रहार", "ग्रिनेड"],
        answer: 0,
        explanation: "भीड नियन्त्रणमा न्यूनतम बल प्रयोगको सिद्धान्त अनुसार सुरुमा अश्रुग्यास र पानीको फोहोरा प्रयोग गरिन्छ।",
        marks: 2
    },
    {
        id: 90,
        service: "Armed Police Force",
        subject: "पेशा सम्बन्धी",
        question: "सशस्त्र प्रहरी बल, नेपालको स्थापना दिवस कहिले मनाइन्छ?",
        options: ["माघ ९ गते", "असोज ३ गते", "वैशाख १ गते", "श्रावण ८ गते"],
        answer: 0,
        explanation: "वि.सं. २०५७ माघ ९ गते स्थापना अध्यादेश जारी भएको स्मरणमा माघ ९ गते स्थापना दिवस मनाइन्छ।",
        marks: 2
    }
];

// --- 4. DEFAULT MODEL SET CONFIGURATION ---
const defaultModelSetData = {
    "Nepal Army": {
        service: "Nepal Army",
        serviceNepali: "नेपाली सेना (सैनिक / सैन्य पद)",
        totalQuestions: 50,
        totalMarks: 50,
        duration: 60, // in minutes
        passPercentage: 40,
        markPerQuestion: 1,
        distribution: [
            { subject: "English", count: 10, marks: 10 },
            { subject: "Mathematics", count: 5, marks: 5 },
            { subject: "नेपाली", count: 10, marks: 10 },
            { subject: "सामान्य ज्ञान", count: 25, marks: 25 }
        ],
        instructions: [
            "सबै प्रश्नहरूको उत्तर दिनु अनिवार्य छ।",
            "प्रत्येक प्रश्नको १ अंक रहनेछ (पूर्णाङ्क: ५०)।",
            "परीक्षाको समय ६० मिनेट (१ घण्टा) तोकिएको छ।",
            "समय समाप्त भएपछि परीक्षा स्वतः सबमिट हुनेछ।"
        ]
    },
    "Nepal Police": {
        service: "Nepal Police",
        serviceNepali: "नेपाल प्रहरी (प्रहरी जवान पद)",
        totalQuestions: 40,
        totalMarks: 40,
        duration: 50, // in minutes
        passPercentage: 40,
        markPerQuestion: 1,
        distribution: [
            { subject: "सामान्य ज्ञान", count: 20, marks: 20 },
            { subject: "प्रहरी सेवा", count: 10, marks: 10 },
            { subject: "बौद्धिक परीक्षा", count: 10, marks: 10 }
        ],
        instructions: [
            "नेपाल प्रहरी जवान पदको लिखित परीक्षाको पाठ्यक्रम अनुसार तयार पारिएको मोडल सेट।",
            "कुल ४० वटा वस्तुगत बहुउत्तर (MCQ) प्रश्नहरू रहनेछन्।",
            "परीक्षा समय ५० मिनेट तोकिएको छ।",
            "४०% अंक प्राप्त गरेमा परीक्षा उत्तीर्ण मानिनेछ।"
        ]
    },
    "Armed Police Force": {
        service: "Armed Police Force",
        serviceNepali: "सशस्त्र प्रहरी बल (सशस्त्र प्रहरी जवान पद)",
        totalQuestions: 15,
        totalMarks: 30, // 2 marks each
        duration: 25, // in minutes
        passPercentage: 40,
        markPerQuestion: 2,
        distribution: [
            { subject: "पेशा सम्बन्धी", count: 15, marks: 30 }
        ],
        instructions: [
            "सशस्त्र प्रहरी बल जवान पदको पेशा सम्बन्धी विशेष वस्तुगत मोडल सेट।",
            "कुल १५ वटा प्रश्नहरू रहनेछन् र प्रत्येक प्रश्न २ अंकको हुनेछ (पूर्णाङ्क: ३०)।",
            "परीक्षा समय २५ मिनेट तोकिएको छ।",
            "समय समाप्ति हुनासाथ परीक्षा आफैं सबमिट हुनेछ।"
        ]
    }
};

// --- 5. INITIALIZE / SEED DATA FUNCTION ---
function initializeApplicationData() {
    if (!Storage.getData(StorageKeys.SYLLABUS_DATA)) {
        Storage.saveData(StorageKeys.SYLLABUS_DATA, defaultSyllabusData);
    }
    if (!Storage.getData(StorageKeys.NOTES_DATA)) {
        Storage.saveData(StorageKeys.NOTES_DATA, defaultNotesData);
    }
    if (!Storage.getData(StorageKeys.QUESTION_DATA)) {
        Storage.saveData(StorageKeys.QUESTION_DATA, defaultQuestionData);
    }
    if (!Storage.getData(StorageKeys.MODEL_SET_DATA)) {
        Storage.saveData(StorageKeys.MODEL_SET_DATA, defaultModelSetData);
    }

    // Initialize sample leaderboard entries if empty
    const currentLeaderboard = Storage.getLeaderboard();
    if (!currentLeaderboard || currentLeaderboard.length === 0) {
        const seedLeaderboard = [
            {
                id: "LB_SEED_1",
                candidateName: "बिबेक राना",
                service: "Nepal Army",
                examType: "Model Set Exam",
                score: 48,
                totalMarks: 50,
                percentage: 96,
                timeUsed: "42m 15s",
                dateFormatted: "2026-09-20"
            },
            {
                id: "LB_SEED_2",
                candidateName: "सुमन कार्की",
                service: "Nepal Police",
                examType: "Model Set Exam",
                score: 38,
                totalMarks: 40,
                percentage: 95,
                timeUsed: "34m 10s",
                dateFormatted: "2026-09-21"
            },
            {
                id: "LB_SEED_3",
                candidateName: "अनिता थापा",
                service: "Armed Police Force",
                examType: "Model Set Exam",
                score: 28,
                totalMarks: 30,
                percentage: 93.3,
                timeUsed: "18m 45s",
                dateFormatted: "2026-09-22"
            },
            {
                id: "LB_SEED_4",
                candidateName: "रोहित गुरुङ",
                service: "Nepal Army",
                examType: "Topic Wise Exam",
                score: 19,
                totalMarks: 20,
                percentage: 95,
                timeUsed: "12m 30s",
                dateFormatted: "2026-09-23"
            },
            {
                id: "LB_SEED_5",
                candidateName: "प्रकाश बि.क.",
                service: "Nepal Police",
                examType: "Model Set Exam",
                score: 35,
                totalMarks: 40,
                percentage: 87.5,
                timeUsed: "41m 20s",
                dateFormatted: "2026-09-24"
            }
        ];
        Storage.saveData(StorageKeys.LEADERBOARD, seedLeaderboard);
    }

    // Initialize sample PDF materials if empty
    if (!Storage.getData(StorageKeys.PDF_DATA)) {
        Storage.saveData(StorageKeys.PDF_DATA, defaultPdfData);
    }
}

// Minimal valid base64 PDF representation for demo download/view
const sampleDemoPdfBase64 = "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iaiA8PCAvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFIgPj4gZW5kb2JqCjIgMCBvYmogPDwgL1R5cGUgL1BhZ2VzIC9LaWRzIFszIDAgUl0gL0NvdW50IDEgPj4gZW5kb2JqCjMgMCBvYmogPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvTWVkaWFCb3ggWzAgMCA2MTIgNzkyXSAvQ29udGVudHMgNCAwIFIgL1Jlc291cmNlcyA8PCAvRm9udCA8PCAvRjEgNSAwIFIgPj4gPj4gPj4gZW5kb2JqCjQgMCBvYmogPDwgL0xlbmd0aCA4MyA+PiBzdHJlYW0KQlQgL0YxIDE2IFRmIDUwIDcwMCBUZCAoTVQgU2VjdXJpdHkgU2VydmljZSBQcmVwYXJhdGlvbiAtIE9mZmljaWFsIFN5bGxhYnVzIFBERikgVGogRVQKZW5kc3RyZWFtCmVuZG9iago1IDAgb2JqIDw8IC9UeXBlIC9Gb250IC9TdWJ0eXBlIC9UeXBlMSAvQmFzZUZvbnQgL0hlbHZldGljYSA+PiBlbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ0IDAwMDAwIG4gCjAwMDAwMDAzNzggMDAwMDAgbiAKdHJhaWxlciA8PCAvU2l6ZSA2IC9Sb290IDEgMCBSID4+CnN0YXJ0eHJlZgo0NTIKJSVFT0Y=";

const defaultPdfData = [
    {
        id: "pdf_na_syllabus",
        title: "नेपाली सेना - सैन्य पदको आधिकारिक पाठ्यक्रम (Syllabus PDF)",
        service: "Nepal Army",
        category: "Syllabus",
        description: "नेपाली सेना सैन्य पदको शारीरिक तन्दुरुस्ती, प्रारम्भिक स्वास्थ्य तथा १०० पूर्णाङ्कको लिखित परीक्षा पाठ्यक्रम।",
        fileName: "Nepal_Army_Sainik_Official_Syllabus.pdf",
        fileSize: "1.4 MB",
        fileUrl: sampleDemoPdfBase64,
        sourceType: "file",
        downloads: 320,
        uploadedAt: "2026-09-15"
    },
    {
        id: "pdf_np_syllabus",
        title: "नेपाल प्रहरी - जनपद प्रहरी जवान पाठ्यक्रम (Syllabus PDF)",
        service: "Nepal Police",
        category: "Syllabus",
        description: "नेपाल प्रहरी जवान पदको लिखित परीक्षा (नेपाली रचना, अंग्रेजी, गणित, सामान्य ज्ञान, प्रहरी सेवा र बौद्धिक परीक्षा) पाठ्यक्रम।",
        fileName: "Nepal_Police_Jawan_Syllabus.pdf",
        fileSize: "1.8 MB",
        fileUrl: sampleDemoPdfBase64,
        sourceType: "file",
        downloads: 412,
        uploadedAt: "2026-09-16"
    },
    {
        id: "pdf_apf_syllabus",
        title: "सशस्त्र प्रहरी बल - सशस्त्र प्रहरी जवान पाठ्यक्रम (Syllabus PDF)",
        service: "Armed Police Force",
        category: "Syllabus",
        description: "सशस्त्र प्रहरी जवान पदको शारीरिक सहिष्णुता, विस्तृत स्वास्थ्य र पेशा सम्बन्धी १०० पूर्णाङ्कको लिखित पाठ्यक्रम।",
        fileName: "APF_Constable_Official_Syllabus.pdf",
        fileSize: "1.2 MB",
        fileUrl: sampleDemoPdfBase64,
        sourceType: "file",
        downloads: 285,
        uploadedAt: "2026-09-17"
    },
    {
        id: "pdf_army_model",
        title: "नेपाली सेना - ५० पूर्णाङ्क नमुना प्रश्नोत्तर संगालो (Model Set PDF)",
        service: "Nepal Army",
        category: "Model Questions",
        description: "नेपाली, अंग्रेजी, गणित र सामान्य ज्ञानका ५० महत्वपूर्ण बहुउत्तर वस्तुगत प्रश्न र उत्तरकुञ्जिका।",
        fileName: "Nepal_Army_Model_Question_Set.pdf",
        fileSize: "2.1 MB",
        fileUrl: sampleDemoPdfBase64,
        sourceType: "file",
        downloads: 540,
        uploadedAt: "2026-09-18"
    },
    {
        id: "pdf_police_act",
        title: "नेपाल प्रहरी - प्रहरी सेवा तथा संविधान विशेष हाते पुस्तिका",
        service: "Nepal Police",
        category: "Notes",
        description: "प्रहरी ऐन २०१२, दर्ज्यानी चिन्ह, प्रहरीका काम कर्तव्य र नेपालको संविधान भाग ३ मौलिक हक सम्बन्धी सारांश टिपोट।",
        fileName: "Nepal_Police_Service_Notes_Handbook.pdf",
        fileSize: "3.2 MB",
        fileUrl: sampleDemoPdfBase64,
        sourceType: "file",
        downloads: 620,
        uploadedAt: "2026-09-19"
    },
    {
        id: "pdf_apf_border",
        title: "सशस्त्र प्रहरी बल - सीमा सुरक्षा (BOP) र विपद् व्यवस्थापन नोट्स",
        service: "Armed Police Force",
        category: "Notes",
        description: "सशस्त्र प्रहरी बलको पेशा सम्बन्धी विशेष विषय: सीमा स्तम्भ सुरक्षा, विपद् उद्धार तथा ऐन नियम।",
        fileName: "APF_Border_Security_Disaster_Notes.pdf",
        fileSize: "2.5 MB",
        fileUrl: sampleDemoPdfBase64,
        sourceType: "file",
        downloads: 390,
        uploadedAt: "2026-09-20"
    }
];

// Auto-initialize when loaded
initializeApplicationData();

// Export globals
window.defaultSyllabusData = defaultSyllabusData;
window.defaultNotesData = defaultNotesData;
window.defaultQuestionData = defaultQuestionData;
window.defaultModelSetData = defaultModelSetData;
window.defaultPdfData = defaultPdfData;
window.sampleDemoPdfBase64 = sampleDemoPdfBase64;
window.initializeApplicationData = initializeApplicationData;
