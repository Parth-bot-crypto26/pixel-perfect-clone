import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import wingsIcon from "@/assets/wings.svg";

const FooterSection = () => {
  return (
    <footer className="relative z-10">
      {/* Open to Work Banner */}
      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="flex animate-marquee">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-2xl font-light text-white/30 whitespace-nowrap mx-4">
              OPEN TO WORK ·
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative px-4 py-24 overflow-hidden">
        {/* Background Wings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src={wingsIcon} 
            alt="" 
            className="w-[800px] h-auto opacity-10"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm text-white/50 uppercase tracking-wider mb-4">
              FROM CONCEPT TO CREATION
            </h3>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8">
              LET'S MAKE IT HAPPEN!
            </h2>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-colors mb-8"
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <p className="text-white/60 max-w-md mx-auto text-lg">
              I'm available for full-time roles & freelance projects.
              <br />
              I thrive on crafting dynamic web applications, and
              <br />
              delivering seamless user experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <span>© 2025 Aayush Bharti</span>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/iaayushbharti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/aayushbharti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://x.com/iaayushbharti" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
