import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/components/ui/projectData";
import FeaturedProjectDetails from "@/components/layout/FeaturedProjectDetails";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Home = () => {
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToProjects = () => {
    featuredProjectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Use all projects for the scrolling animation
  const [duplicatedProjects, setDuplicatedProjects] = useState<typeof projectsData>([]);
  
  useEffect(() => {
    // Duplicate the projects to create a seamless loop effect
    setDuplicatedProjects([...projectsData, ...projectsData]);
  }, []);

  // Page transition animation
  useEffect(() => {
    document.body.classList.add('page-transition-enter');
    return () => {
      document.body.classList.remove('page-transition-enter');
      document.body.classList.add('page-transition-exit');
    };
  }, []);

  // Add this function to handle scrolling to sections based on URL params
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const section = searchParams.get('section');
    
    if (section) {
      setTimeout(() => {
        switch(section) {
          case 'about':
            aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'featured-projects':
            projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'services':
            servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'contact-cta':
            ctaSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          default:
            break;
        }
      }, 100); // Small delay to ensure the page is fully loaded
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>UnderTheArch – Designing Dreams, Building Realities.</title>
        <meta name="description" content="Welcome to UnderTheArch – Architectural Excellence and Innovation." />
        <meta property="og:title" content="UnderTheArch" />
        <meta property="og:description" content="Discover our award-winning architectural projects and insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://underthearch.in" />
        <meta property="og:image" content="https://underthearch.in/og-image-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UnderTheArch" />
        <meta name="twitter:description" content="Welcome to UnderTheArch – Architectural Excellence and Innovation." />
        <meta name="twitter:image" content="https://underthearch.in/og-image-home.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Mobile background image */}
          <img 
            src="/projects/WA/WA-3.png" 
            alt="Architectural background mobile" 
            className="w-full h-full object-cover object-[30%_center] block sm:hidden"
          />
          {/* Desktop background image */}
          <img 
            src="/projects/WA/WA-1.png" 
            alt="Architectural background desktop" 
            className="w-full h-full object-cover object-bottom hidden sm:block"
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
      <section className="py-24 bg-black px-4 sm:px-6" ref={aboutSectionRef} id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full w-full">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="/projects/sf/sf6.png" 
                  alt="About UnderTheArch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-4 sm:p-6 rounded-lg w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-black text-3xl sm:text-4xl font-bold">4+</span>
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
              Under The Arch is the based on Gujarat, India  Architectural 
Design Firm. Our creative minds with design studios across the 
Gujarat create class design solutions with deep social and 
cultural understanding of the communities we design for.   </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-secondary p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400 text-sm">
                  Under The Arch mission to provide innovative, efficient 
and sustainable solutions through exceptional client 
service, exellence in Architectural Design and ethics in 
practice.  </p>
                </div>
                <div className="bg-secondary p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400 text-sm">
                  Under the Arch aims to be among the leading architectural 
design firms that are nationally & globally recognized, 
renowned for our exceptional work, and highly esteemed by 
our clients, colleagues, and industry leaders.     </p>
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
      <section className="py-24 bg-black px-4 sm:px-6" ref={projectsSectionRef} id="featured-projects">
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


          
          
          <div className="relative overflow-hidden w-full py-6" style={{ height: '600px' }}>
            <motion.div 
              className="flex gap-8 absolute"
              animate={{ x: ["-10%", "-60%"] }}
              transition={{ 
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 80,
                  ease: "linear"
                }
              }}
              style={{ 
                willChange: 'transform',
                width: `${duplicatedProjects.length * 420}px` 
              }}
            >
              {duplicatedProjects.map((project, index) => (
                <div key={`${project.id}-${index}`} className="w-[380px] flex-shrink-0 h-full">
                  <ProjectCard 
                    id={project.id}
                    image={project.mainImage}
                    title={project.title}
                    category={project.category}
                    year={project.year}
                    description={project.description}
                    linkTo={`/featured/${project.id}`}
                  />
                </div>
              ))}
            </motion.div>
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


      {/* Stats Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {[
              { number: "4+", label: "Years of Experience" },
              { number: "100+", label: "Completed Projects" },
              { number: "200000+", label: "Square Feet" },
              { number: "15+", label: "Featured" },
              { number: "7+", label: "Cities" }
            ].map((stat, index) => {
              const [ref, inView] = useInView({
                threshold: 0.5
              });
              
              return (
                <div ref={ref} key={index} className="hover-lift">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {inView ? (
                      <CountUp 
                        end={parseInt(stat.number)} 
                        duration={3.5}
                        separator=","
                      />
                    ) : 0}{stat.number.includes('+') ? '+' : ''}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-black px-4 sm:px-6" ref={servicesSectionRef} id="services">
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
              title: "Architecture",
              description: "Functional spaces crafted to reflect your unique vision and style.",
              icon: "🏛️"
            },
            {
              title: "Interior Design",
              description: "Stylish and practical interiors shaped to enhance comfort and personal identity.",
              icon: "🪑"
            },
            {
              title: "Urban Design",
              description: "Well-planned urban layouts focused on community, flow, and sustainability.",
              icon: "🏙️"
            },
            {
              title: "Landscape",
              description: "Outdoor spaces crafted to balance natural beauty with everyday function.",
              icon: "📋"
            },
            {
              title: "Research",
              description: "Innovative studies that guide smarter, future-forward design decisions.",
              icon: "💻"
            }
            
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-secondary p-6 sm:p-8 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 hover-lift"
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
      <section className="py-24 bg-black px-4 sm:px-6 relative overflow-hidden" ref={ctaSectionRef} id="contact-cta">
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