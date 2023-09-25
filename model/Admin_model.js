const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    Name:{
        type:String
    },

    Email:{
        type:String,
       
    },
    Password:{
        type:String,
        
    },
    verificationCode:{
        type:Number
    },
},{
timestamps:true
})
module.exports = mongoose.model("Admin",AdminSchema)