const mongoose = require("mongoose")

const ContactPersonSchema = new  mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId, unique: true },
    ConatctPersonID:{
        type:String
    },
ContactPersonName:{
    type:String
},
Designation:{
    type:String
},
Email:{
    type:String
},
MobileNo:{
    type:String
},
LandlineNo:{
    type:String
},
Countrycode :{
    type:String

},
sourceId :{
    type:String 
}
},{
    timestamps:true
    })
    module.exports = mongoose.model("ContactPerson",ContactPersonSchema)