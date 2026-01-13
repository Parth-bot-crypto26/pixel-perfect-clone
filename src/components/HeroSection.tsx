import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import aayushWide from "@/assets/aayush-wide-img.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@aayushbharti.in");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero-section"
      className="relative flex h-screen max-h-[1000px] min-h-[800px] w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b0218] blur-[150px] opacity-80"
      />

      {/* Horizon/Globe Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] overflow-hidden pointer-events-none">
        {/* Curved horizon line */}
        <div 
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[2000px] h-[400px] rounded-[50%] border-t border-white/20"
          style={{
            background: 'radial-gradient(ellipse at center top, transparent 0%, transparent 100%)',
            boxShadow: '0 -2px 40px rgba(255,255,255,0.1), inset 0 2px 60px rgba(255,255,255,0.05)'
          }}
        />
        {/* Glow on horizon */}
        <div 
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1200px] h-[200px] rounded-[50%] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Stars/Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto mb-14 flex w-full flex-col items-center justify-center gap-y-6 px-4">
        {/* Upcoming Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/projects"
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/0 hover:bg-white/5 hover:border-white/15 text-sm backdrop-blur-sm transition-all duration-300 px-1 py-1"
          >
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-white text-xs font-medium">
              Upcoming
            </span>
            <span className="text-white/80 pr-2">
              Nextnode is launching soon!
            </span>
            <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-2">
            I help founders turn ideas
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">
            into seamless{" "}
            <span className="serif-italic text-white">digital experiences</span>
          </h2>
        </motion.div>

        {/* Subheading with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="text-lg md:text-xl text-white/70">
            Hello, I'm Aayush Bharti
          </span>
          <div className="relative">
            <img
              src={aayushWide}
              alt="Aayush Bharti"
              className="w-16 h-10 object-cover rounded-full border-2 border-white/20"
            />
          </div>
          <span className="text-lg md:text-xl text-white/70">
            a Full Stack Developer
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 mt-4"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white font-medium transition-all duration-300"
          >
            Let's Connect
            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
          <button 
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-3 text-white/70 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span className="text-sm">{copied ? "Copied!" : "hello@aayushbharti.in"}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
