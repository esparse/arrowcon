const mongoose = require("mongoose")

const StatusSchema = mongoose.Schema({
    StatusId:{
        type:String
    },
    Status:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("Status",StatusSchema)