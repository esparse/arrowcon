const mongoose = require("mongoose")

const EnquiryTypeSchema = mongoose.Schema({
    EnquiryTypeId:{
        type:String
    },
    EnquiryType:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("EnquiryType",EnquiryTypeSchema)