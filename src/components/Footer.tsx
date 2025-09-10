import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaHeart, FaGlobe, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
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
      { name: 'Contribute', href: 'https://github.com/oathar/open-source-world', external: true },
      { name: 'OSK Initiative', href: '#about' },
      { name: 'Newsletter', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: 'https://github.com/oathar/open-source-world', external: true },
      { name: 'GitHub', href: 'https://github.com/oathar/open-source-world', external: true },
      { name: 'Blog', href: '#' },
      { name: 'Events', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/oathar/open-source-world' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/company/open-source-world' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/opensourceworld' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com/@opensourceworld' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Back to Top Button */}
      <div className="bg-secondary-800 py-4">
        <div className="container-max">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center justify-center w-full py-3 text-white/80 hover:text-white transition-colors"
          >
            <FaArrowUp className="mr-2" />
            Back to Top
          </motion.button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                  <FaGlobe size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Open Source World</h3>
                  <p className="text-primary-400 text-sm">Global Innovation Community</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Connecting developers worldwide through open source collaboration. 
                Building the future of technology together, one commit at a time.
              </p>

              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors duration-300"
                  >
                    <social.icon size={20} />
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
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-primary-400 transition-colors duration-300 text-left"
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
              <h4 className="text-lg font-semibold mb-6">Community</h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/70 hover:text-primary-400 transition-colors duration-300 text-left"
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
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/70 hover:text-primary-400 transition-colors duration-300 text-left"
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
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Get the latest updates on open source projects, community events, and opportunities directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition"
                >
                  <FaEnvelope className="mr-2" aria-hidden="true" />
                  <span>Subscribe</span>
              </motion.button>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary-950 py-6">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-white/70 mb-4 md:mb-0"
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
              className="flex items-center space-x-6 text-sm text-white/70"
            >
              <button 
                onClick={() => window.open('/privacy-policy', '_blank')}
                className="hover:text-primary-400 transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.open('/terms-of-service', '_blank')}
                className="hover:text-primary-400 transition-colors text-left"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => window.open('/code-of-conduct', '_blank')}
                className="hover:text-primary-400 transition-colors text-left"
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
