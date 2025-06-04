const {connection} = require("../dataBase/dateDB.js");

const mostrarUsuarios = (req,res) =>{

const query ="SELECT * FROM Usuarios";

connection.query(query, (err, results) => {
    if (err) {
        console.error("Error al obtener los usuarios:", err);
        return res.status(500).json({ error: "Error al obtener los usuarios" });
    }
    res.json(results);
  })

}

const mostrarUsuario = (req,res)=> {

    const id = req.params.id;

    const query = `select * from Usuarios where id_usuario = ?`
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error al obtener el usuario:", err);
            return res.status(500).json({ error: "Error al obtener el usuario" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(results[0]);
    })
}
     

const crearUsuario = (req,res)=>{
    const {nombre,contraseña} = req.body
    const query = "INSERT INTO Usuarios (nombre, contraseña) VALUES (?, ?)";
    
    connection.query(query, [nombre, contraseña], (err, results) => {
        if (err) {
            console.error("Error al crear el usuario:", err);
            return res.status(500).json({ error: "Error al crear el usuario" });
        }
        res.status(201).json({ message: "Usuario creado exitosamente", id: results.insertId });
    });
}

const actualizarUsuario=(req,res)=>{
    const id = req.params.id;
    const {nombre,contraseña} = req.body;
    const query = "UPDATE Usuarios SET nombre = ?, contraseña = ? WHERE id_usuario = ?";

    connection.query(query,[nombre,contraseña,id], (err, results) => {
        if (err) {
            console.error("Error al actualizar el usuario:", err);
            return res.status(500).json({ error: "Error al actualizar el usuario" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario actualizado exitosamente" });
    })
}

const eliminarUsuario = (req,res)=>{
    const id = req.params.id;
    const query = "DELETE FROM Usuarios WHERE id_usuario = ?";

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error al eliminar el usuario:", err);
            return res.status(500).json({ error: "Error al eliminar el usuario" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    })
}

const BorradoLogicoUsuario = (req,res)=>{
    const id = req.body.id_usuario;
    const { borrado_logico } = req.body; // Asumiendo que el borrado lógico se maneja con un campo booleano
    const query = "UPDATE Usuarios SET borrado_logico = ? WHERE id_usuario = ?";

    connection.query(query, [borrado_logico,id], (err, results) => {
        if (err) {
            console.error("Error al realizar el borrado lógico del usuario:", err);
            return res.status(500).json({ error: "Error al realizar el borrado lógico del usuario" });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Borrado lógico realizado exitosamente" });
    })
}

module.exports = {mostrarUsuarios, mostrarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario,BorradoLogicoUsuario};