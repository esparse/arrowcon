const CustomerQuotation = require("../model/CustomerQuotation_model")
exports.CreateCustomerQuotationDetails = async(req,res)=>{
 try {
    const result = await CustomerQuotation.create({
        CustomerQuotationId:Math.floor((Math.random()*100000)+1),
        CustomerId:req.body.CustomerId,
        QuotationNo:req.body.QuotationNo,
        Subject:req.body.Subject,
        Date:req.body.Date,
        TotalAmount:req.body.TotalAmount,
        IssuedBy:req.body.IssuedBy,
        ApprovedBy:req.body.ApprovedBy,
     })
     res.json({
        success:true,
        message: "CustomerQuotation Created Successfully",
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
exports.viewCustomerQuotationDetails = async(req,res)=>{
    try {
        const result = await CustomerQuotation.aggregate([
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
            message:"get CustomerQuotation Details",
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
exports.deleteCustomerQuotationDetails = async(req,res)=>{
    try {
        const result = await CustomerQuotation.findOneAndDelete({CustomerQuotationId:req.params.CustomerQuotationId})
        res.json({
            success:true,
            message:"Delete CustomerQuotation Details",
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
exports.updateCustomerQuotationDetails = async(req,res)=>{
    try {
        const result = await CustomerQuotation.findOneAndUpdate({CustomerQuotationId:req.body.CustomerQuotationId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Customer Quotation Details",
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