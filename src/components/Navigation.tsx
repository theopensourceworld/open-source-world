import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${ 
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-slate-700' 
          : 'bg-transparent border-transparent'
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/30">
              <span className="text-white font-bold text-lg">OSW</span>
            </div>
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              Open Source World
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2, color: '#3b82f6' }}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-slate-300 hover:text-blue-400' 
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#1f84d6',
                boxShadow: '0 10px 25px rgba(31, 132, 214, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className={`font-bold py-3 px-6 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg border border-blue-500'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
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
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
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
        className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700 overflow-hidden"
      >
        <div className="container-max py-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800 rounded-xl transition-colors"
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="block w-full bg-blue-600 text-white hover:bg-blue-500 font-bold py-3 px-4 rounded-xl transition-colors mt-4 shadow-lg"
          >
            Get Involved
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;