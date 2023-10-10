const mongoose = require("mongoose")

const remarkSchema = mongoose.Schema({
    remarkId:{
        type:String
    },
    remark:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("remark",remarkSchema)