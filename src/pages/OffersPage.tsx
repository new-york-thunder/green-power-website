import React, { useEffect, useState } from 'react';
import OfferCard from '../components/OfferCard';
import offersData from '../data/offers.json';

interface Offer {
  id: number;
  name: string;
  description: string;
  targetAudience: 'business' | 'residential';
  pricePerKwh: number;
  standingCharge: number;
  minimumContractPeriod: number;
  features: string[];
}

const OffersPage: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [filter, setFilter] = useState<'all' | 'business' | 'residential'>('all');

  useEffect(() => {
    // In a real project, we would make an API call here
    setOffers(offersData as Offer[]);
  }, []);

  const filteredOffers = filter === 'all' 
    ? offers 
    : offers.filter(offer => offer.targetAudience === filter);

  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark">Our Energy Offers</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our offers tailored for residential and business customers
          </p>
        </div>
        
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300`}
            >
              All offers
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 text-sm font-medium ${
                filter === 'residential'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-gray-300`}
            >
              Residential
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                filter === 'business'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300`}
            >
              Business
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Why choose DirtyPower?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Transparent pricing</h3>
                  <p className="text-gray-600 text-sm">
                    No hidden fees, you pay exactly what is advertised.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quality customer service</h3>
                  <p className="text-gray-600 text-sm">
                    A dedicated team available to answer all your questions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Guaranteed reliability</h3>
                  <p className="text-gray-600 text-sm">
                    Continuous and stable energy supply.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Flexible commitment</h3>
                  <p className="text-gray-600 text-sm">
                    Contracts tailored to your needs with variable commitment periods.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Clear billing</h3>
                  <p className="text-gray-600 text-sm">
                    Detailed and understandable bills, available online.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Simplified procedures</h3>
                  <p className="text-gray-600 text-sm">
                    Quick subscription without excessive paperwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="py-2 px-6 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
