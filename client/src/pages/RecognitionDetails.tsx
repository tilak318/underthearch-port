import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { recognitionsData } from "@/components/ui/recognitionData";

interface RecognitionImage {
  url: string;
  caption: string;
}

interface Article {
  title: string;
  url: string;
  source: string;
  date?: string;
}

interface RecognitionDetails {
  id: number;
  projectName: string;
  category: string;
  mainImage: string;
  description: string;
  excerpt: string;
  articles: Article[];
  gallery: RecognitionImage[];
}

const RecognitionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recognition, setRecognition] = useState<RecognitionDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    try {
      if (!id) {
        throw new Error("Recognition ID not found");
      }

      const foundRecognition = recognitionsData.find(r => r.id === parseInt(id));
      
      if (!foundRecognition) {
        throw new Error("Recognition not found");
      }

      setRecognition(foundRecognition);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      navigate("/recognitions");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  const nextImage = () => {
    if (!recognition) return;
    setCurrentImageIndex((prev) => (prev + 1) % recognition.gallery.length);
  };

  const previousImage = () => {
    if (!recognition) return;
    setCurrentImageIndex((prev) => (prev - 1 + recognition.gallery.length) % recognition.gallery.length);
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
  if (error || !recognition) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center flex-col gap-4">
        <div className="text-white text-lg">{error || "Recognition not found"}</div>
        <Link 
          to="/recognitions" 
          className="text-white underline hover:text-gray-300 transition-colors"
        >
          Return to Recognitions
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-16 sm:pt-20">
      {/* Back Button */}
      <div className="fixed top-20 sm:top-24 left-4 sm:left-8 z-40">
        <Link
          to="/recognitions"
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
          Back to Recognitions
        </Link>
      </div>

      {/* Hero Section */}
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] relative">
        <img 
          src={recognition.mainImage} 
          alt={recognition.projectName} 
          className="w-full h-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
              {recognition.projectName}
            </h1>
            <div className="flex gap-2 sm:gap-4 text-gray-200 text-sm sm:text-base">
              <span>{recognition.category}</span>
              <span>•</span>
              <span>{recognition.articles.length} Articles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Main Content */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              About the Project
            </h2>
            <p className="text-gray-300 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl">
              {recognition.description}
            </p>
            
            {/* Articles List */}
            <div className="mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Featured Articles
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                {recognition.articles.map((article, index) => (
                  <a
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-xl hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] border border-white/30 hover:border-white/50"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-white transition-colors duration-300 truncate">
                          {article.title}
                        </h4>
                        <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300 mt-1">{article.source}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="hidden sm:inline text-sm text-white group-hover:text-white/90 transition-colors duration-300">
                          Read Article
                        </span>
                        <div className="relative w-9 h-9 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg 
                              className="w-5 h-5 text-white/80 transform group-hover:translate-x-1 transition-all duration-300" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                            <svg 
                              className="w-5 h-5 text-white/90" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              Featured Images
            </h2>
            <div className="relative">
              {/* Main Slideshow */}
              <div 
                className="relative aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <img
                  src={recognition.gallery[currentImageIndex].url}
                  alt={recognition.gallery[currentImageIndex].caption}
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
                    {recognition.gallery[currentImageIndex].caption}
                  </p>
                </div>
              </div>

              {/* Thumbnail Preview */}
              <div className="mt-3 sm:mt-4 relative">
                <div className="flex justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-3 px-1 sm:px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  {recognition.gallery.map((image, index) => (
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
    </div>
  );
};

export default RecognitionDetails; 