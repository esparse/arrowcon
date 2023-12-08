const purchaseteamlogin = require("../model/Employee_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.purchaseteamlogin = async(req,res) =>{
    try {
     const {Email,Password,RoleId} = req.body
     const result = await purchaseteamlogin.find({Email,Password}) 
     const result1 = await purchaseteamlogin.findOne({RoleId})
     if(!result && !result1){
         return res.json({
             success:false,
             message:"Plese enter your correct email or RoleId",
             data:null
 
         })
        }
    //  email found
//      const verify = await brycpt.compare(Password,result.Password)  
//      if(!verify){
//         return res.json({
//             success:false,
//             message:"Plese enter your correct password",
//             data:null
 
//         }) 
//  }
 const token = await jwt.sign({user:result._id},process.env.JWT_SECRET_KEY)
 // all email and pasword match
 res.json({
    success:true,
    message:"You are logged in",
    data:result,
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
 module.exports = router
