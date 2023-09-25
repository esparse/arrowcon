const bcrypt = require("bcryptjs")
const admin =[
    {
        Name:"admin",
        Email:"arrowcon@gmail.com",
        Password:bcrypt.hashSync("1234",10),
    }
  
]
module.exports =admin