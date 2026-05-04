import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

/**
 * AnimatedText component for character-by-character scroll-driven opacity.
 */
export const AnimatedText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.1'],
  });

  const words = text.split(' ');
  
  // Pre-calculate cumulative character count for each word to get true global indices
  let currentGlobalIndex = 0;

  return (
    <p ref={containerRef} className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]">
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordStartGlobalIndex = currentGlobalIndex;
        // +1 for the space we'll add after the word
        currentGlobalIndex += wordChars.length + 1;

        return (
          <span key={wordIndex} className="inline-block mr-1">
            {wordChars.map((char, charIndex) => (
              <Char 
                key={charIndex} 
                char={char} 
                progress={scrollYProgress} 
                index={wordStartGlobalIndex + charIndex} 
                total={text.length} 
              />
            ))}
          </span>
        );
      })}
    </p>
  );
};

const Char = ({ char, progress, index, total }: { char: string; progress: any; index: number; total: number; key?: React.Key }) => {
  // Map the progress to a range for this specific character
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
};

/**
 * ContactButton component.
 */
export const ContactButton = () => {
  return (
    <motion.a
      href="https://wa.me/6285156408183"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest cursor-pointer overflow-hidden transition-all duration-300"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px'
      }}
    >
      Contact Me
    </motion.a>
  );
};

/**
 * LiveProjectButton component.
 */
export const LiveProjectButton = ({ href, label = "Live Project" }: { href?: string; label?: string }) => {
  if (!href) return null;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(215, 226, 234, 0.1)' }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base cursor-pointer transition-colors duration-300 inline-block"
    >
      {label}
    </motion.a>
  );
};

/**
 * FadeIn component for entrance animations.
 */
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.7, 
  x = 0, 
  y = 30, 
  as = 'div',
  className = ""
}: { 
  children: React.ReactNode; 
  delay?: number; 
  duration?: number; 
  x?: number; 
  y?: number; 
  as?: any;
  className?: string;
  key?: React.Key;
}) => {
  const Component = motion.create(as);
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ 
        delay, 
        duration, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

/**
 * Magnet component for mouse-following effects.
 */
export const Magnet = ({ 
  children, 
  padding = 150, 
  strength = 3,
  onActiveChange
}: { 
  children: React.ReactNode; 
  padding?: number; 
  strength?: number;
  onActiveChange?: (active: boolean) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < padding) {
      const moveX = distanceX / strength;
      const moveY = distanceY / strength;
      ref.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      ref.current.style.transition = "transform 0.3s ease-out";
      
      if (!isActiveRef.current) {
        isActiveRef.current = true;
        onActiveChange?.(true);
      }
    } else {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate3d(0, 0, 0)`;
    ref.current.style.transition = "transform 0.6s ease-in-out";
    
    if (isActiveRef.current) {
      isActiveRef.current = false;
      onActiveChange?.(false);
    }
  };

  return (
    <div 
      className="relative inline-block will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={ref}>
        {children}
      </div>
    </div>
  );
};
