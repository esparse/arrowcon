const mongoose = require("mongoose")

const itemdetailsinpurchaseestimationenquirySchema = mongoose.Schema({
    itemdetailsinpurchaseestimationenquiryId:{
        type:String
    },
    ItemDetails:{
        type:String,
    }, 
    SuplierId:{
        type:String
    },
    QuotationNo:{
        type:String

    },
    QuotationDate:{
        type:String

    },
    BasePrice:{
        type:String  
    },
Discount:{
    type:String  
},
BasePriceAfterDiscount:{
    type:String  

},
PF:{
    type:String  

},
VAT :{
    type:String   
},
OtherTaxes:{
    type:String   

},
StatutoryRegulationCharges:{
    type:String   

},
FinalPrice:{
    type:String   

},
TransportationCost:{
    type:String     
},
DeliveryPeriodInWeeks:{
    type:String     

},
PaymentTerms:{
    type:String  
},
WarrantyYr:{
    type:String  

},
Remarks:{
    type:String  

}


},{
timestamps:true
})
module.exports = mongoose.model("itemdetailsinpurchaseestimationenquiry",itemdetailsinpurchaseestimationenquirySchema)