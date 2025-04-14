import { useEffect } from "react";
import { recognitionsData } from "@/components/ui/recognitionData";

const Recognitions = () => {
  // Page transition animation
  useEffect(() => {
    document.body.classList.add('page-transition-enter');
    return () => {
      document.body.classList.remove('page-transition-enter');
      document.body.classList.add('page-transition-exit');
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="h-[85vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/daasgedae/image/upload/v1743135528/6_bjwtlo.png"
            alt="Architecture" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white text-base md:text-lg rounded-full mb-4 sm:mb-8">
            Media Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Featured in Leading Magazines
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            {recognitionsData.length} articles showcasing our work
          </p>
        </div>
      </section>
      
      {/* Articles Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recognitionsData.map((article, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:ring-1 hover:ring-white/30"
              >
                {/* Project Image with Publisher Overlay */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={article.projectImage}
                    alt={article.projectName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
                  />
                  {/* Shining overlay effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white text-xl font-bold tracking-wider uppercase">
                        {article.source}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 group-hover:bg-white/20 transition-colors">
                      <img 
                        src={article.projectImage} 
                        alt={article.projectName}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-white group-hover:text-primary transition-colors">
                        {article.projectName}
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        {article.date}
                      </p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    Read Article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recognitions;