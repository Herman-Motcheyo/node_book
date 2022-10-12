const mysql2  = require("mysql2")

const connection = mysql2.createConnection({
    user:'root',
    password:'herman',
    database: 'book_management',
    host : 'localhost'
})

connection.connect((err)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log("connection établie")
})

connection.on('error' , (err)=>{
    console.log("Mysql2 error"  ,err)
})

module.exports = connection ;