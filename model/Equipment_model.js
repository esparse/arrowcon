const mongoose = require("mongoose")

const EquipmentSchema = mongoose.Schema({
    EquipmentId:{
        type:String
    },
    Equipment:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("Equipment",EquipmentSchema)