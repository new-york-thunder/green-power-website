import React, { useEffect, useState } from 'react';
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

const ComparePage: React.FC = () => {
  const [energyTypes, setEnergyTypes] = useState<EnergyType[]>([]);
  const [consumption, setConsumption] = useState(3500); // kWh par an, valeur par défaut
  const [selectedEnergyIds, setSelectedEnergyIds] = useState<number[]>([]);

  useEffect(() => {
    // Dans un vrai projet, nous ferions un appel API ici
    setEnergyTypes(energyTypesData as EnergyType[]);
    
    // Sélectionner les deux premières énergies par défaut
    if (energyTypesData.length >= 2) {
      setSelectedEnergyIds([energyTypesData[0].id, energyTypesData[1].id]);
    }
  }, []);

  const handleEnergyToggle = (energyId: number) => {
    setSelectedEnergyIds(prev => {
      if (prev.includes(energyId)) {
        // Si déjà sélectionné, on le retire
        return prev.filter(id => id !== energyId);
      } else {
        // Si pas encore sélectionné et moins de 3 sélections, on l'ajoute
        if (prev.length < 3) {
          return [...prev, energyId];
        }
        return prev;
      }
    });
  };

  // Calculer le coût annuel pour chaque type d'énergie sélectionné
  const calculateAnnualCost = (energy: EnergyType) => {
    return (consumption * energy.pricePerKwh) + (energy.pricePerMonth * 12);
  };

  // Calculer les émissions CO2 annuelles
  const calculateAnnualCO2 = (energy: EnergyType) => {
    return (consumption * energy.co2PerKwh) / 1000; // conversion en kg
  };

  // Filtrer les énergies sélectionnées pour comparaison
  const selectedEnergies = energyTypes.filter(energy => 
    selectedEnergyIds.includes(energy.id)
  );

  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark">Comparateur d'Énergies</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Comparez les différentes options énergétiques selon vos besoins
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Paramètres de comparaison</h2>
          
          <div className="mb-8">
            <label htmlFor="consumption" className="block text-gray-700 font-medium mb-2">
              Consommation annuelle estimée (kWh/an)
            </label>
            <input
              type="range"
              id="consumption"
              min="1000"
              max="10000"
              step="100"
              value={consumption}
              onChange={(e) => setConsumption(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>1 000 kWh</span>
              <span className="font-medium">{consumption} kWh</span>
              <span>10 000 kWh</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Sélectionnez les énergies à comparer (max. 3)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {energyTypes.map(energy => (
                <div key={energy.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`energy-${energy.id}`}
                    checked={selectedEnergyIds.includes(energy.id)}
                    onChange={() => handleEnergyToggle(energy.id)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor={`energy-${energy.id}`} className="ml-2 block text-sm text-gray-700">
                    {energy.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {selectedEnergies.length > 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-semibold mb-6">Résultats de la comparaison</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Critères
                    </th>
                    {selectedEnergies.map(energy => (
                      <th key={energy.id} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {energy.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Prix par kWh
                    </td>
                    {selectedEnergies.map(energy => (
                      <td key={energy.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {energy.pricePerKwh.toFixed(2)}€
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Abonnement mensuel
                    </td>
                    {selectedEnergies.map(energy => (
                      <td key={energy.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {energy.pricePerMonth.toFixed(2)}€
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Coût annuel estimé
                    </td>
                    {selectedEnergies.map(energy => (
                      <td key={energy.id} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent">
                        {calculateAnnualCost(energy).toFixed(2)}€
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Émissions CO2 annuelles
                    </td>
                    {selectedEnergies.map(energy => (
                      <td key={energy.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {calculateAnnualCO2(energy).toFixed(2)} kg
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Type d'énergie
                    </td>
                    {selectedEnergies.map(energy => (
                      <td key={energy.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {energy.type === 'fossil' ? 'Fossile' : 'Nucléaire'}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Avantages et inconvénients</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedEnergies.map(energy => (
                  <div key={energy.id} className="border border-gray-200 rounded-md p-4">
                    <h4 className="font-semibold mb-3">{energy.name}</h4>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-green-600 mb-2">Avantages</h5>
                      <ul className="list-disc list-inside space-y-1">
                        {energy.advantages.map((advantage, index) => (
                          <li key={index} className="text-sm text-gray-600">{advantage}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-red-600 mb-2">Inconvénients</h5>
                      <ul className="list-disc list-inside space-y-1">
                        {energy.disadvantages.map((disadvantage, index) => (
                          <li key={index} className="text-sm text-gray-600">{disadvantage}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Veuillez sélectionner au moins une énergie pour afficher la comparaison.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez besoin d'aide pour choisir la meilleure option énergétique pour vos besoins ?
          </p>
          <button className="py-2 px-6 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
            Contactez nos conseillers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
