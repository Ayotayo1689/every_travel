import { Heart } from "lucide-react";
import { useState } from "react";

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  ratingText: string;
  reviews: number;
  discount?: number;
  featured?: boolean;
}

export default function HotelCard({
  name,
  location,
  price,
  currency,
  image,
  rating,
  ratingText,
  reviews,
  discount,
  featured,
}: HotelCardProps | any) {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG").format(price);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 8.0) return "bg-[#6B5109]";
    if (rating >= 7.0) return "bg-[#6B5109]";
    return "bg-amber-500";
  };

  const getStars = (rating: number) => {
    // Convert rating to stars (assuming 10 is 5 stars)
    const stars = Math.round((rating / 10) * 5);
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={`text-2xl ${
            i < stars ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ));
  };

  return (
    <div className="rounded-2xl  border border-gray-200 overflow-hidden bg-white  hover:shadow-md transition-shadow">
      <div className=" p-2 ">
        <div className="w-full relative min-w-[300px] h-[250px]      rounded-xl overflow-clip  ">
          <img
            src={image || "/placeholder.svg"}
            alt=""
            className=" h-full w-full object-cover"
          />
          {featured && (
            <div className="absolute top-0 left-0  bg-[#FFC215] text-[#076476] px-6 py-2 rounded-br-xl text-sm font-[700]">
              Featured
            </div>
          )}
          {discount && (
            <div className="absolute top-3 right-3 bg-[#076476] text-white px-3 py-2 rounded-lg text-sm font-medium">
              {discount}% Off
            </div>
          )}
        </div>
        <div className="py-4 px-2   relative">
          <div className="p-1.5  rounded-full absolute bg-white -top-6 right-6">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className=" bg-white rounded-full p-2 border hover:bg-gray-100 transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
          <div className="flex mb-2">{getStars(rating)}</div>

          <div className="flex items-center mb-2">
            <span
              className={`text-white text-sm px-2 py-0.5 rounded mr-2 ${getRatingColor(
                rating
              )}`}
            >
              {rating.toFixed(1)}
            </span>
            <span className="text-gray-700 font-[500] text-[14px]">
              {ratingText} · {reviews} reviews
            </span>
          </div>

          <h3 className="text-lg font-[700] text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-500 text-[16px] mb-5">{location}</p>

          <div className="flex items-center">
            <span className=" text-[16px] font-[400] mr-1">From</span>
            <span className="text-[24px] font-[700] text-gray-900">
              {currency}
              {formatPrice(price)}
            </span>
            <span className=" text-[18px] font-[600] ml-1">/night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
