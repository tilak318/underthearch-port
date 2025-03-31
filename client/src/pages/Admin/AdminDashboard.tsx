import React, { useState } from 'react';

// Add this interface
interface CareerApplication {
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

const AdminDashboard = () => {
  // Add these states
  const [showCareers, setShowCareers] = useState(false);
  const [applications, setApplications] = useState<CareerApplication[]>([]);

  // Add this function to fetch applications
  const fetchApplications = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/career/applications', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch applications');
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Add this function to download resume
  const handleDownloadResume = (resumePath: string) => {
    const filename = resumePath.split('/').pop();
    window.open(`http://localhost:5000/api/career/resume/${filename}`);
  };

  // Add this to your JSX where you want to show the career applications
  {showCareers && (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Career Applications</h2>
      {applications.map((application) => (
        <div 
          key={application._id}
          className={`p-4 rounded-lg border ${
            application.isRead ? 'bg-gray-800' : 'bg-gray-900'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{application.fullName}</h3>
              <p className="text-sm text-gray-400">Position: {application.position}</p>
              <p className="text-sm text-gray-400">Email: {application.email}</p>
              <p className="text-sm text-gray-400">Phone: {application.phone}</p>
              <p className="mt-2">{application.message}</p>
            </div>
            <div className="space-x-2">
              {application.resumePath && (
                <button
                  onClick={() => handleDownloadResume(application.resumePath)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Download Resume
                </button>
              )}
              <button
                onClick={() => handleMarkAsRead(application._id)}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Mark as Read
              </button>
              <button
                onClick={() => handleDelete(application._id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(application.date).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )}

  // Add this button to your navigation section
  <button
    onClick={() => {
      setShowCareers(true);
      setShowContacts(false);
      setShowBlogs(false);
      fetchApplications();
    }}
    className={`px-4 py-2 rounded ${
      showCareers ? 'bg-blue-600' : 'bg-gray-700'
    }`}
  >
    Manage Careers
  </button>
}; 