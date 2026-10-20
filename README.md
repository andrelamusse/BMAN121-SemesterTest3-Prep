# NWU BMAN121 Semester Test 3 Interactive Test Preparation App

[![GitHub Pages](https://img.shields.io/badge/deployment-GitHub%20Pages-brightgreen)](https://andrelamusse.github.io/BMAN121-SemesterTest3-Prep/)
[![NWU Curriculum](https://img.shields.io/badge/curriculum-NWU%20BMAN121-purple)](https://www.nwu.ac.za)
[![Questions](https://img.shields.io/badge/questions-120%20Verified-gold)](./questions.js)
[![Dependencies](https://img.shields.io/badge/dependencies-Zero%20(Pure%20Vanilla)-blue)](#)

A high-performance, standalone, responsive web application engineered for North-West University (NWU) students preparing for **BMAN121 (General Management) Semester Test 3**. 

Covers **Study Unit 7**, **Study Unit 8**, and **Study Unit 9** with 120 exam-calibre, scenario-based multiple-choice questions, rich pedagogical explanations, complete distractor teardowns, and deep performance analytics.

---

## 📖 Curriculum Alignment & Question Scope

Strictly aligned with the prescribed NWU BMAN121 syllabus and textbook (*Introduction to Business Management and General Management*, Oxford University Press Southern Africa):

### 1. Study Unit 7: Operations & Production Management
- **The Transformation Model:** Inputs (transformed resources: materials, information, customers vs transforming resources: facilities, human labour), transformation processes, and goods vs service outputs.
- **Manufacturing Process Types:** Project processes, jobbing (job-lot), batch production, mass production (assembly lines), and continuous flow processes.
- **Service Operations Typology:** Professional services, service shops, and mass services.
- **Operations Layouts:** Fixed-position layout, process (functional) layout, product (line) layout, and cellular layout.
- **Planning & Control:** Qualitative vs quantitative demand forecasting, capacity strategies (lead, lag, match), reconciling supply and demand, Gantt charts, and Critical Path Method (CPM).
- **Inventory Management:** Independent vs dependent demand, Economic Order Quantity (EOQ) model and formulas, Material Requirements Planning (MRP), and Just-in-Time (JIT) / Lean manufacturing (Kanban, elimination of *muda*).
- **Total Quality Management (TQM):** Continuous improvement (*Kaizen*), customer focus, zero defects, Costs of Quality (Prevention, Appraisal, Internal Failure, External Failure), and ISO 9000 quality standards.

### 2. Study Unit 8: Marketing Management
- **Nature of Marketing & Orientations:** The marketing concept vs production, product, sales, and societal marketing philosophies; Theodore Levitt's marketing myopia.
- **Marketing Research:** 5-step research process, primary vs secondary data sources, qualitative vs quantitative methods (focus groups, surveys), and sampling designs.
- **STP Framework:**
  - *Market Segmentation:* Geographic, demographic, psychographic, and behavioural segmentation; criteria for effective segments (measurable, accessible, substantial, actionable).
  - *Target Marketing:* Undifferentiated (mass), differentiated (multi-segment), concentrated (niche), and micromarketing.
  - *Product Positioning:* Perceptual mapping, Unique Selling Proposition (USP), and competitive differentiation.
- **The Marketing Mix (4 Ps):**
  - *Product:* 3 product levels (core benefit, actual, augmented), consumer goods classification (convenience, shopping, specialty, unsought), Product Life Cycle (PLC) stages and strategies, branding and private/store labels (e.g. Shoprite Ritebrand, Pick n Pay No Name).
  - *Price:* Cost-based vs value-based pricing, new product strategies (Price Skimming vs Penetration Pricing), and psychological (odd-even) pricing tactics.
  - *Place (Distribution):* Direct vs indirect channels, market coverage intensity (intensive, selective, exclusive), channel leadership, and logistics/physical distribution.
  - *Promotion:* Integrated Marketing Communications (IMC), advertising, personal selling, sales promotion, and public relations (PR) crisis management.
- **Consumer Behaviour:** Consumer buying decision process (5 stages), individual determinants (Maslow's hierarchy of needs, perception, learning) and social determinants (reference groups, culture), and post-purchase cognitive dissonance.

### 3. Study Unit 9: Financial Management, Human Resources & SA Labour Law
- **Financial Functions & Objectives:** Long-term shareholder wealth maximisation, liquidity vs solvency, risk-return trade-off, cost-benefit principle, and the time value of money.
- **Financial Statements & Ratios:** Balance Sheet (Statement of Financial Position), Income Statement, Liquidity ratios (Current Ratio, Acid-Test/Quick Ratio), Debt Ratio, and Profitability ratios (Gross/Net profit margin, ROA, ROE).
- **Working Capital & Cost Volume Profit:** Net Working Capital ($CA - CL$), cash budget forecasting, fixed vs variable costs, contribution margin, break-even quantity ($Q_{BE} = \frac{FC}{P - VC}$), and margin of safety.
- **Sources of Financing:** Short-term (bank overdraft, trade credit '2/10 net 30', debt factoring) vs long-term (equity capital vs debentures/loans, financial leasing).
- **Strategic Human Resource Management (HRM):** Job analysis (Job Description vs Job Specification), internal vs external recruitment, selection hurdles, employee induction/onboarding, training vs development, performance appraisal biases (halo effect, central tendency, recency error).
- **South African Labour Legislation:**
  - *Basic Conditions of Employment Act (BCEA, Act 75 of 1997):* 45 hours maximum ordinary work per week (9 hrs/day for $\le$5 days), overtime caps (10 hrs/week at 1.5× rate), annual leave (21 consecutive days / 15 working days), sick leave (30 days per 3-year cycle).
  - *Labour Relations Act (LRA, Act 66 of 1995):* 3 substantive grounds for fair dismissal (misconduct, incapacity, operational requirements/retrenchment), procedural fairness requirements, CCMA conciliation and arbitration procedures.
  - *Employment Equity Act (EEA, Act 55 of 1998):* Elimination of unfair discrimination, affirmative action for designated groups (black people, women, people with disabilities).
  - *Skills Development Act (SDA):* SETAs, workplace skills planning, and skills levies.

---

## ⚡ Core Application Features

1. **Dynamic Question Engine:**
   - **Shuffle & Randomize:** Fully randomizes question sequence and answer choice orders on every test session while preserving exact answer integrity.
   - **Multiple Study Modes:**
     - ⏱️ *Full Mock Exam:* Standard 40 questions sampled proportionally across SU7, SU8, and SU9 with a 50-minute countdown timer under exam conditions.
     - 💡 *Study / Practice Mode:* Untimed exploration with instant feedback on every click.
     - 🏭 *Study Unit 7 Focus Quiz:* 40 dedicated Operations & Production questions.
     - 🎯 *Study Unit 8 Focus Quiz:* 40 dedicated Marketing Management questions.
     - 💼 *Study Unit 9 Focus Quiz:* 40 dedicated Financial, HR & Labour Law questions.
     - 🎯 *Remedial Mode:* Instant one-click re-drill of only the questions missed in the previous session.

2. **Pedagogical Explanations (High Academic Quality):**
   - Every single question provides:
     - 🎯 **Core Theoretical Rationale:** Explains why the correct answer is right according to standard business principles.
     - ❌ **Detailed Distractor Teardowns:** Explains why each of the 3 incorrect options is wrong, identifying the misconceptions or concepts they represent.
     - 📚 **Syllabus / Textbook Reference:** Precise reference pointing to the relevant textbook chapter and learning outcome.

3. **Analytics & Performance Tracking:**
   - Real-time overall score percentage with academic grading bands:
     - 🏆 **Distinction Standard (≥75%)**
     - ✅ **Satisfactory Pass (50%–74%)**
     - ⚠️ **Attention Needed (<50%)**
   - **Chapter-by-Chapter Breakdown:** Independent mastery bars for SU7, SU8, and SU9 with automated diagnostic advice highlighting weak syllabus areas.
   - Comprehensive metrics: Total questions, correct count, incorrect count, total duration, and average seconds per question.
   - **Interactive Review Log:** Filter questions by *All*, *Missed Only*, *Flagged Only*, *SU7*, *SU8*, or *SU9*.

4. **Built-in Interactive Student Calculators:**
   - **Break-Even Analysis Calculator:** Calculates break-even quantity and revenue from Fixed Costs, Selling Price, and Variable Cost per unit.
   - **Economic Order Quantity (EOQ) Calculator:** Computes optimal order size using annual demand ($D$), order setup cost ($S$), and holding cost ($H$).
   - **Liquidity & Working Capital Calculator:** Computes Current Ratio, Acid-Test Ratio, and Net Working Capital in real time.

5. **Modern, Accessible UI/UX:**
   - Responsive design tailored for smartphones, tablets, and widescreen desktop monitors.
   - Seamless **Dark / Light mode** toggle with persistent user preference storage.
   - **Full Keyboard Navigation:** 
     - Keys `1`, `2`, `3`, `4` or `A`, `B`, `C`, `D` to select options.
     - `ArrowRight` or `N` for Next question.
     - `ArrowLeft` or `P` for Previous question.
     - `F` to Flag / Unflag for review.
   - **Zero CORS & Zero External Dependencies:** Pure client-side HTML5, CSS3, and JavaScript. Runs offline directly from the file system.

---

## 🚀 Repository File Structure

```text
BMAN121-SemesterTest3-Prep/
├── index.html       # Clean single-page application entrypoint
├── style.css        # Responsive NWU design system with light/dark themes
├── app.js           # Dynamic question engine, analytics & interactive tools
├── questions.js     # 120 verified BMAN121 questions with pedagogical rationales
└── README.md        # Comprehensive documentation & syllabus guide
```

---

## 💻 Local Execution

Because the application has **zero external dependencies** and requires no build tools or package managers:

1. Clone or download the repository:
   ```bash
   git clone https://github.com/andrelamusse/BMAN121-SemesterTest3-Prep.git
   cd BMAN121-SemesterTest3-Prep
   ```
2. Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🌐 Live GitHub Pages Deployment

The application is deployed live on GitHub Pages:
- **Live URL:** [https://andrelamusse.github.io/BMAN121-SemesterTest3-Prep/](https://andrelamusse.github.io/BMAN121-SemesterTest3-Prep/)
- **GitHub Repository:** [https://github.com/andrelamusse/BMAN121-SemesterTest3-Prep](https://github.com/andrelamusse/BMAN121-SemesterTest3-Prep)

---

## 🏛️ Academic Integrity & Acknowledgements
- Developed for North-West University (NWU) BMAN121 / BGMN121 students.
- Prescribed textbook: *Introduction to Business Management and General Management*, Oxford University Press Southern Africa.
- South African Labour Statutes: Basic Conditions of Employment Act 75 of 1997, Labour Relations Act 66 of 1995, Employment Equity Act 55 of 1998, and Skills Development Act 97 of 1998.
