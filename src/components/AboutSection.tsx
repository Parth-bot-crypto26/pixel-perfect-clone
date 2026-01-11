import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import aayushBlue from "@/assets/aayush-blue.webp";
import abIcon from "@/assets/ab-icon.svg";

const socials = [
  { name: "LinkedIn", url: "https://linkedin.com/in/iaayushbharti" },
  { name: "GitHub", url: "https://github.com/aayushbharti" },
  { name: "Twitter", url: "https://x.com/iaayushbharti" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 px-4 py-20">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
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
            <div className="flex gap-4 pt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                >
                  {social.name}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mt-6"
            >
              Work Experience
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={aayushBlue}
                alt="Aayush Bharti"
                className="w-full h-auto rounded-3xl"
              />
              {/* AB Logo Overlay */}
              <div className="absolute top-4 left-4">
                <img src={abIcon} alt="AB" className="w-12 h-12" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;