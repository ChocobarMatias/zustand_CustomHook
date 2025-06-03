import { Form,Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {HOME} from '../router/router'
import {useLoginUser} from '../customHook/useLoginUser'
const Login = () => {
 
 const navigate = useNavigate()
 const [usuario,setUsuario]=useState("")
 const [password,setPassword]=useState("")
const {datos,Login} = useLoginUser() // Hook personalizado para manejar el estado de login

   const Validacion = () => {
  datos.forEach((element) => {

    if (usuario === element.usuario && password === element.password) {
   
      alert("Bienvenido")
      navigate(HOME)// rutas 
    } else {
      alert("Usuario o contraseña incorrectos")
    }
  })}
 
  return (
    <div>
    <Form>
      <h1>Login</h1>
        <Form.Label htmlFor="email">User: </Form.Label>
        <Form.Control type="text" id="email" placeholder="Enter email" required name ="usuario"onChange={(e)=>setUsuario(e.target.value)}/>
         <br /><br />
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control type="password" id="password" name="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
         <br /><br />
         <Button  onClick={Validacion}>Login</Button>
    </Form>
    <br />
    </div>
  )
}

export default Login
