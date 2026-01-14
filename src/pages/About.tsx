import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
      "Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Sanity and Contentful, enabling non-technical teams to manage content across 6+ production websites.",
      "Delivered high-performance web applications using Next.js, React, and Tailwind CSS with advanced rendering strategies.",
      "Implemented TypeScript across full-stack codebases, reducing production defects by 15%."
    ],
    skills: ["TypeScript", "Next.js", "Sanity CMS", "Contentful", "Tailwind CSS", "Turborepo"]
  },
  {
    period: "JUN 2024 - Present",
    company: "GitHub",
    location: "Open Source Contributor",
    type: "Remote",
    description: [
      "Contributed to open-source projects with 15,000+ Github stars.",
      "Engaged with developer communities, collaborating on innovative solutions.",
      "Maintained documentation and helped onboard new contributors."
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Turborepo"]
  }
];

const rotatingCards = [
  { title: "I Code", image: aayushBlue, rotation: -12 },
  { title: "I Travel", image: travelImg, rotation: 0 },
  { title: "I Lift", image: gymImg, rotation: 12 },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div 
        className="pointer-events-none fixed left-0 z-40 w-full select-none" 
        style={{ 
          top: 0, 
          height: '150px', 
          maskImage: 'linear-gradient(black 50%, transparent)', 
          backdropFilter: 'blur(5px)' 
        }} 
      />
      <Navigation />
      
      <main ref={containerRef} className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="text-sm text-white/50 uppercase tracking-[0.2em]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  MORE ABOUT ME
                </motion.span>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I'm Aayush, a<br />creative <span className="serif-italic text-pink-400">engineer</span>
                </motion.h1>
                <motion.p 
                  className="text-lg text-white/60 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm Aayush Bharti, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code.
                </motion.p>
                <motion.p 
                  className="text-lg text-white/60 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
                </motion.p>
                <motion.p 
                  className="text-lg text-white/60 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  I believe in waking up each day eager to make a difference!
                </motion.p>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {["LinkedIn", "GitHub", "Twitter"].map((s, i) => (
                    <motion.a 
                      key={s} 
                      href="#" 
                      className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {s[0]}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Rotating Cards Stack */}
              <div className="relative h-[450px] flex items-center justify-center perspective-1000">
                {rotatingCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    className="absolute w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 cursor-pointer"
                    initial={{ 
                      rotate: card.rotation, 
                      scale: 0.9,
                      opacity: 0,
                      y: 50
                    }}
                    animate={{ 
                      rotate: card.rotation,
                      scale: 1,
                      opacity: 1,
                      y: 0
                    }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.08, 
                      rotate: 0,
                      zIndex: 10,
                      transition: { duration: 0.3 }
                    }}
                    style={{ 
                      zIndex: 3 - i,
                      transformOrigin: 'bottom center'
                    }}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <span className="text-white font-medium text-lg">{card.title}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-4 py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-sm text-white/50 uppercase tracking-[0.2em]">THE EXPERIENCE</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-3">
                Experience That Brings <span className="serif-italic text-pink-400">Ideas to Life</span>
              </h2>
            </motion.div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:-translate-x-1/2" />
              
              <div className="space-y-16">
                {experiences.map((exp, i) => (
                  <motion.div 
                    key={exp.company} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? '' : 'md:text-right'}`}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-white rounded-full border-4 border-background z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.2, type: "spring" }}
                    />
                    
                    {/* Content */}
                    <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <span className="text-sm text-white/40 font-mono">{exp.period}</span>
                      <h3 className="text-2xl font-semibold text-white mt-2">{exp.company}</h3>
                      <p className="text-white/50 mb-4">{exp.location} {exp.type && `• ${exp.type}`}</p>
                      <ul className={`space-y-2 mb-6 ${i % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                        {exp.description.map((d, j) => (
                          <motion.li 
                            key={j} 
                            className="text-white/60 text-sm flex gap-2"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + j * 0.1 }}
                          >
                            <span className="text-white/30 flex-shrink-0">•</span>
                            <span>{d}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((s, j) => (
                          <motion.span 
                            key={s} 
                            className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-white/50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + 0.3 + j * 0.05 }}
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className={`hidden md:block ${i % 2 === 0 ? 'md:order-2' : ''}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default About;
