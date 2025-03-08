import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,      // Duración de la animación en milisegundos
  easing: 'ease-in-out',
  once: true,         // La animación ocurre solo una vez al hacer scroll
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
