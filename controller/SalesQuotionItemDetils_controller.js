const SalesQuotionItemDetils = require("../model/salesQuotionItemDetils_model")
exports.CreateSalesQuotionItemDetils = async(req,res)=>{
    let count = (await SalesQuotionItemDetils.countDocuments()+1)+1000;
 try {
    const result = await SalesQuotionItemDetils.create({
        SalesQuotionItemDetilsId: "QTITEM" + count ,
        SalesQuotionId:req.body.SalesQuotionId,
        ProductService:req.body.ProductService,
        Description:req.body.Description,
        Quantity:req.body.Quantity,
        UnitPriceTHB:req.body.UnitPriceTHB,
        SubTotalTHB:req.body.SubTotalTHB,
        
       
     })
     res.json({
        success:true,
        message: "SalesQuotionItemDetils Created Successfully",
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
exports.viewSalesQuotionItemDetils = async(req,res)=>{
    try {
        const result = await SalesQuotionItemDetils.find()
        res.json({
            count:result.length,
            success:true,
            message:"get SalesQuotionItemDetils Details",
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
exports.deleteSalesQuotionItemDetils = async(req,res)=>{
    try {
        const result = await SalesQuotionItemDetils.findOneAndDelete({SalesQuotionItemDetilsId:req.params.SalesQuotionItemDetilsId})
        res.json({
            success:true,
            message:"Delete SalesQuotionItemDetils Details",
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
exports.updateSalesQuotionItemDetils = async(req,res)=>{
    try {
        const result = await SalesQuotionItemDetils.findOneAndUpdate({SalesQuotionItemDetilsId:req.body.SalesQuotionItemDetilsId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update SalesQuotionItemDetils Details",
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
exports.getSalesQuotationItemDetailsBySalesQuotationId = async (req, res) => {
    try { 
        const result = await SalesQuotionItemDetils.find({SalesQuotionId:req.params.SalesQuotionId})

        res.json({
            count: result.length,
            success: true,
            message: "Get Sales Quotation Item Details",
            data: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: `Something went wrong: ${error.message}`,
            data: null,
        });
    }
};

exports.deleteSalesQuotionItemDetilsbySalesQuotionId = async(req,res)=>{
    try {
        const result = await SalesQuotionItemDetils.deleteMany({SalesQuotionId:req.params.SalesQuotionId})
        res.json({
            success:true,
            message:"Delete SalesQuotion item  Details",
            data:null
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+error.message,
            data:null
        })  
    }
}