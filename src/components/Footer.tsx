import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Heart,
  Instagram,
  Send,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Team", to: "/team" },
      { label: "Contact", to: "/#contact" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", to: "https://discord.gg/hgnUsqAmMT" },
      { label: "Contribute", to: "https://github.com/theopensourceworld/open-source-world" },
      { label: "Hacktoberfest", to: "https://hacktoberfest.com/" },
      { label: "OSK Branch", to: "/about" },
    ],
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/theopensourceworld", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/company/open-source-world", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/opensourceworld", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com/@opensourceworld", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/0pensourceworld/", icon: Instagram },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Newsletter state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const EMAILJS_NEWSLETTER_TEMPLATE_ID =
    process.env.REACT_APP_EMAILJS_NEWSLETTER_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address";
    return "";
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }

    setIsSubscribing(true);
    setSubscribeError("");

    try {
      if (
        !EMAILJS_SERVICE_ID ||
        !EMAILJS_NEWSLETTER_TEMPLATE_ID ||
        !EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("EmailJS configuration missing.");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NEWSLETTER_TEMPLATE_ID,
        {
          to_email: "opensourceworld.fyi@gmail.com",
          from_email: email,
          subscriber_email: email,
          to_name: "Open Source World Team",
          subscription_date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          message: `New newsletter subscription from: ${email}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (err) {
      console.error("EmailJS Newsletter Error:", err);
      setIsSubscribing(false);
      setSubscribeError("Failed to subscribe. Please try again later.");
    }
  };

  const handleLinkClick = (to: string) => {
    if (to.startsWith("/#")) {
      const hash = to.substring(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (to.startsWith("http")) {
      window.open(to, "_blank", "noopener noreferrer");
    } else {
      navigate(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t-4 border-brand bg-stone-900 text-stone-300">
      {/* Newsletter band */}
      <div className="border-b border-stone-800">
        <div className="container-page py-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="tag !border-stone-600 !bg-stone-800 !text-stone-200">
                Newsletter
              </span>
              <span className="tag !border-brand/60 !bg-transparent !text-brand">
                Stay connected
              </span>
            </div>

            {isSubscribed ? (
              <div className="mx-auto mt-5 max-w-md rounded-xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Successfully subscribed — welcome aboard!
                </span>
              </div>
            ) : (
              <>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Get the latest from{" "}
                  <span className="text-brand">Open Source World</span>
                </h3>
                <p className="mt-3 text-stone-400">
                  Open source projects, community events, and opportunities —
                  straight to your inbox.
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                      if (subscribeError) setSubscribeError("");
                    }}
                    placeholder="Enter your email"
                    disabled={isSubscribing}
                    aria-label="Email address"
                    className={`flex-1 rounded-full border-2 border-stone-600 bg-stone-800 px-5 py-3 text-sm text-white placeholder:text-stone-500 transition-colors focus:border-brand focus:outline-none ${
                      emailError ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="btn bg-brand text-white hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    {isSubscribing ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Subscribe
                      </>
                    )}
                  </button>
                </form>
                {emailError && (
                  <p className="mt-2 text-sm text-red-400">{emailError}</p>
                )}
                {subscribeError && (
                  <div className="mt-3 rounded-xl border-2 border-red-800 bg-red-950/30 px-4 py-3 text-center text-sm font-semibold text-red-400">
                    {subscribeError}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-page grid gap-12 py-16 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 -rotate-3 items-center justify-center rounded-lg bg-brand text-base font-black text-white">
              <span className="rotate-3">OSW</span>
            </span>
            <span className="font-display text-xl font-bold text-white">
              Open Source World
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
            Empowering developers worldwide to code, collaborate, and contribute
            to global open source projects. A community for everyone — from
            first PRs to leading major initiatives.
          </p>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-lg font-semibold text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.to)}
                    className="text-sm text-stone-400 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-stone-500">
            © {year} Open Source World. Built with{" "}
            <Heart size={13} className="inline text-brand" /> worldwide.
          </p>
          <a
            href="mailto:opensourceworld.fyi@gmail.com"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 transition-colors hover:text-brand"
          >
            <Mail size={14} />
            opensourceworld.fyi@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;