const mongoose = require("mongoose")

const InstallationTypeSchema = mongoose.Schema({
    InstallationTypeId:{
        type:String
    },
    InstallationType:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("InstallationType",InstallationTypeSchema)