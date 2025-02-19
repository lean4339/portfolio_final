import './App.css'
import { Header } from './Componets/Header'
import { Main } from './Componets/Main'
import { Conexion } from './Componets/Conexion'
// import { Contact } from './Componets/Contact'
import { About } from './Componets/About'
import { Experience } from './Componets/Experience'
import { Services } from './Componets/Services'
import Banner from './Componets/Banner'
import { useState } from 'react'
import image from './assets/banner2.webp';
import image2 from './assets/codigo_banner.webp';
import image3 from './assets/banner_servicios.webp';
//import { Container } from '@mui/material'
function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
    {/* <Container
    sx={{ 
      position:'relative', 
      display:'flex', 
      flexDirection:'column',  
      justifyContent:'center', 
      flexWrap: 'wrap' }} 
      fixed maxWidth='xl'> */}
    <Main showMenu={showMenu} />
    
    <Banner image={image}/>
    <About />
    <Banner image={image2}/>
    <Experience />
    <Banner image={image3}/>
    <Services />
    {/* <Contact /> */}
    <Conexion />
    {/* </Container> */}
    </>
  )
}

export default App
