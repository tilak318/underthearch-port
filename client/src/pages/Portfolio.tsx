import { useEffect, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/components/ui/projectData";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category.toLowerCase() === filter.toLowerCase());

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
      <section className="min-h-[50vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764" 
            alt="Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 relative z-10 mt-16 text-center w-full">
          <span className="inline-block px-4 py-1 border border-white/20 text-white text-sm rounded-full mb-6">
            Our Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Showcasing Our Work
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our diverse portfolio of architectural projects spanning residential, commercial, and cultural spaces.
          </p>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-24 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {["all", "residential", "commercial", "cultural", "public"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-white mb-4">No projects found</h3>
              <p className="text-gray-400">
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