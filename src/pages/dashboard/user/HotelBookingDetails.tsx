import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, User, Mail, Phone, Globe, MapPin } from "lucide-react";

export default function HotelBookingDetails() {
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
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-2xl">
        <h1 className="text-[20px] font-bold text-gray-900">Booking Details</h1>
      </div>
      <div className="p-4 space-y-4 max-w-6xl mx-auto">
        {/* Grid layout for desktop */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Hotel Image and Info */}
          <div className="col-span-1  flex flex-col  gap-4 ">
            <Card className=" p-0 h-fit border-none shadow-none">
              <CardContent className=" p-4 space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                  alt="Hotel room"
                  className="rounded-lg w-full  object-cover aspect-square max-h-[200px] "
                />
                <div>
                  <div className="flex mb-2">{getStars(10)}</div>

                  <p className="font-[700] text-[20px]">Grand Crest Hotel</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    45, Raul Road, Victoria Island, Lagos
                  </div>
                  <p className="text-sm mb-3  mt-3">
                    <span className=" font-[700] text-black">8.3/10  Very Good </span> –
                   (45 reviews)
                  </p>
                  <a href="#" className="text-[16px]  font-[700] text-[#076476] hover:underline">
                    View more details
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Booked Rooms */}
            <Card className=" p-0  h-fit border-none shadow-none">
              <CardContent className="p-4">
                <p className="font-[700] text-[16px] mb-2">Booked Rooms (2)</p>
                <ul className="list-none   list-inside text-[16px] text-[#1D1F1F] space-y-1">
                  <li className="mb-3">1 Classic room</li>
                  <li className="mb-3">1 Standard room</li>
                </ul>
              </CardContent>
            </Card>

            {/* Special Requests */}
            <Card className=" p-0  h-fit border-none shadow-none">
              <CardContent className="p-4">
                <p className="font-[700] mb-4 text-[16px] ">Special Requests</p>
                <p className="text-sm  mb-3 text-muted-foreground">Nil</p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}

          <div className="col-span-2 grid gap-4  ">
            <Card className=" p-0  border-none shadow-none">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
                <div className=" text-sm">
                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">
                      Booking Number
                    </p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      12345678
                    </p>
                  </div>

                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">Booking Date</p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      March 10, 2025
                    </p>
                  </div>

                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">Check-in Date</p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      Tue 11 Mar 2025
                    </p>
                  </div>

                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">
                      Check-out Date
                    </p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      Wed 12 Mar 2025
                    </p>
                  </div>

                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">Guests</p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      2 Adults
                    </p>
                  </div>

                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">
                      Booking Status
                    </p>
                    <div className="flex justify-end">
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Confirmed
                      </Badge>
                    </div>
                  </div>

                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">
                      Payment Method
                    </p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      Wallet
                    </p>
                  </div>

                  <div className="flex justify-between   py-5 ">
                    <p className="text-[16px] text-[#1D1F1F] ">Total Paid</p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      ₦180,050
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className=" p-0 border-none shadow-none">
              <CardContent className="p-4">
                <p className="font-semibold mb-4">Guest Information</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">Name</div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">Jane Doe</span>
                  </div>
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">Email</div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">janedoe@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">Phone Number</div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">+234 8012345678</span>
                  </div>
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">Country</div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">Nigeria</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Guest Info */}
      </div>
    </div>
  );
}
