"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Building,
  Car,
  Hotel,
  Plane,
  Ship,
  Utensils,
} from "lucide-react";
import { OfferCard } from "./OfferCard";

export default function TravelOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create a set of offers with duplicates to create the infinite loop effect
  const baseOffers = [
    {
      id: 1,
      icon: <Building className="h-4 w-4 text-teal-700" />,
      provider: "The Hayweather Hotel",
      title: "Get our deluxe rooms for half price",
      description: "Promo lasts 16th March 2025 - 20th March 2025",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-[#e8f3f3]",
    },
    {
      id: 2,
      icon: <Car className="h-4 w-4 text-teal-700" />,
      provider: "Motion Cars",
      title: "Enjoy 15% off all rides this Easter",
      description: "Offer lasts throughout April",
      image:
        "https://plus.unsplash.com/premium_photo-1666299854172-e7eecad25659?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-[#e8f3f3]",
    },
    {
      id: 3,
      icon: <Hotel className="h-4 w-4 text-teal-700" />,
      provider: "Thiolove Resort",
      title: "Book for two days and get the third day free",
      description: "Offer lasts throughout April",
      image:
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-[#e8f3f3]",
    },
    {
      id: 4,
      icon: <Plane className="h-4 w-4 text-teal-700" />,
      provider: "SkyHigh Airlines",
      title: "20% off international flights",
      description: "Book by end of May for summer travel",
      image:
        "https://images.unsplash.com/photo-1583202075376-837d5ff1bf0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsaWdodHN8ZW58MHx8MHx8fDA%3D",
      color: "bg-[#e8f3f3]",
    },
    {
      id: 5,
      icon: <Ship className="h-4 w-4 text-teal-700" />,
      provider: "Ocean Cruises",
      title: "7-day Mediterranean cruise special",
      description: "All-inclusive packages from $899",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-[#e8f3f3]",
    },
    {
      id: 6,
      icon: <Utensils className="h-4 w-4 text-teal-700" />,
      provider: "Gourmet Getaways",
      title: "Culinary tour package discount",
      description: "Book before June for 25% savings",
      image: "/placeholder.svg?height=400&width=600",
      color: "bg-[#e8f3f3]",
    },
  ];

  // Create a circular array by duplicating the first few items at the end
  // and the last few items at the beginning
  const offers = [
    ...baseOffers
      .slice(baseOffers.length - 2)
      .map((offer) => ({ ...offer, id: offer.id - baseOffers.length })),
    ...baseOffers,
    ...baseOffers
      .slice(0, 2)
      .map((offer) => ({ ...offer, id: offer.id + baseOffers.length })),
  ];

  // Calculate card widths based on screen size
  const getCardWidth = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        return 100; // 1 card on mobile
      } else if (window.innerWidth < 1024) {
        return 50; // 2 cards on tablet
      } else {
        return 40; // 2.5 cards on desktop (40% per card)
      }
    }
    return 40; // Default to desktop
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize the carousel to start at the first real item (not the duplicated ones)
  useEffect(() => {
    setCurrentIndex(2);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // If we've reached one of the duplicated sections, reset without animation
    if (currentIndex === baseOffers.length + 1) {
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
        setCurrentIndex(baseOffers.length + 1);
      }, 500); // Match this to your transition duration
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="w-full  mx-auto md:px-4 md:py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="md:text-[28px] text-[24px] font-poppins font-[600] text-gray-800">Offers for you</h2>
          <p className="text-gray-600 text-[16px] md:text-[18px]">Promos, deals and exclusive offers...</p>
        </div>
        <div className="md:flex hidden space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous offers"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next offers"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
        >
          {offers.map((offer, index) => (
            <div
              key={`${offer.id}-${index}`}
              className="flex-shrink-0 px-2"
              style={{ width: `${cardWidth}%` }}
            >
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:hidden items-end justify-end mt-4 space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous offers"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next offers"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
    </div>
  );
}
