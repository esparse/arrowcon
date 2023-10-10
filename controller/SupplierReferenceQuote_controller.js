const CustomerSupplierReferenceQuote = require("../model/SupplierReferenceQuote_model")
exports.getSupplierReferenceQuote = async(req,res)=>{
    try {
        const result = await CustomerSupplierReferenceQuote.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All   SupplierReferenceQuote Details",
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