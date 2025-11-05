
import React from 'react';
import SEO from '../SEO';
import { Link } from 'react-router-dom';
import { ngoData } from '../constants';

const NGOsListPage: React.FC = () => {
  return (
    <div className="bg-light-bg py-16">
      <SEO 
        title="NGOs Founded by Dr. Ashutosh Mishra"
        description="Explore the non-profit organizations founded by Dr. Ashutosh Mishra, all dedicated to social change and empowerment in various sectors."
        keywords="NGOs, non-profit organizations, Dr. Ashutosh Mishra, social change, empowerment, social sector"
        pathname="/ngos"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold font-heading text-primary">NGOs Founded by Dr. Mishra</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            A portfolio of non-profit organizations dedicated to social change and empowerment across diverse sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ngoData.map(ngo => (
            <div key={ngo.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col text-center items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-4">{ngo.icon}</div>
              <h2 className="text-xl font-bold font-heading text-secondary">{ngo.name}</h2>
              <p className="text-gray-600 mt-2 flex-grow">{ngo.tagline}</p>
              <Link to={`/ngos/${ngo.id}`} className="mt-6 inline-block bg-primary text-white hover:bg-primary/90 font-semibold py-2 px-6 rounded-full transition duration-300">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NGOsListPage;
