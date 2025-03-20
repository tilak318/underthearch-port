
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 py-32 mt-16">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-7xl sm:text-8xl font-bold text-white mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
