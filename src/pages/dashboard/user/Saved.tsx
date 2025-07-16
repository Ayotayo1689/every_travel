import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"
import HotelCard from "@/components/HotelCard"

const savedHotels = [
  {
    id: 1,
    name: "Grand Crest Hotel",
    location: "Lekki Phase 1, Lagos",
    rating: 4.8,
    reviews: 45,
    price: 135000,
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    discount: null,
  },
  {
    id: 2,
    name: "The Edifice Hotel",
    location: "Portharcourt",
    rating: 4.7,
    reviews: 45,
    price: 245000,
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    discount: "5% OFF",
  },
  {
    id: 3,
    name: "Mayfair Hotel",
    location: "Ikeja, Lagos",
    rating: 4.8,
    reviews: 45,
    price: 105000,
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    discount: "30% OFF",
  },
  {
    id: 4,
    name: "The Saffron Hotel",
    location: "Lekki Phase 1, Lagos",
    rating: 4.1,
    reviews: 45,
    price: 135000,
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    discount: null,
  },
]

export default function Saved() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Saved Lists</h1>
      </div>

      <div className="flex flex-wrap gap-6">
        {savedHotels.map((hotel) => (
          // <Card key={hotel.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
          //   <div className="relative">
          //     <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="w-full h-48 object-cover" />
          //     {hotel.featured && <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">Featured</Badge>}
          //     {hotel.discount && (
          //       <Badge className="absolute top-3 left-3 bg-teal-600 text-white">{hotel.discount}</Badge>
          //     )}
          //     <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          //       <Heart className="w-4 h-4 text-red-500 fill-current" />
          //     </button>
          //   </div>

          //   <CardContent className="p-4">
          //     <div className="space-y-2">
          //       <div className="flex items-center gap-2">
          //         <div className="flex items-center gap-1">
          //           {[...Array(5)].map((_, i) => (
          //             <Star
          //               key={i}
          //               className={`w-4 h-4 ${
          //                 i < Math.floor(hotel.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
          //               }`}
          //             />
          //           ))}
          //         </div>
          //         <span className="text-sm font-medium">{hotel.rating}</span>
          //         <span className="text-sm text-gray-500">Very Good</span>
          //         <span className="text-sm text-gray-500">{hotel.reviews} reviews</span>
          //       </div>

          //       <h3 className="font-semibold text-lg">{hotel.name}</h3>
          //       <p className="text-gray-600 text-sm">{hotel.location}</p>

          //       <div className="flex items-center justify-between pt-2">
          //         <div>
          //           <span className="text-sm text-gray-500">From </span>
          //           <span className="font-bold text-lg">₦{hotel.price.toLocaleString()}</span>
          //           <span className="text-sm text-gray-500"> /night</span>
          //         </div>
          //       </div>
          //     </div>
          //   </CardContent>
          // </Card>

            <HotelCard {...hotel} />
        ))}
      </div>
    </div>
  )
}
