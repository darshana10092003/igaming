const express = require("express");
const router = express.Router();
const settlementController = require("../controllers/settlementController");

// settlement api 
router.post("/settle", settlementController.settleBets);

module.exports = router;