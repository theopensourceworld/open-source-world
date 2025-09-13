import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaUsers, FaGlobe, FaHeart, FaMountain, FaHandshake } from 'react-icons/fa';
import { itemVariants, containerVariants } from '../../utils/animations';
import { useTheme } from '../../context/ThemeContext';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Using properly typed variants from utils

  const features = [
    {
      icon: FaCode,
      title: "Open Source First",
      description: "We believe in the power of open source software to drive innovation and collaboration across the globe."
    },
    {
      icon: FaUsers,
      title: "Global Community",
      description: "Connect with developers, designers, and tech enthusiasts from every corner of the world."
    },
    {
      icon: FaGlobe,
      title: "Worldwide Impact",
      description: "Our projects and initiatives span across continents, making a real difference in communities everywhere."
    }
  ];

  const oskFeatures = [
    {
      icon: FaMountain,
      title: "Kashmir Focus",
      description: "Dedicated to promoting open source culture and development opportunities in the Kashmir region."
    },
    {
      icon: FaHandshake,
      title: "Local Partnerships",
      description: "Building strong relationships with local institutions, universities, and tech communities."
    },
    {
      icon: FaHeart,
      title: "Community Support",
      description: "Providing mentorship, resources, and opportunities for local developers to thrive."
    }
  ];

    const { theme, toggleTheme } = useTheme();

  return (
    <section id="about" className={theme === 'light' ? "section-padding bg-gradient-to-br from-gray-50 to-white" : "section-padding bg-black from-gray-50 to-white dark: darkbg"}>
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className= "text-center mb-16">
            <h2 className= {theme === 'light' ? "text-4xl sm:text-5xl font-bold text-secondary-900 mb-6 " : "text-4xl sm:text-5xl font-bold mb-6 dark: darkbg"}>
              About <span className="text-gradient">Open Source World</span>
            </h2>
            <p className= {theme === 'light' ? "text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed" : "text-xl max-w-3xl mx-auto leading-relaxed text-white"}>
              A global initiative connecting developers, fostering innovation, and building 
              the future of technology through open source collaboration.
            </p>
          </motion.div>

          {/* OSW Features */}
          <motion.div variants={itemVariants} className={theme === 'light'? "grid grid-cols-1 md:grid-cols-3  gap-8 mb-20": "grid grid-cols-1 md:grid-cols-3  gap-8 mb-20 dark: darkbg"}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className={theme === 'light'? "card p-8 text-center group": "card p-8 text-center group bg-[#444b4a]"}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:shadow-xl transition-all duration-300">
                  <feature.icon />
                </div>
                <h3 className={theme === 'light'? "text-2xl font-bold text-secondary-900 mb-4": "text-2xl font-bold text-gradient mb-4"}>{feature.title}</h3>
                <p className={theme === 'light'? "text-secondary-600 leading-relaxed": "text-white leading-relaxed"}>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* OSK Section */}
          <motion.div variants={itemVariants} className={theme === 'light'? "bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100": "bg-[#444b4a] rounded-3xl p-8 sm:p-12 shadow-xl  "}>
            <div className={theme === 'light'? "text-center mb-12": "text-center mb-12 bg-[#444b4a"}>
              <h3 className={theme === 'light'? "text-3xl font-bold mb-4 text-secondary-900": "text-3xl font-bold mb-4 text-white"}>
                Meet <span className="text-gradient">Open Source Kashmir</span>
              </h3>
              <p className={theme === 'light'? "text-secondary-700 max-w-3xl mx-auto leading-relaxed": "text-white max-w-3xl mx-auto leading-relaxed"}>
                Our regional branch focused on nurturing open source talent and creating 
                opportunities in the beautiful Kashmir valley and surrounding regions.
              </p>
            </div>

            <div className= "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {oskFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-600 text-xl group-hover:shadow-lg transition-all duration-300">
                    <feature.icon />
                  </div>
                  <h4 className={theme === 'light'? "text-xl font-bold text-secondary-900 mb-3": "text-xl font-bold text-gradient mb-3"}>{feature.title}</h4>
                  <p className={theme === 'light'? "text-secondary-600 text-sm leading-relaxed": "text-white text-sm leading-relaxed"}>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Connection Section */}
            <div className= "text-center max-w-3xl mx-auto">
              <h4 className={theme === 'light'? "text-2xl font-bold text-secondary-900 mb-4": "text-2xl font-bold text-gradient mb-4"}>
                How OSK Connects with OSW
              </h4>
              <p className={theme === 'light'? "text-secondary-600 leading-relaxed": "text-white leading-relaxed"}>
                Open Source Kashmir serves as a vital regional hub within the Open Source World ecosystem. 
                While OSW operates on a global scale, OSK focuses on grassroots development, 
                local talent nurturing, and region-specific initiatives that contribute to the larger 
                global open source movement. Together, we're building bridges between local communities 
                and worldwide opportunities.
              </p>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                To democratize technology education, foster innovation through collaboration, 
                and create sustainable opportunities for developers worldwide while maintaining 
                strong local roots and global perspectives.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
