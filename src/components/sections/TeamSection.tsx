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

  // Using properly typed variants from utils
  const { theme, toggleTheme } = useTheme();
  // Sample team members - you can replace with actual team data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Passionate about open source and community building. 10+ years of experience in tech leadership.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "alex@opensource-world.org"
      }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Full-stack developer and open source advocate. Loves building scalable solutions and mentoring developers.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "sarah@opensource-world.org"
      }
    },
    {
      name: "Mohammed Khan",
      role: "OSK Regional Lead",
      bio: "Leading the Kashmir initiative. Expert in community outreach and local tech ecosystem development.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
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
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
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
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
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
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
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
      className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-primary-600 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );

  return (
    <section id="team" className={theme === 'light'? "section-padding bg-white": "dark: darkbg"}>
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={theme === 'light'? "text-4xl font-bold mb-4 text-secondary-900": "text-4xl font-bold mb-4 text-white"}>
              Meet Our <span className="text-gradient">Amazing Team</span>
            </h2>
            <p className={theme === 'light'? "text-lg text-secondary-600 max-w-2xl mx-auto": "text-lg text-white max-w-2xl mx-auto"}>
              Passionate individuals working together to build the future of open source collaboration.
              Each bringing unique skills and perspectives to our global mission.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={theme === 'light' ? "card p-6 text-center group overflow-hidden" :  " card bg-[#444b4a] p-6 text-center text-white group overflow-hidden"}
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className={theme === 'light' ? "w-full h-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600" : "w-full h-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-white"}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <h3 className={theme === 'light'? 'text-xl font-bold text-secondary-900 mb-2': "text-xl font-bold text-white mb-2"}>{member.name}</h3>
                <p className={theme === 'light'? "text-primary-600 font-semibold mb-4": "text-gradient font-semibold mb-4"}>{member.role}</p>
                <p className={theme === 'light'? "text-secondary-600 text-sm leading-relaxed mb-6": "text-white text-sm leading-relaxed mb-6"}>{member.bio}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-3">
                  <SocialLink 
                    href={member.social.github} 
                    icon={<FaGithub size={18} />}
                    label={`${member.name}'s GitHub`}
                  />
                  <SocialLink 
                    href={member.social.linkedin} 
                    icon={<FaLinkedin size={18} />}
                    label={`${member.name}'s LinkedIn`}
                  />
                  <SocialLink 
                    href={member.social.twitter} 
                    icon={<FaTwitter size={18} />}
                    label={`${member.name}'s Twitter`}
                  />
                  <SocialLink 
                    href={`mailto:${member.social.email}`} 
                    icon={<FaEnvelope size={16} />}
                    label={`Email ${member.name}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Team CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className={theme === 'light'? "bg-gray-100 p-8 rounded-2xl inline-block": "dark:darkbg p-8 rounded-2xl inline-block"}>
              <h3 className={theme === 'light'? "text-3xl font-bold text-secondary-900 mb-6": "text-3xl font-bold text-white mb-6"}>Want to Join Our Team?</h3>
              <p className={theme === 'light'? "text-secondary-600 mb-6 max-w-xl mx-auto": "text-white mb-6 max-w-xl mx-auto" }>
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
                className="btn-primary text-lg"
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
