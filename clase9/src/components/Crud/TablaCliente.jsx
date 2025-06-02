import {Table,Button} from "react-bootstrap";
import axios from "axios";
import { useEffect} from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"; 
// import {FaDeleteLeft} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {FaEye} from "react-icons/fa";
import borrar from "../../assets/delete.png"
import { CREATE_CLIENTES, EDIT_CLIENTES, LOGIN } from "../../router/router";
import "../../CSS/TablaCliente.css"
// import { useDB } from "../../customHook/useDB";
import { CLIENTES } from "../../router/router";
import { useLogin } from "../../context/useLogin";


const TablaCliente = () => {
  // const {datos,getClientes} = useDB()
  const nombre = useLogin ((state) => state.nombre);
  const navigate = useNavigate()
  const logout = useLogin((state) => state.logout)//que hace vuelve a null el token, nombre e id_usuario

  const [datos, setDatos] = useState([]);// estado

  const getClientes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Cliente");
      setDatos(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
   useEffect(() => {
    getClientes();
  }, []);


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/Cliente/${id}`);
      console.log("response", response.data);
     getClientes(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
    }}

  return (
    <div className="container mt-5">
      <Button onClick={()=>{logout(),navigate(LOGIN)}}>Cerrar Sesion</Button>
      <hr />
      <h1 className="text-center">Bienvenido {nombre}</h1>
      
      <h2>Tabla de Clientes  </h2>
      <hr />
      <br />
      <Link to={CREATE_CLIENTES}>Agregar cliente</Link>
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Acciones</th>

          </tr>
        </thead>

        <tbody>
          {datos.map(({id,nombre, apellido, telefono, email}) => (
            
          
            <tr key={id}>
              <td>{id}</td>
              <td>{nombre}</td>
              <td>{apellido}</td>
              <td>{telefono}</td>
              <td>{email}</td>
              <td>
                <button onClick={()=>{handleDelete(id)}}>
                  <img src={borrar} alt="" className="btn-delete" />
                </button>
                <Link to={`/edit-clientes/${id}`}><FaEdit/></Link>
                <button>Ver</button>
              </td>
            </tr>))
     }
        </tbody>
      </Table>
    </div>
  );
};

export default TablaCliente;
