import { useRef, useEffect, useState } from "react";
// Remove useNavigate if not used for other purposes - UNCOMMENT THIS
import { useNavigate } from "react-router-dom"; 

type ArchitectureCalculatorProps = {
  onBack: () => void;
};

const ArchitectureCalculator = ({ onBack }: ArchitectureCalculatorProps) => {
  // Remove navigate if not used - UNCOMMENT THIS
  const navigate = useNavigate(); 
  const calculatorRef = useRef<HTMLDivElement>(null); // Use a ref for this component

  // State declarations
  const [projectType, setProjectType] = useState("Residential");
  const [builtUpArea, setBuiltUpArea] = useState<string>('');
  const [serviceType, setServiceType] = useState("Basic");
  const [cost, setCost] = useState({ min: 0, max: 0 });
  const [showPrice, setShowPrice] = useState(false);

  // Calculate cost function
  const calculateCost = () => {
    const area = Number(builtUpArea) || 0;
    const rates = {
      Residential: {
        Basic: [900, 1000],
        Standard: [1000, 1200],
        Premium: [1200, 1500],
      },
      Commercial: {
        Basic: [900, 1000],
        Standard: [1000, 1100],
        Premium: [1100, 1200],
      }
    };
    
    const [minRate, maxRate] = rates[projectType][serviceType];
    setCost({
      min: minRate * area,
      max: maxRate * area,
    });
  };

  // Handle quote button click
  const handleQuote = () => {
    calculateCost();
    setShowPrice(true);
    // --- Start Edit 1: Remove scroll on quote ---
    // Remove the arbitrary scroll down
    // setTimeout(() => {
    //   window.scrollTo({
    //     top: window.pageYOffset + 100,
    //     behavior: 'smooth'
    //   });
    // }, 100);
    // --- End Edit 1 ---
  };

  // Handle back button click
  const handleBack = () => {
    // --- Start Edit 2: Remove scroll on back, just call onBack ---
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
    // setTimeout(onBack, 600); // Remove delay if not needed for scroll animation
    onBack(); // Call the parent's back handler directly
    // --- End Edit 2 ---
  };

  // Effects
  useEffect(() => {
    setShowPrice(false);
  }, [projectType, builtUpArea, serviceType]);

  // --- Start Edit 3: Remove redundant/conflicting scroll effects ---
  // Keep only one effect to scroll to the top of *this* calculator on mount
  useEffect(() => {
    if (calculatorRef.current) {
      const elementTop = calculatorRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -80; // Adjust if you have a sticky header
      window.scrollTo({
        top: elementTop + offset,
        behavior: 'smooth'
      });
    }
  }, []); // Run only once on mount

  // Remove other scroll effects
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []); 
  // --- End Edit 3 ---


  useEffect(() => {
    // Recalculate cost when inputs change, but don't scroll
    calculateCost(); 
  }, [builtUpArea, serviceType, projectType]); // Added projectType dependency

  // Update the rate display in JSX
  <span className="text-white font-medium">
    ₹{(() => {
      const rates = {
        Residential: {
          Basic: "900-1,000",
          Standard: "1,000-1,200",
          Premium: "1,200-1,500"
        },
        Commercial: {
          Basic: "900-1,000",
          Standard: "1,000-1,100",
          Premium: "1,100-1,200"
        }
      };
      return rates[projectType][serviceType];
    })()}
  </span>
  
  // Scroll to top when component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    calculateCost();
  }, [builtUpArea, serviceType]);

  return (
    // --- Start Edit 4: Add ref to main div ---
    <div ref={calculatorRef} className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
   
     
      
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-500/30 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm shadow-2xl">
        <div className="mb-6 sm:mb-8 text-center">
          <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
          Architecture Design Calculator
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Project Type Section */}
            <div className="bg-black/30 p-4 sm:p-6 rounded-lg border border-white/10 transition-all hover:border-gray-500/30">
              <label className="text-white block mb-2 font-medium">Type of Project</label>
              <div className="relative">
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-2 sm:p-3 pr-10 rounded-md bg-black/50 border border-white/20 text-white focus:border-gray-400 focus:ring-2 focus:ring-gray-500/30 transition-all appearance-none cursor-pointer text-sm sm:text-base"
                >
                  <option value="Residential" className="bg-black">Residential</option>
                  <option value="Commercial" className="bg-black">Commercial</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Built-up Area Section */}
            <div className="bg-black/30 p-4 sm:p-6 rounded-lg border border-white/10 transition-all hover:border-gray-500/30">
              <label className="text-white block mb-2 font-medium">Built-up Area (sq. ft.)</label>
              <input
                type="number"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
                className="w-full p-2 sm:p-3 rounded-md bg-black/50 border border-white/20 text-white focus:border-gray-400 focus:ring-2 focus:ring-gray-500/30 transition-all text-sm sm:text-base"
                placeholder="Enter your built-up area in sq. ft."
              />
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {/* Service Type Section */}
            <div className="bg-black/30 p-4 sm:p-6 rounded-lg border border-white/10 transition-all hover:border-gray-500/30">
              <label className="text-white block mb-2 font-medium">Service Type</label>
              <div className="grid grid-cols-3 gap-2">
                {["Basic", "Standard", "Premium"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setServiceType(type)}
                    className={`p-2 sm:p-3 rounded-md text-sm sm:text-base transition-all ${
                      serviceType === type
                        ? "bg-white text-black font-medium"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Budget Section */}
            {showPrice && (
              <div className="bg-gradient-to-r from-gray-900/40 to-gray-700/40 p-4 sm:p-6 rounded-lg border border-gray-500/30">
                <h4 className="text-base sm:text-lg font-medium text-gray-200 mb-3">Estimated Budget</h4>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Service Level:</span>
                    <span className="text-white font-medium">{serviceType}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Rate per sq. ft.:</span>
                    <span className="text-white font-medium">
                      ₹{(() => {
                        const rates = {
                          Residential: {
                            Basic: "900-1,000",
                            Standard: "1,000-1,200",
                            Premium: "1,200-1,500"
                          },
                          Commercial: {
                            Basic: "900-1,000",
                            Standard: "1,000-1,100",
                            Premium: "1,100-1,200"
                          }
                        };
                        return rates[projectType][serviceType];
                      })()}
                    </span>
                  </div>
                  <div className="h-px w-full bg-white/20 my-3"></div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <span className="text-gray-300 mb-1 sm:mb-0">Budget Range:</span>
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      ₹{cost.min.toLocaleString()} - ₹{cost.max.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8">
          {/* Remove the Back button */}
          {/* <button
            onClick={handleBack}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all text-sm sm:text-base"
          >
            Back
          </button> */}
          {!showPrice ? (
            <button
              onClick={handleQuote}
              // Update the classes for a white button design
              className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all shadow-lg text-sm sm:text-base"
            >
              Get Design Price
            </button>
          ) : (
            <button
              onClick={() => navigate('/contact')}
              // Also update the Contact Us button for consistency when price is shown
              className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all shadow-lg text-sm sm:text-base"
            >
              Contact Us 
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureCalculator;