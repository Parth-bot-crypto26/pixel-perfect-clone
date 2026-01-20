import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import steelFlower from "@/assets/steel-flower.webp";

const skills = [
  "Accessible", "Responsive", "Dynamic", "Scalable", "Search Optimized",
  "Interactive", "Secure", "Reliable", "Engaging", "Performant"
];

// Tech icons with actual icon images
const techIcons = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Node.js", icon: "⬢", color: "#68a063" },
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "Tailwind", icon: "🎨", color: "#38bdf8" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "MongoDB", icon: "🍃", color: "#4db33d" },
  { name: "Python", icon: "🐍", color: "#ffd43b" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "AWS", icon: "☁️", color: "#ff9900" },
  { name: "Git", icon: "🔀", color: "#f05032" },
  { name: "Redis", icon: "📦", color: "#dc382d" },
];

const SkillsMarquee = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden py-4">
      <motion.div 
        className="flex gap-8"
        animate={{ 
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
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
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Rotation changes based on scroll direction - both transforms defined at top level
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateValueReverse = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const smoothRotate = useSpring(rotateValue, { stiffness: 30, damping: 30 });
  const smoothRotateReverse = useSpring(rotateValueReverse, { stiffness: 30, damping: 30 });
  
  // Scale the wheel based on scroll
  const wheelScale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.7, 0.9, 1.1, 1, 0.8]);
  const smoothScale = useSpring(wheelScale, { stiffness: 80, damping: 20 });
  
  // Pull progress - icons get pulled to center
  const pullProgress = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const smoothPull = useSpring(pullProgress, { stiffness: 60, damping: 25 });
  
  // Glow intensity
  const glowIntensity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  
  // Get the correct rotation based on scroll direction
  const currentRotation = scrollDirection === 'down' ? smoothRotate : smoothRotateReverse;
  
  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative z-10 py-32 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
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
            className="text-white/50 mt-6 max-w-lg mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Building modern web experiences with cutting-edge technologies
          </motion.p>
        </motion.div>
      </div>

      {/* Centered Wheel Section */}
      <div className="flex justify-center items-center py-16">
        <div ref={wheelRef} className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
          {/* Outer glow ring */}
          <motion.div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              opacity: glowIntensity,
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(147, 112, 219, 0.1) 40%, transparent 70%)',
              filter: 'blur(40px)',
              scale: 1.3,
            }}
          />
          
          {/* Main rotating wheel */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              rotate: currentRotation,
              scale: smoothScale 
            }}
          >
            {/* Outer decorative ring */}
            <div 
              className="absolute w-full h-full rounded-full border border-white/5"
              style={{
                boxShadow: 'inset 0 0 80px rgba(100, 100, 200, 0.05)'
              }}
            />
            
            {/* Middle ring */}
            <div className="absolute w-[80%] h-[80%] rounded-full border border-white/10" />
            
            {/* Inner ring */}
            <div className="absolute w-[60%] h-[60%] rounded-full border border-white/5" />
            
            {/* Center flower */}
            <motion.img
              src={steelFlower}
              alt="Skills Wheel"
              className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.3))',
              }}
            />
          </motion.div>
          
          {/* Tech icons that orbit and get pulled to center - PROPERLY ALIGNED */}
          {techIcons.map((tech, i) => {
            const totalIcons = techIcons.length;
            const baseAngle = (i / totalIcons) * Math.PI * 2 - Math.PI / 2; // Start from top
            
            return (
              <TechIcon 
                key={tech.name}
                tech={tech}
                index={i}
                baseAngle={baseAngle}
                pullProgress={smoothPull}
                scrollDirection={scrollDirection}
              />
            );
          })}
        </div>
      </div>

      {/* Skills Labels Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 mb-12 flex-wrap px-4 max-w-4xl mx-auto"
      >
        {techIcons.slice(0, 8).map((tech, i) => (
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
      </div>
    </section>
  );
};

// Separate component for tech icons with proper positioning
const TechIcon = ({ 
  tech, 
  index, 
  baseAngle, 
  pullProgress,
  scrollDirection 
}: { 
  tech: typeof techIcons[0];
  index: number;
  baseAngle: number;
  pullProgress: any;
  scrollDirection: 'up' | 'down';
}) => {
  const outerRadius = 200; // Distance from center when scattered
  const innerRadius = 70;  // Distance from center when pulled
  
  // Calculate current position based on pull progress
  const currentPull = pullProgress.get ? pullProgress.get() : 0;
  const currentRadius = outerRadius - (outerRadius - innerRadius) * currentPull;
  
  // Add spiral effect when pulling
  const spiralOffset = currentPull * Math.PI * 0.5;
  const currentAngle = baseAngle + (scrollDirection === 'down' ? spiralOffset : -spiralOffset);
  
  const x = Math.cos(currentAngle) * currentRadius;
  const y = Math.sin(currentAngle) * currentRadius;
  
  return (
    <motion.div
      className="absolute w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-full border border-white/20 text-lg font-bold z-20 cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: '-24px',
        marginTop: '-24px',
        boxShadow: `0 0 25px ${tech.color}25`,
      }}
      animate={{
        x: x,
        y: y,
        scale: 1 - currentPull * 0.2,
        opacity: 1 - currentPull * 0.4,
        rotate: currentPull * 180,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 80, 
        damping: 15,
        mass: 0.8
      }}
      whileHover={{ 
        scale: 1.25, 
        borderColor: tech.color,
        boxShadow: `0 0 35px ${tech.color}50`,
        zIndex: 50
      }}
      title={tech.name}
    >
      <span style={{ color: tech.color }} className="text-xl">{tech.icon}</span>
    </motion.div>
  );
};

export default SkillsSection;