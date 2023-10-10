const mongoose = require("mongoose")

const LiquidateddamagesSchema = mongoose.Schema({
    LiquidateddamagesId:{
        type:String
    },
    Liquidateddamages:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("Liquidateddamages",LiquidateddamagesSchema)