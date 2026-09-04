import React from "react";
import {
  Code2,
  Users,
  Globe,
  Rocket,
  Handshake,
  Heart,
  MapPin,
  Github,
  BookOpen,
  GitBranch,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      icon: Code2,
      title: "Open Source First",
      description:
        "We believe in the power of open source software to drive innovation and collaboration across the globe. Every project we build is open and accessible.",
      color: "bg-emerald-100 text-forest",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Our community is at the heart of everything we do. We empower developers, designers, and tech enthusiasts to connect, collaborate, and grow together.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "With members from over 50 countries, we're building a truly global movement that transcends borders and brings technology to every corner of the world.",
      color: "bg-fuchsia-100 text-wine",
    },
    {
      icon: Rocket,
      title: "Innovation & Learning",
      description:
        "We foster a culture of continuous learning and innovation, encouraging experimentation and providing resources for skill development.",
      color: "bg-brand-lighter text-brand",
    },
    {
      icon: Handshake,
      title: "Inclusive & Diverse",
      description:
        "We celebrate diversity and create an inclusive environment where everyone, regardless of background or experience level, feels welcome.",
      color: "bg-emerald-100 text-forest",
    },
    {
      icon: Heart,
      title: "Passion & Purpose",
      description:
        "We're driven by passion for technology and the purpose of making a positive impact through open source collaboration and education.",
      color: "bg-brand-lighter text-brand",
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description:
        "Open Source World was founded with a vision to create a global community of developers passionate about open source.",
      icon: Rocket,
    },
    {
      year: "2023",
      title: "Community Growth",
      description:
        "Reached 500+ active contributors from 30+ countries, launched our first major collaborative projects.",
      icon: Users,
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Expanded to 50+ countries, hosted international hackathons, and launched regional chapters like Open Source Kashmir.",
      icon: Globe,
    },
    {
      year: "2025",
      title: "Innovation Hub",
      description:
        "Established innovation programs, mentorship initiatives, and partnerships with leading tech organizations worldwide.",
      icon: Rocket,
    },
  ];

  const stats = [
    { number: "500+", label: "Active Contributors", icon: Users },
    { number: "100+", label: "Open Source Projects", icon: Github },
    { number: "50+", label: "Countries Represented", icon: MapPin },
    { number: "1000+", label: "Community Members", icon: Users },
  ];

  const missionPillars = [
    {
      icon: Globe,
      title: "Democratize Technology",
      description:
        "Make technology education and resources accessible to everyone, regardless of geographic or economic barriers.",
    },
    {
      icon: Handshake,
      title: "Foster Collaboration",
      description:
        "Create spaces and opportunities for developers worldwide to collaborate on meaningful projects that solve real problems.",
    },
    {
      icon: Rocket,
      title: "Drive Innovation",
      description:
        "Encourage experimentation, creativity, and breakthrough thinking in open source development and beyond.",
    },
    {
      icon: Heart,
      title: "Build Community",
      description:
        "Cultivate a supportive, inclusive community where everyone can learn, grow, and contribute to shared success.",
    },
  ];

  const teamCulture = [
    {
      title: "Transparency",
      description:
        "We operate with complete transparency in our processes, decisions, and communications.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      title: "Collaboration",
      description:
        "We believe the best solutions come from diverse perspectives working together.",
      color: "bg-fuchsia-100 text-wine",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to community engagement.",
      color: "bg-emerald-100 text-forest",
    },
    {
      title: "Impact",
      description:
        "We measure success by the positive impact we make on developers and communities worldwide.",
      color: "bg-brand-lighter text-brand",
    },
  ];

  const testimonials = [
    {
      quote:
        "Open Source World transformed my career. I went from a beginner to contributing to major projects, all thanks to this amazing community.",
      author: "Sarah Chen",
      role: "Software Engineer",
      location: "Singapore",
    },
    {
      quote:
        "The mentorship and support I received here is unparalleled. OSW truly lives up to its mission of democratizing technology.",
      author: "Raj Patel",
      role: "Full Stack Developer",
      location: "India",
    },
    {
      quote:
        "Being part of OSW connected me with talented developers from around the world. The collaborative spirit here is incredible.",
      author: "Maria Rodriguez",
      role: "DevOps Engineer",
      location: "Spain",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-4 border-brand pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 right-0 h-80 w-80 -rotate-12 rounded-full bg-brand-lighter blur-3xl dark:bg-brand/10" />
          <div className="absolute bottom-0 -left-20 h-80 w-80 rotate-12 rounded-full bg-emerald-100 blur-3xl dark:bg-forest/10" />
        </div>
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="tag">
              <BookOpen size={13} className="text-brand" />
              About us
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Open source,{" "}
              <span className="underline-brush text-brand">for everyone</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              Building a global community where developers collaborate,
              innovate, and create impact through open source technology — with
              roots in the Kashmir valley.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container-page section-pad">
        <SectionHeading
          eyebrow="Our mission"
          title="Democratizing technology education"
          description="Our mission is to foster innovation through collaboration, and create sustainable opportunities for developers worldwide while maintaining strong local roots and global perspectives."
        />
        <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {missionPillars.map((pillar) => (
            <div key={pillar.title} className="card card-lift text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-lighter text-brand">
                <pillar.icon size={24} />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="border-y-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page section-pad">
          <SectionHeading
            eyebrow="Our values"
            title="Core values"
            description="These fundamental principles guide everything we do and shape our community culture."
          />
          <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title} className="card card-lift">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${value.color}`}
                >
                  <value.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="container-page section-pad">
        <SectionHeading
          eyebrow="Our journey"
          title="From a small idea to a global movement"
          description="Here's how we've grown together."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={item.year} className="card card-lift flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-lighter text-brand">
                    <item.icon size={20} />
                  </span>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-stone-200 dark:bg-stone-700" />
                  )}
                </div>
                <div>
                  <p className="font-display text-2xl font-black text-brand">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y-2 border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lighter text-brand">
                <stat.icon size={18} />
              </span>
              <p className="mt-3 font-display text-4xl font-black text-brand">
                {stat.number}
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="container-page section-pad">
        <SectionHeading
          eyebrow="Our culture"
          title="The principles we work by"
          description="The values that define how we collaborate and grow together as a community."
        />
        <div className="stagger mt-12 grid gap-6 sm:grid-cols-2">
          {teamCulture.map((culture) => (
            <div key={culture.title} className="card card-lift">
              <h3 className="font-display text-2xl font-bold">
                {culture.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-300">
                {culture.description}
              </p>
              <div
                className={`mt-4 flex h-2 w-24 rounded-full ${culture.color}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page section-pad">
          <SectionHeading
            eyebrow="Community voices"
            title="What our members say"
            description="Hear from members of our global community about their experiences with Open Source World."
          />
          <div className="stagger mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.author} className="card card-lift">
                <p className="font-display text-5xl font-black leading-none text-brand/30">
                  &ldquo;
                </p>
                <p className="mt-2 text-sm leading-relaxed italic text-stone-700 dark:text-stone-300">
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-stone-200 pt-4 dark:border-stone-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-lighter font-display text-sm font-bold text-brand">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSK highlight */}
      <section className="container-page section-pad">
        <div className="relative overflow-hidden rounded-3xl border-4 border-stone-900 bg-stone-900 px-6 py-14 text-center dark:border-white sm:px-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-brand/40 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
          <div className="relative">
            <span className="tag !border-brand/60 !bg-transparent !text-brand">
              Open Source Kashmir
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              Our regional chapter in the{" "}
              <span className="text-brand">Kashmir valley</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-stone-300">
              Nurturing open source talent and creating opportunities for the
              next generation of developers in the region.
            </p>
            <a
              href="https://github.com/theopensourceworld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 inline-flex gap-2 border-2 border-stone-500 text-white hover:bg-stone-800"
            >
              <GitBranch size={17} />
              Explore OSK projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;