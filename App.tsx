import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const HighlightsPage = lazy(() => import('./pages/HighlightsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BooksPage = lazy(() => import('./pages/BooksPage'));
const StartupsPage = lazy(() => import('./pages/StartupsPage'));
const NGOsListPage = lazy(() => import('./pages/NGOsListPage'));
const NGODetailPage = lazy(() => import('./pages/NGODetailPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-light-bg text-secondary font-body">
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={<div className="flex justify-center items-center h-screen"><p className="text-xl">Loading...</p></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/highlights" element={<HighlightsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/startups" element={<StartupsPage />} />
              <Route path="/ngos" element={<NGOsListPage />} />
              <Route 
                path="/ngos/:ngoId" 
                element={<NGODetailPage />} 
              />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;