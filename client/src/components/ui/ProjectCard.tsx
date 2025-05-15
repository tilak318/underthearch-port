import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  year: string;
  description: string;
  linkTo?: string;
}

const ProjectCard = ({ id, image, title, category, year, description, linkTo = `/projects/${id}` }: ProjectCardProps) => {
  return (
    <Link 
      to={linkTo}
      className="block group/project relative overflow-hidden bg-secondary/20 rounded-lg transition-all duration-300 ease-out hover:bg-secondary/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:ring-1 hover:ring-white/30 group-hover/card:bg-secondary/30 group-hover/card:shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover/card:ring-1 group-hover/card:ring-white/30"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out grayscale group-hover/project:grayscale-0 group-hover/card:grayscale-0"
        />
        {/* Shining overlay effect */}
        <div className="absolute inset-0 opacity-0 group-hover/project:opacity-100 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/project:translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400 font-medium group-hover/project:text-white group-hover/card:text-white transition-colors duration-300">
            {category}
          </span>
          <span className="text-sm text-gray-400 group-hover/project:text-white group-hover/card:text-white transition-colors duration-300">
            {year}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4 group-hover/project:text-gray-100 group-hover/card:text-gray-100 transition-colors duration-300">
          {description}
        </p>

        {/* View Project Button - Always visible */}
        <div className="transition-colors duration-300">
          <div 
            className="block w-full bg-white text-black py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-200 group-hover/project:bg-gray-100 group-hover/card:bg-gray-100"
          >
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;