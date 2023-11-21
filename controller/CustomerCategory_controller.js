const CustomerCategory = require("../model/customercategory_model")
exports.getCustomerCategory = async(req,res)=>{
    try {
        const result = await CustomerCategory.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Category Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ error.message,
            data:null
         })
    }
}