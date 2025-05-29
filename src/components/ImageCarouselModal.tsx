"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageProps {
  id: number;
  src: string;
  alt: string;
}

interface ImageCarouselModalProps {
  images: ImageProps[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageCarouselModal({
  images,
  initialIndex,
  onClose,
}: ImageCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex flex-col">
      {/* Header */}
      <div className="p-4 flex justify-between items-center text-white">
      
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Main carousel */}
      <div className="max-h-[85vh] py-4 relative  flex-col px-16 rounded-xl bg-white max-w-[900px] m-auto flex items-center justify-center">
      <button
          onClick={onClose}
          className="p-1 absolute top-4 right-4 rounded-full hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </button>
        <button
          onClick={goToPrevious}
          className="absolute left-2 z-10 p-2 rounded-full text-black/50 bg-white hover:bg-white/70"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div className="relative h-[500px]  w-full max-w-6xl">
          <img
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            className="object-contain rounded   w-[100%] h-full"
          />
        </div>

        <button
          onClick={goToNext}
          className="absolute right-2 z-10 p-2 rounded-full text-black/50  hover:bg-white/70"
          aria-label="Next image"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
        {/* Thumbnails */}
        {/* <div className=" border border-red-500 w-full    mt-6 p-2"> */}
          <div className="  mt-4 w-full overflow-y-auto gap-2 flex  ">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index)}
                className={`relative rounded-md overflow-clip w-[200px] h-[150px] flex-shrink-0 ${
                  index === currentIndex ? "ring-2 ring-white" : ""
                }`}
              >
                {index !== currentIndex && (
                  <div className="absolute rounded-md bg-[#ffffffb4]  w-full h-full "></div>
                )}

                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover h-full w-full"
                />
              </button>
            ))}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
