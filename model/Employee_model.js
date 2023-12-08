const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    Prefix:{
        type:String
    },
    EmployeeId:{
        type:String
    },
    EmployeeName:{
        type:String
    },
    EmailId:{
        type:String

    },
    MobileNumber:{
        type:String
    },
    Address:{
        type:String
    },
    CityId:{
        type:Number
    },
    CountryId:{
        type:Number
    },
    StateId:{
        type:Number
    },
    Status:{
        type:String,  
    }, 
    RoleId:{
        type:String
    },
    DepartMentId:{
        type:String
    },
    verificationCode:{type:Number}
},{
timestamps:true
})
module.exports = mongoose.model("Employee",EmployeeSchema)