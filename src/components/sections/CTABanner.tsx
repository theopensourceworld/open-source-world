import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTABanner: React.FC = () => {
  return (
    <section className="container-page section-pad">
      <div className="relative overflow-hidden -rotate-0 rounded-3xl border-4 border-stone-900 bg-stone-900 px-6 py-16 text-center dark:border-white sm:px-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>
        <div className="relative">
          <span className="tag !border-stone-600 !bg-stone-800 !text-stone-200">
            Your move
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to ship your{" "}
            <span className="text-brand">first PR</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-300">
            Join us and get support from day one — no experience required, just
            a willingness to try.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn bg-brand text-white hover:bg-brand-hover"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </button>
            <a
              href="https://github.com/theopensourceworld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-stone-500 text-white hover:bg-stone-800"
            >
              Explore on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;