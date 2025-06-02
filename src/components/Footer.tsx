import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ÉnergieVerte</h3>
            <p className="text-sm text-gray-300">
              Votre fournisseur d'énergie de confiance depuis 1995. Nous proposons des solutions énergétiques adaptées à tous vos besoins.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Types d'Énergie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/energy-types" className="text-sm text-gray-300 hover:text-white">
                  Gaz Naturel
                </Link>
              </li>
              <li>
                <Link to="/energy-types" className="text-sm text-gray-300 hover:text-white">
                  Charbon
                </Link>
              </li>
              <li>
                <Link to="/energy-types" className="text-sm text-gray-300 hover:text-white">
                  Nucléaire
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Offres</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/offers" className="text-sm text-gray-300 hover:text-white">
                  Offres Particuliers
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-sm text-gray-300 hover:text-white">
                  Offres Entreprises
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-sm text-gray-300 hover:text-white">
                  Comparateur
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>123 Avenue de l'Énergie</p>
              <p>75000 Paris, France</p>
              <p className="mt-2">Email: contact@energieverte.fr</p>
              <p>Tél: 01 23 45 67 89</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className="text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} ÉnergieVerte. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
