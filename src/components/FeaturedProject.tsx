import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-card via-card to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Next Ventures
              </h3>
              <p className="text-white/60 mb-6">
                A platform designed for early-stage entrepreneurs to pitch, browse, 
                and engage with startup ideas. It's built to impress both users and 
                investors with blazing speed, compelling visuals, and a modern tech stack.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-white/70">
                  <span className="text-white/40">•</span>
                  Leveraged Partial Prerendering and After for faster loading.
                </li>
                <li className="flex items-start gap-2 text-white/70">
                  <span className="text-white/40">•</span>
                  Simplified idea submission with a clean, intuitive design.
                </li>
                <li className="flex items-start gap-2 text-white/70">
                  <span className="text-white/40">•</span>
                  Enhanced browsing with seamless performance optimization.
                </li>
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "React", "Sanity CMS", "TypeScript", "Better Auth", "GROQ", "sentry", "Markdown", "Tailwind CSS", "Motion.dev"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-white/60 bg-white/5 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                See more projects
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right - Project Preview */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img
                  src="https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1.2f1e29c9.jpeg&w=1200&q=75"
                  alt="Next Ventures Preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;