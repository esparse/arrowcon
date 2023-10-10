const CustomerCapacity = require("../model/Country_model")
exports.getAllCountry = async(req,res)=>{
    try {
        const result = await CustomerCapacity.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All Country Details",
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
exports.getsingleCountryDetailsbyCountryId = async(req,res)=>{
    try {
        const result = await CustomerCapacity.findOne({id:req.params.id})
        res.json({
            count:result.length,
            success:true,
            message:"get All State by  CountryId Details",
            data:result.states
        })
    } catch (error) {
        res.json({
            success:false,
            message: `Something went worng `+ {error},
            data:null
         })
    }
}