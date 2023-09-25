const mongoose = require("mongoose")

const CustomerQuotationSchema = mongoose.Schema({
    CustomerQuotationId:{
        type:Number
    },
    CustomerId:{
        type:String
    },
    QuotationNo:{
        type:String,
        
    },
    Subject:{
        type:String
    },
    Date:{
        type:String
    },
    TotalAmount:{
        type:String
    }, 
    IssuedBy:{
        type:String
    },
    ApprovedBy:{
        type:String
    }
},{
timestamps:true
})
module.exports = mongoose.model("CustomerQuotation",CustomerQuotationSchema)