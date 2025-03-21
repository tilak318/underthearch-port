
import { useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  year: string;
  description: string;
}

const ProjectCard = ({ image, title, category, year, description }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock additional project images (in a real app, these would come from the project data)
  const projectImages = [
    image,
    "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    "https://images.unsplash.com/photo-1481026469463-66327c86e544",
    "https://images.unsplash.com/photo-1501183638710-841dd1904471"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <>
      <div 
        className="relative overflow-hidden group hover-expand"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-in-out",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-gray-300">
                  {category}
                </span>
                <span className="text-xs text-gray-400">{year}</span>
              </div>
              <h3 className="text-xl font-medium text-white">{title}</h3>
            </div>
            
            <div className={cn(
              "max-h-0 opacity-0 overflow-hidden transition-all duration-300",
              isHovered ? "max-h-24 opacity-100" : ""
            )}>
              <p className="text-sm text-gray-300 mb-4">{description}</p>
              <button 
                className="inline-flex items-center text-white text-sm font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(true);
                }}
              >
                View Project <ArrowRight size={16} className="ml-2 animate-float" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-10">
          <div className="relative w-full max-w-5xl h-full max-h-[85vh] bg-black/60 backdrop-blur-lg rounded-lg overflow-hidden flex flex-col">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              onClick={() => setShowDetails(false)}
            >
              <X size={20} />
            </button>
            
            {/* Project info header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <span className="inline-block px-2 py-1 text-xs uppercase tracking-wider text-gray-300 border border-gray-700 rounded mb-2">
                    {category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">{year}</span>
              </div>
            </div>
            
            {/* Project content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Featured image carousel */}
              <div className="relative mb-8">
                <div className="aspect-video overflow-hidden rounded-lg relative">
                  <img 
                    src={projectImages[currentImageIndex]} 
                    alt={`${title} - Featured Image`} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation arrows */}
                  <button 
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {currentImageIndex + 1} / {projectImages.length}
                  </div>
                </div>
              </div>
              
              {/* Project description */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-4">Project Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  {description}
                </p>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  This {category.toLowerCase()} project was completed in {year}, showcasing our expertise in creating 
                  spaces that combine functionality with aesthetic appeal. Our team worked closely with the client to 
                  ensure that every detail was aligned with their vision and requirements.
                </p>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  The design incorporates sustainable materials and energy-efficient systems, reflecting our commitment 
                  to environmentally responsible architecture. The space is designed to maximize natural light while 
                  providing optimal thermal comfort throughout the year.
                </p>
              </div>
              
              {/* Thumbnail gallery */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Project Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {projectImages.map((img, index) => (
                    <div 
                      key={index} 
                      className={cn(
                        "aspect-square overflow-hidden rounded-lg cursor-pointer border-2",
                        currentImageIndex === index ? "border-white" : "border-transparent"
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img 
                        src={img} 
                        alt={`${title} - Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
