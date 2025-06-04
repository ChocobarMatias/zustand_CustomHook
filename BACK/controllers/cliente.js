const {connection} = require('../dataBase/dateDB');


const mostrarClientes = (req, res) => {

    const query = "SELECT * FROM Clientes";

    connection.query(query, (err, results) => {
        console.log("Resultados de la consulta:", results);
        if (err) {
            console.error("Error al obtener los clientes:", err);
            return res.status(500).json({ error: "Error al obtener los clientes" });
        }
        res.json(results);
    })
}

const mostrarCliente = (req, res) => {

    const id = req.params.id;

    const query = `SELECT * FROM Clientes WHERE id_cliente = ?`;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error al obtener el cliente:", err);
            return res.status(500).json({ error: "Error al obtener el cliente" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }
        res.status(200).json(results[0]);
    })
}

const crearCliente = (req, res) => {
    const { nombre, email } = req.body;
    const query = "INSERT INTO Clientes (nombre, email) VALUES (?, ?)";

    connection.query(query, [nombre, email], (err, results) => {
        if (err) {
            console.error("Error al crear el cliente:", err);
            return res.status(500).json({ error: "Error al crear el cliente" });
        }
        res.status(201).json({ message: "Cliente creado exitosamente", id: results.insertId });
    });
}

const actualizarCliente = (req, res) => {}

const eliminarCliente = (req, res) => {}




module.exports = {mostrarClientes, mostrarCliente, crearCliente, actualizarCliente, eliminarCliente}