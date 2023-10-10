const mongoose = require("mongoose")

const CountrySchema = mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
        
    },
    subregion:{
        type:String
    },
    states:[
        {
            id: {type:Number},
            name:{type:String},
            latitude: {type:String},
            longitude: {type:String},
            cities:[
                {
                id:{type:Number},
                name:{type:String},
                latitude:{type:String},
                longitude:{type:String},

            }
        ]
          },
    ]
    
       

},{
timestamps:true
})
module.exports = mongoose.model("Country",CountrySchema)