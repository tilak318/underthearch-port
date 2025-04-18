import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
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
            src="/sf7.png" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white text-base md:text-lg rounded-full mb-4 sm:mb-8">
            About UnderTheArch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Our Story & Vision
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Discover the passion and philosophy that drives our architectural practice.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Building Dreams Since 2021
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  UnderTheArch emerged in 2021 with a vision to revolutionize architectural design in Gujarat. Our journey began with a commitment to blend traditional architectural values with contemporary innovation.
                </p>
                <p>
                  From our humble beginnings in Surat, we've expanded our footprint across major cities in Gujarat, delivering exceptional architectural solutions that combine aesthetic excellence with functional brilliance.
                </p>
                <p>
                  Our success is built on three pillars: client-centric approach, sustainable design practices, and a team of passionate architects who bring diverse perspectives to every project.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src="/RF-7.png" 
                  alt="Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
                <img 
                  src="/BF-1.png" 
                  alt="Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Values
            </h2>
            <p className="text-gray-300">
              The principles that guide us in every project and partnership.
            </p>
          </div>
          
          {/* Updated layout for values - more appropriate card sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-white/10 hover-lift transition-all duration-300 flex flex-col min-h-[220px]">
              <h3 className="text-2xl font-semibold text-white mb-4">Inspiring Innovation</h3>
              <p className="text-gray-300 flex-grow">
                We champion creativity, delivering groundbreaking designs that challenge conventions and set new standards in architecture.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-white/10 hover-lift transition-all duration-300 flex flex-col min-h-[220px]">
              <h3 className="text-2xl font-semibold text-white mb-4">Excellence in Execution</h3>
              <p className="text-gray-300 flex-grow">
                We pursue precision and quality in every detail, guaranteeing flawless delivery from concept to completion.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-white/10 hover-lift transition-all duration-300 flex flex-col min-h-[220px]">
              <h3 className="text-2xl font-semibold text-white mb-4">Lifelong Learning</h3>
              <p className="text-gray-300 flex-grow">
                We are committed to continuous learning, staying ahead of industry trends and technologies to fuel our growth and expertise.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-white/10 hover-lift transition-all duration-300 flex flex-col min-h-[220px]">
              <h3 className="text-2xl font-semibold text-white mb-4">Client Success is Our Success</h3>
              <p className="text-gray-300 flex-grow">
                Your goals are our goals. Our client-focused approach ensures we deliver results that drive shared success.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg border border-white/10 hover-lift transition-all duration-300 flex flex-col min-h-[220px]">
              <h3 className="text-2xl font-semibold text-white mb-4">Empowering Collaboration</h3>
              <p className="text-gray-300 flex-grow">
                Collaboration is at our heart. We build strong partnerships with clients and teams to ensure every project runs smoothly and successfully.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founders Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Founders & Partners
            </h2>
            <p className="text-gray-300">
              The visionaries leading our architectural practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ar. Kunjan Akbari",
                role: "Co- founder | Architect",
                image: "lovable-uploads/AR.KUNJANAKBARI.jpg"
              },
              {
                name: "Ar. Shruti Salia",
                role: "Co- founder | Architect",
                image: "lovable-uploads/AR.SHRUTISALIA.jpg"
              },
              {
                name: "Ar. Shyam Gajera",
                role: "Co- founder | Architect",
                image: "lovable-uploads/AR.SHYAMGAJERA.jpg"
              }
            ].map((founder, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg hover-lift"
              >
                <div className="aspect-[1/1] overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="founder-img transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-white mb-1">{founder.name}</h3>
                  <p className="text-gray-300 text-sm">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
<section className="py-24 bg-secondary px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-16">
    
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
      Our Team
      </h2>
      <p className="text-gray-300">
        Our talented team of professionals brings diverse expertise and passion to every project.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        {
          name: "Ar. Dwarkesh Patoliya",
         
          image: "lovable-uploads/DWARKESHPATOLIYA.jpg"
        },
        {
          name: "Ar. Kaushik Gohil",
          
          image: "lovable-uploads/KAUSHIKGOHIL.jpg"
        },
        {
          name: "Ar. Meet Thummar",
         
          image: "lovable-uploads/MEETTHUMMAR.jpg"
        },
        {
          name: "Mansi Bhandari",
         
          image: "lovable-uploads/MANSI.jpg"
        }
      ].map((member, index) => (
        <div 
          key={index}
          className="group relative overflow-hidden rounded-lg hover-lift"
        >
          <div className="aspect-[1/1] overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="founder-img transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
           
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* Stats Section */}
      <section className="py-24 bg-black px-6">
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
      
      {/* CTA Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your architectural vision to life. Contact us today to discuss your ideas.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-black px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            Contact Us <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;