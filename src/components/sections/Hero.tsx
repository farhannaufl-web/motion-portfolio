import FadeIn from '../common/FadeIn';
import { ContactButton } from '../common/Buttons';
import Magnet from '../common/Magnet';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn as="nav" y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-50">
        <div className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#D7E2EA]">Jack</div>
        <div className="flex gap-6 md:gap-12 text-sm font-medium uppercase tracking-wider">
          {["About", "Price", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center relative z-20 pointer-events-none">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40} as="h1" className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m jack
          </FadeIn>
        </div>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Portrait of Jack"
              className="w-full h-auto object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-30">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem, 1.4vw, 1.5rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
