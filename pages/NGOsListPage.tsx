import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ngoData } from '../constants';

const NGOsListPage: React.FC = () => {
  useEffect(() => {
      document.title = "NGOs | Dr. Ashutosh Mishra - Supreme Court Advocate | Professor of Management & Law | Author | NLP Master Practitioner | Psychologist | PhD Guide | PMP | IIM Ahmedabad Alumnus";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', " Dr. Ashutosh Mishra is a distinguished Supreme Court Advocate, Corporate Legal Strategist, and Professor of Management & Law with over two decades of leadership excellence in legal, academic, and corporate domains. An IIM Ahmedabad alumnus, he brings together the rare blend of legal acumen, managerial insight, and psychological depth that defines next-generation leadershipp. As a PhD Guide and academic mentor, Dr.Mishra has guided research scholars across India and Europe in Corporate Law, Organizational Behavior, and Strategic Management.He is also a Certified Project Management Professional(PMP) and an NLP Master Practitioner, applying behavioral science and neuro - linguistic techniques to leadership, negotiation, and conflict resolution. Beyond the courtroom, Dr.Mishra is an Author, Psychologist, and Motivational Speaker known for his transformative sessions on Human Resource Development, Corporate Ethics, and Emotional Intelligence in Leadership.As the President of Atal Foundation, and Director of JBLC INDIA, one of the top 10 law firms in India, he has led numerous national initiatives in education, entrepreneurship, and social reform. His work unites law, psychology, and management science—empowering individuals and institutions to lead with integrity, innovation, and purpose. ");
      }
    }, []);

  return (
    <div className="bg-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="page-heading-ngos">
          <h1 id="page-heading-ngos" className="text-4xl font-extrabold font-heading text-primary">NGOs Founded by Dr. Mishra</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            A portfolio of non-profit organizations dedicated to social change and empowerment across diverse sectors.
          </p>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" aria-labelledby="page-heading-ngos">
          {ngoData.map(ngo => (
            <article key={ngo.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col text-center items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300" aria-labelledby={`ngo-name-${ngo.id}`}>
              <div className="text-5xl mb-4" aria-hidden="true">{ngo.icon}</div>
              <h2 id={`ngo-name-${ngo.id}`} className="text-xl font-bold font-heading text-secondary">{ngo.name}</h2>
              <p className="text-gray-600 mt-2 flex-grow">{ngo.tagline}</p>
              <Link to={`/ngos/${ngo.id}`} className="mt-6 inline-block bg-primary text-white hover:bg-primary/90 font-semibold py-2 px-6 rounded-full transition duration-300">
                Read More
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default NGOsListPage;