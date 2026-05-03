import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = (index + 1) / characters.length;
        
        return (
          <Character 
            key={index} 
            char={char} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  progress: any;
  range: [number, number];
  key?: string | number;
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}
