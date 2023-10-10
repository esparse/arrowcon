const mongoose = require("mongoose")

const InspectionSchema = mongoose.Schema({
    InspectionId:{
        type:String
    },
    Inspection:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("Inspection",InspectionSchema)