
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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

  return (
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
            <button className="inline-flex items-center text-white text-sm font-medium">
              View Project <ArrowRight size={16} className="ml-2 animate-float" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
