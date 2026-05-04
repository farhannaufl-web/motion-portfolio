import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn, LiveProjectButton } from './Common';

const PROJECTS = [
  {
    num: "01",
    category: "Showreel",
    name: "Video Showreel",
    video: "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Showreels_h00fkm.mp4",
    layout: "single",
    liveUrl: null
  },
  {
    num: "02",
    category: "Work",
    name: "Motion Animation",
    layout: "3grid",
    videos: [
      "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Pfizer_Microsite_Showcase_uloxmu.mp4",
      "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Branding_low_a8jyfo.mp4",
      "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/NEW_YEAR_MUM_wsruu6.mp4"
    ],
    liveUrl: "https://drive.google.com/drive/u/1/folders/1nW14C1FnlBoOJvzEHI89CR9hD3c8b9ga"
  },
  {
    num: "03",
    category: "Work",
    name: "Video Editing",
    layout: "4grid",
    videos: [
      "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Gemini_Low_qxunsw.mp4",
      "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Karol_Low_ongcny.mp4",
      "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/TH_dr._Alin_fxrygd.mp4",
      "https://res.cloudinary.com/drznlxfuv/video/upload/q_auto,f_auto/Mindmatters_uk1z30.mp4"
    ],
    liveUrl: "https://drive.google.com/drive/u/1/folders/1bu3SSyBbd4auxS03ZwbTH1GukmHfD_I8"
  }
];

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      ref={container}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn as="div" className="mb-16 sm:mb-20 md:mb-28 w-full flex justify-center">
          <img 
            src="https://res.cloudinary.com/drznlxfuv/image/upload/Project_ka5m9l.gif" 
            alt="Project" 
            className="w-auto h-[clamp(8.5rem,28vw,440px)] object-contain"
          />
        </FadeIn>

        <div className="w-full flex flex-col gap-20 sm:gap-24 md:gap-32 pb-40">
          {PROJECTS.map((project, i) => {
            return (
              <ProjectCard 
                key={project.num} 
                project={project} 
                index={i} 
                total={PROJECTS.length}
                progress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, total, progress }: { project: any; index: number; total: number; progress: any; key?: any }) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const start = index / total;
  const end = 1;
  const scale = useTransform(progress, [start, end], [1, targetScale]);

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 flex items-center justify-center w-full">
      <motion.div 
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 md:gap-10 overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,8vw,100px)] leading-none tabular-nums opacity-20">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] text-[0.65rem] sm:text-xs uppercase tracking-widest opacity-50 mb-1">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-base sm:text-lg md:text-2xl lg:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton 
            href={project.liveUrl} 
            label={(project.num === "02" || project.num === "03") ? "Project" : "Live Project"} 
          />
        </div>

        {/* Bottom Row: Video Content */}
        <div className="flex-1 w-full min-h-0 overflow-hidden">
          {project.layout === 'single' && (
            <video 
              src={project.video}
              autoPlay muted loop playsInline
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          )}

          {project.layout === '3grid' && (
            <div className="flex gap-3 sm:gap-4 md:gap-5 h-full">
              {/* Col 1: Staked broad videos 16:9 (Ratio 1.58 of total for perfect fit) */}
              <div className="flex-[1.58] flex flex-col gap-3 sm:gap-4 md:gap-5 h-full">
                <video 
                  src={project.videos[0]} 
                  autoPlay muted loop playsInline
                  className="w-full flex-1 min-h-0 object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                />
                <video 
                  src={project.videos[1]} 
                  autoPlay muted loop playsInline
                  className="w-full flex-1 min-h-0 object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                />
              </div>
              {/* Col 2: Tall video 9:16 */}
              <div className="flex-1 h-full">
                <video 
                  src={project.videos[2]} 
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                />
              </div>
            </div>
          )}

          {project.layout === '4grid' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 h-full">
              {project.videos.map((vid: string, idx: number) => (
                <video 
                  key={idx}
                  src={vid} 
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
                  onLoadedData={(e) => e.currentTarget.play()}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
