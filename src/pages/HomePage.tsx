import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Our Services Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of energy services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Energy Supply</h3>
              <p className="text-gray-600 text-center mb-6">
                We offer reliable and transparent energy contracts for both residential and business customers.
              </p>
              <div className="text-center">
                <Link to="/offers" className="text-primary font-medium hover:text-secondary">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Energy Consultation</h3>
              <p className="text-gray-600 text-center mb-6">
                Our experts help you optimize your energy consumption and reduce your bills.
              </p>
              <div className="text-center">
                <Link to="/services" className="text-primary font-medium hover:text-secondary">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Customer Support</h3>
              <p className="text-gray-600 text-center mb-6">
                A dedicated customer service team available to answer all your questions and solve your problems.
              </p>
              <div className="text-center">
                <Link to="/contact" className="text-primary font-medium hover:text-secondary">
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Figures Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Key Figures</h2>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
              DirtyPower in numbers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-xl">Years of experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500k+</div>
              <div className="text-xl">Satisfied customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-xl">Satisfaction rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-xl">Customer service</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover testimonials from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Mary Johnson</h4>
                  <p className="text-sm text-gray-600">Residential customer since 2020</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The customer service is really excellent. I always get quick responses to my questions and the rates are very competitive."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-gray-600">SME Director, customer since 2018</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Thanks to personalized energy consultation, we've reduced our electricity bill by 15%. A reliable partner for our business."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sophia Williams</h4>
                  <p className="text-sm text-gray-600">Residential customer since 2019</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The transition to DirtyPower was simple and hassle-free. The prices are transparent and I've never had any surprises on my bill."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to switch energy suppliers?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join DirtyPower today and benefit from competitive rates and quality customer service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/compare" 
              className="bg-white text-secondary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare our offers
            </Link>
            <Link 
              to="/contact" 
              className="bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
