const Suplier = require("../model/SuplierDetails_model")
exports.CreateSuplierDetails = async(req,res)=>{
    let count = (await Suplier.countDocuments()+1)+10000;
 try {
    const result = await Suplier.create({
      SuplierId:"VD10-"+count,
        SuplierType:req.body.SuplierType,
        SuplierName:req.body.SuplierName,
        RegisteredOfficeAddress:req.body.RegisteredOfficeAddress,
        RegisteredOfficeDistrict:req.body.RegisteredOfficeDistrict,
        RegisteredOfficeProvince:req.body.RegisteredOfficeProvince,
        RegisteredOfficeCountryId:req.body.RegisteredOfficeCountryId,
        RegisteredOfficeStateId:req.body.RegisteredOfficeStateId,
        RegisteredOfficeCityId:req.body.RegisteredOfficeCityId,
        RegisteredOfficePin:req.body.RegisteredOfficePin,
        BillingAddress:req.body. BillingAddress,
        BillingDistrict:req.body. BillingDistrict,
        BillingAddressProvince:req.body. BillingAddressProvince,
        BillingAddressCountryId:req.body. BillingAddressCountryId,
        BillingAddressStateId:req.body. BillingAddressStateId,
        BillingAddressCityId:req.body. BillingAddressCityId,
        BillingAddressPin:req.body. BillingAddressPin,
        ContactPersonName:req.body.ContactPersonName,
        Designation:req.body.Designation,
        Email:req.body.Email,
        Address:req.body.Address,
        ContactNo:req.body.ContactNo,
        LegalStructureId:req.body.LegalStructureId,
        DateOfCompanyEstablish:req.body.DateOfCompanyEstablish,
        BussinessCommodityServiceId:req.body.BussinessCommodityServiceId,
        GeograpicServiceArea:req.body.GeograpicServiceArea,
        BankName:req.body.BankName,
        BankBranch:req.body.BankBranch,
        BankBranchCode:req.body.BankBranchCode,
        IFSCCode:req.body.IFSCCode,
        BankManagerName:req.body.BankManagerName,
        ContactNo:req.body.ContactNo,
        BankBranchAccountManagerName:req.body.BankBranchAccountManagerName,
        BankAddress:req.body.BankAddress,
        BankEmailId:req.body.BankEmailId,
        ProductBrocher:req.body.ProductBrocher,
        PANno:req.body.PANno,
        IsHeadOfficeAddressSameasSiteOfficeAddress:req.body.IsHeadOfficeAddressSameasSiteOfficeAddress,
        SupplierType:req.body.SupplierType,
        BillingAddressPin:req.body.BillingAddressPin,
        CountryCode:req.body.CountryCode,
        MobileNo:req.body.MobileNo,
        BankBranch:req.body.BankBranch,
        ContactNo:req.body.ContactNo,
        Bankswiftcode:req.body.Bankswiftcode,
     })
     res.json({
        success:true,
        message: "Suplier Created Successfully",
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
exports.viewSuplierDetails = async(req,res)=>{
    try {
        const result = await Suplier.aggregate([
            {
                $lookup:{
                    from:'documents',
                    localField:'SuplierId',
                    foreignField:'DocumentId',
                    as:"Document"
                },
            },
            {
                $lookup:{
                    from:"states",
                    localField:"RegisteredOfficeStateId",
                    foreignField:"id",
                    as:"RegisteredOfficeState"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"RegisteredOfficeCityId",
                    foreignField:"id",
                    as:"RegisteredOfficeCity"
                },
             
            },
            {
                $lookup:{
                    from:"states",
                    localField:"BillingAddressStateId",
                    foreignField:"id",
                    as:"BillingAddressState"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"BillingAddressCityId",
                    foreignField:"id",
                    as:"BillingAddressCity"
                },
             
            },
            {
                $lookup:{
                    from:"legalstructures",
                    localField:"LegalStructureId",
                    foreignField:"LegalStructureId",
                    as:"LegalStructure"
                },
             
            },
            {
                $lookup:{
                    from:"bussinesscommodityservices",
                    localField:"BussinessCommodityServiceId",
                    foreignField:"BussinessCommodityServiceId",
                    as:"BussinessCommodityService"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"RegisteredOfficeCountryId",
                    foreignField:"id",
                    as:"RegisteredOfficeCountry"
                },
             
            },
            {
                $lookup:{
                    from:"countries",
                    localField:"BillingAddressCountryId",
                    foreignField:"id",
                    as:"BillingAddressCountryId"
                },
             
            },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get All Suplier Details",
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
exports.deleteSuplierDetails = async(req,res)=>{
    try {
        const result = await Suplier.findOneAndDelete({SuplierId:req.params.SuplierId})
        res.json({
            success:true,
            message:"Delete Suplier Details",
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
exports.updateSuplierDetails = async(req,res)=>{
    try {
        const result = await Suplier.findOneAndUpdate({SuplierId:req.body.SuplierId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Suplier Details",
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
exports.getSingleSuplierDetails = async(req,res)=>{
    try {
        const result = await Suplier.findOne({SuplierId:req.params.SuplierId})
        res.json({
            success:true,
            message:"get a Single Suplier Details",
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