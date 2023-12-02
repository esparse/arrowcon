const PurchaseEstimationEnquiry = require("../model/PurchaseEstimationEnquiry_model")
exports.CreatePurchaseEstimationEnquiryDetails = async(req,res)=>{
 try {
    const result = await PurchaseEstimationEnquiry.create({
        PurchaseEstimationEnquiryId:Math.floor((Math.random()*100000)+1),
        SalesEnquiryId:req.body.SalesEnquiryId,
        EnquiryDate:req.body.EnquiryDate,
        EnquiryDescription:req.body.EnquiryDescription,
        Remark:req.body.Remark,
        AddtionalComments:req.body.AddtionalComments,
        TargetDate:req.body.TargetDate,
        CostEstimationStatusId:req.body.CostEstimationStatusId,
     })
     res.json({
        success:true,
        message: "PurchaseEstimationEnquiry Created Successfully",
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
exports.viewPurchaseEstimationEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEstimationEnquiry.aggregate([         
        
        {
            $lookup:{
                from:'status',
                localField:'CostEstimationStatusId',
                foreignField:'StatusId',
                as:"CostEstimationStatus"
            },
        },


        {
            $lookup:{
                from:'salesenquiries',
                localField:'SalesEnquiryId',
                foreignField:'SalesEnquiryId',
                as:"SalesEnquiry"
            },
        },
        {
            $unwind: "$SalesEnquiry"
          },
       

 {
                $lookup:{
                    from:'offeringtypes',
                    localField:'SalesEnquiry.OfferingTypeId',
                    foreignField:'OfferingTypeId',
                    as:"SalesEnquiry.OfferingType"
                },
            },
            {
                $lookup:{
                    from:"typeofequipments",
                    localField:"SalesEnquiry.TypeOfEquipmentId",
                    foreignField:"TypeOfEquipmentId",
                    as:"SalesEnquiry.TypeOfEquipment"
                },
             
            },
            {
                $lookup:{
                    from:"equipment",
                    localField:"SalesEnquiry.EquipmentId",
                    foreignField:"EquipmentId",
                    as:"SalesEnquiry.Equipment"
                },
             
            },
            {
                $lookup:{
                    from:"enquirytypes",
                    localField:"SalesEnquiry.EnquiryTypeId",
                    foreignField:"EnquiryTypeId",
                    as:"SalesEnquiry.EnquiryType"
                },
             
            },
            {
                $lookup:{
                    from:"enquirystatuses",
                    localField:"SalesEnquiry.EnquiryStatusId",
                    foreignField:"EnquiryStatusId",
                    as:"SalesEnquiry.EnquiryStatus"
                },
              
              },
              {
                $lookup:{
                    from:"employees",
                    localField:"SalesEnquiry.EnquiryOwnerId",
                    foreignField:"EmployeeId",
                    as:"SalesEnquiry.EnquiryOwner"
                },
              
              },
              {
                $lookup:{
                    from:'installationtypes',
                    localField:'SalesEnquiry.InstallationTypeId',
                    foreignField:'InstallationTypeId',
                    as:"SalesEnquiry.InstallationType"
                },
            },
            {
                $lookup:{
                    from:"weightedsales",
                    localField:"SalesEnquiry.WeightedsalesId",
                    foreignField:"WeightedsalesId",
                    as:"SalesEnquiry.Weightedsales"
                },
             
            },
            {
                $lookup:{
                    from:'customers',
                    localField:'SalesEnquiry.CustomerId',
                    foreignField:'CustomerId',
                    as:"SalesEnquiry.Customer"
                },
            },
{
    $unwind:"$SalesEnquiry.Customer"
},
{
    $lookup:{
        from:"customercategories",
        localField:"SalesEnquiry.Customer.CustomerCategoryId",
        foreignField:"CustomerCategoryId",
        as:"SalesEnquiry.Customer.CustomerCategory"
    },
 
},
{
    $lookup:{
        from:"customerregions",
        localField:"SalesEnquiry.Customer.CustomerRegionId",
        foreignField:"CustomerRegionId",
        as:"SalesEnquiry.Customer.CustomerRegion"
    },
 
},
{
    $lookup:{
        from:"locations",
        localField:"SalesEnquiry.Customer.locationId",
        foreignField:"locationId",
        as:"SalesEnquiry.Customer.location"
    },
 
},

        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Purchase Estimation Enquiry Details",
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
exports.deletePurchaseEstimationEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEstimationEnquiry.findOneAndDelete({PurchaseEstimationEnquiryId:req.params.PurchaseEstimationEnquiryId})
        res.json({
            success:true,
            message:"Delete PurchaseEstimationEnquiry Details",
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
exports.updatePurchaseEstimationEnquiryDetails = async(req,res)=>{
    try {
        const result = await PurchaseEstimationEnquiry.findOneAndUpdate({PurchaseEstimationEnquiryId:req.body.PurchaseEstimationEnquiryId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update PurchaseEstimationEnquiry Details",
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


// exports.getSinglePurchaseEstimationEnquiryDetails = async (req, res) => {
//     try {
//         const purchaseEstimationEnquiryId = req.params.PurchaseEstimationEnquiryId;

// const existingDocument = await PurchaseEstimationEnquiry.findOne({ PurchaseEstimationEnquiryId: purchaseEstimationEnquiryId });
// console.log(existingDocument);
// if (!existingDocument) {
//     return res.status(404).json({
//         success: false,
//         message: 'Purchase estimation enquiry not found',
//         data: null
//     });
// }

//         const result = await PurchaseEstimationEnquiry.aggregate([
//             {
//                 $lookup: {
//                     from: 'salesenquiries',
//                     localField: 'SalesEnquiryId',
//                     foreignField: 'SalesEnquiryId',
//                     as: 'SalesEnquiry'
//                 },
//             },
//             {
//                 $unwind: '$SalesEnquiry'
//             },
//             {
//                 $lookup: {
//                     from: 'customers',
//                     localField: 'SalesEnquiry.CustomerId',
//                     foreignField: 'CustomerId',
//                     as: 'SalesEnquiry.Customer'
//                 },
//             },
//             {
//                 $lookup: {
//                     from: 'offeringtypes',
//                     localField: 'SalesEnquiry.OfferingTypeId',
//                     foreignField: 'OfferingTypeId',
//                     as: 'SalesEnquiry.OfferingType'
//                 },
//             },
//             {
//                                     $lookup:{
//                                         from:"typeofequipments",
//                                         localField:"SalesEnquiry.TypeOfEquipmentId",
//                                         foreignField:"TypeOfEquipmentId",
//                                         as:"SalesEnquiry.TypeOfEquipment"
//                                     },
                                 
//                                 },
//                                 {
//                                     $lookup:{
//                                         from:"equipment",
//                                         localField:"SalesEnquiry.EquipmentId",
//                                         foreignField:"EquipmentId",
//                                         as:"SalesEnquiry.Equipment"
//                                     },
                                 
//                                 },
//                                 {
//                                     $lookup:{
//                                         from:"enquirytypes",
//                                         localField:"SalesEnquiry.EnquiryTypeId",
//                                         foreignField:"EnquiryTypeId",
//                                         as:"SalesEnquiry.EnquiryType"
//                                     },
                                 
//                                 },
//                                 {
//                                     $lookup:{
//                                         from:"enquirystatuses",
//                                         localField:"SalesEnquiry.EnquiryStatusId",
//                                         foreignField:"EnquiryStatusId",
//                                         as:"SalesEnquiry.EnquiryStatus"
//                                     },
                                  
//                                   },
//                                   {
//                                     $lookup:{
//                                         from:"employees",
//                                         localField:"SalesEnquiry.EnquiryOwnerId",
//                                         foreignField:"EmployeeId",
//                                         as:"SalesEnquiry.EnquiryOwner"
//                                     },
                                  
//                                   },
//                                   {
//                                     $lookup:{
//                                         from:'installationtypes',
//                                         localField:'SalesEnquiry.InstallationType',
//                                         foreignField:'InstallationTypeId',
//                                         as:"SalesEnquiry.InstallationType"
//                                     },
//                                 },
//                                 {
//                                     $match: { PurchaseEstimationEnquiryId: existingDocument.PurchaseEstimationEnquiryId }
//                                 },
           
//         ]);
// console.log(existingDocument.PurchaseEstimationEnquiryId);
//         res.json({
//             count: result.length,
//             success: true,
//             message: 'get PurchaseEstimationEnquiry Details by Purchase estimation Id',
//             data: result
//         });
//     } catch (error) {
//         res.json({
//             success: false,
//             message: `Something went wrong: ${error}`,
//             data: null
//         });
//     }
// };

exports.getSinglePurchaseEstimationEnquiryDetails = async (req, res) => {
    try {
        const purchaseEstimationEnquiryId = req.params.PurchaseEstimationEnquiryId;
        // console.log(purchaseEstimationEnquiryId);
        // const aggregationPipeline = [
        //     // ... your existing pipeline stages ...
        //     {
        //         $lookup: {
        //             from: 'salesenquiries',
        //             localField: 'SalesEnquiryId',
        //             foreignField: 'SalesEnquiryId',
        //             as: 'SalesEnquiry'
        //         },
        //     },
        //     {
        //         $unwind: '$SalesEnquiry'
        //     },
        //     {
        //         $lookup: {
        //             from: 'customers',
        //             localField: 'SalesEnquiry.CustomerId',
        //             foreignField: 'CustomerId',
        //             as: 'SalesEnquiry.Customer'
        //         },
        //     },
        //     {
        //         $lookup: {
        //             from: 'offeringtypes',
        //             localField: 'SalesEnquiry.OfferingTypeId',
        //             foreignField: 'OfferingTypeId',
        //             as: 'SalesEnquiry.OfferingType'
        //         },
        //     },
        //     {
        //                             $lookup:{
        //                                 from:"typeofequipments",
        //                                 localField:"SalesEnquiry.TypeOfEquipmentId",
        //                                 foreignField:"TypeOfEquipmentId",
        //                                 as:"SalesEnquiry.TypeOfEquipment"
        //                             },
                                 
        //                         },
        //                         {
        //                             $lookup:{
        //                                 from:"equipment",
        //                                 localField:"SalesEnquiry.EquipmentId",
        //                                 foreignField:"EquipmentId",
        //                                 as:"SalesEnquiry.Equipment"
        //                             },
                                 
        //                         },
        //                         {
        //                             $lookup:{
        //                                 from:"enquirytypes",
        //                                 localField:"SalesEnquiry.EnquiryTypeId",
        //                                 foreignField:"EnquiryTypeId",
        //                                 as:"SalesEnquiry.EnquiryType"
        //                             },
                                 
        //                         },
        //                         {
        //                             $lookup:{
        //                                 from:"enquirystatuses",
        //                                 localField:"SalesEnquiry.EnquiryStatusId",
        //                                 foreignField:"EnquiryStatusId",
        //                                 as:"SalesEnquiry.EnquiryStatus"
        //                             },
                                  
        //                           },
        //                           {
        //                             $lookup:{
        //                                 from:"employees",
        //                                 localField:"SalesEnquiry.EnquiryOwnerId",
        //                                 foreignField:"EmployeeId",
        //                                 as:"SalesEnquiry.EnquiryOwner"
        //                             },
                                  
        //                           },
        //                           {
        //                             $lookup:{
        //                                 from:'installationtypes',
        //                                 localField:'SalesEnquiry.InstallationType',
        //                                 foreignField:'InstallationTypeId',
        //                                 as:"SalesEnquiry.InstallationType"
        //                             },
        //                         },
                               
           
        //     {
        //         $match: { PurchaseEstimationEnquiryId: purchaseEstimationEnquiryId }
        //     }
        // ];
       
        try {
            // Execute the aggregation and await the result
            // const result = await PurchaseEstimationEnquiry.aggregate(aggregationPipeline);
        
            // if (!result || result.length === 0) {
            //     return res.status(404).json({
            //         success: false,
            //         message: 'Purchase estimation enquiry not found',
            //         data: null
            //     });
            // }
        const result = await PurchaseEstimationEnquiry.findOne({PurchaseEstimationEnquiryId:purchaseEstimationEnquiryId})
            // Process the result as needed
            res.json({
                // count: result.length,
                success: true,
                message: 'Get PurchaseEstimationEnquiry Details by Purchase Estimation Enquiry Id',
                data: result
            });
        } catch (error) {
            console.error(`Error: ${error}`);
            res.json({
                success: false,
                message: `Something went wrong: ${error.message}`,
                data: null
            });
        }
       
    } catch (error) {
        res.json({
            success: false,
            message: `Something went wrong: ${error}`,
            data: null
        });
    }
};


// Your aggregation pipeline


// Execute the aggregation with a callback

