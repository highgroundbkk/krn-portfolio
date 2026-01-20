'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import Projects from './components/Projects';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 
        Scroll Interaction Zone (500vh).
        ScrollyCanvas sticks to the viewport.
        Overlay tracks progress within this zone.
      */}
      <div ref={containerRef} className="relative h-[500vh]">
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>

      {/* Projects Section (appears after scroll interaction) */}
      <Projects />
      
      {/* Footer / Extra Space */}
      <footer className="h-40 flex items-center justify-center text-gray-500 pb-10">
        <p>&copy; {new Date().getFullYear()} Portfolio.</p>
      </footer>
    </main>
  );
}
