const CustomerOfferingType = require("../model/OfferingType_model")
exports.getOfferingType = async(req,res)=>{
    try {
        const result = await CustomerOfferingType.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  OfferingType Details",
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