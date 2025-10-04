import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { itemVariants, containerVariants } from '../../utils/animations';
import { useTheme } from '../../context/ThemeContext';

const TeamSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();

  const teamMembers = [
    {
      name: "Athar Ramzan",
      role: "Founder & CEO",
      bio: "Passionate about open source and community building. Committed to building a more inclusive and diverse tech community.",
      avatar: "/profiles/athar1.jpg",
      social: {
        github: "https://github.com/oathar",
        linkedin: "https://www.linkedin.com/in/athar-ramzan/",
        twitter: "https://twitter.com",
        email: "eatharg@gmail.com"
      }
    },
    {
      name: "Ayaan Taimur",
      role: " Co-Founder & CTO",
      bio: "Full-stack developer and open source advocate. Loves building scalable solutions and mentoring developers.",
      avatar: "https://avatars.githubusercontent.com/u/183049832?v=4",
      social: {
        github: "https://github.com/mat1018",
        linkedin: "https://www.linkedin.com/in/ayaan-taimur/",
        twitter: "https://twitter.com",
        email: "taimurayaan18@gmail.com"
      }
    },
    {
      name: "Agam Kundu",
      role: "Marketing Lead",
      bio: "Leading the OSW initiative. Expert in community outreach and content creation for tech ecosystem development.",
      avatar: "/profiles/agam.jpg",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mohammed@opensource-kashmir.org"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      bio: "Building bridges between developers worldwide. Passionate about diversity and inclusion in tech.",
      avatar: "/profiles/emily.jpg",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "emily@opensource-world.org"
      }
    },
    {
      name: "David Park",
      role: "Lead Developer",
      bio: "Open source enthusiast with expertise in modern web technologies. Contributor to major OSS projects.",
      avatar: "/profiles/david.jpg",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "david@opensource-world.org"
      }
    },
    {
      name: "Priya Sharma",
      role: "Developer Relations",
      bio: "Connecting developers with opportunities. Background in developer advocacy and technical writing.",
      avatar: "/profiles/priya.jpg",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "priya@opensource-world.org"
      }
    }
  ];

  const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-300 min-w-[44px] min-h-[44px]"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );

  return (
    <section id="team" className={theme === 'light'? "section-padding bg-white": "dark: darkbg"}>
      <div className="container-max px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className={theme === 'light'? "text-3xl sm:text-4xl font-bold mb-4 text-secondary-900": "text-3xl sm:text-4xl font-bold mb-4 text-white"}>
              Meet Our <span className="text-gradient">Amazing Team</span>
            </h2>
            <p className={theme === 'light'? "text-base sm:text-lg text-secondary-600 max-w-2xl mx-auto": "text-base sm:text-lg text-white max-w-2xl mx-auto"}>
              Passionate individuals working together to build the future of open source collaboration.
              Each bringing unique skills and perspectives to our global mission.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={theme === 'light' ? "card p-4 sm:p-6 text-center group overflow-hidden" :  "card bg-[#444b4a] p-4 sm:p-6 text-center text-white group overflow-hidden"}
              >
                {/* Avatar */}
                <div className="relative mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className={theme === 'light' ? "w-full h-full bg-gray-200 flex items-center justify-center text-xl sm:text-2xl font-bold text-gray-600" : "w-full h-full bg-gray-700 flex items-center justify-center text-xl sm:text-2xl font-bold text-white"}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <h3 className={theme === 'light'? 'text-lg sm:text-xl font-bold text-secondary-900 mb-2': "text-lg sm:text-xl font-bold text-white mb-2"}>{member.name}</h3>
                <p className={theme === 'light'? "text-primary-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base": "text-gradient font-semibold mb-3 sm:mb-4 text-sm sm:text-base"}>{member.role}</p>
                <p className={theme === 'light'? "text-secondary-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6": "text-white text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6"}>{member.bio}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <SocialLink 
                    href={member.social.github} 
                    icon={<FaGithub size={16} />}
                    label={`${member.name}'s GitHub`}
                  />
                  <SocialLink 
                    href={member.social.linkedin} 
                    icon={<FaLinkedin size={16} />}
                    label={`${member.name}'s LinkedIn`}
                  />
                  <SocialLink 
                    href={member.social.twitter} 
                    icon={<FaTwitter size={16} />}
                    label={`${member.name}'s Twitter`}
                  />
                  <SocialLink 
                    href={`mailto:${member.social.email}`} 
                    icon={<FaEnvelope size={14} />}
                    label={`Email ${member.name}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12 sm:mt-16">
            <div className={theme === 'light'? "bg-gray-100 p-6 sm:p-8 rounded-2xl inline-block": "dark:darkbg p-6 sm:p-8 rounded-2xl inline-block"}>
              <h3 className={theme === 'light'? "text-2xl sm:text-3xl font-bold text-secondary-900 mb-4 sm:mb-6": "text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6"}>Want to Join Our Team?</h3>
              <p className={theme === 'light'? "text-sm sm:text-base text-secondary-600 mb-4 sm:mb-6 max-w-xl mx-auto": "text-sm sm:text-base text-white mb-4 sm:mb-6 max-w-xl mx-auto" }>
                We're always looking for passionate individuals who share our vision of 
                building a better world through open source technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-base sm:text-lg min-h-[48px] px-6"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;