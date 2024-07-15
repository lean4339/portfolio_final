import './App.css'
import { Header } from './Componets/Header'
import { Main } from './Componets/Main'
import { Conexion } from './Componets/Conexion'
import { Contact } from './Componets/Contact'
import { About } from './Componets/About'
import { Experience } from './Componets/Experience'
import { Services } from './Componets/Services'
import { Container } from '@mui/material'
function App() {

  return (
    <>
    <Header />
    <Container sx={{ display:'flex', flexDirection:'column',  justifyContent:'center', flexWrap: 'wrap' }} fixed maxWidth='xl'>
    <Main />
    <About />
    <Experience />
    <Services />
    <Contact />
    <Conexion />
    </Container>
    </>
  )
}

export default App
