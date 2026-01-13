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

const MarqueeRow = ({ items, reverse = false, speed = "normal" }: { items: string[], reverse?: boolean, speed?: string }) => {
  const animationClass = reverse ? "animate-marquee-reverse" : speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-3 ${animationClass}`}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-3 py-1.5 text-sm text-white/70 bg-white/5 rounded-full border border-white/10 whitespace-nowrap"
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

// Tilt card component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

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
      {children}
    </motion.div>
  );
};

const BentoGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
              className="h-full bg-card rounded-3xl p-6 border border-white/10 flex flex-col"
              onMouseEnter={() => setHoveredCard('profile')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex-1 flex items-center justify-center mb-4">
                <img
                  src={aayushImg}
                  alt="Aayush Bharti"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/10"
                />
              </div>
              <div className="flex -space-x-2 justify-center mb-4">
                {avatars.map((avatar, i) => (
                  <motion.img
                    key={i}
                    src={avatar}
                    alt="Connection"
                    className="w-8 h-8 rounded-full border-2 border-card"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                Collaboration
              </h3>
              <p className="text-sm text-white/60 text-center mb-4">
                I prioritize client collaboration, fostering open communication
              </p>
              <Link
                to="/contact"
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-full text-sm text-white transition-colors"
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
              className="h-full bg-card rounded-3xl p-6 border border-white/10 overflow-hidden"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Passionate about cutting-edge technologies
              </h3>
              <div className="space-y-3">
                <MarqueeRow items={techStack} />
                <MarqueeRow items={techStack2} reverse />
                <MarqueeRow items={techStack3} speed="slow" />
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
              className="h-full bg-card rounded-3xl p-6 border border-white/10 relative overflow-hidden group"
              onMouseEnter={() => setHoveredCard('domain')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-sm text-white/60 mb-2">aayushbharti.in</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Websites that <span className="serif-italic">Impact.</span>
              </h3>
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
              className="h-full bg-card rounded-3xl p-6 border border-white/10 flex flex-col items-center justify-center"
            >
              <h3 className="text-lg font-semibold text-white mb-3 text-center">
                I'm very flexible with time zone communications
              </h3>
              <Globe3D />
              <div className="flex gap-4 mt-4 text-sm">
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">🇬🇧 UK</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">🇮🇳 India</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">🇺🇸 USA</span>
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
              className="h-full bg-card rounded-3xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Remote</h3>
              <div className="flex items-center gap-2 text-white/60 mb-4">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors">
                Connect now
                <ArrowUpRight className="w-4 h-4" />
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
              className="h-full bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 border border-white/10"
            >
              <p className="text-white/60 mb-2">Let's work together on your next project</p>
              <a href="mailto:hello@aayushbharti.in" className="text-lg font-medium text-white hover:text-white/80 transition-colors break-all">
                hello@aayushbharti.in
              </a>
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
