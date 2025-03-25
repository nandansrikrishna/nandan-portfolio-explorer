
import FadeIn from "./animations/FadeIn";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import MonaLisa from "./MonaLisa";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="top" 
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-6"
    >
      <div 
        id="content"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="order-2 md:order-1 max-w-3xl">
          <FadeIn delay={100} duration={800}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hey, I'm <span className="text-gradient">Nandan</span>.
            </h1>
          </FadeIn>
          
          <FadeIn delay={300} duration={800}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Software Engineer with experience in full-stack development and distributed systems.
            </p>
          </FadeIn>
          
          <FadeIn delay={500} duration={800}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className={cn(
                  "inline-flex items-center justify-center h-12 px-6 rounded-lg",
                  "bg-primary text-primary-foreground font-medium",
                  "transition-all duration-300 ease-out",
                  "hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                )}
              >
                View Projects
              </a>
              
              <a 
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center h-12 px-6 rounded-lg",
                  "bg-secondary text-secondary-foreground font-medium",
                  "transition-all duration-300 ease-out",
                  "hover:shadow-lg hover:shadow-secondary/10 hover:scale-[1.02]",
                  "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                )}
              >
                Contact Me
              </a>
            </div>
          </FadeIn>
        </div>
        
        <div className="order-1 md:order-2 mb-8 md:mb-0">
          <MonaLisa />
        </div>
      </div>
      
      {!isMobile && (
        <div className="absolute bottom-0 right-0 pointer-events-none opacity-30 animate-image-glow">
          <svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[500px] h-[500px]"
          >
            <circle cx="400" cy="400" r="350" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="400" cy="400" r="150" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="400" cy="400" r="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="400" x2="800" y2="400" stroke="currentColor" strokeWidth="1.5" />
            <line x1="400" y1="0" x2="400" y2="800" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      )}
    </section>
  );
};

export default Hero;
