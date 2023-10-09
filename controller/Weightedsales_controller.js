const CustomerWeightedsales = require("../model/Weightedsales_model")
exports.getWeightedsales = async(req,res)=>{
    try {
        const result = await CustomerWeightedsales.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Weightedsales Details",
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