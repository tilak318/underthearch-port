import { useState, useEffect } from 'react';
import { Trash2, Eye, Download } from 'lucide-react';
import { toast } from 'sonner';

interface Career {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resumePath: string;
  date: string;
  isRead: boolean;
}

const ManageCareers = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCareers = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/career/applications', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to fetch careers');
      
      const data = await response.json();
      setCareers(data);
    } catch (error) {
      toast.error('Failed to load career applications');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleMarkAsRead = async (id: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/career/applications/${id}/mark-read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to mark as read');

      setCareers(careers.map(career => 
        career._id === id ? { ...career, isRead: true } : career
      ));
      toast.success('Marked as read');
    } catch (error) {
      toast.error('Failed to mark as read');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this application?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/career/applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Failed to delete application');

      setCareers(careers.filter(career => career._id !== id));
      toast.success('Application deleted successfully');
    } catch (error) {
      toast.error('Failed to delete application');
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Manage Career Applications</h2>
      
      <div className="space-y-4">
        {careers.map((career) => (
          <div 
            key={career._id}
            className={`bg-secondary p-6 rounded-lg border ${
              career.isRead ? 'border-white/10' : 'border-white/30'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{career.fullName}</h3>
                <p className="text-gray-400">Position: {career.position}</p>
              </div>
              <div className="flex space-x-3">
                {!career.isRead && (
                  <button
                    onClick={() => handleMarkAsRead(career._id)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Mark as read"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                )}
                {career.resumePath && (
                  <a
                    href={`http://localhost:5000/${career.resumePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Download Resume"
                  >
                    <Download className="w-5 h-5 text-white" />
                  </a>
                )}
                <button
                  onClick={() => handleDelete(career._id)}
                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                  title="Delete application"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-400">Email: {career.email}</p>
                <p className="text-gray-400">Phone: {career.phone}</p>
              </div>
              <div>
                <p className="text-gray-400">
                  Date: {new Date(career.date).toLocaleDateString()}
                </p>
                <p className="text-gray-400">
                  Status: {career.isRead ? 'Read' : 'Unread'}
                </p>
              </div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="text-gray-300">{career.message}</p>
            </div>
          </div>
        ))}
        
        {careers.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No career applications yet
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCareers; 