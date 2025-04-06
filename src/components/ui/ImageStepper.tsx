"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ImageStepperProps {
  images: string[];
  width?: number;
  height?: number;
}

const ImageStepper: React.FC<ImageStepperProps> = ({
  images,
  width = 600,
  height = 400,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentControlsRef = controlsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentControlsRef?.classList.add("highlight");
            setTimeout(() => {
              if (currentControlsRef) {
                currentControlsRef.classList.remove("highlight");
              }
            }, 1200);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentControlsRef) {
      observer.observe(currentControlsRef);
    }

    return () => {
      if (currentControlsRef) {
        observer.unobserve(currentControlsRef);
      }
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden transition-all duration-500 ease-in-out">
      <div
        className="relative w-full h-auto"
        style={{ aspectRatio: `${width}/${height + 10}` }}
      >
        <Image
          src={`/${images[currentIndex]}`}
          alt={`Step ${currentIndex + 1}`}
          fill
          sizes="100vw, 600px"
          className="rounded-md transition-all duration-500 ease-in-out object-cover"
          priority={currentIndex === 0}
        />
      </div>
      <div
        ref={controlsRef}
        className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 px-2.5 pointer-events-none transition-shadow duration-500 ease-in-out"
      >
        {images.length > 1 && (
          <button
            className="bg-black/50 border-none rounded-full text-white cursor-pointer pointer-events-auto flex items-center justify-center w-10 h-10 transition-colors duration-300 hover:bg-black/80 focus:outline-none"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}
        {images.length > 1 && (
          <button
            className="bg-black/50 border-none rounded-full text-white cursor-pointer pointer-events-auto flex items-center justify-center w-10 h-10 transition-colors duration-300 hover:bg-black/80 focus:outline-none"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageStepper;
