import { useEffect,useState } from "react";
import axios from "axios";
import { ENPOINTS} from "../router/router";    
import { ENDPOINTS } from "../enpoints/enpoints";

export const useClase =() => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 const fetchClases = async () => {
            try {
                const response = await axios.get(ENDPOINTS.CLIENTE);
                setDatos(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
       
        fetchClases();
    }, []);

    return [datos, loading, error ];
}   