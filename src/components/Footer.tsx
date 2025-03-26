
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let animationId: number;
    let particles: { x: number; y: number; radius: number; color: string; speedX: number; speedY: number; }[] = [];
    
    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width / 15);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
        });
      }
    };
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw wave background
      const time = Date.now() * 0.001;
      const waveHeight = canvas.height * 0.2;
      const waveCount = 3;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * 0.01 + time) * waveHeight + 
                  Math.sin(x * 0.02 + time * 0.8) * waveHeight * 0.5 + 
                  canvas.height * 0.6;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <footer id="contact" className="bg-secondary/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Nandan</h2>
            <p className="text-foreground/70 mb-6 max-w-md">
              Software Engineer with a passion for building innovative solutions. 
              Graduating with a Computer Science degree.
            </p>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:nandans@umich.edu"
                className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Mail size={18} className="mr-2" />
                nandans@umich.edu
              </a>
              <a 
                href="https://github.com/nandansrikrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github size={18} className="mr-2" />
                github.com/nandansrikrishna
              </a>
              <a 
                href="https://linkedin.com/in/nandan-srikrishna/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                linkedin.com/in/nandan-srikrishna/
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 aspect-square max-w-[300px] mx-auto md:ml-auto">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full"
              aria-label="Interactive wave animation"
            />
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Nandan. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://github.com/nandansrikrishna"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full text-foreground/60 hover:text-foreground",
                  "transition-colors duration-300",
                  "hover:bg-primary/5"
                )}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/nandan-srikrishna/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full text-foreground/60 hover:text-foreground",
                  "transition-colors duration-300",
                  "hover:bg-primary/5"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:nandans@umich.edu"
                className={cn(
                  "p-2 rounded-full text-foreground/60 hover:text-foreground",
                  "transition-colors duration-300",
                  "hover:bg-primary/5"
                )}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
