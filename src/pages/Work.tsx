import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/components/WorkSection";

const Work = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed left-0 z-40 w-full select-none" style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-sm text-white/50 uppercase tracking-wider">CASE STUDIES</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-2">
              Curated <span className="serif-italic text-pink-400">Work</span>
            </h1>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div key={project.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-3xl font-light text-white/30">{project.number}</span>
                      <span className="text-white/30">———</span>
                      <span className="text-xs text-white/50 uppercase">{project.type}</span>
                      <span className="ml-auto px-3 py-1 text-xs bg-white/5 rounded-full">{project.year}</span>
                    </div>
                    <Link to={`/projects/${project.slug}`} className="text-xl font-semibold text-white hover:text-white/80 flex items-center gap-2 mb-4">
                      {project.title} <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-white/60 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 6).map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-white/5 rounded-md text-white/50">{t}</span>
                      ))}
                    </div>
                  </div>
                  <Link to={`/projects/${project.slug}`} className="lg:w-2/3 relative group/img">
                    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: `${project.color}15` }}>
                      <div className="flex gap-2 p-2">
                        <img src={project.image} alt={project.title} className="flex-1 rounded-xl h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        {project.image2 && <img src={project.image2} alt="" className="flex-1 rounded-xl h-64 object-cover hidden md:block group-hover:scale-105 transition-transform duration-500" />}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 text-black rounded-full text-sm font-medium opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-2">
                      View <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Work;
