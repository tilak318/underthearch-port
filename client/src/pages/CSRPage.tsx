import { useEffect, useState } from "react";
import CSRProjectCard from "@/components/ui/CSRProjectCard";
import { csrProjectsData } from "../data/CSRProjectData";
import { Helmet } from "react-helmet";

interface CSRProject {
  id: number; 
  title: string;
  category: string;
  year: string;
  description: string;
  location: string;
  mainImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
}

const CSRPage = () => {
  const [filter, setFilter] = useState("all");
  
  const sortProjects = (projects: typeof csrProjectsData) => {
    return [...projects].sort((a, b) => {
      if (a.year === 'Ongoing' && b.year !== 'Ongoing') return 1;
      if (a.year !== 'Ongoing' && b.year === 'Ongoing') return -1;
      if (a.year !== 'Ongoing' && b.year !== 'Ongoing') {
        return parseInt(a.year) - parseInt(b.year); 
      }
      return 0;
    });
  };
  
  const filteredProjects = sortProjects(
    filter === "all" 
      ? csrProjectsData 
      : csrProjectsData.filter(project => project.category.toLowerCase().replace(/\s+/g, '-') === filter.toLowerCase())
  );

  useEffect(() => {
    document.body.classList.add('page-transition-enter');
    return () => {
      document.body.classList.remove('page-transition-enter');
      document.body.classList.add('page-transition-exit');
    };
  }, []);

  const categories = [
    { id: "all", name: "All" },
    { id: "environmental-initiatives", name: "Environmental Initiatives" },
    { id: "community-outreach", name: "Community Outreach" },
    { id: "ethical-practices", name: "Ethical Practices" },
  ];

  return (
    <>
      <Helmet>
        <title>CSR – UnderTheArch | Our Commitment to Society</title>
        <meta name="description" content="Explore UnderTheArch's Corporate Social Responsibility initiatives, focusing on environmental sustainability, community development, and ethical practices." />
        <meta property="og:title" content="CSR | UnderTheArch" />
        <meta property="og:description" content="Discover how UnderTheArch contributes to a better future through its CSR programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://underthearch.in/corporate-social-responsibility" />
        <meta property="og:image" content="https://underthearch.in/og-image-csr.jpg" /> 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CSR | UnderTheArch" />
        <meta name="twitter:description" content="Learn about our CSR projects and their impact." />
        <meta name="twitter:image" content="https://underthearch.in/og-image-csr.jpg" />
      </Helmet>
      
      <section className="h-[100vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/projects/AL/AL-5.png" // Placeholder hero image
            alt="Corporate Social Responsibility" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Our Commitment to Society
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Building a sustainable and equitable future through responsible practices and community engagement.
          </p>
        </div>
      </section>
      
      <section className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-white text-black"
                    : "bg-secondary text-gray-300 hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <CSRProjectCard
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 sm:mb-4">
                No projects found for this category
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                We currently have no CSR projects listed under this specific category. Please check back later or explore other areas of our work.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CSRPage;
