import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Payment System Architecture",
    description: "Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience.",
  },
  {
    title: "Monitoring & Analytics Infrastructure",
    description: "Provides real-time insights into user behavior, system performance, and key business metrics.",
  },
  {
    title: "Design System & UI Consistency",
    description: "Unified design assets, including logos and themes, ensuring consistent branding across the platform.",
  },
  {
    title: "API Gateway & Documentation",
    description: "Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices.",
  },
  {
    title: "User Onboarding Flow Design",
    description: "Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits.",
  },
];

const FeatureMarquee = ({ reverse = false }: { reverse?: boolean }) => {
  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
  
  return (
    <div className="flex overflow-hidden py-2">
      <div className={`flex gap-4 ${animationClass}`}>
        {[...features, ...features, ...features].map((feature, i) => (
          <div
            key={`${feature.title}-${i}`}
            className="flex-shrink-0 w-80 p-4 bg-card rounded-2xl border border-white/10"
          >
            <h4 className="text-white font-medium mb-2">{feature.title}</h4>
            <p className="text-white/50 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const InsideScoop = () => {
  return (
    <section className="relative z-10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">The Inside Scoop</h3>
            <p className="text-white/60">Currently building a Saas Application</p>
          </div>
          <a
            href="#work"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            View Recent work
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <div className="space-y-4">
        <FeatureMarquee />
        <FeatureMarquee reverse />
      </div>
    </section>
  );
};

export default InsideScoop;