const itemdetailsinpurchaseestimationenquiry = require("../model/ItemsdetailsinpurchaseEstimationEnquiry_model")
exports.CreateitemdetailsinpurchaseestimationenquiryDetails = async(req,res)=>{
 try {


    const result = await itemdetailsinpurchaseestimationenquiry.create({
        itemdetailsinpurchaseestimationenquiryId:Math.floor((Math.random()*100000)+1),
        ItemDetails:req.body.ItemDetails,
        SalesEnquiryId:req.body.SalesEnquiryId,
        SuplierId:req.body.SuplierId,
        QuotationNo:req.body.QuotationNo,
        QuotationDate:req.body.QuotationDate,
        BasePrice:req.body.BasePrice,
        Discount:req.body.Discount,
        QuotionCurrencyId:req.body.QuotionCurrencyId,
        BasePriceAfterDiscount:req.body.BasePriceAfterDiscount,
        PF:req.body.PF,
        VAT:req.body.VAT,
        OtherTaxes:req.body.OtherTaxes,
        StatutoryRegulationCharges:req.body.StatutoryRegulationCharges,
        FinalPrice:req.body.FinalPrice,
        TransportationCost:req.body.TransportationCost,
        DeliveryPeriodInWeeks:req.body.DeliveryPeriodInWeeks,
        PaymentTerms:req.body.PaymentTerms,
        WarrantyYr:req.body.WarrantyYr,
        Remarks:req.body.Remarks,
     })
     res.json({
        success:true,
        message: "itemdetailsinpurchaseestimationenquiry Created Successfully",
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
exports.viewitemdetailsinpurchaseestimationenquiryDetails = async(req,res)=>{
    try {
        const result = await itemdetailsinpurchaseestimationenquiry.aggregate([
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
                    from:'supliers',
                    localField:'SuplierId',
                    foreignField:'SuplierId',
                    as:"Suplier"
                },
            },
            {
                $lookup:{
                    from:'quotioncurrencies',
                    localField:'QuotionCurrencyId',
                    foreignField:'QuotionCurrencyId',
                    as:"QuotionCurrency"
                },
            },

        ])
        res.json({
            count:result.length,
            success:true,
            message:"get itemdetailsinpurchaseestimationenquiry Details",
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
exports.deleteitemdetailsinpurchaseestimationenquiryDetails = async(req,res)=>{
    try {
        const result = await itemdetailsinpurchaseestimationenquiry.findOneAndDelete({itemdetailsinpurchaseestimationenquiryId:req.params.itemdetailsinpurchaseestimationenquiryId})
        res.json({
            success:true,
            message:"Delete itemdetailsinpurchaseestimationenquiry Details",
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
exports.updateitemdetailsinpurchaseestimationenquiryDetails = async(req,res)=>{
    try {
        const result = await itemdetailsinpurchaseestimationenquiry.findOneAndUpdate({itemdetailsinpurchaseestimationenquiryId:req.body.itemdetailsinpurchaseestimationenquiryId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update itemdetailsinpurchaseestimationenquiry Details",
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
exports.getSingleitemdetailsinpurchaseestimationenquiryDetails = async(req,res)=>{
    try {
        const result = await itemdetailsinpurchaseestimationenquiry.findOne({itemdetailsinpurchaseestimationenquiryId:req.params.itemdetailsinpurchaseestimationenquiryId})
        res.json({
            success:true,
            message:"get a Single itemdetailsinpurchaseestimationenquiry Details",
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