"use client";

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
import { Calendar, Users, Bed } from "lucide-react";
import { HotelIcon } from "@/assets/icons/Icons";

const bookings = [
  {
    id: "12345678",
    hotel: "Grand Crest Hotel",
    location: "45, Raul Road, Victoria Island, Lagos",
    dates: "11 Mar 2025 - 12 Mar 2025",
    guests: "1 Adult",
    rooms: "2 Rooms",
    amount: 180050,
    status: "Confirmed",
  },
  {
    id: "12345679",
    hotel: "Limeridge Signature Hotel",
    location: "Victoria Island, Lagos",
    dates: "12 Feb 2025",
    guests: "1 Adult, 1 Child",
    rooms: "1 Room",
    amount: 90950,
    status: "Completed",
  },
  {
    id: "12345680",
    hotel: "The Atrium Hotel",
    location: "Lekki, Lagos",
    dates: "24 Jan 2025 2025 - 26 Jan 2025",
    guests: "3 Adults",
    rooms: "2 Rooms",
    amount: 435050,
    status: "Cancelled",
  },
];

export default function Hotels() {
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
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Bookings History - Hotels
        </h1>
        <Select defaultValue="newest">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
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
            {/* <div className="w-4 h-4 bg-[#076476] z-[9999] rotate-45 absolute -bottom-2"></div> */}
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
                <div className="flex  items-start justify-between">
                  <div className="space-y-3  w-full">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="font-semibold text-lg flex items-center gap-2"> <HotelIcon/> {booking.hotel}</h3>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{booking.location}</p>

                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {booking.dates}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {booking.guests}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {booking.rooms}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-lg">
                        ₦{booking.amount.toLocaleString()}
                      </p>
                      <div className="flex gap-2">
                        {booking.status === "Confirmed" && (
                          <Button variant="outline" className="min-w-[130px]" size="sm">
                            Cancel Booking
                          </Button>
                        )}
                        {booking.status !== "Confirmed" && (
                          <Button className="min-w-[130px]" variant="outline" size="sm">
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
