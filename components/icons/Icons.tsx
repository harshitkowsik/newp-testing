import React from 'react';

export const MenuIcon: React.FC = () => (
  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon: React.FC = () => (
  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const LinkedInIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
  </svg>
);

export const MailIcon: React.FC = () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
);

export const PhoneIcon: React.FC = () => (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
    </svg>
);

export const CheckmarkIcon: React.FC = () => (
    <svg className="w-6 h-6 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

export const QuoteIcon: React.FC = () => (
    <svg className="w-12 h-12 text-primary opacity-20" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.981 21.904L1.888 27.995 6.096 17.388C4.549 15.176 4 12.728 4 10.223c0-3.34 1.292-6.48 3.522-8.799C9.849-0.902 13.048-2 16.32-2c0 2.45-0.214 4.838-0.613 7.126-0.399 2.288-0.979 4.49-1.724 6.551-0.745 2.061-1.654 3.961-2.695 5.619-1.041 1.658-2.196 3.066-3.417 4.168-0.08 0.08-0.149 0.15-0.205 0.205-0.056 0.055-0.101 0.1-0.134 0.134-0.033 0.034-0.055 0.056-0.055 0.056zM25.981 21.904L17.888 27.995 22.096 17.388C20.549 15.176 20 12.728 20 10.223c0-3.34 1.292-6.48 3.522-8.799C25.849-0.902 29.048-2 32.32-2c0 2.45-0.214 4.838-0.613 7.126-0.399 2.288-0.979 4.49-1.724 6.551-0.745 2.061-1.654 3.961-2.695 5.619-1.041 1.658-2.196 3.066-3.417 4.168-0.08 0.08-0.149 0.15-0.205 0.205-0.056 0.055-0.101 0.1-0.134 0.134-0.033 0.034-0.055 0.056-0.055 0.056z"></path>
    </svg>
);
