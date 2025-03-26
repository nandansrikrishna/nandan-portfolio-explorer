
import { useState, useEffect, useRef } from "react";
import FadeIn from "./animations/FadeIn";
import { cn } from "@/lib/utils";

const MonaLisa = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate center of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate how far the mouse is from the center (normalized to [-1, 1])
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);
      
      // Increase sensitivity (from 5 to 10) and flip the sign to correct orientation
      // Now positive mouseX creates positive rotationY (looks toward cursor)
      const rotationX = Math.min(Math.max(-mouseY * 10, -10), 10);
      const rotationY = Math.min(Math.max(mouseX * 10, -10), 10);
      
      setRotation({ x: rotationX, y: rotationY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden rounded-lg max-w-md w-full mx-auto"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <FadeIn delay={200} duration={800}>
        <div 
          className={cn(
            "transition-transform duration-200 ease-out",
            "rounded-lg shadow-xl overflow-hidden",
            isHovering ? "scale-[1.02]" : ""
          )}
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <img 
            src="/lovable-uploads/b7c8314a-46c1-4870-ae30-c4245a605e26.png"
            alt="Mona Lisa"
            className="w-full h-auto object-cover"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>
        <div className="mt-3 text-center text-sm text-foreground/70">
          <p>Move your mouse around to see Mona Lisa follow you</p>
        </div>
      </FadeIn>
    </div>
  );
};

export default MonaLisa;
