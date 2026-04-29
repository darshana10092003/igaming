const walletService = require("../services/walletService");

// CREATE
exports.createWallet = async (req, res) => {
  try {
    const wallet = await walletService.createWallet(req.user.id);

    res.status(201).json({
      success: true,
      message: "Wallet created",
      data: wallet
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// GET
exports.getWallet = async (req, res) => {
  try {
    const wallet = await walletService.getWallet(req.user.id);

    res.json({
      success: true,
      data: wallet
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    });
  }
};

// ADD BALANCE
exports.addBalance = async (req, res) => {
  try {
    const { amount } = req.body;

    const wallet = await walletService.addBalance(req.user.id, amount);

    res.json({
      success: true,
      message: "Balance added",
      data: wallet
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// DEDUCT BALANCE
exports.deductBalance = async (req, res) => {
  try {
    const { amount } = req.body;

    const wallet = await walletService.deductBalance(req.user.id, amount);

    res.json({
      success: true,
      message: "Balance deducted",
      data: wallet
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};