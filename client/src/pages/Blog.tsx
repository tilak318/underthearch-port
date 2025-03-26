import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { motion } from 'framer-motion';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
  date: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  // Filter blog posts based on search query
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest articles and insights about architecture and design
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-400">{post.category}</span>
                <h2 className="text-xl font-bold text-white mt-2 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {post.content.substring(0, 150)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.author}</span>
                  <span className="text-sm text-gray-400">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
