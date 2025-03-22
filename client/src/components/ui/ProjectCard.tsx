import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  year: string;
  description: string;
}

const ProjectCard = ({ id, image, title, category, year, description }: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects/${id}`} 
      className="group block relative overflow-hidden bg-secondary/20 rounded-lg transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400 font-medium">{category}</span>
          <span className="text-sm text-gray-400">{year}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2">
          {description}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-flex items-center gap-2 text-white font-medium">
            View Project
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;