import { Element } from "react-scroll";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const About = () => {
  return (
    <>
      <Element name="/sobre mí" />
      <main className="about-container min-h-screen bg-black text-white px-6 md:px-16 py-20">
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold text-center mb-12 uppercase tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sobre Mí
        </motion.h1>

        <motion.section className="about-section max-w-4xl mx-auto mb-12"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Experiencia y habilidades</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Soy un desarrollador web full stack con experiencia en el diseño de aplicaciones dinámicas y funcionales. He trabajado en diversos proyectos utilizando tecnologías modernas como JavaScript, React, Node.js y bases de datos como MongoDB y SQL. Esto me ha permitido fortalecer mis conocimientos técnicos y desarrollar habilidades clave como la resolución creativa de problemas y la colaboración en equipos multidisciplinarios.
          </p>
        </motion.section>

        <motion.section className="about-section max-w-4xl mx-auto mb-12"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Innovación y creatividad</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Siempre busco soluciones innovadoras para mejorar los procesos y optimizar las aplicaciones. Disfruto experimentando con nuevas tecnologías, explorando ideas frescas y manteniéndome al día con las últimas tendencias en el campo del desarrollo web.
          </p>
        </motion.section>

        <motion.section className="about-section max-w-4xl mx-auto mb-12"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Actitud y enfoque</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Mi sentido del humor contribuye a mantener un ambiente de trabajo agradable, y mis habilidades sociales me ayudan a construir relaciones sólidas con mis compañeros. Abordo los desafíos con una actitud positiva y me esfuerzo constantemente por superar las expectativas, entregando productos de alta calidad que realmente aporten valor.
          </p>
        </motion.section>

        <motion.section className="about-section max-w-4xl mx-auto"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Compromiso con la calidad</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Estoy comprometido con la creación de soluciones que optimicen procesos internos, mejoren la experiencia del usuario y contribuyan al crecimiento del negocio. Transformar ideas en realidades digitales es mi vocación, y llevo mi creatividad y conocimiento técnico a cada línea de código.
          </p>
        </motion.section>
      </main>
    </>
  );
};
