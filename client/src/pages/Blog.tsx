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
            src="/EFS-3.png" 
            alt="Architecture" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white 
          text-base md:text-lg rounded-full mb-4 sm:mb-8">
            Our Blog
          </span>
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
            // Blog Detail View
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="mb-8 px-6 py-3 bg-secondary text-white rounded-lg font-medium 
                  hover:bg-secondary/80 transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Blogs
              </button>

              {/* Blog Content */}
              <article className="bg-secondary rounded-2xl overflow-hidden">
                {/* Meta Info - Moved to top */}
                <div className="p-6 md:p-12 pb-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-gray-400 text-xs md:text-sm mb-6">
                    <span>{new Date(selectedBlog.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>By {selectedBlog.author}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
                    {selectedBlog.title}
                  </h1>
                </div>

                {/* Hero Image */}
                <div className="aspect-video w-full">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-12">
                  {/* Excerpt */}
                  <p className="text-base md:text-lg text-gray-300 mb-8">
                    {selectedBlog.excerpt}
                  </p>

                  {/* Main Content */}
                  <div className="prose prose-invert max-w-none">
                    {selectedBlog.content}
                  </div>
                </div>
              </article>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
