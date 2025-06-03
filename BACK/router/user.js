const express = require('express');
const router = express.Router()
const {mostrarUsuarios, mostrarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/user');


router.get("/usuario", mostrarUsuarios);
router.get("/usuario/:id", mostrarUsuario);
router.post("/usuario/create", crearUsuario);
router.put("/usuario/update/:id", actualizarUsuario);
router.delete("/usuario/delete/:id", eliminarUsuario);

module.exports = router;