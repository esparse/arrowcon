const mongoose = require("mongoose")

const PurchaseOrderSchema = mongoose.Schema({
    PurchaseOrderId:{
        type:Number
    },
    CreatedBy  :{
        type:String
    },

    Reference:{
        type:String,
       
    },
    ConfirmationDate  :{
        type:String,
        
    },
    Vendor:{
        type:String
    },
    ReceiptDate  :{
        type:String
    },
    PurchaseRepresentative  :{
        type:String
    },
    Total:{
        type:String
    },
    CreatedDate:{
        type:String
    },
    
},{
timestamps:true
})
module.exports = mongoose.model("PurchaseOrder",PurchaseOrderSchema)