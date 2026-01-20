'use client';

import { MotionValue, useTransform, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const frameCount = 75;

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `/frames/${i}.webp`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === frameCount) {
                setImagesLoaded(true);
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Handle High DPI Displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    // Scale context to ensure correct drawing operations
    ctx.scale(dpr, dpr);

    // IMPORTANT: Style matches window size, buffer matches DPR size
    // We don't need to manually start styles here if CSS handles it, 
    // but the drawing logic needs to know the "logical" width/height 
    // which remains window.innerWidth/innerHeight because we scaled the context.

    const img = images[index];
    
    // Logical dimensions (window size)
    const logicalWidth = window.innerWidth;
    const logicalHeight = window.innerHeight;

    // Object-fit: cover logic
    const scale = Math.max(logicalWidth / img.width, logicalHeight / img.height);
    const x = (logicalWidth / 2) - (img.width / 2) * scale;
    const y = (logicalHeight / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, logicalWidth, logicalHeight);
    // Draw using the scale calculated against logical dimensions
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(currentIndex, "change", (latest) => {
    const idx = Math.round(latest);
    if (imagesLoaded && idx >= 0 && idx < frameCount) {
      renderFrame(idx);
    }
  });
  
  // Handle resize
  useEffect(() => {
      const handleResize = () => {
          const idx = Math.round(currentIndex.get());
          if (imagesLoaded && idx >= 0 && idx < frameCount) {
              renderFrame(idx);
          }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded, currentIndex]);


  // Initial render when images load
  useEffect(() => {
    if (imagesLoaded) {
       renderFrame(0);
    }
  }, [imagesLoaded]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block w-full h-full object-cover" />
    </div>
  );
}
