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
    
    // Canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = images[index];
    
    // Object-fit: cover logic
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
