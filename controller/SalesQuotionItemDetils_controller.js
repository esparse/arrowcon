const SalesQuotionItemDetils = require("../model/SalesQuotation_model")
exports.CreateSalesQuotionItemDetilsDetails = async(req,res)=>{
    let count = (await SalesQuotionItemDetils.countDocuments()+1)+1000;
 try {
    const result = await SalesQuotionItemDetils.create({
        SalesQuotionItemDetilsId: "QTITEM" + count ,
        SalesQuotionId:req.body.ProductService,
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
exports.viewSalesQuotionItemDetilsDetails = async(req,res)=>{
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
exports.deleteSalesQuotionItemDetilsDetails = async(req,res)=>{
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
exports.updateSalesQuotionItemDetilsDetails = async(req,res)=>{
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