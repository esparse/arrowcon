const mongoose = require("mongoose")

const CustomerIndustrySchema = mongoose.Schema({
    CustomerIndustryId:{
        type:String
    },
    CustomerIndustry:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("CustomerIndustry",CustomerIndustrySchema)