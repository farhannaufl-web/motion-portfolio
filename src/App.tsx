/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FadeIn, ContactButton } from './components/Common';

export default function App() {
  return (
    <main className="w-full bg-[#0C0C0C] font-sans selection:bg-[#B600A8] selection:text-white overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      {/* Final Contact Footer-ish Section */}
      <section id="contact" className="py-32 px-10 flex flex-col items-center justify-center bg-[#0C0C0C] text-center gap-12">
        <FadeIn delay={0}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2rem,10vw,120px)] leading-none tracking-tight">
            Let&apos;s Work Together
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#D7E2EA] font-light text-lg opacity-70 whitespace-nowrap px-4">
            Have a project in mind? Always open to collaborating on striking projects.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <ContactButton />
        </FadeIn>
        
        <div className="mt-20 pt-10 border-t border-[#D7E2EA]/10 w-full flex justify-between items-center text-xs uppercase tracking-widest opacity-40">
          <span>&copy; 2026 Farhan. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/farhannaufl/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
}
