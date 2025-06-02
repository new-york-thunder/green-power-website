import React from 'react';

interface EnergyType {
  id: number;
  name: string;
  description: string;
  pricePerKwh: number;
  pricePerMonth: number;
  type: string;
  advantages: string[];
  disadvantages: string[];
  imageUrl: string;
  co2PerKwh: number;
}

interface EnergyCardProps {
  energy: EnergyType;
}

const EnergyCard: React.FC<EnergyCardProps> = ({ energy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 relative">
        {/* In a real project, we would have images, but for now we're using a colored div */}
        <div
          className={`w-full h-full flex items-center justify-center ${
            energy.type === 'fossil' ? 'bg-amber-700' : 'bg-blue-600'
          }`}
        >
          <h3 className="text-white text-xl font-bold">{energy.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{energy.name}</h3>
        <p className="text-gray-600 mb-4">{energy.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-medium">Price per kWh:</span>
            <span className="text-accent font-bold">£{energy.pricePerKwh.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Monthly subscription:</span>
            <span className="text-accent font-bold">£{energy.pricePerMonth.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">CO2 emissions:</span>
            <span className="font-bold">{energy.co2PerKwh} g/kWh</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
          <ul className="list-disc list-inside space-y-1">
            {energy.advantages.map((advantage, index) => (
              <li key={index} className="text-sm">{advantage}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-red-600 mb-2">Disadvantages</h4>
          <ul className="list-disc list-inside space-y-1">
            {energy.disadvantages.map((disadvantage, index) => (
              <li key={index} className="text-sm">{disadvantage}</li>
            ))}
          </ul>
        </div>
        
        <button className="mt-6 w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default EnergyCard;
