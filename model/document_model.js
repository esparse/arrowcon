const mongoose = require("mongoose")

const DocumentSchema = mongoose.Schema({
    autoDocumentId:{
        type:String
    },
    DocumentId:{
        type:String
    },
    DocumentName:{
        type:String 
    },
    file:{
        type:String,
       
    },
},{
timestamps:true
})
module.exports = mongoose.model("Document",DocumentSchema)