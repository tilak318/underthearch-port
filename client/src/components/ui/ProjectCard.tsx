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
    <div className="group relative overflow-hidden bg-secondary/20 rounded-lg transition-all duration-300 ease-out hover:bg-secondary/30 hover:-translate-y-2 transform">
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
            {category}
          </span>
          <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
            {year}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4 group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>

        {/* View Project Button */}
        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <Link 
            to={`/projects/${id}`}
            className="block w-full bg-white text-black py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-200 hover:bg-gray-100"
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;