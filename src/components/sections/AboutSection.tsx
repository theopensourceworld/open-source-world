import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaUsers, FaGlobe } from "react-icons/fa";
import { itemVariants, containerVariants } from "../../utils/animations";
import { useTheme } from "../../context/ThemeContext";

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();

  const features = [
    {
      icon: FaCode,
      title: "Open Source First",
      description:
        "We believe in the power of open source software to drive innovation and collaboration across the globe.",
    },
    {
      icon: FaUsers,
      title: "Global Community",
      description:
        "Connect with developers, designers, and tech enthusiasts from every corner of the world.",
    },
    {
      icon: FaGlobe,
      title: "Worldwide Impact",
      description:
        "Our projects and initiatives span across continents, making a real difference in communities everywhere.",
    },
  ];

  const sectionBg =
    theme === "light"
      ? "section-padding bg-gradient-to-br from-[#f8fafc] to-[#e8f4fd]"
      : "section-padding bg-gradient-to-br from-[#0a0e14] to-[#1a2332]";

  const cardBg =
    theme === "light"
      ? "bg-white shadow-lg hover:shadow-xl border border-[#e2e8f0]"
      : "bg-[#1a2332] shadow-lg hover:shadow-2xl border border-[#334155]";

  const textPrimary = theme === "light" ? "text-[#1a2332]" : "text-white";
  const textSecondary = theme === "light" ? "text-[#64748b]" : "text-[#94a3b8]";
  const textGradient =
    "bg-gradient-to-r from-[#1f84d6] to-[#3b9df0] bg-clip-text text-transparent";

  return (
    <section id='about' className={sectionBg}>
      <div className='container-max px-4' ref={ref}>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 sm:mb-16'>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${textPrimary}`}>
              About <span className={textGradient}>Open Source World</span>
            </h2>
            <p
              className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed ${textSecondary}`}>
              A global initiative connecting developers, fostering innovation,
              and building the future of technology through open source
              collaboration.
            </p>
          </motion.div>

          {/* OSW Features */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${cardBg} p-6 sm:p-8 text-center group rounded-2xl transition-all duration-300`}>
                <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1f84d6] to-[#073f70] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl group-hover:shadow-xl transition-all duration-300'>
                  <feature.icon />
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${textPrimary}`}>
                  {feature.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${textSecondary}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className='text-center mt-12 sm:mt-16'>
            <div className='bg-gradient-to-r from-[#073f70] to-[#1f84d6] rounded-3xl p-8 sm:p-12 text-white shadow-2xl'>
              <h3 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>
                Our Mission
              </h3>
              <p className='text-base sm:text-xl leading-relaxed max-w-4xl mx-auto'>
                To democratize technology education, foster innovation through
                collaboration, and create sustainable opportunities for
                developers worldwide while maintaining strong local roots and
                global perspectives.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
