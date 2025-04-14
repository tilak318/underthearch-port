import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "@/components/ui/projectData";

// Define types at the top for better organization
interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  location: string;
  area: string;
  mainImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  challenge: string;
  solution: string;
}

const FeaturedProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetails | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    try {
      if (!id) {
        throw new Error("Project ID not found");
      }

      const foundProject = projectsData.find(p => p.id === parseInt(id));
      
      if (!foundProject) {
        throw new Error("Project not found");
      }

      setProject(foundProject);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      navigate("/");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  const nextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const previousImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  // Error State
  if (error || !project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center flex-col gap-4">
        <div className="text-white text-lg">{error || "Project not found"}</div>
        <Link 
          to="/" 
          className="text-white underline hover:text-gray-300 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  // Main Content
  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20">
      {/* Back Button */}
      <div className="fixed top-20 sm:top-24 left-4 sm:left-8 z-40">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-black/50 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm text-sm sm:text-base"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Rest of the component remains exactly the same as ProjectDetails */}
      {/* Hero Section */}
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] relative">
        <img 
          src={project.mainImage} 
          alt={project.title} 
          className="w-full h-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
              {project.title}
            </h1>
            <div className="flex gap-2 sm:gap-4 text-gray-200 text-sm sm:text-base">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - Project Info */}
          <div className="md:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              About the Project
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              {project.description}
            </p>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
              The Challenge
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              {project.challenge}
            </p>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
              Our Solution
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              {project.solution}
            </p>
          </div>

          {/* Right Column - Project Details */}
          <div className="bg-secondary/20 p-4 sm:p-6 rounded-lg h-fit">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Project Details
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">{project.location}</p>
              </div>
              <div>
                <p className="text-gray-400">Area</p>
                <p className="text-white">{project.area}</p>
              </div>
              <div>
                <p className="text-gray-400">Year</p>
                <p className="text-white">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
            Project Gallery
          </h2>
          <div className="relative">
            {/* Main Slideshow */}
            {/* Gallery content would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectDetails;
