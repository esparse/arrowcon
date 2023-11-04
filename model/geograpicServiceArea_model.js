const mongoose = require("mongoose")

const GeoGraphicServiceAreaSchema = mongoose.Schema({
    GeoGraphicServiceAreaId:{
        type:String
    },
    GeoGraphicServiceArea:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("GeoGraphicServiceArea",GeoGraphicServiceAreaSchema)