"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      const elements = containerRef.current.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const speed = (index + 1) * 0.02;
        const el = element as HTMLElement;
        el.style.transform = `translate(${x * 50 * speed}px, ${y * 50 * speed}px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Floating Geometric Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="floating-element absolute top-1/4 left-1/4 w-20 h-20 border-2 border-blue-400/30 rounded-full"
        style={{ 
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
          transform: 'perspective(1000px) rotateX(20deg) rotateY(20deg)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="floating-element absolute top-1/3 right-1/4 w-16 h-16 border-2 border-purple-400/30"
        style={{ 
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
          transform: 'perspective(1000px) rotateX(-15deg) rotateY(25deg)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, delay: 1.1 }}
        className="floating-element absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-pink-400/30"
        style={{ 
          background: 'linear-gradient(225deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
          transform: 'perspective(1000px) rotateX(30deg) rotateY(-20deg)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1.4 }}
        className="floating-element absolute top-1/2 right-1/3 w-24 h-24 border border-green-400/20 rounded-lg"
        style={{ 
          background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))',
          transform: 'perspective(1000px) rotateX(-25deg) rotateY(15deg)'
        }}
      />

      {/* Wireframe Sphere */}
      <motion.div
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ opacity: 0.2, rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="floating-element absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent 70%)',
          borderRadius: '50%',
          border: '1px solid rgba(147, 51, 234, 0.2)',
          transform: 'perspective(1000px) rotateX(20deg) rotateY(0deg)'
        }}
      >
        <div className="absolute inset-4 border border-purple-400/20 rounded-full" />
        <div className="absolute inset-8 border border-purple-400/10 rounded-full" />
      </motion.div>

      {/* Particle Effects */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2], 
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="floating-element absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${30 + (i * 10)}%`,
          }}
        />
      ))}
    </div>
  );
}