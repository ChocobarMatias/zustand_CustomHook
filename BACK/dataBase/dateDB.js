const mysql = require("mysql2")


const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Matias1234!",
    database: "Clase",
    port: 3306
})

module.exports = { connection };
