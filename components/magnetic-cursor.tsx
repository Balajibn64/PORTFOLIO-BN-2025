"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const handleMouseMove = (e: MouseEvent) => {
      position.current.x = e.clientX;
      position.current.y = e.clientY;
    };

    const updateCursor = () => {
      if (cursor && cursorDot) {
        const { x, y } = position.current;

        // Smooth movement for the main cursor
        cursor.style.transform = `translate(${x - 16}px, ${y - 16}px)`;

        // Slightly delayed movement for the dot cursor
        dotPosition.current.x += (x - dotPosition.current.x) * 0.2;
        dotPosition.current.y += (y - dotPosition.current.y) * 0.2;
        cursorDot.style.transform = `translate(${dotPosition.current.x - 0.5}px, ${dotPosition.current.y - 0.5}px)`;
      }

      requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.opacity = '0.8';
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.transform = 'scale(1)';
        cursor.style.opacity = '0.6';
      }
    };

    // Add magnetic effect to interactive elements
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    magneticElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    updateCursor(); // Start the animation loop

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      magneticElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference opacity-60 transition-all duration-300 ease-out"
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-50 opacity-80"
      />
    </>
  );
}