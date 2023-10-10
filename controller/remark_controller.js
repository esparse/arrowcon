const Customerremark = require("../model/remark_model")
exports.getremark = async(req,res)=>{
    try {
        const result = await Customerremark.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  remark Details",
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