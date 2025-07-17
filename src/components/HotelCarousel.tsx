import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HotelCard from "./HotelCard";

const hotels = [
  {
    id: 1,
    name: "The Saffron Hotel",
    location: "Lekki Phase 1, Lagos",
    price: 135000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.3,
    ratingText: "Very Good",
    reviews: 45,
    discount: 20,
    featured: true,
  },
  {
    id: 2,
    name: "The Edifice Hotel",
    location: "Portharcourt",
    price: 245000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 7.4,
    ratingText: "Good",
    reviews: 45,
    discount: 5,
  },
  {
    id: 3,
    name: "Mayfair Hotel",
    location: "Ikeja, Lagos",
    price: 105000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.5,
    ratingText: "Very Good",
    reviews: 45,
    discount: 20,
  },
  {
    id: 4,
    name: "Grand Luxe Resort",
    location: "Victoria Island, Lagos",
    price: 185000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 9.1,
    ratingText: "Excellent",
    reviews: 78,
    discount: 15,
  },
  {
    id: 5,
    name: "Riverside Suites",
    location: "Abuja",
    price: 155000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 8.7,
    ratingText: "Very Good",
    reviews: 62,
    discount: 10,
  },
  {
    id: 6,
    name: "Ocean View Hotel",
    location: "Calabar",
    price: 125000,
    currency: "₦",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 7.9,
    ratingText: "Good",
    reviews: 37,
    discount: 25,
    featured: true,
  },
];

export default function HotelDealsCarousel({ locationText }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // Create a circular array by duplicating items
  const allHotels = [
    ...hotels
      .slice(hotels.length - 2)
      .map((hotel) => ({ ...hotel, id: hotel.id - hotels.length })),
    ...hotels,
    ...hotels
      .slice(0, 2)
      .map((hotel) => ({ ...hotel, id: hotel.id + hotels.length })),
  ];

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize the carousel to start at the first real item (not the duplicated ones)
  useEffect(() => {
    setCurrentIndex(2);
  }, []);

  const getCardWidth = () => {
    return 100 / visibleCount;
  };

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // If we've reached one of the duplicated sections, reset without animation
    if (currentIndex === hotels.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2);
      }, 500); // Match this to your transition duration
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);

    // If we've reached one of the duplicated sections, reset without animation
    if (currentIndex === 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(hotels.length + 1);
      }, 500); // Match this to your transition duration
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div data-aos="fade-up" className="w-full  mx-auto md:px-4 py-8">
      <div className="mb-6">
        <h2 className="md:text-[40px] text-[24px]  font-poppins font-[700] text-[#032A32] mb-2">
          Top Hotel Deals {locationText ?? null}
        </h2>
        <p className="text-[#1D1F1F] text-[18px] font-[400]">
          Get exclusive offers and discounts from top-rated hotels
        </p>
      </div>

      <div className="relative  ">
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-0  md:-left-10 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100 transition-colors"
          aria-label="Previous"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-0 md:-right-10 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-sm hover:bg-gray-100 transition-colors"
          aria-label="Next"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Carousel container */}
        <div className="overflow-hidden ">
          <div
            ref={carouselRef}
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * getCardWidth()}%)`,
            }}
          >
            {allHotels.map((hotel, index) => (
              <div
                key={`${hotel.id}-${index}`}
                className="flex-shrink-0 md:px-3"
                style={{ width: `${getCardWidth()}%` }}
              >
                <HotelCard {...hotel} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
