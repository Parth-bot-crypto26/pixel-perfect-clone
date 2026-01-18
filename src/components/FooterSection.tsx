import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { forwardRef, useRef } from "react";
import wingsIcon from "@/assets/wings.svg";

const FooterSection = forwardRef<HTMLElement>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const wingsScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.1]);
  const wingsOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 0.1, 0.12]);
  const titleY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  
  return (
    <footer ref={ref} className="relative z-10">
      {/* Main Footer */}
      <div ref={containerRef} className="relative px-4 py-32 overflow-hidden">
        {/* Background Wings with parallax */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ scale: wingsScale, opacity: wingsOpacity }}
        >
          <img 
            src={wingsIcon} 
            alt="" 
            className="w-[1000px] h-auto"
            style={{ filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.1))' }}
          />
        </motion.div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-sm text-white/50 uppercase tracking-[0.3em] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              FROM CONCEPT TO CREATION
            </motion.h3>
            
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-12 leading-tight"
              style={{ y: titleY }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              LET'S MAKE IT{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">HAPPEN!</span>
                <motion.span 
                  className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl -z-10 blur-sm"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-white/90 transition-all shadow-2xl shadow-white/10 hover:shadow-white/20"
              >
                <span>Get In Touch</span>
                <motion.div
                  className="flex items-center justify-center w-8 h-8 bg-black/10 rounded-full"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.p 
              className="text-white/40 max-w-lg mx-auto text-lg leading-relaxed mt-14"
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
      <div className="border-t border-white/10 px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-medium">© 2025 Aayush Bharti</span>
            <span className="text-white/20">•</span>
            <span>Built with ❤️</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {[
              { name: "LinkedIn", url: "https://linkedin.com/in/iaayushbharti", icon: Linkedin },
              { name: "GitHub", url: "https://github.com/aayushbharti", icon: Github },
              { name: "Twitter", url: "https://x.com/iaayushbharti", icon: Twitter },
            ].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <link.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{link.name}</span>
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
