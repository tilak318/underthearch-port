
import { useEffect, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  // Sample data
  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      title: "The White Abode",
      category: "Residential",
      year: "2023",
      description: "A sleek residential project featuring clean lines and open spaces."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      title: "The Seraphic",
      category: "Commercial",
      year: "2022",
      description: "A contemporary commercial space designed for optimal workflow."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      title: "Bhalala's",
      category: "Cultural",
      year: "2023",
      description: "An immersive space designed to showcase artistic expression."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      title: "Rasam Fashion",
      category: "Residential",
      year: "2022",
      description: "An exclusive residential development with premium amenities."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      title: "Sensitive Forge",
      category: "Commercial",
      year: "2021",
      description: "A sophisticated office space designed for a leading tech company."
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
      title: "Avadh House",
      category: "Public",
      year: "2023",
      description: "A community-focused library that blends tradition with technology."
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a",
      title: "Laxmi Ratan",
      category: "Commercial",
      year: "2022",
      description: "An eco-friendly office building with cutting-edge sustainable features."
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
      title: "My mall",
      category: "Cultural",
      year: "2021",
      description: "A modern museum space designed to create an immersive visitor experience."
    },
    // {
    //   id: 9,
    //   image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    //   title: "Luxury Villa",
    //   category: "Residential",
    //   year: "2023",
    //   description: "A high-end residential villa combining comfort with sophisticated design."
    // }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

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
                image={project.image}
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
