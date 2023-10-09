const CustomergetPollutionControlEquipment = require("../model/PollutionControlEquipment_model")
exports.getPollutionControlEquipment = async(req,res)=>{
    try {
        const result = await CustomergetPollutionControlEquipment.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  getPollutionControlEquipment Details",
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