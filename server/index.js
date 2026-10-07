const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 8000;

const transactionRoutes = require("./routes/transaction.route");

const connectDB = require("./db/connection");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Expense Tracker api is running");
});

app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server started at PORT:${PORT}`);
});
