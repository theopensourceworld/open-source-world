import React from "react";
import { ArrowRight, Users, Quote, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden border-b-4 border-brand pt-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-0 h-80 w-80 -rotate-12 rounded-full bg-brand-lighter blur-3xl dark:bg-brand/10" />
        <div className="absolute bottom-0 -left-20 h-80 w-80 rotate-12 rounded-full bg-emerald-100 blur-3xl dark:bg-forest/10" />
        <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-sky-100 blur-2xl" />
      </div>

      <div className="container-page grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="tag">
            <Sparkles size={13} className="text-brand" />
            A global community for everyone
          </span>

          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Open source,{" "}
            <span className="underline-brush text-brand">made for</span>{" "}
            the world
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Whether you&apos;re fixing your first typo or leading your first
            project, you&apos;ve got a home here. Learn, collaborate, and
            contribute with a global community that&apos;s got your back.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => {
              const el = document.getElementById("about");
              el?.scrollIntoView({ behavior: "smooth" });
            }} className="btn-primary">
              Learn more
              <ArrowRight size={17} />
            </button>
            <button onClick={() => navigate("/team")} className="btn-secondary">
              Meet the team
            </button>
            <a
              href="https://github.com/theopensourceworld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View on GitHub
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["AS", "AY", "AK", "RA", "MK"].map((initials, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-lighter text-xs font-bold text-brand dark:border-night dark:bg-stone-700 dark:text-stone-200"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="flex items-center gap-1 font-bold text-stone-900 dark:text-white">
                1000+ members
              </p>
              <p className="text-stone-500 dark:text-stone-400">
                building together across 50+ countries
              </p>
            </div>
          </div>
        </div>

        {/* Visual - sticky note collage */}
        <div className="animate-fade-up hidden lg:block">
          <div className="relative mx-auto max-w-md">
            {/* OSW sticker */}
            <div className="rotate-3 rounded-xl bg-brand p-6 text-white shadow-lift animate-float">
              <p className="font-display text-2xl font-black">OSW</p>
              <p className="mt-1 text-sm text-white/85">
                Your open source home, worldwide
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Learn", "Build", "Ship"].map((w) => (
                  <div
                    key={w}
                    className="rounded-lg bg-white/15 text-center text-sm font-bold"
                  >
                    {w}
                  </div>
                ))}
              </div>
            </div>

            {/* Quote sticky note */}
            <div className="absolute -bottom-6 -left-10 w-52 -rotate-6 rounded-lg bg-yellow-200 p-4 shadow-lift dark:bg-yellow-300 dark:text-stone-900 animate-wiggle">
              <Quote size={18} className="opacity-40" />
              <p className="mt-1 font-display text-sm font-semibold leading-snug">
                &ldquo;Got my first PR merged in a day.&rdquo;
              </p>
              <p className="mt-2 text-xs font-bold opacity-70">
                — first-time contributor
              </p>
            </div>

            {/* Stats sticker */}
            <div className="absolute -top-4 -right-6 rotate-3 rounded-lg bg-white p-4 shadow-lift dark:bg-stone-800">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-brand" />
                <p className="text-sm font-bold text-stone-900 dark:text-white">
                  100+ open source projects
                </p>
              </div>
            </div>

            {/* Small accent sticker */}
            <div className="absolute top-1/2 -left-8 hidden -rotate-2 rounded-lg bg-emerald-100 px-4 py-2 shadow-lift dark:bg-emerald-900/30 sm:block">
              <p className="font-display text-sm font-bold text-forest dark:text-emerald-300">
                Hacktoberfest-ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;