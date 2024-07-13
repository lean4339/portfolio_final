import { Element } from "react-scroll"

export const Experience = () => {
    return (
        <>
            <Element name='/experience' />
            <main className='experience-container' id="/experience">
                <div className='experience-content-container'>
                    <h1 className="titulo-main">Tres años haciendo lo que amo</h1>
                    <div className="experience-flex-container">
                    <div>

                    <div className="experience-text-container">

                    <h3>
                        Comencé mi formación en programación en 2019, dedicando dos horas diarias a estudiar en la Fundación Formar, sumando cuatro horas adicionales de práctica. Durante este tiempo, participé en un proyecto evaluado por Coderhouse, lo cual me permitió afianzar mis conocimientos.
                    </h3>
                    </div>
                    <div className="experience-text-container">

                      <h3 > Mi primer trabajo fue en Imcreate, una empresa americana, donde trabajé con React y Node durante seis meses. Posteriormente, me uní a Korenus App, donde permanecí dos años desarrollando con Node y React, así como con JavaScript puro y jQuery.
                    </h3> 
                    </div>
                    <div className="experience-text-container">
                     <h3 >Luego, continué mi carrera en QK Studio, enfocándome en el backend con Node y TypeScript, y en el frontend con React y Material-UI. Finalmente, trabajé varios meses en Toolbox como desarrollador fullstack, utilizando Node y React.
                    </h3> 
                    </div>
                    </div>
                    <div>

                    <div className="experience-text-container">

                     <h3 >
                        A lo largo de mi trayectoria, he manejado diversas bases de datos, incluyendo SQL Server, MySQL y MongoDB, así como otras tecnologías de bases de datos como Redis y Elasticsearch.

                    </h3> 
                    </div>
                    <div className="experience-text-container">

                     <h3>

                        Estoy apasionado por la programación y siempre busco innovar y aprender nuevas tecnologías para mejorar el rendimiento y diseño de las aplicaciones web.
                    </h3>
                    </div>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}