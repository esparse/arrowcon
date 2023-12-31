const city = require("../model/city_model")
const state = require("../model/state_model")
exports.getAllCity = async(req,res)=>{
    try {
        const result = await city.find().sort({name:1})
        res.json({
            count:result.length,
            success:true,
            message:"All city with their State",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong",
            data:null
        })  
    }
}
exports.getCityByStateId = async(req,res)=>{
    try {
        const result = await city.find({state_id:req.params.state_id}).sort({name:1})
        res.json({
            count:result.length,
            success:true,
            message:"get City By StateId",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+error.message,
            data:null
        })  
    }
}
exports.deleteAllCity = async(req,res)=>{
    try {
        const result = await city.deleteMany()
        res.json({
            success:true,
            message:" Delete All city ",
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