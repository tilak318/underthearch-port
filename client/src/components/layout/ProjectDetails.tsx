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
  client: string;
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
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      setActiveImage(foundProject.mainImage);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      navigate("/portfolio");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center flex-col gap-4">
        <div className="text-white">{error || "Project not found"}</div>
        <Link 
          to="/portfolio" 
          className="text-white underline hover:text-gray-300"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-20"> {/* Added pt-20 for top padding */}
      {/* Back Button - Updated positioning and styling */}
      <div className="fixed top-24 left-8 z-40">
        <Link
          to="/portfolio"
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <svg
            className="w-5 h-5"
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
      <div className="h-[70vh] relative">
        <img 
          src={activeImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex gap-4 text-gray-200">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Project Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              About the Project
            </h2>
            <p className="text-gray-300 mb-8">{project.description}</p>
            
            <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
            <p className="text-gray-300 mb-8">{project.challenge}</p>
            
            <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
            <p className="text-gray-300 mb-8">{project.solution}</p>
          </div>

          {/* Right Column - Project Details */}
          <div className="bg-secondary/20 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Client</p>
                <p className="text-white">{project.client}</p>
              </div>
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

        {/* Gallery */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer group relative"
                onClick={() => setActiveImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-64 object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-medium">View Image</span>
                </div>
                <p className="text-gray-300 mt-2">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;