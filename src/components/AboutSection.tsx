import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import aayushBlue from "@/assets/aayush-blue.webp";

const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/iaayushbharti", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/aayushbharti", icon: Github },
  { name: "Twitter", url: "https://x.com/iaayushbharti", icon: Twitter },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickRef = useRef<HTMLDivElement>(null);
  const [stickPosition, setStickPosition] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Stick animation - moves horizontally based on scroll
  const stickX = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [-200, 0, 0, 200]);
  const imageOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.75], [0.8, 1, 1, 0.8]);
  
  // Smooth springs
  const smoothStickX = useSpring(stickX, { stiffness: 100, damping: 30 });
  const smoothImageOpacity = useSpring(imageOpacity, { stiffness: 100, damping: 30 });
  const smoothImageScale = useSpring(imageScale, { stiffness: 100, damping: 30 });

  return (
    <section id="about" ref={containerRef} className="relative z-10 px-4 py-32 min-h-[120vh]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm text-white/50 uppercase tracking-[0.2em]">KNOW ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4">
            Full-Stack Developer and a little bit of{" "}
            <span className="serif-italic text-pink-400">everything</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text Content - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <motion.p 
              className="text-xl text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              I'm Aayush Bharti, a proactive full-stack developer passionate about 
              creating dynamic web experiences. From frontend to backend, I thrive 
              on solving complex problems with clean, efficient code. My expertise 
              spans React, Next.js, and Node.js, and I'm always eager to learn more.
            </motion.p>
            <motion.p 
              className="text-xl text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              When I'm not immersed in work, I'm exploring new ideas and staying 
              curious. Life's about balance, and I love embracing every part of it.
            </motion.p>
            <motion.p 
              className="text-xl text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I believe in waking up each day eager to make a difference!
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/30 transition-all"
                  title={social.name}
                  whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link
                to="/about#experience"
                className="inline-flex items-center gap-2 text-white hover:text-pink-400 transition-colors group text-lg"
              >
                Work Experience
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image with Stick Animation */}
          <div className="relative lg:sticky lg:top-24 h-[500px] flex items-center justify-center overflow-hidden">
            {/* The Stick - vertical bar that reveals/hides image */}
            <motion.div
              ref={stickRef}
              style={{ x: smoothStickX }}
              className="absolute z-20 w-2 h-[120%] bg-gradient-to-b from-white/0 via-white to-white/0 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            />
            
            {/* Image Container */}
            <motion.div 
              style={{ 
                opacity: smoothImageOpacity,
                scale: smoothImageScale,
              }}
              className="relative rounded-3xl overflow-hidden"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={aayushBlue}
                  alt="Aayush Bharti"
                  className="w-full max-w-md h-auto rounded-3xl"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
                
                {/* Shine effect on hover */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                  }}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
