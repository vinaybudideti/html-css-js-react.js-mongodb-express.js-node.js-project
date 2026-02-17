<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-output.gif" alt="ccbp timeline output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

# 🕒 ccbp-timeline — Project Timeline Hub (React)

## 🚀 Live Demo
🔗 https://ccbptimeline.ccbp.tech/

This repository is a single landing page that showcases multiple completed React projects in a timeline format.  
When you open the **Live Demo**, you can:
- Scroll through the timeline
- Open each **Project card** to view project details
- Access project flows inside the timeline UI (and external demo links if they are present in the card content)

---

## ✅ About (Proof-Oriented)

**ccbp-timeline** is built to reduce reviewer friction by consolidating multiple React apps into one clean hub:  
**Timeline → Project Card → Details → (Demo if available) → Code**.

### What this repo proves (engineering signals)

- **Component-driven UI architecture** with reusable components and clean separation  
- **Routing patterns** (where applicable) for list → detail user flows  
- **State management** (where applicable) using **React Context API**  
- **UX correctness:** loaders/spinners, empty states, totals/counts, responsive layout  
- **Maintainability:** consistent folder structure + clear run instructions  

The timeline UI is built with **React + react-chrono**, configured as a responsive horizontal timeline with custom cards/icons to separate **Course** vs **Project** entries.

---

## 🧱 Tech Stack

- React.js  
- react-chrono  
- JavaScript (ES6+)  
- CSS3  

> Individual projects inside the timeline may additionally demonstrate **React Router DOM** and **React Context API** patterns.

---

## 🗂️ Projects Included (Inside Timeline)

### 📝 BlogList App

Responsive blog listing UI with dynamic routing and detailed blog views.

**Highlights:**
- Lists blogs with titles, authors, and images  
- Click a blog to view full details using dynamic route parameters  
- Uses a Loader/spinner while data is loading  
- Mobile responsive UI  

---

### 🕰️ Digital Clock App

Digital clock that updates every second.

**Highlights:**
- Displays the current time in HH:MM:SS format  
- Auto-updates every second (real-time UI behavior)  
- Clean component structure  

---

### 📇 Contacts App

Contact manager demonstrating global/shared state patterns.

**Highlights:**
- View and manage a list of contacts  
- Add new contacts with unique ID generation  
- Edit existing contact details  
- Uses global state via React Context for seamless data flow  

---

### 🛒 E-commerce Cart App

E-commerce UI featuring product listing and shopping cart workflows.

**Highlights:**
- Product list with image, title, price  
- Add to cart & remove from cart  
- Dynamic cart item count in navbar  
- Cart page with total price calculation  
- Empty cart message handling  
- Mobile-friendly design  

---

### 🧠 Context App (Demo Login)

React Context API demo showing shared state behavior.

**Live Demo:** https://contextapp20p3.ccbp.tech/

**Demo Credentials:**
- Username: henry | Password: henry_the_developer  
- Username: david | Password: the_miller@23  
- Username: robert | Password: WilsonRobert45  
- Username: mosh | Password: DevMosh22  
- Username: rahul | Password: rahul@2021  
- Username: praneetha | Password: praneetha@2021  

**What to verify quickly:**
- Login works  
- Shared state updates across components/pages correctly  
- Context patterns (Provider/Consumer) are implemented cleanly  

---

## 📁 Folder Structure (High-Level)

```text
src/
├── components/
│   ├── CourseTimelineCard/
│   ├── ProjectTimelineCard/
│   └── TimelineView/
├── App.js
└── index.js

## ▶️ Run Locally (Commands)

### ✅ Prerequisites
- Node.js 18+ recommended
- Package manager: pnpm (recommended if you keep pnpm-lock.yaml) or npm

### 1) Install dependencies
```bash
pnpm install || npm install
2) Start the development server
pnpm start || npm start
3) Open in browser
http://localhost:3000
4) Production build (optional)
pnpm build || npm run build
📌 Notes for Reviewers
The Live Demo is the fastest way to review: https://ccbptimeline.ccbp.tech/
Projects are accessible from the timeline UI via project cards.
This repo is intentionally documented so you can clone, install, and run it in a few commands.
