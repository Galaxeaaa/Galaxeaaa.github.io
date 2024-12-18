"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { cn } from "@/utils/cn";

const CycleContext = createContext(0);

export function CycledAppearContainer({ children, interval = 2000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    }, interval);

    return () => clearInterval(cycleInterval);
  }, [childrenArray.length, interval]);

  return (
    <CycleContext.Provider value={currentIndex}>
      <div className="cycled-appear-container">
        {childrenArray.map((child, index) => (
          <div key={index} className={index === currentIndex ? 'visible' : 'hidden'}>
            {child}
          </div>
        ))}
      </div>
    </CycleContext.Provider>
  );
}

export function CycledAppearItem({ children }) {
  const currentIndex = useContext(CycleContext);
  return <div className="cycled-appear-item" key={currentIndex}>{children}</div>;
}