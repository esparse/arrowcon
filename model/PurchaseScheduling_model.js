const mongoose = require("mongoose")

const PurchaseSchedulingSchema = mongoose.Schema({
    PurchaseSchedulingId:{
        type:Number
    },
    CustomerId:{
        type:String
    },
    Name:{
        type:String
    },
    Date:{
        type:String,
        
    },
    Email:{
        type:String,
       
    },
   
    ContactNo:{
        type:String
    },
    Description:{
        type:String
    },
    CreatedDate:{
        type:String
    },  
},{
timestamps:true
})
module.exports = mongoose.model("PurchaseScheduling",PurchaseSchedulingSchema)