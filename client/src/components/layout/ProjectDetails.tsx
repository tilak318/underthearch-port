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
  gallery: ProjectImage[];
  challenge: string;
  solution: string;
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetails | null>(null);
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
      navigate("/portfolio");
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
          to="/portfolio" 
          className="text-white underline hover:text-gray-300 transition-colors"
        >
          Return to Portfolio
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
          to="/portfolio"
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
          Back to Portfolio
        </Link>
      </div>

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
            <div 
              className="relative aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <img
                src={project.gallery[currentImageIndex].url}
                alt={project.gallery[currentImageIndex].caption}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={previousImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                <p className="text-white text-xs sm:text-sm md:text-base">
                  {project.gallery[currentImageIndex].caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Preview */}
            <div className="mt-3 sm:mt-4 relative">
              <div className="flex justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-3 px-1 sm:px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden transition-all ${
                      currentImageIndex === index ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;