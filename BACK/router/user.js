const express = require('express');
const router = express.Router()
const {mostrarUsuarios, mostrarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario,BorradoLogicoUsuario} = require('../controllers/user');


router.get("/usuario", mostrarUsuarios);//mostrar todo
router.get("/usuario/:id", mostrarUsuario);//mostrar por id
router.post("/usuario/create", crearUsuario);//crear un usuario
router.put("/usuario/update/:id", actualizarUsuario);//actualizar un usuario por id
router.delete("/usuario/delete/:id", eliminarUsuario);//eliminar un usuario por id
router.put("/usuario/borradoLogico", BorradoLogicoUsuario);//actualizar un usuario por id (borrado lógico)

module.exports = router;