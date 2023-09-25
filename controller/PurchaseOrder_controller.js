const PurchaseOrder = require("../model/PurchaseOrder_model")
exports.CreatePurchaseOrderDetails = async(req,res)=>{
 try {
    const result = await PurchaseOrder.create({
        PurchaseOrderId:Math.floor((Math.random()*100000)+1),
        Reference:req.body.Reference,
        CreatedBy:req.body.CreatedBy,
        ConfirmationDate:req.body.ConfirmationDate,
        Vendor:req.body.Vendor,
        ReceiptDate:req.body.ReceiptDate,
        PurchaseRepresentative:req.body.PurchaseRepresentative,
        Total:req.body.Total,
        CreatedDate:req.body.CreatedDate,
     })
     res.json({
        success:true,
        message: "PurchaseOrder Created Successfully",
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
exports.viewPurchaseOrderDetails = async(req,res)=>{
    try {
        const result = await PurchaseOrder.find()
        res.json({
            count:result.length,
            success:true,
            message:"get PurchaseOrder Details",
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
exports.deletePurchaseOrderDetails = async(req,res)=>{
    try {
        const result = await PurchaseOrder.findOneAndDelete({PurchaseOrderId:req.params.PurchaseOrderId})
        res.json({
            success:true,
            message:"Delete PurchaseOrder Details",
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
exports.updatePurchaseOrderDetails = async(req,res)=>{
    try {
        const result = await PurchaseOrder.findOneAndUpdate({PurchaseOrderId:req.body.PurchaseOrderId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update PurchaseOrder Details",
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