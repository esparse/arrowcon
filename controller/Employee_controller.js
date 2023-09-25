const Employee = require("../model/Employee_model")
const nodemailer = require("nodemailer");
exports.CreateEmployeeDetails = async(req,res)=>{
 try {
    let count = (await Employee.countDocuments()+1)+100;
    const result = await Employee.create({
        EmployeeId: "ED"+count,
        FirstName:req.body.FirstName,
        MiddleName:req.body.MiddleName,
        LastName:req.body.LastName,
        MaidenName:req.body.MaidenName,
        Caste:req.body.Caste,
        Religion:req.body.Religion,
        IdentificationMark:req.body.IdentificationMark,
        DateofBirth:req.body.DateofBirth,
        BirthPlace:req.body.BirthPlace,
        Gender:req.body.Gender,
        Nationality:req.body.Nationality,
        MotherTongue:req.body.MotherTongue,
        BloodGroup:req.body.BloodGroup,
        Ethnicity:req.body.Ethnicity,
        Height:req.body.Height,
        Weight:req.body.Weight,
        MaritalStatus:req.body.MaritalStatus,
        MarriageAnniversaryDate:req.body.MarriageAnniversaryDate,
        AddNewSkill:req.body.AddNewSkill,
        Describeyourselfinfewwords:req.body.Describeyourselfinfewwords,
     })
     var  transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user:"support@ArrowEnergy.app",
          pass:"Nimbhari125@",
        },
      });
      var mailOption = {
        from:"support@ArrowEnergy.app",
        to :req.body.EmployeeEmail ,
        subject :"Welcome To Arrow Energy APP",
       html:`<html>
       <head>
           <title>
               first Page
           </title>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
     <link rel="stylesheet" href="style.css">
       </head>
       <body>
           <div class="container-fluid">
               <div class="row">
                   <div class="col-lg-4, col-md-4, col-sm-4">
               <div class="logo">
               <img src="https://avinyawebadmin.azurewebsites.net/images/8deb8756-b240-414f-9095-c77124ddd186.jpg" height="120px" width="120px">
           </div>
           </div>
           <div class="col-lg-8 ,col-md-8 ,col-sm-8">
               <h1><span class="top-head">ArrowEnergy App</span></h1>
               <h3><span class="top-h3">Learn, Grow, Succeed - Anytime, Anywhere with ArrowEnergy App!</span>
               </h3>
           </div>
           </div>
           </div>
           <div class="box">
               <h1><b><span class="box-head">Welcome ${result.EmployeeName}</span></b></h1></h1>
               <div class="box-img">
               <img src="https://avinyawebadmin.azurewebsites.net/images/4905784.jpg">
           </div>
           </div>
           <div class="paragraph">
               <p><b>Dear ${result.EmployeeName},</b><br>
               We are thrilled to welcome you to Arrow Energy App! We are excited to have you as a valued customer and we would like to inform you that your account is now active.</p>
               <p>Simply enter your login information to start using your account. The Arrow Enegry App's numerous features and advantages for learning various courses are available to you as you log in.
              </p>
              <p>We want to ensure that your experience with us is seamless and enjoyable. If you have any questions, concerns, or feedback, please do not hesitate to contact our customer support team at <b>support@Arrow Energy.app.</b> </p>
              <p>We are here to assist you in any way we can. Thank you for choosing Arrow Energy App. We look forward to serving you and providing you with exceptional service.
              </p>
              <p><b>Best regards,<br> Team Arrow Energy App</b>
              </p>
              </div>
              <footer>
               <div class="container-fluid">
                   <div class="row">
                       <div class="col-lg-6 col-md-6 col-sm-6 text-center">
               <h3><span class="footer-h3">Follow us</span></h3>
               <i class="fa-brands fa-square-facebook" style="color: #0c5be4;"></i>
               <i class="fa-brands fa-square-instagram" style="color: #d64398;"></i>
               <i class="fa-brands fa-square-twitter" style="color: #3677e7;"></i>
                       </div>
                       <div class="col-lg-6 col-md-6 col-sm-6 text-center ">
               <button class="button btn-lg" type="button"><span class="btncontent">Contact Us</span></button> 
           </div>
               </div> 
           </footer>
           </div>
           <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
       </body>
   </html>
           `
      }
      transporter.sendMail(mailOption, error => {
        error
        ? console.log(`EMAIL NOT SEND ${error}`)
        : console.log("EMAIL SEND");
      
    });
     res.json({
        success:true,
        message: "Employee Created Successfully",
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
exports.viewEmployeeDetails = async(req,res)=>{
    try {
        const result = await Employee.aggregate([
            {
                $lookup:{
                    from:'departments',
                    localField:'DepartMentId',
                    foreignField:'DepartMentId',
                    as:"Department"
                },
            },
            {
                $lookup:{
                    from:'roles',
                    localField:'RoleId',
                    foreignField:'RoleId',
                    as:"Roles"
                },
            }
        ])
        res.json({
            count:result.length,
            success:true,
            message:"get Employee Details",
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
exports.deleteEmployeeDetails = async(req,res)=>{
    try {
        const result = await Employee.findOneAndDelete({EmployeeId:req.params.EmployeeId})
        res.json({
            success:true,
            message:"Delete Employee Details",
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
exports.updateEmployeeDetails = async(req,res)=>{
    try {
        const result = await Employee.findOneAndUpdate({EmployeeId:req.body.EmployeeId} , req.body , {
            new: true,
            runValidators: true,})
        res.json({
            success:true,
            message:"update Employee Details",
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