import { Element } from "react-scroll";
import { motion } from "framer-motion";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import WebIcon from "@mui/icons-material/Web";
import DevicesIcon from "@mui/icons-material/Devices";
import LayersIcon from "@mui/icons-material/Layers";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Experience = () => {
  return (
    <>
      <Element name="/experiencia" />
      <main className="experience-container min-h-screen bg-black text-white px-6 md:px-16 py-20">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 uppercase tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experiencia & Stack Tecnológico
        </motion.h1>

        <motion.section className="experience-section max-w-4xl mx-auto mb-12"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Resumen</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Desde 2019, he trabajado con múltiples tecnologías, desarrollando aplicaciones web dinámicas, sistemas backend robustos y soluciones escalables en la nube.
          </p>
        </motion.section>

        <motion.section className="experience-section max-w-4xl mx-auto mb-12"
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2">Stack Tecnológico</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-300 text-lg">
            <div className="flex flex-col items-center"><CloudIcon fontSize="large" /><span>AWS</span></div>
            <div className="flex flex-col items-center"><DevicesIcon fontSize="large" /><span>React</span></div>
            <div className="flex flex-col items-center"><TerminalIcon fontSize="large" /><span>Node.js</span></div>
            <div className="flex flex-col items-center"><CodeIcon fontSize="large" /><span>JavaScript</span></div>
            <div className="flex flex-col items-center"><CodeIcon fontSize="large" /><span>TypeScript</span></div>
            <div className="flex flex-col items-center"><StorageIcon fontSize="large" /><span>MongoDB</span></div>
            <div className="flex flex-col items-center"><StorageIcon fontSize="large" /><span>MySQL</span></div>
            <div className="flex flex-col items-center"><StorageIcon fontSize="large" /><span>PostgreSQL</span></div>
            <div className="flex flex-col items-center"><WebIcon fontSize="large" /><span>HTML</span></div>
            <div className="flex flex-col items-center"><WebIcon fontSize="large" /><span>CSS</span></div>
            <div className="flex flex-col items-center"><LayersIcon fontSize="large" /><span>Docker</span></div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Experience;
