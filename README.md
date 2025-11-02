###Contact List App (React)

A modern, responsive **Contact Management Web App** built with **React.js**.  
This project demonstrates frontend development skills — API simulation, state management with React hooks, local storage persistence, and fully responsive UI design.

---

## Live Demo
<img width="1366" height="688" alt="image" src="https://github.com/user-attachments/assets/1ea678ac-4dc1-4469-a160-13ce34d3fa04" />

---

## Project Preview

### Desktop View
<img width="1366" height="637" alt="image" src="https://github.com/user-attachments/assets/5937ec34-493d-4dca-952d-83eae85f781e" />


### Mobile View
<img width="652" height="528" alt="image" src="https://github.com/user-attachments/assets/b7827e70-a1eb-4b55-8808-0e9064f413b9" />

---

## Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Core frontend library for UI and state management |
| **JavaScript (ES6+)** | Application logic and interactivity |
| **CSS3 / Tailwind Utility Classes** | Styling and responsiveness |
| **LocalStorage API** | Persistent contact saving |
| **HTML5** | Base structure (via React template) |

---

## Features

- **View Contacts** — Displays all saved contacts in a responsive grid  
- **Add New Contacts** — Add contacts with name, phone number, and email  
- **Persistent Storage** — Contacts saved in browser LocalStorage  
- **Auto Fetch** — Simulates an API call delay for loading experience  
- **Fully Responsive** — Looks great on all devices  
- **Manual Delete Option** — Clear LocalStorage manually to reset contacts  

---

## Folder Structure

contact-list/
│
├── public/
│ ├── index.html
│
│
├── src/
│ ├── components/
│ │
│ │ 
│ │
│ │
│ ├── data.js # Mock contact data
│ ├── App.jsx # Main app component
│ ├── App.css # Global + responsive styles
│ ├── index.js # React entry point
│ └── index.css # Style
│
├── package.json
└── README.md


---

## How It Works

1. **App.jsx**
   - Manages states (`contacts`, `loading`, `error`)
   - Loads contacts from `localStorage` or mock data
   - Saves all updates to `localStorage`

2. **ContactList.jsx**
   - Displays each contact in a card layout with icons

3. **AddContactForm.jsx**
   - Collects and validates new contact data

4. **Loader.jsx**
   - Simple loading spinner shown during simulated API delay

---

## Persistent Storage

Contacts are stored locally using the **browser’s localStorage**.  
To manually delete all saved contacts:
1. Open DevTools → Application Tab  
2. Select your site under **Local Storage**  
3. Delete the `contacts` key  
4. Refresh the browser to see default contacts again  

Or just open your browser console and run:
```js
localStorage.clear();
Setup and Installation
1. Clone the repository
git clone https://github.com/yourusername/contact-list-app.git
cd contact-list-app

2. Install dependencies
npm install

3. Start the project
npm start


Now visit http://localhost:3000

#Deployment Guide
Deploy on Vercel (Recommended)

Go to vercel.com

Click “New Project” → Import GitHub Repository

Select this repo and click Deploy

That’s it! Your app is live...

#Deploy on Netlify

Build the project:

npm run build


Go to Netlify

Drag and drop your build/ folder into the dashboard

Done!

#Responsive Design Highlights
Device	Behavior
Desktop	Grid layout with larger padding
Tablet	Adjusted spacing and wrapping
Mobile	Single column cards, full-width buttons

The responsiveness is handled using:

@media (max-width: 768px) { ... }
@media (max-width: 480px) { ... }

Key Learnings

React functional components & hooks (useState, useEffect)

Passing props between parent and child components

Persisting data using LocalStorage

Responsive design with CSS Grid & Flexbox

Writing modular, maintainable React code

## Author

Smitirani Haripal
India
Frontend Developer | React Enthusiast
# GitHub: https://github.com/Smiti02
 · LinkedIn: https://www.linkedin.com/in/smitirani-haripal-18a331282/

 License

This project is licensed under the MIT License — free to use and modify.

**Feedback

If you liked this project, please * star the repository
and share your thoughts — it really motivates me to build more awesome projects!
