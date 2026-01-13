import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";

const tools = [
  { name: "Raycast", desc: "Spotlight replacement", image: "https://aayushbharti.in/uses/raycast_logo.png" },
  { name: "Arc", desc: "Browser", image: "https://aayushbharti.in/uses/arc_logo.png" },
  { name: "VSCode", desc: "Code Editor", image: "https://aayushbharti.in/uses/vscode_logo.png" },
  { name: "Obsidian", desc: "Notes", image: "https://aayushbharti.in/uses/obsidian_logo.png" },
  { name: "Notion", desc: "Project Management", image: "https://aayushbharti.in/uses/notion_logo.png" },
];

const Uses = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed left-0 z-40 w-full select-none" style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-sm text-white/50 uppercase tracking-wider">MY SETUP</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-2">
              Tools I <span className="serif-italic text-pink-400">Use</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <motion.div key={tool.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors flex items-center gap-4">
                <img src={tool.image} alt={tool.name} className="w-12 h-12 rounded-xl" />
                <div>
                  <h3 className="text-white font-medium">{tool.name}</h3>
                  <p className="text-white/60 text-sm">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Uses;
