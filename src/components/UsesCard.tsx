import { motion } from "framer-motion";
import { ArrowUpRight, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const UsesCard = () => {
  const tools = [
    { name: "Raycast", image: "https://aayushbharti.in/uses/raycast_logo.png" },
    { name: "Arc", image: "https://aayushbharti.in/uses/arc_logo.png" },
    { name: "VSCode", image: "https://aayushbharti.in/uses/vscode_logo.png" },
    { name: "Obsidian", image: "https://aayushbharti.in/uses/obsidian_logo.png" },
    { name: "Notion", image: "https://aayushbharti.in/uses/notion_logo.png" },
  ];

  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm text-white/50 uppercase tracking-[0.2em]">MY SITE</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-3">
            Explore, experiment <span className="serif-italic text-pink-400">&& say hello</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Uses Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-2"
          >
            <Link
              to="/uses"
              className="group block bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                Uses
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-white/50">Check out my favorite tools</p>
            </Link>
          </motion.div>

          {/* Guestbook Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/guestbook"
              className="group block bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
            >
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">✍️</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                Guestbook
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-white/50">Let me know you were here</p>
            </Link>
          </motion.div>

          {/* Spotify Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-2 lg:col-span-3"
          >
            <div className="bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-4">Last Played</h3>
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-white/10 flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Headphones className="w-8 h-8 text-green-400" />
                </motion.div>
                <div>
                  <p className="text-white font-medium">Raindance (feat. Tems)</p>
                  <p className="text-white/50 text-sm">by Dave, Tems</p>
                  <p className="text-white/30 text-xs">from The Boy Who Played t...</p>
                </div>
                <motion.div 
                  className="ml-auto hidden sm:flex items-center gap-1"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-green-400 rounded-full"
                      animate={{ height: [8, 20, 8] }}
                      transition={{ 
                        duration: 0.5, 
                        repeat: Infinity, 
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsesCard;
