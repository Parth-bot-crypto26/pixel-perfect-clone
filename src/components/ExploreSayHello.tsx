import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Tool icons - using simple colored boxes to represent tools
const toolIcons = [
  { name: "Figma", bg: "bg-gradient-to-br from-pink-500 to-purple-600" },
  { name: "GitKraken", bg: "bg-gradient-to-br from-teal-400 to-cyan-500" },
  { name: "VS Code", bg: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { name: "Obsidian", bg: "bg-gradient-to-br from-purple-500 to-purple-700" },
  { name: "Notion", bg: "bg-gradient-to-br from-gray-700 to-gray-900" },
];

// Floating tablet/phone mockup component
const FloatingDevices = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    {/* Tablet */}
    <motion.div
      className="absolute w-28 h-36 bg-gradient-to-br from-purple-400/80 to-pink-400/80 rounded-xl border-2 border-white/20 shadow-2xl"
      initial={{ rotate: -12, y: 10 }}
      animate={{ 
        rotate: [-12, -8, -12],
        y: [10, 0, 10],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ left: "25%" }}
    >
      <div className="p-2 space-y-1.5">
        <div className="w-full h-2 bg-white/30 rounded" />
        <div className="w-3/4 h-2 bg-white/30 rounded" />
        <div className="w-full h-2 bg-white/30 rounded" />
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/30 rounded-full" />
    </motion.div>
    
    {/* Phone */}
    <motion.div
      className="absolute w-20 h-28 bg-gradient-to-br from-pink-300/80 to-purple-300/80 rounded-xl border-2 border-white/20 shadow-2xl z-10"
      initial={{ rotate: 8, y: -5 }}
      animate={{ 
        rotate: [8, 12, 8],
        y: [-5, -15, -5],
      }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      style={{ right: "25%" }}
    >
      <div className="p-2 space-y-1.5">
        <div className="w-full h-1.5 bg-white/30 rounded" />
        <div className="w-2/3 h-1.5 bg-white/30 rounded" />
        <div className="w-full h-1.5 bg-white/30 rounded" />
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/30 rounded-full" />
    </motion.div>
  </div>
);

// Spotify vinyl record component
const SpotifyVinyl = () => (
  <div className="relative">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </div>
      <span className="text-white font-medium">Last Played</span>
    </div>
    <p className="text-white/60 text-sm mb-4">
      Last Played <span className="text-white font-medium">7-3</span> by <span className="text-white font-medium">Peso Pluma, Tito Dou ...</span> from <span className="text-white font-medium">DINASTÍA</span>
    </p>
    
    {/* Vinyl Record */}
    <div className="relative w-32 h-32 mx-auto">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        {/* Grooves */}
        <div className="absolute inset-4 rounded-full border border-gray-600/50" />
        <div className="absolute inset-8 rounded-full border border-gray-600/50" />
        <div className="absolute inset-12 rounded-full border border-gray-600/50" />
        {/* Center label */}
        <div className="absolute inset-[45%] rounded-full bg-gradient-to-br from-gray-600 to-gray-700" />
      </motion.div>
      {/* Album art overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden">
        <img 
          src="https://i.scdn.co/image/ab67616d0000b273" 
          alt="Album" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
    </div>
  </div>
);

const ExploreSayHello = () => {
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-[0.3em]">MY SITE</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4">
            Explore, experiment
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl serif-italic text-pink-400">
            && say hello
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Uses Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all group"
          >
            {/* Tool Icons Row */}
            <div className="flex gap-3 mb-8 overflow-hidden">
              <motion.div 
                className="flex gap-3"
                animate={{ x: [0, -40, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                {[...toolIcons, ...toolIcons].map((tool, i) => (
                  <motion.div
                    key={`${tool.name}-${i}`}
                    className={`w-14 h-14 ${tool.bg} rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10`}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <span className="text-white text-xs font-medium">{tool.name[0]}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <span className="text-xs text-white/40 uppercase tracking-wider">USES</span>
            <Link to="/uses" className="block mt-2 text-lg font-medium text-white hover:text-white/80 transition-colors">
              Check out my favorite tools
            </Link>
          </motion.div>

          {/* Guestbook Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all group"
          >
            <FloatingDevices />
            
            <span className="text-xs text-white/40 uppercase tracking-wider">GUESTBOOK</span>
            <Link to="/guestbook" className="block mt-2 text-lg font-medium text-white hover:text-white/80 transition-colors">
              Let me know you were here
            </Link>
          </motion.div>

          {/* Spotify Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all group"
          >
            <SpotifyVinyl />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSayHello;
