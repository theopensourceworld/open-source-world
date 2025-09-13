import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import { itemVariants, containerVariants } from '../../utils/animations';
import { useTheme } from '../../context/ThemeContext';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Using properly typed variants from utils

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/theopensourceworld',
      color: 'hover:bg-gray-800',
      description: 'Contribute to our projects'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/company/open-source-world',
      color: 'hover:bg-blue-600',
      description: 'Professional network'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/opensourceworld',
      color: 'hover:bg-blue-400',
      description: 'Latest updates'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/@opensourceworld',
      color: 'hover:bg-red-600',
      description: 'Tutorials & talks'
    }
  ];

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className={theme ==='light'? "section-padding bg-gradient-to-br from-gray-50 to-white": "dark: darkbg"}>
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to join our mission? Have questions about our initiatives? 
              We'd love to hear from you and explore how we can collaborate.
            </p>
          </motion.div>

          <div className= "grid grid-cols-1 md:grid-cols-2 gap-12"  >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className={theme === 'light' ? "card p-8" : "card p-8 bg-[#444b4a]"}>
                <h3 className={theme === 'light'? "text-2xl font-bold text-secondary-900 mb-6": "text-2xl font-bold text-white bg-[#444b4a] mb-6"}>Send Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <FaCheckCircle size={40} className="text-primary-600" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-secondary-900 mb-4">Message Sent!</h4>
                    <p className="text-secondary-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={theme === 'light' ? "space-y-6" : "space-y-6 bg-[#444b4a]"}>
                    <div>
                      <label htmlFor="name" className={theme === 'light' ? "block text-sm font-medium text-secondary-700 mb-2" : "block text-sm font-medium text-white mb-2"}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={theme === 'light' ? `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.name ? 'border-red-300' : 'border-gray-200'
                        }` : `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${errors.name ? 'border-red-300' : 'border-gray-200'} bg-[#928f96] text-white placeholder:text-white  
                        ` }
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={theme === 'light' ? "block text-sm font-medium text-secondary-700 mb-2" : "block text-sm font-medium text-white mb-2"}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={theme === 'light' ? `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.email ? 'border-red-300' : 'border-gray-200'
                        }` : `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${errors.email ? 'border-red-300' : 'border-gray-200'} bg-[#928f96] text-white placeholder:text-white
                        `}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className={theme === 'light' ? "block text-sm font-medium text-secondary-700 mb-2" : "block text-sm font-medium text-white mb-2" }>
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={theme === 'light'? `w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                          errors.message ? 'border-red-300' : 'border-gray-200'
                        }`: `w-full px-4 bg-[#928f96]  py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-200 transition-colors resize-none ${
                          errors.message ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Tell us about your project, questions, or how you'd like to contribute..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              {/* Contact Info */}
              <div className={theme === 'light' ? "card p-8" : "card p-8 bg-[#444b4a]"}>
                <h3 className={theme === 'light'? "text-2xl font-bold text-secondary-900 mb-6": "text-2xl font-bold text-white mb-6"}>Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-primary-600" />
                    </div>
                    <div>
                      <p className={theme === 'light'? "font-semibold text-secondary-900": "font-semibold text-white"}>Email</p>
                      <p className={theme === 'light'? "text-secondary-600": "text-gray-200"}>hello@opensource-world.org</p>
                      <p className="font-semibold text-secondary-900">Email</p>
                      <p className="text-secondary-600">opensourceworld.fyi@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary-600" />
                    </div>
                    <div>
                      <p className={theme === 'light'? "font-semibold text-secondary-900": "font-semibold text-white"}>Global Presence</p>
                      <p className={theme === 'light'? "text-secondary-600": "text-gray-200"}>Worldwide Community</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-primary-600" />
                    </div>
                    <div>
                      <p className={theme === 'light'? "font-semibold text-secondary-900": "font-semibold text-white"}>Response Time</p>
                      <p className={theme === 'light'? "text-secondary-600": "text-gray-200"}>Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={theme === 'light' ? "card p-8" : "card p-8 bg-[#444b4a]"}>
                <h3 className={theme === 'light'? "text-2xl font-bold text-secondary-900 mb-6": "text-2xl font-bold text-white mb-6"}>Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-2xl border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 text-center group ${social.color}`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div className={theme === 'light'? "w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-2 text-primary-600 group-hover:bg-white transition-colors": "w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-2 text-primary-600 group-hover:bg-gray-200 transition-colors"}>
                          <social.icon size={24} />
                        </div>
                        <div>
                          <p className={theme === 'light'? "font-semibold text-secondary-900 group-hover:text-white transition-colors": "font-semibold text-white " }>
                            {social.name}
                          </p>
                          <p className={theme === 'light'? "text-sm text-secondary-600 group-hover:text-white transition-colors": "text-sm text-gray-200" }>
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

               {/* Newsletter Subscription */}
  <div className="card p-8 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
    <p className="mb-6 text-primary-100">
      Subscribe to our newsletter for the latest updates, opportunities, and open source insights.
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-xl text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white min-h-[50px]"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors h-[50px]"
      >
        Subscribe
      </motion.button>
    </div>
  </div>
  </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
