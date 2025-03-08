import { Element } from "react-scroll";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const Services = () => {
  return (
    <>
      <Element name="/servicios" />
      <main className="services-container min-h-screen bg-black text-white px-6 md:px-16 py-20">
        <motion.div 
          className="services-header text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide">Mostrate al mundo</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            No se trata solo de una página web, sino de una experiencia digital que potencia tu marca, negocio o pasión. Transformo ideas en realidades digitales que generan impacto.
          </p>
        </motion.div>

        <motion.section className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <article className="service bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="service-header flex items-center space-x-4">
              <WebIcon fontSize="large" className="text-blue-400" />
              <h2 className="service-title text-3xl font-bold">Diseño Web</h2>
            </div>
            <p className="service-description text-gray-300 mt-2">
              Diseños personalizados y adaptados a tus necesidades, con un enfoque en usabilidad y atractivo visual.
            </p>
          </article>
          <article className="service bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="service-header flex items-center space-x-4">
              <CodeIcon fontSize="large" className="text-green-400" />
              <h2 className="service-title text-3xl font-bold">Desarrollo Web</h2>
            </div>
            <p className="service-description text-gray-300 mt-2">
              Desarrollo de aplicaciones web dinámicas, optimizadas y escalables, utilizando las últimas tecnologías del mercado.
            </p>
          </article>
          <article className="service bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="service-header flex items-center space-x-4">
              <TrendingUpIcon fontSize="large" className="text-yellow-400" />
              <h2 className="service-title text-3xl font-bold">SEO & Performance</h2>
            </div>
            <p className="service-description text-gray-300 mt-2">
              Optimización para motores de búsqueda (SEO) y velocidad extrema para que tu página cargue en menos de un segundo.
            </p>
          </article>
          <article className="service bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="service-header flex items-center space-x-4">
              <SecurityIcon fontSize="large" className="text-red-400" />
              <h2 className="service-title text-3xl font-bold">Seguridad Digital</h2>
            </div>
            <p className="service-description text-gray-300 mt-2">
              Protección contra ataques cibernéticos, implementación de HTTPS, autenticación segura y prevención de vulnerabilidades.
            </p>
          </article>
          <article className="service bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="service-header flex items-center space-x-4">
              <AutoAwesomeIcon fontSize="large" className="text-purple-400" />
              <h2 className="service-title text-3xl font-bold">Automatización & IA</h2>
            </div>
            <p className="service-description text-gray-300 mt-2">
              Uso de Inteligencia Artificial y automatización para mejorar procesos, desde chatbots hasta análisis de datos avanzados.
            </p>
          </article>
        </motion.section>

        <motion.div className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h2 className="text-4xl font-bold mb-4">¿Listo para llevar tu marca al siguiente nivel?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            Contactame hoy y hagamos algo increíble juntos.
          </p>
          <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-bold transition-transform transform hover:scale-105">Hablemos</a>
        </motion.div>
      </main>
    </>
  );
};