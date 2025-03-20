
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}

const BlogCard = ({ image, title, excerpt, date, author, slug }: BlogCardProps) => {
  return (
    <Link 
      to={`/blog/${slug}`}
      className="group block hover-lift w-full"
    >
      <div className="bg-secondary h-full rounded-lg overflow-hidden border border-white/5">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-xs text-gray-400 flex flex-col sm:flex-row justify-between gap-2">
            <span>{date}</span>
            <span>By {author}</span>
          </div>
          
          <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-gray-400 line-clamp-2">
            {excerpt}
          </p>
          
          <div className="pt-2">
            <span className="inline-flex items-center text-white text-sm font-medium group-hover:text-white/90 transition-colors">
              Read More <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
