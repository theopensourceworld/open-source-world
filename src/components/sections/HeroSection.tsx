import React, { use } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaRocket, FaUsers, FaGlobe } from 'react-icons/fa';
import { itemVariants, containerVariants } from '../../utils/animations';
import { ThemeProvider } from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';
const HeroSection: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Using properly typed variants from utils
  const {theme, toggleTheme} = useTheme();
  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden gradient-bg flex items-center"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-16 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-sm"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white"
        >
          {/* Main Logo */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={theme === 'light' ? "w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg cursor-pointer" : "hidden"}
          >
            <FaGlobe size={64} className="text-white" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Open Source
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
              World
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Connecting developers worldwide through open source collaboration. 
            Join our global community and contribute to projects that matter.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12"
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2">
              <FaUsers className="text-green-200" />
              <span className="font-semibold">500+ Contributors</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2">
              <FaGithub className="text-green-200" />
              <span className="font-semibold">100+ Projects</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2">
              <FaRocket className="text-green-200" />
              <span className="font-semibold">50+ Countries</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#about')}
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl text-lg "
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg"
            >
              Join Community
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
