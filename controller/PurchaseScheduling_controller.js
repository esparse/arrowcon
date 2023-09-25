const PurchaseScheduling = require("../model/PurchaseScheduling_model")
exports.CreatePurchaseSchedulingDetails = async(req,res)=>{
 try {
    const result = await PurchaseScheduling.create({
        PurchaseSchedulingId:Math.floor((Math.random()*100000)+1),
        CustomerId:req.body.CustomerId,
        Name:req.body.Name,
        Date:req.body.Date,
        Email:req.body.Email,
        ContactNo:req.body.ContactNo,
        Description:req.body.Description,
        CreatedDate:req.body.CreatedDate,
     })
     res.json({
        success:true,
        message: "PurchaseScheduling Created Successfully",
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
exports.viewPurchaseSchedulingDetails = async(req,res)=>{
    try {
        const result = await PurchaseScheduling.aggregate([
            {
                $lookup:{
                    from:'customers',
                    localField:'CustomerId',
                    foreignField:'CustomerId',
                    as:"Customer"
                },
            },
          
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get PurchaseScheduling Details",
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
exports.deletePurchaseSchedulingDetails = async(req,res)=>{
    try {
        const result = await PurchaseScheduling.findOneAndDelete({PurchaseSchedulingId:req.params.PurchaseSchedulingId})
        res.json({
            success:true,
            message:"Delete PurchaseScheduling Details",
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
exports.updatePurchaseSchedulingDetails = async(req,res)=>{
    try {
        const result = await PurchaseScheduling.findOneAndUpdate({PurchaseSchedulingId:req.body.PurchaseSchedulingId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update PurchaseScheduling Details",
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