import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed left-0 z-40 w-full select-none" style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} />
      <Navigation />
      
      <main className="pt-32 min-h-[70vh] flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <Terminal className="w-4 h-4 text-white/50" />
            <span className="text-white/60 text-sm">SYSTEM // 404</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            Sometimes you need to
            <br />
            <span className="serif-italic">get lost</span> to find your way.
          </h1>
          
          <p className="text-white/60 max-w-md mx-auto mb-8">
            The page you are looking for has been moved, deleted, or perhaps never existed in this timeline.
          </p>
          
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
            Go Home
          </Link>
        </motion.div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Blog;
