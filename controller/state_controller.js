const state = require("../model/state_model")
// const city = require("../model/city_model")
exports.getStateWithCity = async(req,res)=>{
    try {
        const result = await state.aggregate([
            {
                $lookup:{
                    from:'cities',
                    localField:'StateId',
                    foreignField:'StateId',
                    as:"City"
                }
            },
            {
                $sort:{id:1}
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"All State with their City",
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
exports.getAllState = async(req,res)=>{
    try {
        const result = await state.find().sort({State:1})
        res.json({
            count:result.length,
            success:true,
            message:"get All State",
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
exports.getAllStatebyCountryID = async(req,res)=>{
    try {
        const result = await state.find({country_id:req.params.country_id}).sort({name:1})
        res.json({
            count:result.length,
            success:true,
            message:"get All State",
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
