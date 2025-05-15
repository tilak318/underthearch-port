import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "@/config";
import { toast } from "sonner"; // Import toast for notifications

type InteriorCalculatorProps = {
  onBack: () => void;
  disableAutoScroll?: boolean; // Add prop to disable auto-scrolling
};

const InteriorCalculator = ({ onBack, disableAutoScroll = false }: InteriorCalculatorProps) => {
  // const afterHeroRef = useRef<HTMLDivElement>(null); // Removed ref
  const priceResultRef = useRef<HTMLDivElement>(null); // Add ref for price result section

  // State management - group all state declarations together at the top
  const [currentStep, setCurrentStep] = useState<'propertyType' | 'rooms' | 'packages' | 'contact' | 'result'>('propertyType');
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [selectedSqft, setSelectedSqft] = useState<string | null>(null);
  const [roomCounts, setRoomCounts] = useState({
    "LIVING ROOM": 1,
    "KITCHEN": 1,
    "BEDROOM": 1,
    "BATH": 1,
    "DINING": 1, // Set to 1 by default
  });
  const [selectedPackage, setSelectedPackage] = useState<'essential' | 'premium' | 'luxury' | null>(null);
  const [priceRange, setPriceRange] = useState<{min: number, max: number, totalSqft: number} | null>(null);

  // Scroll to top when component is rendered (if auto-scroll is not disabled)
  useEffect(() => {
    if (!disableAutoScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, disableAutoScroll]);
  
  // Scroll to price result section when it's displayed
  useEffect(() => {
    if (currentStep === 'result' && priceResultRef.current) {
      setTimeout(() => {
        const elementTop = priceResultRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offset = -100; // Adjust if you have a sticky header
        window.scrollTo({
          top: elementTop + offset,
          behavior: 'smooth'
        });
      }, 100); // Small delay to ensure the component is fully rendered
    }
  }, [currentStep]);

  // Property type options
  const propertyOptions = [
    { id: '1BHK', label: '1 BHK' },
    { 
      id: '2BHK',
      label: '2 BHK',
      subOptions: [
        { id: '2BHK-800-below', label: 'Below 800 sq.ft' },
        { id: '2BHK-800-above', label: 'Above 800 sq.ft' }
      ]
    },
    {
      id: '3BHK',
      label: '3 BHK',
      subOptions: [
        { id: '3BHK-1200-below', label: 'Below 1200 sq.ft' },
        { id: '3BHK-1200-above', label: 'Above 1200 sq.ft' }
      ]
    },
    {
      id: '4BHK',
      label: '4 BHK',
      subOptions: [
        { id: '4BHK-1800-below', label: 'Below 1800 sq.ft' },
        { id: '4BHK-1800-above', label: 'Above 1800 sq.ft' }
      ]
    },
    { id: '5BHK', label: '5 BHK' }
  ];

  // Helper to scroll to after hero image
  // const scrollToAfterHero = () => { // Remove this entire function
  //   setTimeout(() => {
  //     if (afterHeroRef.current) {
  //       const heroImageHeight = afterHeroRef.current.offsetHeight;
  //       const offset = 100; // Adjust this value to ensure the image is not visible
  //       window.scrollTo({ top: heroImageHeight + offset, behavior: 'smooth' });
  //     }
  //   }, 100);
  // };

  const handleStepChange = (nextStep: typeof currentStep) => {
    setCurrentStep(nextStep);
    // scrollToAfterHero(); // Removed call
  };

  const handlePropertySelect = (type: string, isSqft: boolean = false) => {
    if (isSqft) {
      setSelectedSqft(type);
    } else {
      setPropertyType(type);
      setSelectedSqft(null); // Reset sqft when new BHK is selected

      // Set default room counts based on BHK type
      if (type === '1BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 1,
          "BATH": 1,
          "DINING": 1, // Set to 1
        });
      } else if (type === '2BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 2,
          "BATH": 2,
          "DINING": 1, // Set to 1
        });
      } else if (type === '3BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 3,
          "BATH": 3,
          "DINING": 1, // Set to 1
        });
      } else if (type === '4BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 4,
          "BATH": 4,
          "DINING": 1, // Set to 1
        });
      } else if (type === '5BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 5,
          "BATH": 5,
          "DINING": 1, // Set to 1
        });
      }
    }
  };

  const handleRoomCountChange = (roomType: string, increment: boolean) => {
    setRoomCounts(prev => ({
      ...prev,
      [roomType]: increment ? prev[roomType] + 1 : Math.max(0, prev[roomType] - 1)
    }));
  };

  const canProceedToNext = (option: typeof propertyOptions[0]) => {
    if (!option.subOptions) {
      return propertyType === option.id;
    }
    return selectedSqft && selectedSqft.startsWith(option.id);
  };

  // Room sqft mappings
  const sqftMap1BHK = {
    "LIVING ROOM": 200,
    "KITCHEN": 150,
    "BEDROOM": 100,
    "BATH": 30,
    "DINING": 50,
  };

  const sqftMap2BHK = {
    below: {
      "LIVING ROOM": 200,
      "KITCHEN": 150,
      "BEDROOM": 100,
      "BATH": 30,
      "DINING": 50,
    },
    above: {
      "LIVING ROOM": 300,
      "KITCHEN": 180,
      "BEDROOM": 130,
      "BATH": 50,
      "DINING": 80,
    }
  };
  
  const sqftMap3BHK = {
    below: {
      "LIVING ROOM": 300,
      "KITCHEN": 200,
      "BEDROOM": 140,
      "BATH": 50,
      "DINING": 80,
    },
    above: {
      "LIVING ROOM": 400,
      "KITCHEN": 250,
      "BEDROOM": 150,
      "BATH": 60,
      "DINING": 80,
    }
  };
  
  const sqftMap4BHK = {
    below: {
      "LIVING ROOM": 450,
      "KITCHEN": 250,
      "BEDROOM": 150,
      "BATH": 50,
      "DINING": 100,
    },
    above: {
      "LIVING ROOM": 500,
      "KITCHEN": 300,
      "BEDROOM": 180,
      "BATH": 80,
      "DINING": 120,
    }
  };
  
  const sqftMap5BHK = {
    "LIVING ROOM": 600,
    "KITCHEN": 350,
    "BEDROOM": 180,
    "BATH": 100,
    "DINING": 150,
  };
  
  // Package rates
  const packageRates = {
    essential: {
      below: [900, 1300],
      above: [830, 1200],
    },
    premium: {
      below: [1700, 2300],
      above: [1550, 2100],
    },
    luxury: {
      below: [2800, 4500],
      above: [2500, 4000],
    }
  };
  
  // Helper functions to calculate total sqft
  const getTotalSqft1BHK = () => {
    const sqftTable = sqftMap1BHK;
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType: 'below' }; // Default sqftType for 1BHK
  };
  
  const getTotalSqft2BHK = () => {
    let sqftType: 'below' | 'above' = selectedSqft?.includes('below') ? 'below' : 'above';
    const sqftTable = sqftMap2BHK[sqftType];
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType };
  };
  
  const getTotalSqft3BHK = () => {
    let sqftType: 'below' | 'above' = selectedSqft?.includes('below') ? 'below' : 'above';
    const sqftTable = sqftMap3BHK[sqftType];
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType };
  };
  
  const getTotalSqft4BHK = () => {
    let sqftType: 'below' | 'above' = selectedSqft?.includes('below') ? 'below' : 'above';
    const sqftTable = sqftMap4BHK[sqftType];
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType };
  };
  
  const getTotalSqft5BHK = () => {
    const sqftTable = sqftMap5BHK;
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType: 'below' }; // Default sqftType doesn't matter for 5BHK
  };
  
  // Handler for calculating design price
  const handleGetDesignPrice = () => {
    if (selectedPackage) {
      let total = 0;
      let sqftType: 'below' | 'above' = 'below';
      
      if (propertyType === '1BHK') {
        const result = getTotalSqft1BHK();
        total = result.total;
        sqftType = 'below';
      }
      else if (propertyType === '2BHK' && selectedSqft) {
        const result = getTotalSqft2BHK();
        total = result.total;
        sqftType = result.sqftType;
      } 
      else if (propertyType === '3BHK' && selectedSqft) {
        const result = getTotalSqft3BHK();
        total = result.total;
        sqftType = result.sqftType;
      }
      else if (propertyType === '4BHK' && selectedSqft) {
        const result = getTotalSqft4BHK();
        total = result.total;
        sqftType = result.sqftType;
      }
      else if (propertyType === '5BHK') {
        const result = getTotalSqft5BHK();
        total = result.total;
        sqftType = 'below'; // For 5BHK, we use the same rates regardless of sqft
      }
      
      if (total > 0) {
        const [minRate, maxRate] = packageRates[selectedPackage][sqftType];
        setPriceRange({
          min: total * minRate,
          max: total * maxRate,
          totalSqft: total,
        });
        setCurrentStep('result');
        // scrollToAfterHero(); // Removed call
      }
    }
  };

  // Render functions for each step
  const renderPropertyTypeStep = () => (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-white mb-12 text-center">
        Select Property Type
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {propertyOptions.map((option) => (
          <div key={option.id} className="space-y-4">
            <button
              onClick={() => handlePropertySelect(option.id)}
              className={`w-full p-6 rounded-xl border transition-all ${
                propertyType === option.id
                  ? 'border-white bg-white/20'
                  : 'border-white/20 bg-white/10 hover:bg-white/15'
              }`}
            >
              <h3 className="text-2xl font-medium text-white">{option.label}</h3>
            </button>
            
            {option.subOptions && propertyType === option.id && (
              <div className="space-y-3 mt-4 px-2">
                {option.subOptions.map((subOption) => (
                  <label
                    key={subOption.id}
                    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedSqft === subOption.id
                        ? 'border-white bg-white/20'
                        : 'border-white/20 bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sqft"
                      value={subOption.id}
                      checked={selectedSqft === subOption.id}
                      onChange={(e) => handlePropertySelect(e.target.value, true)}
                      className="w-4 h-4 text-white border-white/20 bg-transparent focus:ring-white/20 focus:ring-offset-0"
                    />
                    <span className="ml-3 text-white">{subOption.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-12">
        {/* Remove the Back button */}
        {/* <button
          onClick={onBack}
          className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button> */}

        {/* Adjust layout if needed, e.g., move Next button to the left or center */}
        {/* Example: Centering the Next button if Back is removed */}
        <div className="flex justify-end w-full"> {/* Changed from justify-between */}
          {propertyType && (
            <button
              onClick={() => {
                const selectedOption = propertyOptions.find(opt => opt.id === propertyType);
                if (selectedOption && canProceedToNext(selectedOption)) {
                  handleStepChange('rooms');
                }
              }}
              className={`px-8 py-3 rounded-lg transition-all ${
                propertyOptions.find(opt => opt.id === propertyType) &&
                canProceedToNext(propertyOptions.find(opt => opt.id === propertyType)!)
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-white/20 text-white/50 cursor-not-allowed'
              }`}
              // Disable button if conditions aren't met
              disabled={!(propertyOptions.find(opt => opt.id === propertyType) && canProceedToNext(propertyOptions.find(opt => opt.id === propertyType)!))}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
  
  const renderRoomsStep = () => (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-white mb-8 text-center">
        Customize Room Count
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(roomCounts).map(([roomType, count]) => (
          <div key={roomType} className="p-6 rounded-lg border border-white/20 bg-white/10">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium text-white">{roomType}</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleRoomCountChange(roomType, false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
                >
                  -
                </button>
                <span className="text-xl text-white font-medium">{count}</span>
                <button
                  onClick={() => handleRoomCountChange(roomType, true)}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/20 transition-all"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className="mt-12 flex justify-between">
        <button
          onClick={() => handleStepChange('propertyType')}
          className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button>
        <button
          onClick={() => handleStepChange('packages')}
          className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
  
  // Inline ContactForm component
  const ContactForm = ({ onSubmit }: { onSubmit: () => void }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    // We're now using toast from sonner instead of a custom notification

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      try {
        // Use the imported API_BASE_URL
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, subject, message, source: 'interior' }),
        });
        if (!response.ok) throw new Error('Failed to submit');
        setSuccess(true);
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        onSubmit();
      } catch (err) {
        setError('Submission failed. Please try again.');
        toast.error('Failed to send the message. Please try again later.');
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
          <button 
            type="submit" 
            className="bg-white text-black px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-white/90 transition-colors disabled:opacity-70" 
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit to Get Design Price'}
          </button>
          {success && <p className="text-green-400 mt-2">Submitted successfully!</p>}
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </form>
      </div>
    );
  };

  const renderPackagesStep = () => (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-white mb-8 text-center">
        Select Your Package
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => setSelectedPackage('essential')}
          className={`p-6 rounded-lg border transition-all overflow-hidden flex flex-col ${
            selectedPackage === 'essential'
              ? 'border-white bg-white/20'
              : 'border-white/20 bg-white/10 hover:bg-white/15'
          }`}
        >
          <div className="h-48 w-full mb-4 overflow-hidden rounded-md">
            <img 
              src="projects/lr/lr5.png" 
              alt="Essential Package" 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Essential</h3>
          <p className="text-gray-400 text-sm">Basic design package with essential features</p>
        </button>
        <button
          onClick={() => setSelectedPackage('premium')}
          className={`p-6 rounded-lg border transition-all overflow-hidden flex flex-col ${
            selectedPackage === 'premium'
              ? 'border-white bg-white/20'
              : 'border-white/20 bg-white/10 hover:bg-white/15'
          }`}
        >
          <div className="h-48 w-full mb-4 overflow-hidden rounded-md">
            <img 
              src="projects/AA/AA-4.png" 
              alt="Premium Package" 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Premium</h3>
          <p className="text-gray-400 text-sm">Advanced design with premium features</p>
        </button>
        <button
          onClick={() => setSelectedPackage('luxury')}
          className={`p-6 rounded-lg border transition-all overflow-hidden flex flex-col ${
            selectedPackage === 'luxury'
              ? 'border-white bg-white/20'
              : 'border-white/20 bg-white/10 hover:bg-white/15'
          }`}
        >
          <div className="h-48 w-full mb-4 overflow-hidden rounded-md">
            <img 
              src="/projects/CL/CL-1.png" 
              alt="Luxury Package" 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Luxury</h3>
          <p className="text-gray-400 text-sm">Exclusive design with luxury finishes</p>
        </button>
      </div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setCurrentStep('rooms')}
          className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep('contact')}
          className={`px-6 py-3 rounded-lg transition-all ${selectedPackage ? 'bg-white text-black hover:bg-gray-100' : 'bg-white/20 text-white/50 cursor-not-allowed'}`}
          disabled={!selectedPackage}
        >
          Next
        </button>
      </div>
    </div>
  );
  
  const renderContactStep = () => (
    <ContactForm onSubmit={() => {
      handleGetDesignPrice();
      setCurrentStep('result');
    }} />
  );
  
  const renderResultStep = () => (
    <div className="max-w-3xl mx-auto px-4 text-center">
      <div className="bg-black/90 p-6 sm:p-8 rounded-xl border border-white/20 shadow-lg">
        <h2 ref={priceResultRef} className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
          Estimated Design Price
        </h2>
        
        {priceRange ? (
          <>
            {/* Price Range Card */}
            <div className="mb-6 p-4 rounded-lg bg-white/10 border border-white/20">
              <p className="text-base text-gray-300 mb-2">
                Price Range
              </p>
              <p className="text-xl sm:text-2xl font-bold mb-1 tracking-tight text-white">
                {`₹${priceRange.min.toLocaleString()} - ₹${priceRange.max.toLocaleString()}`}
              </p>
            </div>

            {/* Added Disclaimer Card */}
            <div className="mt-6 mb-8 text-left text-sm text-gray-300 space-y-4 bg-black/30 p-4 sm:p-6 rounded-lg border border-white/10">
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
              <h3 className="text-md font-semibold text-white pt-2">💬 Let’s Talk Possibilities</h3>
              <p>
                At Under The Arch, we believe cost is only one dimension of building right. If you're ready to go from estimate to excellence — let’s have a conversation.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <button
                className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-all text-base font-medium"
                onClick={() => handleStepChange('propertyType')}
              >
                Start Over
              </button>
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
          </>
        ) : (
          <p className="text-white">No calculation available.</p>
        )}
      </div>
    </div>
  );

  // Render the current step
  return (
    // <div ref={afterHeroRef}> // Removed ref assignment
    <div>
      {currentStep === 'propertyType' && renderPropertyTypeStep()}
      {currentStep === 'rooms' && renderRoomsStep()}
      {currentStep === 'packages' && renderPackagesStep()}
      {currentStep === 'contact' && renderContactStep()}
      {currentStep === 'result' && renderResultStep()}
    </div>
  );
};

export default InteriorCalculator;


// We're now using toast from sonner for notifications instead of this custom component
