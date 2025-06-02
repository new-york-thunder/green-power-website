import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DirtyPower</h3>
            <p className="text-sm text-gray-300">
              Your trusted energy provider since 1995. We offer energy solutions tailored to all your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Energy Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/energy-types" className="text-sm text-gray-300 hover:text-white">
                  Natural Gas
                </Link>
              </li>
              <li>
                <Link to="/energy-types" className="text-sm text-gray-300 hover:text-white">
                  Coal
                </Link>
              </li>
              <li>
                <Link to="/energy-types" className="text-sm text-gray-300 hover:text-white">
                  Nuclear
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Offers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/offers" className="text-sm text-gray-300 hover:text-white">
                  Residential Offers
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-sm text-gray-300 hover:text-white">
                  Business Offers
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-sm text-gray-300 hover:text-white">
                  Compare
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm text-gray-300">
              <p>123 Energy Avenue</p>
              <p>London, UK</p>
              <p className="mt-2">Email: contact@dirtypower.com</p>
              <p>Phone: +44 123 456 789</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className="text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} DirtyPower. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
