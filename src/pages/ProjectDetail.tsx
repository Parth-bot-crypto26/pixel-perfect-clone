import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, Globe } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/components/WorkSection";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-white">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed left-0 z-40 w-full select-none" style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10">{project.type}</span>
              <span className="text-white/50">{project.year}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4">{project.title}</h1>
            <p className="text-xl text-white/60 mb-8">{project.fullDescription}</p>

            <div className="flex gap-4 mb-12">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
                  <Globe className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/15 transition-colors border border-white/10">
                  <Github className="w-4 h-4" /> Source Code
                </a>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-3xl overflow-hidden mb-12" style={{ backgroundColor: `${project.color}15` }}>
            <img src={project.image} alt={project.title} className="w-full h-auto" />
          </motion.div>

          {project.features && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="text-white/40">•</span> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white/70">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default ProjectDetail;
