import { useState, useEffect, forwardRef } from "react";
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

const Navigation = forwardRef<HTMLElement>((_, ref) => {
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setMoreOpen(false);
    if (moreOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [moreOpen]);

  // Keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen(true);
      }
      if (e.key === "Escape") {
        setCommandOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        ref={ref}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
      >
        <nav className={`flex items-center gap-1 px-2 py-2 rounded-full glass-dark transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center w-10 h-10 mr-2 group">
            <motion.svg 
              viewBox="0 0 40 40" 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M10 30 L20 8 L30 30" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 22 L26 22" strokeLinecap="round" />
              <path d="M20 8 L20 30" strokeLinecap="round" />
              <path d="M20 30 L28 30" strokeLinecap="round" />
            </motion.svg>
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
              onClick={(e) => {
                e.stopPropagation();
                setMoreOpen(!moreOpen);
              }}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              More
              <motion.div
                animate={{ rotate: moreOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 right-0 w-40 py-2 rounded-xl glass-dark border border-white/10 shadow-xl"
                >
                  {moreItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Book a Call Button */}
          <Link
            to="/contact"
            className="px-4 py-2 ml-1 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/15 transition-all duration-200 border border-white/10 hover:border-white/20"
          >
            Book a Call
          </Link>
        </nav>

        {/* Command Menu Icon */}
        <motion.button 
          onClick={() => setCommandOpen(true)}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-2.5 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Command className="w-5 h-5" />
        </motion.button>
      </motion.header>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {commandOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
            onClick={() => setCommandOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Command className="w-4 h-4 text-white/50" />
                <input 
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-white outline-none placeholder:text-white/40"
                  autoFocus
                />
                <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs text-white/40">
                  ESC
                </div>
                <button onClick={() => setCommandOpen(false)}>
                  <X className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                </button>
              </div>
              <div className="p-2 max-h-80 overflow-y-auto">
                <p className="px-3 py-2 text-xs text-white/40 uppercase tracking-wider">Quick Links</p>
                {[...navItems, ...moreItems].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setCommandOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <span className="w-1 h-1 bg-white/40 rounded-full" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
