'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Highground from './components/Highground';
import Ventures from './components/Ventures';
import Process from './components/Process';
import Contact from './components/Contact';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen">
      <Navbar />

      {/* 
        Scroll Interaction Zone (500vh).
        ScrollyCanvas sticks to the viewport.
        Overlay tracks progress within this zone.
      */}
      <div id="home" ref={containerRef} className="relative h-[500vh]">
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>

      {/* Main Content Flow */}
      <Highground />
      <Ventures />
      <Projects />
      <Process />
      <Contact />
      
    </main>
  );
}
