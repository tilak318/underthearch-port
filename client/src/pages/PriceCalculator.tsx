import { useState } from "react";

const PriceCalculator = () => {
  // State management - group all state declarations together at the top
  const [currentStep, setCurrentStep] = useState<'initial' | 'propertyType' | 'rooms' | 'packages' | 'result'>('initial');
  const [designType, setDesignType] = useState<'interior' | 'architecture' | null>(null);
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

  const handleDesignTypeSelect = (type: 'interior' | 'architecture') => {
    setDesignType(type);
    setCurrentStep('propertyType');
  };

  const handlePropertySelect = (type: string, isSqft: boolean = false) => {
    if (isSqft) {
      setSelectedSqft(type);
    } else {
      setPropertyType(type);
      setSelectedSqft(null); // Reset sqft when new BHK is selected
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
              <div className="relative">
                <select
                  value={selectedSqft || ''}
                  onChange={(e) => handlePropertySelect(e.target.value, true)}
                  className="w-full p-4 rounded-lg border border-white/20 bg-black text-white appearance-none cursor-pointer focus:outline-none focus:border-white/40"
                >
                  <option value="">Select square footage</option>
                  {option.subOptions.map((subOption) => (
                    <option 
                      key={subOption.id} 
                      value={subOption.id}
                      className="bg-black hover:bg-white/10"
                    >
                      {subOption.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-12">
        <button
          onClick={() => setCurrentStep('initial')}
          className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button>
        {propertyType && (
          <button
            onClick={() => {
              const selectedOption = propertyOptions.find(opt => opt.id === propertyType);
              if (selectedOption && canProceedToNext(selectedOption)) {
                setCurrentStep('rooms');
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
          className={`p-6 rounded-lg border transition-all ${
            selectedPackage === 'essential'
              ? 'border-white bg-white/20'
              : 'border-white/20 bg-white/10 hover:bg-white/15'
          }`}
        >
          <h3 className="text-xl font-medium text-white mb-2">Essential</h3>
          <p className="text-gray-400 text-sm">Basic design package with essential features</p>
        </button>
        <button
          onClick={() => setSelectedPackage('premium')}
          className={`p-6 rounded-lg border transition-all ${
            selectedPackage === 'premium'
              ? 'border-white bg-white/20'
              : 'border-white/20 bg-white/10 hover:bg-white/15'
          }`}
        >
          <h3 className="text-xl font-medium text-white mb-2">Premium</h3>
          <p className="text-gray-400 text-sm">Advanced design with premium features</p>
        </button>
        <button
          onClick={() => setSelectedPackage('luxury')}
          className={`p-6 rounded-lg border transition-all ${
            selectedPackage === 'luxury'
              ? 'border-white bg-white/20'
              : 'border-white/20 bg-white/10 hover:bg-white/15'
          }`}
        >
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
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold text-white mb-6">Estimated Design Price</h2>
      {priceRange ? (
        <>
          <p className="text-lg text-white mb-2">
            Total Sqft: <span className="font-bold">{priceRange.totalSqft}</span>
          </p>
          <p className="text-xl text-green-400 font-bold mb-4">
            {`₹${priceRange.min.toLocaleString()} - ₹${priceRange.max.toLocaleString()}`}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all"
              onClick={() => setCurrentStep('initial')}
            >
              Start Over
            </button>
            <a 
              href="/contact" 
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-all"
            >
              Contact Us For Details
            </a>
          </div>
        </>
      ) : (
        <p className="text-white">No calculation available.</p>
      )}
    </div>
  );

  // Add the missing renderInitialStep function
  const renderInitialStep = () => (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold text-white mb-8 text-center">
        Select Design Type
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button
          onClick={() => handleDesignTypeSelect('interior')}
          className="p-8 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all"
        >
          <h3 className="text-2xl font-medium text-white mb-2">Interior Design</h3>
          <p className="text-gray-400">Complete interior design solutions for your home</p>
        </button>
        <button
          onClick={() => handleDesignTypeSelect('architecture')}
          className="p-8 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all"
        >
          <h3 className="text-2xl font-medium text-white mb-2">Architecture</h3>
          <p className="text-gray-400">Architectural design and planning services</p>
        </button>
      </div>
    </div>
  );
  
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
          onClick={() => setCurrentStep('propertyType')}
          className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep('packages')}
          className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="h-[85vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/daasgedae/image/upload/v1743135528/6_bjwtlo.png"
            alt="Architecture" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-3 sm:px-4 py-1 border border-white/20 text-white 
          text-base md:text-lg rounded-full mb-4 sm:mb-8">
            Design Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8">
            Curious about your dream design price?
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            Get the cost for your full home design in 4 easy steps
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-black">
        {currentStep === 'initial' && renderInitialStep()}
        {currentStep === 'propertyType' && renderPropertyTypeStep()}
        {currentStep === 'rooms' && renderRoomsStep()}
        {currentStep === 'packages' && renderPackagesStep()}
        {currentStep === 'result' && renderResultStep()} {/* Add this line */}
      </section>
    </>
  );
}; 

export default PriceCalculator;