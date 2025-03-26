import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
          const response = await fetch('https://server-underthearch.onrender.com/api/blogs');
          // const response = await fetch('http://localhost:5000/api/blogs');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blog posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Page transition animation
  useEffect(() => {
    document.body.classList.add('page-transition-enter');
    return () => {
      document.body.classList.remove('page-transition-enter');
      document.body.classList.add('page-transition-exit');
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
            alt="Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 mt-16 text-center">
          <span className="inline-block px-4 py-1 border border-white/20 text-white text-sm rounded-full mb-6">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Insights & Perspectives
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our thoughts on architecture, design trends, and industry innovations.
          </p>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary border border-white/10 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                slug={post.slug}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-white mb-4">No articles found</h3>
              <p className="text-gray-400">
                We couldn't find any articles matching your search criteria. Please try a different search term.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
