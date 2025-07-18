"use client";

import { useState, useRef } from "react";
import {
  Calendar,
  Check,
  ChevronDown,
  MapPin,
  Heart,
  X,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
// import { format } from "date-fns";
import MapImg from "../assets/mapImg.svg";
import {
  BarIcon,
  Bathroomcon,
  BedIcon,
  Drycleancon,
  FoodIcon,
  GymIcon,
  MasterIcon,
  PoolIcon,
  ShottleIcon,
  SleepsIcon,
  SpaIcon,
  SquareMeterIcon,
  VisaIcon,
  WifiIcon,
} from "@/assets/icons/Icons";
import MapButton from "./MapButton";
import HotelCard from "./HotelCard";

// Facility icons
const FacilityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "Bar":
      return <span className="text-[#076476]">🍸</span>;
    case "Gym":
      return <span className="text-[#076476]">🏋️</span>;
    case "WiFi":
      return <span className="text-[#076476]">📶</span>;
    case "Pool":
      return <span className="text-[#076476]">🏊</span>;
    case "Breakfast":
      return <span className="text-[#076476]">🍳</span>;
    case "Airport":
      return <span className="text-[#076476]">✈️</span>;
    case "Spa":
      return <span className="text-[#076476]">💆</span>;
    case "Cleaning":
      return <span className="text-[#076476]">🧹</span>;
    default:
      return <span className="text-[#076476]">✓</span>;
  }
};

// Room type data
const roomTypes = [
  {
    id: 1,
    name: "Classic Room",
    price: 70000,
    originalPrice: 70000,
    discount: 0,
    image:
      "https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roomsLeft: 4,
    size: 25,
    beds: "1 Queen Bed",
    sleeps: 2,
    bathrooms: 2,
    amenities: {
      bedroom: ["Bed sheets", "Air conditioning", "Extra beds not available"],
      bathroom: ["Private bathroom", "Shower", "Slippers"],
      internet: ["Free WiFi (500+ Mbps (good for 6+ people or 10+ devices))"],
      more: [
        "Daily housekeeping",
        "Soundproofed rooms",
        "Electrical adapters",
        "Iron/ironing board (on request)",
      ],
    },
  },
  {
    id: 2,
    name: "Standard Room",
    price: 95000,
    originalPrice: 100000,
    discount: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roomsLeft: 9,
    size: 25,
    beds: "1 Queen Bed",
    sleeps: 2,
    bathrooms: 2,
    amenities: {
      bedroom: ["Bed sheets", "Air conditioning", "Extra beds not available"],
      bathroom: ["Private bathroom", "Shower", "Slippers", "Bathtub"],
      internet: ["Free WiFi (500+ Mbps (good for 6+ people or 10+ devices))"],
      more: [
        "Daily housekeeping",
        "Soundproofed rooms",
        "Electrical adapters",
        "Iron/ironing board (on request)",
      ],
    },
  },
  {
    id: 3,
    name: "Deluxe Room",
    price: 110000,
    originalPrice: 120000,
    discount: 8,
    image:
      "https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roomsLeft: 3,
    size: 35,
    beds: "1 Queen Bed",
    sleeps: 2,
    bathrooms: 2,
    amenities: {
      bedroom: [
        "Premium bed sheets",
        "Air conditioning",
        "Extra beds available on request",
      ],
      bathroom: [
        "Private bathroom",
        "Shower",
        "Slippers",
        "Bathtub",
        "Premium toiletries",
      ],
      internet: ["Free WiFi (500+ Mbps (good for 6+ people or 10+ devices))"],
      more: [
        "Daily housekeeping",
        "Soundproofed rooms",
        "Electrical adapters",
        "Iron/ironing board",
        "Mini bar",
      ],
    },
  },
];

// Similar properties data
const similarProperties = [
  {
    id: 1,
    name: "The Edifice Hotel",
    location: "Portharcourt",
    price: 245000,
    rating: 8.0,
    reviews: 45,
    image:
      "https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    discount: 8,
  },
  {
    id: 2,
    name: "The Saffron Hotel",
    location: "Lekki Phase 1, Lagos",
    price: 135000,
    rating: 7.6,
    reviews: 45,
    image:
      "https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    discount: 0,
  },
  {
    id: 3,
    name: "Standard Continental Hotel",
    location: "Ikeja, Lagos",
    price: 135000,
    rating: 8.7,
    reviews: 45,
    image:
      "https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    discount: 0,
  },
];

// Guest selection modal component
const GuestSelectionModal = ({
  guestData,
  onChange,
}: {
  guestData: { rooms: number; adults: number; children: number };
  onChange: (data: { rooms: number; adults: number; children: number }) => void;
}) => {
  const [localData, setLocalData] = useState(guestData);

  const handleIncrement = (field: "rooms" | "adults" | "children") => {
    setLocalData((prev) => ({
      ...prev,
      [field]: prev[field] + 1,
    }));
  };

  const handleDecrement = (field: "rooms" | "adults" | "children") => {
    if (localData[field] > (field === "children" ? 0 : 1)) {
      setLocalData((prev) => ({
        ...prev,
        [field]: prev[field] - 1,
      }));
    }
  };

  const handleApply = () => {
    onChange(localData);
  };

  return (
    <div className="   w-60 ">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Room</span>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrement("rooms")}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
              disabled={localData.rooms <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center">{localData.rooms}</span>
            <button
              onClick={() => handleIncrement("rooms")}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium">Adults</span>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrement("adults")}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
              disabled={localData.adults <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center">{localData.adults}</span>
            <button
              onClick={() => handleIncrement("adults")}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium">Children</span>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrement("children")}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
              disabled={localData.children <= 0}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center">{localData.children}</span>
            <button
              onClick={() => handleIncrement("children")}
              className="w-8 h-8 flex items-center justify-center border rounded-md"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleApply}
            className="bg-[#076476] hover:bg-teal-700 text-white"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

// Room modal component
const RoomModal = ({
  room,
  isOpen,
  onClose,
  onAddRoom,
}: {
  room: (typeof roomTypes)[0] | null;
  isOpen: boolean;
  onClose: () => void;
  onAddRoom: () => void;
}) => {
  if (!room || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md z-20"
        >
          <X className="h-5 w-5" />
        </button>

        <div>
          <h2 className="p-4 font-bold text-xl border-b">Room Information</h2>

          <div className=" p-4 h-100  w-full">
            <img
              src={room.image || "/placeholder.svg"}
              alt={room.name}
              className="object-cover h-[100%] rounded-2xl w-full"
            />
          </div>

          <div className="px-4">
            <h3 className="text-[24px] font-[700] mb-4">{room.name}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex gap-2  items-center">
                <span className="text-sm text-gray-500">
                  <SquareMeterIcon />
                </span>
                <span className="text-sm">{room.size} meter square</span>
              </div>
              <div className="flex gap-2  items-center">
                <span className="text-sm text-gray-500">
                  <BedIcon />
                </span>
                <span className="text-sm">{room.beds}</span>
              </div>
              <div className="flex gap-2  items-center">
                <span className="text-sm text-gray-500">
                  <SleepsIcon />
                </span>
                <span className="text-sm">Sleeps {room.sleeps}</span>
              </div>
              <div className="flex gap-2  items-center">
                <span className="text-sm text-gray-500">
                  <Bathroomcon />
                </span>
                <span className="text-sm">{room.bathrooms} Bathrooms</span>
              </div>
            </div>

            <h4 className="font-bold text-[20px] mb-4">Room Amenities</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2">
                    <BedIcon />
                  </span>
                  <span className="font-[700]">Bedroom</span>
                </div>
                <ul className="space-y-2 pl-2">
                  {room.amenities.bedroom.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#fff] border border-[#076476] mr-2"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2">
                    <Bathroomcon />
                  </span>
                  <span className="font-[700]">Bathroom</span>
                </div>
                <ul className="space-y-2 pl-2">
                  {room.amenities.bathroom.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#fff] border border-[#076476] mr-2"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2">📶</span>
                  <span className="font-[700]">Internet</span>
                </div>
                <ul className="space-y-2 pl-2">
                  {room.amenities.internet.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#fff] border border-[#076476] mr-2"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <span className="mr-2">➕</span>
                  <span className="font-[700]">More</span>
                </div>
                <ul className="space-y-2 pl-2">
                  {room.amenities.more.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#fff] border border-[#076476] mr-2"></span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border m-4 p-4 rounded-2xl">
              <div className="flex justify-between">
                <div className="">
                  <div className="flex items-center text-green-600 mb-1">
                    <span className="font-medium">Free cancellation</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Before 00:00 on day of booking
                  </p>
                </div>

                <div className="text-2xl font-bold text-black">{`₦${room.price.toLocaleString()}`}</div>
              </div>

              <div className="flex justify-between items-center">
                <i className="text-sm text-[#661C17]">
                  {room.roomsLeft} Rooms left
                </i>
                <Button
                  onClick={onAddRoom}
                  className="w-fit mt-4 rounded-4xl p-5 bg-[#076476] hover:bg-teal-700 text-white"
                >
                  Add Room
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HotelDetails() {
  const [activeSection, setActiveSection] = useState("description");
  const [selectedRooms, setSelectedRooms] = useState<{ [key: number]: number }>(
    {
      1: 1, // Default: 1 Classic Room selected
      2: 0, // Default: 0 Standard Rooms selected
      3: 0, // Default: 0 Deluxe Rooms selected
    }
  );

  // Guest selection state
  const [guestData, setGuestData] = useState({
    rooms: 1,
    adults: 1,
    children: 0,
  });
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [address, setAddress] = useState(
    "1600 Amphitheatre Parkway, Mountain View, CA"
  );

  // Date selection state
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(
    new Date(2025, 2, 11)
  ); // March 11, 2025
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(
    new Date(2025, 2, 12)
  ); // March 12, 2025

  // Room modal state
  const [selectedRoom, setSelectedRoom] = useState<
    (typeof roomTypes)[0] | null
  >(null);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);

  // Refs for scrolling
  const descriptionRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);
  const rulesRef = useRef<HTMLDivElement>(null);
  const ratingsRef = useRef<HTMLDivElement>(null);

  // Calculate totals
  const roomSubtotals = roomTypes
    .map((room) => ({
      id: room.id,
      name: room.name,
      quantity: selectedRooms[room.id] || 0,
      subtotal: room.price * (selectedRooms[room.id] || 0),
    }))
    .filter((item) => item.quantity > 0);

  const subtotal = roomSubtotals.reduce(
    (total, item) => total + item.subtotal,
    0
  );
  const taxes = 15050; // Fixed tax amount as per design
  const total = subtotal + taxes;

  // Format currency
  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  // Handle room quantity change
  const handleRoomQuantityChange = (roomId: number, quantity: number) => {
    setSelectedRooms((prev) => ({
      ...prev,
      [roomId]: quantity,
    }));
  };

  // Scroll to section and update active state
  const scrollToSection = (sectionId: string) => {
    const sectionRef =
      sectionId === "description"
        ? descriptionRef
        : sectionId === "rooms"
        ? roomsRef
        : sectionId === "rules"
        ? rulesRef
        : ratingsRef;

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Handle opening room modal
  const openRoomModal = (room: (typeof roomTypes)[0]) => {
    setSelectedRoom(room);
    setIsRoomModalOpen(true);
  };

  // Handle adding room from modal
  const handleAddRoom = () => {
    if (selectedRoom) {
      handleRoomQuantityChange(
        selectedRoom.id,
        (selectedRooms[selectedRoom.id] || 0) + 1
      );
      setIsRoomModalOpen(false);
    }
  };

  return (
    <div className=" mx-auto mt-8">
      {/* Navigation Links */}
      <div className="border-b mb-6">
        <div className=" hidden md:flex overflow-x-auto">
          <button
            onClick={() => scrollToSection("description")}
            className={`py-3 px-4 whitespace-nowrap ${
              activeSection === "description"
                ? "border-b-2 border-[#076476] text-[#076476]"
                : "text-gray-600"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => scrollToSection("rooms")}
            className={`py-3 px-4 whitespace-nowrap ${
              activeSection === "rooms"
                ? "border-b-2 border-[#076476] text-[#076476]"
                : "text-gray-600"
            }`}
          >
            Room options & pricing
          </button>
          <button
            onClick={() => scrollToSection("rules")}
            className={`py-3 px-4 whitespace-nowrap ${
              activeSection === "rules"
                ? "border-b-2 border-[#076476] text-[#076476]"
                : "text-gray-600"
            }`}
          >
            Rules
          </button>
          <button
            onClick={() => scrollToSection("ratings")}
            className={`py-3 px-4 whitespace-nowrap ${
              activeSection === "ratings"
                ? "border-b-2 border-[#076476] text-[#076476]"
                : "text-gray-600"
            }`}
          >
            Guest ratings
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div id="description" ref={descriptionRef} className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-slate-800 border-b border-amber-400 pb-2 mb-4 inline-block">
              About Grand Crest Hotel
            </h2>

            <p className="text-slate-700 mb-4">
              Welcome to Grand Crest Hotel, where comfort meets elegance in the
              vibrant heart of Victoria Island, Lagos. Whether you're visiting
              for business or leisure, our hotel offers a perfect blend of
              luxury and convenience.
            </p>

            <p className="text-slate-700 mb-4">
              Relax in beautifully designed rooms, enjoy a selection of fine
              dining options, and take advantage of amenities like high-speed
              Wi-Fi, a fully equipped fitness center, and a rooftop pool with
              city views. With our commitment to exceptional service and
              unbeatable location near top attractions and corporate hubs, Grand
              Crest Hotel promises an unforgettable stay.
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-3">
              Highlights
            </h3>

            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#076476] mr-2 mt-0.5" />
                <span>All rooms comes well equipped</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#076476] mr-2 mt-0.5" />
                <span>Ample parking space</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#076476] mr-2 mt-0.5" />
                <span>Spa and Gym</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#076476] mr-2 mt-0.5" />
                <span>Halls for event and conference</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <div className="border border-[#dadada]  rounded-lg overflow-hidden mb-6">
              <div className="relative ">
                <img
                  src={MapImg}
                  alt="Map location"
                  className="h-full w-full"
                />
              </div>
              <div className="  bg-gray-50 text-center">
                <MapButton buttonText="Show on map" address={address} />
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3">Popular Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <BarIcon />
                  <span className="ml-2">Bar</span>
                </li>
                <li className="flex items-center">
                  <GymIcon />
                  <span className="ml-2">Gym and fitness center</span>
                </li>
                <li className="flex items-center">
                  <WifiIcon />
                  <span className="ml-2">Free WiFi</span>
                </li>
                <li className="flex items-center">
                  <PoolIcon />
                  <span className="ml-2">Pool</span>
                </li>
                <li className="flex items-center">
                  <FoodIcon />
                  <span className="ml-2">Breakfast</span>
                </li>
                <li className="flex items-center">
                  <ShottleIcon />
                  <span className="ml-2">Airport Shuttle</span>
                </li>
                <li className="flex items-center">
                  <SpaIcon />
                  <span className="ml-2">Spa</span>
                </li>
                <li className="flex items-center">
                  <Drycleancon />
                  <span className="ml-2">Dry cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Room Options Section */}
      <div id="rooms" ref={roomsRef} className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 border-b border-amber-400 pb-2 mb-4 inline-block">
          Room options & pricing
        </h2>

        {/* Room listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className=" hidden md:block gap-6 mb-6">
              <div className="md:col-span-2 flex items-center space-x-4">
                <div className="flex-1">
                  <div className="block text-sm text-gray-500 mb-1">
                    Guests & Rooms
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className="flex-1 w-full text-left"
                        variant="outline"
                      >
                        {guestData.adults} Adult
                        {guestData.adults > 1 ? "s" : ""}, {guestData.rooms}{" "}
                        Room
                        {guestData.rooms > 1 ? "s" : ""}
                        {guestData.children > 0
                          ? `, ${guestData.children} Children`
                          : ""}
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                      <GuestSelectionModal
                        guestData={guestData}
                        onChange={setGuestData}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex-1">
                  <label className="block text-sm text-gray-500 mb-1">
                    Check In
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="w-full p-2 pr-8 border rounded-md text-left relative bg-white">
                        {checkInDate
                          ? `${checkInDate}`
                          : // ? format(checkInDate, "EEE, dd MMM yyyy")
                            "Select date"}
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={checkInDate}
                        onSelect={setCheckInDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex-1">
                  <label className="block text-sm text-gray-500 mb-1">
                    Check Out
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="w-full p-2 pr-8 border rounded-md text-left relative bg-white">
                        {checkOutDate
                          ? `${checkOutDate}`
                          : // ? format(checkOutDate, "EEE, dd MMM yyyy")
                            "Select date"}
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={checkOutDate}
                        onSelect={setCheckOutDate}
                        initialFocus
                        disabled={(date) =>
                          (checkInDate ? date < checkInDate : false) ||
                          date < new Date()
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="md:col-span-1">
                <Button className="w-fit p-5 rounded-full font-[600] text-[16px] mt-6 bg-[#076476] hover:bg-teal-700">
                  Check Availability
                </Button>
              </div>
            </div>
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="border p-2  rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => openRoomModal(room)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/3 h-50">
                    <img
                      src={
                        room.image ||
                        "https://plus.unsplash.com/premium_photo-1746718185563-9d3782845c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={room.name}
                      className="md:object-cover w-full h-full rounded-2xl"
                    />
                    {room.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-[#076476] text-white text-xs font-bold px-2 py-1 rounded">
                        {room.discount}% Off
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 p-2   flex-col">
                    <div className=" flex">
                      <div className=" flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold">{room.name}</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-2 mt-3">
                          <div className="flex items-center text-sm">
                            <span className="mr-2">
                              <SquareMeterIcon />
                            </span>
                            <span>{room.size} meter square</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="mr-2">
                              <BedIcon />
                            </span>
                            <span>{room.beds}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="mr-2">
                              <SleepsIcon />
                            </span>
                            <span>Sleeps {room.sleeps}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="mr-2">
                              <Bathroomcon />
                            </span>
                            <span>{room.bathrooms} Bathrooms</span>
                          </div>
                        </div>
                      </div>

                      <div className="  flex flex-col items-end justify-between">
                        <i className="text-sm text-[#661C17] font-medium">
                          {room.roomsLeft} Rooms left
                        </i>
                        <div>
                          <div className="text-right">
                            <label className="block text-sm text-gray-500 mb-1">
                              Rooms
                            </label>
                            <div className="relative">
                              <input
                                type="number"
                                min={0}
                                max={room.roomsLeft}
                                value={selectedRooms[room.id] ?? 0}
                                onChange={(e) =>
                                  handleRoomQuantityChange(
                                    room.id,
                                    Number.parseInt(e.target.value, 10)
                                  )
                                }
                                onClick={(e) => e.stopPropagation()}
                                className="p-1 w-16 border rounded-md"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          {room.originalPrice !== room.price && (
                            <div className="text-sm line-through text-gray-500">
                              {formatCurrency(room.originalPrice)}
                            </div>
                          )}
                          <div className="text-xl font-bold md:text-teal-700">
                            {formatCurrency(room.price)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap  gap-3 mt-3">
                      {Object.keys(room.amenities)
                        .slice(0, 2)
                        .flatMap((category) =>
                          room.amenities[
                            category as keyof typeof room.amenities
                          ]
                            .slice(0, 2)
                            .map((amenity, idx) => (
                              <div
                                key={`${category}-${idx}`}
                                className="flex items-center text-sm"
                              >
                                <Check className="h-4 w-4 text-[#076476] mr-1" />
                                <span>{amenity}</span>
                              </div>
                            ))
                        )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-1 max-w-[350px]">
            <div className="border flex flex-col gap-4 rounded-md mb-4 overflow-hidden mt-6 p-4">
              <h3 className=" text-[16px] font-[700] mb-3">Make Enquiry</h3>
              <p className="text-[16px] text-[#5D6465] mb-3">
                Have questions you want answered?
              </p>
              <Button
                variant="outline"
                className=" p-3 rounded-3xl w-fit font-[700] text-[14px] border-[#076476] text-[#076476] hover:bg-teal-50"
              >
                Send Message
              </Button>
            </div>
            <div className="border px-4 rounded-md overflow-hidden sticky top-42 bg-[#E6F0F1]">
              <div className=" p-4 border-b">
                <h3 className="font-bold">Total Room</h3>
              </div>

              <div className="p-4">
                {roomSubtotals.map((item) => (
                  <div key={item.id} className="mb-2 border-b pb-4">
                    <div className="flex justify-between">
                      <span>
                        {item.quantity} {item.name}
                      </span>
                      <span>{formatCurrency(item.subtotal)}</span>
                    </div>
                    <div className="text-sm text-gray-500">1 night</div>
                  </div>
                ))}

                <div className=" mt-4 pt-3">
                  <div className="flex justify-between mb-2">
                    <span>Taxes & fees</span>
                    <span>{formatCurrency(taxes)}</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg mt-4 pt-3 border-t">
                    <span>Total Amount</span>
                    <span className="text-teal-700">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>

                <Button className="w-full p-5 rounded-full mt-4 bg-[#076476] hover:bg-teal-700">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div id="rules" ref={rulesRef} className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 border-b border-amber-400 pb-2 mb-4 inline-block">
          Rules
        </h2>

        <div className="border rounded-md overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Check in</td>
                <td className="p-4">From 9:00am</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Check out</td>
                <td className="p-4">Until 12:00noon</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Children and extra beds</td>
                <td className="p-4">
                  Children are welcome
                  <br />
                  Cribs/infant beds are not available
                  <br />
                  Rollaway not available
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Pets</td>
                <td className="p-4">Pets not allowed</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Cancellation policy</td>
                <td className="p-4">
                  Cancellation and prepayment policies vary according to
                  accommodation type.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Payment methods</td>
                <td className="p-4 flex space-x-2">
                  <VisaIcon />
                  <MasterIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ratings Section */}
      <div id="ratings" ref={ratingsRef}>
        <h2 className="text-xl font-bold text-slate-800 border-b border-amber-400 pb-2 mb-4 inline-block">
          Guest Ratings
        </h2>

        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-amber-800 text-white font-bold p-2 rounded mr-3">
              8.3
            </div>
            <div className="flex items-center gap-2">
              <div className="font-bold">Very Good</div>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <div className="text-sm text-gray-600">
                45 reviews{" "}
                <a href="#" className="text-[#076476] ml-2">
                  See all reviews
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="mb-4">
              <div className="flex justify-between mb-3">
                <span className="text-[16px] font-[700]">Cleanliness</span>
                <span className="text-sm font-medium">8.6</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="bg-[#076476] h-2 rounded-full"
                  style={{ width: "86%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-3">
                <span className="text-[16px] font-[700]">Comfort</span>
                <span className="text-sm font-medium">8.2</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="bg-[#076476] h-2 rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-3">
                <span className="text-[16px] font-[700]">
                  Staff Friendliness
                </span>
                <span className="text-sm font-medium">7.1</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="bg-amber-500 h-2 rounded-full"
                  style={{ width: "71%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-3">
                <span className="text-[16px] font-[700]">Facilities</span>
                <span className="text-sm font-medium">7.6</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="bg-amber-500 h-2 rounded-full"
                  style={{ width: "76%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-3">
                <span className="text-[16px] font-[700]">Value for Money</span>
                <span className="text-sm font-medium">8.5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="bg-[#076476] h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-3">
                <span className="text-[16px] font-[700]">Location</span>
                <span className="text-sm font-medium">8.2</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="bg-[#076476] h-2 rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-3">
                <span className="text-[16px] font-[700]">Wi-Fi</span>
                <span className="text-sm font-medium">4.9</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "49%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-bold">Peaceful Stay</div>
                  <div className="text-sm text-gray-600">
                    John • March 8, 2024
                  </div>
                </div>
                <div className="bg-amber-800 text-white font-bold  px-2  py-1 rounded text-sm">
                  8.3
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Impeccable service and super clean rooms. The location is
                perfect for both work and relaxation. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
            </div>

            <div className="border rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="font-bold">Had a great time</div>
                  <div className="text-sm text-gray-600">
                    Mary • February 23, 2024
                  </div>
                </div>
                <div className="bg-amber-800 text-white font-bold px-2  py-1 rounded text-sm">
                  8.9
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Impeccable service and super clean rooms. The location is
                perfect for both work and relaxation. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 border-b border-amber-400 pb-2 mb-4 inline-block">
          Similar Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {similarProperties.map((property) => (
            <HotelCard currency={""} ratingText={""} {...property} />
          ))}
        </div>
      </div>

      <RoomModal
        room={selectedRoom}
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        onAddRoom={handleAddRoom}
      />
    </div>
  );
}
