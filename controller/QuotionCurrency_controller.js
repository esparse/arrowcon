const CustomerQuotionCurrency = require("../model/QuotionCurrency_model")
exports.getQuotionCurrency = async(req,res)=>{
    try {
        const result = await CustomerQuotionCurrency.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All   QuotionCurrency Details",
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