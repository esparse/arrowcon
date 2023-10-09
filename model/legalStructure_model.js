const mongoose = require("mongoose")

const LegalStructureSchema = mongoose.Schema({
    LegalStructureId:{
        type:String
    },
    LegalStructure:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("LegalStructure",LegalStructureSchema)