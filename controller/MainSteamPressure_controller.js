const CustomerMainSteamPressure = require("../model/MainSteamPressure_model")
exports.getMainSteamPressure = async(req,res)=>{
    try {
        const result = await CustomerMainSteamPressure.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  MainSteamPressure Details",
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