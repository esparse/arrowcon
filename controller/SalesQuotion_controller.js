const SalesQuotion = require("../model/SalesQuotation_model")
exports.CreateSalesQuotionDetails = async(req,res)=>{
    let count = (await SalesQuotion.countDocuments()+1)+1000;
 try {
    const result = await SalesQuotion.create({
        SalesQuotionId: "QT" + count ,
        Date:req.body.Date,
        QuotionCurrency:req.body.QuotionCurrency,
        CustomerName:req.body.CustomerName,
        CustomerId:req.body.CustomerId,
        CustomerAddress:req.body.CustomerAddress,
        Subject:req.body.Subject,
        ContactNumber:req.body.ContactNumber,
        ContactEmail:req.body.ContactEmail,
        ProductService:req.body.ProductService,
        Description:req.body.Description,
        Quantity:req.body.Quantity,
        UnitPriceTHB:req.body.UnitPriceTHB,
        OfferValidity:req.body.OfferValidity,
        PaymentTerm:req.body.PaymentTerm,
        DeliveryTerm:req.body.DeliveryTerm,
        DeliveryBasis:req.body.DeliveryBasis,
        Status:req.body.Status,
     })
     res.json({
        success:true,
        message: "SalesQuotion Created Successfully",
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
exports.viewSalesQuotionDetails = async(req,res)=>{
    try {
        const result = await SalesQuotion.aggregate([
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
            message:"get SalesQuotion Details",
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
exports.deleteSalesQuotionDetails = async(req,res)=>{
    try {
        const result = await SalesQuotion.findOneAndDelete({SalesQuotionId:req.params.SalesQuotionId})
        res.json({
            success:true,
            message:"Delete SalesQuotion Details",
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
exports.updateSalesQuotionDetails = async(req,res)=>{
    try {
        const result = await SalesQuotion.findOneAndUpdate({SalesQuotionId:req.body.SalesQuotionId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update SalesQuotion Details",
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