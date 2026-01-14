import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useState, useRef } from "react";
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

const MarqueeRow = ({ items, reverse = false, speed = "normal" }: { items: string[], reverse?: boolean, speed?: string }) => {
  const animationClass = reverse ? "animate-marquee-reverse" : speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-3 ${animationClass}`}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-3 py-1.5 text-sm text-white/60 bg-white/5 rounded-full border border-white/10 whitespace-nowrap hover:bg-white/10 hover:text-white/80 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
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
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  const [domainHovered, setDomainHovered] = useState(false);

  return (
    <section className="relative z-10 px-4 py-20 -mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Profile Card with Collaboration */}
          <TiltCard className="lg:col-span-1 lg:row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full bg-card rounded-3xl p-6 border border-white/10 flex flex-col hover:border-white/20 transition-colors"
            >
              <div className="flex-1 flex items-center justify-center mb-6">
                <motion.img
                  src={aayushImg}
                  alt="Aayush Bharti"
                  className="w-36 h-36 rounded-full object-cover border-4 border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Stacked Avatars */}
              <div className="flex -space-x-3 justify-center mb-6">
                {avatars.map((avatar, i) => (
                  <motion.img
                    key={i}
                    src={avatar}
                    alt="Connection"
                    className="w-10 h-10 rounded-full border-2 border-card object-cover"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                Collaboration
              </h3>
              <p className="text-sm text-white/50 text-center mb-6">
                I prioritize client collaboration, fostering open communication
              </p>
              <Link
                to="/contact"
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-full text-sm text-white transition-colors border border-white/10"
              >
                Book a call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </TiltCard>

          {/* Tech Stack Card */}
          <TiltCard className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-full bg-card rounded-3xl p-6 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                Passionate about cutting-edge technologies
              </h3>
              <p className="text-white/50 text-sm mb-4">Always learning, always building</p>
              <div className="space-y-3">
                <MarqueeRow items={techStack} />
                <MarqueeRow items={techStack2} reverse />
                <MarqueeRow items={techStack3} />
                <MarqueeRow items={techStack4} reverse />
              </div>
            </motion.div>
          </TiltCard>

          {/* Domain Card with blur reveal */}
          <TiltCard className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full bg-card rounded-3xl p-6 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all"
              onMouseEnter={() => setDomainHovered(true)}
              onMouseLeave={() => setDomainHovered(false)}
            >
              {/* Blur overlay that reveals on hover */}
              <motion.div 
                className="absolute inset-0 bg-card/80 backdrop-blur-sm z-10 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={{ opacity: domainHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white/60 text-sm">Hover to reveal</span>
              </motion.div>
              
              <div className="text-sm text-white/50 mb-3">aayushbharti.in</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Websites that <span className="serif-italic text-pink-400">Impact.</span>
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Building digital experiences that convert visitors into customers.
              </p>
              <div className="flex gap-2">
                <Link to="/contact" className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                  Start
                </Link>
                <Link to="/work" className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/15 transition-colors">
                  Details
                </Link>
              </div>
            </motion.div>
          </TiltCard>

          {/* Globe/Timezone Card */}
          <TiltCard className="lg:col-span-2 lg:row-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-full min-h-[400px] bg-card rounded-3xl p-6 border border-white/10 flex flex-col items-center justify-center hover:border-white/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2 text-center">
                I'm very flexible with time zone communications
              </h3>
              <p className="text-white/50 text-sm mb-4 text-center">Click on markers to see locations</p>
              <Globe3D />
              <div className="flex gap-3 mt-6 flex-wrap justify-center">
                <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-white/70 flex items-center gap-2">
                  <span>🇬🇧</span> UK
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-white/70 flex items-center gap-2">
                  <span>🇮🇳</span> India
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-white/70 flex items-center gap-2">
                  <span>🇺🇸</span> USA
                </span>
              </div>
            </motion.div>
          </TiltCard>

          {/* Remote Card */}
          <TiltCard className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-full bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-white/50 uppercase tracking-wider">Available</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Remote</h3>
              <div className="flex items-center gap-2 text-white/60 mb-6">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors group"
              >
                Connect now
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </TiltCard>

          {/* Contact Email Card */}
          <TiltCard className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-full bg-gradient-to-br from-card via-card to-purple-900/20 rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-center"
            >
              <p className="text-white/50 mb-3 text-sm">Let's work together on your next project</p>
              <a 
                href="mailto:hello@aayushbharti.in" 
                className="text-lg font-medium text-white hover:text-white/80 transition-colors break-all flex items-center gap-2 group"
              >
                hello@aayushbharti.in
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
