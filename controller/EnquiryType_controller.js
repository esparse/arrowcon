const CustomerEnquiryType = require("../model/EnquiryType_model")
exports.getEnquiryType = async(req,res)=>{
    try {
        const result = await CustomerEnquiryType.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  EnquiryType Details",
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