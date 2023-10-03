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
    
},{
timestamps:true
})
module.exports = mongoose.model("PurchaseEnquiry",PurchaseEnquirySchema)