const mongoose = require("mongoose")

const TypeOfEquipmentSchema = mongoose.Schema({
    TypeOfEquipmentId:{
        type:String
    },
    TypeOfEquipment:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("TypeOfEquipment",TypeOfEquipmentSchema)