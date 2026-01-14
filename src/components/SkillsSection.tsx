import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useMemo } from "react";
import steelFlower from "@/assets/steel-flower.webp";

const skills = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging", "Performant"
];

// Tech icons that orbit the wheel
const techIcons = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Node.js", icon: "⬢", color: "#68a063" },
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "Tailwind", icon: "🎨", color: "#38bdf8" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
];

const SkillsMarquee = ({ reverse = false }: { reverse?: boolean }) => {
  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
  
  return (
    <div className="flex overflow-hidden py-4">
      <div className={`flex gap-8 ${animationClass}`}>
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={`${skill}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
            <motion.span 
              className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80"
              whileHover={{ scale: 1.05, color: "rgba(255,255,255,1)" }}
              transition={{ duration: 0.2 }}
            >
              {skill}
            </motion.span>
            <Star className="w-4 h-4 md:w-5 md:h-5 text-white/30 fill-white/30" />
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative z-10 py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Rotating 3D Object - Steel Flower with orbiting icons */}
          <div className="relative w-64 h-64">
            {/* Main rotating wheel */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ rotate, scale }}
            >
              <img
                src={steelFlower}
                alt="Skills Wheel"
                className="w-48 h-48 object-contain"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(100, 100, 255, 0.3))'
                }}
              />
            </motion.div>
            
            {/* Orbiting tech icons */}
            {techIcons.map((tech, i) => {
              const angle = (i / techIcons.length) * Math.PI * 2;
              const radius = 100;
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute w-10 h-10 flex items-center justify-center bg-card/80 backdrop-blur-sm rounded-full border border-white/10 text-sm"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: Math.cos(angle) * radius - 20,
                    y: Math.sin(angle) * radius - 20,
                  }}
                  whileHover={{ scale: 1.2, borderColor: tech.color }}
                  transition={{ duration: 0.2 }}
                  title={tech.name}
                >
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                </motion.div>
              );
            })}
          </div>
          
          <div>
            <motion.span 
              className="text-sm text-white/50 uppercase tracking-[0.2em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              MY SKILLS
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-light text-white mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The Secret <span className="serif-italic text-pink-400">Sauce</span>
            </motion.h2>
            <motion.p
              className="text-white/50 mt-4 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Building modern web experiences with cutting-edge technologies
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Floating Tech Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 mb-8 flex-wrap px-4"
      >
        {techIcons.map((tech, i) => (
          <motion.div 
            key={tech.name}
            className="px-4 py-2 bg-card rounded-full border border-white/10 flex items-center gap-2 cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, borderColor: `${tech.color}50` }}
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-white/80 text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Marquee Rows */}
      <div className="space-y-0 border-y border-white/10 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent py-2">
        <SkillsMarquee />
        <SkillsMarquee reverse />
        <SkillsMarquee />
      </div>
    </section>
  );
};

export default SkillsSection;
