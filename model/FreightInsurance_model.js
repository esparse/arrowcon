const mongoose = require("mongoose")

const FreightInsuranceSchema = mongoose.Schema({
    FreightInsuranceId:{
        type:String
    },
    FreightInsurance:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("FreightInsurance",FreightInsuranceSchema)