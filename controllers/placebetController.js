const placebetService = require("../services/placebetService");

exports.placeBet = async (req, res) => {
  try {
    const bet = await placebetService.placeBet(req.body);

    res.status(201).json({
      success: true,
      message: "Bet placed successfully",
      data: bet
    });

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};