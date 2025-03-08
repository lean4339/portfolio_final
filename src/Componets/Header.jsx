import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkRouter } from 'react-scroll/modules';
import Code from '../assets/icon.png';

export const Header = ({ showMenu, setShowMenu }) => {
  const [isFixed, setIsFixed] = useState(false);

  const links = [
    { id: 2, title: 'Sobre mí' },
    { id: 5, title: 'Experiencia' },
    { id: 1, title: 'Servicios' },
  ];

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50 || showMenu);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMenu]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isFixed || showMenu ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 md:py-6">
        {/* Mobile: Logo y botón */}
        <div className="flex md:hidden items-center justify-between w-full">
          <LinkRouter smooth={true} duration={500} to={'/main'} className="flex items-center text-white text-lg font-bold">
            <img src={Code} alt="code" className="h-10 w-10" />
          </LinkRouter>
          <div className="text-white cursor-pointer hover:scale-110 transition" onClick={handleShowMenu}>
            <MenuIcon fontSize="large" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center w-full justify-between">
          <LinkRouter smooth={true} duration={500} to={'/main'} className="flex items-center text-white text-lg font-bold">
            <img src={Code} alt="code" className="h-10 w-10 mr-4 hover:scale-110 transition" />
          </LinkRouter>
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LinkRouter
                  smooth={true}
                  duration={500}
                  to={`/${link.title.toLowerCase()}`}
                  className="text-white text-lg font-medium hover:text-gray-400 hover:scale-110 transition"
                >
                  {link.title}
                </LinkRouter>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg text-center p-4 md:hidden flex flex-col items-center z-50 shadow-md"
        >
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.id}>
                <LinkRouter
                  smooth={true}
                  duration={500}
                  to={`/${link.title.toLowerCase()}`}
                  className="text-white text-lg font-medium hover:text-gray-400 hover:scale-110 transition"
                  onClick={() => setShowMenu(false)}
                >
                  {link.title}
                </LinkRouter>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};