const CustomerProjectType = require("../model/ProjectType_model")
exports.getProjectType = async(req,res)=>{
    try {
        const result = await CustomerProjectType.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All   ProjectType Details",
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