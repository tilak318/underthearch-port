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
          onClick={() => setCurrentStep('result')}
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

  // Update the rooms step to show "Next" instead of "Get Design Price"
  const renderRoomsStep = () => (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-white mb-8 text-center">
        Customize Room Count
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(roomCounts).map(([roomType, count]) => (
          <div
            key={roomType}
            className="border border-white/20 bg-white/10 rounded-lg p-6 flex items-center justify-between"
          >
            <span className="text-white text-lg">{roomType}</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleRoomCountChange(roomType, false)}
                className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center border border-white/20 hover:bg-black/70"
                disabled={count <= 0}
              >
                -
              </button>
              <span className="text-white w-8 text-center">{count}</span>
              <button
                onClick={() => handleRoomCountChange(roomType, true)}
                className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center border border-white/20 hover:bg-black/70"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setCurrentStep('propertyType')}
          className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep('packages')}
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Add this function after state declarations and before other render functions
  const renderInitialStep = () => (
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-white mb-8">Select Design Type</h2>
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={() => handleDesignTypeSelect('interior')}
            className="p-6 rounded-lg border border-white/20 bg-white/10 hover:bg-white/15 transition-all"
          >
            <h3 className="text-xl font-medium text-white mb-2">Interior Design</h3>
            <p className="text-gray-400 text-sm">Complete interior design solutions</p>
          </button>

          <button
            onClick={() => handleDesignTypeSelect('architecture')}
            className="p-6 rounded-lg border border-white/20 bg-white/10 hover:bg-white/15 transition-all"
          >
            <h3 className="text-xl font-medium text-white mb-2">Architecture</h3>
            <p className="text-gray-400 text-sm">Comprehensive architectural services</p>
          </button>
        </div>
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
      </section>
    </>
  );
}; 

export default PriceCalculator;