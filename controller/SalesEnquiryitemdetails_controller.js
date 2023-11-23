const salesEnquiryitemdetails = require("../model/salesenquiryitemDetails_model")
exports.CreatesalesEnquiryitemdetailsDetails = async(req,res)=>{
    let count = (await salesEnquiryitemdetails.countDocuments()+1)+100;
 try {
    const result = await salesEnquiryitemdetails.create({
        salesEnquiryitemdetailsId: "SID" + count ,
        SalesEnquiryId: req.body.SalesEnquiryId,
        ItemDetails: req.body.ItemDetails,
        Description: req.body.Description,
        Unit: req.body.Unit,
        Quantity: req.body.Quantity,
     })
     res.json({
        success:true,
        message: "salesEnquiryitemdetails Created Successfully",
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
exports.viewsalesEnquiryitemdetailsDetails = async(req,res)=>{
    try {
        const result = await salesEnquiryitemdetails.find()
        res.json({
            count:result.length,
            success:true,
            message:"get salesEnquiryitemdetails Details",
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
exports.deletesalesEnquiryitemdetailsDetails = async(req,res)=>{
    try {
        const result = await salesEnquiryitemdetails.findOneAndDelete({salesEnquiryitemdetailsId:req.params.salesEnquiryitemdetailsId})
        res.json({
            success:true,
            message:"Delete salesEnquiryitemdetails Details",
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
exports.updatesalesEnquiryitemdetailsDetails = async(req,res)=>{
    try {
        const result = await salesEnquiryitemdetails.findOneAndUpdate({salesEnquiryitemdetailsId:req.body.salesEnquiryitemdetailsId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update salesEnquiryitemdetails Details",
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
exports.getSinglesalesEnquiryitemdetailsDetails = async(req,res)=>{
    try {
        const result = await salesEnquiryitemdetails.findOne({salesEnquiryitemdetailsId:req.params.salesEnquiryitemdetailsId})
        res.json({
            success:true,
            message:"get a Single salesEnquiryitemdetails Details",
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
exports.getsalesEnquiryitemdetailsDetailsbySalesEnquiryId = async(req,res)=>{
    try {
        const result = await salesEnquiryitemdetails.find({SalesEnquiryId:req.params.SalesEnquiryId})
        res.json({
            count:result.length,
            success:true,
            message:"get sales Enquiry item Details",
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
exports.deletesalesEnquiryitemdetailsDetailsbySalesEnquiryId = async(req,res)=>{
    try {
        const result = await salesEnquiryitemdetails.deleteMany({SalesEnquiryId:req.params.SalesEnquiryId})
        res.json({
            success:true,
            message:"Delete salesEnquiryitemdetails Details",
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