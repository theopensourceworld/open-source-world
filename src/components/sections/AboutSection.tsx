import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaUsers, FaGlobe, FaHeart, FaMountain, FaHandshake } from 'react-icons/fa';
import { itemVariants, containerVariants } from '../../utils/animations';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              About <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Open Source World</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A global initiative connecting developers, fostering innovation, and building 
              the future of technology through open source collaboration.
            </p>
          </motion.div>

          {/* OSW Features */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 text-center group shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:shadow-xl transition-all duration-300">
                  <feature.icon />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* OSK Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Meet <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Open Source Kashmir</span>
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Our regional branch focused on nurturing open source talent and creating 
                opportunities in the beautiful Kashmir valley and surrounding regions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {oskFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 text-xl group-hover:shadow-lg transition-all duration-300">
                    <feature.icon />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">{feature.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Connection Section */}
            <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
              <h4 className="text-2xl font-bold text-black mb-4">
                How OSK Connects with OSW
              </h4>
              <p className="text-gray-800 leading-relaxed max-w-3xl mx-auto">
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
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto text-blue-50">
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