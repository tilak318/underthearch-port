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
      className="group block hover-lift w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="bg-secondary h-full rounded-lg sm:rounded-xl overflow-hidden border border-white/5">
        {/* Image */}
        <div className="relative aspect-[16/10] sm:aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div className="text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row justify-between gap-1 sm:gap-2">
            <span>{new Date(date).toLocaleDateString()}</span>
            <span>By {author}</span>
          </div>
          
          <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-white/90 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-sm text-gray-400 line-clamp-2 hidden sm:block">
            {excerpt}
          </p>
          
          <div className="pt-1 sm:pt-2">
            <span className="inline-flex items-center text-white text-sm font-medium group-hover:text-white/90 transition-colors">
              Read More <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
