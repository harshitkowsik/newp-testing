import React from 'react';
import { Link } from 'react-router-dom';
import { services, navLinks } from '../constants';
import { LinkedInIcon, MailIcon, PhoneIcon, TwitterIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div aria-labelledby="footer-about-heading">
            <h3 id="footer-about-heading" className="text-lg font-bold font-heading mb-4">Dr. Ashutosh Mishra</h3>
            <p className="text-gray-300 text-sm">
              With over 22 years of experience, Dr. Mishra bridges academia, legal expertise, and business strategy, driving educational innovation and organizational growth.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.linkedin.com/in/dramishra/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-teal transition-colors" aria-label="LinkedIn" title="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://x.com/drmishra_in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-teal transition-colors" aria-label="Twitter" title="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://www.facebook.com/advdramishra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-teal transition-colors" aria-label="Facebook" title="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/advdramishra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-teal transition-colors" aria-label="Instagram" title="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.youtube.com/@advdrmishra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-teal transition-colors" aria-label="YouTube" title="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          <div aria-labelledby="footer-services-heading">
            <h3 id="footer-services-heading" className="text-lg font-bold font-heading mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-sm text-gray-300 hover:text-accent-teal transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading" className="text-lg font-bold font-heading mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p><strong>Registered Office:</strong><br />#511, 5th Floor, Skyline Plaza 1, Behind Lulu Mall, Sushant Golf City, Lucknow</p>
              <a href="mailto:write2me@dramishra.in" className="flex items-center space-x-2 hover:text-accent-teal transition-colors">
                <MailIcon />
                <span>write2me@dramishra.in</span>
              </a>
              <a href="tel:05222060100" className="flex items-center space-x-2 hover:text-accent-teal transition-colors">
                <PhoneIcon />
                <span>0522 206 0100</span>
              </a>
            </div>
          </div>

           <div aria-labelledby="footer-links-heading">
            <h3 id="footer-links-heading" className="text-lg font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks
                .filter(link => link.name !== 'Home' && link.name !== 'Services')
                .map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-gray-300 hover:text-accent-teal transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Ashutosh Mishra. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <Link to="/privacy" className="hover:text-accent-teal transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-accent-teal transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;