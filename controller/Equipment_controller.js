const CustomerEquipment = require("../model/Equipment_model")
exports.getEquipment = async(req,res)=>{
    try {
        const result = await CustomerEquipment.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  Equipment Details",
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