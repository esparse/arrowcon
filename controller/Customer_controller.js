const Customer = require("../model/Customer_model")
exports.CreateCustomerDetails = async(req,res)=>{
 try {
    let count = (await Customer.countDocuments()+1)+10000;
    const result = await Customer.create({
        CustomerId: "CD10" + count,
        CustomerTypeId:req.body.CustomerTypeId,
        CustomerName:req.body.CustomerName,
        HeadOfficeAddress:req.body.HeadOfficeAddress,
        HeadOfficeDistrict:req.body.HeadOfficeDistrict,
        HeadOfficeProvince:req.body.HeadOfficeProvince,
        HeadOfficeCountryId:req.body.HeadOfficeCountryId,
        HeadOfficeStateId:req.body.HeadOfficeStateId,
        HeadOfficeCityId:req.body.HeadOfficeCityId,
        HeadOfficePin:req.body.HeadOfficePin,
        SiteAddress:req.body.SiteAddress,
        SiteDistrict:req.body.SiteDistrict,
        SiteAddressProvince:req.body.SiteAddressProvince,
        SiteAddressCountryId:req.body.SiteAddressCountryId,
        SiteAddressStateId:req.body.SiteAddressStateId,
        SiteAddressCityId:req.body.SiteAddressCityId,
        SiteAddressPin:req.body.SiteAddressPin,
        CompanyRegistrationNo:req.body.CompanyRegistrationNo,
        CompanyVATNo:req.body.CompanyVATNo,
        locationId:req.body.locationId,
        CustomerCategoryId:req.body.CustomerCategoryId,
        CustomerStatus:req.body.CustomerStatus,
        CustomerRegionId:req.body.CustomerRegionId,
        CustomerIndustryId:req.body.CustomerIndustryId,
        EquipmentId:req.body.EquipmentId,
        TypeOfEquipmentId:req.body.TypeOfEquipmentId,
        MakeOfBoiler:req.body.MakeOfBoiler,
        CapacityId:req.body.CapacityId,
        MainSteamPressureId:req.body.MainSteamPressureId,
        TypeOfFuelFired:req.body.TypeOfFuelFired,
        MainSteamTemperatureId:req.body.MainSteamTemperatureId,
        YearOfInstallation:req.body.YearOfInstallation,
        NoOfInstallation:req.body.NoOfInstallation,
        BoilerMakeNo:req.body.BoilerMakeNo,
        PollutionControlEquipmentId:req.body.PollutionControlEquipmentId,
        MakeOfPollutionControlEquipMent:req.body.MakeOfPollutionControlEquipMent,
        Province:req.body.Province,
        isSiteAddressSameAsHeadOfficeAddress:req.body.isSiteAddressSameAsHeadOfficeAddress,
        ConatctPersonID:req.body.ConatctPersonID,

     })
     res.json({
        success:true,
        message: "Customer Created Successfully",
        data:result
     })
 } catch (error) {
    res.json({
        success:false,
        message: `Something went worng `+ error.message,
        data:null
     })
 }
}
exports.viewCustomerDetails = async(req,res)=>{
    try {
        const result = await Customer.aggregate([
            {
                $lookup:{
                    from:"states",
                    localField:"HeadOfficeStateId",
                    foreignField:"id",
                    as:"HeadOfficeState"
                },
             
            },
            {
                $lookup:{
                    from:"customertypes",
                    localField:"CustomerTypeId",
                    foreignField:"CustomerTypeId",
                    as:"CustomerType"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"HeadOfficeCityId",
                    foreignField:"id",
                    as:"HeadOfficeCity"
                },
             
            },
            {
                $lookup:{
                    from:"states",
                    localField:"SiteAddressStateId",
                    foreignField:"id",
                    as:"SiteAddressState"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"SiteAddressCityId",
                    foreignField:"id",
                    as:"SiteAddressCity"
                },
             
            },
            {
                $lookup:{
                    from:"customercategories",
                    localField:"CustomerCategoryId",
                    foreignField:"CustomerCategoryId",
                    as:"CustomerCategory"
                },
             
            },
            {
                $lookup:{
                    from:"customerregions",
                    localField:"CustomerRegionId",
                    foreignField:"CustomerRegionId",
                    as:"CustomerRegion"
                },
             
            },
            {
                $lookup:{
                    from:"locations",
                    localField:"locationId",
                    foreignField:"locationId",
                    as:"location"
                },
             
            },
            {
                $lookup:{
                    from:"customerindustries",
                    localField:"CustomerIndustryId",
                    foreignField:"CustomerIndustryId",
                    as:"CustomerIndustry"
                },
             
            },
            {
                $lookup:{
                    from:"equipment",
                    localField:"EquipmentId",
                    foreignField:"EquipmentId",
                    as:"Equipment"
                },
             
            },
            {
                $lookup:{
                    from:"typeofequipments",
                    localField:"TypeOfEquipmentId",
                    foreignField:"TypeOfEquipmentId",
                    as:"typeOfEquipment"
                },
             
            },
            {
                $lookup:{
                    from:"capacities",
                    localField:"CapacityId",
                    foreignField:"CapacityId",
                    as:"Capacity"
                },
             
            },
            {
                $lookup:{
                    from:"mainsteampressures",
                    localField:"MainSteamPressureId",
                    foreignField:"MainSteamPressureId",
                    as:"MainSteamPressure"
                },
             
            },
            {
                $lookup:{
                    from:"mainsteamtemperatures",
                    localField:"MainSteamTemperatureId",
                    foreignField:"MainSteamTemperatureId",
                    as:"MainSteamTemperature"
                },
             
            },
            {
                $lookup:{
                    from:"pollutioncontrolequipments",
                    localField:"PollutionControlEquipmentId",
                    foreignField:"PollutionControlEquipmentId",
                    as:"PollutionControlEquipment"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"HeadOfficeCountryId",
                    foreignField:"id",
                    as:"HeadOfficeCountry"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"SiteAddressCountryId",
                    foreignField:"id",
                    as:"SiteAddressCountry"
                },
             
            },
            {
                $lookup:{
                    from:"contactpeople",
                    localField:"ConatctPersonID",
                    foreignField:"ConatctPersonID",
                    as:"ConatctPerson"
                },
             
            },
            {
                $lookup:{
                    from:'salesenquiries',
                    localField:'CustomerId',
                    foreignField:'CustomerId',
                    as:"SalesEnquiries"
                },
            },
            
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ error.message,
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
            message:"Something  went wrong"+error.message,
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
            message:"Something  went wrong"+error.message,
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