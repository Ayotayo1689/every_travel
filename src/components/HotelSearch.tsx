"use client";

import { useState, useEffect } from "react";
import { MapPin, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
// import HotelCard from "@/components/hotel-card"
import { hotels, type Hotel } from "@/lib/data";
import HotelCard from "./Hotel-card";
import { Slider } from "./TealSlider";
import { SortIcon } from "@/assets/icons/Icons";

type SortOption = {
  label: string;
  value: string;
};

const sortOptions: SortOption[] = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to high", value: "price_asc" },
  { label: "Price: High to low", value: "price_desc" },
  { label: "Rating: High to low", value: "rating_desc" },
  { label: "Rating: Low to high", value: "rating_asc" },
];

type PropertyType =
  | "Hotels"
  | "Apartments"
  | "Guesthouses"
  | "Villas"
  | "Resorts";

const propertyTypes: PropertyType[] = [
  "Hotels",
  "Apartments",
  "Guesthouses",
  "Villas",
  "Resorts",
];

type Amenity =
  | "Wi-Fi"
  | "Pool"
  | "Free Breakfast"
  | "Air Conditioning"
  | "Gym & Fitness Center"
  | "Parking"
  | "Swimming Pool"
  | "Smart TV"
  | "Spa";

const amenities: Amenity[] = [
  "Wi-Fi",
  "Pool",
  "Free Breakfast",
  "Air Conditioning",
  "Gym & Fitness Center",
  "Parking",
  "Swimming Pool",
  "Smart TV",
  "Spa",
];

export default function HotelSearch() {
  const [selectedSort, setSelectedSort] = useState<SortOption>(sortOptions[0]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<
    PropertyType[]
  >([]);
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showMap, setShowMap] = useState(false);

  // Filter and sort hotels
  useEffect(() => {
    let result = [...hotels];

    // Filter by property type
    if (selectedPropertyTypes.length > 0) {
      result = result.filter((hotel) =>
        selectedPropertyTypes.includes(hotel.type as PropertyType)
      );
    }

    // Filter by price range
    result = result.filter(
      (hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    );

    // Filter by rating
    if (selectedRating !== null) {
      result = result.filter(
        (hotel) => Math.floor(hotel.rating) === selectedRating
      );
    }

    // Filter by amenities
    if (selectedAmenities.length > 0) {
      result = result.filter((hotel) =>
        selectedAmenities.every((amenity) =>
          hotel.facilities.includes(amenity.replace(" & Fitness Center", ""))
        )
      );
    }

    // Sort hotels
    switch (selectedSort.value) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating_desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "rating_asc":
        result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        // Recommended sorting (default)
        result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredHotels(result);
  }, [
    selectedSort,
    priceRange,
    selectedPropertyTypes,
    selectedRating,
    selectedAmenities,
  ]);

  const handlePropertyTypeChange = (type: PropertyType) => {
    setSelectedPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleAmenityChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating((prev) => (prev === rating ? null : rating));
  };

  const handleClearFilters = () => {
    setSelectedPropertyTypes([]);
    setPriceRange([0, 500000]);
    setSelectedRating(null);
    setSelectedAmenities([]);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <div className="flex items-center mb-4 justify-between gap-4">
          <div className="flex md:hidden flex-1  items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex flex-1 rounded-full items-center gap-2"
                >
                  <SortIcon />
                  <span>Sort</span> <span className="hidden md:block">: {selectedSort.label}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSelectedSort(option)}
                    className={
                      selectedSort.value === option.value ? "bg-accent" : ""
                    }
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button
            variant="outline"
            className="flex flex-1  md:hidden rounded-full items-center gap-2"
          >
            <SlidersHorizontal/>
            Filter
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
          <Button
            variant="outline"
            className="md:mb-4 flex-1 rounded-full md:rounded-lg flex items-center gap-2"
            onClick={() => setShowMap(!showMap)}
          >
            <MapPin className="h-4 w-4" />
            {showMap ? "Hide map" : "Map"}
          </Button>
        </div>
        <Card className=" p-0  md:sticky top-[150px] rounded-none shadow-none ">
          <div className="p-4 border-b">
            <h2 className="font-semibold text-lg">Filter by</h2>
          </div>

          <div className=" p-4 space-y-6">
            <div>
              <h3 className="font-medium mb-2">Price range</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>
                </div>
                <Slider
                  defaultValue={[0, 500000]}
                  max={500000}
                  step={10000}
                  value={priceRange}
                  onValueChange={(value: [number, number]) =>
                    setPriceRange(value as [number, number])
                  }
                  className="my-6 text-red-500"
                  color="red"
                />
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Ratings</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <Checkbox
                      id={`rating-${rating}`}
                      checked={selectedRating === rating}
                      onCheckedChange={() => handleRatingChange(rating)}
                    />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="ml-2 flex items-center text-sm font-medium"
                    >
                      {Array(rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Property type</h3>
              <div className="space-y-2">
                {propertyTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedPropertyTypes.includes(type)}
                      onCheckedChange={() => handlePropertyTypeChange(type)}
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="ml-2 text-sm font-medium"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Amenities</h3>
              <ScrollArea className="h-[200px] pr-4">
                <div className="space-y-2">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <Checkbox
                        id={`amenity-${amenity}`}
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={() => handleAmenityChange(amenity)}
                      />
                      <label
                        htmlFor={`amenity-${amenity}`}
                        className="ml-2 text-sm font-medium"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </Card>
      </div>

      <div className="md:col-span-3 space-y-4">
        <div className="md:col-span-4 ">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">
              {filteredHotels.length} properties found
            </h1>
            <div className="md:flex hidden items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SortIcon />
                    <span>Sort by:</span> {selectedSort.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  {sortOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSelectedSort(option)}
                      className={
                        selectedSort.value === option.value ? "bg-accent" : ""
                      }
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex flex-wrap  gap-2 mb-4">
            {selectedPropertyTypes.map((type) => (
              <Badge
                key={type}
                variant="secondary"
                className="flex bg-[#E6F0F1] rounded-full border-2 text-[#076476] font-[700] border-[#076476] items-center gap-1 px-3 py-1.5"
              >
                {type}
                <button
                  className="ml-1 rounded-full"
                  onClick={() => handlePropertyTypeChange(type)}
                >
                  ×
                </button>
              </Badge>
            ))}
            {(selectedPropertyTypes.length > 0 ||
              selectedAmenities.length > 0 ||
              selectedRating !== null) && (
              <Button
                variant="link"
                className="text-sm font-[700] text-[#076476] h-8 px-2"
                onClick={handleClearFilters}
              >
                Clear all filters
              </Button>
            )}
          </div>

          {showMap && (
            <div className="w-full h-[300px] bg-muted rounded-lg mb-4 flex items-center justify-center">
              <p className="text-muted-foreground">
                Map view would be displayed here
              </p>
            </div>
          )}
        </div>
        {filteredHotels.slice(0, visibleCount).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}

        {visibleCount < filteredHotels.length && (
          <div className="flex justify-center mt-6">
            <Button
              onClick={loadMore}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Load More
            </Button>
          </div>
        )}

        {filteredHotels.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No properties found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
