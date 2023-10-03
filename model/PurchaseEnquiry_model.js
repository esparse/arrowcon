const mongoose = require("mongoose")

const PurchaseEnquirySchema = mongoose.Schema({
    PurchaseEnquiryId:{
        type:Number
    },
    Name:{
        type:String
    },
    Email:{
        type:String,
    },
    Password:{
        type:String
    },
    GroupId:{
        type:String,
    },
    CompanyName :{
        type:String,
    },
    ContactNo  :{
        type:String
    },
    Country:{
        type:String
    },
    SectorofActivity  :{
        type:String
    },
    EnquiryDetails:{
        type:String
    },
    CreatedDate:{
        type:String
    },
    verificationCode:{
        type:Number
    },
    
},{
timestamps:true
})
module.exports = mongoose.model("PurchaseEnquiry",PurchaseEnquirySchema)