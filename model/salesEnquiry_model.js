const mongoose = require("mongoose")

const SalesEnquirySchema = mongoose.Schema({
    SalesEnquiryId:{
        type:String
    },
    Email:{
type:String
    },
    Password:{
        type:String   
    },
    EnquiryDate:{
        type:String
    },
    CustomerId:{
        type:String
    },
    RFQNo:{
        type:String, 
    },
    EnquiryOwner:{
        type:String
    },
    OfferingType:{
        type:String
    },
    Equipment:{
        type:String
    },
    TypeofEquipment:{
        type:String
    },
    EnquiryType:{
        type:String
    },
    ItemDetails:{
        type:String
    },
    Description:{
        type:String
    } ,
    Unit:{
        type:String
    },
    Quantity:{
        type:String
    },
    WeightedSalesinMn:{
        type:String
    },
    RequiredDate:{
        type:String
    },
    EnquiryStatus:{
        type:String
    },
    Remarks:{
        type:String
    },
    AdditionalComments:{
        type:String
    },
    TargetDate:{
        type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("SalesEnquiry",SalesEnquirySchema)