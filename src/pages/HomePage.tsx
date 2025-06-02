import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Section Nos Services */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Nos Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services énergétiques adaptés à vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Fourniture d'Énergie</h3>
              <p className="text-gray-600 text-center mb-6">
                Nous proposons des contrats d'énergie fiables et transparents pour les particuliers et les entreprises.
              </p>
              <div className="text-center">
                <Link to="/offers" className="text-primary font-medium hover:text-secondary">
                  En savoir plus →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Conseil Énergétique</h3>
              <p className="text-gray-600 text-center mb-6">
                Nos experts vous aident à optimiser votre consommation d'énergie et à réduire vos factures.
              </p>
              <div className="text-center">
                <Link to="/services" className="text-primary font-medium hover:text-secondary">
                  En savoir plus →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Support Client</h3>
              <p className="text-gray-600 text-center mb-6">
                Un service client dédié disponible pour répondre à toutes vos questions et résoudre vos problèmes.
              </p>
              <div className="text-center">
                <Link to="/contact" className="text-primary font-medium hover:text-secondary">
                  Contactez-nous →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Chiffres Clés */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Nos Chiffres Clés</h2>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
              ÉnergieVerte en quelques chiffres
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-xl">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500k+</div>
              <div className="text-xl">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-xl">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-xl">Service client</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Témoignages */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Ce que disent nos clients</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Marie Dupont</h4>
                  <p className="text-sm text-gray-600">Cliente particulier depuis 2020</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Le service client est vraiment excellent. J'ai toujours des réponses rapides à mes questions et les tarifs sont très compétitifs."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Jean Martin</h4>
                  <p className="text-sm text-gray-600">Directeur PME, client depuis 2018</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Grâce aux conseils énergétiques personnalisés, nous avons réduit notre facture d'électricité de 15%. Un partenaire fiable pour notre entreprise."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sophie Bernard</h4>
                  <p className="text-sm text-gray-600">Cliente particulier depuis 2019</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La transition vers ÉnergieVerte a été simple et sans tracas. Les prix sont transparents et je n'ai jamais eu de surprise sur ma facture."
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
          <h2 className="text-3xl font-bold mb-4">Prêt à changer de fournisseur d'énergie ?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Rejoignez ÉnergieVerte dès aujourd'hui et bénéficiez de tarifs avantageux et d'un service client de qualité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/compare" 
              className="bg-white text-secondary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Comparer nos offres
            </Link>
            <Link 
              to="/contact" 
              className="bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
