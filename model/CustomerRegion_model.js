const mongoose = require("mongoose")

const CustomerRegionSchema = mongoose.Schema({
    CustomerRegionId:{
        type:String
    },
    CustomerRegion:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("CustomerRegion",CustomerRegionSchema)