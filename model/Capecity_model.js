const mongoose = require("mongoose")

const CapacitySchema = mongoose.Schema({
    CapacityId:{
        type:String
    },
    Capacity:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("Capacity",CapacitySchema)