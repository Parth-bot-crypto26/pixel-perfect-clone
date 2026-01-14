import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, Command } from "lucide-react";
import { useState, useMemo } from "react";

const blogPosts = [
  {
    date: "Mar 18 2025",
    title: "My 2025 Stack as a Frontend Developer",
    excerpt: "As a Frontend Developer in 2025, I've fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization. Let me walk you through my stack...",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    slug: "tech-stack-2025-as-a-frontend-dev",
    topics: ["tools", "setup", "productivity"],
  },
  {
    date: "Jun 27 2025",
    title: "How to Build a Blog with Next.js and MDX",
    excerpt: "Build a blazing fast markdown blog using Next.js and MDX with this complete walkthrough. Learn how to set up MDX, create dynamic routes, and style your content.",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    slug: "how-to-build-a-blog-with-nextjs-and-mdx",
    topics: ["nextjs", "react", "typescript"],
  },
  {
    date: "Dec 15 2024",
    title: "Learning Programming – Easy to Start, Hard to Master",
    excerpt: "Programming is more accessible than ever, yet mastering it takes time, persistence, and clarity. Let's bust some myths, and cover what I wish I knew when I started.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    slug: "learning-programming",
    topics: ["tips", "core-concept"],
  },
];

const allTopics = [
  "nextjs", "react", "css", "tailwindcss", "java", "flexbox", "design", "tips",
  "grid", "tools", "vite", "core-concept", "git", "pattern", "typescript", "setup",
  "form", "productivity", "web", "animation"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopics = selectedTopics.length === 0 || 
                           post.topics.some(t => selectedTopics.includes(t));
      return matchesSearch && matchesTopics;
    });
  }, [searchQuery, selectedTopics]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top Blur Overlay */}
      <div 
        className="pointer-events-none fixed left-0 z-40 w-full select-none" 
        style={{ 
          top: 0, 
          height: '150px', 
          maskImage: 'linear-gradient(black 50%, transparent)', 
          backdropFilter: 'blur(5px)' 
        }} 
      />
      
      {/* Special Blog Nav - shows greeting */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
      >
        <nav className="flex items-center gap-1 px-6 py-3 rounded-full glass-dark">
          <span className="text-white/80">{getGreeting()}</span>
        </nav>
      </motion.header>
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center mb-16"
          >
            <span className="text-sm text-white/50 uppercase tracking-[0.2em]">THE PENSIEVE</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-3">
              Handpicked <span className="serif-italic text-pink-400">Insights</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Explore Label */}
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider">EXPLORE</span>
                <h3 className="text-2xl font-semibold text-white mt-1">Library</h3>
                <p className="text-white/50 text-sm mt-2">Showing {filteredPosts.length} posts</p>
              </div>

              {/* Search */}
              <div className="space-y-2">
                <span className="text-xs text-white/40 uppercase tracking-wider">SEARCH</span>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-16 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 transition-colors"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-xs text-white/40">
                    <Command className="w-3 h-3" />
                    K
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div className="space-y-3">
                <span className="text-xs text-white/40 uppercase tracking-wider">TOPICS</span>
                <div className="flex flex-wrap gap-2">
                  {allTopics.map((topic) => (
                    <motion.button
                      key={topic}
                      onClick={() => toggleTopic(topic)}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                        selectedTopics.includes(topic)
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 text-white/60 border-white/10 hover:border-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {topic}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Blog Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="group bg-card/50 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      <span className="text-sm text-white/40 font-mono">{post.date}</span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white mt-2 group-hover:text-white/90 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-white/50 mt-3 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-1.5 text-white/40 text-sm">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <motion.span 
                          className="flex items-center gap-1.5 text-white text-sm group-hover:gap-2.5 transition-all"
                          whileHover={{ x: 5 }}
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-48 h-32 md:h-auto rounded-xl overflow-hidden flex-shrink-0">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.article>
              ))}

              {filteredPosts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-white/50">No posts found matching your criteria.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Blog;
