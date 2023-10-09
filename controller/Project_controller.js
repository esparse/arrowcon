const Project = require("../model/Project_model")
exports.CreateProjectDetails = async(req,res)=>{
 try {
    const result = await Project.create({
        ProjectId:Math.floor((Math.random()*100000)+1),
        ProjectName:req.body.ProjectName,
        projectType:req.body.projectType,
        CompanyId:req.body.CompanyId,
        ProjectStatus:req.body.ProjectStatus,
        EstimatedAmt:req.body.EstimatedAmt,
        ContactName:req.body.ContactName,
        ContactPhone:req.body.ContactPhone,
        ContactEmailId:req.body.ContactEmailId,
        Country:req.body.Country,
        StateId:req.body.StateId,
        CityId:req.body.CityId,
        Province:req.body.Province,
        StartDate:req.body.StartDate,
        EndDate:req.body.EndDate,
        ProjectPhase:req.body.ProjectPhase,
        CustomerId:req.body.CustomerId,
     })
     res.json({
        success:true,
        message: "Project Created Successfully",
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
exports.viewProjectDetails = async(req,res)=>{
    try {
        const result = await Project.aggregate([
           
            {
                $lookup:{
                    from:'projectstatuses',
                    localField:'ProjectId',
                    foreignField:'ProjectId',
                    as:"ProjectStatuse"
                },
            },
            {
                $lookup:{
                    from:'documents',
                    localField:'ProjectId',
                    foreignField:'DocumentId',
                    as:"Document"
                },
            },
            {
                $lookup:{
                    from:'customers',
                    localField:'CustomerId',
                    foreignField:'CustomerId',
                    as:"Customer"
                },
            },
            {
                $lookup:{
                    from:"states",
                    localField:"StateId",
                    foreignField:"StateId",
                    as:"State"
                },
             
            },
            {
                $lookup:{
                    from:"cities",
                    localField:"CityId",
                    foreignField:"Cityid",
                    as:"City"
                },
             
            },

        ])
        res.json({
            count:result.length,
            success:true,
            message:"get All Project Details",
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
exports.deleteProjectDetails = async(req,res)=>{
    try {
        const result = await Project.findOneAndDelete({ProjectId:req.params.ProjectId})
        res.json({
            success:true,
            message:"Delete Project Details",
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
exports.updateProjectDetails = async(req,res)=>{
    try {
        const result = await Project.findOneAndUpdate({ProjectId:req.body.ProjectId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Project Details",
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
exports.getSingleProjectDetails = async(req,res)=>{
    try {
        const result = await Project.findOne({ProjectId:req.params.ProjectId})
        res.json({
            success:true,
            message:"get a Single Project Details",
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