const CustomerInspection = require("../model/Inspection_model")
exports.getInspection = async(req,res)=>{
    try {
        const result = await CustomerInspection.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Inspection Details",
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