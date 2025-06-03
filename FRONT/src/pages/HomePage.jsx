import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TablaCliente from '../components/Crud/TablaCliente'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <TablaCliente/>
        <Footer/>
    </div>
  )
}

export default HomePage
