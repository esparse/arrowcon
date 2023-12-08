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
   
    EnquiryDescription:{
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
    CostEstimationStatusId:{
        type:String

    },
   AllocatedEmployeeId:{
    type:String
   },
   AllocatedRemark:{
    type:String
   }
    
},{
timestamps:true
})
module.exports = mongoose.model("PurchaseEstimationEnquiry",PurchaseEstimationEnquirySchema)