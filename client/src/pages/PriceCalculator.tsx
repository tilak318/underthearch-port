import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 
import InteriorCalculator from "../components/calculators/InteriorCalculator";
import ArchitectureCalculator from "../components/calculators/ArchitectureCalculator";

const PriceCalculator = () => {
  // Add ref for calculator section
  const calculatorSectionRef = useRef<HTMLDivElement>(null);
  
  // Ref for hero image section - REMOVED
  // const heroImageRef = useRef<HTMLImageElement>(null); 
  
  // Ref for section after hero image
  const afterHeroRef = useRef<HTMLDivElement>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // State management - group all state declarations together at the top
  const [currentStep, setCurrentStep] = useState<'initial' | 'propertyType' | 'rooms' | 'packages' | 'result'>('initial');
  // Set the initial state for designType to 'architecture'
  const [designType, setDesignType] = useState<'interior' | 'architecture' | null>('architecture');
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [selectedSqft, setSelectedSqft] = useState<string | null>(null);
  const [roomCounts, setRoomCounts] = useState({
    "LIVING ROOM": 1,
    "KITCHEN": 1,
    "BEDROOM": 1,
    "BATH": 1,
    "DINING": 0,
  });

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
  const scrollToAfterHero = () => {
    setTimeout(() => {
      if (afterHeroRef.current) {
        afterHeroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleStepChange = (nextStep: typeof currentStep) => {
    setCurrentStep(nextStep);
    scrollToAfterHero();
  };

  const handleDesignTypeSelect = (type: 'interior' | 'architecture') => {
    setDesignType(type);
    // Removed scrollToAfterHero() to prevent competing scroll behaviors
  };

  // Add this function to handle going back to the initial step
  const handleBackToInitial = () => {
    setDesignType(null);
    // No need to set currentStep here as the main component structure handles it
    // setCurrentStep('initial'); 
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
          "DINING": 0,
        });
      } else if (type === '2BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 2,
          "BATH": 2,
          "DINING": 0,
        });
      } else if (type === '3BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 3,
          "BATH": 3,
          "DINING": 0,
        });
      } else if (type === '4BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 4,
          "BATH": 4,
          "DINING": 0,
        });
      } else if (type === '5BHK') {
        setRoomCounts({
          "LIVING ROOM": 1,
          "KITCHEN": 1,
          "BEDROOM": 5,
          "BATH": 5,
          "DINING": 0,
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

  // Update the property type step render function
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
       
        <button
          onClick={() => handleStepChange('initial')}
          className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button>
        
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
          >
            Next
          </button>
        )}
      </div>
    </div>
  );

  // Add package selection state
  const [selectedPackage, setSelectedPackage] = useState<'essential' | 'premium' | 'luxury' | null>(null);

  // Add this mapping for 2BHK room sqft
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
  
  // Add this mapping for 3BHK room sqft
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
  
  // Add this mapping for 4BHK room sqft
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
  
  // Add this mapping for 5BHK room sqft
  const sqftMap5BHK = {
    "LIVING ROOM": 600,
    "KITCHEN": 350,
    "BEDROOM": 180,
    "BATH": 100,
    "DINING": 150,
  };
  
  // Update package rates to include 3BHK rates
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
  
  // Add state for calculated result
  const [priceRange, setPriceRange] = useState<{min: number, max: number, totalSqft: number} | null>(null);
  
  // Helper to get total sqft for 2BHK
  const getTotalSqft2BHK = () => {
    let sqftType: 'below' | 'above' = selectedSqft?.includes('below') ? 'below' : 'above';
    const sqftTable = sqftMap2BHK[sqftType];
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType };
  };
  
  // Helper to get total sqft for 3BHK
  const getTotalSqft3BHK = () => {
    let sqftType: 'below' | 'above' = selectedSqft?.includes('below') ? 'below' : 'above';
    const sqftTable = sqftMap3BHK[sqftType];
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType };
  };
  
  // Helper to get total sqft for 4BHK
  const getTotalSqft4BHK = () => {
    let sqftType: 'below' | 'above' = selectedSqft?.includes('below') ? 'below' : 'above';
    const sqftTable = sqftMap4BHK[sqftType];
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType };
  };
  
  // Helper to get total sqft for 5BHK
  const getTotalSqft5BHK = () => {
    const sqftTable = sqftMap5BHK;
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType: 'below' }; // Default sqftType doesn't matter for 5BHK
  };
  
  // Add this mapping for 1BHK room sqft (using below 800 2BHK data)
  const sqftMap1BHK = {
    "LIVING ROOM": 200,
    "KITCHEN": 150,
    "BEDROOM": 100,
    "BATH": 30,
    "DINING": 50,
  };
  
  // Helper to get total sqft for 1BHK
  const getTotalSqft1BHK = () => {
    const sqftTable = sqftMap1BHK;
    let total = 0;
    Object.entries(roomCounts).forEach(([room, qty]) => {
      total += (sqftTable[room as keyof typeof sqftTable] || 0) * qty;
    });
    return { total, sqftType: 'below' }; // Default sqftType for 1BHK
  };
  
  // Update the handler for Get Design Price to include 1BHK
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
        scrollToAfterHero();
      }
    }
  };
  
  // Update renderPackagesStep to use the handler
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
              src="/lr5.png" 
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
              src="/AA-4.png" 
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
              src="/CL-1.png" 
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
          onClick={handleGetDesignPrice}
          className={`px-6 py-3 rounded-lg transition-all ${
            selectedPackage
              ? 'bg-white text-black hover:bg-gray-100'
              : 'bg-white/20 text-white/50 cursor-not-allowed'
          }`}
          disabled={!selectedPackage}
        >
          Get Design Price
        </button>
      </div>
    </div>
  );
  
  // Add a simple result step
  const renderResultStep = () => (
    <div className="max-w-3xl mx-auto px-4 text-center">
      <div className="bg-black/90 p-6 sm:p-8 rounded-xl border border-white/20 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
          Estimated Design Price
        </h2>
        
        {priceRange ? (
          <>
            {/* Removed Total Area block */}
            <div className="mb-6 p-4 rounded-lg bg-white/10 border border-white/20">
              <p className="text-base text-gray-300 mb-2">
                Price Range
              </p>
              <p className="text-xl sm:text-2xl font-bold mb-1 tracking-tight text-white">
                {`₹${priceRange.min.toLocaleString()} - ₹${priceRange.max.toLocaleString()}`}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <button
                className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-all text-base font-medium"
                onClick={() => handleStepChange('initial')}
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

  // Add the missing renderInitialStep function

  
  // Add the missing renderRoomsStep function
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

  return (
    <>
      {/* Hero Section - REMOVED */}
      {/* 
      <section className="min-h-[50vh] sm:h-[85vh] relative flex items-center justify-center overflow-hidden py-12 sm:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImageRef} // Ref removed
            src="/GE-1.png"
            alt="Architecture" 
            className="w-full h-full object-cover object-center sm:object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Wondering how much your dream interior would cost? // Text removed
          </h1>
        </div>
      </section> 
      */}

      {/* Calculator Section */}
      <section
        ref={afterHeroRef}
        // Added top padding to compensate for the removed hero section
        className="pt-24 sm:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-24 bg-black"
      >
        {/* Add the Toggle Switch */}
        {/* Increase max-width for a wider container */}
        <div className="max-w-lg mx-auto px-4 sm:px-6 mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
            Select Design Type
          </h2>
          {/* Increase padding on the container */}
          <div className="relative flex w-full p-1.5 bg-white/10 rounded-lg">
            <button
              onClick={() => handleDesignTypeSelect('architecture')}
              // Increase padding and text size
              className={`relative flex-1 py-3 px-6 rounded-md text-base sm:text-lg font-medium transition-colors duration-300 ease-in-out z-10 ${
                designType === 'architecture' ? 'text-black' : 'text-white hover:bg-white/5'
              }`}
            >
              Architecture
            </button>
            <button
              onClick={() => handleDesignTypeSelect('interior')}
              // Increase padding and text size
              className={`relative flex-1 py-3 px-6 rounded-md text-base sm:text-lg font-medium transition-colors duration-300 ease-in-out z-10 ${
                designType === 'interior' ? 'text-black' : 'text-white hover:bg-white/5'
              }`}
            >
              Interior Design
            </button>
            {/* Sliding background indicator */}
            {designType && (
              <div
                className={`absolute top-1.5 bottom-1.5 w-1/2 h-auto bg-white rounded-md shadow-md transition-transform duration-300 ease-in-out ${
                  designType === 'architecture' ? 'transform translate-x-0' : 'transform translate-x-full'
                }`}
                style={{
                  transform: designType === 'architecture' ? 'translateX(0%)' : 'translateX(100%)',
                  width: '50%',
                  left: 0
                }}
              ></div>
            )}
          </div>
        </div>
        {/* --- End Edit --- */}

        {/* Conditionally render calculators based on the selected design type */}
        {/* Pass a dummy onBack function to satisfy the required prop type */}
        {/* Pass disableAutoScroll to prevent competing scroll behaviors */}
        {designType === 'interior' && <InteriorCalculator onBack={() => {}} disableAutoScroll={true} />}
        {designType === 'architecture' && <ArchitectureCalculator onBack={() => {}} disableAutoScroll={true} />}

      </section>
    </>
  );
};

export default PriceCalculator;