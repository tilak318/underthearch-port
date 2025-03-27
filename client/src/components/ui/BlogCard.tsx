import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string; // Full blog content
  onSelect: () => void;
}

const BlogCard = ({ image, title, excerpt, date, author, content, onSelect }: BlogCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    onSelect();
  };

  return (
    <>
      <div 
        onClick={handleClick}
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
          <div className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-gray-400 text-[10px] sm:text-xs">
              <span>{new Date(date).toLocaleDateString()}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span>By {author}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-white group-hover:text-white/90 transition-colors line-clamp-2">
              {title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 line-clamp-2 leading-relaxed">
              {excerpt}
            </p>
            
            {/* Read More */}
            <div className="pt-0.5 sm:pt-1">
              <span className="inline-flex items-center text-white text-[10px] sm:text-xs md:text-sm font-medium group-hover:text-white/90 transition-colors">
                Read More 
                <ArrowRight 
                  size={12}
                  className="ml-1 sm:ml-1.5 transition-transform duration-300 group-hover:translate-x-1" 
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-4xl max-h-[95vh] overflow-y-auto bg-secondary border-white/5 p-4 sm:p-6 md:p-8">
          <DialogHeader className="space-y-2 sm:space-y-3">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{title}</DialogTitle>
          </DialogHeader>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
            <span>{new Date(date).toLocaleDateString()}</span>
            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            <span>By {author}</span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-4 sm:mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-invert max-w-none text-sm sm:text-base md:text-lg">
            {content}
          </div>

          {/* Back Button */}
          <div className="mt-4 sm:mt-6 flex justify-end">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="text-white border-white/10 hover:bg-white/10 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
            >
              Back to Blogs
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogCard;
