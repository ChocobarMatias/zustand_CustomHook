
import './App.css'
import Clase from './components/Clase'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { CLASES, CREATE_CLIENTES, EDIT_CLIENTES, HOME, LOGIN } from './router/router'
import CreateClientePage from './pages/CreateClientePage'
import EditClientePage from './pages/EditClientePage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
  //
    <BrowserRouter>
    <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={CREATE_CLIENTES} element={<CreateClientePage />} />
        <Route path ={EDIT_CLIENTES} element={<EditClientePage />} />
        <Route path={LOGIN} element={<LoginPage/>}/>
        <Route path={CLASES} element={<Clase />} />
    </Routes>
    </BrowserRouter>

  
      
    </>
  )
}

export default App
