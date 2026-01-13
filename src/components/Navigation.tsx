import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Command, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blogs" },
];

const moreItems = [
  { label: "Uses", href: "/uses" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
      >
        <nav className="flex items-center gap-1 px-2 py-2 rounded-full glass-dark">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center w-10 h-10 mr-2">
            <svg viewBox="0 0 40 40" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 30 L20 8 L30 30" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 22 L26 22" strokeLinecap="round" />
              <path d="M20 8 L20 30" strokeLinecap="round" />
              <path d="M20 30 L28 30" strokeLinecap="round" />
            </svg>
          </Link>

          {/* Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full
                ${isActive(item.href) 
                  ? "text-white" 
                  : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
            >
              {isActive(item.href) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-full border-t border-white/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              More
              <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 right-0 w-40 py-2 rounded-xl glass-dark border border-white/10"
                >
                  {moreItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Book a Call Button */}
          <Link
            to="/contact"
            className="px-4 py-2 ml-1 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/15 transition-colors border border-white/10"
          >
            Book a Call
          </Link>
        </nav>

        {/* Command Menu Icon */}
        <button 
          onClick={() => setCommandOpen(true)}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
        >
          <Command className="w-5 h-5" />
        </button>
      </motion.header>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {commandOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
            onClick={() => setCommandOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-card border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Command className="w-4 h-4 text-white/50" />
                <input 
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-white outline-none placeholder:text-white/40"
                  autoFocus
                />
                <button onClick={() => setCommandOpen(false)}>
                  <X className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                </button>
              </div>
              <div className="p-2">
                <p className="px-3 py-2 text-xs text-white/40 uppercase tracking-wider">Quick Links</p>
                {[...navItems, ...moreItems].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setCommandOpen(false)}
                    className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
