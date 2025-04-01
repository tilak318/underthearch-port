import { Link } from "react-router-dom";

interface RecognitionCardProps {
  id: number;
  image: string;
  magazineName: string;
  publicationDate: string;
  title: string;
  excerpt: string;
}

const RecognitionCard = ({ id, image, magazineName, publicationDate, title, excerpt }: RecognitionCardProps) => {
  return (
    <Link 
      to={`/recognitions/${id}`}
      className="block group relative overflow-hidden bg-secondary/20 rounded-lg transition-all duration-300 ease-out hover:bg-secondary/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:ring-1 hover:ring-white/30"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:grayscale"
        />
        {/* Shining overlay effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
            {magazineName}
          </span>
          <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
            {publicationDate}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4 group-hover:text-gray-100 transition-colors duration-300">
          {excerpt}
        </p>

        {/* Read Article Button */}
        <div className="transition-colors duration-300">
          <div 
            className="block w-full bg-white text-black py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-200 group-hover:bg-gray-100"
          >
            Read Article
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

export default RecognitionCard; 