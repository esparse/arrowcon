const mongoose = require("mongoose")

const ProjectTypeSchema = mongoose.Schema({
    ProjectTypeId:{
        type:String
    },
    ProjectType:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("ProjectType",ProjectTypeSchema)