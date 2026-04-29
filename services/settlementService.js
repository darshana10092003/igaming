const db=require('../models'); 
const event = require('../models/event');
const Bet=db.Bet; 
const Wallet=db.Wallet;
const Transaction=db.Transaction;

exports.settleBets = async ({ eventId, marketId, selectionId, status }) => {

  const alreadySettled = await Bet.findOne({
    where: {
      eventId,
      marketId,
      selectionId,
      isSettled: true
    }
  });

  if (alreadySettled) {
    throw new Error("Bets already settled for this market");
  }

  const bets = await Bet.findAll({
    where: {
      eventId,
      marketId,
      selectionId,
      status: "PENDING",
      isSettled: false
    }
  });

  if (!bets.length) {
    throw new Error("no bets found");
  }

  for (const bet of bets) {

    const wallet = await Wallet.findOne({
      where: { userId: bet.userId }
    });

    if (!wallet) throw new Error("Wallet not found");

    const stake = Number(bet.stake);
    const odds = Number(bet.odds);

    //  WIN case
    if (status === "WIN") {

      const winAmount = stake * odds;
      wallet.balance += winAmount;

      await Transaction.create({
        userId: bet.userId,
        betId: bet.id,
        amount: winAmount,
        type: "CREDIT",
        description: "Bet Won"
      });

      bet.status = "WIN";

    }

    //  LOSS case
    else if (status === "LOSS") {

      bet.status = "LOSS";

      await Transaction.create({
        userId: bet.userId,
        betId: bet.id,
        amount: stake,
        type: "DEBIT",
        description: "Bet Lost"
      });

    }

    //  ROLLBACK case
    else if (status === "ROLLBACK") {

      wallet.balance += stake;

      await Transaction.create({
        userId: bet.userId,
        betId: bet.id,
        amount: stake,
        type: "CREDIT",
        description: "Bet Refunded"
      });

      bet.status = "ROLLBACK";

    }

    // invalid status
    else {
      throw new Error("Invalid status");
    }

    bet.isSettled = true;

    await wallet.save();
    await bet.save();
  }

  return {
    totalBets: bets.length,
    eventId,
    marketId,
    selectionId,
    status
  };
};