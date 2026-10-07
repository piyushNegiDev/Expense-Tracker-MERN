const Transaction = require("../models/transaction.model");

const createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create transaction",
      error: error.message,
    });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch transactions",
      error: error.message,
    });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after", runValidators: true },
    );

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update transaction",
      error: error.message,
    });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      message: "Transaction deleted successfully",
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete transaction",
      error: error.message,
    });
  }
};

const deleteAllTransactions = async (req, res) => {
  try {
    const result = await Transaction.deleteMany({});

    res.status(200).json({
      message: "All transactions deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete transactions",
      error: error.message,
    });
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  deleteAllTransactions,
};
