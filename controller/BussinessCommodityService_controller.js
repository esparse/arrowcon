const CustomerBussinessCommodityService = require("../model/BussinessCommodityService_model")
exports.getBussinessCommodityService = async(req,res)=>{
    try {
        const result = await CustomerBussinessCommodityService.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  BussinessCommodityService Details",
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