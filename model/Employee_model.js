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
        type:String
    },
    Country:{
        type:String
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
},{
timestamps:true
})
module.exports = mongoose.model("Employee",EmployeeSchema)