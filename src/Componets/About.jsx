import { Element } from "react-scroll"
export const About = () => {
    return (
        <>
        <Element name='/about'/>
        <main className='about-container' id="/about">
            <div className='about-content-container'>
                <h1 className="titulo-main">Un programador resiliente</h1>

                <div className="experience-text-container">
                <h3 className="subtitulo-main">Nacido en Buenos Aires y criado en el conurbano, soy un hombre de 35 años felizmente casado y muy familiero. A pesar de sufrir de TOC, TAG y epilepsia, nada me detiene en mi esfuerzo diario por ofrecer lo mejor en mi trabajo. Me encanta compartir momentos con mis seres queridos, pero mi verdadera pasión es la programación, especialmente en Linux.
                    </h3>
                    </div>

                    <div className="experience-text-container">
                    <h3 className="subtitulo-main">
                    Desde hace tres años estoy en el mercado de la programación, disfrutando de la lógica y admirando cómo la web evoluciona constantemente en diseño y rendimiento. He trabajado en varias empresas y sigo comprometido con mi crecimiento profesional y personal, siempre buscando nuevos desafíos y soluciones innovadoras.
                </h3>
                </div>
            </div>
        </main>
        </>
    )
}