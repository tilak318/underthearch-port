
import { ArrowRight } from "lucide-react";

interface CareerCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  onClick: () => void;
}

const CareerCard = ({ title, location, type, description, onClick }: CareerCardProps) => {
  return (
    <div 
      className="bg-secondary border border-white/5 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover-lift cursor-pointer w-full"
      onClick={onClick}
    >
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full">
              {location}
            </span>
            <span className="inline-block px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full">
              {type}
            </span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-2">
          {description}
        </p>
        
        <div className="pt-2">
          <button className="inline-flex items-center text-white text-sm font-medium">
            View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
