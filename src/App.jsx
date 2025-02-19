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
import { Container } from '@mui/material'
function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
    <Container
    sx={{ 
      position:'relative', 
      display:'flex', 
      top: '10vh',
      flexDirection:'column',  
      justifyContent:'center', 
      flexWrap: 'wrap' }} 
      fixed maxWidth='xxl'> 
    <Main showMenu={showMenu} />
    
    <Banner/>
    <About />
    <Banner/>
    <Experience />
    <Banner/>
    <Services />
    {/* <Contact /> */}
    <Conexion />
    </Container> 
    </>
  )
}

export default App
