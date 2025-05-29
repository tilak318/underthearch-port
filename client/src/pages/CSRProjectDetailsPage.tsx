import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";

// Slugify function (moved here due to issues creating utils/slugify.ts)
const slugify = (text: string): string => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars (except hyphen)
    .replace(/--+/g, '-');          // Replace multiple - with single -
};
import { csrProjectsData, CSRProjectDetails as CSRProjectDetailsType, CSRProjectImage } from "../data/CSRProjectData"; // Adjusted import
import { Helmet } from "react-helmet";

const CSRProjectDetailsPage = () => {
  const { titleSlug } = useParams<{ titleSlug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<CSRProjectDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    try {
      if (!titleSlug) {
        throw new Error("CSR Project slug not found in URL");
      }

      // Find project by comparing slugified title with the titleSlug from URL
      const foundProject = csrProjectsData.find(p => slugify(p.title) === titleSlug);
      
      if (!foundProject) {
        throw new Error(`CSR Project with slug '${titleSlug}' not found`);
      }

      setProject(foundProject);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while loading the CSR project");
      // Consider navigating to a general CSR page or a 404 page
      // navigate("/corporate-social-responsibility"); 
    } finally {
      setLoading(false);
    }
  }, [titleSlug, navigate]);

  const nextImage = () => {
    if (!project || project.gallery.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const previousImage = () => {
    if (!project || project.gallery.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  useEffect(() => {
    if (!isAutoPlaying || !project || project.gallery.length === 0) return;
    
    const interval = setInterval(nextImage, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, project, nextImage, currentImageIndex]); // Added currentImageIndex to reset timer

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-lg">Loading CSR Project...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center flex-col gap-4 p-4 text-center">
        <Helmet>
          <title>Error Loading Project – UnderTheArch</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-white text-xl">{error || "CSR Project not found."}</div>
        <Link 
          to="/corporate-social-responsibility"
          className="text-white underline hover:text-gray-300 transition-colors bg-secondary/50 px-4 py-2 rounded-md"
        >
          Return to CSR Page
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20 text-white">
      <Helmet>
        <title>{`${project.title} – CSR | UnderTheArch`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} – CSR | UnderTheArch`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.mainImage} />
        <meta property="og:url" content={`https://underthearch.in/corporate-social-responsibility-projects/${slugify(project.title)}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="fixed top-20 sm:top-24 left-4 sm:left-8 z-40">
        <Link
          to="/corporate-social-responsibility"
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors bg-black/50 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to CSR
        </Link>
      </div>

      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] relative">
        <img 
          src={project.mainImage} 
          alt={`Main visual for ${project.title}`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-white/10 text-white text-xs sm:text-sm px-3 py-1 rounded-full mb-2 sm:mb-3 uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
              {project.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">{project.year} | {project.location}</p>
          </div>
        </div>
      </div>

      {/* Main Content Area - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column - About the Initiative */}
          <div className="md:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              About the Initiative
            </h2>
            <div className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-300 leading-relaxed">
              <p>{project.fullDescription}</p>
            </div>
          </div>

          {/* Right Column - Initiative Details */}
          <div className="bg-secondary/20 p-4 sm:p-6 rounded-lg h-fit">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Initiative Details
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div>
                <p className="text-gray-400">Category</p>
                <p className="text-white">{project.category}</p>
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">{project.location}</p>
              </div>
              <div>
                <p className="text-gray-400">Year</p>
                <p className="text-white">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-8 sm:mt-12 md:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              Project Gallery
            </h2>
            <div 
              className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl"
              
              
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={project.gallery[currentImageIndex].url} // Important for AnimatePresence
                  src={project.gallery[currentImageIndex].url}
                  alt={project.gallery[currentImageIndex].caption || `Image ${currentImageIndex + 1} for ${project.title}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} // Adjust duration as needed
                  className="w-full h-full object-cover absolute inset-0" // Added absolute positioning
                />
              </AnimatePresence>
              
              <button
                onClick={previousImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {project.gallery[currentImageIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                  <p className="text-white text-xs sm:text-sm md:text-base text-center">
                    {project.gallery[currentImageIndex].caption}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-3 sm:mt-4">
              <div className="flex justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-3 px-1 sm:px-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => { setCurrentImageIndex(index); setIsAutoPlaying(true); }}
                    className={`relative flex-shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-md overflow-hidden transition-all duration-200 ease-out transform hover:scale-105 ${ 
                      currentImageIndex === index ? 'ring-2 ring-offset-2 ring-offset-black ring-white' : 'opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View image ${index + 1}`}
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
        )}
      </div>
    </div>
  );
};

export default CSRProjectDetailsPage;
