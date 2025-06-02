import React from 'react';

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

interface OfferCardProps {
  offer: Offer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const audienceLabel = offer.targetAudience === 'business' ? 'Business' : 'Residential';
  const isBusinessOffer = offer.targetAudience === 'business';

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border-t-4 ${
      isBusinessOffer ? 'border-t-blue-600' : 'border-t-green-600'
    }`}>
      <div className="p-6">
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            isBusinessOffer ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>
            {audienceLabel}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
        <p className="text-gray-600 mb-6">{offer.description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between font-medium">
            <span>Price per kWh:</span>
            <span className="text-accent">£{offer.pricePerKwh.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Monthly standing charge:</span>
            <span className="text-accent">£{offer.standingCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Minimum contract period:</span>
            <span>{offer.minimumContractPeriod} months</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium mb-2">Features:</h4>
          <ul className="space-y-2">
            {offer.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-center">
          <button className="py-2 px-6 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
