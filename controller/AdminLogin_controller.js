const admin = require("../model/Employee_model")
brycpt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.Adminlogin = async(req,res) =>{
    try {
     const {EmailId,Password} = req.body
     const result = await admin.findOne({EmailId}) 
     
     if(!result){
         return res.json({
             success:false,
             message:"Plese enter your correct EmailId",
             data:null
 
         })
        }
    //  EmailId found
     const verify = await brycpt.compare(Password,result.Password)  
     if(!verify){
        return res.json({
            success:false,
            message:"Plese enter your correct Password",
            data:null
 
        }) 
 }
 const token = await jwt.sign({user:result._id},process.env.JWT_SECRET_KEY)
 // all EmailId and pasword match
 const resAdmin = await admin.aggregate([ 
    {
   $lookup:{
       from:'roles',
       localField:'RoleId',
       foreignField:'RoleId',
       as:"Roles"
   },
},
{
    $match:{EmailId:result.EmailId}
}
])
 res.json({
    success:true,
    message:"You are logged in",
    data:resAdmin,
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
 