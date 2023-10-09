const CustomerMainSteamTemperature = require("../model/MainSteamTemperature_model")
exports.getMainSteamTemperature = async(req,res)=>{
    try {
        const result = await CustomerMainSteamTemperature.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Customer  MainSteamTemperature Details",
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