import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaHeart, FaGlobe, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'About OSW', href: '#about' },
      { name: 'Our Mission', href: '#about' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ],
    community: [
      { name: 'Join Community', href: '#contact' },
      { name: 'Contribute', href: 'https://github.com/theopensourceworld/open-source-world', external: true },
      { name: 'Our Initiatives', href: '#initiatives' },
      { name: 'Newsletter', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: 'https://github.com/theopensourceworld/open-source-world', external: true },
      { name: 'GitHub', href: 'https://github.com/theopensourceworld/open-source-world', external: true },
      { name: 'Blog', href: '#' },
      { name: 'Events', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/theopensourceworld' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/open-source-world' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/opensourceworld' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com/@opensourceworld' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to Top Button */}
      <div className="bg-gray-800 py-3 sm:py-4 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center justify-center w-full py-2 sm:py-3 text-gray-300 hover:text-white transition-colors duration-300 min-h-[44px] text-sm sm:text-base"
          >
            <FaArrowUp className="mr-2" />
            Back to Top
          </motion.button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <FaGlobe size={20} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Open Source World</h3>
                  <p className="text-blue-400 text-xs sm:text-sm font-medium">Global Innovation Community</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Connecting developers worldwide through open source collaboration. 
                Building the future of technology together, one commit at a time.
              </p>

              <div className="flex items-center space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md min-w-[44px] min-h-[44px]"
                  >
                    <social.icon size={18} className="text-gray-300 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left text-sm sm:text-base min-h-[44px]"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Community Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Community</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left text-sm sm:text-base min-h-[44px]"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left text-sm sm:text-base min-h-[44px]"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700"
        >
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Stay Connected</h4>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Get the latest updates on open source projects, community events, and opportunities directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base min-h-[48px]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base min-h-[48px]"
              >
                <FaEnvelope />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 sm:py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 text-xs sm:text-sm text-center md:text-left"
            >
              <span>© {currentYear} Open Source World. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>by the OSW community</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400"
            >
              <button 
                onClick={() => window.open('/privacy-policy', '_blank')}
                className="hover:text-blue-400 transition-colors duration-300 min-h-[44px]"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.open('/terms-of-service', '_blank')}
                className="hover:text-blue-400 transition-colors duration-300 min-h-[44px]"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => window.open('/code-of-conduct', '_blank')}
                className="hover:text-blue-400 transition-colors duration-300 min-h-[44px]"
              >
                Code of Conduct
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;