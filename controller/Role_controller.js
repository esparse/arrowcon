const Role = require("../model/Role_model")
exports.CreateRoleDetails = async(req,res)=>{
    let count = (await Role.countDocuments()+1)+100;
 try {
    const result = await Role.create({
        RoleId: "RD" + count ,
        RoleName:req.body.RoleName,
        Status:req.body.Status,
     })
     res.json({
        success:true,
        message: "Role Created Successfully",
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
exports.viewRoleDetails = async(req,res)=>{
    try {
        const result = await Role.aggregate([ {
            $lookup:{
                from:'employees',
                localField:'RoleId',
                foreignField:'RoleId',
                as:"Employees"
            },
        },
    ])
        res.json({
            count:result.length,
            success:true,
            message:"get Role Details",
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
exports.deleteRoleDetails = async(req,res)=>{
    try {
        const result = await Role.findOneAndDelete({RoleId:req.params.RoleId})
        res.json({
            success:true,
            message:"Delete Role Details",
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
exports.updateRoleDetails = async(req,res)=>{
    try {
        const result = await Role.findOneAndUpdate({RoleId:req.body.RoleId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Role Details",
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
exports.getSingleRoleDetails = async(req,res)=>{
    try {
        const result = await Role.findOne({RoleId:req.params.RoleId})
        res.json({
            success:true,
            message:"get a Single Role Details",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+error,
            data:null
        })  
    }
}