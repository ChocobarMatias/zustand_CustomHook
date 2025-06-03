//zustand es un estado global de react osea en este caso del sistema que se llama clase 9
import {create} from "zustand";

// import { persist } from "zustand/middleware"

export const useLogin = create((set)=>({
                    
    token: null,
    nombre: null,
    id_usuario: null,
    setToken: (token) => set({ token }),
    setNombre: (nombre) => set({ nombre }),
    setIdUsuario: (id_usuario) => set({ id_usuario }),
    logout: () => set({ token: null, nombre: null, id_usuario: null})

}))


