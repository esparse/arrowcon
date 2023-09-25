const saleenquiry = require("../model/salesEnquiry_model")
exports.getSinglesaleenquiryDetails = async(req,res)=>{
    try {
        const { action } = req.params;
        let result ;
        switch (action) {
            case 'getsaleenquirybyid':
                 result = await saleenquiry.find({SalesEnquiryId:req.body.SalesEnquiryId})
                break;
            case 'getsaleenquirybycustomerid':
                    result = await saleenquiry.find({CustomerId:req.body.CustomerId})
                   break;
            case 'getsaleenquirybyEnquiryType':
                    result = await saleenquiry.find({EnquiryType:req.body.EnquiryType})
                   break;
            case 'getsaleenquirybyEnquiryDate':
                const{StartDate,EndDate}=req.body
                    result = await saleenquiry.aggregate([
                    {
                        $match: {
                            EnquiryDate: {
                            $gte: new Date(StartDate),
                            $lte: new Date(EndDate),
                          },
                        },
                      },
                   ])
                    console.log(result);
                   break; 
                default:
                    res.status(400).json({ error: 'Invalid action' });
                    return;
                   
        }
        res.json({
            count:result.length,
            success:true,
            message:"get sale enquiry Details by filter",
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

