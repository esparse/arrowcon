
const CustomerInstallationType = require("../model/InstallationType_model")
exports.getInstallationType = async(req,res)=>{
    try {
        const result = await CustomerInstallationType.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All   InstallationType Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ error.message,
            data:null
         })
    }
}