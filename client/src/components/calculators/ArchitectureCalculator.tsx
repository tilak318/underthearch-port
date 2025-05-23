import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "@/config";
import { toast } from "sonner"; // Import toast for notifications

type ArchitectureCalculatorProps = {
  onBack: () => void;
  disableAutoScroll?: boolean; // Add prop to disable auto-scrolling
};

const ArchitectureCalculator = ({ onBack, disableAutoScroll = false }: ArchitectureCalculatorProps) => {
  const navigate = useNavigate();
  const calculatorRef = useRef<HTMLDivElement>(null);
  const priceResultRef = useRef<HTMLDivElement>(null); // Add ref for price result section

  // State declarations
  const [currentView, setCurrentView] = useState<'form' | 'contact' | 'result'>('form');
  const [projectType, setProjectType] = useState("Residential");
  const [builtUpArea, setBuiltUpArea] = useState<string>('');
  const [serviceType, setServiceType] = useState("Basic");
  const [floorCount, setFloorCount] = useState<number>(1); // Add floor count state (default: 1 for ground floor)
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
    
    // Apply floor count multiplier
    // floorCount is the number of floors (1 = ground floor only, 2 = ground + 1st floor, etc.)
    setCost({
      min: Math.round(area * minRate * floorCount),
      max: Math.round(area * maxRate * floorCount),
    });
  };

  // Handle next button click to go to contact form
  const handleNextToContact = () => {
    // Validate built-up area is provided
    if (!builtUpArea || builtUpArea === '0') {
      toast.error('Please enter the built-up area before proceeding', {
        id: 'built-up-area-validation',
        duration: 3000,
      });
      return;
    }
    setCurrentView('contact');
  };

  // Handle get design price after contact form submission
  const handleGetDesignPrice = () => {
    calculateCost();
    setCurrentView('result');
  };

  // Handle back button clicks
  const handleBackToForm = () => {
    setCurrentView('form');
  };

  const handleBackToContact = () => {
    setCurrentView('contact');
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

  // Scroll to component on mount (if auto-scroll is not disabled)
  useEffect(() => {
    if (!disableAutoScroll && calculatorRef.current) {
      const elementTop = calculatorRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offset = -80; // Adjust if you have a sticky header
      window.scrollTo({
        top: elementTop + offset,
        behavior: 'smooth'
      });
    }
  }, []); // Run only once on mount

  // Scroll to price result section when it's displayed
  useEffect(() => {
    if (currentView === 'result' && priceResultRef.current) {
      setTimeout(() => {
        const elementTop = priceResultRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offset = -100; // Adjust if you have a sticky header
        window.scrollTo({
          top: elementTop + offset,
          behavior: 'smooth'
        });
      }, 100); // Small delay to ensure the component is fully rendered
    }
  }, [currentView]);

  // Calculate cost when inputs change
  useEffect(() => {
    calculateCost();
  }, [builtUpArea, serviceType, projectType, floorCount]);

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
        
        {/* Right Column: Service Type and Floor Count */}
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
          
          {/* Floor Count Section */}
          <div className="bg-black/30 p-4 sm:p-6 rounded-lg border border-white/10 transition-all hover:border-gray-500/30">
            <label className="text-white block mb-2 font-medium">Number of Floors</label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((count) => (
                <button
                  key={count}
                  onClick={() => setFloorCount(count)}
                  className={`p-2 sm:p-3 rounded-md text-sm sm:text-base transition-all ${
                    floorCount === count
                      ? "bg-white text-black font-medium"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {count === 1 ? "G" : count === 2 ? "G+1" : count === 3 ? "G+2" : "G+3"}
                </button>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-2">G = Ground Floor</p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={handleNextToContact}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all shadow-lg text-sm sm:text-base"
        >
          Next
        </button>
      </div>
    </>
  );

  // Render the price result view
  const renderPriceResult = () => (
    <>
      <div ref={priceResultRef} className="mb-6 sm:mb-8 text-center">
        <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
          Estimated Design Price
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
            <span className="text-gray-300">Number of Floors:</span>
            <span className="text-white font-medium">
              {floorCount === 1 ? "Ground Floor" : floorCount === 2 ? "G+1" : floorCount === 3 ? "G+2" : "G+3"}
            </span>
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

  // Contact Form Component
  const ContactForm = ({ onSubmit }: { onSubmit: () => void }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, subject, message, source: 'architecture' }),
        });
        if (!response.ok) throw new Error('Failed to submit');
        setSuccess(true);
        toast.success('Message sent successfully', { id: "calculator-form" });
        onSubmit();
      } catch (err) {
        setError('Submission failed. Please try again.');
        toast.error('Unable to send message. Please try again later.', { id: "calculator-form" });
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="max-w-xl mx-auto bg-secondary p-4 md:p-10 rounded-lg border border-white/10 mt-8">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="calculator-name" className="block text-white mb-2">Full Name</label>
              <input 
                id="calculator-name"
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20" 
                required 
              />
            </div>
            <div>
              <label htmlFor="calculator-email" className="block text-white mb-2">Email Address</label>
              <input 
                id="calculator-email"
                type="email" 
                placeholder="Your Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20" 
                required 
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="calculator-phone" className="block text-white mb-2">Phone Number</label>
              <input 
                id="calculator-phone"
                type="tel" 
                placeholder="Your Phone Number" 
                value={phone} 
                onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, ''))} 
                pattern="[0-9]{10}"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20" 
                required 
              />
            </div>
            <div>
              <label htmlFor="calculator-subject" className="block text-white mb-2">Subject</label>
              <input 
                id="calculator-subject"
                type="text" 
                placeholder="Subject" 
                value={subject} 
                onChange={e => setSubject(e.target.value)} 
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20" 
                required 
              />
            </div>
          </div>
          <div>
            <label htmlFor="calculator-message" className="block text-white mb-2">Your Message</label>
            <textarea 
              id="calculator-message"
              placeholder="Your Message" 
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none" 
              rows={5} 
              required
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleBackToForm}
              className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
            >
              Back
            </button>
            <button 
              type="submit" 
              className="bg-white text-black px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors disabled:opacity-70" 
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit to Get Design Price'}
            </button>
          </div>
          {success && <p className="text-green-400 mt-2">Submitted successfully!</p>}
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </form>
      </div>
    );
  };

  // Render the contact form view
  const renderContactForm = () => (
    <>
      <div className="mb-6 sm:mb-8 text-center">
        <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2">
          Architecture Design Calculator
        </h3>
        <div className="h-1 w-24 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
      </div>
      <ContactForm onSubmit={handleGetDesignPrice} />
    </>
  );

  // We're now using the toast from sonner library instead of a custom notification component

  return (
    <div ref={calculatorRef} className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-500/30 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm shadow-2xl">
        {currentView === 'form' && renderCalculatorForm()}
        {currentView === 'contact' && renderContactForm()}
        {currentView === 'result' && renderPriceResult()}
      </div>
    </div>
  );
};

export default ArchitectureCalculator;