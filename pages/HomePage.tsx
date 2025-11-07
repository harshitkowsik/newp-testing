import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, keyExpertise } from '../constants';
import { CheckmarkIcon, QuoteIcon } from '../components/icons/Icons';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Dr. Ashutosh Mishra - Strategic Consultant & Innovator";
  }, []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }} aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-primary opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight">
            Dr. Ashutosh Mishra
          </h1>
          <p className="mt-4 text-xl sm:text-2xl max-w-3xl mx-auto">
            Strategic growth and educational innovation with legal precision.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/about" className="bg-accent-gold text-secondary hover:bg-accent-gold/90 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Learn More
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light-bg" aria-label="Professional career statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">22+</p>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">PhD</p>
              <p className="text-gray-600 mt-2">Management & Education</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">Global</p>
              <p className="text-gray-600 mt-2">Leadership Roles</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary">Member</p>
              <p className="text-gray-600 mt-2">Supreme Court of India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-white" aria-label="Professional summary quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <QuoteIcon />
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
            "With a PhD in Management and Education and over 22 years of diverse experience, I have built a career that bridges academia, legal expertise, and business strategy. My core philosophy is grounded in the 4 F's—Friendly, Firm, Fair, and Fit—principles that guide my approach to leadership and organizational growth."
          </p>
          <p className="mt-6 font-bold text-lg text-primary">- Dr. Ashutosh Mishra</p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-light-bg" aria-labelledby="featured-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="featured-services-heading" className="text-3xl font-extrabold font-heading text-secondary">Featured Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Driving excellence through a diverse range of professional services.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <article key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" aria-labelledby={`service-title-${index}`}>
                <h3 id={`service-title-${index}`} className="text-xl font-bold font-heading text-primary">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="text-primary font-semibold hover:text-accent-teal transition-colors">
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="py-20 bg-white" aria-labelledby="expertise-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="expertise-heading" className="text-3xl font-extrabold font-heading text-secondary">Key Expertise Areas</h2>
          <div className="mt-10 max-w-4xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-4">
            {keyExpertise.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckmarkIcon />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;