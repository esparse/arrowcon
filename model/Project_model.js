const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
    ProjectId:{
        type:String
    },
    ProjectName:{
        type:String
    },
    ProjectTypeId:{
        type:String
    },
    CustomerId:{
        type:String
    },
  ProjectStatus:{
    type:String
  },
  EstimatedAmt:{
type:String
  },
  StartDate:{
    type:String
  },
  EndDate:{
    type:String
  },
  Rating:{
    type:String
  },
  EnquiryOwnerId:{
    type:String

  }

    
},{
timestamps:true
})
module.exports = mongoose.model("Project",ProjectSchema)