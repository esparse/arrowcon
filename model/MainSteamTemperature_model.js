const mongoose = require("mongoose")

const MainSteamTemperatureSchema = mongoose.Schema({
    MainSteamTemperatureId:{
        type:String
    },
    MainSteamTemperature:{
        type:String,
    }, 
},{
timestamps:true
})
module.exports = mongoose.model("MainSteamTemperature",MainSteamTemperatureSchema)