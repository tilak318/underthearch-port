import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ArchitectureCalculatorProps = {
  onBack: () => void;
};

const ArchitectureCalculator = ({ onBack }: ArchitectureCalculatorProps) => {
  const navigate = useNavigate();
  const calculatorRef = useRef<HTMLDivElement>(null);

  // State declarations
  const [currentView, setCurrentView] = useState<'form' | 'result'>('form');
  const [projectType, setProjectType] = useState("Residential");
  const [builtUpArea, setBuiltUpArea] = useState<string>('');
  const [serviceType, setServiceType] = useState("Basic");
  const [cost, setCost] = useState({ min: 0, max: 0 });

  // Calculate cost function
  const calculateCost = () => {
    const area = Number(builtUpArea) || 0;
    const rates = {
      Residential: {
        Basic: [900, 1000],
        Standard: [1000, 1200],
        Premium: [1200, 2500],
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
  const handleGetDesignPrice = () => {
    calculateCost();
    setCurrentView('result');
  };

  // Handle back to form button click
  const handleBackToForm = () => {
    setCurrentView('form');
  };

  // Handle main back button click
  const handleBack = () => {
    onBack();
  };

  // Reset form when inputs change
  useEffect(() => {
    if (currentView === 'result') {
      setCurrentView('form');
    }
  }, [projectType, builtUpArea, serviceType]);

  // Scroll to component on mount
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

  // Calculate cost when inputs change
  useEffect(() => {
    calculateCost();
  }, [builtUpArea, serviceType, projectType]);

  // Render the calculator form view
  const renderCalculatorForm = () => (
    <>
      <div className="mb-6 sm:mb-8 text-center">
        <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
          Architecture Design Calculator
        </h3>
        <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
      </div>
      
      {/* Two-column grid for inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
        {/* Left Column: Project Type & Built-up Area */}
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
        
        {/* Right Column: Service Type */}
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
        </div>
      </div>

      {/* Get Design Price Button */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={handleGetDesignPrice}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all shadow-lg text-sm sm:text-base"
        >
          Get Design Price
        </button>
      </div>
    </>
  );

  // Render the price result view
  const renderPriceResult = () => (
    <>
      <div className="mb-6 sm:mb-8 text-center">
        <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
          Architecture Design Price
        </h3>
        <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
      </div>

      {/* Price Card */}
      <div className="bg-gradient-to-r from-gray-900/40 to-gray-700/40 p-4 sm:p-6 rounded-lg border border-gray-500/30 mb-6">
        <h4 className="text-base sm:text-lg font-medium text-gray-200 mb-3">Estimated Budget</h4>
        <div className="space-y-2 text-sm sm:text-base">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Project Type:</span>
            <span className="text-white font-medium">{projectType}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Built-up Area:</span>
            <span className="text-white font-medium">{builtUpArea} sq. ft.</span>
          </div>
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
                    Premium: "1,200-2,500"
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

      {/* Disclaimer Card */}
      <div className="bg-black/30 p-4 sm:p-6 rounded-lg border border-white/10 text-left text-sm text-gray-300 space-y-4 mb-6 sm:mb-8">
        <p>
          Every space we help bring to life is a reflection of thoughtful design and quality execution. The estimate you see here is a preliminary calculation based on standard premium construction rates — excluding interior works — and calculated on your specified built-up area.
        </p>
        <h3 className="text-md font-semibold text-white pt-2">🧱 Why Actual Costs May Vary</h3>
        <p>No two sites — or dreams — are the same. Your final construction cost may differ due to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><span className="font-medium text-white">Project Location:</span> Labor, logistics, and material rates shift between cities (Surat, Ahmedabad, Rajkot, etc.)</li>
          <li><span className="font-medium text-white">Site Conditions:</span> Soil quality, terrain, and site accessibility can influence foundation and structural requirements.</li>
          <li><span className="font-medium text-white">Design Complexity:</span> From clean modern lines to expressive architectural forms — complexity affects cost.</li>
          <li><span className="font-medium text-white">Material Choices:</span> The brands, finishes, and techniques you choose have a direct impact on your investment.</li>
          <li><span className="font-medium text-white">Regulatory Factors:</span> Local bye-laws, approvals, and development norms vary city to city.</li>
          <li><span className="font-medium text-white">Execution Style:</span> Turnkey projects, labor contracts, and item-wise execution all bring different cost dynamics.</li>
        </ul>
        <h3 className="text-md font-semibold text-white pt-2">💬 Let's Talk Possibilities</h3>
        <p>
          At Under The Arch, we believe cost is only one dimension of building right. If you're ready to go from estimate to excellence — let's have a conversation.
        </p>
      </div>
      
      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={handleBackToForm}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all text-sm sm:text-base"
        >
          Back
        </button>
        <button
          onClick={() => navigate('/contact')}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all shadow-lg text-sm sm:text-base"
        >
          Contact Us 
        </button>
      </div>
    </>
  );

  return (
    <div ref={calculatorRef} className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-500/30 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm shadow-2xl">
        {currentView === 'form' ? renderCalculatorForm() : renderPriceResult()}
      </div>
    </div>
  );
};

export default ArchitectureCalculator;