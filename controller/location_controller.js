const location = require("../model/location_model")
exports.getlocation = async(req,res)=>{
    try {
        const result = await location.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All location   Details",
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