import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  date: string;
  slug: string;
}

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    image: '',
    slug: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(newBlog)
      });
      setIsAddingNew(false);
      setNewBlog({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        image: '',
        slug: ''
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center relative">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Admin Dashboard</h1>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
              <img 
                src="/lovable-uploads/1ebf338e-3643-4bdd-83c3-a4b06835e2c3.png" 
                alt="UnderTheArch Logo" 
                className="h-8 sm:h-10 md:h-12"
              />
            </div>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 text-white text-sm sm:text-base rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-medium 
            hover:bg-white/90 transition-colors flex items-center gap-2 text-sm sm:text-base"
        >
          {isAddingNew ? (
            <>
              <X size={18} /> Cancel
            </>
          ) : (
            <>
              <Plus size={18} /> Add New Blog
            </>
          )}
        </button>

        {isAddingNew && (
          <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 bg-gray-900/80 p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
                    text-sm sm:text-base placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent 
                    hover:border-gray-600 transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Slug"
                  value={newBlog.slug}
                  onChange={(e) => setNewBlog({...newBlog, slug: e.target.value})}
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
                    text-sm sm:text-base placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent 
                    hover:border-gray-600 transition-all"
                  required
                />
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Author"
                  value={newBlog.author}
                  onChange={(e) => setNewBlog({...newBlog, author: e.target.value})}
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
                    text-sm sm:text-base placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent 
                    hover:border-gray-600 transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newBlog.image}
                  onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
                  className="w-full p-2.5 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white 
                    text-sm sm:text-base placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent 
                    hover:border-gray-600 transition-all"
                  required
                />
              </div>
            </div>

            <textarea
              placeholder="Excerpt"
              value={newBlog.excerpt}
              onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
              className="w-full p-2.5 sm:p-3 mt-4 sm:mt-6 bg-gray-800 border border-gray-700 rounded-lg text-white 
                text-sm sm:text-base placeholder-gray-400 h-20 sm:h-24
                focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent 
                hover:border-gray-600 transition-all"
              required
            />
            <textarea
              placeholder="Content"
              value={newBlog.content}
              onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
              className="w-full p-2.5 sm:p-3 mt-4 sm:mt-6 bg-gray-800 border border-gray-700 rounded-lg text-white 
                text-sm sm:text-base placeholder-gray-400 h-32 sm:h-48
                focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent 
                hover:border-gray-600 transition-all"
              required
            />
            
            <button
              type="submit"
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-lg 
                font-medium text-sm sm:text-base hover:bg-white/90 transition-colors"
            >
              Publish Blog
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-gray-900/80 rounded-xl border border-gray-700 overflow-hidden 
              hover:border-gray-600 transition-all group">
              {blog.image && (
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{blog.title}</h2>
                <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs sm:text-sm text-gray-500">
                    By {blog.author} <br/>
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/20 text-red-500 text-sm sm:text-base
                      rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <p className="text-gray-400 text-base sm:text-lg">No blogs posted yet.</p>
          </div>  
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 