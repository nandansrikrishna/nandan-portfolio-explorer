
import FadeIn from "./animations/FadeIn";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import MonaLisa from "./MonaLisa";
import { useTheme } from "./ThemeProvider";

const Hero = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  
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
              Software Engineer with experience in AI, full-stack development, and distributed systems.
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
    </section>
  );
};

export default Hero;
