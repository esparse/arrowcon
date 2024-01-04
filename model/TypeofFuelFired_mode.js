const mongoose = require("mongoose")

const TypeOffuelfiredSchema = mongoose.Schema({
    TypeOffuelfiredId:{
        type:String
    },
    TypeOffuelfired:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("TypeOffuelfired",TypeOffuelfiredSchema)