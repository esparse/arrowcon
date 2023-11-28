
const mongoose = require("mongoose")

const QuotionCurrencySchema = mongoose.Schema({
    QuotionCurrencyId:{
        type:String
    },
    QuotionCurrency:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("QuotionCurrency",QuotionCurrencySchema)