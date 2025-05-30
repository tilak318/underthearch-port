import { useEffect, useState, useRef } from "react";
import { Search, ArrowLeft } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { API_BASE_URL } from "@/config";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound"; // Assuming NotFound is in the same directory
import { useIsMobile } from "@/hooks/use-mobile";

// Slugify function
const slugify = (text: string): string => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars (except hyphen)
    .replace(/--+/g, '-');          // Replace multiple - with single -
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogSectionRef = useRef(null);
  const [blogNotFound, setBlogNotFound] = useState(false);
  const { titleSlug } = useParams();
  const navigate = useNavigate();
  
  // Use mobile detection hook
  const isMobile = useIsMobile();
  
  // State for random video selection
  const [randomVideo, setRandomVideo] = useState<string>('');
  
  // Function to select random video
  const selectRandomVideo = () => {
    const videoNumbers = [1, 2, 3, 4, 5];
    const randomIndex = Math.floor(Math.random() * videoNumbers.length);
    const selectedVideo = `/video/${videoNumbers[randomIndex]}.mp4`;
    setRandomVideo(selectedVideo);
    console.log('Selected random video for Blog page mobile background:', selectedVideo);
  };

  // Select random video on component mount for mobile
  useEffect(() => {
    if (isMobile) {
      selectRandomVideo();
    }
  }, [isMobile]);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs`);
        // const response = await fetch('http://localhost:5000/api/blogs');
        const data = await response.json();
        setBlogPosts(data);
        setBlogNotFound(false); // Reset not found state initially

        // If we have a titleSlug parameter, find and select that blog post
        if (titleSlug && data.length > 0) {
          const foundBlog = data.find(post => slugify(post.title) === titleSlug);
          if (foundBlog) {
            setSelectedBlog(foundBlog);
          } else {
            // Blog with the given slug was not found
            console.warn(`Blog post with slug "${titleSlug}" not found.`);
            setSelectedBlog(null);
            setBlogNotFound(true);
          }
        } else {
          // Reset selectedBlog when on the main blog page (no titleSlug in URL)
          setSelectedBlog(null);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [titleSlug]);

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
  
  // Handle blog selection with optimized navigation
  const handleBlogSelect = (blog, index) => {
    // Immediately set the selected blog to avoid waiting for the effect
    setSelectedBlog(blog);
    // Then update the URL (this won't cause a page reload with React Router)
    navigate(`/blog/${slugify(blog.title)}`);
  };

  if (blogNotFound) {
    return <NotFound />;
  }

  return (
    <>
      <Helmet>
        <title>Blog – UnderTheArch | Insights & Perspectives</title>
        <meta name="description" content="Read the latest insights, news, and articles from UnderTheArch's architectural team." />
        <meta property="og:title" content="Blog | UnderTheArch" />
        <meta property="og:description" content="Stay updated with architectural trends and stories from UnderTheArch." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={selectedBlog ? `https://underthearch.in/blog/${slugify(selectedBlog.title)}` : "https://underthearch.in/blog"} />
        <meta property="og:image" content="https://underthearch.in/og-image-blog.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | UnderTheArch" />
        <meta name="twitter:description" content="Insights and perspectives from the UnderTheArch team." />
        <meta name="twitter:image" content="https://underthearch.in/og-image-blog.jpg" />
      </Helmet>
      
      {/* Only show Hero Section on the main blog page (when no blog is selected) */}
      {!selectedBlog && (
        <section className="h-[100vh] relative flex items-center justify-center overflow-hidden">
          {/* Background Image/Video */}
          <div className="absolute inset-0 z-0">
            {/* Mobile background - Video for mobile, Image as fallback */}
            {isMobile && randomVideo ? (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover object-bottom block sm:hidden"
              >
                <source src={randomVideo} type="video/mp4" />
                {/* Fallback image if video fails to load */}
                <img 
                  src="/projects/S/S-6.png" 
                  alt="Architecture" 
                  className="w-full h-full object-cover object-bottom"
                />
              </video>
            ) : (
              <img 
                src="/projects/S/S-6.png" 
                alt="Architecture" 
                className="w-full h-full object-cover object-bottom block sm:hidden"
              />
            )}
            
            {/* Desktop background image - unchanged */}
            <img 
              src="/projects/S/S-6.png" 
              alt="Architecture" 
              className="w-full h-full object-cover object-bottom hidden sm:block"
            />
            
            {/* Overlay with same opacity as before */}
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
      )}
      
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
              
              {/* Blog Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard
                    key={index}
                    image={post.image}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    author={post.author}
                    sections={post.sections}
                    onSelect={() => handleBlogSelect(post, index)}
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
                onClick={() => navigate('/blog')}
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
                  {selectedBlog.sections && selectedBlog.sections.length > 0 && selectedBlog.sections[0].image ? (
                    <div className="rounded-3xl overflow-hidden">
                      <img
                        src={selectedBlog.sections[0].image}
                        alt={selectedBlog.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  ) : (
                    <div className="rounded-3xl overflow-hidden bg-gray-800 aspect-[4/3] flex items-center justify-center">
                      <p className="text-gray-400">No featured image available</p>
                    </div>
                  )}
                  
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

                  {/* Blog Sections */}
                  {selectedBlog.sections && selectedBlog.sections.length > 0 ? (
                    <div className="space-y-12">
                      {selectedBlog.sections.map((section, index) => (
                        <div key={index} className="space-y-6">
                          {/* Section Title */}
                          {section.title && (
                            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                              {section.title}
                            </h2>
                          )}
                          
                          {/* Section Image (if different from featured image) */}
                          {section.image && index > 0 && (
                            <div className="rounded-2xl overflow-hidden">
                              <img
                                src={section.image}
                                alt={section.title || `Section ${index + 1}`}
                                className="w-full aspect-[16/10] object-cover"
                              />
                            </div>
                          )}
                          
                          {/* Section Content */}
                          {section.content && (
                            <div className="prose prose-invert prose-lg max-w-none
                              prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8
                              prose-h2:text-2xl prose-h3:text-xl
                              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                              prose-blockquote:border-l-4 prose-blockquote:border-gray-500
                              prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300
                              prose-strong:text-white prose-strong:font-semibold
                              prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-300">
                              {section.content.split('\n').map((paragraph, pIndex) => (
                                paragraph.trim() && (
                                  <p key={pIndex} className="text-gray-300 leading-relaxed mb-6">
                                    {paragraph}
                                  </p>
                                )
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-400">No content sections available for this blog post.</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Recommended Blogs Section */}
              <div className="mt-24 pt-16 border-t border-white/10">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Recommended Articles</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {blogPosts
                    .filter(post => post !== selectedBlog) // Exclude current blog
                    .sort(() => 0.5 - Math.random()) // Shuffle array randomly
                    .slice(0, 3) // Take only 3 random posts
                    .map((post, index) => (
                      <BlogCard
                        key={index}
                        image={post.image}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        author={post.author}
                        sections={post.sections}
                        onSelect={() => handleBlogSelect(post, blogPosts.indexOf(post))}
                      />
                    ))}
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
