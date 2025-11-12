import React, { useEffect } from 'react';
import { startups } from '../constants';

const StartupsPage: React.FC = () => {
  useEffect(() => {
      document.title = "Startup Ventures | Dr. Ashutosh Mishra - Supreme Court Advocate | Professor of Management & Law | Author | NLP Master Practitioner | Psychologist | PhD Guide | PMP | IIM Ahmedabad Alumnus";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', " Dr. Ashutosh Mishra is a distinguished Supreme Court Advocate, Corporate Legal Strategist, and Professor of Management & Law with over two decades of leadership excellence in legal, academic, and corporate domains. An IIM Ahmedabad alumnus, he brings together the rare blend of legal acumen, managerial insight, and psychological depth that defines next-generation leadershipp. As a PhD Guide and academic mentor, Dr.Mishra has guided research scholars across India and Europe in Corporate Law, Organizational Behavior, and Strategic Management.He is also a Certified Project Management Professional(PMP) and an NLP Master Practitioner, applying behavioral science and neuro - linguistic techniques to leadership, negotiation, and conflict resolution. Beyond the courtroom, Dr.Mishra is an Author, Psychologist, and Motivational Speaker known for his transformative sessions on Human Resource Development, Corporate Ethics, and Emotional Intelligence in Leadership.As the President of Atal Foundation, and Director of JBLC INDIA, one of the top 10 law firms in India, he has led numerous national initiatives in education, entrepreneurship, and social reform. His work unites law, psychology, and management science—empowering individuals and institutions to lead with integrity, innovation, and purpose. ");
      }
    }, []);

  return (
    <div className="bg-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="page-heading-startups">
          <h1 id="page-heading-startups" className="text-4xl font-extrabold font-heading text-primary">Startup Ventures</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            As a professional serial entrepreneur, Dr. Ashutosh Mishra has founded and launched several successful startups which are iconic in their sector and contributing to developing society and creating tremendous opportunities for youth.
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-500">
            In his professional journey of two decades, Dr. Mishra has founded 25+ startups. Some of these ventures are listed below.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" aria-labelledby="page-heading-startups">
          {startups.map((startup) => (
            <article key={startup.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300" aria-labelledby={`startup-name-${startup.id}`}>
              <div className="h-48 w-full bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src={startup.image} 
                  alt={`Logo of ${startup.name}`} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 id={`startup-name-${startup.id}`} className="text-lg font-bold font-heading text-secondary">{startup.name}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{startup.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default StartupsPage;