const CustomerEnquiryStatus = require("../model/EnquiryStatus_model")
exports.getEnquiryStatus = async(req,res)=>{
    try {
        const result = await CustomerEnquiryStatus.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  EnquiryStatus Details",
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