import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aayushBlue from "@/assets/aayush-blue.webp";
import travelImg from "@/assets/travel.webp";
import gymImg from "@/assets/gym.webp";

const experiences = [
  {
    period: "JAN 2025 - Present",
    company: "Roboto Studio",
    location: "London Area, United Kingdom",
    type: "Remote work",
    description: [
      "Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Sanity and Contentful.",
      "Delivered high-performance web applications using Next.js, React, and Tailwind CSS with advanced rendering strategies.",
      "Implemented TypeScript across full-stack codebases, reducing production defects by 15%."
    ],
    skills: ["TypeScript", "Next.js", "Sanity CMS", "Contentful", "Tailwind CSS", "Turborepo"]
  },
  {
    period: "JUN 2024 - Present",
    company: "Github",
    location: "Remote job",
    type: "",
    description: [
      "Contributed to open-source projects with 15,000+ Github stars.",
      "Engaged with developer communities, collaborating on innovative solutions."
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Turborepo"]
  }
];

const rotatingCards = [
  { title: "I Code", image: aayushBlue },
  { title: "I Travel", image: travelImg },
  { title: "I Lift", image: gymImg },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed left-0 z-40 w-full select-none" style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} />
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-sm text-white/50 uppercase tracking-wider">MORE ABOUT ME</span>
                <h1 className="text-4xl md:text-5xl font-light text-white mt-2 mb-8">
                  I'm Aayush, a creative <span className="serif-italic text-pink-400">engineer</span>
                </h1>
                <p className="text-lg text-white/70 mb-6">
                  I'm Aayush Bharti, a proactive full-stack developer passionate about creating dynamic web experiences.
                </p>
                <p className="text-lg text-white/70 mb-6">
                  When I'm not immersed in work, I'm exploring new ideas and staying curious.
                </p>
                <p className="text-lg text-white/70 mb-8">
                  I believe in waking up each day eager to make a difference!
                </p>
                <div className="flex gap-3">
                  {["LinkedIn", "GitHub", "Twitter"].map((s) => (
                    <a key={s} href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-white transition-colors">
                      {s[0]}
                    </a>
                  ))}
                </div>
              </motion.div>
              
              {/* Rotating Cards */}
              <div className="relative h-[400px] flex items-center justify-center">
                {rotatingCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    className="absolute w-64 h-80 rounded-2xl overflow-hidden border border-white/10"
                    initial={{ rotate: (i - 1) * 15, scale: 0.9 }}
                    animate={{ rotate: (i - 1) * 15 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    style={{ zIndex: 3 - i }}
                  >
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-4 text-white font-medium">{card.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
              <span className="text-sm text-white/50 uppercase tracking-wider">THE EXPERIENCE</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
                Experience That Brings <span className="serif-italic text-pink-400">Ideas to Life</span>
              </h2>
            </motion.div>
            
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div key={exp.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="relative pl-8 border-l border-white/20">
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-white rounded-full" />
                  <span className="text-sm text-white/50">{exp.period}</span>
                  <h3 className="text-2xl font-semibold text-white mt-1">{exp.company}</h3>
                  <p className="text-white/60 mb-4">{exp.location} {exp.type && `• ${exp.type}`}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((d, j) => (
                      <li key={j} className="text-white/70 text-sm">• {d}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-white/60">{s}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default About;
