import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed left-0 z-40 w-full select-none" style={{ top: 0, height: '150px', maskImage: 'linear-gradient(black 50%, transparent)', backdropFilter: 'blur(5px)' }} />
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-sm text-white/50 uppercase tracking-wider">GET IN TOUCH</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-2">
              Let's <span className="serif-italic text-pink-400">Connect</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, title: "Email", value: "hello@aayushbharti.in", href: "mailto:hello@aayushbharti.in" },
              { icon: MapPin, title: "Location", value: "India (Remote)", href: "#" },
              { icon: Calendar, title: "Schedule", value: "Book a Call", href: "#" },
            ].map((item, i) => (
              <motion.a key={item.title} href={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors text-center">
                <item.icon className="w-8 h-8 text-white/60 mx-auto mb-4" />
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20" />
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 mb-6" />
            <textarea placeholder="Your message..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 mb-6 resize-none" />
            <button type="submit" className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Contact;
