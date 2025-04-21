import { useRef, useEffect, useState } from "react";

type ArchitectureCalculatorProps = {
  onBack: () => void;
};

const ArchitectureCalculator = ({ onBack }: ArchitectureCalculatorProps) => {
  const afterHeroRef = useRef<HTMLDivElement>(null);

  // Modified scroll behavior
  useEffect(() => {
    if (afterHeroRef.current) {
      const yOffset = -50; // Add some padding from the top
      const element = afterHeroRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }, []);

  const [projectType, setProjectType] = useState("Residential");
  const [builtUpArea, setBuiltUpArea] = useState(0);
  const [serviceType, setServiceType] = useState("Basic");
  const [cost, setCost] = useState({ min: 0, max: 0 });

  // Scroll to top when component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const calculateCost = () => {
    const rates = {
      Basic: [900, 1100],
      Standard: [1200, 1500],
      Premium: [1800, 2200],
    };
    const [minRate, maxRate] = rates[serviceType];
    setCost({
      min: minRate * builtUpArea,
      max: maxRate * builtUpArea,
    });
  };

  useEffect(() => {
    calculateCost();
  }, [builtUpArea, serviceType]);

  return (
    <div ref={afterHeroRef} className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
          Architecture Design Calculator
        </span>
      </h2>
      
      <div className="p-8 rounded-xl border border-gray-500/30 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm shadow-2xl">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Architectural Design & Planning Services
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg border border-white/10 transition-all hover:border-gray-500/30">
              <label className="text-white block mb-2 font-medium">Type of Project</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:border-gray-400 focus:ring-2 focus:ring-gray-500/30 transition-all"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Farmhouse">Farmhouse</option>
              </select>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg border border-white/10 transition-all hover:border-gray-500/30">
              <label className="text-white block mb-2 font-medium">Built-up Area (sq. ft.)</label>
              <input
                type="number"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:border-gray-400 focus:ring-2 focus:ring-gray-500/30 transition-all"
                placeholder="Enter area in square feet"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg border border-white/10 transition-all hover:border-gray-500/30">
              <label className="text-white block mb-2 font-medium">Service Type</label>
              <div className="grid grid-cols-3 gap-2">
                {["Basic", "Standard", "Premium"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setServiceType(type)}
                    className={`p-3 rounded-md transition-all ${
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
            
            <div className="bg-gradient-to-r from-gray-900/40 to-gray-700/40 p-6 rounded-lg border border-gray-500/30">
              <h4 className="text-gray-200 text-lg font-medium mb-3">Estimated Budget</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Service Level:</span>
                <span className="text-white font-medium">{serviceType}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Rate per sq. ft.:</span>
                <span className="text-white font-medium">
                  ₹{serviceType === "Basic" ? "900-1,100" : serviceType === "Standard" ? "1,200-1,500" : "1,800-2,200"}
                </span>
              </div>
              <div className="h-px w-full bg-white/20 my-3"></div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Budget Range:</span>
                <span className="text-2xl font-bold text-white">
                  ₹{cost.min.toLocaleString()} - ₹{cost.max.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all mr-4"
          >
            Back
          </button>
          <button
            className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg"
          >
            Get Detailed Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureCalculator;