import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const projects = [
  {
    number: "01",
    type: "Web App",
    title: "Next Ventures",
    slug: "next-venture",
    year: "Q1 2025",
    description: "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
    fullDescription: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.2f1e29c9.jpeg&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.16c97575.jpeg&w=1200&q=75",
    tags: ["Next.js", "React", "Sanity CMS", "TypeScript", "Better Auth", "GROQ", "sentry", "Markdown", "Tailwind CSS", "Motion.dev"],
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
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health",
    fullDescription: "A comprehensive mobile application for personal finance management, helping users track expenses, manage multiple wallets, and gain insights into their spending patterns.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.1a837bee.png&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.ef357188.png&w=1200&q=75",
    image3: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen3.ca468334.png&w=1200&q=75",
    tags: ["Expo", "TypeScript", "Firebase", "Zod", "Zustand", "cloudinary", "reanimated", "gifted-charts"],
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
    description: "A platform connecting students and instructors for enhanced learning experiences",
    fullDescription: "An educational technology platform that bridges the gap between students and instructors, offering a seamless learning experience with course management, live sessions, and progress tracking.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.0387cc35.jpg&w=1200&q=75",
    tags: ["Next.js", "React", "Node.js", "Express.js", "Turborepo", "TypeScript", "MongoDB", "Razorpay", "Zustand", "Zod", "Tailwind CSS", "Motion.dev"],
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
    description: "A platform for creating and sharing code snippets with a clean and intuitive design",
    fullDescription: "A developer-focused tool for creating, organizing, and sharing code snippets. Features syntax highlighting, collections, and easy sharing options.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.d4ea5b2b.png&w=1200&q=75",
    tags: ["Next.js", "React", "Zustand", "TypeScript", "shadcn-ui", "Tailwind CSS", "highlightjs", "react-hotkeys-hook"],
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
    title: "StarForge",
    slug: "star-forge",
    year: "2025",
    description: "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
    fullDescription: "An AI SaaS landing page showcasing modern UI/UX excellence. With sleek design and smooth animations, it delivers an engaging user experience.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.26250ad5.jpeg&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.1907759a.jpeg&w=1200&q=75",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "parallax", "Vercel"],
    color: "#f59e0b",
    features: [
      "Built with React and Vite for fast and scalable development.",
      "Designed responsive layouts using Tailwind CSS.",
      "Enhanced user experience with smooth animations using react-just-parallax."
    ]
  },
  {
    number: "06",
    type: "Web App",
    title: "Personal Portfolio",
    slug: "portfolio",
    year: "2025",
    description: "A Captivating Portfolio Showcasing Innovative Web Development and UI/UX",
    fullDescription: "A modern, performant portfolio website showcasing projects, skills, and experience with stunning animations and dark theme design.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.65e92fcc.webp&w=1200&q=75",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "Better Auth", "MDX", "Zustand", "Zod", "Tailwind CSS", "Motion.dev"],
    color: "#3b82f6",
    features: [
      "MDX-powered blog with syntax highlighting.",
      "Database-backed guestbook feature.",
      "Spotify integration for real-time listening status."
    ]
  },
  {
    number: "07",
    type: "Web App",
    title: "FLux Lura",
    slug: "flux-lura",
    year: "2025",
    description: "Effortlessly convert images, audio, and videos with a seamless and free multimedia tool!",
    fullDescription: "A web-based multimedia conversion tool that handles images, audio, and video files with ease. Fast, free, and privacy-focused.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.3e9335ac.jpg&w=1200&q=75",
    tags: ["Next.js", "React", "FFmpeg", "TypeScript", "Shadcn UI", "Tailwind CSS", "Motion.dev"],
    color: "#ef4444",
    features: [
      "Client-side processing for privacy.",
      "Support for multiple file formats.",
      "Batch conversion capabilities."
    ]
  },
];

// Project Card with 3D tilt, color glow, and smooth hover animations
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden bg-card/50"
    >
      {/* Background gradient glow on hover */}
      <motion.div 
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ 
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}15, transparent 40%)`
        }}
      />
      
      {/* Color accent line on left */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
        style={{ backgroundColor: project.color }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      />
      
      <div className="relative p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="flex items-center gap-4 mb-5">
              <motion.span 
                className="text-5xl font-extralight"
                style={{ color: `${project.color}60` }}
                whileHover={{ scale: 1.1, color: project.color }}
              >
                {project.number}
              </motion.span>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              <span className="text-xs text-white/40 uppercase tracking-wider font-medium">{project.type}</span>
            </div>
            
            <motion.span 
              className="px-3 py-1.5 text-xs text-white/60 bg-white/5 rounded-full border border-white/10 w-fit mb-5"
              whileHover={{ scale: 1.05, borderColor: `${project.color}50` }}
            >
              {project.year}
            </motion.span>
            
            <Link 
              to={`/projects/${project.slug}`} 
              className="flex items-center gap-3 text-2xl font-semibold text-white hover:text-white/90 transition-colors mb-5 group/link"
            >
              <motion.span whileHover={{ x: 5 }}>{project.title}</motion.span>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-6 h-6" style={{ color: project.color }} />
              </motion.div>
            </Link>
            
            <p className="text-white/50 text-sm mb-8 leading-relaxed flex-1">{project.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 6).map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1.5 text-xs text-white/50 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 hover:text-white/70 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ y: -2, backgroundColor: `${project.color}10` }}
                >
                  {tag}
                </motion.span>
              ))}
              {project.tags.length > 6 && (
                <span className="px-2 py-1.5 text-xs text-white/30">
                  +{project.tags.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:w-3/5 relative">
            <Link 
              to={`/projects/${project.slug}`}
              className="block rounded-2xl overflow-hidden relative group/image"
            >
              <motion.div 
                className="flex gap-3 p-3 rounded-2xl"
                style={{ 
                  backgroundColor: `${project.color}08`,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Primary Image */}
                <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 md:h-64 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                {project.image2 && (
                  <div className="flex-1 rounded-xl overflow-hidden hidden md:block shadow-lg">
                    <motion.img
                      src={project.image2}
                      alt={`${project.title} 2`}
                      className="w-full h-52 md:h-64 object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                )}
              </motion.div>
              
              {/* View Button Overlay */}
              <motion.div 
                className="absolute top-5 right-5 flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold shadow-xl"
                initial={{ opacity: 0, scale: 0.8, y: -15 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  scale: isHovered ? 1 : 0.8,
                  y: isHovered ? 0 : -15
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span>View</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
              
              {/* Colored border glow on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ 
                  boxShadow: `inset 0 0 0 2px ${project.color}`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.4 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
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
        <div className="space-y-10">
          {projects.slice(0, 5).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* See More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
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
