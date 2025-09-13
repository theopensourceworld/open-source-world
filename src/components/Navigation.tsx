import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';




import '../index.css'
import { P } from 'framer-motion/dist/types.d-Cjd591yU';
import { useTheme } from '../context/ThemeContext';
const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //using the hook 
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    //{ name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (

    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? theme === "light"
            ? "bg-white/95 backdrop-blur-md shadow-lg text-gray-400"
            : "bg-[#939395]"
          : ""
        }`}
    >



      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#hero')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">OSW</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-secondary-900' : 'text-white'
              }`}>
              Open Source World
            </span>

          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors ${isScrolled
                  ? 'text-secondary-700 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
            {/* Theme Toggle */}
            <button onClick={toggleTheme}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className={`btn-primary ${!isScrolled ? 'bg-white text-primary-600 hover:bg-gray-100' : ''
                }`}
            >
              Get Involved
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 overflow-hidden"
      >
        <div className="container-max py-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="block w-full btn-primary mt-4"
          >
            Get Involved
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
