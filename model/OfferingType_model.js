const mongoose = require("mongoose")

const OfferingTypeSchema = mongoose.Schema({
    OfferingTypeId:{
        type:String
    },
    OfferingType:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("OfferingType",OfferingTypeSchema)