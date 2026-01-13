import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";
import steelFlower from "@/assets/steel-flower.webp";

const skills = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging"
];

// Tech icons with colors
const techIcons = [
  { name: "Node.js", icon: "⬢", color: "#68a063" },
  { name: "Linux", icon: "🐧", color: "#fcc624" },
];

const SkillsMarquee = ({ reverse = false }: { reverse?: boolean }) => {
  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
  
  return (
    <div className="flex overflow-hidden py-4">
      <div className={`flex gap-8 ${animationClass}`}>
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={`${skill}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90">{skill}</span>
            <Star className="w-4 h-4 md:w-5 md:h-5 text-white/40 fill-white/40" />
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

  return (
    <section ref={containerRef} className="relative z-10 py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Rotating 3D Object - Steel Flower */}
          <motion.div 
            className="relative w-48 h-48"
            style={{ rotate }}
          >
            <img
              src={steelFlower}
              alt="Skills"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(100, 100, 255, 0.3))'
              }}
            />
          </motion.div>
          
          <div>
            <span className="text-sm text-white/50 uppercase tracking-wider">MY SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
              The Secret <span className="serif-italic">Sauce</span>
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Tech Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4 mb-8"
      >
        {techIcons.map((tech) => (
          <div 
            key={tech.name}
            className="px-4 py-2 bg-card rounded-full border border-white/10 flex items-center gap-2"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="text-white">{tech.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Marquee Rows */}
      <div className="space-y-0 border-y border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent py-4">
        <SkillsMarquee />
        <SkillsMarquee reverse />
        <SkillsMarquee />
      </div>
    </section>
  );
};

export default SkillsSection;
