import { FadeIn } from './Common';

const SERVICES = [
  {
    num: "01",
    name: "Video Editing",
    desc: "Crafting high-quality visual stories from raw footage, specialized in promotional content, social media marketing, and YouTube productions with a seamless end-to-end workflow."
  },
  {
    num: "02",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "03",
    name: "3D Assets & Visuals",
    desc: "Developing simple 3D assets and environments using Blender and Unreal Engine to elevate your digital content and create a more immersive visual experience."
  },
  {
    num: "04",
    name: "Post-Production",
    desc: "Comprehensive video finishing involving precise color grading, sound design using Adobe Audition, and visual enhancements to ensure a polished final product."
  },
  {
    num: "05",
    name: "Digital Content Strategy",
    desc: "Translating creative briefs into consistent, high-volume video assets tailored for engagement on platforms like Instagram, TikTok, and YouTube."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn as="div" className="mb-16 sm:mb-20 md:mb-28 w-full flex justify-center">
          <img 
            src={`https://res.cloudinary.com/drznlxfuv/image/upload/Services_upa70j.gif?v=${new Date().getTime()}`} 
            alt="Services" 
            className="w-auto h-[clamp(8.5rem,28vw,440px)] object-contain"
          />
        </FadeIn>

        <div className="w-full max-w-6xl mx-auto flex flex-col">
          {SERVICES.map((service, i) => (
            <FadeIn 
              key={service.num} 
              delay={i * 0.1}
              className="group grid grid-cols-1 sm:grid-cols-[120px_1fr_2fr] md:grid-cols-[160px_1fr_2fr] lg:grid-cols-[200px_1fr_2fr] items-start gap-4 sm:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0"
            >
              <span className="font-black text-[#0C0C0C] text-[clamp(2.5rem,8vw,120px)] leading-none tabular-nums">
                {service.num}
              </span>
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1.1rem,2vw,1.8rem)] pt-2 md:pt-4">
                {service.name}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed text-[clamp(0.9rem,1.4vw,1.1rem)] opacity-60 pt-1 md:pt-4">
                {service.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
