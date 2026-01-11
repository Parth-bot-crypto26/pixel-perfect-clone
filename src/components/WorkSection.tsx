import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    type: "Web App",
    title: "Next Ventures",
    year: "Q1 2025",
    description: "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.2f1e29c9.jpeg&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.16c97575.jpeg&w=1200&q=75",
    tags: ["Next.js", "React", "Sanity CMS", "TypeScript", "Better Auth", "GROQ", "sentry", "Markdown", "Tailwind CSS", "Motion.dev"],
  },
  {
    number: "02",
    type: "Mobile App",
    title: "Finote App",
    year: "Q4 2025",
    description: "An intuitive mobile companion for organizing your digital wallets and analyzing your financial health",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.1a837bee.png&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.ef357188.png&w=1200&q=75",
    tags: ["Expo", "TypeScript", "Firebase", "Zod", "Zustand", "cloudinary", "reanimated", "gifted-charts"],
  },
  {
    number: "03",
    type: "Web App",
    title: "Zenith Minds",
    year: "2025",
    description: "A platform connecting students and instructors for enhanced learning experiences",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.0387cc35.jpg&w=1200&q=75",
    tags: ["Next.js", "React", "Node.js", "Express.js", "Turborepo", "TypeScript", "MongoDB", "Razorpay", "Zustand", "Zod", "Tailwind CSS", "Motion.dev"],
  },
  {
    number: "04",
    type: "Web App",
    title: "Snippix",
    year: "2025",
    description: "A platform for creating and sharing code snippets with a clean and intuitive design",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.d4ea5b2b.png&w=1200&q=75",
    tags: ["Next.js", "React", "Zustand", "TypeScript", "shadcn-ui", "Tailwind CSS", "highlightjs", "react-hotkeys-hook"],
  },
  {
    number: "05",
    type: "Web App",
    title: "StarForge",
    year: "2025",
    description: "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.26250ad5.jpeg&w=1200&q=75",
    image2: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2.1907759a.jpeg&w=1200&q=75",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "parallax", "Vercel"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-wider">CASE STUDIES</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
            Curated <span className="serif-italic">work</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Content */}
                <div className="lg:w-1/3 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-light text-white/30">{project.number}</span>
                    <span className="px-3 py-1 text-xs text-white/60 bg-white/5 rounded-full border border-white/10">
                      {project.type}
                    </span>
                  </div>
                  
                  <a href="#" className="flex items-center gap-2 text-xl font-semibold text-white hover:text-white/80 transition-colors mb-2 group/link">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  
                  <span className="text-sm text-white/40 mb-4">{project.year}</span>
                  
                  <p className="text-white/60 text-sm mb-6">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-white/50 bg-white/5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="px-2 py-1 text-xs text-white/50">
                        +{project.tags.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Images */}
                <div className="lg:w-2/3 flex gap-4">
                  <div className="flex-1 rounded-2xl overflow-hidden bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {project.image2 && (
                    <div className="flex-1 rounded-2xl overflow-hidden bg-white/5 hidden md:block">
                      <img
                        src={project.image2}
                        alt={`${project.title} 2`}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white transition-colors"
          >
            See more projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;