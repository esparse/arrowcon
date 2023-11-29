const CustomerStatus = require("../model/Status_model")
exports.getStatus = async(req,res)=>{
    try {
        const result = await CustomerStatus.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All   Status Details",
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