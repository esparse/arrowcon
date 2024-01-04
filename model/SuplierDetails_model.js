const mongoose = require("mongoose")

const SuplierSchema = mongoose.Schema({
    SuplierTypeId:{
        type:String
    },

    SuplierId:{
        type:String
    },
    SuplierName:{
        type:String
    },
   RegisteredOfficeAddress:{
        type:String,   
    },
   RegisteredOfficeDistrict:{
        type:String,  
    },
   RegisteredOfficeProvince:{
        type:String
    },
    RegisteredOfficeCountryId:{
        type:Number
    },
    RegisteredOfficeStateId:{
        type:Number
    },
    RegisteredOfficeCityId:{
        type:Number
    },
   RegisteredOfficePin:{
        type:String
    },
    BillingAddress:{
        type:String
    },
    BillingDistrict:{
        type:String
    },
   BillingAddressProvince:{
      type:String
    },
    BillingAddressCountryId:{
        type:Number
    },
    BillingAddressStateId:{
        type:Number
    },
    BillingAddressCityId:{
        type:String
    },
    BillingAddressPin:{
        type:String
    },
    ContactPersonName:{
        type:String
    },
    Designation:{
        type:String
    },
    Email:{
        type:String
    },
    ContactNo:{
        type:String
    },
    CountryCode:{
        type:String
    },
    LegalStructureId:{
        type:String
    },
    DateOfCompanyEstablish:{
        type:String
    },
    BussinessCommodityServiceId:{
        type:String
    },
    GeograpicServiceArea:{
        type:String
    },
    BankName:{
        type:String
    },
    BankBranch:{
        type:String
    },
    BankBranchCode:{
        type:String
    },
    IFSCCode:{
        type:String
    },
    BankManagerName:{
        type:String
    },
    ContactNo:{
        type:String
    },
    BankAddress:{
        type:String
    },
    BankEmailId:{
        type:String
    }, 
    ProductBrocher:{
        type:String
    },
    PANno:{
        type:String
    },
    IsHeadOfficeAddressSameasSiteOfficeAddress:{
        type:Boolean

    },
    SupplierType :{
        type:String

    },
    BillingAddressPin :{
        type:String

    },
    CountryCode :{
        type:String
    },
    MobileNo:{
        type:String
    },
    BankBranch:{
        type:String
    } ,
    Bankswiftcode:{
        type:String
    },

    isRegisterAddressSameAsBillingAddress:{
        type:Boolean
    }
},{
timestamps:true
})
module.exports = mongoose.model("Suplier",SuplierSchema)