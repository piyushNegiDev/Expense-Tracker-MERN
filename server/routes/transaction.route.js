const express = require("express");

const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  deleteAllTransactions,
} = require("../controllers/transaction.controller");

const router = express.Router();

router.post("/", createTransaction);
router.get("/", getTransactions);
router.patch("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);
router.delete("/", deleteAllTransactions);

module.exports = router;
