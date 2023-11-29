const PurchaseEstimationEnquiry = require("../model/PurchaseEstimationEnquiry_model")
exports.CreatePurchaseEstimationEnquiryDetails = async(req,res)=>{
 try {
    const result = await PurchaseEstimationEnquiry.create({
        PurchaseEstimationEnquiryId:Math.floor((Math.random()*100000)+1),
        SalesEnquiryId:req.body.SalesEnquiryId,
        EnquiryDate:req.body.EnquiryDate,
        CustomerId:req.body.CustomerId,
        EnquiryOwnerId:req.body.EnquiryOwnerId,
        OfferingTypeId:req.body.OfferingTypeId,
        EnquiryTypeId:req.body.EnquiryTypeId,
        EquipmentId:req.body.EquipmentId,
        TypeOfEquipmentId:req.body.TypeOfEquipmentId,
        EnquiryDescription:req.body.EnquiryDescription,
        EnquiryStatusId:req.body.EnquiryStatusId,
        Remark:req.body.Remark,
        AddtionalComments:req.body.AddtionalComments,
        TargetDate:req.body.TargetDate,
        CostEstimationStatusId:req.body.CostEstimationStatusId,
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
                    from:'offeringtypes',
                    localField:'OfferingTypeId',
                    foreignField:'OfferingTypeId',
                    as:"OfferingType"
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
                  as:"TypeOfEquipment"
              },
           
          },
          {
            $lookup:{
                from:"enquirytypes",
                localField:"EnquiryTypeId",
                foreignField:"EnquiryTypeId",
                as:"EnquiryType"
            },
         
        },
        {
          $lookup:{
              from:"enquirystatuses",
              localField:"EnquiryStatusId",
              foreignField:"EnquiryStatusId",
              as:"EnquiryStatus"
          },
        
        },
        {
            $lookup:{
                from:"employees",
                localField:"EnquiryOwnerId",
                foreignField:"EmployeeId",
                as:"EnquiryOwner"
            },
          
          },
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
            $lookup:{
                from:'installationtypes',
                localField:'InstallationTypeId',
                foreignField:'InstallationTypeId',
                as:"InstallationType"
            },
        },
        {
            $lookup:{
                from:'status',
                localField:'CostEstimationStatusId',
                foreignField:'StatusId',
                as:"CostEstimationStatus"
            },
        },
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Purchase Estimation Enquiry Details",
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