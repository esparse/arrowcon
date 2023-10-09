const CustomerRegion = require("../model/CustomerRegion_model")
exports.getCustomerRegion = async(req,res)=>{
    try {
        const result = await CustomerRegion.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Region Details",
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