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
  const [activeImage, setActiveImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      setActiveImage(foundRecognition.mainImage);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      navigate("/recognitions");
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  // Auto-rotation effect with click handling
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === (recognition?.gallery.length || 0) - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [recognition, isPaused]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

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
          src={activeImage} 
          alt={recognition.projectName} 
          className="w-full h-full object-cover"
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
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                Featured Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recognition.articles.map((article, index) => (
                  <a
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/10 backdrop-blur-sm p-5 rounded-xl hover:bg-white/15 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] border border-white/30 hover:border-white/40"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white transition-colors duration-300">
                          {article.title}
                        </h4>
                        <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300">{article.source}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white group-hover:text-white/90 transition-colors duration-300">
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
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Featured Images
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {/* Large Image Display */}
              <div className="lg:col-span-3 aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={recognition.gallery[currentImageIndex].url} 
                  alt={recognition.gallery[currentImageIndex].caption} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Thumbnail Grid */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {recognition.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group ${
                      currentImageIndex === index ? 'ring-2 ring-white' : ''
                    }`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <p className="text-white text-xs sm:text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionDetails; 