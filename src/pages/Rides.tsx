import { useState } from "react";
import {
  CalendarIcon,
  Clock,
  MapPin,
  ChevronDown,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";


import CarBanner from "../assets/carHire.svg";
import SafetyFirst from "../assets/SafetyFirst.svg";
import ReasonableRates from "../assets/ReasonableRates.svg";
import OnTime from "../assets/onTime.svg";
import FleetVariety from "../assets/FleetVariety.svg";
import Howitworks from "../assets/Howitworks.svg";
import HowitworksArrow from "../assets/HowitworkArror.svg";

import Container from "@/components/Container";
import FAQSection from "@/components/Faq";

export default function TransportationBooking() {
  const [activeTab, setActiveTab] = useState<"airport" | "car">("airport");
  const [direction, setDirection] = useState<"from" | "to">("from");

  // Date states
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();

  // Time states
  const [pickupTime, setPickupTime] = useState<string>("10:30");
  const [dropoffTime, setDropoffTime] = useState<string>("10:30");

  // Generate time options in 30-minute intervals
  const timeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (const minute of [0, 30]) {
        const hourFormatted = hour.toString().padStart(2, "0");
        const minuteFormatted = minute.toString().padStart(2, "0");
        const time = `${hourFormatted}:${minuteFormatted}`;
        options.push(time);
      }
    }
    return options;
  };

  return (
    <div  className="w-full min-h-screen ">
      {/* Hero section with background image */}
      <div
             className="w-full p-4 flex md:justify-center items-center flex-col relative h-[80%] md:h-[400px] bg-cover bg-center "
             style={{
               backgroundImage: `url('${CarBanner}')`,
               //   backgroundPosition: "center 30%",
             }}
           >
             <div className=" flex items-center justify-center">
               <h1 className="text-white mt-30 md:mt-0 text-[40px]  md:text-[60px] font-[700] font-poppins md:text-center">
                 Flexible Rides for Every Travel
               </h1>
             </div>
             <div className="bg-[#E6F0F166]  md:mt-0 rounded-2xl relative top-[100px] md:absolute md:top-[75%] w-[90vw] p-4 md:w-6xl">
               <div className="bg-white px-4  md:w-full rounded-lg overflow-hidden">
                 <div className="flex gap-2 w-fit border-b">
                   <button
                     onClick={() => setActiveTab("airport")}
                     className={cn(
                       "md:px-6 px-3 py-4 text-gray-700 text-[14px] font-medium relative",
                       activeTab === "airport" && "text-[#076476]"
                     )}
                   >
                     Airport Transportation
                     {activeTab === "airport" && (
                       <div className="absolute bottom-0 left-0 w-full rounded-4xl h-[2.5px] bg-[#076476]"></div>
                     )}
                   </button>
                   <button
                     onClick={() => setActiveTab("car")}
                     className={cn(
                       "md:px-6 py-4 px-3 text-[14px] text-gray-700 font-medium relative",
                       activeTab === "car" && "text-[#076476]"
                     )}
                   >
                     Car Hire
                     {activeTab === "car" && (
                       <div className="absolute bottom-0 left-0 w-full rounded-4xl h-[2.5px] bg-[#076476]"></div>
                     )}
                   </button>
                 </div>
     
                 {activeTab === "airport" && (
                   <div className="md:px-2 py-6 z-50 ">
                     <div className="flex  gap-2 mb-6">
                       <button
                         onClick={() => setDirection("from")}
                         className={cn(
                           "px-4 py-2 rounded-full border text-sm",
                           direction === "from"
                             ? "bg-[#E6F0F1] border-[#076476] text-[#076476]"
                             : "bg-white border-gray-200 text-gray-700"
                         )}
                       >
                         From airport
                       </button>
                       <button
                         onClick={() => setDirection("to")}
                         className={cn(
                           "px-4 py-2 rounded-full border text-sm",
                           direction === "to"
                             ? "bg-[#E6F0F1] border-[#076476] text-[#076476]"
                             : "bg-white border-gray-200 text-gray-700"
                         )}
                       >
                         To airport
                       </button>
                     </div>
     
                     <div className="bg-white flex flex-col md:flex-row justify-between item-center rounded-2xl border  p-2  md:p-2">
                       <div className="flex md:flex-row gap-8 flex-col flex-1 justify-between md:gap-2  ">
                         <div className="flex  justify-center flex-1 flex-col bg-white rounded-md">
                           <div className="flex items-center text-2xl space-x-2 text-gray-500 px-2 ">
                             <MapPin className="text-gray-400 h-5 w-5" />
                             <span className="text-[14px] font-[400]">
                               Pickup location
                             </span>
                           </div>
                           <Input
                             type="text"
                             placeholder="Airport name"
                             className="border-0 placeholder:text-[#b9b9b9] bg-transparent md:text-[16px] shadow-none  font-[400] focus-visible:ring-0 focus-visible:ring-offset-0"
                           />
                         </div>
     
                         <div className="flex   justify-center flex-1  flex-col space-y-1 bg-white rounded-md">
                           <div className="flex items-center text-2xl space-x-2 text-gray-500 px-2 ">
                             <MapPin className="text-gray-400 h-5 w-5" />
                             <span className="text-[14px] font-[400]">
                               Drop-off location
                             </span>
                           </div>
                           <Input
                             type="text"
                             placeholder="Street/hotel name"
                             className="border-0 placeholder:text-[#b9b9b9] bg-transparent md:text-[16px] shadow-none  font-[400] focus-visible:ring-0 focus-visible:ring-offset-0"
                           />
                         </div>
     
                         <div className="flex   justify-center flex-1  flex-col space-y-1 bg-white rounded-md">
                           <div className="flex items-center text-2xl space-x-2 text-gray-500 px-2 ">
                             <User className="text-gray-400 h-5 w-5" />
                             <span className="text-[14px] font-[400]">
                               Travelers
                             </span>
                           </div>
                           <Select defaultValue="1">
                             <SelectTrigger className="w-full border-none">
                               <SelectValue placeholder="Select travelers" />
                             </SelectTrigger>
                             <SelectContent>
                               <SelectItem value="1">1 Traveler</SelectItem>
                               <SelectItem value="2">2 Travelers</SelectItem>
                               <SelectItem value="3">3 Travelers</SelectItem>
                               <SelectItem value="4">4 Travelers</SelectItem>
                               <SelectItem value="5">5+ Travelers</SelectItem>
                             </SelectContent>
                           </Select>
                         </div>
     
                         <div className="flex   justify-center flex-1  flex-col space-y-1  bg-white rounded-md">
                           <div className="flex items-center space-x-2 text-gray-500 px-2 ">
                             <CalendarIcon className="h-5 w-5" />
                             <span className="text-[14px] font-[400]">
                               Pickup date
                             </span>
                           </div>
                           <Popover>
                             <PopoverTrigger asChild>
                               <button
                                 className={cn(
                                   "w-full flex items-center justify-between rounded-md border-none p-2 text-left text-sm",
                                   !pickupDate && "text-gray-500"
                                 )}
                               >
                                 {pickupDate ? `${pickupDate}` : "Select date"}
                                 <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                               </button>
                             </PopoverTrigger>
                             <PopoverContent className="w-auto p-0" align="start">
                               <Calendar
                                 mode="single"
                                 selected={pickupDate}
                                 onSelect={setPickupDate}
                                 initialFocus
                               />
                             </PopoverContent>
                           </Popover>
                         </div>
     
                         <div className="flex   justify-center flex-[0.8] flex-col space-y-1 bg-white rounded-md">
                           <div className="flex items-center space-x-2 text-gray-500 px-2 ">
                             <Clock className="h-5 w-5" />
                             <span className="text-[14px] font-[400]">
                               Pickup time
                             </span>
                           </div>
                           <Select value={pickupTime} onValueChange={setPickupTime}>
                             <SelectTrigger className="w-full border-none">
                               <SelectValue placeholder="Select time" />
                             </SelectTrigger>
                             <SelectContent>
                               {timeOptions().map((time) => (
                                 <SelectItem key={time} value={time}>
                                   {time}
                                 </SelectItem>
                               ))}
                             </SelectContent>
                           </Select>
                         </div>
                       </div>
     
                       <button className="bg-[#076476] md:ml-3 hover:text-[#076476] font-[700] hover:bg-[#FFC215] rounded-full md:rounded-none md:rounded-r-2xl h-full  text-white md:px-8 mt-4 md:mt-0 p-3 md:py-6">
                         Search
                       </button>
                     </div>
                   </div>
                 )}
     
                 {activeTab === "car" && (
                   <div className="px-2 py-6">
                     <div className="grid border  p-4 mt-1 rounded-lg grid-cols-1 md:grid-cols-6 gap-4">
                       <div className="md:col-span-1">
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                           <MapPin className="w-4 h-4" />
                           <span className="text-sm">Pickup location</span>
                         </div>
                         <input
                           type="text"
                           placeholder="Enter location"
                           className="w-full p-2  rounded-md"
                         />
                       </div>
                       <div className="md:col-span-1">
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                           <MapPin className="w-4 h-4" />
                           <span className="text-sm">Drop-off location</span>
                         </div>
                         <input
                           type="text"
                           placeholder="Enter location"
                           className="w-full p-2  rounded-md"
                         />
                       </div>
                       <div className="md:col-span-1">
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                           <CalendarIcon className="w-4 h-4" />
                           <span className="text-sm">Pickup date</span>
                         </div>
                         <Popover>
                           <PopoverTrigger asChild>
                             <button
                               className={cn(
                                 "w-full flex items-center justify-between rounded-md  p-2 text-left text-sm",
                                 !pickupDate && "text-gray-500"
                               )}
                             >
                               {pickupDate ? `${pickupDate}` : "Select date"}
                               <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                             </button>
                           </PopoverTrigger>
                           <PopoverContent className="w-auto p-0" align="start">
                             <Calendar
                               mode="single"
                               selected={pickupDate}
                               onSelect={setPickupDate}
                               initialFocus
                             />
                           </PopoverContent>
                         </Popover>
                       </div>
                       <div className="md:col-span-1">
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                           <Clock className="w-4 h-4" />
                           <span className="text-sm">Pickup time</span>
                         </div>
                         <Select value={pickupTime} onValueChange={setPickupTime}>
                           <SelectTrigger className="w-full border-none">
                             <SelectValue placeholder="Select time" />
                           </SelectTrigger>
                           <SelectContent>
                             {timeOptions().map((time) => (
                               <SelectItem key={time} value={time}>
                                 {time}
                               </SelectItem>
                             ))}
                           </SelectContent>
                         </Select>
                       </div>
                       <div className="md:col-span-1">
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                           <CalendarIcon className="w-4 h-4" />
                           <span className="text-sm">Drop-off date</span>
                         </div>
                         <Popover>
                           <PopoverTrigger asChild>
                             <button
                               className={cn(
                                 "w-full flex items-center justify-between rounded-md  p-2 text-left text-sm",
                                 !dropoffDate && "text-gray-500"
                               )}
                             >
                               {dropoffDate ? `${dropoffDate}` : "Select date"}
                               <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                             </button>
                           </PopoverTrigger>
                           <PopoverContent className="w-auto p-0" align="start">
                             <Calendar
                               mode="single"
                               selected={dropoffDate}
                               onSelect={setDropoffDate}
                               initialFocus
                             />
                           </PopoverContent>
                         </Popover>
                       </div>
                       <div className="md:col-span-1">
                         <div className="flex items-center gap-2 text-gray-500 mb-1">
                           <Clock className="w-4 h-4" />
                           <span className="text-sm">Drop-off time</span>
                         </div>
                         <Select value={dropoffTime} onValueChange={setDropoffTime}>
                           <SelectTrigger className="w-full border-none">
                             <SelectValue placeholder="Select time" />
                           </SelectTrigger>
                           <SelectContent>
                             {timeOptions().map((time) => (
                               <SelectItem key={time} value={time}>
                                 {time}
                               </SelectItem>
                             ))}
                           </SelectContent>
                         </Select>
                       </div>
                     </div>
     
                     <div className="mt-10">
                       <button className="rounded-full  font-[700] w-full md:max-w-[200px] text-[16px] bg-[#076476] px-8 min-w-[200px] py-2.5 text-white hover:text-[#076476] hover:bg-[#ffce44]">
                         Search
                       </button>
                     </div>
                   </div>
                 )}
               </div>
             </div>
           </div>
     
           {/* Booking card */}
           <Container>
             <div data-aos="fade-right" className=" w-full pt-40  md:pt-40 mx-auto ">
               <div
                
                 className="custom-background md:mt-10 md:pb-32 md:pt-10   mb-4 flex md:flex-row flex-col justify-center items-center gap-14 md:gap-8 "
               >
                 <div className="text-center max-w-[250px] relative">
                   <div className=" mb-2 w-fit mx-auto flex items-center justify-center ">
                     <img src={SafetyFirst} alt="" />
                   </div>
                   <h3 className="text-[20px] font-[700] mb-2">Safety First</h3>
                   <p className="text-black text-[16px]">
                     Vetted and courteous drivers for a stress-free experience
                   </p>
                 </div>
     
                 <div className="text-center max-w-[250px] relative">
                   <div className=" mb-2 w-fit mx-auto flex items-center justify-center ">
                     <img src={ReasonableRates} alt="" />
                   </div>
                   <h3 className="text-[20px] font-[700] mb-2">Reasonable Rates</h3>
                   <p className="text-black text-[16px]">
                     Affordable, transparent pricing with no hidden charges
                   </p>
                 </div>
     
                 <div className="text-center max-w-[250px] relative">
                   <div className=" mb-2 w-fit mx-auto flex items-center justify-center ">
                     <img src={OnTime} alt="" />
                   </div>
                   <h3 className="text-[20px] font-[700] mb-2">On-Time Service</h3>
                   <p className="text-black text-[16px]">
                     Punctual pickups and reliable drop-offs
                   </p>
                 </div>
     
                 <div className="text-center max-w-[250px]">
                   <div className=" mb-2 w-fit mx-auto flex items-center justify-center ">
                     <img src={FleetVariety} alt="" />
                   </div>
                   <h3 className="text-[20px] font-[700] mb-2">Fleet Variety</h3>
                   <p className="text-black text-[16px]">
                     Wide range of vehicles to fit your travel needs.
                   </p>
                 </div>
               </div>
             </div>
           </Container>
      <div  data-aos="fade-left" className=" bg-[#E6F0F1]">
        <Container Bg>
          <div className="w-full">
            <div className="container mx-auto md:py-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-start">
                {/* Image Collage */}
                <img
                  src={Howitworks}
                  alt="Business traveler with luggage"
                  className=" object-fit border"
                />

                {/* Content */}
                <div className="space-y-8 ">
                  <div>
                    <h2 className="text-[24px]  md:text-[40px] font-poppins font-[700] text-[#032A32] mb-4">
                      How it Works
                    </h2>
                    <p className="text-lg text-gray-700  text-[18px]">
                      Booking your ride has never been easier.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex justify-start items-start gap-4">
                      <img src={HowitworksArrow} alt="" />

                      <div>
                        <h3 className="text-[20px] font-[700] text-[#0a3141] mb-2">
                          Book Ahead
                        </h3>
                        <p className="text-gray-700 text-[18px]">
                          Enter your booking details and choose your preferred
                          vehicle. Get instant confirmation and enjoy the
                          flexibility to cancel for free up to 24 hours before
                          your scheduled pickup
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex justify-start items-start gap-4">
                      <img src={HowitworksArrow} alt="" />

                      <div>
                        <h3 className="text-[20px] font-[700] text-[#0a3141] mb-2">
                          Meet your driver
                        </h3>
                        <p className="text-gray-700 text-[18px]">
                          Your driver will be waiting at the designated pickup
                          location. Your flight will be monitored in real-time
                          to adjust for delays or early arrivals and the driver
                          will be there when you land.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex justify-start items-start gap-4">
                      <img src={HowitworksArrow} alt="" />

                      <div>
                        <h3 className="text-[20px] font-[700] text-[#0a3141] mb-2">
                          Sit Back & Enjoy the Ride
                        </h3>
                        <p className="text-gray-700 text-[18px]">
                          Relax in a clean, comfortable vehicle with
                          professional service. Arrive at your destination
                          safely and on time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <FAQSection/>
      </div>
    </div>
  );
}
