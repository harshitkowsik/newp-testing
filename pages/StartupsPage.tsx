import React from 'react';
import SEO from '../SEO';
import { startups } from '../constants';

const StartupsPage: React.FC = () => {
  return (
    <div className="bg-light-bg py-16">
      <SEO 
        title="Startup Ventures - Dr. Ashutosh Mishra"
        description="Explore the successful startup ventures founded and launched by Dr. Ashutosh Mishra, a professional serial entrepreneur contributing to societal development."
        keywords="Dr. Ashutosh Mishra startups, serial entrepreneur, startup ventures, societal development, youth opportunities"
        pathname="/startups"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold font-heading text-primary">Startup Ventures</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            As a professional serial entrepreneur, Dr. Ashutosh Mishra has founded and launched several successful startups which are iconic in their sector and contributing to developing society and creating tremendous opportunities for youth.
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-500">
            In his professional journey of two decades, Dr. Mishra has founded 25+ startups. Some of these ventures are listed below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {startups.map((startup) => (
            <div key={startup.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 w-full bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src={startup.image} 
                  alt={`Logo of ${startup.name}`} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold font-heading text-secondary">{startup.name}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{startup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupsPage;