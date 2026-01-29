
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PolicySection from './components/PolicySection';
import ServicesGrid from './components/ServicesGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ACADEMIC_SERVICES, BOOK_SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <div id="policies-anchor">
          <PolicySection />
        </div>

        <div className="bg-white">
          <ServicesGrid id="academic" category={ACADEMIC_SERVICES} />
        </div>

        <div className="bg-gray-50">
          <ServicesGrid id="books" category={BOOK_SERVICES} />
        </div>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
