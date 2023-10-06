const PurchaseEstimationEnquiry = require("../model/PurchaseEstimationEnquiry_model")
exports.CreatePurchaseEstimationEnquiryDetails = async(req,res)=>{
 try {
    const result = await PurchaseEstimationEnquiry.create({
        PurchaseEstimationEnquiryId:Math.floor((Math.random()*100000)+1),
        SalesEnquiryId:req.body.SalesEnquiryId,
        EnquiryDate:req.body.EnquiryDate,
        CustomerId:req.body.CustomerId,
        EnquiryOwner:req.body.EnquiryOwner,
        OfferingType:req.body.OfferingType,
        EnquiryType:req.body.EnquiryType,
        Equipment:req.body.Equipment,
        TypeofEquipment:req.body.TypeofEquipment,
        EnquiryDescription:req.body.EnquiryDescription,
        EnquiryStatus:req.body.EnquiryStatus,
        Remark:req.body.Remark,
        AddtionalComments:req.body.AddtionalComments,
        TargetDate:req.body.TargetDate,
     })
     res.json({
        success:true,
        message: "PurchaseEstimationEnquiry Created Successfully",
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
exports.viewPurchaseEstimationEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEstimationEnquiry.aggregate([
            {
                $lookup:{
                    from:'customers',
                    localField:'CustomerId',
                    foreignField:'CustomerId',
                    as:"Customer"
                },
            },
            {
                $lookup:{
                    from:'salesenquiries',
                    localField:'SalesEnquiryId',
                    foreignField:'SalesEnquiryId',
                    as:"SalesEnquiry"
                },
            },
          
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get PurchaseEstimationEnquiry Details",
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
exports.deletePurchaseEstimationEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEstimationEnquiry.findOneAndDelete({PurchaseEstimationEnquiryId:req.params.PurchaseEstimationEnquiryId})
        res.json({
            success:true,
            message:"Delete PurchaseEstimationEnquiry Details",
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
exports.updatePurchaseEstimationEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEstimationEnquiry.findOneAndUpdate({PurchaseEstimationEnquiryId:req.body.PurchaseEstimationEnquiryId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update PurchaseEstimationEnquiry Details",
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
exports.getSinglePurchaseEstimationEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEstimationEnquiry.aggregate([
            {
                $lookup:{
                    from:'customers',
                    localField:'CustomerId',
                    foreignField:'CustomerId',
                    as:"Customer"
                },
            },
            {
                $lookup:{
                    from:'salesenquiries',
                    localField:'SalesEnquiryId',
                    foreignField:'SalesEnquiryId',
                    as:"SalesEnquiry"
                },
            },
          {
            $match:{PurchaseEstimationEnquiryId:req.body.PurchaseEstimationEnquiryId}
          }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get PurchaseEstimationEnquiry Details",
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