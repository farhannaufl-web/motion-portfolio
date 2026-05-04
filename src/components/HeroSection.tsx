import { useState } from 'react';
import { motion } from 'motion/react';
import { FadeIn, Magnet, ContactButton } from './Common';

const Portrait = () => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-0 bottom-0">
      <FadeIn delay={0.6} y={30}>
        <Magnet padding={300} strength={5} onActiveChange={setIsActive}>
          <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] cursor-pointer">
            {/* Static Image */}
            <img 
              src="https://res.cloudinary.com/drznlxfuv/image/upload/dreamina-2026-05-03-9577-buat_Image2seperti_Image1jangan_copy_pas__paaxnj.png" 
              alt="Farhan portrait"
              className="w-full object-contain select-none opacity-80"
              style={{ display: isActive ? 'none' : 'block' }}
            />
            {/* Animated GIF - also always in DOM to keep it loaded */}
            <img 
              src="https://res.cloudinary.com/drznlxfuv/image/upload/Animated_vz67bl.gif" 
              alt="Farhan portrait animated"
              className="w-full object-contain select-none pointer-events-none opacity-80"
              style={{ display: isActive ? 'block' : 'none' }}
            />
          </div>
        </Magnet>
      </FadeIn>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-50">
        <div className="text-[1.4rem] font-medium tracking-widest uppercase text-[#D7E2EA]">FARHAN</div>
        <div className="flex gap-8 md:gap-12 lg:gap-16">
          {["About", "Services", "Projects", "Contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Decorative Scroll Indicator */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 rotate-[-90deg] origin-left text-[11px] uppercase tracking-[0.5em] text-[#D7E2EA]/30 hidden lg:block z-20">
        SCROLL FOR PROJECTS
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 relative">
        {/* Portrait - Isolated Component */}
        <Portrait />

        <div className="overflow-hidden py-4 relative z-10 pointer-events-none">
          <FadeIn delay={0.15} y={40} as="h1" className="hero-heading font-black uppercase tracking-tighter leading-[0.8] whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12.5vw] lg:text-[14.5vw] -mt-4 text-center">
            Hi, i&apos;m farhan
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.35} y={20} as="p" className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
            A visual storyteller driven by crafting compelling narratives through video and motion design
          </FadeIn>
          
          <div className="hidden md:flex flex-col gap-1 uppercase tracking-tighter opacity-0 text-[10px] pointer-events-none">
            {/* Removed labels */}
          </div>
        </div>
      </div>
    </section>
  );
};
