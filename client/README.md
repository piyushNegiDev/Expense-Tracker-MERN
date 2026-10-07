# PennyFlow 💸

A clean and simple expense & income tracker built with React. Track where your money comes from and where it goes — all saved locally in your browser.

🔗 **Live Demo**: [expense-tracker-react-theta-six.vercel.app](https://expense-tracker-react-theta-six.vercel.app/)

---

## Features

- Add and delete income & expense transactions
- Automatically calculates your total balance, income, and expenses
- Data persists in **localStorage** — your entries survive page refreshes
- Separate pages for income and expense management
- Responsive UI built with Tailwind CSS

---

## Tech Stack

- **React** — UI & component logic
- **React Router** — client-side routing
- **Context API** — global state management
- **localStorage** — persistent data storage
- **Tailwind CSS** — styling
- **Vite** — build tool & dev server

---

## Project Structure

```
src/
├── context/
│   └── AppDataContext.js     # Global state via Context API
├── pages/
│   ├── HomePage.jsx          # Dashboard / balance overview
│   └── IncomePage.jsx        # Shared page for income & expense
├── util/
│   └── localStorage.js       # localStorage read/write helpers
└── App.jsx                   # Routes & context provider
```

---

## Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/piyushNegiDev/Expense-Tracker-React.git

# Navigate into the project
cd Expense-Tracker-React

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## What I Learned

This was a practice project built a few weeks into learning React. Key concepts explored:

- Managing global state with the **Context API** instead of prop drilling
- **React Router** for multi-page navigation in a SPA
- Abstracting **localStorage** into a reusable utility
- Reusing a single component (`IncomePage`) for two different routes via props

---

## Future Improvements

- [ ] Add transaction categories (Food, Transport, etc.)
- [ ] Filter and sort transactions
- [ ] Spending charts with Recharts
- [ ] Edit existing transactions
- [ ] Monthly summary view

---

## License

MIT