import type React from "react";

import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  MapPin,
  CalendarIcon,
  ChevronDown,
  Minus,
  Plus,
  UserIcon,
} from "lucide-react";
import { format } from "date-fns";

const BannerSearch = () => {
      const [checkInDate, setCheckInDate] = useState<Date>();
      const [checkOutDate, setCheckOutDate] = useState<Date>();
      const [rooms, setRooms] = useState(1);
      const [adults, setAdults] = useState(1);
      const [children, setChildren] = useState(0);
      const [guestsOpen, setGuestsOpen] = useState(false);

      const incrementValue = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        value: number
      ) => {
        setter(value + 1);
      };
    
      const decrementValue = (
        setter: React.Dispatch<React.SetStateAction<number>>,
        value: number
      ) => {
        if (value > 0) {
          setter(value - 1);
        }
      };
    
  return (
    <div className="relative mt-10 z-10 w-full max-w-6xl p-4 rounded-3xl bg-[#ffffff69]">
    <div className="bg-white flex justify-between item-center rounded-2xl shadow-lg p-1  md:p-2">
      <div className="flex   flex-1 justify-between gap-2  ">
        <div className="flex flex-col space-y-1 bg-white rounded-md">
          <div className="flex items-center text-2xl space-x-2 text-gray-500 px-2 ">
            <MapPin className="text-gray-400 h-5 w-5" />
            <span className="text-[14px] font-[400]">
              Where are you going?
            </span>
          </div>
          <Input
            type="text"
            placeholder="City Or Hotel Name"
            className="border-0 placeholder:text-black bg-transparent md:text-[16px] shadow-none  font-[400] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="flex flex-col space-y-1 bg-white rounded-md">
          <div className="flex items-center space-x-2 text-gray-500 px-2 ">
            <UserIcon className="h-5 w-5" />
            <span className="text-[14px] font-[400]">Guests & rooms</span>
          </div>
          <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-between bg-none text-left font-normal bg-gray-50 border-0 w-full"
              >
                <div className="flex text-[16px]  font-[400] items-center">
                  <span>
                    {adults} Adult, {rooms} Room
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 text-black" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Room</span>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => decrementValue(setRooms, rooms)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center">{rooms}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => incrementValue(setRooms, rooms)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium">Adults</span>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => decrementValue(setAdults, adults)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center">{adults}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => incrementValue(setAdults, adults)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-medium">Children</span>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => decrementValue(setChildren, children)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center">{children}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full p-0"
                      onClick={() => incrementValue(setChildren, children)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col space-y-1  bg-white rounded-md">
          <div className="flex items-center space-x-2 text-gray-500 px-2 ">
            <CalendarIcon className="h-5 w-5" />
            <span className="text-[14px] font-[400]">Check In</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="justify-between text-left font-normal w-full p-2 h-auto"
              >
                <span className="text-[16px]  font-[400]">
                  {checkInDate
                    ? format(checkInDate, "EEE, dd MMM yyyy")
                    : "Select date"}
                </span>
                <ChevronDown className="h-5 w-5 text-black" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check Out */}
        <div className="flex flex-col space-y-1 bg-white rounded-md">
          <div className="flex items-center space-x-2 text-gray-500 px-2 ">
            <CalendarIcon className="h-5 w-5" />
            <span className="text-[14px] font-[400]">Check Out</span>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="justify-between text-left font-normal w-full p-2 h-auto"
              >
                <span className="text-[16px]  font-[400]">
                  {checkOutDate
                    ? format(checkOutDate, "EEE, dd MMM yyyy")
                    : "Select date"}
                </span>
                <ChevronDown className="h-5 w-5 text-black" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Search Button */}

      <button className="bg-[#076476] hover:text-[#076476] font-[700] hover:bg-[#FFC215] rounded-r-2xl h-full  text-white px-8 py-6">
        Search
      </button>
    </div>
  </div>
  )
}

export default BannerSearch