const Allocatecostestimationtopurchaseteam = require("../model/AllocatecostestimationtopurchaseTeam_model")
exports.CreateAllocatecostestimationtopurchaseteamDetails = async(req,res)=>{
    // let count = (await Allocatecostestimationtopurchaseteam.countDocuments()+1)+100;
 try {
    const result = await Allocatecostestimationtopurchaseteam.create({
        AllocatecostestimationtopurchaseteamId: Math.floor((Math.random()*100000)+1),
        AllocationId:req.body.AllocationId,
        Date:req.body.Date,
        Remark:req.body.Remark,
     })
     res.json({
        success:true,
        message: "Allocatecostestimationtopurchaseteam Created Successfully",
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
exports.viewAllocatecostestimationtopurchaseteamDetails = async(req,res)=>{
    try {
        const result = await Allocatecostestimationtopurchaseteam.aggregate([
            {
                $lookup:{
                    from:'employees',
                    localField:'AllocationToId',
                    foreignField:'EmployeeId',
                    as:"Employees"
                },
            },
        ])

        res.json({
            count:result.length,
            success:true,
            message:"get Allocatecostestimationtopurchaseteam Details",
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
exports.deleteAllocatecostestimationtopurchaseteamDetails = async(req,res)=>{
    try {
        const result = await Allocatecostestimationtopurchaseteam.findOneAndDelete({AllocatecostestimationtopurchaseteamId:req.params.AllocatecostestimationtopurchaseteamId})
        res.json({
            success:true,
            message:"Delete Allocatecostestimationtopurchaseteam Details",
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
exports.updateAllocatecostestimationtopurchaseteamDetails = async(req,res)=>{
    try {
        const result = await Allocatecostestimationtopurchaseteam.findOneAndUpdate({AllocatecostestimationtopurchaseteamId:req.body.AllocatecostestimationtopurchaseteamId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Allocatecostestimationtopurchaseteam Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+Error,
            data:null
        })  
    }
}
exports.getSingleAllocatecostestimationtopurchaseteamDetails = async(req,res)=>{
    try {
        const result = await Allocatecostestimationtopurchaseteam.findOne({AllocatecostestimationtopurchaseteamId:req.params.AllocatecostestimationtopurchaseteamId})
        res.json({
            success:true,
            message:"get a Single Allocatecostestimationtopurchaseteam Details",
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