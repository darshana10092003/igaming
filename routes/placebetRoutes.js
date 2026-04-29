const express = require("express");
const router = express.Router();

const placebetController = require("../controllers/placebetController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, placebetController.placeBet);

module.exports = router;