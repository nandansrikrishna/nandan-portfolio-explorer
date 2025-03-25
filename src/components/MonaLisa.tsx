import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

interface DartPosition {
  x: number;
  y: number;
  angle: number;
}

interface BoardSectionProps {
  id: string;
  colorClass: string;
  points: number;
  rotation: number;
  onClick: (e: React.MouseEvent, points: number) => void;
}

const BoardSection: React.FC<BoardSectionProps> = ({ id, colorClass, points, rotation, onClick }) => {
  return (
    <div
      id={id}
      className={`absolute h-full w-full origin-center ${colorClass}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={(e) => onClick(e, points)}
    >
      <div className="h-1/2 w-full clip-triangle" />
    </div>
  );
};

const Dart: React.FC<{ position: DartPosition }> = ({ position }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) rotate(${position.angle}deg)`,
        zIndex: 10,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <Target size={24} color="gray" strokeWidth={3} />
    </motion.div>
  );
};

const DartBoard: React.FC = () => {
  const [darts, setDarts] = useState<DartPosition[]>([]);
  const [score, setScore] = useState(0);

  const handleBoardClick = (e: React.MouseEvent, points: number) => {
    // Get click position relative to the board
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Random angle for dart
    const angle = Math.random() * 360;
    
    // Add new dart to the board
    setDarts([...darts, { x, y, angle }]);
    
    // Update score
    setScore(score + points);
  };

  // Board sections with their respective points
  const sections = [
    { id: "section-20", colorClass: "bg-red-500", points: 20, rotation: 0 },
    { id: "section-1", colorClass: "bg-green-500", points: 1, rotation: 18 },
    { id: "section-18", colorClass: "bg-black", points: 18, rotation: 36 },
    { id: "section-4", colorClass: "bg-blue-500", points: 4, rotation: 54 },
    { id: "section-13", colorClass: "bg-red-500", points: 13, rotation: 72 },
    { id: "section-6", colorClass: "bg-green-500", points: 6, rotation: 90 },
    { id: "section-10", colorClass: "bg-black", points: 10, rotation: 108 },
    { id: "section-15", colorClass: "bg-blue-500", points: 15, rotation: 126 },
    { id: "section-2", colorClass: "bg-red-500", points: 2, rotation: 144 },
    { id: "section-17", colorClass: "bg-green-500", points: 17, rotation: 162 },
    { id: "section-3", colorClass: "bg-black", points: 3, rotation: 180 },
    { id: "section-19", colorClass: "bg-blue-500", points: 19, rotation: 198 },
    { id: "section-7", colorClass: "bg-red-500", points: 7, rotation: 216 },
    { id: "section-16", colorClass: "bg-green-500", points: 16, rotation: 234 },
    { id: "section-8", colorClass: "bg-black", points: 8, rotation: 252 },
    { id: "section-11", colorClass: "bg-blue-500", points: 11, rotation: 270 },
    { id: "section-14", colorClass: "bg-red-500", points: 14, rotation: 288 },
    { id: "section-9", colorClass: "bg-green-500", points: 9, rotation: 306 },
    { id: "section-12", colorClass: "bg-black", points: 12, rotation: 324 },
    { id: "section-5", colorClass: "bg-blue-500", points: 5, rotation: 342 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl mb-4">Score: {score}</div>
      <div className="relative w-64 h-64 bg-gray-100 rounded-full border-8 border-gray-700 overflow-hidden">
        {/* Bullseye */}
        <div 
          className="absolute left-1/2 top-1/2 w-8 h-8 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2 z-5"
          onClick={(e) => handleBoardClick(e, 50)}
        />
        
        {/* Outer bullseye */}
        <div 
          className="absolute left-1/2 top-1/2 w-16 h-16 bg-green-600 rounded-full -translate-x-1/2 -translate-y-1/2 z-4"
          onClick={(e) => handleBoardClick(e, 25)}
        />
        
        {/* Board sections */}
        {sections.map((section) => (
          <BoardSection
            key={section.id}
            id={section.id}
            colorClass={section.colorClass}
            points={section.points}
            rotation={section.rotation}
            onClick={handleBoardClick}
          />
        ))}
        
        {/* Darts */}
        {darts.map((dart, index) => (
          <Dart key={index} position={dart} />
        ))}
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        Click on any part of the dart board to throw a dart
      </div>
    </div>
  );
};

export default DartBoard;

/* Add this CSS to your global styles or component */
.clip-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
