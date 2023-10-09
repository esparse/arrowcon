const mongoose = require("mongoose")

const CustomerTypeSchema = mongoose.Schema({
    CustomerTypeId:{
        type:String
    },
    CustomerType:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("CustomerType",CustomerTypeSchema)