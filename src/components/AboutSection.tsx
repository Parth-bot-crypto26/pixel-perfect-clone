import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aayushBlue from "@/assets/aayush-blue.webp";
import abIcon from "@/assets/ab-icon.svg";

const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/iaayushbharti", icon: "in" },
  { name: "GitHub", url: "https://github.com/aayushbharti", icon: "gh" },
  { name: "Twitter", url: "https://x.com/iaayushbharti", icon: "x" },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Sticky card effect - image follows scroll
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="about" ref={containerRef} className="relative z-10 px-4 py-20 min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-wider">KNOW ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
            Full-Stack Developer and a little bit of{" "}
            <span className="serif-italic">everything</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              I'm Aayush Bharti, a proactive full-stack developer passionate about 
              creating dynamic web experiences. From frontend to backend, I thrive 
              on solving complex problems with clean, efficient code. My expertise 
              spans React, Next.js, and Node.js, and I'm always eager to learn more.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              When I'm not immersed in work, I'm exploring new ideas and staying 
              curious. Life's about balance, and I love embracing every part of it.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              I believe in waking up each day eager to make a difference!
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                  title={social.name}
                >
                  <span className="text-sm font-medium">{social.icon}</span>
                </a>
              ))}
            </div>

            <Link
              to="/about#experience"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mt-6 group"
            >
              Work Experience
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Image with Sticky Animation */}
          <motion.div
            ref={imageRef}
            style={{ y, opacity, scale }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <motion.img
                src={aayushBlue}
                alt="Aayush Bharti"
                className="w-full h-auto rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* AB Logo Overlay */}
              <motion.div 
                className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-xl p-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <img src={abIcon} alt="AB" className="w-10 h-10" />
              </motion.div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
