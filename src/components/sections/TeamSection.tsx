import React from "react";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../SectionHeading";

const teamMembers = [
  {
    name: "Athar Ramzan",
    role: "Founder & CEO",
    company: "OSW",
    bio: "Passionate about open source and community building. Committed to building a more inclusive and diverse tech community.",
    avatar: "https://devpalsai.netlify.app/athar.jpg",
    expertise: ["Community", "Strategy", "Leadership"],
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
    company: "OSW",
    bio: "Full-stack developer and open source advocate. Loves building scalable solutions and mentoring developers.",
    avatar: "https://avatars.githubusercontent.com/u/183049832?v=4",
    expertise: ["Full-Stack", "Architecture", "DevOps"],
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
    company: "OSW",
    bio: "Leading the OSW marketing initiative. Expert in community outreach and content creation for tech ecosystem development.",
    avatar: "/profiles/agam.jpg",
    expertise: ["Marketing", "Outreach", "Content"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mohammed@opensource-kashmir.org",
    },
  },
];

const TeamSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="border-y-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40">
      <div className="container-page section-pad">
        <SectionHeading
          eyebrow="Mentorship"
          title="Learn from people who've been there"
          description="Get to know the passionate individuals leading Open Source World's mission."
        />

        <div className="stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="card card-lift text-center">
              <img
                src={member.avatar}
                alt={member.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
                className="mx-auto h-20 w-20 rounded-full border-4 border-white object-cover shadow-md dark:border-stone-700"
              />
              <div
                className="mx-auto hidden h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-brand-lighter font-display text-xl font-bold text-brand shadow-md"
                style={{ display: "none" }}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                {member.role}
              </p>
              <p className="text-sm font-bold text-brand">@ {member.company}</p>

              <p className="mt-4 text-xs leading-relaxed text-stone-500 dark:text-stone-400">
                {member.bio}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {member.expertise.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-cream-deep px-2.5 py-0.5 text-[11px] font-semibold text-stone-600 dark:bg-stone-700 dark:text-stone-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex justify-center gap-2 border-t border-stone-200 pt-5 dark:border-stone-700">
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s GitHub`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-brand hover:text-brand dark:border-stone-600 dark:text-stone-400"
                >
                  <Github size={15} />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-brand hover:text-brand dark:border-stone-600 dark:text-stone-400"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s Twitter`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-brand hover:text-brand dark:border-stone-600 dark:text-stone-400"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  aria-label={`Email ${member.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-500 transition-colors hover:border-brand hover:text-brand dark:border-stone-600 dark:text-stone-400"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => navigate("/team")} className="btn-ghost group inline-flex items-center gap-1.5">
            Meet the full team
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;