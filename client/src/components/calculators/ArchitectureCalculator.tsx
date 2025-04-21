import { useRef } from "react";

type ArchitectureCalculatorProps = {
  onBack: () => void;
};

const ArchitectureCalculator = ({ onBack }: ArchitectureCalculatorProps) => {
  const afterHeroRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={afterHeroRef} className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold text-white mb-8 text-center">
        Architecture Design Calculator
      </h2>
      <div className="p-8 rounded-xl border border-white/20 bg-white/10">
        <p className="text-white text-lg mb-6">
          Our architecture design calculator is coming soon!
        </p>
        <p className="text-gray-400 mb-8">
          We're working on bringing you detailed pricing for architectural design services.
          Please check back later or contact us directly for a custom quote.
        </p>
        <button
          onClick={onBack}
          className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ArchitectureCalculator;