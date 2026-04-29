const db=require('../models');
const Bet=db.Bet;
const Wallet=db.Wallet;
const walletService = require('./walletService');
exports.placeBet = async (data)=>{
    const {userId, eventId, marketId, selectionId, stake, odds}=data;

    const wallet=await Wallet.findOne({where:{userId}});

    if(!wallet) throw new Error("Wallet not found");

    const amt=Number(stake);

    if(isNaN(amt) || amt<=0) {
        throw new Error("Invalid stake");
    }

    if(wallet.balance<amt){
        throw new Error("Insufficient balance");
    }


    //check if market and evet is exist or not 
    const market = await db.Market.findOne({
    where: {
    id: marketId,
    eventId: eventId
    }
   });

  if (!market) {
  throw new Error("Invalid market for this event");
  }


    // deduct balance
  await walletService.deductBalance(userId, amt);


  // calculate win
  const potentialWin = amt * Number(odds);

  // create bet
  const bet = await Bet.create({
    userId,
    eventId,
    marketId,
    selectionId,
    stake: amt,
    odds,
    potentialWin,
    status: "PENDING"
  });

  return bet;
};
