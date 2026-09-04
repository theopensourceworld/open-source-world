import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-stone-200 bg-cream/90 backdrop-blur-lg dark:border-stone-800 dark:bg-night/90"
          : "border-b-2 border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 -rotate-3 items-center justify-center rounded-lg bg-brand text-base font-black text-white shadow-md shadow-brand/30">
            <span className="rotate-3">OSW</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-stone-900 dark:text-white">
            Open Source <span className="text-brand">World</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(link.to)
                  ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                  : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={scrollToContact}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isActive("/#contact")
                ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href="https://discord.gg/hgnUsqAmMT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex !px-5 !py-2"
          >
            Join us
            <ArrowUpRight size={16} />
          </a>
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800 md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t-2 border-stone-200 bg-cream dark:border-stone-800 dark:bg-night md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive(link.to)
                    ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                    : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToContact}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors text-left ${
                !isActive("/about") && !isActive("/team")
                  ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                  : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
              }`}
            >
              Contact
            </button>
            <a
              href="https://discord.gg/hgnUsqAmMT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 w-full"
            >
              Join our community
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;