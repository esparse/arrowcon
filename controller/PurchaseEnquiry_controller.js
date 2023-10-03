const PurchaseEnquiry = require("../model/PurchaseEnquiry_model")
exports.CreatePurchaseEnquiryDetails = async(req,res)=>{
 try {
    const result = await PurchaseEnquiry.create({
        PurchaseEnquiryId:Math.floor((Math.random()*100000)+1),
        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
        CompanyName:req.body.CompanyName,
        ContactNo:req.body.ContactNo,
        Country:req.body.Country,
        SectorofActivity:req.body.SectorofActivity,
        EnquiryDetails:req.body.EnquiryDetails,
        CreatedDate:req.body.CreatedDate,
     })
     res.json({
        success:true,
        message: "PurchaseEnquiry Created Successfully",
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
exports.viewPurchaseEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEnquiry.find()
        res.json({
            count:result.length,
            success:true,
            message:"get PurchaseEnquiry Details",
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
exports.deletePurchaseEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEnquiry.findOneAndDelete({PurchaseEnquiryId:req.params.PurchaseEnquiryId})
        res.json({
            success:true,
            message:"Delete PurchaseEnquiry Details",
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
exports.updatePurchaseEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEnquiry.findOneAndUpdate({PurchaseEnquiryId:req.body.PurchaseEnquiryId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update PurchaseEnquiry Details",
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