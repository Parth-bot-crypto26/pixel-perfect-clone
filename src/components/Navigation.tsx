import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Command } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero-section", active: true },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
    >
      <nav className="flex items-center gap-1 px-2 py-2 rounded-full glass-dark">
        {/* Logo */}
        <a href="#" className="flex items-center justify-center w-10 h-10 mr-2">
          <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 30 L20 8 L30 30" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 22 L26 22" strokeLinecap="round" />
            <path d="M20 8 L20 30" strokeLinecap="round" />
            <path d="M20 30 L28 30" strokeLinecap="round" />
          </svg>
        </a>

        {/* Nav Items */}
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActiveItem(item.label)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full
              ${activeItem === item.label 
                ? "text-white" 
                : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
          >
            {activeItem === item.label && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-white/10 rounded-full border-t border-white/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}

        {/* More Dropdown */}
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5">
          More
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Book a Call Button */}
        <a
          href="#contact"
          className="px-4 py-2 ml-1 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/15 transition-colors border border-white/10"
        >
          Book a Call
        </a>
      </nav>

      {/* Command Menu Icon */}
      <button className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors">
        <Command className="w-5 h-5" />
      </button>
    </motion.header>
  );
};

export default Navigation;