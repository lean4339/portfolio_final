import './spinner.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const glowingTextVariants = {
  initial: { opacity: 0.6, textShadow: '0px 0px 5px rgba(255, 0, 150, 0.8)' },
  animate: {
    opacity: 1,
    textShadow: [
      '0px 0px 10px rgba(255, 0, 150, 1)',
      '0px 0px 20px rgba(255, 255, 0, 1)',
      '0px 0px 30px rgba(0, 255, 150, 1)',
      '0px 0px 10px rgba(255, 0, 150, 1)'
    ],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 2
    }
  }
};

const Banner = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'CREANDO SOFTWARE SIN LÍMITES';

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
    <div className="banner-container flex flex-col items-center justify-center text-center py-20 bg-gray-900 text-white relative">
      {/* Animación de engranaje */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
        className="spinning-gear"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      >
        {/* <circle cx="50" cy="50" r="45" fill="#FDEBD3" />
        <g fill="#F5CBA7">
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="50" y="5" width="6" height="15"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </g>
        <circle cx="50" cy="50" r="20" fill="#F9E79F" /> */}
      </motion.svg>

      {/* Texto animado con efecto neon */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mt-6 uppercase tracking-wide text-center"
        variants={glowingTextVariants}
        initial="initial"
        animate="animate"
      >
        {animatedText}
      </motion.h1>
      
      {/* Subtítulo con animación graffiti LED */}
      <motion.p
        className="text-lg md:text-xl font-semibold text-gray-400 mt-4 uppercase tracking-widest"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.span
          className="text-neon"
          animate={{
            color: ['#ff0055', '#ffcc00', '#00ffcc', '#ff0055'],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Transformando ideas en software brutal
        </motion.span>
      </motion.p>
    </div>
  );
};

export default Banner;
