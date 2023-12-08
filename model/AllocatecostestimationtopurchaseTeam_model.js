const mongoose = require("mongoose")

const AllocatecostestimationtopurchaseteamSchema = mongoose.Schema({
    AllocatecostestimationtopurchaseteamId:{
        type:String
    },
    AllocationId:{
        type:String,
    },
    Date:{
        type:String,
       
    },
    Remark:{
        type:String,
        
    },
   
},{
timestamps:true
})
module.exports = mongoose.model("Allocatecostestimationtopurchaseteam",AllocatecostestimationtopurchaseteamSchema)