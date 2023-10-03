const env = require('dotenv')

env.config({path:"../config/.env"})

const db = require("../config/db")

//data files
const admin =require("./data/admin")
//model
   const adminModel = require("../model/Admin_model")
    const insertData = async()=>{
        try {
          db()
          await adminModel.deleteMany()
          const result = await adminModel.create(admin)
         console.log(result);
          console.log("DATA INSERT SUCCESSFULLY".bgGreen.yellow);
        //   console.log(sampleData);
        //   console.log(result);
       
           process.exit()
        } catch (error) {
            console.log(`ERROR:${error}`);
            process.exit()
        }
      
              }


    const deleteData = async()=>{
        try {
          db()
          await adminModel.deleteMany()
           process.exit()
        } catch (error) {
            console.log('ERROR:${error}');
            process.exit()
        }
      
              }
    if(process.argv[2]== "-c"){
        insertData()

       
    }else if(process.argv[2]=="-d"){
        deleteData()
        console.log("Data Destroyed");

    }else{
        console.log("INVALID  OPERATION");
    }