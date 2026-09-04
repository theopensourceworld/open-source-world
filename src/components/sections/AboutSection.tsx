import React from "react";
import { Lightbulb, GitBranch, Globe, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../SectionHeading";

const features = [
  {
    title: "Open Source First",
    description:
      "We believe in the power of open source software to drive innovation and collaboration across the globe.",
    icon: GitBranch,
    color: "bg-emerald-100 text-forest",
  },
  {
    title: "Global Community",
    description:
      "Connect with developers, designers, and tech enthusiasts from every corner of the world.",
    icon: Globe,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Worldwide Impact",
    description:
      "Our projects and initiatives span across continents, making a real difference in communities everywhere.",
    icon: Rocket,
    color: "bg-fuchsia-100 text-wine",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced developers who guide your open source journey from day one.",
    icon: Lightbulb,
    color: "bg-brand-lighter text-brand",
  },
];

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="container-page section-pad">
      <SectionHeading
        eyebrow="Why OSW"
        title="More than just code"
        description="A community centered on people — mentors, projects, and friendships that carry your career forward."
      />
      <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`card card-lift relative overflow-hidden ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}
            >
              <f.icon size={22} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              {f.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mission statement */}
      <div className="mx-auto mt-20 max-w-3xl text-center">
        <span className="tag">Our mission</span>
        <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Democratizing technology,{" "}
          <span className="underline-brush text-brand">
            one contributor at a time
          </span>
        </h3>
        <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-stone-300">
          We foster innovation through collaboration and create sustainable
          opportunities for developers worldwide — while maintaining strong
          local roots like our Open Source Kashmir (OSK) regional chapter.
        </p>
        <button onClick={() => {
          navigate("/about");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }} className="btn-primary mt-8">
          Learn more about us
          <GitBranch size={17} />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;