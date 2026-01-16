import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import steelFlower from "@/assets/steel-flower.webp";

const skills = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging", "Performant"
];

// Tech icons that orbit and get pulled to the wheel
const techIcons = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Node.js", icon: "⬢", color: "#68a063" },
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "Tailwind", icon: "🎨", color: "#38bdf8" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "MongoDB", icon: "🍃", color: "#4db33d" },
  { name: "Python", icon: "🐍", color: "#ffd43b" },
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
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.6, 0.9, 1.1, 1, 0.8]);
  const wheelGlow = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  
  // Spring for smoother rotation
  const smoothRotate = useSpring(rotate, { stiffness: 50, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  
  // Pull animation - icons get sucked into the wheel
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsInView(latest > 0.2 && latest < 0.8);
      // Calculate pull progress (0 = scattered, 1 = pulled to center)
      if (latest < 0.3) {
        setPullProgress(0);
      } else if (latest < 0.5) {
        setPullProgress((latest - 0.3) / 0.2);
      } else if (latest < 0.7) {
        setPullProgress(1);
      } else {
        setPullProgress(1 - (latest - 0.7) / 0.3);
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative z-10 py-32 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Rotating 3D Wheel with Pull Effect */}
          <div ref={wheelRef} className="relative w-80 h-80">
            {/* Outer glow ring */}
            <motion.div 
              className="absolute inset-0 rounded-full"
              style={{
                opacity: wheelGlow,
                background: 'radial-gradient(circle, rgba(147, 112, 219, 0.3) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            
            {/* Main rotating wheel */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ rotate: smoothRotate, scale: smoothScale }}
            >
              {/* Outer ring */}
              <div 
                className="absolute w-72 h-72 rounded-full border border-white/10"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(100, 100, 200, 0.1)'
                }}
              />
              
              {/* Inner ring */}
              <div className="absolute w-56 h-56 rounded-full border border-white/5" />
              
              {/* Center flower */}
              <motion.img
                src={steelFlower}
                alt="Skills Wheel"
                className="w-40 h-40 object-contain relative z-10"
                style={{
                  filter: `drop-shadow(0 0 ${30 + pullProgress * 20}px rgba(147, 112, 219, ${0.3 + pullProgress * 0.3}))`,
                }}
              />
            </motion.div>
            
            {/* Tech icons that get pulled to center */}
            {techIcons.map((tech, i) => {
              const baseAngle = (i / techIcons.length) * Math.PI * 2;
              const outerRadius = 160;
              const innerRadius = 60;
              
              // Calculate position based on pull progress
              const currentRadius = outerRadius - (outerRadius - innerRadius) * pullProgress;
              const spiralOffset = pullProgress * Math.PI * 2; // Spiral in
              const currentAngle = baseAngle + spiralOffset;
              
              const x = Math.cos(currentAngle) * currentRadius;
              const y = Math.sin(currentAngle) * currentRadius;
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute w-12 h-12 flex items-center justify-center bg-card/90 backdrop-blur-sm rounded-full border border-white/20 text-lg font-medium z-20"
                  style={{
                    left: '50%',
                    top: '50%',
                    boxShadow: `0 0 20px ${tech.color}30`,
                  }}
                  animate={{
                    x: x - 24,
                    y: y - 24,
                    scale: 1 - pullProgress * 0.3,
                    opacity: 1 - pullProgress * 0.5,
                    rotate: pullProgress * 360,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    mass: 0.5 + i * 0.1
                  }}
                  whileHover={{ 
                    scale: 1.3, 
                    borderColor: tech.color,
                    boxShadow: `0 0 30px ${tech.color}60`,
                    zIndex: 50
                  }}
                  title={tech.name}
                >
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                </motion.div>
              );
            })}
            
            {/* Particle trail effect when pulling */}
            {pullProgress > 0.3 && pullProgress < 0.9 && (
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: pullProgress }}
              >
                {[...Array(12)].map((_, i) => {
                  const angle = (i / 12) * Math.PI * 2 + pullProgress * Math.PI;
                  const radius = 100 * (1 - pullProgress * 0.5);
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: Math.cos(angle) * radius - 2,
                        y: Math.sin(angle) * radius - 2,
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  );
                })}
              </motion.div>
            )}
          </div>
          
          <div className="text-center md:text-left">
            <motion.span 
              className="text-sm text-white/50 uppercase tracking-[0.2em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              MY SKILLS
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The Secret <span className="serif-italic text-pink-400">Sauce</span>
            </motion.h2>
            <motion.p
              className="text-white/50 mt-6 max-w-md text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Building modern web experiences with cutting-edge technologies and a passion for pixel-perfect design
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Floating Tech Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 mb-12 flex-wrap px-4"
      >
        {techIcons.map((tech, i) => (
          <motion.div 
            key={tech.name}
            className="px-4 py-2.5 bg-card rounded-full border border-white/10 flex items-center gap-2 cursor-default"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.08, 
              borderColor: `${tech.color}80`,
              boxShadow: `0 4px 20px ${tech.color}20`,
              y: -3
            }}
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-white/80 text-sm font-medium">{tech.name}</span>
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
