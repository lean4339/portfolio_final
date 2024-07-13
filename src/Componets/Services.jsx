import { Element } from "react-scroll"
import Codigo from '../assets/codigo.jpg'
export const Services = () => {
    return (
        <>
        <Element name='/services'/>
        <main className='services-container' id="/services">
                <h1 className="titulo-main">Lleva tus ideas a buen puerto</h1>
            <div className='services-content-container'>
                <div className="experience-text-container">
                <h3>
                Asesoramiento y Creación de Páginas Web y Aplicaciones Web
Ofrezco asesoramiento integral para la creación de páginas web y aplicaciones web, ayudándote a transformar tus ideas en productos digitales funcionales y atractivos. Con experiencia en diversas tecnologías como JavaScript, TypeScript, Material-UI, y bases de datos como SQL Server, MySQL, MongoDB, Redis, y Elasticsearch, puedo garantizar soluciones eficientes y de alta calidad adaptadas a tus necesidades específicas.
                </h3>
                </div>
                <img src={Codigo} alt="Codigo" className="services-img"/>
            </div>
        </main>
        </>
    )
}