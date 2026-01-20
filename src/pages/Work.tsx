import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/components/WorkSection";

// Tech stack icons mapping
const techIcons: Record<string, string> = {
  "Next.js": "▲",
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
};

// Project Card Component for Work page
const WorkProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/projects/${project.slug}`}>
        <div 
          className="relative rounded-[2rem] border border-white/10 overflow-hidden bg-card/50 hover:border-white/20 transition-all duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${project.color}08 0%, transparent 50%)` 
          }}
        >
          {/* Date Badge - Top Right */}
          <motion.div 
            className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Calendar className="w-3 h-3 text-white/50" />
            <span className="text-xs text-white/70">{project.year}</span>
          </motion.div>

          {/* Image Section */}
          <div className="relative h-56 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${project.color}30 0%, transparent 60%)`
              }}
            />
            
            {/* View Button - Appears on Hover */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-medium text-sm"
                initial={{ scale: 0.9, y: 10 }}
                whileHover={{ scale: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Project Type */}
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-xs text-white/50 uppercase tracking-wider">{project.type}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors flex items-center gap-2">
              {project.title}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>

            {/* Description */}
            <p className="text-white/50 text-sm mb-5 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map((tag, i) => (
                <motion.div
                  key={tag}
                  className="flex items-center gap-1 px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 text-xs text-white/60"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ 
                    borderColor: `${project.color}50`,
                    backgroundColor: `${project.color}10`
                  }}
                >
                  <span className="text-xs">{techIcons[tag] || "•"}</span>
                  <span>{tag}</span>
                </motion.div>
              ))}
              {project.tags.length > 5 && (
                <span className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10 text-xs text-white/40">
                  +{project.tags.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Work = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div 
        className="pointer-events-none fixed left-0 z-40 w-full select-none" 
        style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} 
      />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center mb-16"
          >
            <span className="text-sm text-white/50 uppercase tracking-[0.2em]">CASE STUDIES</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-2">
              Curated <span className="serif-italic text-pink-400">Work</span>
            </h1>
            <p className="text-white/50 mt-4 max-w-lg mx-auto">
              A collection of projects that showcase my expertise in building modern web applications
            </p>
          </motion.div>

          {/* Projects Grid - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <WorkProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Work;