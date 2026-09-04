import React from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import TeamSection from "../components/sections/TeamSection";
import CTABanner from "../components/sections/CTABanner";
import ContactSection from "../components/sections/ContactSection";

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />

      {/* Stats bar */}
      <section className="border-b-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {[
            { value: "500+", label: "Contributors" },
            { value: "100+", label: "Projects" },
            { value: "50+", label: "Countries" },
            { value: "1000+", label: "Community members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-black text-brand">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AboutSection />
      <TeamSection />
      <CTABanner />
      <ContactSection />
    </main>
  );
};

export default HomePage;