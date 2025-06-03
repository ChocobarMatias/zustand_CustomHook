import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const ClienteEdit = () => {
  const {id} = useParams()
const initialState = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
}

  const [datos,setDatos] = useState(initialState)

 const EditCliente = async () => {
  console.log("edit")
  try {
    const response = await axios.get(`http://localhost:3001/Cliente/${id}`)
    
     console.log("response", response.data)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
 }
 useEffect(() => {
  EditCliente()
 }, [])
  return (
    <div>
      edit ver
    </div>
  )
}

export default ClienteEdit
