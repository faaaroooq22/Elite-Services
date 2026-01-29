import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import PolicySection from './components/PolicySection.tsx';
import ServicesGrid from './components/ServicesGrid.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import { ACADEMIC_SERVICES, BOOK_SERVICES } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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