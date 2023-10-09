const CustomerLegalStructure = require("../model/legalStructure_model")
exports.getLegalStructure = async(req,res)=>{
    try {
        const result = await CustomerLegalStructure.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  LegalStructure Details",
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