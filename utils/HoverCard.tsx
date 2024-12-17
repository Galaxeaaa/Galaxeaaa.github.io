"use client";

import { useRef, MouseEvent } from 'react';

export default function RotatingCard({children}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left; // X position within the card
    const y = e.clientY - top; // Y position within the card
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate rotation angles
    const rotateX = ((y - centerY) / centerY) * 50; // Tilt up and down
    const rotateY = ((x - centerX) / centerX) * -50; // Tilt left and right

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transform = 'rotateX(0) rotateY(0)';
  };

  return (
    <div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-xl transition-all duration-300"
    >
        {children}
    </div>
  );
};
