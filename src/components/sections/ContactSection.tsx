import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Github,
  MessageCircle,
  Youtube,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/theopensourceworld",
    icon: Github,
  },
  {
    label: "Discord",
    href: "https://discord.gg/hgnUsqAmMT",
    icon: MessageCircle,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@opensourceworld",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/0pensourceworld/",
    icon: Instagram,
  },
];

const CONTACT_EMAIL = "opensourceworld.fyi@gmail.com";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus("");

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS configuration missing.");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "General inquiry",
          message: formData.message,
          to_name: "Open Source World Team",
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setStatus("Message sent successfully — we'll get back to you within 24 hours!");
      setTimeout(() => {
        setStatus("");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 6000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setIsSubmitting(false);
      setStatus("Failed to send message. Please try again or contact us by email.");
    }
  };

  const isSuccess = status.includes("successfully");
  const isError = status && !status.includes("successfully");

  return (
    <section
      id="contact"
      className="border-t-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40"
    >
      <div className="container-page section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tag">Contact</span>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight">
            Get in touch
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400">
            We&apos;re here for your questions, collaboration, and ideas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="card rounded-3xl border-2 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project, questions, or how you'd like to contribute..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`input resize-none ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>
              {status && (
                <div
                  className={`flex items-center gap-2 rounded-xl border-2 px-4 py-3 text-center text-sm font-semibold ${
                    isSuccess
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400"
                      : isError
                      ? "border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
                      : ""
                  }`}
                >
                  {isSuccess && <CheckCircle2 size={16} className="shrink-0" />}
                  <span className="text-left">{status}</span>
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="card rounded-2xl border-2">
              <h3 className="font-display text-lg font-bold">Contact info</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-lighter text-brand">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sm text-stone-600 hover:text-brand dark:text-stone-400 dark:hover:text-brand"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-forest">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">
                      Based in
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Worldwide — HQ Kashmir, global community
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <Clock size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">
                      Response time
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Within 24 hours
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card rounded-2xl border-2">
              <h3 className="font-display text-lg font-bold">Follow us</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border-2 border-stone-200 p-3 text-sm font-semibold text-stone-700 transition-colors hover:border-brand hover:text-brand dark:border-stone-700 dark:text-stone-300 dark:hover:border-brand dark:hover:text-brand"
                    >
                      <Icon size={16} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;