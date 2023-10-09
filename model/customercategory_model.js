const mongoose = require("mongoose")

const CustomerCategorySchema = mongoose.Schema({
    CustomerCategoryId:{
        type:String
    },
    CustomerCategory:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("CustomerCategory",CustomerCategorySchema)