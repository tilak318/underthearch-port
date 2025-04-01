import { useEffect } from "react";
import RecognitionCard from "@/components/ui/RecognitionCard";
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/daasgedae/image/upload/v1743136297/13_pu7kbk.png"
            alt="Architecture" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white 
          text-base md:text-lg rounded-full mb-4 sm:mb-8">
            Media Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Featured in Leading Magazines
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Recognized by prestigious architectural publications worldwide.
          </p>
        </div>
      </section>
      
      {/* Recognitions Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Recognitions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {recognitionsData.map((recognition) => (
              <RecognitionCard
                key={recognition.id}
                id={recognition.id}
                image={recognition.mainImage}
                magazineName={recognition.magazineName}
                publicationDate={recognition.publicationDate}
                title={recognition.title}
                excerpt={recognition.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recognitions; 