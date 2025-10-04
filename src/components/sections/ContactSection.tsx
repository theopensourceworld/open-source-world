import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaCheckCircle,
  FaInstagram,
} from "react-icons/fa";
import { itemVariants, containerVariants } from "../../utils/animations";
import { useTheme } from "../../context/ThemeContext";

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // EmailJS configuration - Using environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/theopensourceworld",
      color: theme === "light" ? "hover:bg-gray-800" : "hover:bg-gray-600",
      description: "Contribute to our projects",
    },
    // LinkedIn link temporarily removed - company page needs to be created
    // {
    //   name: "LinkedIn",
    //   icon: FaLinkedin,
    //   url: "https://linkedin.com/company/open-source-world",
    //   color: "hover:bg-blue-600",
    //   description: "Professional network",
    // },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://discord.gg/gEHBwfDX",
      color: "hover:bg-indigo-600",
      description: "Join our community",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/@opensourceworld",
      color: "hover:bg-red-600",
      description: "Tutorials & talks",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/0pensourceworld/",
      color: "hover:bg-orange-300",
      description: "Community highlights",
    },
  ];

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Check if EmailJS is properly configured
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Open Source World Team', // You can customize this
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className={
        theme === "light"
          ? "section-padding bg-gradient-to-br from-gray-50 to-white"
          : "section-padding bg-secondary-900"
      }
    >
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className={`text-4xl sm:text-5xl font-bold ${
                theme === "light" ? "text-secondary-900" : "text-white"
              } mb-6`}
            >
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Ready to join our mission? Have questions about our initiatives?
              We'd love to hear from you and explore how we can collaborate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div
                className={
                  theme === "light"
                    ? "card p-8 h-full"
                    : "card p-8 bg-[#444b4a] h-full"
                }
              >
                <h3
                  className={
                    theme === "light"
                      ? "text-2xl font-bold text-secondary-900 mb-6"
                      : "text-2xl font-bold text-white mb-6"
                  }
                >
                  Send Message
                </h3>

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
                    <h4
                      className={`text-2xl font-bold mb-4 ${
                        theme === "light" ? "text-secondary-900" : "text-white"
                      }`}
                    >
                      Message Sent!
                    </h4>
                    <p
                      className={
                        theme === "light"
                          ? "text-secondary-600"
                          : "text-gray-200"
                      }
                    >
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={
                          theme === "light"
                            ? "block text-sm font-medium text-secondary-700 mb-2"
                            : "block text-sm font-medium text-white mb-2"
                        }
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={
                          theme === "light"
                            ? `w-full px-4 py-3 border-2 rounded-xl focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                                errors.name
                                  ? "border-red-300"
                                  : "border-gray-200"
                              }`
                            : `w-full px-4 py-3 border-2 rounded-xl focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                                errors.name
                                  ? "border-red-300"
                                  : "border-gray-200"
                              } bg-[#928f96] text-white placeholder:text-white`
                        }
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={
                          theme === "light"
                            ? "block text-sm font-medium text-secondary-700 mb-2"
                            : "block text-sm font-medium text-white mb-2"
                        }
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={
                          theme === "light"
                            ? `w-full px-4 py-3 border-2 rounded-xl focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                                errors.email
                                  ? "border-red-300"
                                  : "border-gray-200"
                              }`
                            : `w-full px-4 py-3 border-2 rounded-xl focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                                errors.email
                                  ? "border-red-300"
                                  : "border-gray-200"
                              } bg-[#928f96] text-white placeholder:text-white`
                        }
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={
                          theme === "light"
                            ? "block text-sm font-medium text-secondary-700 mb-2"
                            : "block text-sm font-medium text-white mb-2"
                        }
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={
                          theme === "light"
                            ? `w-full px-4 py-3 border-2 rounded-xl focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                                errors.message
                                  ? "border-red-300"
                                  : "border-gray-200"
                              }`
                            : `w-full px-4 py-3 border-2 rounded-xl focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                                errors.message
                                  ? "border-red-300"
                                  : "border-gray-200"
                              } bg-[#928f96] text-white placeholder:text-gray-200`
                        }
                        placeholder="Tell us about your project, questions, or how you'd like to contribute..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                        <p className="text-sm">{submitError}</p>
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
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

            {/* Contact Info & Social Links - Takes 1 column */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Info */}
              <div
                className={
                  theme === "light" ? "card p-6" : "card p-6 bg-[#444b4a]"
                }
              >
                <h3
                  className={
                    theme === "light"
                      ? "text-xl font-bold text-secondary-900 mb-6"
                      : "text-xl font-bold text-white mb-6"
                  }
                >
                  Contact Info
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaEnvelope className="text-primary-600 text-sm" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={
                          theme === "light"
                            ? "font-semibold text-secondary-900 text-sm"
                            : "font-semibold text-white text-sm"
                        }
                      >
                        Email
                      </p>
                      <p
                        className={
                          theme === "light"
                            ? "text-secondary-600 text-sm break-all"
                            : "text-gray-200 text-sm break-all"
                        }
                      >
                        opensourceworld.fyi@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="text-primary-600 text-sm" />
                    </div>
                    <div>
                      <p
                        className={
                          theme === "light"
                            ? "font-semibold text-secondary-900 text-sm"
                            : "font-semibold text-white text-sm"
                        }
                      >
                        Global Presence
                      </p>
                      <p
                        className={
                          theme === "light"
                            ? "text-secondary-600 text-sm"
                            : "text-gray-200 text-sm"
                        }
                      >
                        Worldwide Community
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaPhone className="text-primary-600 text-sm" />
                    </div>
                    <div>
                      <p
                        className={
                          theme === "light"
                            ? "font-semibold text-secondary-900 text-sm"
                            : "font-semibold text-white text-sm"
                        }
                      >
                        Response Time
                      </p>
                      <p
                        className={
                          theme === "light"
                            ? "text-secondary-600 text-sm"
                            : "text-gray-200 text-sm"
                        }
                      >
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className={
                  theme === "light" ? "card p-6" : "card p-6 bg-[#444b4a]"
                }
              >
                <h3
                  className={
                    theme === "light"
                      ? "text-xl font-bold text-secondary-900 mb-6"
                      : "text-xl font-bold text-white mb-6"
                  }
                >
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 rounded-xl border-2 hover:border-primary-200 transition-all duration-300 text-center group ${
                        theme === "light"
                          ? "border-gray-100"
                          : "border-gray-600"
                      } ${social.color}`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className={
                            theme === "light"
                              ? "w-8 h-8 bg-[#dbeafe] rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-white transition-colors"
                              : "w-8 h-8 bg-[#dbeafe] rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-gray-200 transition-colors"
                          }
                        >
                          <social.icon size={16} />
                        </div>
                        <div>
                          <p
                            className={
                              theme === "light"
                                ? `font-semibold text-secondary-900 transition-colors text-xs ${
                                    social.name === "GitHub"
                                      ? "group-hover:text-white"
                                      : social.name === "LinkedIn"
                                      ? "group-hover:text-white"
                                      : social.name === "Discord"
                                      ? "group-hover:text-white"
                                      : social.name === "YouTube"
                                      ? "group-hover:text-white"
                                      : ""
                                  }`
                                : "font-semibold text-white text-xs"
                            }
                          >
                            {social.name}
                          </p>
                          <p
                            className={
                              theme === "light"
                                ? `text-xs text-secondary-600 transition-colors ${
                                    social.name === "GitHub"
                                      ? "group-hover:text-white"
                                      : social.name === "LinkedIn"
                                      ? "group-hover:text-white"
                                      : social.name === "Discord"
                                      ? "group-hover:text-white"
                                      : social.name === "YouTube"
                                      ? "group-hover:text-white"
                                      : ""
                                  }`
                                : "text-xs text-gray-200"
                            }
                          >
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
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
