import React from 'react'
import { CLASES } from '../router/router'
import { Link } from 'react-router-dom' // Importamos el componente Link de react-router-dom para crear enlaces de navegación entre páginas

const Main = () => {



  return (
    <div>
      {/* <h1>Bienvenidos React Vite</h1> */}
      <Link to="/clases">Clases</Link>
    </div>
  )
}

export default Main
