import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import aayushImg from "@/assets/aayush.webp";

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

const BentoGrid = () => {
  return (
    <section className="relative z-10 px-4 py-20 -mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 lg:row-span-2 bg-card rounded-3xl p-6 border border-white/10 flex flex-col"
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
                <img
                  key={i}
                  src={avatar}
                  alt="Connection"
                  className="w-8 h-8 rounded-full border-2 border-card"
                />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-white text-center mb-2">
              Collaboration
            </h3>
            <p className="text-sm text-white/60 text-center mb-4">
              I prioritize client collaboration, fostering open communication
            </p>
            <a
              href="#contact"
              className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-full text-sm text-white transition-colors"
            >
              Book a call
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-card rounded-3xl p-6 border border-white/10 overflow-hidden"
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

          {/* Domain Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 bg-card rounded-3xl p-6 border border-white/10"
          >
            <div className="text-sm text-white/60 mb-2">aayushbharti.in</div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Websites that <span className="serif-italic">Impact.</span>
            </h3>
            <div className="flex gap-2">
              <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                Start
              </a>
              <a href="#work" className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/15 transition-colors">
                Details
              </a>
            </div>
          </motion.div>

          {/* Timezone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 bg-card rounded-3xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-3">
              I'm very flexible with time zone communications
            </h3>
            <div className="flex gap-2 text-2xl mb-4">
              <span>🇬🇧 UK</span>
              <span>🇮🇳 India</span>
              <span>🇺🇸 USA</span>
            </div>
          </motion.div>

          {/* Remote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1 bg-card rounded-3xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-2">Remote</h3>
            <div className="flex items-center gap-2 text-white/60 mb-4">
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </div>
            <a href="#contact" className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors">
              Connect now
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Contact Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 border border-white/10"
          >
            <p className="text-white/60 mb-2">Let's work together on your next project</p>
            <a href="mailto:hello@aayushbharti.in" className="text-xl font-medium text-white hover:text-white/80 transition-colors">
              hello@aayushbharti.in
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;