let mysql = require('mysql');

let db = mysql.createConnection({   //création connection database
    host: "localhost",
    user: "root",
    password: "",
    database: "api",
})

db.connect((err)=>{                             //conection a la db
    
    if(!err) console.log("database connected")
    else console.log("connection error : "+ err)
})
module.exports = db 

