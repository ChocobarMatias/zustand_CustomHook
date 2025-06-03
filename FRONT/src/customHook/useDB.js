import axios from "axios";
import { ENPOINTS } from "../router/router";
import { useEffect, useState } from "react";

export const useDB = (newURL) =>{
 const [datos, setDatos] = useState([]);
  const getClientes = async () => {
  try {
    const response = await axios.get(ENPOINTS+newURL)
       setDatos(response.data);
  } catch (error) {
   console.error("Error fetching data:", error);
  }
  
  }

  useEffect(() => {
    getClientes(); }, []);

return {datos,getClientes}

}