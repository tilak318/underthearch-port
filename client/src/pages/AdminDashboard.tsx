import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X, Mail, Check, Trash2, Briefcase, Eye, Loader2 } from 'lucide-react';
import ManageCareers from '../components/ManageCareers';
import { toast } from "sonner";
import { API_BASE_URL } from "@/config";

interface BlogSection {
  title: string;
  content: string;
  image: string;
  order: number;
}

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  sections: BlogSection[];
}

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    excerpt: '',
    author: '',
    slug: '',
    sections: [
      {
        title: '',
        content: '',
        image: '',
        order: 0
      }
    ]
  });
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const [isLoadingContacts, setIsLoadingContacts] = useState(true);
  const navigate = useNavigate();

  // Function to add a new section
  const addNewSection = () => {
    setNewBlog(prev => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          title: '',
          content: '',
          image: '',
          order: prev.sections.length
        }
      ]
    }));
  };

  // Function to remove a section
  const removeSection = (index: number) => {
    if (newBlog.sections.length > 1) {
      setNewBlog(prev => ({
        ...prev,
        sections: prev.sections.filter((_, i) => i !== index)
      }));
    }
  };

  // Function to update a specific section
  const updateSection = (index: number, field: string, value: string) => {
    setNewBlog(prev => ({
      ...prev,
      sections: prev.sections.map((section, i) => 
        i === index ? { ...section, [field]: value } : section
      )
    }));
  };

  useEffect(() => {
    console.log('Component mounted');
    fetchBlogs();
    fetchContacts();
    checkAuth();
  }, []);

  useEffect(() => {
    console.log('Current contacts:', contacts);
  }, [contacts]);

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  };

  const fetchBlogs = async () => {
    if (blogs.length === 0) setIsLoadingBlogs(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blogs');
    } finally {
      setIsLoadingBlogs(false);
    }
  };

  const fetchContacts = async () => {
    if (contacts.length === 0) setIsLoadingContacts(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch contacts');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast.error('Failed to load contacts');
    } finally {
      setIsLoadingContacts(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
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
    
    // Validate that at least one section has content
    const validSections = newBlog.sections.filter(section => 
      section.title.trim() && section.content.trim()
    );
    
    if (validSections.length === 0) {
      toast.error('Please add at least one section with title and content');
      return;
    }

    try {
      await fetch(`${API_BASE_URL}/api/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({
          ...newBlog,
          sections: validSections
        })
      });
      setIsAddingNew(false);
      setNewBlog({
        title: '',
        excerpt: '',
        author: '',
        slug: '',
        sections: [
          {
            title: '',
            content: '',
            image: '',
            order: 0
          }
        ]
      });
      fetchBlogs();
      toast.success('Blog published successfully!');
    } catch (error) {
      console.error('Error adding blog:', error);
      toast.error('Failed to publish blog');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleMigrateBlog = async () => {
    if (!window.confirm('This will convert all existing blogs to the new sections format. This action cannot be undone. Continue?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/migrate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success(data.message || 'Migration completed successfully');
        fetchBlogs(); // Refresh the blogs list
      } else {
        toast.error(data.error || 'Migration failed');
      }
    } catch (error) {
      console.error('Migration error:', error);
      toast.error('Migration failed');
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      if (response.ok) {
        toast.success('Contact deleted successfully');
        fetchContacts(); // Refresh the list after deletion
      } else {
        toast.error('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      toast.error('Error deleting contact');
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        toast.success('Marked as read');
        fetchContacts(); // Refresh the list after marking as read
      } else {
        toast.error('Failed to mark as read');
      }
    } catch (error) {
      console.error('Error marking contact as read:', error);
      toast.error('Error marking as read');
    }
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
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => {
              setIsAddingNew(false);
              setShowContacts(false);
              setShowCareers(false);
              if (blogs.length === 0) fetchBlogs();
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base
              flex items-center justify-center sm:justify-start gap-2 ${
                !showContacts && !showCareers
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              } transition-colors w-full sm:w-auto`}
          >
            <Plus size={18} /> Manage Blogs
          </button>
          
          <button
            onClick={() => {
              setIsAddingNew(false);
              setShowContacts(true);
              setShowCareers(false);
              if (contacts.length === 0) fetchContacts();
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base
              flex items-center justify-center sm:justify-start gap-2 ${
                showContacts
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              } transition-colors w-full sm:w-auto`}
          >
            <Mail size={18} /> Manage Contacts
          </button>

          <button
            onClick={() => {
              setIsAddingNew(false);
              setShowContacts(false);
              setShowCareers(true);
            }}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base
              flex items-center justify-center sm:justify-start gap-2 ${
                showCareers
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              } transition-colors w-full sm:w-auto`}
          >
            <Briefcase size={18} /> Manage Careers
          </button>
        </div>

        {!showContacts && !showCareers ? (
          <>
            <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
              <button
                onClick={() => setIsAddingNew(!isAddingNew)}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-medium 
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

              <button
                onClick={handleMigrateBlog}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium 
                  hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <Briefcase size={18} /> Migrate Old Blogs
              </button>
            </div>

            {isAddingNew && (
              <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 bg-gray-900/80 p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">Add New Blog Post</h2>
                
                <div className="space-y-6">
                  {/* Basic Blog Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-white border-b border-gray-700 pb-2">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Blog Title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                        className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white 
                          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 
                          focus:border-transparent hover:border-gray-600 transition-all"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Slug (URL-friendly)"
                        value={newBlog.slug}
                        onChange={(e) => setNewBlog({...newBlog, slug: e.target.value})}
                        className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white 
                          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 
                          focus:border-transparent hover:border-gray-600 transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                      <input
                        type="text"
                        placeholder="Author Name"
                        value={newBlog.author}
                        onChange={(e) => setNewBlog({...newBlog, author: e.target.value})}
                        className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white 
                          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 
                          focus:border-transparent hover:border-gray-600 transition-all"
                        required
                      />
                    </div>

                    <textarea
                      placeholder="Blog Excerpt (Brief description)"
                      value={newBlog.excerpt}
                      onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
                      className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white 
                        placeholder-gray-400 h-24 focus:outline-none focus:ring-2 focus:ring-white/20 
                        focus:border-transparent hover:border-gray-600 transition-all"
                      required
                    />
                  </div>

                  {/* Blog Sections */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white border-b border-gray-700 pb-2">Blog Sections</h3>
                      <button
                        type="button"
                        onClick={addNewSection}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium 
                          hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
                      >
                        <Plus size={16} /> Add Section
                      </button>
                    </div>

                    {newBlog.sections.map((section, index) => (
                      <div key={index} className="bg-black/30 rounded-lg p-4 border border-gray-600">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-white font-medium">Section {index + 1}</h4>
                          {newBlog.sections.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSection(index)}
                              className="p-1.5 bg-red-600/20 text-red-500 rounded-lg
                                hover:bg-red-600 hover:text-white transition-colors"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>

                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Section Title"
                            value={section.title}
                            onChange={(e) => updateSection(index, 'title', e.target.value)}
                            className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white 
                              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 
                              focus:border-transparent hover:border-gray-600 transition-all"
                            required
                          />

                          <input
                            type="text"
                            placeholder="Image URL (optional)"
                            value={section.image}
                            onChange={(e) => updateSection(index, 'image', e.target.value)}
                            className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white 
                              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 
                              focus:border-transparent hover:border-gray-600 transition-all"
                          />

                          <textarea
                            placeholder="Section Content"
                            value={section.content}
                            onChange={(e) => updateSection(index, 'content', e.target.value)}
                            className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white 
                              placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-white/20 
                              focus:border-transparent hover:border-gray-600 transition-all"
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-black rounded-lg font-medium 
                      hover:bg-white/90 transition-colors"
                  >
                    Publish Blog
                  </button>
                </div>
              </form>
            )}

            {isLoadingBlogs && blogs.length === 0 ? (
              <div className="text-center py-16">
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
                  <p className="text-gray-400 text-lg">Loading blogs...</p>
                </div>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-16 sm:py-20">
                <p className="text-gray-400 text-base sm:text-lg">No blogs posted yet.</p>
              </div>  
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {blogs.map((blog) => (
                  <div 
                    key={blog._id} 
                    className="bg-gray-900/80 rounded-xl border border-gray-700 p-6 
                      hover:border-gray-600 transition-all relative"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        {blog.sections && blog.sections.length > 0 && blog.sections[0].image && (
                          <div className="h-24 w-24 rounded-lg overflow-hidden">
                            <img 
                              src={blog.sections[0].image} 
                              alt={blog.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                          <p className="text-gray-400">By {blog.author}</p>
                          <p className="text-gray-500 text-sm">
                            {new Date(blog.date).toLocaleDateString()}
                          </p>
                          <p className="text-blue-400 text-sm mt-1">
                            {blog.sections ? blog.sections.length : 0} section(s)
                          </p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="p-2 bg-red-600/10 text-red-500 rounded-lg
                          hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="bg-black/50 rounded-lg p-4 mt-4">
                      <p className="text-gray-400 mb-3">{blog.excerpt}</p>
                      <div className="text-sm text-gray-500">
                        Slug: {blog.slug}
                      </div>
                      {blog.sections && blog.sections.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-600">
                          <p className="text-sm text-gray-400 mb-2">Preview of sections:</p>
                          <div className="space-y-2">
                            {blog.sections.slice(0, 2).map((section, index) => (
                              <div key={index} className="text-sm">
                                <span className="text-white font-medium">{section.title}</span>
                                {section.content && (
                                  <p className="text-gray-500 text-xs mt-1 truncate">
                                    {section.content.substring(0, 100)}...
                                  </p>
                                )}
                              </div>
                            ))}
                            {blog.sections.length > 2 && (
                              <p className="text-xs text-gray-500">
                                ... and {blog.sections.length - 2} more section(s)
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : showContacts ? (
          <div className="space-y-4">
            {isLoadingContacts && contacts.length === 0 ? (
              <div className="text-center py-16">
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
                  <p className="text-gray-400 text-lg">Loading contacts...</p>
                </div>
              </div>
            ) : contacts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">
                  No contact submissions yet.
                </p>
              </div>
            ) : (
              contacts.map((contact) => (
                <div
                  key={contact._id}
                  className={`bg-gray-900/80 rounded-xl border ${
                    contact.isRead ? 'border-gray-700' : 'border-yellow-500/50'
                  } p-6 hover:border-gray-600 transition-all relative`}
                >
                  <div className="absolute top-4 right-4 flex gap-2">
                    {!contact.isRead && (
                      <button
                        onClick={() => handleMarkAsRead(contact._id)}
                        className="p-2 bg-blue-600/20 text-blue-500 rounded-lg
                          hover:bg-blue-600 hover:text-white transition-colors"
                        title="Mark as read"
                      >
                        <Eye size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteContact(contact._id)}
                      className="p-2 bg-red-600/20 text-red-500 rounded-lg
                        hover:bg-red-600 hover:text-white transition-colors"
                      title="Delete contact"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="space-y-1 mb-6">
                    <h3 className="text-xl font-semibold text-white">{contact.name}</h3>
                    <div className="text-gray-400 space-y-1">
                      <p>Email: {contact.email}</p>
                      {contact.phone && <p>Phone: {contact.phone}</p>}
                    </div>
                  </div>

                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-medium mb-2">
                      Subject: {contact.subject}
                    </h4>
                    <p className="text-gray-400">
                      {contact.message}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500">
                    Received: {new Date(contact.date).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <ManageCareers />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 