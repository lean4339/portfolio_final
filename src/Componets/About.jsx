import { Element } from "react-scroll"
export const About = () => {
    return (
        <>
        <Element name='/about'/>
        <main className='about-container' id="/about">
                <h1 className="titulo-main">Sobre mí</h1>
                <p className="about-text-container">
                    Soy un desarrollador web full stack, con experiencia en el desarrollo de aplicaciones web. 
                    Me apasiona la tecnología y el desarrollo de software, siempre estoy en constante aprendizaje y 
                    me encanta enfrentar nuevos desafíos. Soy una persona proactiva, responsable y con capacidad para 
                    trabajar en equipo.
                    Me gusta trabajar en proyectos que me permitan crecer profesionalmente y aportar valor a la empresa.
                    Trabajé en proyectos de desarrollo de software en diferentes tecnologías como JavaScript, React y Node.
                    Amo hacer paginas web y amaría hacer la tuya
                </p>
        </main>
        </>
    )
}