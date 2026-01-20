'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {

  // Animations for Section 1 (0% - 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Animations for Section 2 (20% - 40%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, -50]);
  
  // Animations for Section 3 (50% - 70%)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
        {/* We use sticky top-0 inside this absolute container to keep text in view while we scroll through the parent's height 
            BUT wait, if the parent is 500vh, and this Overlay is absolute inset-0, it is also 500vh.
            We want the text to appear FIXED on screen. 
            So we should make a Sticky Wrapper for the text content.
        */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center">

            {/* Section 1: Center */}
            <motion.div 
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center text-center px-4"
            >
                <div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mix-blend-difference">Koranin Jattanatamjit.</h1>
                <p className="text-xl md:text-2xl mt-4 font-light text-gray-300 mix-blend-difference">Creative Developer & Entrepreneur.</p>
                </div>
            </motion.div>

            {/* Section 2: Left */}
            <motion.div 
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-start px-8 md:px-24"
            >
                <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-3xl mix-blend-difference">
                Crafting digital businesses <br />
                <span className="text-gray-400">with purpose.</span>
                </h2>
            </motion.div>

            {/* Section 3: Right */}
            <motion.div 
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-end px-8 md:px-24 text-right"
            >
                <h2 className="text-4xl md:text-7xl font-semibold leading-tight max-w-3xl mix-blend-difference">
                From Brainchain Labs <br />
                <span className="text-gray-400">to HIGHGROUND.</span>
                </h2>
            </motion.div>
      </div>
    </div>
  );
}
