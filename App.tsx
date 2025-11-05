import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HighlightsPage from './pages/HighlightsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import BooksPage from './pages/BooksPage';
import StartupsPage from './pages/StartupsPage';
import NGOsListPage from './pages/NGOsListPage';
import NGODetailPage from './pages/NGODetailPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-light-bg text-secondary font-body">
        <Header />
        <main className="min-h-screen">
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
              element={
                <Suspense fallback={<div className="flex justify-center items-center h-screen"><p className="text-xl">Loading...</p></div>}>
                  <NGODetailPage />
                </Suspense>
              } 
            />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;