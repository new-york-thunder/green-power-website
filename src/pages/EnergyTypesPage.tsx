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
    // Dans un vrai projet, nous ferions un appel API ici
    setEnergyTypes(energyTypesData as EnergyType[]);
  }, []);

  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark">Nos Types d'Énergie</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos différentes sources d'énergie et leurs caractéristiques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {energyTypes.map((energy) => (
            <EnergyCard key={energy.id} energy={energy} />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Comment choisir votre source d'énergie ?</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Tenez compte de votre consommation</h3>
              <p className="text-gray-600">
                Analysez votre consommation énergétique actuelle pour déterminer quelle offre est la plus adaptée à vos besoins.
                Une famille nombreuse aura des besoins différents d'une personne vivant seule.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Comparez les prix</h3>
              <p className="text-gray-600">
                Ne regardez pas uniquement le prix du kWh, mais aussi l'abonnement mensuel et les éventuels frais supplémentaires.
                Notre comparateur vous aide à estimer votre facture totale.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Considérez l'impact environnemental</h3>
              <p className="text-gray-600">
                Chaque source d'énergie a un impact différent sur l'environnement. Les émissions de CO2 sont un indicateur
                important pour évaluer cet impact.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <button className="py-2 px-6 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
                Utiliser notre comparateur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyTypesPage;
