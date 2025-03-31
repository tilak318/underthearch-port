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
      const response = await fetch('https://underthearch-22pt.onrender.com/api/career/applications', {
      // const response = await fetch('http://localhost:5000/api/career/applications', {
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
      const response = await fetch(`https://underthearch-22pt.onrender.com/api/career/applications/${id}/mark-read`, {
      // const response = await fetch(`http://localhost:5000/api/career/applications/${id}/mark-read`, {
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
      const response = await fetch(`https://underthearch-22pt.onrender.com/api/career/applications/${id}`, {
      // const response = await fetch(`http://localhost:5000/api/career/applications/${id}`, {
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

  if (loading) return <div className="text-center py-8 text-gray-400">Loading...</div>;

  return (
    <div className="space-y-4">
      {careers.map((career) => (
        <div 
          key={career._id}
          className={`bg-gray-900/80 rounded-xl border ${
            career.isRead ? 'border-gray-700' : 'border-yellow-500/50'
          } p-6 hover:border-gray-600 transition-all relative`}
        >
          {/* Actions Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            {!career.isRead && (
              <button
                onClick={() => handleMarkAsRead(career._id)}
                className="p-2 bg-blue-600/20 text-blue-500 rounded-lg
                  hover:bg-blue-600 hover:text-white transition-colors"
                title="Mark as read"
              >
                <Eye className="w-5 h-5" />
              </button>
            )}
            {career.resumePath && (
              <a
                href={`https://underthearch-22pt.onrender.com/${career.resumePath}`}
                // href={`http://localhost:5000/${career.resumePath}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 text-gray-400 rounded-lg
                  hover:bg-gray-700 hover:text-white transition-colors"
                title="Download Resume"
              >
                <Download className="w-5 h-5" />
              </a>
            )}
            <button
              onClick={() => handleDelete(career._id)}
              className="p-2 bg-red-600/20 text-red-500 rounded-lg
                hover:bg-red-600 hover:text-white transition-colors"
              title="Delete application"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          {/* Applicant Info */}
          <div className="space-y-1 mb-6">
            <h3 className="text-xl font-semibold text-white">{career.fullName}</h3>
            <div className="text-gray-400 space-y-1">
              <p>Position: {career.position}</p>
              <p>Email: {career.email}</p>
              <p>Phone: {career.phone}</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="bg-black/50 rounded-lg p-4 mb-4">
            <p className="text-gray-400">{career.message}</p>
          </div>

          {/* Timestamp and Status */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              Received: {new Date(career.date).toLocaleString()}
            </div>
            <div>
              Status: {career.isRead ? 'Read' : 'Unread'}
            </div>
          </div>
        </div>
      ))}

      {careers.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No career applications yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default ManageCareers; 