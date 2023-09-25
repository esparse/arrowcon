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
        RegisteredOfficeCountry:req.body.RegisteredOfficeCountry,
        RegisteredOfficePin:req.body.RegisteredOfficePin,
        BillingAddress:req.body. BillingAddress,
        BillingDistrict:req.body. BillingDistrict,
        BillingAddressProvince:req.body. BillingAddressProvince,
        BillingAddressCountry:req.body. BillingAddressCountry,
        BillingAddressPin:req.body. BillingAddressPin,
        ContactPersonName:req.body.ContactPersonName,
        Designation:req.body.Designation,
        Email:req.body.Email,
        Address:req.body.Address,
        ContactNo:req.body.ContactNo,
        LegelStructure:req.body.LegelStructure,
        DateOfCompanyEstablish:req.body.DateOfCompanyEstablish,
        TypeOfBussiness:req.body.TypeOfBussiness,
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
        const result = await Suplier.find()
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