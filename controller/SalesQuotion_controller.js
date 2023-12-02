const SalesQuotion = require("../model/SalesQuotation_model")
exports.CreateSalesQuotionDetails = async(req,res)=>{
    let count = (await SalesQuotion.countDocuments()+1)+1000;
 try {
    const result = await SalesQuotion.create({
        SalesQuotionId: "QT" + count ,
        Date:req.body.Date,
        QuotionCurrencyId:req.body.QuotionCurrencyId,
        CustomerId:req.body.CustomerId,
        Subject:req.body.Subject,
        OfferValidity:req.body.OfferValidity,
        PaymentTerm:req.body.PaymentTerm,
        DeliveryTerm:req.body.DeliveryTerm,
        DeliveryBasis:req.body.DeliveryBasis,
        StatusId:req.body.StatusId,
        TotalAmtTHB:req.body.TotalAmtTHB,
        IssuedBy:req.body.IssuedBy,
        ApprovedBy:req.body.ApprovedBy,
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
            {
                $lookup:{
                    from:"contactpeople",
                    localField:"CustomerId",
                    foreignField:"sourceId",
                    as:"ContactPeople"
                },
              
              },
              {
                $lookup:{
                    from:'status',
                    localField:'StatusId',
                    foreignField:'StatusId',
                    as:"Status"
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
 // Import your SalesQuotion model

exports.getsingleSalesQuotionDetails = async (req, res) => {
    try {
        const result = await SalesQuotion.findOne({ SalesQuotionId: req.params.SalesQuotionId });

        if (result) {
            res.json({
                success: true,
                message: "SalesQuotion Details Found",
                data: result
            });
        } else {
            res.json({
                success: false,
                message: "SalesQuotion Details Not Found",
                data: null
            });
        }
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong",
            data: null
        });
    }
};
