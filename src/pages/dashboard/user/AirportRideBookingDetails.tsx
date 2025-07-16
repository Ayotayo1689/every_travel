import { CabIcon, LoggageIcon } from "@/assets/icons/Icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, UserIcon } from "lucide-react";

export default function AirportRideBookingDetails() {
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
                <CabIcon />
                <div>
                  <p className="font-[700] text-[20px]">Grand Crest Hotel</p>
                  <div className="flex items-center mt-2 gap-2 text-sm text-muted-foreground">
                    Perfect for: Small groups or families that need a bit more
                    comfort.
                  </div>

                  <div className="flex mt-4 gap-8 mb-6">
                    <div className="flex items-center gap-2">
                      <UserIcon color="grey" />

                      <div className="text-[15px]">4 Passengers</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <LoggageIcon />

                      <div className="text-[15px]">4 Passengers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booked Rooms */}
            <Card className=" p-0  h-fit border-none shadow-none">
              <CardContent className="p-4">
                <p className="font-[700] text-[16px] mb-2">Your Trip</p>
                <div className=" mx-auto mt-10">
                  <div className="relative pl-6 border-l-1 border-gray-200">
                    {/* Pickup Location */}
                    <div className="mb-10 relative">
                      <div className="absolute -left-8.5 top-1 w-5 h-5 bg-teal-600 rounded-full border-4 border-[#fff] shadow"></div>
                      <div className="bg-gray-100 p-4 rounded-lg ">
                        <p className="text-sm text-gray-500 mb-2">
                          Pickup location
                        </p>
                        <p className="text-base text-gray-800">
                          Murtala Muhammed International Airport, Ikeja, NG
                        </p>
                      </div>
                    </div>

                    {/* Drop-off Location */}
                    <div className="relative">
                      <div className="absolute -left-8.5 top-1 w-5 h-5 bg-teal-600 rounded-full border-4 border-[#fff] shadow"></div>
                      <div className="bg-gray-100 p-4 rounded-lg ">
                        <p className="text-sm text-gray-500 mb-2">
                          Drop-off location
                        </p>
                        <p className="text-base text-gray-800">
                          Oseni Street, Lagos, NG 123456
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Requests */}
            <Card className=" p-0  h-fit border-none shadow-none">
              <CardContent className="p-4">
                <p className="font-[700] mb-4 text-[16px] ">
                  Driver Information
                </p>
                <div className="flex flex-col gap-2  py-4">
                  <p className="text-[16px] text-[#1D1F1F] ">Name</p>
                  <p className="text-[18px] font-[600] text-[#1D1F1F]">
                    Michael Okafor
                  </p>
                </div>

                <div className="flex flex-col gap-2  py-4">
                  <p className="text-[16px] text-[#1D1F1F] ">
                    Contact information
                  </p>
                  <p className="text-[18px] font-[600] text-[#1D1F1F]">
                    +234 8098765432
                  </p>
                </div>
                <div className="flex flex-col gap-2  py-4">
                  <p className="text-[16px] text-[#1D1F1F] ">
                    Message to driver
                  </p>
                  <p className="text-[18px] font-[600] text-[#1D1F1F]">
                    Nil
                  </p>
                </div>
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
                    <p className="text-[16px] text-[#1D1F1F] ">Pickup date</p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                      Tue 11 Mar 2025
                    </p>
                  </div>

                  <div className="flex justify-between border-b py-5 border-[#eee]">
                    <p className="text-[16px] text-[#1D1F1F] ">
                    Time
                    </p>
                    <p className="text-right text-[18px] font-[600] text-[#1D1F1F]">
                    10:30 am
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
                <p className="font-semibold mb-4">Passenger Information</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">Name</div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">
                      Jane Doe
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">Email</div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">
                      janedoe@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">
                      Phone Number
                    </div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">
                      +234 8012345678
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-between p-2">
                    <div className="text-[16px] text-[#1D1F1F]">Country</div>
                    <span className="text-[18px] font-[600] text-[#1D1F1F]">
                      Nigeria
                    </span>
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
