# PennyFlow 💸

A clean and simple full-stack expense and income tracker built with React, Node.js, Express, and MongoDB. Track where your money comes from and where it goes with persistent database storage.

🔗 **Live Demo (Original React Version):** [PennyFlow](https://expense-tracker-react-theta-six.vercel.app/)

> **Note:** The live demo above is the original React version. The MERN version is currently under development and uses a backend API with MongoDB.

## ✨ Features

- Add income and expense transactions
- View transactions stored in MongoDB
- Delete individual transactions
- Delete all transactions
- Automatically calculate total balance, income, and expenses
- Separate pages for income and expense management
- Global state management using React Context API
- Responsive user interface built with Tailwind CSS
- REST API integration between the frontend and backend

## 🛠️ Tech Stack

### Frontend
- **React** — UI and component logic
- **Vite** — Development server and build tool
- **React Router** — Client-side routing
- **Context API** — Global state management
- **Tailwind CSS** — Styling
- **Axios** — HTTP requests to the backend API

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — REST API and server
- **MongoDB** — Database for transaction storage
- **Mongoose** — MongoDB object modeling
- **dotenv** — Environment variable management
- **CORS** — Cross-origin requests

## 📁 Project Structure

```text
Expense-Tracker-MERN/
├── client/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
├── server/
│   ├── db/
│   │   └── connection.js
│   ├── models/
│   │   └── transaction.model.js
│   ├── routes/
│   │   └── transaction.routes.js
│   ├── .env
│   └── index.js
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB running locally
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/Expense-Tracker-MERN.git
cd Expense-Tracker-MERN
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/expense_tracker
```

Make sure MongoDB is running locally, then start the backend:

```bash
node server.js
```

The API will run at `http://localhost:8000`.

### 3. Set up the frontend

Open a second terminal from the project root:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/transactions` | Fetch all transactions |
| POST | `/api/transactions` | Create a transaction |
| PATCH | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |
| DELETE | `/api/transactions` | Delete all transactions |

## 📚 What I'm Learning

This project helps me practice full-stack development by connecting a React frontend to a REST API.

- Managing shared application state with React Context API
- Building REST API endpoints with Express.js
- Connecting Node.js applications to MongoDB using Mongoose
- Performing CRUD operations
- Making API requests with Axios
- Handling asynchronous requests and errors
- Using Git branches and commits to manage development work

## 🛣️ Future Improvements

- [ ] Add transaction editing through the frontend
- [ ] Add filtering and sorting
- [ ] Add spending charts and visualizations with Recharts
- [ ] Add monthly summaries
- [ ] Improve form validation and error handling
- [ ] Deploy the backend and connect it to a hosted MongoDB database
- [ ] Deploy the full-stack version

## 📄 License

MIT
