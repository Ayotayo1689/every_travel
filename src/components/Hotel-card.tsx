"use client";

import { useState } from "react";
import {
  Heart,
  BeerIcon as Drink,
  Dumbbell,
  Wifi,
  PocketIcon as Pool,
  Coffee,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Hotel } from "@/lib/data";

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const getFacilityIcon = (facility: string) => {
    switch (facility) {
      case "Bar":
        return <Drink className="h-4 w-4" />;
      case "Gym":
        return <Dumbbell className="h-4 w-4" />;
      case "Free WiFi":
        return <Wifi className="h-4 w-4" />;
      case "Pool":
        return <Pool className="h-4 w-4" />;
      case "Breakfast":
        return <Coffee className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden shadow-none p-2">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <img
            src={hotel?.image || "/placeholder.svg"}
            alt={hotel?.name}
            className="w-[320px] rounded-lg h-[240px] object-cover"
          />
          {hotel?.discount && (
            <Badge className="absolute top-2 right-2 p-2 bg-[#076476]">
              {hotel?.discount}% Off
            </Badge>
          )}
          {hotel?.featured && (
            <Badge className="absolute top-2 left-2 p-2 bg-amber-500">
              Featured
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-2 right-2 bg-white/80 hover:bg-white/90 rounded-full"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </Button>
        </div>

        <div className="flex-1  px-6 flex flex-col justify-between py-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-[20px] mb-2 font-[700]">{hotel?.name}</h2>
              <p className="text-[16px] mb-2 text-muted-foreground">{hotel?.location}</p>

              <div className="flex items-center mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className={`w-[20px] h-[20px] ${
                        i < Math.floor(hotel?.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } fill-current`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}

               
              </div>
              <div className="mt-2">
              <Badge
                  variant="secondary"
                  className=" bg-amber-100 text-amber-800 hover:bg-amber-100"
                >
                  {hotel?.rating.toFixed(1)}
                </Badge>
                <span className="text-[14px] font-[500] text-[#272A2A]  ml-2">
                  Very Good · {hotel?.reviews} reviews
                </span>
              </div>

              
            </div>



            <div className="mt-4 md:mt-0 text-right">
              <div className="text-sm">From</div>
              <div className="text-xl font-bold">
                ₦{hotel?.price.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">/night</div>
            </div>
          </div>

<div className="border-b my-2 "></div>

          <div className="">
                <p className="text-sm font-medium mb-1">Key facilities</p>
                <div className="flex flex-wrap gap-4">
                  {hotel?.facilities.map((facility) => (
                    <div
                      key={facility}
                      className="flex items-center gap-1 text-sm text-muted-foreground"
                    >
                      {getFacilityIcon(facility)}
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </div>
    </Card>
  );
}
