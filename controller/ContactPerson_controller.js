const ContactPerson = require("../model/contactperson_model")
exports.CreateContactPersonDetails = async(req,res)=>{
 try {
    // let count = (await ContactPerson.countDocuments()+1)+10000;
    const result = await ContactPerson.create({
        ContactPersonId: Math.floor((Math.random()*100000)+1),
        ContactPersonName:req.body.ContactPersonName,
        Designation:req.body.Designation,
        Email:req.body.Email,
        Address:req.body.Address,
        MobileNo:req.body.MobileNo,
        LandlineNo:req.body.LandlineNo,
        Countrycode:req.body.Countrycode,
        sourceId:req.body.sourceId,
        

     })
     res.json({
        success:true,
        message: "ContactPerson Created Successfully",
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
exports.viewContactPersonDetails = async(req,res)=>{
    try {
        const result = await ContactPerson.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All ContactPerson Details",
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
exports.deleteContactPersonDetails = async(req,res)=>{
    try {
        const result = await ContactPerson.findOneAndDelete({ContactPersonId:req.params.ContactPersonId})
        res.json({
            success:true,
            message:"Delete ContactPerson Details",
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
exports.updateContactPersonDetails = async(req,res)=>{
    try {
        const result = await ContactPerson.findOneAndUpdate({ContactPersonId:req.body.ContactPersonId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update ContactPerson Details",
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
exports.getSingleContactPersonDetails = async(req,res)=>{
    try {
        const result = await ContactPerson.findOne({ContactPersonId:req.params.ContactPersonId})
        res.json({
            success:true,
            message:"get a Single ContactPerson Details",
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
exports.deleteContactPersonDetailsbysourceId = async(req,res)=>{
    try {
        const result = await ContactPerson.findOneAndDelete({sourceId:req.params.sourceId})
        res.json({
            success:true,
            message:"Delete ContactPerson Details",
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
exports.getContactDetailBySourceId = async(req,res)=>{
    try {
        const result = await ContactPerson.findOne({sourceId:req.params.sourceId})
        res.json({
            success:true,
            message:"get a Single ContactPerson Details",
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
