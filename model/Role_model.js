const mongoose = require("mongoose")

const RoleSchema = mongoose.Schema({
    RoleId:{
        type:String
    },
    RoleName:{
        type:String
    },
    Status:{
        type:String,
       
    },
},{
timestamps:true
})
module.exports = mongoose.model("Role",RoleSchema)