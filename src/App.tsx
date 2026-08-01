import { LanguageProvider } from './contexts/LanguageContext';
import { useReveal } from './hooks/useReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';

function App() {
  useReveal();
  useSmoothScroll();

  return (
    <LanguageProvider>
      <div className="min-h-screen text-white bg-[#020617]">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
