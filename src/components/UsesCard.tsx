import { motion } from "framer-motion";
import { ArrowUpRight, Headphones } from "lucide-react";

const UsesCard = () => {
  const tools = [
    { name: "Raycast", image: "https://aayushbharti.in/uses/raycast_logo.png" },
    { name: "Arc", image: "https://aayushbharti.in/uses/arc_logo.png" },
    { name: "VSCode", image: "https://aayushbharti.in/uses/vscode_logo.png" },
    { name: "Obsidian", image: "https://aayushbharti.in/uses/obsidian_logo.png" },
    { name: "Notion", image: "https://aayushbharti.in/uses/notion_logo.png" },
  ];

  return (
    <section className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm text-white/50 uppercase tracking-wider">MY SITE</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
            Explore, experiment <span className="serif-italic">&& say hello</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Uses Card */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 col-span-1 lg:col-span-2"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                >
                  <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              Uses
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-white/60">Check out my favorite tools</p>
          </motion.a>

          {/* Guestbook Card */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6">
              <span className="text-2xl">✍️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              Guestbook
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-white/60">Let me know you were here</p>
          </motion.a>

          {/* Spotify Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-3xl p-6 border border-white/10 col-span-1 md:col-span-2 lg:col-span-3"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Last Played</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-white/10 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Raindance (feat. Tems)</p>
                <p className="text-white/60 text-sm">by Dave, Tems</p>
                <p className="text-white/40 text-xs">from The Boy Who Played t...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsesCard;