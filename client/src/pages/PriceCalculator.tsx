import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Plus, Minus } from "lucide-react";

const PriceCalculator = () => {
  // State for tracking current step
  const [currentStep, setCurrentStep] = useState(1);
  const [bhkType, setBhkType] = useState<string | null>(null);
  const [selectedRooms, setSelectedRooms] = useState<{ [key: string]: number }>({
    "Living Room": 1,
    "Kitchen": 1,
    "Bedroom": 1,
    "Bathroom": 1,
    "Dining": 0,
    "Study": 0,
    "Balcony": 0,
    "Pooja Room": 0
  });
  const [packageType, setPackageType] = useState<string | null>(null);
  const [totalEstimate, setTotalEstimate] = useState<number>(0);

  // BHK options
  const bhkOptions = [
    { value: "1BHK", label: "1 BHK", sqft: 600 },
    { value: "2BHK", label: "2 BHK", sqft: 1000 },
    { value: "3BHK", label: "3 BHK", sqft: 1500 },
    { value: "4BHK", label: "4 BHK", sqft: 2200 },
    { value: "5BHK", label: "5 BHK", sqft: 3000 },
    { value: "6BHK", label: "6 BHK", sqft: 4000 },
    { value: "7BHK", label: "7 BHK", sqft: 5200 }
  ];

  // Room types
  const roomTypes = [
    "Living Room", "Kitchen", "Bedroom", "Bathroom", 
    "Dining", "Study", "Balcony", "Pooja Room"
  ];

  // Package options
  const packageOptions = [
    {
      id: "essentials",
      name: "Essentials",
      description: "A range of essential architectural design solutions that's perfect for all your needs",
      features: ["Affordable pricing", "Functional designs", "Basic materials"],
      pricePerSqFt: 80,
      image: "https://res.cloudinary.com/daasgedae/image/upload/v1743577029/5-resized_yh9bga.png"
    },
    {
      id: "premium",
      name: "Premium",
      description: "Enhanced architectural designs with premium materials and additional features",
      features: ["Premium materials", "Customized designs", "3D visualizations"],
      pricePerSqFt: 120,
      image: "https://res.cloudinary.com/daasgedae/image/upload/v1743577038/6-resized_gqqqgm.png"
    },
    {
      id: "luxe",
      name: "Luxe",
      description: "Luxury architectural designs with high-end materials and exclusive features",
      features: ["High-end materials", "Signature designs", "Complete 3D walkthrough"],
      pricePerSqFt: 180,
      image: "https://res.cloudinary.com/daasgedae/image/upload/v1743577040/14-resized_yim50b.png"
    }
  ];

  // Calculate total rooms
  const totalRooms = Object.values(selectedRooms).reduce((sum, count) => sum + count, 0);

  // Calculate price based on selections
  useEffect(() => {
    if (!bhkType || !packageType) {
      setTotalEstimate(0);
      return;
    }

    const selectedBhk = bhkOptions.find(option => option.value === bhkType);
    const selectedPackage = packageOptions.find(pkg => pkg.id === packageType);
    
    if (!selectedBhk || !selectedPackage) {
      setTotalEstimate(0);
      return;
    }

    // Base price calculation
    let basePrice = selectedBhk.sqft * selectedPackage.pricePerSqFt;
    
    // Adjust price based on number of rooms (more rooms = slightly higher price)
    const roomAdjustment = (totalRooms / 5) * 0.1; // 10% increase for every 5 rooms
    
    const finalPrice = basePrice * (1 + roomAdjustment);
    setTotalEstimate(Math.round(finalPrice));
  }, [bhkType, packageType, totalRooms]);

  // Handle room count changes
  const handleRoomCountChange = (roomType: string, increment: boolean) => {
    setSelectedRooms(prev => {
      const currentCount = prev[roomType] || 0;
      const newCount = increment ? currentCount + 1 : Math.max(0, currentCount - 1);
      return { ...prev, [roomType]: newCount };
    });
  };

  // Next step handler
  const handleNextStep = () => {
    if (
      (currentStep === 1 && bhkType) ||
      (currentStep === 2) ||
      (currentStep === 3 && packageType)
    ) {
      setCurrentStep(prev => prev + 1);
    }
  };

  // Previous step handler
  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

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
      <section className="py-12 sm:py-16 md:py-24 bg-black px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center relative">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center relative z-10">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep >= step 
                        ? 'bg-white text-black' 
                        : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {step}
                  </div>
                  <span 
                    className={`text-xs mt-2 ${
                      currentStep >= step ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    {step === 1 && "BHK TYPE"}
                    {step === 2 && "ROOMS TO DESIGN"}
                    {step === 3 && "PACKAGE"}
                    {step === 4 && "GET QUOTE"}
                  </span>
                </div>
              ))}
              
              {/* Connecting lines */}
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-white/10">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${(currentStep - 1) * 33.33}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Content Box */}
          <div className="bg-secondary/20 rounded-xl p-6 sm:p-8 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {/* Step 1: BHK Selection */}
            {currentStep === 1 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Select your BHK type
                </h2>
                <p className="text-gray-400 mb-8">
                  Choose the size of your property to get an accurate estimate
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {bhkOptions.map((option) => (
                    <div 
                      key={option.value}
                      onClick={() => setBhkType(option.value)}
                      className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${
                        bhkType === option.value 
                          ? 'border-white bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                          : 'border-white/20 bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <span className={`text-lg font-medium ${bhkType === option.value ? 'text-white' : 'text-gray-300'}`}>
                        {option.label}
                      </span>
                      <span className="text-sm text-gray-400 mt-1">
                        ~{option.sqft} sq.ft.
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 2: Room Selection */}
            {currentStep === 2 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Select the rooms you'd like us to design
                </h2>
                <p className="text-gray-400 mb-8">
                  Customize your design package by selecting the rooms you need
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {roomTypes.map((roomType) => (
                    <div key={roomType} className="border border-white/20 bg-white/10 rounded-lg p-4 flex items-center justify-between">
                      <span className="text-white">{roomType}</span>
                      
                      <div className="flex items-center">
                        <button
                          onClick={() => handleRoomCountChange(roomType, false)}
                          className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center border border-white/20 hover:bg-black/70"
                          disabled={selectedRooms[roomType] <= 0}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        
                        <span className="mx-4 text-white w-4 text-center">
                          {selectedRooms[roomType] || 0}
                        </span>
                        
                        <button
                          onClick={() => handleRoomCountChange(roomType, true)}
                          className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center border border-white/20 hover:bg-black/70"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-gray-400 text-sm">
                  Total rooms selected: <span className="text-white font-medium">{totalRooms}</span>
                </div>
              </div>
            )}
            
            {/* Step 3: Package Selection */}
            {currentStep === 3 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-8">
                  Pick your package
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packageOptions.map((pkg) => (
                    <div 
                      key={pkg.id}
                      onClick={() => setPackageType(pkg.id)}
                      className={`border rounded-lg p-4 cursor-pointer transition-all h-full flex flex-col ${
                        packageType === pkg.id 
                          ? 'border-white bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                          : 'border-white/20 bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <h3 className={`font-medium text-xl mb-2 ${packageType === pkg.id ? 'text-white' : 'text-gray-300'}`}>
                        {pkg.name}
                      </h3>
                      
                      <div className="mb-4 flex-grow">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name} 
                          className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-400 text-sm">{pkg.description}</p>
                      </div>
                      
                      <div className="space-y-2 mt-auto">
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            <svg className="w-4 h-4 text-white/70 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/10 text-right">
                        <span className="text-white font-medium">₹{pkg.pricePerSqFt}/sq.ft.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 4: Quote Summary */}
            {currentStep === 4 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-8">
                  Your Design Estimate
                </h2>
                
                <div className="bg-black/50 rounded-lg p-6 mb-8 border border-white/10">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <span className="text-gray-400">Property Type:</span>
                    <span className="font-medium text-white">
                      {bhkType && bhkOptions.find(option => option.value === bhkType)?.label}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <span className="text-gray-400">Rooms to Design:</span>
                    <span className="font-medium text-white">{totalRooms} rooms</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <span className="text-gray-400">Package:</span>
                    <span className="font-medium text-white">
                      {packageType && packageOptions.find(pkg => pkg.id === packageType)?.name}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <span className="text-gray-400">Approximate Area:</span>
                    <span className="font-medium text-white">
                      {bhkType && bhkOptions.find(option => option.value === bhkType)?.sqft} sq.ft.
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-medium text-white">Estimated Cost:</span>
                    <span className="font-bold text-2xl text-white">₹{totalEstimate.toLocaleString()}</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4 text-left">
                    *This is an approximate estimate. Final pricing may vary based on specific requirements, 
                    site conditions, and detailed scope of work.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-black py-3 px-8 rounded-md font-medium hover:bg-gray-100 transition-colors"
                  >
                    Contact for Detailed Quote
                  </Link>
                  
                  <button 
                    onClick={() => setCurrentStep(1)}
                    className="border border-white/20 text-white py-3 px-8 rounded-md font-medium hover:bg-white/10 transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevStep}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  BACK
                </button>
              )}
              
              {currentStep < 4 && (
                <button
                  onClick={handleNextStep}
                  className={`ml-auto flex items-center px-8 py-2 rounded-md ${
                    (currentStep === 1 && !bhkType) || (currentStep === 3 && !packageType)
                      ? 'bg-white/20 text-gray-500 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-100'
                  } transition-colors`}
                  disabled={(currentStep === 1 && !bhkType) || (currentStep === 3 && !packageType)}
                >
                  NEXT
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              )}
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-medium text-white mb-2">What's Included</h3>
              <p className="text-gray-300 text-sm">
                Our pricing includes architectural design, 3D visualization, material specifications, and construction drawings.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-medium text-white mb-2">Timeline</h3>
              <p className="text-gray-300 text-sm">
                Project timelines vary based on complexity. Typically, designs are delivered within 4-12 weeks from approval.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-lg font-medium text-white mb-2">Custom Projects</h3>
              <p className="text-gray-300 text-sm">
                For custom requirements or commercial projects, please contact us directly for a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceCalculator;