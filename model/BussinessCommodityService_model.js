const mongoose = require("mongoose")

const BussinessCommodityServiceSchema = mongoose.Schema({
    BussinessCommodityServiceId:{
        type:String
    },
    BussinessCommodityService:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("BussinessCommodityService",BussinessCommodityServiceSchema)