import { MapPin, Star } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"


const BookingDetails = () => {
  const { bookingDetails } = useSelector((state:any) => state.booking)

  return (
    <div className="border p-4 bg-white">
      <h2 className="font-medium mb-2">Booking Details</h2>
      <div className="flex items-center mb-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <h3 className="text-lg font-bold mb-1">{bookingDetails.hotelName}</h3>
      <div className="flex items-start gap-1 text-sm mb-2">
        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <span>{bookingDetails.hotelAddress}</span>
      </div>
      <div className="text-sm mb-4">
        <span className="font-bold">{bookingDetails.rating}/10</span> - Very Good ({bookingDetails.reviews} reviews)
      </div>

      <div className="grid border-t pt-6 mt-6 grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm mb-2 text-gray-600">Check in</div>
          <div>{bookingDetails.checkIn}</div>
        </div>
        <div>
          <div className="text-sm mb-2 text-gray-600">Check out</div>
          <div>{bookingDetails.checkOut}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm mb-2 text-gray-600">Guests</div>
        <div>{bookingDetails.guests} Adults</div>
        <button className="text-teal-600 text-sm mb-2 font-medium mt-1">Change selection</button>
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="font-medium mb-2">Price Summary</h3>
        <div className="space-y-6">
          <div className="flex justify-between border p-3 rounded-md items-end">
            <div>
              <div>1 Classic Room</div>
              <div>1 night</div>
            </div>
            <div className="font-medium">₦{bookingDetails.classicRoomPrice.toLocaleString()}</div>
          </div>
          <div className="flex justify-between border p-3 rounded-md items-end">
            <div>
              <div>1 Standard Room</div>
              <div>1 night</div>
            </div>
            <div className="font-medium">₦{bookingDetails.standardRoomPrice.toLocaleString()}</div>
          </div>
          <div className="flex justify-between border p-3 rounded-md items-end">
            <div>Taxes & fees</div>
            <div className="font-medium">₦{bookingDetails.taxesAndFees.toLocaleString()}</div>
          </div>
          <div className="flex justify-end">
            <button className="text-teal-600 text-sm font-medium">Apply coupon code</button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-3 mt-4 rounded-md">
        <div className="flex justify-between font-medium">
          <div>Total Amount</div>
          <div>₦{bookingDetails.totalAmount.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails
