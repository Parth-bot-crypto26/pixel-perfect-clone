import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aayushBlue from "@/assets/aayush-blue.webp";
import abIcon from "@/assets/ab-icon.svg";

const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/iaayushbharti", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/aayushbharti", icon: Github },
  { name: "Twitter", url: "https://x.com/iaayushbharti", icon: Twitter },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isImageVisible, setIsImageVisible] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Sticky card parallax effect
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-8, -2, 2, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 0.95, 1, 0.95, 0.8]);
  
  // Smooth springs for card animation
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothRotate = useSpring(rotate, { stiffness: 80, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 25 });
  
  // Visibility fade based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0, 1, 1, 1, 0]);
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  
  // Track visibility
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsImageVisible(latest > 0.1 && latest < 0.9);
    });
    return unsubscribe;
  }, [scrollYProgress]);

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

          {/* Image with Sticky/Parallax Animation */}
          <motion.div
            ref={imageRef}
            style={{ 
              y: smoothY, 
              opacity: smoothOpacity, 
              scale: smoothScale, 
              rotate: smoothRotate 
            }}
            className="relative lg:sticky lg:top-24"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              style={{
                boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(100, 100, 200, 0.1)'
              }}
            >
              <img
                src={aayushBlue}
                alt="Aayush Bharti"
                className="w-full h-auto rounded-3xl"
              />
              
              {/* AB Logo Overlay with spring animation */}
              <motion.div 
                className="absolute top-5 left-5 bg-white/15 backdrop-blur-xl rounded-2xl p-3 border border-white/30"
                initial={{ opacity: 0, scale: 0, rotate: -30, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ rotate: 15, scale: 1.2, x: 5, y: -5 }}
              >
                <img src={abIcon} alt="AB" className="w-12 h-12" />
              </motion.div>
              
              {/* Gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                  transform: 'translateX(-100%)',
                }}
                animate={{
                  transform: ['translateX(-100%)', 'translateX(100%)'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
              
              {/* Border glow */}
              <div 
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.1)'
                }}
              />
            </motion.div>
            
            {/* Floating decorative elements */}
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
    </section>
  );
};

export default AboutSection;
