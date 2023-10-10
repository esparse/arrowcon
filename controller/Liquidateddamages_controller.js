const CustomerLiquidateddamages = require("../model/Liquidated_damages _model")
exports.getLiquidateddamages = async(req,res)=>{
    try {
        const result = await CustomerLiquidateddamages.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Liquidateddamages Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ {error},
            data:null
         })
    }
}