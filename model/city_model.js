const mongoose = require("mongoose")

const citySchema = mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    state_id:{
        type:Number
    },
    state_code:{
        type:String
    },
    state_name:{
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
    latitude:{
        type:String
        
    },
    longitude:{
        type:String

    }
    
       

},{
timestamps:true
})
module.exports = mongoose.model("city",citySchema)