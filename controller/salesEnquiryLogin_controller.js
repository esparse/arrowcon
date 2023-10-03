const SalesEnquiry = require("../model/salesEnquiry_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.SalesEnquirylogin = async(req,res) =>{
    try {
     const {Email,Password} = req.body
     const result = await SalesEnquiry.findOne({Email}) 
     
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct Email",
             data:null
 
         })
        }
    //  email found
     const verify = await brycpt.compare(Password,result.Password)  
     if(!verify){
        return res.json({
            success:false,
            message:"Plese enter your correct Password",
            data:null
 
        }) 
 }
 const token = await jwt.sign({user:result._id},process.env.JWT_SECRET_KEY)
 // all email and pasword match
 const resSalesEnquiry = await SalesEnquiry.findOne({Email:result.Email})
 res.json({
    success:true,
    message:"You are logged in",
    data:resSalesEnquiry,
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
 