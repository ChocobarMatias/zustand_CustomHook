import React from 'react'
import {useNavigate} from 'react-router-dom' // Importamos el hook useNavigate de react-router-dom para poder navegar entre páginas
import { HOME } from '../router/router'

const Clase = () => {

 const navigate = useNavigate()

const hanldeHome = () => {

    console.log("boton clase")

navigate(HOME)
}


  return (
    <div>
      <h2>Componente clase</h2>
      <button onClick={hanldeHome}>Home</button>
    </div>
  )
}

export default Clase
