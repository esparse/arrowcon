const mongoose = require("mongoose")

const PurchaseEstimationEnquirySchema = mongoose.Schema({
    PurchaseEstimationEnquiryId:{
        type:Number
    },
    SalesEnquiryId:{
        type:String
    },
    EnquiryDate:{
        type:String,
    },
    CustomerId:{
        type:String
    },
    EnquiryOwner :{
        type:String
    },
    OfferingType:{
        type:String
    },
    EnquiryType  :{
        type:String
    },
    Equipment:{
        type:String
    },
    TypeofEquipment:{
        type:String
    },
    EnquiryDescription:{
        type:String
    },
    EnquiryStatus:{
        type:String
    },
    Remark:{
        type:String
    },
    AddtionalComments:{
        type:String
    },
    TargetDate:{
        type:String
    }
    
},{
timestamps:true
})
module.exports = mongoose.model("PurchaseEstimationEnquiry",PurchaseEstimationEnquirySchema)