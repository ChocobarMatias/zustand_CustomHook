const express = require('express');
const router = express.Router();
const {mostrarClientes, mostrarCliente, crearCliente, actualizarCliente, eliminarCliente} = require('../controllers/cliente');

router.get("/clientes", mostrarClientes); // mostrar todo
router.get("/cliente/:id", mostrarCliente); // mostrar por id
router.post("/cliente/create", crearCliente); // crear un cliente   
router.put("/cliente/update/:id", actualizarCliente); // actualizar un cliente por id
router.delete("/cliente/delete/:id", eliminarCliente); // eliminar un cliente por id

module.exports = router;