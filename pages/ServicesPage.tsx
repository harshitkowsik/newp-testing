import React from 'react';
import SEO from '../SEO';
import { services } from '../constants';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
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
      <SEO 
        title="Services - Dr. Ashutosh Mishra"
        description="Explore the comprehensive suite of services offered by Dr. Ashutosh Mishra, including training, project management, legal consulting, educational innovation, and more."
        keywords="corporate training, project management, legal consulting, educational innovation, business development, HR management, social impact"
        pathname="/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold font-heading text-primary">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            A comprehensive suite of services designed to foster growth, innovation, and excellence across various sectors.
          </p>
        </div>

        <div className="space-y-12">
          {serviceDetails.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h2 className="text-2xl font-bold font-heading text-primary">{service.title}</h2>
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
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-xl border border-primary/20">
          <h2 className="text-2xl font-bold font-heading text-secondary">Ready to drive growth in your organization?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Contact us today to discuss how our expertise can be tailored to meet your specific needs and goals.
          </p>
          <Link to="/contact" className="mt-6 inline-block bg-primary text-white hover:bg-primary/90 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Book an Appointment
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;