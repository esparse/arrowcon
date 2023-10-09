const mongoose = require("mongoose")

const locationSchema = mongoose.Schema({
    locationId:{
        type:String
    },
    location:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("location",locationSchema)