const mongoose = require("mongoose")

const SalesEnquiryitemdetailsSchema = mongoose.Schema({
    salesEnquiryitemdetailsId:{
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
   
    SalesEnquiryId:{
        type:String
    },
},{
timestamps:true
})
module.exports = mongoose.model("SalesEnquiryitemdetails",SalesEnquiryitemdetailsSchema)