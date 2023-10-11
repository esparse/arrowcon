const mongoose = require("mongoose")

const stateSchema = mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    country_id:{
        type:Number
    },
    country_code:{
        type:String
    },
    country_name:{
        type:String
    },
    state_code:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    }

       

},{
timestamps:true
})
module.exports = mongoose.model("state",stateSchema)