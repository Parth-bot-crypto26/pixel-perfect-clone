import { motion } from "framer-motion";
import { Star } from "lucide-react";
import steelFlower from "@/assets/steel-flower.webp";

const skills = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging"
];

const SkillsMarquee = ({ reverse = false }: { reverse?: boolean }) => {
  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
  
  return (
    <div className="flex overflow-hidden py-4">
      <div className={`flex gap-8 ${animationClass}`}>
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div key={`${skill}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-2xl md:text-3xl font-light text-white/90">{skill}</span>
            <Star className="w-5 h-5 text-white/40 fill-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="relative z-10 py-20 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Rotating 3D Object */}
          <div className="relative w-48 h-48">
            <img
              src={steelFlower}
              alt="Skills"
              className="w-full h-full object-contain animate-spin-slow"
            />
          </div>
          
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
        <div className="px-4 py-2 bg-card rounded-full border border-white/10 flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded-sm" />
          <span className="text-white">Node.js</span>
        </div>
        <div className="px-4 py-2 bg-card rounded-full border border-white/10 flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-500 rounded-full" />
          <span className="text-white">Linux</span>
        </div>
      </motion.div>

      {/* Marquee Rows */}
      <div className="space-y-0 border-y border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
        <SkillsMarquee />
        <SkillsMarquee reverse />
        <SkillsMarquee />
      </div>
    </section>
  );
};

export default SkillsSection;