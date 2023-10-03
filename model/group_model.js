const mongoose = require("mongoose")

const groupSchema = mongoose.Schema({
    GroupName:{
        type:String
    },
    GroupId:{
        type:String,
       
    },
    Status:{
        type:String
    }
}
,{
timestamps:true
})
module.exports = mongoose.model("group",groupSchema)