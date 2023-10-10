const CustomerFreightInsurance = require("../model/FreightInsurance_model")
exports.getFreightInsurance = async(req,res)=>{
    try {
        const result = await CustomerFreightInsurance.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All   FreightInsurance Details",
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