const TypeOffuelfired = require("../model/TypeofFuelFired_mode")
exports.getTypeOffuelfired = async(req,res)=>{
    try {
        const result = await TypeOffuelfired.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All TypeOffuelfired   Details",
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