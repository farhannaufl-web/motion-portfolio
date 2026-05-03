import HeroSection from './components/sections/Hero';
import MarqueeSection from './components/sections/Marquee';
import AboutSection from './components/sections/About';
import ServicesSection from './components/sections/Services';
import ProjectsSection from './components/sections/Projects';

export default function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen overflow-x-clip cursor-default selection:bg-[#B600A8]/30 selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Footer / Contact placeholder for routing */}
      <footer id="contact" className="bg-[#0C0C0C] py-20 text-center">
        <p className="text-[#D7E2EA]/30 uppercase tracking-[0.3em] font-light text-xs">
          Built with precision by Jack
        </p>
      </footer>
    </main>
  );
}
