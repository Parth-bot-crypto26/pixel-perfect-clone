import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import ExploreSayHello from "@/components/ExploreSayHello";
import GitHubContributionGraph from "@/components/GitHubContributionGraph";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Linkedin, Github, Twitter } from "lucide-react";
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
  { title: "I Code", image: aayushBlue, baseRotation: -15 },
  { title: "I Travel", image: travelImg, baseRotation: 0 },
  { title: "I Lift", image: gymImg, baseRotation: 15 },
];

// Rotating Card Stack Component with auto-rotation
const RotatingCardStack = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingCards.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  const getCardStyles = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = diff === 2 ? -1 : diff === -2 ? 1 : diff;
    
    return {
      rotation: normalizedDiff * 18,
      scale: index === activeIndex ? 1 : 0.9,
      zIndex: index === activeIndex ? 3 : 3 - Math.abs(normalizedDiff),
      x: normalizedDiff * 30,
    };
  };

  return (
    <div 
      className="relative h-[450px] flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {rotatingCards.map((card, i) => {
        const styles = getCardStyles(i);
        
        return (
          <motion.div
            key={card.title}
            className="absolute w-64 h-80 rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/50 cursor-pointer"
            animate={{
              rotate: styles.rotation,
              scale: styles.scale,
              zIndex: styles.zIndex,
              x: styles.x,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 25 
            }}
            onClick={() => setActiveIndex(i)}
            whileHover={{ 
              scale: styles.scale * 1.05,
              transition: { duration: 0.2 }
            }}
            style={{ 
              transformOrigin: 'bottom center'
            }}
          >
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <motion.div 
              className="absolute bottom-6 left-6 right-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white font-semibold text-xl">{card.title}</span>
            </motion.div>
          </motion.div>
        );
      })}
      
      {/* Card indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {rotatingCards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? 'bg-white w-6' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Experience Timeline with scroll-driven line
const ExperienceTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothLineHeight = useSpring(lineHeight, { stiffness: 100, damping: 30 });

  return (
    <div ref={timelineRef} className="relative">
      {/* Background line (static) */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
      
      {/* Animated line (scrolls) */}
      <motion.div 
        className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 md:-translate-x-1/2 origin-top rounded-full"
        style={{ height: smoothLineHeight }}
      />
      
      <div className="space-y-20">
        {experiences.map((exp, i) => (
          <motion.div 
            key={exp.company} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? '' : 'md:text-right'}`}
          >
            {/* Timeline Dot */}
            <motion.div 
              className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-background z-10"
              style={{ backgroundColor: i === 0 ? '#ec4899' : '#8b5cf6' }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
            />
            
            {/* Pulsing ring around dot */}
            <motion.div 
              className="absolute left-0 md:left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 z-5"
              style={{ 
                borderColor: i === 0 ? '#ec4899' : '#8b5cf6',
                top: '8px'
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Content */}
            <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16'}`}>
              <motion.span 
                className="inline-block px-3 py-1 text-xs font-mono bg-white/5 rounded-full border border-white/10 text-white/50 mb-4"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.1 }}
              >
                {exp.period}
              </motion.span>
              
              <h3 className="text-2xl font-semibold text-white mb-2">{exp.company}</h3>
              <p className="text-white/50 text-sm mb-6">{exp.location} • {exp.type}</p>
              
              <ul className={`space-y-3 mb-6 ${i % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                {exp.description.map((d, j) => (
                  <motion.li 
                    key={j} 
                    className={`text-white/60 text-sm flex gap-3 ${i % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + j * 0.1 + 0.2 }}
                  >
                    <span className="text-pink-400/60 flex-shrink-0">✦</span>
                    <span>{d}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className={`flex flex-wrap gap-2 ${i % 2 !== 0 ? 'md:justify-end' : ''}`}>
                {exp.skills.map((s, j) => (
                  <motion.span 
                    key={s} 
                    className="px-3 py-1.5 text-xs bg-white/5 rounded-lg border border-white/10 text-white/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4 + j * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
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
  );
};

const About = () => {
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
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 mb-32">
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
                  {[
                    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/iaayushbharti" },
                    { name: "GitHub", icon: Github, url: "https://github.com/aayushbharti" },
                    { name: "Twitter", icon: Twitter, url: "https://x.com/iaayushbharti" }
                  ].map((s, i) => (
                    <motion.a 
                      key={s.name} 
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <s.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Rotating Cards Stack */}
              <RotatingCardStack />
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
            
            <ExperienceTimeline />
          </div>
        </section>

        {/* Open Source / GitHub Contributions Section */}
        <section className="px-4 py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-sm text-white/50 uppercase tracking-[0.2em]">OPEN SOURCE</span>
              <h2 className="text-4xl md:text-5xl font-light text-white mt-3">
                Building in <span className="serif-italic text-pink-400">Public</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-xl mx-auto">
                Contributing to open-source projects and building tools that help developers worldwide
              </p>
            </motion.div>
            
            <GitHubContributionGraph />
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              {[
                { label: "Total Stars", value: "500+" },
                { label: "Repositories", value: "50+" },
                { label: "Contributions", value: "1.2K+" },
                { label: "Pull Requests", value: "100+" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-card rounded-xl border border-white/10 p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Explore Say Hello Section */}
        <ExploreSayHello />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default About;