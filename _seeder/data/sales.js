const bcrypt = require("bcryptjs")
const saleadmin =[
    {
        Email:"sales@gmail.com",
        Password:bcrypt.hashSync("1234",10),
    },
    {
        Email:"purchase@gmail.com",
        Password:bcrypt.hashSync("1234",10),
    },
]
module.exports =saleadmin