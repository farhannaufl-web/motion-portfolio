import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import FadeIn from '../common/FadeIn';
import { LiveProjectButton } from '../common/Buttons';

const PROJECTS = [
  {
    num: "01",
    client: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    }
  },
  {
    num: "02",
    client: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    }
  },
  {
    num: "03",
    client: "Client",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    }
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pb-20">
      <FadeIn y={40} className="pt-20 sm:pt-24 md:pt-32 mb-10 sm:mb-16 md:mb-20">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)]">
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.num} 
            project={project} 
            index={index} 
            totalCards={PROJECTS.length} 
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
  totalCards: number;
  key?: string | number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32 w-full px-5 sm:px-8 md:px-10">
      <motion.div
        ref={container}
        style={{ 
          scale,
          top: `calc(${index * 28}px)` 
        }}
        className="w-full max-w-7xl relative bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 md:gap-10 shadow-2xl"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,8vw,100px)] leading-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
                {project.client}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-xl md:text-2xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-10 gap-3 sm:gap-4 flex-1 h-full min-h-0">
          <div className="col-span-4 flex flex-col gap-3 sm:gap-4 h-full">
            <img 
              src={project.images.col1_1} 
              alt={project.name} 
              className="w-full h-[clamp(130px,16vw,230px)] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
            <img 
              src={project.images.col1_2} 
              alt={project.name} 
              className="w-full h-[clamp(160px,22vw,340px)] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
          <div className="col-span-6 h-full">
            <img 
              src={project.images.col2} 
              alt={project.name} 
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
