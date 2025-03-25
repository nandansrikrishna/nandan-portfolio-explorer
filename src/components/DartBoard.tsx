
import { useState, useRef } from "react";
import FadeIn from "./animations/FadeIn";
import { cn } from "@/lib/utils";

// Define dart interface
interface Dart {
  id: number;
  x: number;
  y: number;
  score: number;
  color: string;
}

// Define section scores (simplified)
const boardSections = [
  { name: "Bullseye", value: 50, radius: 0.05, color: "bg-red-600" },
  { name: "Inner Bull", value: 25, radius: 0.1, color: "bg-green-700" },
  { name: "Triple Ring", value: 15, radius: 0.6, color: "bg-red-500" },
  { name: "Double Ring", value: 10, radius: 0.8, color: "bg-green-600" },
  { name: "Outer Board", value: 5, radius: 1, color: "bg-yellow-700" }
];

const DartBoard = () => {
  const [darts, setDarts] = useState<Dart[]>([]);
  const [animating, setAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // Calculate which section was hit
  const getSectionHit = (normalizedDistance: number) => {
    for (const section of boardSections) {
      if (normalizedDistance <= section.radius) {
        return section;
      }
    }
    return boardSections[boardSections.length - 1];
  };

  const throwDart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (animating || !boardRef.current) return;
    
    setAnimating(true);
    
    // Get click coordinates relative to board center
    const rect = boardRef.current.getBoundingClientRect();
    const boardCenterX = rect.left + rect.width / 2;
    const boardCenterY = rect.top + rect.height / 2;
    
    const x = e.clientX - boardCenterX;
    const y = e.clientY - boardCenterY;
    
    // Calculate distance from center (normalized to [0,1] range where 1 is the edge)
    const distance = Math.sqrt(x * x + y * y);
    const normalizedDistance = distance / (rect.width / 2);
    
    // Get section that was hit
    const sectionHit = getSectionHit(normalizedDistance);
    
    // Create new dart
    const newDart: Dart = {
      id: Date.now(),
      x: x / (rect.width / 2),
      y: y / (rect.height / 2),
      score: sectionHit.value,
      color: sectionHit.color.replace('bg-', 'border-')
    };
    
    // Show active section
    setActiveSection(sectionHit.name);
    
    // Add dart after animation completes
    setTimeout(() => {
      setDarts(prev => [...prev, newDart]);
      setAnimating(false);
      
      // Reset active section after a delay
      setTimeout(() => {
        setActiveSection(null);
      }, 1500);
    }, 300);
  };

  return (
    <div className="relative flex flex-col items-center">
      <FadeIn delay={200} duration={800}>
        <div
          ref={boardRef}
          onClick={throwDart}
          className={cn(
            "relative overflow-hidden rounded-full aspect-square max-w-md w-full mx-auto cursor-pointer",
            "transition-transform duration-200 hover:scale-[1.02]",
            "flex items-center justify-center"
          )}
        >
          {/* Dartboard rings */}
          <div className="absolute inset-0 rounded-full bg-yellow-700 border-8 border-gray-800"></div>
          <div className="absolute inset-[10%] rounded-full bg-green-600 border-4 border-gray-800"></div>
          <div className="absolute inset-[30%] rounded-full bg-red-500 border-4 border-gray-800"></div>
          <div className="absolute inset-[70%] rounded-full bg-green-700 border-2 border-gray-800"></div>
          <div className="absolute inset-[90%] rounded-full bg-red-600"></div>
          
          {/* Crosshairs */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-800/30"></div>
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gray-800/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
          
          {/* Darts */}
          {darts.map(dart => (
            <div 
              key={dart.id}
              className={cn(
                "absolute w-2 h-2 rounded-full bg-gray-100 shadow-md",
                `border-2 ${dart.color}`
              )}
              style={{
                left: `calc(50% + ${dart.x * 50}%)`,
                top: `calc(50% + ${dart.y * 50}%)`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}
            >
              <div className="absolute right-full h-px w-8 bg-gray-600 transform rotate-45"></div>
            </div>
          ))}
          
          {/* Dart throwing animation */}
          {animating && (
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-scale-in"></div>
          )}
          
          {/* Section highlight effect */}
          {activeSection && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="text-white text-xl font-bold bg-black/50 px-4 py-2 rounded-lg animate-fade-in">
                {activeSection}: {boardSections.find(s => s.name === activeSection)?.value} points!
              </div>
            </div>
          )}
        </div>
      </FadeIn>
      
      <div className="mt-4 text-center text-foreground/70 animate-pulse">
        Click on the dartboard to throw a dart!
      </div>
    </div>
  );
};

export default DartBoard;
