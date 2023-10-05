const bcrypt = require("bcryptjs")
const admin =[
    {
        Email:"purchase@gmail.com",
        Password:bcrypt.hashSync("1234",10),
    }
  
]

module.exports =admin