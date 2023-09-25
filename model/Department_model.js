const mongoose = require("mongoose")

const DepartMentSchema = mongoose.Schema({
    DepartMentId:{
        type:String
    },
    DepartMentName:{
        type:String
    },
    Status:{
        type:String,
       
    },
},{
timestamps:true
})
module.exports = mongoose.model("DepartMent",DepartMentSchema)