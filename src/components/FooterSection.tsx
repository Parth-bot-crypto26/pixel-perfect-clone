import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
import wingsIcon from "@/assets/wings.svg";

const FooterSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="relative z-10">
      {/* Open to Work Banner */}
      <div className="overflow-hidden border-y border-white/10 py-4 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent">
        <motion.div 
          className="flex"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...Array(30)].map((_, i) => (
            <span key={i} className="text-2xl font-light text-white/20 whitespace-nowrap mx-4 tracking-wider">
              OPEN TO WORK ·
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="relative px-4 py-24 overflow-hidden">
        {/* Background Wings */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img 
            src={wingsIcon} 
            alt="" 
            className="w-[900px] h-auto"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-sm text-white/50 uppercase tracking-[0.2em] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              FROM CONCEPT TO CREATION
            </motion.h3>
            
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              LET'S MAKE IT HAPPEN!
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-all hover:scale-105 active:scale-95 mb-10"
              >
                Get In Touch
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.p 
              className="text-white/50 max-w-md mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              I'm available for full-time roles & freelance projects.
              <br />
              I thrive on crafting dynamic web applications, and
              <br />
              delivering seamless user experiences.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>© 2025 Aayush Bharti</span>
          </motion.div>
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {[
              { name: "LinkedIn", url: "https://linkedin.com/in/iaayushbharti" },
              { name: "GitHub", url: "https://github.com/aayushbharti" },
              { name: "Twitter", url: "https://x.com/iaayushbharti" },
            ].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";

export default FooterSection;
