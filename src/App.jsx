import "./App.css";
import { Header } from "./Componets/Header";
import Main from "./Componets/Main";
import { Conexion } from "./Componets/Conexion";
import { About } from "./Componets/About";
import Experience from "./Componets/Experience";
import { Services } from "./Componets/Services";
import Banner from "./Componets/Banner";
import { useState } from "react";
import { Container } from "@mui/material";
import { Contact } from "./Componets/Contact";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* Ajustamos el Container para que no afecte el Header */}
 
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Main showMenu={showMenu} />
        <About />
        <Experience />
        <Services />
        <Contact />
        <Conexion />
    </>
  );
}

export default App;
