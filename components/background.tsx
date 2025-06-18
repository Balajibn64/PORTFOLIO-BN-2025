import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const stars = container.querySelectorAll('.star');
      stars.forEach((star) => {
        const rect = star.getBoundingClientRect();
        const dx = clientX - (rect.left + rect.width / 2);
        const dy = clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.max(0, 1 - distance / 300);
        (star as HTMLElement).style.transform = `translate(${dx * intensity * 0.05}px, ${dy * intensity * 0.05}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-black">
      {/* Floating Stars */}
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="absolute star w-1 h-1 bg-white rounded-full shadow-lg"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
          }}
        />
      ))}

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}