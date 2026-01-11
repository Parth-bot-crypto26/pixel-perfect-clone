import { motion } from "framer-motion";

const testimonials = [
  {
    title: "An Artist with Code Who Delivers Real SEO Results",
    content: "Aayush is an artist with code. We went from 'I want something high-tech and fast' to a fully built, high-ranking website in just over a week. He is constantly advancing his craft, ensuring our Sanity CMS implementation adheres to the newest standards for speed and efficiency. The results speak for themselves.",
    name: "Michael Davis",
    role: "Founder/CTO • Apex Consulting",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.56bedfe6.jpg&w=320&q=75",
  },
  {
    title: "Simply the best developer I've worked with.",
    content: "Aayush is the man! He is simply the best developer I've worked with. He took our design requirements and quite literally ran with them, translating everything into a robust, WCAG accessible platform. We are super happy with the final product. To anyone reading this—I can't recommend Aayush enough, your job will be done exceptionally well.",
    name: "Jennifer Wilson",
    role: "Founder • Blue Harbor Agency",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.ad91aed3.jpg&w=320&q=75",
  },
  {
    title: "Professional, Quick, and a Seamless CMS Integration",
    content: "Aayush was quick to respond, very professional, and delivered our fully SEO-optimized site ahead of schedule. The integration with our headless CMS was seamless and exactly what we needed for easy content management. Very good job. Looking forward to collaborating again soon.",
    name: "Robert Johnson",
    role: "Startup Agency Owner",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.a0e92b16.jpg&w=320&q=75",
  },
  {
    title: "Excellent Communication and a Huge Jump in Core Web Vitals",
    content: "Excellent communication and professionalism from the start and throughout. Aayush calmly entertained a few additional requests, always maintaining an open-minded approach to suggestions and feedback. Our Core Web Vitals jumped immediately after deployment. An excellent experience overall, we will certainly re-engage Aayush for future projects.",
    name: "Tony Parker",
    role: "Founder • Metro Solutions Group",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.bed21a52.jpg&w=320&q=75",
  },
  {
    title: "His JavaScript/React Skills are Through the Roof",
    content: "I've been working with Aayush for a couple of months now and I can't express enough how impressed I am with his talent. His JavaScript/React web UI programming skills are through the roof. We have a streamlined workflow, and he's extremely responsive, brief, and efficient. If Aayush says he can deliver a project, rest assured he can, he will, and it will be awesome.",
    name: "Chris Taylor",
    role: "Chairperson • Core Fitness Club",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.d59b1e45.jpg&w=320&q=75",
  },
  {
    title: "He's Not Just a Developer, He's a True Partner",
    content: "Aayush is a genius. He is open-minded, curious, and deeply invested in the projects he chooses to work on. He takes your product vision—even the vague 'dark theme, high tech' ideas—and brings it to life. He's not just a developer; he's a true partner in the process. He's brilliant!",
    name: "Sarah Chen",
    role: "Product Owner • Digital Bridge Consulting",
    image: "https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3b7bf169.jpg&w=320&q=75",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-white/50 uppercase tracking-wider">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-2">
            Word on the street <span className="serif-italic">about me</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {testimonial.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;