const TypeOfEquipment = require("../model/TypeOfEquipment_model")
exports.getTypeOfEquipment = async(req,res)=>{
    try {
        const result = await TypeOfEquipment.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All TypeOfEquipment   Details",
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