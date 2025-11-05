
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { MenuIcon, CloseIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const activeLinkClass = 'text-accent-teal font-semibold';
  const inactiveLinkClass = 'hover:text-accent-teal transition-colors duration-300';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="text-primary hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold font-heading">Dr. Ashutosh Mishra</h1>
              <p className="text-xs max-w-xs text-gray-600 hidden sm:block">Driving Educational Innovation and Strategic Growth</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
