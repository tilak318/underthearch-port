import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  onSelect: () => void;
}

const BlogCard = ({ image, title, excerpt, date, author, onSelect }: BlogCardProps) => {
  return (
    <div 
      onClick={onSelect}
      className="group block hover-lift w-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      <div className="bg-secondary h-full rounded-lg overflow-hidden border border-white/5 hover:border-white/10">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-2 text-gray-400 text-[11px] sm:text-xs">
            <span>{new Date(date).toLocaleDateString()}</span>
            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            <span>By {author}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-white/90 transition-colors line-clamp-2">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
          
          {/* Read More */}
          <div className="pt-1">
            <span className="inline-flex items-center text-white text-xs sm:text-sm font-medium group-hover:text-white/90 transition-colors">
              Read More 
              <ArrowRight 
                size={14} 
                className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
