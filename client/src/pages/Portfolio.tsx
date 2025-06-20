import { useEffect, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/components/ui/projectData";
import { Helmet } from "react-helmet";
import { useIsMobile } from "@/hooks/use-mobile";

interface Project {
  _id: string;  // Changed from id: number
  title: string;
  category: string;
  year: string;
  description: string;
  location: string;
  area: string;
  mainImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  challenge: string;
  solution: string;
}

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  // Use mobile detection hook
  const isMobile = useIsMobile();
  
  // State for random video selection
  const [randomVideo, setRandomVideo] = useState<string>('');
  
  // Function to select random video
  const selectRandomVideo = () => {
    const videoNumbers = [1, 2, 3, 4, 5];
    const randomIndex = Math.floor(Math.random() * videoNumbers.length);
    const selectedVideo = `/video/${videoNumbers[randomIndex]}.mp4`;
    setRandomVideo(selectedVideo);
    console.log('Selected random video for Portfolio page mobile background:', selectedVideo);
  };

  // Select random video on component mount for mobile
  useEffect(() => {
    if (isMobile) {
      selectRandomVideo();
    }
  }, [isMobile]);
  
  // Function to sort projects by year - descending order with ongoing projects at the top
  const sortProjects = (projects: typeof projectsData) => {
    return [...projects].sort((a, b) => {
      // Put 'Ongoing' projects at the beginning
      if (a.year === 'Ongoing' && b.year !== 'Ongoing') return -1;
      if (a.year !== 'Ongoing' && b.year === 'Ongoing') return 1;
      
      // For numeric years, sort in descending order (newest first)
      if (a.year !== 'Ongoing' && b.year !== 'Ongoing') {
        return parseInt(b.year) - parseInt(a.year);
      }
      
      // If both are 'Ongoing', maintain original order
      return 0;
    });
  };
  
  // Filter projects based on category, then sort them
  const filteredProjects = sortProjects(
    filter === "all" 
      ? projectsData 
      : projectsData.filter(project => project.category.toLowerCase() === filter.toLowerCase())
  );

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
        <title>Portfolio – UnderTheArch | Showcasing Our Work</title>
        <meta name="description" content="Explore the portfolio of UnderTheArch, featuring our finest architectural projects across Gujarat and beyond." />
        <meta property="og:title" content="Portfolio | UnderTheArch" />
        <meta property="og:description" content="Discover our diverse portfolio of residential, commercial, and public architecture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://underthearch.in/portfolio" />
        <meta property="og:image" content="https://underthearch.in/og-image-portfolio.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | UnderTheArch" />
        <meta name="twitter:description" content="Browse our architectural portfolio and see our latest projects." />
        <meta name="twitter:image" content="https://underthearch.in/og-image-portfolio.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="h-[100vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0">
          {/* Mobile background - Video for mobile, Image as fallback */}
          {isMobile && randomVideo ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover object-bottom block sm:hidden"
            >
              <source src={randomVideo} type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <img 
                src="/projects/BF/BF-2.png"
                alt="Architecture" 
                className="w-full h-full object-cover object-bottom"
              />
            </video>
          ) : (
            <img 
              src="/projects/BF/BF-2.png"
              alt="Architecture" 
              className="w-full h-full object-cover object-bottom block sm:hidden"
            />
          )}
          
          {/* Desktop background image - unchanged */}
          <img 
            src="/projects/BF/BF-2.png"
            alt="Architecture" 
            className="w-full h-full object-cover object-bottom hidden sm:block"
          />
          
          {/* Overlay with same opacity as before */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white 
          text-base md:text-lg rounded-full mb-4 sm:mb-8">
            Our Portfolio
          </span> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Showcasing Our Work
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Discover our finest architectural projects across diverse domains.
          </p>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16">
            {["all", "residential", "office", "commercial","hospitality","industrial", "retail"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-white text-black"
                    : "bg-secondary text-gray-300 hover:bg-secondary/80"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                image={project.mainImage}
                title={project.title}
                category={project.category}
                year={project.year}
                description={project.description}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 sm:mb-4">
                No projects found
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                We don't have any projects in this category yet. Please check back later or explore other categories.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;