import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { useRef } from "react";
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Sticky card effect - image follows scroll with parallax
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);

  return (
    <section id="about" ref={containerRef} className="relative z-10 px-4 py-24 min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm text-white/50 uppercase tracking-[0.2em]">KNOW ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3">
            Full-Stack Developer and a little bit of{" "}
            <span className="serif-italic text-pink-400">everything</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            <motion.p 
              className="text-lg text-white/60 leading-relaxed"
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
              className="text-lg text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              When I'm not immersed in work, I'm exploring new ideas and staying 
              curious. Life's about balance, and I love embracing every part of it.
            </motion.p>
            <motion.p 
              className="text-lg text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I believe in waking up each day eager to make a difference!
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex gap-3 pt-6"
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
                  className="flex items-center justify-center w-11 h-11 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all"
                  title={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/about#experience"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mt-8 group"
              >
                Work Experience
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image with Sticky Animation */}
          <motion.div
            ref={imageRef}
            style={{ y, opacity, scale, rotate }}
            className="relative lg:sticky lg:top-32"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden group shadow-2xl shadow-black/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={aayushBlue}
                alt="Aayush Bharti"
                className="w-full h-auto rounded-3xl"
              />
              
              {/* AB Logo Overlay */}
              <motion.div 
                className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/20"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <img src={abIcon} alt="AB" className="w-10 h-10" />
              </motion.div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
