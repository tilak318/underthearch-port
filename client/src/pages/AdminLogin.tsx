import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://underthearch-22pt.onrender.com/api/admin/login', {
          // const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 py-8 relative">
      {/* Background Gradient - made slightly lighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-black to-black" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[420px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Admin Login
          </h2>
        </div>

        {/* Login Card - lightened background for better contrast */}
        <div className="group bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 p-6 sm:p-8 shadow-2xl 
          hover:shadow-white/5 transition-all duration-300 relative overflow-hidden">
          {/* Gradient overlay on hover - made more visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Form */}
          <form className="space-y-5 sm:space-y-6 relative z-10" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 sm:p-4 text-red-400 text-center text-sm">
                {error}
              </div>
            )}

            {/* Username Input */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-sm font-medium text-gray-200 block">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 
                    bg-gray-800 border border-gray-700 
                    rounded-lg sm:rounded-xl text-white text-sm sm:text-base 
                    placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
                    hover:border-gray-600
                    transition-all"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-sm font-medium text-gray-200 block">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 
                    bg-gray-800 border border-gray-700 
                    rounded-lg sm:rounded-xl text-white text-sm sm:text-base 
                    placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent 
                    hover:border-gray-600
                    transition-all"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2.5 sm:py-3 bg-white text-black rounded-lg sm:rounded-xl 
                font-medium text-sm sm:text-base
                hover:bg-gradient-to-r hover:from-gray-100 hover:via-white hover:to-gray-100 
                transform hover:scale-[1.02] hover:shadow-lg 
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Footer Text */}
        <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-400">
          Protected access for UnderTheArch administrators only
        </p>
      </div>
    </div>
  );
};

export default AdminLogin; 