const mongoose = require("mongoose")

const SupplierReferenceQuoteSchema = mongoose.Schema({
    SupplierReferenceQuoteId:{
        type:String
    },
    SupplierReferenceQuote:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("SupplierReferenceQuote",SupplierReferenceQuoteSchema)