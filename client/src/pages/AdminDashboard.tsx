import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="mb-8 px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90"
        >
          {isAddingNew ? 'Cancel' : 'Add New Blog'}
        </button>

        {isAddingNew && (
          <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-secondary p-6 rounded-lg border border-white/10">
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
              className="w-full p-2 bg-black border border-white/10 rounded text-white"
              required
            />
            <input
              type="text"
              placeholder="Slug"
              value={newBlog.slug}
              onChange={(e) => setNewBlog({...newBlog, slug: e.target.value})}
              className="w-full p-2 bg-black border border-white/10 rounded text-white"
              required
            />
            <textarea
              placeholder="Excerpt"
              value={newBlog.excerpt}
              onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
              className="w-full p-2 bg-black border border-white/10 rounded text-white"
              required
            />
            <textarea
              placeholder="Content"
              value={newBlog.content}
              onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
              className="w-full p-2 bg-black border border-white/10 rounded text-white"
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={newBlog.author}
              onChange={(e) => setNewBlog({...newBlog, author: e.target.value})}
              className="w-full p-2 bg-black border border-white/10 rounded text-white"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newBlog.image}
              onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
              className="w-full p-2 bg-black border border-white/10 rounded text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90"
            >
              Add Blog
            </button>
          </form>
        )}

        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-6 bg-secondary rounded-lg border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">{blog.title}</h2>
                  <p className="text-gray-400">{blog.excerpt}</p>
                  <p className="text-sm text-gray-500 mt-2">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
                </div>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 