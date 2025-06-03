import axios from "axios";
import { ENDPOINTS } from "../enpoints/enpoints";
import {  useEffect, useState } from "react";
import { useLogin } from "../context/useLogin";


export const useLoginUser = () =>{
 const [datos, setDatos] = useState([]);
 const setNombre = useLogin((state) => state.setNombre); // Hook para manejar el estado global del nombre
    const Login = async() =>{
 
        try {
            const response = await axios.get(ENDPOINTS.USER);
            setDatos(response.data);
            setNombre(response.data[0].nombre); // Asignar el nombre del primer usuario al estado global
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }    }

        useEffect(()=> {Login()},[])

        return { datos,Login}
}