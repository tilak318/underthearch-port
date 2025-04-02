import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/components/ui/projectData";

const Home = () => {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  
  const scrollToProjects = () => {
    featuredProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get 3 random projects from projectsData
  const getRandomProjects = (projects: typeof projectsData, count: number) => {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const featuredProjects = getRandomProjects(projectsData, 3);

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
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/daasgedae/image/upload/v1743577029/5-resized_yh9bga.png"  
            alt="Architectural background" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content - Centered on all screens */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 relative z-10 mt-16 w-full">
          <div className="flex justify-center items-center">
            <div className="space-y-8 animate-fade-in max-w-2xl text-center">
              <span className="inline-block px-4 py-1 border border-white/20 text-white text-base md:text-lg rounded-full">
                Welcome to UnderTheArch
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Creating Spaces<br />
                <span className="text-white/75">That Inspire</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-lg mx-auto">
                UnderTheArch blends innovative design with functional excellence to create architectural masterpieces that stand the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/portfolio" 
                  className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium 
                  inline-flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  View Our Work <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto border border-white/30 bg-transparent text-white px-6 sm:px-8 py-3 
                  rounded-lg font-medium inline-flex items-center justify-center 
                  hover:bg-white hover:text-black hover:border-white
                  transform hover:scale-105
                  transition-all duration-300 ease-in-out"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer" onClick={scrollToProjects}>
            <ChevronDown size={32} className="text-white/70" />
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-24 bg-black px-4 sm:px-6" ref={featuredProjectsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full w-full">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://res.cloudinary.com/daasgedae/image/upload/v1743136299/16_m4ppyv.png" 
                  alt="About UnderTheArch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-4 sm:p-6 rounded-lg w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-black text-3xl sm:text-4xl font-bold">5+</span>
                  <span className="block text-black/70 text-xs sm:text-sm">Years of Excellence</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <span className="text-sm text-gray-400 uppercase tracking-wider">About Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Architecture Beyond Boundaries
              </h2>
              <p className="text-gray-300">
                At UnderTheArch, we believe that architecture is more than just creating structures; it's about designing experiences that resonate with people. Our designs blend form and function, creating spaces that are both beautiful and practical.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-secondary p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400 text-sm">
                    To transform the architectural landscape with designs that inspire and endure.
                  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Our Approach</h3>
                  <p className="text-gray-400 text-sm">
                    Collaborative, innovative, and focused on sustainable solutions.
                  </p>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center text-white font-medium mt-4 link-underline py-2"
              >
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-24 bg-black px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <span className="text-sm text-gray-400 uppercase tracking-wider">Our Work</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
                Featured Projects
              </h2>
            </div>
            <Link 
              to="/portfolio" 
              className="hidden md:inline-flex items-center text-white font-medium link-underline py-2"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
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
          
          <div className="mt-12 flex justify-center md:hidden">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-white font-medium"
            >
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-secondary px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-gray-300">
              We provide a comprehensive range of architectural services tailored to meet your specific needs and aspirations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Architectural Design",
                description: "Innovative and functional designs tailored to your vision and requirements.",
                icon: "🏛️"
              },
              {
                title: "Interior Design",
                description: "Creating harmonious and functional interior spaces that reflect your personality.",
                icon: "🪑"
              },
              {
                title: "Urban Planning",
                description: "Sustainable urban solutions that enhance community living and connectivity.",
                icon: "🏙️"
              },
              {
                title: "Project Management",
                description: "Efficient management of your project from conception to completion.",
                icon: "📋"
              },
              {
                title: "3D Visualization",
                description: "Realistic 3D representations to help you visualize your space before construction.",
                icon: "💻"
              },
              {
                title: "Sustainable Design",
                description: "Eco-friendly architectural solutions that minimize environmental impact.",
                icon: "🌱"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-black p-6 sm:p-8 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 hover-lift"
              >
                <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a" 
            alt="Building" 
            className="w-full h-full object-cover filter brightness-25"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Create Something Extraordinary Together
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a specific project in mind or you're still exploring possibilities, we're here to bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-black px-6 sm:px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            Get in Touch <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
