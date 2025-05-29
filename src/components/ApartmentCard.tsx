"use client";

import { useState } from "react";
import { Heart, Bed, Users, Bath } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ApartmentProps {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  discount?: number;
  rating: number;
  reviews: number;
  bedrooms: number;
  guests: number;
  bathrooms: number;
  isFavorite?: boolean;
}

export default function ApartmentCard({
  name,
  location,
  price,
  image,
  discount,
  rating,
  reviews,
  bedrooms,
  guests,
  bathrooms,
  isFavorite = false,
}: ApartmentProps) {
  const [favorite, setFavorite] = useState(isFavorite);
  const getRatingColor = (rating: number) => {
    if (rating >= 8.0) return "bg-[#6B5109]";
    if (rating >= 7.0) return "bg-[#6B5109]";
    return "bg-amber-500";
  };
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formattedPrice = formatPrice(price).replace("NGN", "₦");

  return (
    <div className="rounded-2xl overflow-hidden border p-2 border-gray-200 bg-white">
      {/* Image and price section */}
      <div className="relative">
        <div className="   rounded-2xl overflow-clip relative">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="object-cover "
          />

          {/* Discount badge */}
          {discount && (
            <div className="absolute top-3 right-3 bg-[#076476] text-white px-3 py-2 rounded-lg text-sm font-medium">
              {discount}% Off
            </div>
          )}

          {/* Price */}
          <div className="absolute bottom-0 left-0 rounded-tr-2xl bg-[#ffffffab] text-black   px-3 py-1">
            <span className="text-[20px] font-[700]">{formattedPrice}</span>
            <span className="text-[18px] font-[600]"> /night</span>
          </div>

          {/* Favorite button */}
        </div>
      </div>

      {/* Rating */}
      <div className="p-4 flex relative flex-col gap-1">
      <div className="p-1.5  rounded-full absolute bg-white -top-6 right-6">
            <button
              onClick={() => setFavorite(!favorite)}
              className=" bg-white rounded-full p-2 border hover:bg-gray-100 transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${
                  favorite ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-2xl text-yellow-400">
              ★
            </span>
          ))}
        </div>
        <div className="flex items-center mb-2">
          <span
            className={`text-white text-sm px-2 py-0.5 rounded mr-2 ${getRatingColor(
              rating
            )}`}
          >
            {rating.toFixed(1)}
          </span>
          <span className="text-gray-700 font-[500] text-[14px]">
            Very Good · {reviews} reviews
          </span>
        </div>

        {/* Apartment name and location */}
        <h3 className="text-lg font-[700] text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-500 text-[16px] mb-5">{location}</p>

        {/* Amenities */}
        <div className="flex  border-t pt-2 items-center space-x-8 text-gray-600">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span className="text-[14px] font-[700]">{bedrooms}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-[#0A3141] text-white">
                <p>Bedrooms</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-[14px] font-[700]">{guests}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-[#0A3141] text-white">
                <p>Guests</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span className="text-[14px] font-[700]">{bathrooms}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-[#0A3141] text-white">
                <p>Bathrooms</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
