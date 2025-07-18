import { GalleryIcon } from "@/assets/icons/Icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MobileImageCarousel = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetAutoSlide();
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetAutoSlide();
  };

  useEffect(() => {
    if (!images || images.length === 0) return;
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative rounded-xl w-full h-64 overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="object-cover w-full h-full transition duration-500"
      />

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bg-[#032A32CC] flex justify-center items-center text-white py-1 px-2 right-3 bottom-3 ">
        <GalleryIcon />

        {images.length}
      </div>
    </div>
  );
};

export default MobileImageCarousel;
