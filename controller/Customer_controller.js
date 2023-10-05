const Customer = require("../model/Customer_model")
exports.CreateCustomerDetails = async(req,res)=>{
 try {
    let count = (await Customer.countDocuments()+1)+10000;
    const result = await Customer.create({
        CustomerId: "CD10" + count,
        CustomerType:req.body.CustomerType,
        CustomerName:req.body.CustomerName,
        HeadOfficeAddress:req.body.HeadOfficeAddress,
        HeadOfficeDistrict:req.body.HeadOfficeDistrict,
        HeadOfficeProvince:req.body.HeadOfficeProvince,
        HeadOfficeCountry:req.body.HeadOfficeCountry,
        HeadOfficePin:req.body.HeadOfficePin,
        SiteAddress:req.body.SiteAddress,
        SiteDistrict:req.body.SiteDistrict,
        SiteAddressProvince:req.body.SiteAddressProvince,
        SiteAddressCountry:req.body.SiteAddressCountry,
        SiteAddressPin:req.body.SiteAddressPin,
        ContactPersonName:req.body.ContactPersonName,
        Designation:req.body.Designation,
        Email:req.body.Email,
        Address:req.body.Address,
        ContactNo:req.body.ContactNo,
        LandlineNo:req.body.LandlineNo,
        CompanyRegistrationNo:req.body.CompanyRegistrationNo,
        CompanyVATNo:req.body.CompanyVATNo,
        Locaton:req.body.Locaton,
        CustomerCategory:req.body.CustomerCategory,
        CustomerStatus:req.body.CustomerStatus,
        Region:req.body.Region,
        Industry:req.body.Industry,
        Equipment:req.body.Equipment,
        TypeOfEquipment:req.body.TypeOfEquipment,
        MakeOfBoiler:req.body.MakeOfBoiler,
        CapacityUnit:req.body.CapacityUnit,
        MainSteamPressure:req.body.MainSteamPressure,
        TypeOfFuelFired:req.body.TypeOfFuelFired,
        MainSteamTemperature:req.body.MainSteamTemperature,
        YearOfInstallation:req.body.YearOfInstallation,
        NoOfInstallation:req.body.NoOfInstallation,
        BoilerMakeNo:req.body.BoilerMakeNo,
        PollutionControlEquipMent:req.body.PollutionControlEquipMent,
        MakeOfPollutionControlEquipMent:req.body.MakeOfPollutionControlEquipMent,

     })
     res.json({
        success:true,
        message: "Customer Created Successfully",
        data:result
     })
 } catch (error) {
    res.json({
        success:false,
        message: `Something went worng `+ {error},
        data:null
     })
 }
}
exports.viewCustomerDetails = async(req,res)=>{
    try {
        const result = await Customer.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ {error},
            data:null
         })
    }
}
exports.deleteCustomerDetails = async(req,res)=>{
    try {
        const result = await Customer.findOneAndDelete({CustomerId:req.params.CustomerId})
        res.json({
            success:true,
            message:"Delete Customer Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.updateCustomerDetails = async(req,res)=>{
    try {
        const result = await Customer.findOneAndUpdate({CustomerId:req.body.CustomerId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Customer Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}
exports.getSingleCustomerDetails = async(req,res)=>{
    try {
        const result = await Customer.findOne({CustomerId:req.params.CustomerId})
        res.json({
            success:true,
            message:"get a Single Customer Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}