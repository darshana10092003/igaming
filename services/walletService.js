const db = require("../models");
const Wallet = db.Wallet;

// create wallet
exports.createWallet = async (userId) => {
  const existing = await Wallet.findOne({ where: { userId } });

  if (existing) {
    throw new Error("Wallet already exists");
  }

  return await Wallet.create({
    userId,
    balance: 0
  });
};

// get balance
exports.getWallet = async (userId) => {
  const wallet = await Wallet.findOne({ where: { userId } });

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  return wallet;
};

// add balance
exports.addBalance = async (userId, amount) => {
  const wallet = await Wallet.findOne({ where: { userId } });

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  wallet.balance = Number(wallet.balance) + Number(amount);
  await wallet.save();

  return wallet;
};

// deduct balance
exports.deductBalance = async (userId, amount) => {
  const wallet = await Wallet.findOne({ where: { userId } });

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  const newamt = Number(amount);

  if (Number(wallet.balance) < newamt) {
    throw new Error("Insufficient balance");
  }

  wallet.balance = Number(wallet.balance) - newamt;
  await wallet.save();

  return wallet;
};