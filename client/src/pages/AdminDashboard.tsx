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
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="mb-8 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
        >
          {isAddingNew ? (
            <>
              <X size={20} /> Cancel
            </>
          ) : (
            <>
              <Plus size={20} /> Add New Blog
            </>
          )}
        </button>

        {isAddingNew && (
          <form onSubmit={handleSubmit} className="mb-8 bg-secondary/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Title"
                value={newBlog.title}
                onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <input
                type="text"
                placeholder="Slug"
                value={newBlog.slug}
                onChange={(e) => setNewBlog({...newBlog, slug: e.target.value})}
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <input
                type="text"
                placeholder="Author"
                value={newBlog.author}
                onChange={(e) => setNewBlog({...newBlog, author: e.target.value})}
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newBlog.image}
                onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
                className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
            </div>
            <textarea
              placeholder="Excerpt"
              value={newBlog.excerpt}
              onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
              className="w-full p-3 mt-6 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 h-24"
              required
            />
            <textarea
              placeholder="Content"
              value={newBlog.content}
              onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
              className="w-full p-3 mt-6 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 h-48"
              required
            />
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Publish Blog
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-secondary/50 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
              {blog.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-3">{blog.title}</h2>
                <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    By {blog.author} <br/>
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-4 py-2 bg-red-600/20 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No blogs posted yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 