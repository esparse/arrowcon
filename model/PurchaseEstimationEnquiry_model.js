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
    EnquiryOwnerId :{
        type:String
    },
    OfferingTypeId:{
        type:String
    },
    EnquiryTypeId  :{
        type:String
    },
    EquipmentId:{
        type:String
    },
    TypeOfEquipmentId:{
        type:String
    },
    EnquiryDescription:{
        type:String
    },
    EnquiryStatusId:{
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
    },
    CostEstimationStatus:{
        type:String

    }
    
},{
timestamps:true
})
module.exports = mongoose.model("PurchaseEstimationEnquiry",PurchaseEstimationEnquirySchema)