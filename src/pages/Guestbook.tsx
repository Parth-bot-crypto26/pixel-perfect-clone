import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";

const Guestbook = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed left-0 z-40 w-full select-none" style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-sm text-white/50 uppercase tracking-wider">SAY HELLO</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-2">
              Guest<span className="serif-italic text-pink-400">book</span>
            </h1>
            <p className="text-white/60 mt-4">Leave a message and let me know you were here!</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl p-8 border border-white/10 mb-8">
            <textarea placeholder="Write your message..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 mb-4 resize-none" />
            <button className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors">
              Sign Guestbook
            </button>
          </motion.div>

          <div className="space-y-4">
            {["Great portfolio!", "Love the design!", "Awesome work!"].map((msg, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="bg-card/50 rounded-xl p-4 border border-white/5">
                <p className="text-white/70">{msg}</p>
                <p className="text-white/40 text-sm mt-2">Anonymous • Just now</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Guestbook;
