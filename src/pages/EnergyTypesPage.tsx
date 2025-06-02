import React, { useEffect, useState } from 'react';
import EnergyCard from '../components/EnergyCard';
import energyTypesData from '../data/energy-types.json';

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

const EnergyTypesPage: React.FC = () => {
  const [energyTypes, setEnergyTypes] = useState<EnergyType[]>([]);

  useEffect(() => {
    // In a real project, we would make an API call here
    setEnergyTypes(energyTypesData as EnergyType[]);
  }, []);

  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark">Our Energy Types</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our different energy sources and their characteristics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {energyTypes.map((energy) => (
            <EnergyCard key={energy.id} energy={energy} />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">How to choose your energy source?</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Consider your consumption</h3>
              <p className="text-gray-600">
                Analyze your current energy consumption to determine which offer is best suited to your needs.
                A large family will have different needs than someone living alone.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Compare prices</h3>
              <p className="text-gray-600">
                Don't just look at the price per kWh, but also the monthly subscription and any additional fees.
                Our comparison tool helps you estimate your total bill.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Consider environmental impact</h3>
              <p className="text-gray-600">
                Each energy source has a different impact on the environment. CO2 emissions are an important
                indicator for assessing this impact.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <button className="py-2 px-6 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
                Use our comparison tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyTypesPage;
