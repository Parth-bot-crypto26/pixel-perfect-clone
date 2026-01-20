import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Copy } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import aayushImg from "@/assets/aayush.webp";
import Globe3D from "./Globe3D";

const techStack = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "CSS", "Motion.dev", 
  "Sanity CMS", "Figma", "Notion", "Markdown", "Node.js", "Express.js", "Redis"
];

const techStack2 = [
  "PostgreSQL", "MongoDB", "Prisma ORM", "Drizzle ORM", "Better Auth", 
  "Turborepo", "TanStack Query", "Zustand", "Expo", "GROQ", "PostHog", "pnpm", "Bun"
];

const techStack3 = [
  "Biome.js", "Git", "GitHub", "GitHub Actions", "Vercel", "Docker", 
  "AWS", "Cloudflare", "Python", "Linux", "Bash", "Ghostty"
];

const techStack4 = [
  "React Native", "Expo Router", "Firebase", "Supabase", "Clerk", 
  "Stripe", "Resend", "Upstash", "Neon", "Planetscale"
];

// Upcoming projects for Inside Scoop
const upcomingProjects = [
  "AI-powered productivity suite launching Q2",
  "Real-time collaboration platform in development",
  "Open source design system coming soon",
  "Developer tools for modern workflows",
  "Cross-platform mobile app framework"
];

// Marquee Row with pause on hover
const MarqueeRow = ({ 
  items, 
  reverse = false,
  isPaused = false 
}: { 
  items: string[], 
  reverse?: boolean,
  isPaused?: boolean 
}) => {
  return (
    <div className="flex overflow-hidden">
      <motion.div 
        className="flex gap-3"
        animate={{ 
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-3 py-1.5 text-sm text-white/60 bg-white/5 rounded-full border border-white/10 whitespace-nowrap hover:bg-white/15 hover:text-white/90 transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/24.jpg",
  "https://randomuser.me/api/portraits/women/35.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
];

// Tilt card component with 3D effect
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(15px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

// Inside Scoop Marquee with blur reveal
const InsideScoopMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full bg-card/80 rounded-[2rem] border border-white/10 overflow-hidden cursor-pointer group"
    >
      {/* Blur overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-md z-10 flex items-center justify-center"
        animate={{ 
          opacity: isHovered ? 0 : 1,
          backdropFilter: isHovered ? 'blur(0px)' : 'blur(8px)'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-sm">Inside Scoop</span>
          <span className="text-white/60 text-xs">Hover to reveal</span>
        </div>
      </motion.div>
      
      {/* Marquee content */}
      <div className="h-full flex flex-col justify-center py-4 gap-3 px-4">
        {upcomingProjects.map((project, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0.3, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <span className="text-pink-400 text-lg">✦</span>
            <span className="text-white/70 text-sm">{project}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Let's Work Together Card with animation
const LetsWorkCard = () => {
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@aayushbharti.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <motion.div
      className="h-full bg-gradient-to-br from-purple-900/30 via-card to-pink-900/20 rounded-[2rem] border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative"
      whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
    >
      {/* Animated gradient orb */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div>
        <motion.span 
          className="text-sm text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Available for work
        </motion.span>
        <h3 className="text-xl font-semibold text-white mt-2 mb-3">
          Let's work <span className="serif-italic text-pink-400">together</span>
        </h3>
      </div>
      
      <div className="space-y-3">
        <motion.button
          onClick={copyEmail}
          className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-left transition-all group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-white/70 text-sm truncate">hello@aayushbharti.in</span>
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span 
                key="copied"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-green-400 text-xs"
              >
                Copied!
              </motion.span>
            ) : (
              <motion.div
                key="copy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Copy className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Book a call
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  const [techHovered, setTechHovered] = useState(false);
  const [profileHovered, setProfileHovered] = useState(false);

  return (
    <section className="relative z-10 px-4 py-20 -mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Bento Grid - Symmetrical Layout */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
          
          {/* Row 1: Collaboration (3) + Tech Stack (6) + Inside Scoop (3) */}
          
          {/* Collaboration Card - Left */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setProfileHovered(true)}
              onMouseLeave={() => setProfileHovered(false)}
              className="h-full bg-card rounded-[2rem] p-6 border border-white/10 flex flex-col hover:border-white/20 transition-all duration-300 overflow-hidden relative"
            >
              {/* Profile that appears on hover */}
              <div className="flex-1 flex items-center justify-center relative">
                <motion.div
                  className="relative"
                  animate={{ scale: profileHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={aayushImg}
                    alt="Aayush Bharti"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white/10"
                    animate={{ 
                      opacity: profileHovered ? 1 : 0.7,
                      filter: profileHovered ? 'grayscale(0)' : 'grayscale(0.3)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20"
                    animate={{ 
                      opacity: profileHovered ? 1 : 0,
                      scale: profileHovered ? 1.3 : 1 
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ filter: 'blur(20px)' }}
                  />
                </motion.div>
              </div>
              
              {/* Stacked Avatars */}
              <div className="flex -space-x-3 justify-center mb-4">
                {avatars.map((avatar, i) => (
                  <motion.img
                    key={i}
                    src={avatar}
                    alt="Connection"
                    className="w-8 h-8 rounded-full border-2 border-card object-cover"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                  />
                ))}
              </div>
              
              <h3 className="text-lg font-semibold text-white text-center mb-1">
                Collaboration
              </h3>
              <p className="text-xs text-white/50 text-center">
                I prioritize client collaboration
              </p>
            </motion.div>
          </TiltCard>

          {/* Tech Stack Card - Center Wide */}
          <TiltCard className="col-span-12 lg:col-span-6 row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={() => setTechHovered(true)}
              onMouseLeave={() => setTechHovered(false)}
              className="h-full bg-card rounded-[2rem] p-6 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                Passionate about <span className="serif-italic text-pink-400">cutting-edge</span> technologies
              </h3>
              <p className="text-white/50 text-sm mb-4">Always learning, always building</p>
              
              <div className="space-y-2.5">
                <MarqueeRow items={techStack} isPaused={techHovered} />
                <MarqueeRow items={techStack2} reverse isPaused={techHovered} />
                <MarqueeRow items={techStack3} isPaused={techHovered} />
                <MarqueeRow items={techStack4} reverse isPaused={techHovered} />
              </div>
            </motion.div>
          </TiltCard>

          {/* Inside Scoop - Right */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
            <InsideScoopMarquee />
          </TiltCard>

          {/* Row 2: Globe (6) + Let's Work (3) + Remote (3) */}
          
          {/* Globe/Timezone Card - Left Wide */}
          <TiltCard className="col-span-12 lg:col-span-6 row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full bg-card rounded-[2rem] p-6 border border-white/10 flex flex-col items-center justify-center hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-white mb-1 text-center">
                I'm very flexible with <span className="serif-italic text-pink-400">time zone</span> communications
              </h3>
              <p className="text-white/50 text-xs mb-3 text-center">Click on markers to see locations</p>
              
              <div className="flex-1 flex items-center justify-center w-full min-h-[200px]">
                <Globe3D />
              </div>
              
              <div className="flex gap-2 mt-3 flex-wrap justify-center">
                {[
                  { flag: "🇬🇧", name: "UK" },
                  { flag: "🇮🇳", name: "India" },
                  { flag: "🇺🇸", name: "USA" }
                ].map((loc) => (
                  <span 
                    key={loc.name}
                    className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs text-white/70 flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                  >
                    <span>{loc.flag}</span> {loc.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </TiltCard>

          {/* Let's Work Together */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
            <LetsWorkCard />
          </TiltCard>

          {/* Remote Card */}
          <TiltCard className="col-span-12 md:col-span-6 lg:col-span-3 row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-full bg-gradient-to-br from-card to-emerald-900/10 rounded-[2rem] p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <motion.div 
                    className="w-2.5 h-2.5 bg-green-500 rounded-full"
                    animate={{ 
                      boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.4)', '0 0 0 10px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-white/50 uppercase tracking-wider">Available</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Remote</h3>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">India</span>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors group mt-4"
              >
                Connect now
                <motion.div whileHover={{ x: 3, y: -3 }}>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;