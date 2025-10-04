# 🩺 RemedyRX  
### *Transforming complex medical advice into simple, actionable daily routines.*

![RemedyRX Banner](https://via.placeholder.com/1200x300?text=RemedyRX+-+Simplify+Your+Health+Routine)

---

[![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?logo=nextdotjs)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Database-Firebase-orange?logo=firebase)](https://firebase.google.com/)
[![Auth0](https://img.shields.io/badge/Auth-Auth0-blue?logo=auth0)](https://auth0.com/)
[![Gemini API](https://img.shields.io/badge/AI-Gemini-purple?logo=google)](https://ai.google.dev/gemini-api)
[![Google Calendar API](https://img.shields.io/badge/API-Google%20Calendar-lightgrey?logo=googlecalendar)](https://developers.google.com/calendar)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🧠 Overview

**RemedyRX** is an AI-powered web application that helps patients understand and follow their doctors’ instructions with clarity and confidence.  

Medical prescriptions and treatment plans are often complex and jargon-filled. RemedyRX solves this by parsing and simplifying doctor instructions into personalized, actionable daily routines — complete with reminders and real-time calendar syncing.

---

## 🌍 Vision

> *To empower patients and caregivers by making healthcare instructions clear, structured, and stress-free — improving adherence and health outcomes.*

---

## ⚙️ Core Features

### 🧾 1. Instruction Parsing (Medical Text Understanding)
- Powered by **Gemini API** for advanced medical text interpretation.  
- Extracts actionable instructions like medication, diet, and activity plans.  
- Infers reasoning behind prescriptions to improve patient understanding.

### 🌐 2. Simplification & Translation Engine
- Converts medical jargon into easy-to-understand language.  
- Supports **multilingual translations** using Gemini’s natural language capabilities.

### 🗓️ 3. Routine Generator
- Uses **Google Calendar API** to create daily schedules.  
- Syncs automatically with user calendars for real-time access.

### 🔔 4. Reminder & Action Breakdown
- Sends push/email notifications via **Firebase**.  
- Tracks user progress and marks tasks as “Done ✅”.

### 🧩 5. Output Formatting & Explanation
- Generates a structured daily plan with clear visual cues and explanations.

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | Next.js + Framer Motion |
| **Authentication** | Auth0 |
| **Database & Notifications** | Firebase |
| **AI Engine** | Gemini API |
| **Scheduling** | Google Calendar API |
| **Health Integration** | Google Fit API |
| **Design** | Figma + Canva |

---

## 🖥️ Screens / Pages

- 🏠 **Home Dashboard** – Overview, reminders, and progress tracking  
- ➕ **New Routine** – Input or upload doctor’s instructions (OCR or text)  
- 📋 **My Routines** – Saved and ongoing schedules  
- 💊 **Medicine Details** – Pulls verified data from external medical APIs  
- 🗓️ **Calendar View** – Integrated with Google Calendar  
- 👤 **Profile & ⚙️ Settings** – Account and preferences management  

---

## 🧩 Icon Set

| Section | Icons |
|----------|-------|
| **Main Pages** | 🏠 Home • 📋 My Routines • ➕ New Routine • 👤 Profile • ⚙️ Settings • 🚪 Logout |
| **Routine Actions** | 💊 Medication • 🥗 Meals/Diet • 🏃 Exercise • 🕒 Reminder • ✏️ Edit • 🗑️ Delete • ✅ Done |
| **AI & Tools** | 🤖 AI Generate • 📷 Upload Image (OCR) • 📤 Export PDF • 🔄 Refresh |
| **Extras** | 👥 Caregiver Mode • 📈 Progress Tracking • 🔔 Notifications • ❓ Help |

---

## 🔒 Why Auth0 Instead of Firebase Auth?

While Firebase Auth is lightweight, **Auth0** provides:
- Enterprise-level security (OAuth2, OpenID Connect)
- Role-based access (Patient vs Caregiver)
- Seamless third-party logins (Google, Apple, Microsoft)
- HIPAA-ready architecture for future compliance

---

## 📈 Scalability

RemedyRX is built for scalability:
- **Next.js SSR** for performance and SEO.  
- **Firebase Realtime Database** for fast sync.  
- **Serverless architecture** for dynamic scaling.  
- Modular design allows independent scaling of AI, Calendar, and User modules.

---

## 🌱 Future Improvements

- 🩹 Integration with **wearable devices** (Fitbit, Apple HealthKit)  
- 🧠 Personalized **AI-driven health insights**  
- 🗣️ **Voice input** for accessibility  
- 👨‍⚕️ **Doctor dashboard** for remote monitoring  
- 📊 Predictive analytics for **treatment adherence**  

---

## 🧑‍💻 Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/remedyrx.git
   cd remedyrx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env.local`**
   ```bash
   AUTH0_CLIENT_ID=your_auth0_id
   AUTH0_SECRET=your_auth0_secret
   FIREBASE_API_KEY=your_firebase_key
   GEMINI_API_KEY=your_gemini_key
   GOOGLE_CALENDAR_CLIENT_ID=your_calendar_client
   GOOGLE_FIT_CLIENT_ID=your_fit_client
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit → `http://localhost:3000`

---

## 🧑‍⚕️ Contributors

| Role | Name |
|------|------|
| **Project Lead** | [Your Name] |
| **AI & Backend Developer** | [Contributor Name] |
| **Frontend & UI/UX Designer** | [Contributor Name] |
| **Branding & Visuals** | [Contributor Name] |

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).  
You are free to use, modify, and distribute this project with attribution.

---

## 🌐 Live Demo (Coming Soon)

🔗 [https://remedyrx.app](https://remedyrx.app)

---

### 💬 “RemedyRX makes your health routine *as easy as checking your calendar.*”
