const express = require("express");
const router = express.Router();

const walletController = require("../controllers/walletController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create", authMiddleware, walletController.createWallet);
router.get("/", authMiddleware, walletController.getWallet);
router.post("/add", authMiddleware, walletController.addBalance);
router.post("/deduct", authMiddleware, walletController.deductBalance);

module.exports = router;