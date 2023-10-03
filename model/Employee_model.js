const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    Prefix:{
        type:String
    },
    EmployeeId:{
        type:String
    },
    FirstName:{
        type:String
    },
    MiddleName:{
        type:String

    },
    LastName:{
        type:String
    },
    MaidenName:{
        type:String
    },
    Caste:{
        type:String
    },
    Religion:{
        type:String
    },
    IdentificationMark:{
        type:String,  
    },
    DateofBirth:{
        type:String
    },
    BirthPlace:{
        type:String
    },
    Gender:{
        type:String
    },
    Nationality:{
        type:String
    },
    MotherTongue:{
        type:String
    },
    BloodGroup:{
        type:String
    },
    Ethnicity:{
        type:String
    },
    Height:{
        type:String
    },
    Weight:{
        type:String
    },
    MaritalStatus:{
        type:String
    },
    MarriageAnniversaryDate:{
        type:String
    },
    AddNewSkill:{
        type:String
    },
    Describeyourselfinfewwords:{
        type:String
    }
    
},{
timestamps:true
})
module.exports = mongoose.model("Employee",EmployeeSchema)