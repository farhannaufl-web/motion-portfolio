import { useState, useEffect, useRef } from 'react';

const IMAGES = [
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Showreels_h00fkm.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Web_Animation_vbph2s.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Pfizer_Microsite_Showcase_uloxmu.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Allianz_Animation_pbxxwh.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Youtube_SADARI_qu20it.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Big_dataLow_pdbqfx.mp4",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Webinar_Ai_Care_xegkmx.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Kayan_ggda80.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Branding_low_a8jyfo.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Pre-Launch_fnqbfj.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Luna_Fantasia_Mobile_Muhammad_Farhan_i6kv0z.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/NEW_YEAR_MUM_wsruu6.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Mindmatters_uk1z30.mp4",
  "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Youtube_SADARI_qu20it.mp4",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const Row1 = IMAGES.slice(0, 11);
const Row2 = IMAGES.slice(11);

const MarqueeItem = ({ src, index }: { src: string; index: number; key?: any }) => {
  const isVideo = src.toLowerCase().endsWith('.mp4');
  
  // Specific videos requested for 9:16 ratio
  const isPortraitVideo = 
    src.includes('Pre-Launch_fnqbfj.mp4') || 
    src.includes('Luna_Fantasia_Mobile_Muhammad_Farhan_i6kv0z.mp4') ||
    src.includes('NEW_YEAR_MUM_wsruu6.mp4') ||
    src.includes('Mindmatters_uk1z30.mp4');

  if (isVideo) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`${isPortraitVideo ? 'w-[152px]' : 'w-[420px]'} h-[270px] flex-shrink-0 rounded-2xl object-cover`}
      />
    );
  }

  return (
    <img
      src={src}
      loading="lazy"
      className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl object-cover"
      alt={`Work ${index}`}
    />
  );
};

export const MarqueeSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden marquee-gradient">
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves Right */}
        <div 
          className="flex gap-3 will-change-transform" 
          style={{ transform: `translateX(${scrollOffset - 200}px)` }}
        >
          {[...Row1, ...Row1, ...Row1].map((src, i) => (
            <MarqueeItem key={i} src={src} index={i} />
          ))}
        </div>

        {/* Row 2: Moves Left */}
        <div 
          className="flex gap-3 will-change-transform" 
          style={{ transform: `translateX(${-(scrollOffset - 200)}px)` }}
        >
          {[...Row2, ...Row2, ...Row2].map((src, i) => (
            <MarqueeItem key={i} src={src} index={i + 11} />
          ))}
        </div>
      </div>
    </section>
  );
};
