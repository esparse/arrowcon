const mongoose = require("mongoose")

const PollutionControlEquipmentSchema = mongoose.Schema({
    PollutionControlEquipmentId:{
        type:String
    },
    PollutionControlEquipment:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("PollutionControlEquipment",PollutionControlEquipmentSchema)