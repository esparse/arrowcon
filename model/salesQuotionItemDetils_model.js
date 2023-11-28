const mongoose = require("mongoose")

const SalesQuotionItemDetilsSchema = mongoose.Schema({
    SalesQuotionItemDetilsId:{
        type:String
    },
    SalesQuotionId:{
        type:String
    },

    ProductService:{
        type:String
    },
    Description:{
        type:String
    },
    Quantity:{
        type:String
    },
    UnitPriceTHB:{
        type:String
    },
    SubTotalTHB:{
        type:String

    }

    
   
},{
timestamps:true
})
module.exports = mongoose.model("SalesQuotionItemDetils",SalesQuotionItemDetilsSchema)