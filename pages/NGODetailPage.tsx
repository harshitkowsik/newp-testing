
import React from 'react';
import SEO from '../SEO';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ngoData } from '../constants';

const NGODetailPage: React.FC = () => {
  const { ngoId } = useParams<{ ngoId: string }>();
  const location = useLocation();
  const ngo = ngoData.find(n => n.id === ngoId);

  if (!ngo) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">NGO Not Found</h1>
        <p className="text-xl mt-4">The page you are looking for does not exist.</p>
        <Link to="/ngos" className="mt-6 inline-block bg-primary text-white hover:bg-primary/90 font-bold py-3 px-8 rounded-full">
            Back to NGOs List
        </Link>
      </div>
    );
  }

  const NGOComponent = ngo.component;

  return (
    <div className="bg-white py-16">
      <SEO 
        title={`${ngo.name} - NGO Founded by Dr. Ashutosh Mishra`}
        description={ngo.tagline}
        keywords={`${ngo.name}, NGO, Dr. Ashutosh Mishra, ${ngo.tagline}`}
        pathname={location.pathname}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
            <Link to="/ngos" className="text-primary hover:text-accent-teal font-semibold transition-colors duration-300">&larr; Back to all NGOs</Link>
        </div>
        <NGOComponent />
      </div>
    </div>
  );
};
export default NGODetailPage;
