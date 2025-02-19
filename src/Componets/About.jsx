import { Element } from "react-scroll";
export const About = () => {
  return (
    <>
      <Element name="/sobre mí" />
      <main className="about-container" id="/sobre mí">
        <h1 className="titulo-main">Sobre mí</h1>
        <section className="about-section">
          <h2>Experiencia y habilidades</h2>
          <p>
            Soy un desarrollador web full stack con experiencia en el diseño de aplicaciones dinámicas y funcionales. He trabajado en diversos proyectos utilizando tecnologías modernas como JavaScript, React, Node.js y bases de datos como MongoDB y SQL. Esto me ha permitido no solo fortalecer mis conocimientos técnicos, sino también adquirir habilidades clave como la resolución creativa de problemas y la colaboración en equipos multidisciplinarios.
          </p>
        </section>
        <section className="about-section">
          <h2>Innovación y creatividad</h2>
          <p>
            Siempre busco soluciones innovadoras para mejorar los procesos y optimizar las aplicaciones. Disfruto experimentando con nuevas tecnologías, explorando ideas frescas y manteniéndome al día con las últimas tendencias en el campo del desarrollo web.
          </p>
        </section>
        <section className="about-section">
          <h2>Actitud y enfoque</h2>
          <p>
            Mi sentido del humor contribuye a mantener un ambiente de trabajo agradable y mis habilidades sociales me ayudan a construir relaciones sólidas con mis compañeros. Abordo los desafíos con una actitud positiva y me esfuerzo constantemente por superar las expectativas, entregando productos de alta calidad que realmente aporten valor.
          </p>
        </section>
        <section className="about-section">
          <h2>Compromiso con la calidad</h2>
          <p>
            Estoy comprometido con la creación de soluciones que optimicen procesos internos, mejoren la experiencia del usuario y contribuyan al crecimiento del negocio. Transformar ideas en realidades digitales es mi vocación, y llevo mi creatividad y conocimiento técnico a cada línea de código.
          </p>
        </section>
      </main>
    </>
  );
};
