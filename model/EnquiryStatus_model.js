const mongoose = require("mongoose")

const EnquiryStatusSchema = mongoose.Schema({
    EnquiryStatusId:{
        type:String
    },
    EnquiryStatus:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("EnquiryStatus",EnquiryStatusSchema)