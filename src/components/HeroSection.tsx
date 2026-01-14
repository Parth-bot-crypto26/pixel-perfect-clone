import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState, useMemo } from "react";
import aayushWide from "@/assets/aayush-wide-img.webp";
import { Link } from "react-router-dom";

// Generate stars for the background
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 80,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }));
};

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const stars = useMemo(() => generateStars(80), []);

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
      {/* Deep Space Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, rgba(15, 10, 40, 0.8) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 60%, rgba(30, 20, 60, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 50% 100%, rgba(10, 5, 30, 0.9) 0%, transparent 70%)
          `,
        }}
      />

      {/* Star Field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut"
            }}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
          />
        ))}
      </div>

      {/* Horizon/Globe Effect - Earth's Edge Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-10">
        {/* Main curved horizon */}
        <div 
          className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[2400px] h-[500px]"
          style={{
            borderRadius: '50% 50% 0 0',
            background: `
              linear-gradient(to top, 
                rgba(5, 5, 15, 1) 0%,
                rgba(10, 10, 30, 0.8) 30%,
                transparent 100%
              )
            `,
            boxShadow: `
              0 -1px 0 rgba(255, 255, 255, 0.15),
              0 -2px 20px rgba(255, 255, 255, 0.08),
              0 -5px 40px rgba(200, 220, 255, 0.05),
              inset 0 2px 30px rgba(100, 150, 255, 0.05)
            `,
          }}
        />
        
        {/* Atmospheric glow line */}
        <div 
          className="absolute bottom-[195px] left-1/2 -translate-x-1/2 w-[1800px] h-[2px]"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(255, 255, 255, 0.3) 20%,
              rgba(255, 255, 255, 0.5) 50%,
              rgba(255, 255, 255, 0.3) 80%,
              transparent 100%
            )`,
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />
        
        {/* Secondary atmospheric glow */}
        <div 
          className="absolute bottom-[180px] left-1/2 -translate-x-1/2 w-[1400px] h-[60px]"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(200, 220, 255, 0.15) 0%, 
              rgba(150, 180, 255, 0.05) 40%,
              transparent 70%
            )`,
            borderRadius: '50%',
            filter: 'blur(10px)',
          }}
        />
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
            to="/work"
            className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/0 hover:bg-white/5 hover:border-white/15 text-sm backdrop-blur-sm transition-all duration-300 px-1 py-1"
          >
            <span className="rounded-full bg-blue-600 px-3 py-0.5 text-white text-xs font-medium">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-2 tracking-tight">
            I help founders turn ideas
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
            into seamless{" "}
            <span className="serif-italic text-white">digital experiences</span>
          </h2>
        </motion.div>

        {/* Subheading with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 flex-wrap mt-2"
        >
          <span className="text-lg md:text-xl text-white/60">
            Hello, I'm Aayush Bharti
          </span>
          <div className="relative mx-1">
            <motion.img
              src={aayushWide}
              alt="Aayush Bharti"
              className="w-20 h-8 object-cover rounded-full border-2 border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <span className="text-lg md:text-xl text-white/60">
            a Full Stack Developer
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 mt-6"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-white font-medium transition-all duration-300"
          >
            <span>Let's Connect</span>
            <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
          <button 
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-3 text-white/60 hover:text-white transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span className="text-sm">{copied ? "Copied!" : "hello@aayushbharti.in"}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
