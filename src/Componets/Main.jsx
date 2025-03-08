import './spinner.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const glitchVariants = {
  initial: { opacity: 1, textShadow: '0px 0px 2px rgba(255, 255, 255, 0.8)' },
  animate: {
    textShadow: [
      '2px 0px 2px rgba(255, 255, 255, 0.8)',
      '-2px -2px 2px rgba(200, 200, 200, 0.8)',
      '2px 2px 2px rgba(255, 255, 255, 0.8)',
      '-2px -2px 2px rgba(200, 200, 200, 0.8)',
      '2px 0px 2px rgba(255, 255, 255, 0.8)'
    ],
    x: [2, -2, 2, -2, 2],
    y: [-2, 2, -2, 2, -2],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 0.1,
    }
  }
};

const Main = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'SIN LIMITE SIN FRONTERA';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black text-white overflow-hidden px-6 py-12">
      {/* Texto Glitch */}
      <motion.h1
        className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-wide max-w-[90%] sm:max-w-[70%] mx-auto"
        variants={glitchVariants}
        initial="initial"
        animate="animate"
      >
        {animatedText}
      </motion.h1>
      
      {/* Glitch Effect Layers (ahora solo visibles en sm en adelante) */}
      <motion.h1
        className="hidden sm:block absolute text-7xl md:text-8xl font-extrabold uppercase tracking-wide text-gray-400 opacity-50"
        style={{ transform: 'translate(-2px, 2px)' }}
        animate={{ x: [3, -3, 3], y: [-3, 3, -3] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatType: 'loop' }}
      >
        {animatedText}
      </motion.h1>
      
      <motion.h1
        className="hidden sm:block absolute text-7xl md:text-8xl font-extrabold uppercase tracking-wide text-gray-600 opacity-50"
        style={{ transform: 'translate(2px, -2px)' }}
        animate={{ x: [-3, 3, -3], y: [3, -3, 3] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatType: 'loop' }}
      >
        {animatedText}
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="mt-6 text-lg sm:text-xl md:text-3xl font-semibold text-gray-400 uppercase tracking-wide max-w-[85%] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Construyo experiencias digitales innovadoras y funcionales
      </motion.p>
    </div>
  );
};

export default Main;