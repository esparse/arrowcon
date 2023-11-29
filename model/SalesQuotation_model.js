const mongoose = require("mongoose")

const SalesQuotionSchema = mongoose.Schema({
    SalesQuotionId:{
        type:String
    },
    Date:{
        type:String
    },
    QuotionCurrency:{
        type:String,   
    },
    CustomerId:{
        type:String
    },
    Subject:{
        type:String
    },
    OfferValidity:{
        type:String
    },
    PaymentTerm:{
        type:String
    },
    DeliveryTerm:{
        type:String
    },
    DeliveryBasis:{
        type:String
    },
    StatusId:{
        type:String,
        default:"1"
    }
},{
timestamps:true
})
module.exports = mongoose.model("SalesQuotion",SalesQuotionSchema)