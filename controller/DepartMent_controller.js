const DepartMent = require("../model/Department_model")
exports.CreateDepartMentDetails = async(req,res)=>{
    let count = (await DepartMent.countDocuments()+1)+100;
 try {
    const result = await DepartMent.create({
        DepartMentId: "AD" + count ,
        DepartMentName:req.body.DepartMentName,
        Status:req.body.Status,
     })
     res.json({
        success:true,
        message: "DepartMent Created Successfully",
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
exports.viewDepartMentDetails = async(req,res)=>{
    try {
        const result = await DepartMent.aggregate([
            {
                $lookup:{
                    from:'employees',
                    localField:'DepartMentId',
                    foreignField:'DepartMentId',
                    as:"Employees"
                },
            },
        ])

        res.json({
            count:result.length,
            success:true,
            message:"get DepartMent Details",
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
exports.deleteDepartMentDetails = async(req,res)=>{
    try {
        const result = await DepartMent.findOneAndDelete({DepartMentId:req.params.DepartMentId})
        res.json({
            success:true,
            message:"Delete DepartMent Details",
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
exports.updateDepartMentDetails = async(req,res)=>{
    try {
        const result = await DepartMent.findOneAndUpdate({DepartMentId:req.body.DepartMentId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update DepartMent Details",
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
exports.getSingleDepartMentDetails = async(req,res)=>{
    try {
        const result = await DepartMent.findOne({DepartMentId:req.params.DepartMentId})
        res.json({
            success:true,
            message:"get a Single DepartMent Details",
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