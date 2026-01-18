import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// Tech stack icons mapping
const techIcons: Record<string, string> = {
  "Next.js": "Ⓝ",
  "React": "⚛",
  "TypeScript": "TS",
  "Tailwind CSS": "🌊",
  "Sanity CMS": "🔷",
  "Better Auth": "🔐",
  "GROQ": "g",
  "Sentry": "🛡",
  "Markdown": "M↓",
  "Motion.dev": "🎬",
  "Expo": "📱",
  "Firebase": "🔥",
  "Zod": "⚡",
  "Zustand": "🐻",
  "Node.js": "⬢",
  "Express.js": "E",
  "MongoDB": "🍃",
  "Razorpay": "💳",
  "shadcn-ui": "🎨",
  "PostgreSQL": "🐘",
  "Prisma ORM": "△",
  "FFmpeg": "🎞",
  "Vercel": "▲",
};

export const projects = [
  {
    number: "01",
    type: "Web App",
    title: "Next Ventures",
    slug: "next-venture",
    year: "Q1 2025",
    description: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
    fullDescription: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.2f1e29c9.jpeg&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.16c97575.jpeg&w=1200&q=75",
    tags: ["Next.js", "React", "Sanity CMS", "TypeScript", "Better Auth", "GROQ", "Sentry", "Markdown", "Tailwind CSS", "Motion.dev"],
    color: "#ec4899",
    features: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization."
    ],
    liveUrl: "https://next-venture.vercel.app",
    githubUrl: "https://github.com/aayushbharti/next-venture"
  },
  {
    number: "02",
    type: "Mobile App",
    title: "Finote App",
    slug: "finote",
    year: "Q4 2025",
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health with real-time expense tracking.",
    fullDescription: "A comprehensive mobile application for personal finance management, helping users track expenses, manage multiple wallets, and gain insights into their spending patterns.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.1a837bee.png&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.ef357188.png&w=1200&q=75",
    tags: ["Expo", "TypeScript", "Firebase", "Zod", "Zustand"],
    color: "#8b5cf6",
    features: [
      "Real-time expense tracking and categorization.",
      "Multi-wallet support with unified dashboard.",
      "Interactive charts for financial insights."
    ]
  },
  {
    number: "03",
    type: "Web App",
    title: "Zenith Minds",
    slug: "zenith-minds",
    year: "2025",
    description: "A platform connecting students and instructors for enhanced learning experiences with course management and live sessions.",
    fullDescription: "An educational technology platform that bridges the gap between students and instructors, offering a seamless learning experience with course management, live sessions, and progress tracking.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.0387cc35.jpg&w=1200&q=75",
    tags: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Razorpay", "Zustand", "Zod", "Tailwind CSS", "Motion.dev"],
    color: "#06b6d4",
    features: [
      "Integrated payment system with Razorpay.",
      "Real-time video conferencing for live classes.",
      "Progress tracking and analytics dashboard."
    ]
  },
  {
    number: "04",
    type: "Web App",
    title: "Snippix",
    slug: "snippix",
    year: "2025",
    description: "A developer-focused tool for creating, organizing, and sharing code snippets with syntax highlighting and easy sharing.",
    fullDescription: "A developer-focused tool for creating, organizing, and sharing code snippets. Features syntax highlighting, collections, and easy sharing options.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.d4ea5b2b.png&w=1200&q=75",
    tags: ["Next.js", "React", "Zustand", "TypeScript", "shadcn-ui", "Tailwind CSS"],
    color: "#22c55e",
    features: [
      "Syntax highlighting for 100+ languages.",
      "Keyboard shortcuts for power users.",
      "Collections and tagging system."
    ]
  },
  {
    number: "05",
    type: "Web App",
    title: "Personal Portfolio",
    slug: "portfolio",
    year: "2025",
    description: "A modern, performant portfolio website showcasing projects, skills, and experience with stunning animations.",
    fullDescription: "A modern, performant portfolio website showcasing projects, skills, and experience with stunning animations and dark theme design.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.65e92fcc.webp&w=1200&q=75",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "Better Auth", "Tailwind CSS", "Motion.dev"],
    color: "#3b82f6",
    features: [
      "MDX-powered blog with syntax highlighting.",
      "Database-backed guestbook feature.",
      "Spotify integration for real-time listening status."
    ]
  },
];

// Project Card with split layout - video on left, description on right
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden bg-card/50"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Side - Image/Video Preview */}
        <Link 
          to={`/projects/${project.slug}`}
          className="relative overflow-hidden rounded-l-3xl"
          onMouseEnter={() => setIsVideoHovered(true)}
          onMouseLeave={() => setIsVideoHovered(false)}
        >
          <motion.div 
            className="relative h-72 lg:h-80"
            style={{ backgroundColor: `${project.color}10` }}
          >
            {/* Project Images */}
            <div className="flex h-full p-4 gap-3">
              <motion.div 
                className="flex-1 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isVideoHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              {project.image2 && (
                <motion.div 
                  className="flex-1 rounded-2xl overflow-hidden hidden md:block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={project.image2}
                    alt={`${project.title} 2`}
                    className="w-full h-full object-cover"
                    animate={{ scale: isVideoHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                </motion.div>
              )}
            </div>
            
            {/* View Button Overlay */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-semibold"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ 
                  scale: isVideoHovered ? 1 : 0.8,
                  y: isVideoHovered ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
              >
                <Play className="w-5 h-5 fill-current" />
                <span>View Project</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </Link>

        {/* Right Side - Project Info */}
        <div className="p-8 flex flex-col justify-center">
          {/* Project Header */}
          <div className="flex items-center gap-3 mb-6">
            <motion.span 
              className="w-8 h-0.5 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <Link 
              to={`/projects/${project.slug}`}
              className="text-2xl font-semibold text-white hover:text-white/80 transition-colors"
            >
              {project.title}
            </Link>
          </div>
          
          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          
          {/* Features */}
          <ul className="space-y-3 mb-8">
            {project.features.map((feature, i) => (
              <motion.li 
                key={i}
                className="flex items-start gap-3 text-sm text-white/70"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span className="text-pink-400 mt-0.5">✦</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Tech Stack with Icons */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 10).map((tag, i) => (
              <motion.span
                key={tag}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white/60 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:text-white/80 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.03 }}
                whileHover={{ y: -2 }}
              >
                <span className="text-xs">{techIcons[tag] || "•"}</span>
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="relative z-10 px-4 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-sm text-white/50 uppercase tracking-[0.25em]"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CASE STUDIES
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Curated <span className="serif-italic text-pink-400">Work</span>
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.slice(0, 5).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* See More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 px-8 py-4 text-white/70 hover:text-white transition-all border border-white/10 rounded-full hover:border-white/30 hover:bg-white/5"
          >
            <span className="font-medium">See all projects</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
