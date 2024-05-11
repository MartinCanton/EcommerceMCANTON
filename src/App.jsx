import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer'
import { Carrusel } from './components/Carousel/Carrusel'
import { Footer } from './components/Footer/Footer'
import './main.css'

function App() {  

  return (
    <>
      <div>
        <NavBar />
        <ItemsListContainer greeting={'Bienvenido a la E-commerce de Informática MCANTON'} />        
        <Carrusel />
        <Footer />
      </div>
    </>
  )
}

export default App
