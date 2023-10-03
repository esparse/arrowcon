const bcrypt = require("bcryptjs")
const admin =[
    {
        GroupId:"GID102",
        Name:"admin",
        Email:"arrowcon@gmail.com",
        Password:bcrypt.hashSync("1234",10),
    }
  
]
module.exports =admin