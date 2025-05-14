import { useEffect } from "react";
import { recognitionsData } from "@/components/ui/recognitionData";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Recognitions – UnderTheArch | Featured in Leading Magazines</title>
        <meta name="description" content="See the awards, recognitions, and media features received by UnderTheArch for architectural excellence." />
        <meta property="og:title" content="Recognitions | UnderTheArch" />
        <meta property="og:description" content="Discover the accolades and media mentions of UnderTheArch." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://underthearch.in/recognitions" />
        <meta property="og:image" content="https://underthearch.in/og-image-recognitions.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recognitions | UnderTheArch" />
        <meta name="twitter:description" content="Awards and recognitions for UnderTheArch's architectural achievements." />
        <meta name="twitter:image" content="https://underthearch.in/og-image-recognitions.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="h-[85vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/projects/S/S-1.png"
            alt="Architecture" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
         
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Featured in Leading Magazines
          </h1>
         
        </div>
      </section>
      
      {/* Articles Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitionsData.map((article, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:ring-1 hover:ring-white/30 flex flex-col"
              >
                {/* Smaller Project Image with Enhanced Publisher Overlay */}
                <div className="aspect-[4/3] overflow-hidden relative h-48 group">
                  <img
                    src={article.projectImage}
                    alt={article.projectName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
                  />
                  {/* Double Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <span className="text-white text-xl font-bold tracking-wider uppercase relative overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full"></span>
                      {article.source}
                    </span>
                  </div>
                </div>
                
                {/* Expanded Content Area */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 overflow-hidden bg-white/5 flex items-center justify-center">
                      <img
                        src={article.sourceLogo}
                        alt={`${article.source} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors">
                        {article.projectName}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {article.date}
                      </p>
                    </div>
                  </div>
                  
                 

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto relative inline-flex items-center gap-2 px-6 py-2.5 
                    overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-white/5
                    border border-white/10 backdrop-blur-sm
                    hover:border-white/30 hover:from-white/20 hover:to-white/10
                    transition-all duration-300 group/button w-fit"
                  >
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 bg-white/5 blur-lg" />
                    
                    {/* Button content */}
                    <span className="relative text-sm font-medium text-white/90 group-hover/button:text-white transition-colors">
                      Read Article
                    </span>
                    <svg
                      className="relative w-4 h-4 text-white/80 group-hover/button:text-white group-hover/button:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
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