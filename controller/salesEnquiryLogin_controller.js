const PurchaseEnquiry = require("../model/salesEnquiry_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.SalesEnquirylogin = async(req,res) =>{
    try {
   const Email = req.body.Email;
   const Password = req.body.Password;
     const result = await PurchaseEnquiry.findOne({Email:Email} && {Password:Password}) 
     console.log(result);
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct Email",
             data:null
 
         })
        }
    //  email found
//      const verify = await compare(Password,result.Password)  
//      if(!verify){
//         return res.json({
//             success:false,
//             message:"Plese enter your correct Password",
//             data:null
 
//         }) 
//  }
 const token = await jwt.sign({user:result._id},process.env.JWT_SECRET_KEY)
 // all email and pasword match
 const resPurchaseEnquiry = await PurchaseEnquiry.aggregate([
    {
        $lookup:{
            from:'groups',
            localField:'GroupId',
            foreignField:'GroupId',
            as:"Group"
        },
    },
{
    $match:{
        Email:result.Email
    }
}
])
 res.json({
    success:true,
    message:"You are logged in",
    data:resPurchaseEnquiry,
     token
 
 })
 console.log(result);
    } catch (error) {
     res.json({
         success:false,
         message:`Something went worng ${error}`,
         data:null
         
      
      })  
      console.log(error);
    }
 }
 