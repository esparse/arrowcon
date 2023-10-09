const CustomerIndustry = require("../model/CustomerIndustry_model")
exports.getCustomerIndustry = async(req,res)=>{
    try {
        const result = await CustomerIndustry.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Category Details",
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