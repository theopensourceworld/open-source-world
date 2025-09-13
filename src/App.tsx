import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import CTABanner from './components/sections/CTABanner';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    
    
   
    <div className="App">
       <ThemeProvider>
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <TeamSection />
          <CTABanner />
          <ContactSection />
        </main>
        <Footer />
       </ThemeProvider>
    </div>
    
  );
}

export default App;
