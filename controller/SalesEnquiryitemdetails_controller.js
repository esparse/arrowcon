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
        itemdetailsinpurchaseestimationenquiryId: req.body.itemdetailsinpurchaseestimationenquiryId,
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
        const result = await salesEnquiryitemdetails.aggregate([         
        
            {
                $lookup:{
                    from:'itemdetailsinpurchaseestimationenquiries',
                    localField:'itemdetailsinpurchaseestimationenquiryId',
                    foreignField:'itemdetailsinpurchaseestimationenquiryId',
                    as:"ItemQuotationDetails"
                },
            },
        ])
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
exports.getsalesEnquiryitemdetailsDetailsbySalesEnquiryId = async (req, res) => {
    try {
        const result = await salesEnquiryitemdetails.aggregate([
            {
                $match: {
                    SalesEnquiryId: req.params.SalesEnquiryId
                }
            },
            {
                $lookup: {
                    from: 'itemdetailsinpurchaseestimationenquiries', // Change 'OtherCollection' to your actual collection name
                    localField: 'itemdetailsinpurchaseestimationenquiryId',
                    foreignField: 'itemdetailsinpurchaseestimationenquiryId', // Change 'CommonField' to the field in 'OtherCollection'
                    as: 'ItemDetilasforQuotation'
                }
            },
            {
                $lookup: {
                    from: 'salesenquiries', // Change 'OtherCollection' to your actual collection name
                    localField: 'SalesEnquiryId',
                    foreignField: 'SalesEnquiryId', // Change 'CommonField' to the field in 'OtherCollection'
                    as: 'SalesEnquiries'
                }
            },
        ]);

        res.json({
            count: result.length,
            success: true,
            message: "Get sales Enquiry item Details with lookup data",
            data: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: `Something went wrong: ${error}`,
            data: null
        });
    }
};

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
exports.updatesalesEnquiryitemdetailsDetailsbysalesQuotationId = async(req,res)=>{
    try {
        const result = await salesEnquiryitemdetails.findOneAndUpdate({salesEnquiryitemdetailsId:req.body.salesEnquiryitemdetailsId},{ itemdetailsinpurchaseestimationenquiryId: req.body.itemdetailsinpurchaseestimationenquiryId,}  ,{
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update sales Enquiry item details Details by sales QuotationIds",
            data:result
        })
    } catch (error) {
        res.json({
            success:false,
            message:"Something  went wrong"+error.message,
            data:null
        })  
    }
}