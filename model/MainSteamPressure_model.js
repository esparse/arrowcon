const mongoose = require("mongoose")

const MainSteamPressureSchema = mongoose.Schema({
    MainSteamPressureId:{
        type:String
    },
    MainSteamPressure:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("MainSteamPressure",MainSteamPressureSchema)