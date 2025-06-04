const {connection} = require("./dataBase/dateDB");
const express = require("express");
const cors = require("cors");
const user = require("./router/user"); 
const cliente = require("./router/cliente");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/",user,cliente)

connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión exitosa a la base de datos");
});

app.listen(8000, () => {
    console.log("Servidor escuchando en el puerto 3000");3
});