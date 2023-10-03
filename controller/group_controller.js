const  Group = require("../model/group_model")
exports.CreateGroupDetails = async(req,res)=>{
    let count = (await  Group.countDocuments()+1)+100;
 try {
    const result = await  Group.create({
         GroupId: "GID" + count ,
         GroupName:req.body. GroupName,
         Status:req.body.Status,
     })
     res.json({
        success:true,
        message: " Group Created Successfully",
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
exports.viewGroupDetails = async(req,res)=>{
    try {
        const result = await  Group.find()
        res.json({
            count:result.length,
            success:true,
            message:"get  Group Details",
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
exports.deleteGroupDetails = async(req,res)=>{
    try {
        const result = await  Group.findOneAndDelete({ GroupId:req.params. GroupId})
        res.json({
            success:true,
            message:"Delete  Group Details",
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
exports.updateGroupDetails = async(req,res)=>{
    try {
        const result = await  Group.findOneAndUpdate({ GroupId:req.body. GroupId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update  Group Details",
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