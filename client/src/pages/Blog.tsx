import { useEffect, useState, useRef } from "react";
import { Search, ArrowLeft } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { API_BASE_URL } from "@/config";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogSectionRef = useRef(null);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs`);
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

  // Modify the scroll effect to scroll to the blog section
  useEffect(() => {
    if (selectedBlog && blogSectionRef.current) {
      blogSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedBlog]);

  return (
    <>
      {/* Hero Section */}
      <section className="h-[85vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            // src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
            src="/S-6.png" 
            alt="Architecture" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white 
          text-base md:text-lg rounded-full mb-4 sm:mb-8">
            Our Blog
          </span> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Insights & Perspectives
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Stay updated with our latest architectural insights and innovations.
          </p>
        </div>
      </section>
      
      {/* Blog Section */}
      <section ref={blogSectionRef} className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          {!selectedBlog ? (
            <>
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
                    key={post._id}
                    image={post.image}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    author={post.author}
                    onSelect={() => setSelectedBlog(post)}
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
            </>
          ) : (
            // New Blog Detail View with Side-by-Side Layout
            <div className="max-w-[1400px] mx-auto">
              {/* Navigation Bar */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-6 py-3 mb-12 bg-white/10 text-white rounded-xl font-medium 
                  hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-3"
              >
                <ArrowLeft size={20} />
                Back to Articles
              </button>

              {/* Article Header */}
              <header className="mb-16 text-center">
                <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-6">
                  <span className="px-4 py-1 bg-white/10 rounded-full">
                    {new Date(selectedBlog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span>•</span>
                  <span className="px-4 py-1 bg-white/10 rounded-full">
                    By {selectedBlog.author}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                  {selectedBlog.title}
                </h1>
              </header>

              {/* Main Content with Side-by-Side Layout */}
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Side - Featured Image */}
                <div className="lg:w-1/2 sticky top-8 h-fit">
                  <div className="rounded-3xl overflow-hidden">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  
                  {/* Author Info - Simplified */}
                  <div className="mt-8 p-4 bg-white/5 rounded-xl">
                    <h4 className="text-white font-medium text-center">
                      {selectedBlog.author}
                    </h4>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="lg:w-1/2">
                  {/* Excerpt */}
                  <div className="text-xl text-gray-300 mb-12 leading-relaxed">
                    {selectedBlog.excerpt}
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-12
                    prose-h2:text-3xl prose-h3:text-2xl
                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                    prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-gray-500
                    prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-300">
                    {selectedBlog.content}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
