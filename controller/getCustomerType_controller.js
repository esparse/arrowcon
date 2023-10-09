const customertype = require("../model/CustomerType_model")
exports.getCustomertype = async(req,res)=>{
    try {
        const result = await customertype.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  type Details",
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