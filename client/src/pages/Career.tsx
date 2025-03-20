
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import CareerCard from "@/components/ui/CareerCard";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  
  // Sample data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Architect",
      location: "Surat, India",
      type: "Full-time",
      description: "We're looking for an experienced Senior Architect to join our team. The ideal candidate will have a strong portfolio showcasing innovative design solutions and technical expertise.",
      requirements: [
        "Bachelor's or Master's degree in Architecture",
        "7+ years of professional experience",
        "Proficiency in AutoCAD, Revit, and 3D modeling software",
        "Strong design portfolio showcasing diverse projects",
        "Excellent communication and presentation skills"
      ],
      responsibilities: [
        "Lead architectural design projects from concept to completion",
        "Collaborate with clients to understand design requirements",
        "Develop detailed architectural drawings and specifications",
        "Mentor junior architects and design staff",
        "Ensure compliance with building codes and regulations"
      ]
    },
    {
      id: 2,
      title: "Interior Designer",
      location: "Surat, India",
      type: "Full-time",
      description: "We are seeking a creative Interior Designer to create functional and aesthetically pleasing spaces for our clients. You will work closely with our architectural team to ensure cohesive design solutions.",
      requirements: [
        "Degree in Interior Design or related field",
        "3+ years of professional experience",
        "Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite",
        "Strong portfolio showcasing interior design projects",
        "Knowledge of materials, finishes, and furniture specifications"
      ],
      responsibilities: [
        "Create innovative interior design concepts",
        "Develop space plans, material selections, and furniture layouts",
        "Collaborate with architects and clients",
        "Prepare detailed design presentations",
        "Oversee implementation of interior design elements"
      ]
    },
    {
      id: 3,
      title: "Project Manager",
      location: "Surat, India",
      type: "Full-time",
      description: "We're looking for an organized and detail-oriented Project Manager to oversee architectural projects from inception to completion, ensuring they are delivered on time and within budget.",
      requirements: [
        "Degree in Architecture, Construction Management, or related field",
        "5+ years of project management experience in architecture or construction",
        "Strong knowledge of construction processes and building regulations",
        "Excellent organizational and leadership skills",
        "Experience with project management software"
      ],
      responsibilities: [
        "Develop and maintain project schedules and budgets",
        "Coordinate with clients, contractors, and design team members",
        "Manage project resources and team members",
        "Identify and mitigate project risks",
        "Ensure project deliverables meet quality standards"
      ]
    },
    {
      id: 4,
      title: "Junior Architect",
      location: "Surat, India",
      type: "Full-time",
      description: "We are seeking a talented Junior Architect to join our growing team. This role offers an excellent opportunity to gain hands-on experience working on diverse architectural projects.",
      requirements: [
        "Bachelor's or Master's degree in Architecture",
        "0-2 years of professional experience",
        "Proficiency in AutoCAD, Revit, and visualization software",
        "Strong design sensibility and technical aptitude",
        "Good communication and teamwork skills"
      ],
      responsibilities: [
        "Assist in developing architectural designs and drawings",
        "Prepare presentation materials for client meetings",
        "Research building codes, materials, and construction methods",
        "Collaborate with senior architects and design team members",
        "Participate in site visits and client meetings"
      ]
    }
  ];
  
  // Page transition animation
  useEffect(() => {
    document.body.classList.add('page-transition-enter');
    return () => {
      document.body.classList.remove('page-transition-enter');
      document.body.classList.add('page-transition-exit');
    };
  }, []);

  // Body scroll lock when job modal is open
  useEffect(() => {
    if (selectedJob !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedJob]);

  // Get selected job details
  const jobDetails = selectedJob !== null 
    ? jobOpenings.find(job => job.id === selectedJob) 
    : null;

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a" 
            alt="Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 mt-16 text-center">
          <span className="inline-block px-4 py-1 border border-white/20 text-white text-sm rounded-full mb-6">
            Careers at UnderTheArch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Join Our Team
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover exciting career opportunities to grow professionally while creating exceptional architectural designs.
          </p>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-gray-400 uppercase tracking-wider">Why Join Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Be Part of Something Extraordinary
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  At UnderTheArch, we believe that our team is our greatest asset. We foster a collaborative environment where innovation thrives and creativity knows no bounds.
                </p>
                <p>
                  We're committed to nurturing talent and providing opportunities for professional growth and development. When you join our team, you become part of a family dedicated to pushing the boundaries of architectural excellence.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="bg-secondary p-6 rounded-lg border border-white/5">
                <h3 className="text-xl font-medium text-white mb-3">Professional Growth</h3>
                <p className="text-gray-400 text-sm">
                  Continuous learning opportunities and mentorship programs.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg border border-white/5">
                <h3 className="text-xl font-medium text-white mb-3">Creative Freedom</h3>
                <p className="text-gray-400 text-sm">
                  Space to explore innovative design solutions.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg border border-white/5">
                <h3 className="text-xl font-medium text-white mb-3">Collaborative Culture</h3>
                <p className="text-gray-400 text-sm">
                  A supportive team environment that values diverse perspectives.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg border border-white/5">
                <h3 className="text-xl font-medium text-white mb-3">Work-Life Balance</h3>
                <p className="text-gray-400 text-sm">
                  Flexible work arrangements and wellness initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Openings Section */}
      <section className="py-24 bg-secondary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">Current Openings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Explore Opportunities
            </h2>
            <p className="text-gray-300">
              Discover current job openings and find the perfect role to match your skills and aspirations.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <CareerCard
                key={job.id}
                title={job.title}
                location={job.location}
                type={job.type}
                description={job.description}
                onClick={() => setSelectedJob(job.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Job Details Modal */}
      {selectedJob !== null && jobDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedJob(null)}></div>
          
          <div className="bg-secondary relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border border-white/10 animate-scale-in">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{jobDetails.title}</h3>
                  <div className="flex space-x-4">
                    <span className="text-gray-400">{jobDetails.location}</span>
                    <span className="text-gray-400">{jobDetails.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-gray-300 mb-4">{jobDetails.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {jobDetails.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-white mb-4">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {jobDetails.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="/contact" 
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors"
                  >
                    Apply for this Position
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Application Process Section */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-400 uppercase tracking-wider">How to Apply</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Application Process
            </h2>
            <p className="text-gray-300">
              We've designed a straightforward application process to help you join our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Review Openings",
                description: "Browse our current job openings and find a position that matches your skills and interests."
              },
              {
                step: "02",
                title: "Submit Application",
                description: "Complete the application form and upload your resume, portfolio, and cover letter."
              },
              {
                step: "03",
                title: "Interview Process",
                description: "Selected candidates will be invited for multiple rounds of interviews with our team."
              },
              {
                step: "04",
                title: "Welcome Aboard",
                description: "Successful candidates will receive an offer letter and join our creative family."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-secondary p-8 rounded-lg border border-white/5 hover:border-white/20 transition-all duration-300 hover-lift relative"
              >
                <span className="absolute -top-4 left-8 bg-white text-black text-xl font-bold py-1 px-3 rounded">
                  {item.step}
                </span>
                <h3 className="text-xl font-medium text-white mb-4 mt-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
