const mongoose = require("mongoose")

const WeightedsalesSchema = mongoose.Schema({
    WeightedsalesId:{
        type:String
    },
    Weightedsales:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("Weightedsales",WeightedsalesSchema)