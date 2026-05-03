interface ContactButtonProps {
  className?: string;
}

export function ContactButton({ className = "" }: ContactButtonProps) {
  return (
    <button
      className={`
        relative rounded-full uppercase tracking-widest font-medium text-white
        transition-transform hover:scale-105 active:scale-95
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-[0.65rem] sm:text-sm md:text-base
        ${className}
      `}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </button>
  );
}

interface LiveProjectButtonProps {
  className?: string;
}

export function LiveProjectButton({ className = "" }: LiveProjectButtonProps) {
  return (
    <button
      className={`
        rounded-full border-2 border-[#D7E2EA] font-medium uppercase tracking-widest text-[#D7E2EA]
        px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base
        hover:bg-[#D7E2EA]/10 transition-colors
        ${className}
      `}
    >
      Live Project
    </button>
  );
}
