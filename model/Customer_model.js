const mongoose = require("mongoose")

const CustomerSchema = mongoose.Schema({
    CustomerTypeId:{
        type:String
    },
    CustomerId:{
        type:String
    },
    CustomerName:{
        type:String
    },
    HeadOfficeAddress:{
        type:String,   
    },
    HeadOfficeDistrict:{
        type:String,  
    },
    HeadOfficeProvince:{
        type:String
    },
    HeadOfficeCountryId:{
        type:Number
    },
    HeadOfficeStateId:{
        type:Number

    },
    HeadOfficeCityId:{
        type:Number
    },
    HeadOfficePin:{
        type:String
    },
    SiteAddress:{
        type:String
    },
    SiteDistrict:{
        type:String
    },
   SiteAddressProvince:{
      type:String
    },
    SiteAddressCountryId:{
        type:Number
    },
    SiteAddressStateId:{
        type:Number

    },
    SiteAddressCityId:{
        type:String

    },
    SiteAddressPin:{
        type:String
    },
  ConatctPersonID:{
    type: String, // This indicates that it's an array of strings
    

  },
    CompanyRegistrationNo:{
        type:String
    },
    CompanyVATNo:{
        type:String
    },
    CustomerCategoryId:{
        type:String
    },
    CustomerStatus:{
        type:String
    },
    CustomerRegionId:{
        type:String
    },
    locationId:{
        type:String
    },
    CustomerIndustryId:{
        type:String
    },
    EquipmentId:{
        type:String
    },
    TypeOfEquipmentId:{
        type:String
    },
    MakeOfBoiler:{
        type:String
    },
    CapacityId:{
        type:String
    },
    Capacity:{
        type:String
    },
    MainSteamPressureId:{
        type:String
    },
    TypeOffuelfiredId:{
        type:String
    },
    MainSteamTemperatureId:{
       type:String
    },
    YearOfInstallation:{
        type:String
    },
    NoOfInstallation:{
        type:String
    },
    BoilerMakeNo:{
        type:String
    },
    PollutionControlEquipmentId:{
        type:String
    },
    MakeOfPollutionControlEquipMent:{
        type:String
    },
    Province:{
        type:String
    },
    isSiteAddressSameAsHeadOfficeAddress :{
        type:Boolean
    }

   
},{
timestamps:true
})
CustomerSchema.index({ CustomerName: 'text' });
module.exports = mongoose.model("Customer",CustomerSchema)