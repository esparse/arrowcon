
const CustomerGeoGraphicServiceArea = require("../model/geograpicServiceArea_model")
exports.getGeoGraphicServiceArea = async(req,res)=>{
    try {
        const result = await CustomerGeoGraphicServiceArea.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All   GeoGraphicServiceArea Details",
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