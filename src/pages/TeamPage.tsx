import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Rocket,
  Heart,
  Globe,
  Users,
  Code2,
  Handshake,
  Award,
  Star,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const TeamPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const coreTeam = [
    {
      name: "Athar Ramzan",
      role: "Founder & CEO",
      category: "leadership",
      bio: "Passionate about open source and community building. Committed to building a more inclusive and diverse tech community with a vision to democratize technology education globally.",
      avatar: "https://devpalsai.netlify.app/athar.jpg",
      location: "Kashmir, India",
      expertise: ["Community Building", "Open Source Strategy", "Leadership"],
      achievements: [
        "Founded OSW Global Initiative",
        "500+ Community Members",
        "Established OSK Regional Branch",
      ],
      social: {
        github: "https://github.com/oathar",
        linkedin: "https://www.linkedin.com/in/athar-ramzan/",
        twitter: "https://twitter.com",
        email: "eatharg@gmail.com",
      },
    },
    {
      name: "Ayaan Taimur",
      role: "Co-Founder & CTO",
      category: "leadership",
      bio: "Full-stack developer and open source advocate. Loves building scalable solutions and mentoring developers. Passionate about creating technology that makes a difference.",
      avatar: "https://avatars.githubusercontent.com/u/183049832?v=4",
      location: "Kashmir, India",
      expertise: ["Full-Stack Development", "System Architecture", "DevOps"],
      achievements: [
        "100+ Open Source Contributions",
        "Led 10+ Major Projects",
        "Mentored 200+ Developers",
      ],
      social: {
        github: "https://github.com/mat1018",
        linkedin: "https://www.linkedin.com/in/ayaan-taimur/",
        twitter: "https://twitter.com",
        email: "taimurayaan18@gmail.com",
      },
    },
    {
      name: "Agam Kundu",
      role: "Marketing Lead",
      category: "marketing",
      bio: "Leading the OSW marketing initiative. Expert in community outreach and content creation for tech ecosystem development. Building bridges between technology and people.",
      avatar: "/profiles/agam.jpg",
      location: "India",
      expertise: ["Digital Marketing", "Content Strategy", "Community Outreach"],
      achievements: [
        "50+ Marketing Campaigns",
        "Grew Community by 300%",
        "International Partnerships",
      ],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mohammed@opensource-kashmir.org",
      },
    },
  ];

  const teamStats = [
    { icon: Users, number: "15+", label: "Core Team Members" },
    { icon: Code2, number: "500+", label: "Active Contributors" },
    { icon: Globe, number: "50+", label: "Countries" },
    { icon: Award, number: "100+", label: "Projects" },
  ];

  const categories = [
    { id: "all", label: "All Team", icon: Users },
    { id: "leadership", label: "Leadership", icon: Rocket },
    { id: "development", label: "Development", icon: Code2 },
    { id: "marketing", label: "Marketing", icon: Globe },
    { id: "design", label: "Design", icon: Star },
  ];

  const filteredTeam =
    activeFilter === "all"
      ? coreTeam
      : coreTeam.filter((member) => member.category === activeFilter);

  const teamValues = [
    {
      icon: Handshake,
      title: "Collaboration First",
      description:
        "We believe in the power of working together, sharing knowledge, and supporting each other's growth.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "Every team member brings unique passion and energy, creating a vibrant and innovative environment.",
      color: "bg-brand-lighter text-brand",
    },
    {
      icon: Rocket,
      title: "Innovation Focused",
      description:
        "We constantly push boundaries, explore new technologies, and challenge conventional thinking.",
      color: "bg-fuchsia-100 text-wine",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description:
        "With team members worldwide, we bring diverse perspectives and create truly global solutions.",
      color: "bg-emerald-100 text-forest",
    },
  ];

  const philosophyPoints = [
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Team members from 50+ countries bringing unique cultural insights",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: Handshake,
      title: "Collaborative Spirit",
      description: "Every voice matters, every contribution counts",
      color: "bg-emerald-100 text-forest",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Constantly pushing boundaries and exploring new possibilities",
      color: "bg-fuchsia-100 text-wine",
    },
    {
      icon: Code2,
      title: "Open Source First",
      description: "Committed to transparency, sharing, and community growth",
      color: "bg-brand-lighter text-brand",
    },
  ];

  const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300 text-stone-500 transition-colors hover:border-brand hover:text-brand dark:border-stone-600 dark:text-stone-400 dark:hover:border-brand dark:hover:text-brand"
    >
      {icon}
    </a>
  );

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
              <Users size={13} className="text-brand" />
              Our people
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Meet our{" "}
              <span className="underline-brush text-brand">amazing team</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              Passionate individuals from around the world working together to
              build the future of open source collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction + Philosophy */}
      <section className="container-page section-pad">
        <SectionHeading
          eyebrow="Who we are"
          title="The people behind Open Source World"
          description="Passionate technologists, innovators, and changemakers — spanning continents, cultures, and skillsets, united by a common vision: make open source accessible to everyone."
        />

        <div className="card rounded-3xl border-2 p-8 sm:p-12">
          <div className="stagger grid gap-8 sm:grid-cols-2">
            {philosophyPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${point.color}`}
                >
                  <point.icon size={18} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 border-t-2 border-stone-200 pt-8 text-center dark:border-stone-700">
            <p className="mx-auto max-w-2xl font-display text-xl font-semibold italic leading-relaxed text-stone-700 dark:text-stone-300">
              &ldquo;Great things happen when talented people come together with
              a shared purpose. The best solutions emerge from different
              perspectives working in harmony.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Team Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {teamStats.map((stat) => (
            <div key={stat.label} className="card card-lift text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-lighter text-brand">
                <stat.icon size={20} />
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

      {/* Team Values */}
      <section className="border-y-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page section-pad">
          <SectionHeading
            eyebrow="Our values"
            title="Team values"
            description="The principles that unite us and drive our collective success."
          />
          <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamValues.map((value) => (
              <div key={value.title} className="card card-lift text-center">
                <span
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${value.color}`}
                >
                  <value.icon size={28} />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">
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

      {/* Core Team Members */}
      <section className="container-page section-pad">
        <SectionHeading
          eyebrow="Core team"
          title="Core team members"
          description="Meet the dedicated individuals leading Open Source World's mission."
        />

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`btn rounded-xl py-2.5 text-sm ${
                activeFilter === category.id
                  ? "bg-stone-900 text-white dark:bg-white dark:text-stone-900"
                  : "bg-transparent text-stone-700 hover:bg-stone-200/60 dark:text-stone-300 dark:hover:bg-stone-800"
              }`}
            >
              <category.icon size={16} />
              {category.label}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="stagger mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTeam.map((member) => (
            <div key={member.name} className="card card-lift overflow-hidden">
              {/* Avatar */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-brand to-brand-hover">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="hidden h-full w-full items-center justify-center font-display text-6xl font-bold text-white"
                  style={{ display: "none" }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-800 backdrop-blur">
                  {member.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{member.name}</h3>
                <p className="mt-0.5 text-sm font-bold text-brand">{member.role}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
                  <MapPin size={12} />
                  {member.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-brand-lighter px-3 py-1 text-xs font-semibold text-brand dark:bg-stone-700 dark:text-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="mt-5">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-white">
                    <Award size={15} className="text-brand" />
                    Key achievements
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-stone-600 dark:text-stone-400">
                    {member.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="mt-5 flex items-center justify-center gap-2 border-t-2 border-stone-200 pt-5 dark:border-stone-700">
                  <SocialLink
                    href={member.social.github}
                    icon={<Github size={17} />}
                    label={`${member.name}'s GitHub`}
                  />
                  <SocialLink
                    href={member.social.linkedin}
                    icon={<Linkedin size={17} />}
                    label={`${member.name}'s LinkedIn`}
                  />
                  <SocialLink
                    href={member.social.twitter}
                    icon={<Twitter size={17} />}
                    label={`${member.name}'s Twitter`}
                  />
                  <SocialLink
                    href={`mailto:${member.social.email}`}
                    icon={<Mail size={15} />}
                    label={`Email ${member.name}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contributors */}
      <section className="border-y-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
        <div className="container-page section-pad">
          <SectionHeading
            eyebrow="Community"
            title="Our amazing contributors"
            description="Every contribution matters! Thank you to all the amazing developers who have helped build Open Source World."
          />

          <div className="card rounded-3xl border-2 p-8 sm:p-12">
            {/* Contributors Image */}
            <a
              href="https://github.com/theopensourceworld/open-source-world/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border-2 border-stone-200 bg-white p-4 dark:border-stone-700 dark:bg-stone-800"
            >
              <img
                src="https://contributors-img.web.app/image?repo=theopensourceworld/open-source-world"
                alt="Contributors to Open Source World"
                className="mx-auto max-w-full h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDQwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2YjczODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+Q29udHJpYnV0b3JzPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            </a>

            {/* Contribution Stats */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <p className="font-display text-4xl font-black text-brand">500+</p>
                <p className="mt-1 text-sm font-medium text-stone-500 dark:text-stone-400">
                  Total Contributors
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-black text-brand">10,000+</p>
                <p className="mt-1 text-sm font-medium text-stone-500 dark:text-stone-400">
                  Commits
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-black text-brand">50+</p>
                <p className="mt-1 text-sm font-medium text-stone-500 dark:text-stone-400">
                  Countries
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://github.com/theopensourceworld/open-source-world/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={18} />
                View all contributors
              </a>
              <a
                href="https://github.com/theopensourceworld/open-source-world"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={18} />
                Contribute now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="container-page section-pad">
        <div className="relative overflow-hidden rounded-3xl border-4 border-stone-900 bg-stone-900 px-6 py-14 text-center dark:border-white sm:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-brand/40 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
          <div className="relative">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/20 text-brand">
              <Rocket size={32} />
            </span>
            <h2 className="mt-6 font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              Want to join our team?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-300">
              We&apos;re always looking for passionate individuals who share our
              vision of building a better world through open source. Whether
              you&apos;re a developer, designer, marketer, or community
              enthusiast, there&apos;s a place for you here.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => {
                  window.location.href = "/#contact";
                }}
                className="btn bg-brand text-white hover:bg-brand-hover"
              >
                Get in touch
                <ArrowUpRight size={17} />
              </button>
              <a
                href="https://github.com/theopensourceworld/open-source-world"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-stone-500 text-white hover:bg-stone-800"
              >
                Start contributing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;