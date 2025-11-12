import React, { useEffect } from 'react';
import { services } from '../constants';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
 useEffect(() => {
     document.title = "Services | Dr. Ashutosh Mishra - Supreme Court Advocate | Professor of Management & Law | Author | NLP Master Practitioner | Psychologist | PhD Guide | PMP | IIM Ahmedabad Alumnus";
     const metaDescription = document.querySelector('meta[name="description"]');
     if (metaDescription) {
       metaDescription.setAttribute('content', " Dr. Ashutosh Mishra is a distinguished Supreme Court Advocate, Corporate Legal Strategist, and Professor of Management & Law with over two decades of leadership excellence in legal, academic, and corporate domains. An IIM Ahmedabad alumnus, he brings together the rare blend of legal acumen, managerial insight, and psychological depth that defines next-generation leadershipp. As a PhD Guide and academic mentor, Dr.Mishra has guided research scholars across India and Europe in Corporate Law, Organizational Behavior, and Strategic Management.He is also a Certified Project Management Professional(PMP) and an NLP Master Practitioner, applying behavioral science and neuro - linguistic techniques to leadership, negotiation, and conflict resolution. Beyond the courtroom, Dr.Mishra is an Author, Psychologist, and Motivational Speaker known for his transformative sessions on Human Resource Development, Corporate Ethics, and Emotional Intelligence in Leadership.As the President of Atal Foundation, and Director of JBLC INDIA, one of the top 10 law firms in India, he has led numerous national initiatives in education, entrepreneurship, and social reform. His work unites law, psychology, and management science—empowering individuals and institutions to lead with integrity, innovation, and purpose. ");
     }
   }, []);

  const serviceDetails = [
      {
        title: "Training & Development",
        description: "Empower teams with knowledge through customized corporate training programs.",
        focusAreas: ["Leadership Development", "Communication Skills", "Time Management", "Organizational Excellence", "Strategic Management", "Change Management"]
      },
      {
        title: "Project Management",
        description: "Professional project management consulting for end-to-end success.",
        focusAreas: ["Project Planning and Execution", "Risk Management", "Team Coordination", "Quality Assurance", "Project Delivery Excellence"]
      },
      {
        title: "Legal Operations & Consulting",
        description: "Expert legal advisory and operations to navigate complex legal landscapes.",
        focusAreas: ["Legal Strategy Development", "Operations Management", "Policy Advisory", "Risk Assessment & Management", "Compliance & Governance"]
      },
      {
        title: "Educational Innovation",
        description: "Transforming educational systems for the future.",
        focusAreas: ["Curriculum Development", "Educational Strategy", "Institution Building", "Digital Learning Integration", "Educational Policy Advisory"]
      },
      {
        title: "Business Development & Strategy",
        description: "Growth acceleration for organizations through innovative strategies.",
        focusAreas: ["Strategic Planning", "Business Model Innovation", "Market Expansion", "Stakeholder Relations", "Organizational Restructuring"]
      },
      {
        title: "HR & Talent Management",
        description: "Building high-performance teams and fostering a thriving organizational culture.",
        focusAreas: ["Talent Acquisition", "Employee Development", "Organizational Culture", "Performance Management", "Leadership Development"]
      },
      {
        title: "Advocacy & Social Impact",
        description: "Driving positive social change and sustainable development.",
        focusAreas: ["Policy Advocacy", "Social Impact Initiatives", "Community Development", "Sustainable Development Goals (SDGs)", "Institutional Reform"]
      }
    ];

  return (
    <div className="bg-light-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16" aria-labelledby="page-heading-services">
          <h1 id="page-heading-services" className="text-4xl font-extrabold font-heading text-primary">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            A comprehensive suite of services designed to foster growth, innovation, and excellence across various sectors.
          </p>
        </header>

        <section className="space-y-12" aria-label="List of professional services">
          {serviceDetails.map((service, index) => (
            <article key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8" aria-labelledby={`service-heading-${index}`}>
              <div className="md:w-1/3">
                <h2 id={`service-heading-${index}`} className="text-2xl font-bold font-heading text-primary">{service.title}</h2>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
              <div className="md:w-2/3">
                <h3 className="font-semibold text-secondary mb-3">Focus Areas:</h3>
                <div className="flex flex-wrap gap-3">
                  {service.focusAreas.map((area, areaIndex) => (
                    <span key={areaIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
        
        <section className="mt-16 text-center bg-white p-8 rounded-lg shadow-xl border border-primary/20" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-2xl font-bold font-heading text-secondary">Ready to drive growth in your organization?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Contact us today to discuss how our expertise can be tailored to meet your specific needs and goals.
          </p>
          <Link to="/contact" className="mt-6 inline-block bg-primary text-white hover:bg-primary/90 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Book an Appointment
          </Link>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;  