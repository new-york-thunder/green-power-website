import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fournisseur d'énergie de confiance pour les particuliers et les entreprises
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Nous proposons des solutions énergétiques fiables, avec des tarifs transparents
              et un service client exceptionnel depuis plus de 25 ans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/energy-types" 
                className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Découvrir nos énergies
              </Link>
              <Link 
                to="/offers" 
                className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
              >
                Voir nos offres
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg shadow-lg flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Calculez vos économies</h3>
                  <p className="text-gray-600 mb-6">Estimez combien vous pourriez économiser en choisissant nos offres d'énergie</p>
                  <Link 
                    to="/compare" 
                    className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    Comparer les offres
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
