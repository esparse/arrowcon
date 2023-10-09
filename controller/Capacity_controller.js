const CustomerCapacity = require("../model/Capecity_model")
exports.getCapacity = async(req,res)=>{
    try {
        const result = await CustomerCapacity.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Capacity Details",
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