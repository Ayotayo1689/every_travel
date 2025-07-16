// export default function CarHires() {
//     return (
//       <div className="space-y-6">
//         <div className="p-6 bg-white rounded-2xl">
//           <h1 className="text-[20px] font-bold text-gray-900">Car Hires</h1>
//         </div>
//         <p className="text-gray-600">Your car hire bookings will appear here.</p>
//       </div>
//     )
//   }

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock } from "lucide-react";
import { AirportRideIcon, SortIcon } from "@/assets/icons/Icons";

const bookings = [
  {
    id: "car-001",
    hotel: "Compact",
    location: "Murtala Muhammed International Airport, Ikeja, NG",
    pickupDate: "11 Mar 2025, 10:30 am",
    dropoffDate: "15 Mar 2025, 10:30 am",
    amount: 67000,
    status: "Confirmed",
    type: "car",
  },
  {
    id: "car-002",
    hotel: "SUV",
    location: "Nnamdi Azikiwe International Airport, Abuja, NG",
    pickupDate: "20 Mar 2025, 8:00 am",
    dropoffDate: "22 Mar 2025, 5:00 pm",
    amount: 95000,
    status: "Completed",
    type: "car",
  },
  {
    id: "car-003",
    hotel: "Sedan",
    location: "Sam Mbakwe Airport, Owerri, NG",
    pickupDate: "02 Apr 2025, 9:00 am",
    dropoffDate: "04 Apr 2025, 9:00 am",
    amount: 54000,
    status: "Cancelled",
    type: "car",
  },
  {
    id: "car-004",
    hotel: "Van",
    location: "Port Harcourt International Airport, Rivers, NG",
    pickupDate: "05 May 2025, 12:00 pm",
    dropoffDate: "10 May 2025, 12:00 pm",
    amount: 110000,
    status: "Confirmed",
    type: "car",
  },
  {
    id: "car-005",
    hotel: "Luxury",
    location: "Ibadan Airport, Oyo, NG",
    pickupDate: "18 Jun 2025, 10:00 am",
    dropoffDate: "20 Jun 2025, 2:00 pm",
    amount: 135000,
    status: "Completed",
    type: "car",
  },
  {
    id: "car-006",
    hotel: "Economy",
    location: "Akanu Ibiam International Airport, Enugu, NG",
    pickupDate: "01 Jul 2025, 9:30 am",
    dropoffDate: "03 Jul 2025, 11:00 am",
    amount: 45000,
    status: "Cancelled",
    type: "car",
  },
];

export default function CarHires() {
  const [activeTab, setActiveTab] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "all") return true;
    if (activeTab === "upcoming") return booking.status === "Confirmed";
    if (activeTab === "completed") return booking.status === "Completed";
    if (activeTab === "cancelled") return booking.status === "Cancelled";
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex p-6 bg-white rounded-2xl items-center justify-between">
        <h1 className="text-[20px] font-bold text-gray-900">
          Bookings History - Car Hires{" "}
        </h1>
        <Select defaultValue="newest">
          <SelectTrigger className="w-fit min-w-[180px] rounded-3xl">
            <div className="flex items-center gap-2">
              <SortIcon /> <SelectValue placeholder="Sort by" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Sort by: Newest</SelectItem>
            <SelectItem value="oldest">Sort by: Oldest</SelectItem>
            <SelectItem value="amount">Sort by: Amount</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid   p-0 overflow-clip bg-[#bdbdbd33] h-fit w-full grid-cols-4">
          <TabsTrigger
            className="data-[state=active]:bg-[#076476] data-[state=active]:text-white p-3 rounded-none relative border-r last:border-r-0 border-grey"
            value="all"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#076476] data-[state=active]:text-white p-3 rounded-none relative border-r last:border-r-0 border-grey"
            value="upcoming"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#076476] data-[state=active]:text-white p-3 rounded-none relative border-r last:border-r-0 border-grey"
            value="completed"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#076476] data-[state=active]:text-white p-3 rounded-none relative border-r last:border-r-0 border-grey"
            value="cancelled"
          >
            Cancelled
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4 mt-6">
          {filteredBookings.map((booking) => (
            <Card className="shadow-none" key={booking.id}>
              <CardContent>
                <div className="flex justify-between items-start">
                  <div className="space-y-2 w-full">
                    {/* Title */}
                    <div className="flex justify-between items-center">
                      <h3 className="font-[700] text-[#1D1F1F] text-lg flex items-center gap-2">
                        <AirportRideIcon /> Car Hire - {booking.hotel}
                      </h3>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>

                    {/* Pickup */}
                    <p>
                      <span className="text-[#5D6465]">Pickup location: </span>
                      {booking.location}
                    </p>
                    <div className="flex items-center text-sm text-[#1D1F1F] gap-1">
                      <Calendar className="w-4 h-4" />
                      {booking.pickupDate}
                    </div>

                    {/* Dropoff */}
                    <p className="mt-3">
                      <span className="text-[#5D6465]">
                        Drop-off location:{" "}
                      </span>
                      {booking.location}
                    </p>
                    <div className="flex items-center text-sm text-[#1D1F1F] gap-1">
                      <Calendar className="w-4 h-4" />
                      {booking.dropoffDate}
                    </div>

                    {/* Price & Actions */}
                    <div className="flex justify-between items-center mt-4">
                      <p className="font-semibold text-lg">
                        ₦{booking.amount.toLocaleString()}
                      </p>

                      <div className="flex gap-2">
                        {booking.status === "Confirmed" && (
                          <Button
                            variant="outline"
                            className="min-w-[130px]"
                            size="sm"
                          >
                            Cancel Booking
                          </Button>
                        )}
                        {booking.status !== "Confirmed" && (
                          <Button
                            className="min-w-[130px]"
                            variant="outline"
                            size="sm"
                          >
                            Rebook
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
