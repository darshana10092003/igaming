const settlementService = require("../services/settlementService");

exports.settleBets=async(req,res)=>{
    try{
        const {eventId, marketId, selectionId, status}=req.body;

         if (!eventId || !marketId || !selectionId || !status) {
      return res.status(400).json({
        success: false,
        message: "eventId, marketId, selectionId, status are required"
      });
    }

    const result =await settlementService.settleBets({
         eventId,
         marketId,
         selectionId,
         status
    });

     return res.json({
      success: true,
      message: "Settlement successful",
      data: result
    });
    }
    catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
}