import Container from "@/components/Container";
import TravelBooking from "@/components/HomeBanner";
import HotelCard from "@/components/HotelCard";
import HotelDealsCarousel from "@/components/HotelCarousel";
import TravelOffers from "@/components/TravelOffers";
import { ArrowUpRight } from "lucide-react";
import GlobeIll from "../assets/GlobeIllustration.svg";

import VerifySvg from "../assets/Verify.svg";
import AllInOneSvg from "../assets/AllInOne.svg";
import ReliableSvg from "../assets/Reliable.svg";
import NewsAndArticle from "@/components/NewsAndArticle";
import NewsletterBanner from "@/components/NewsLetterBanner";

const Home = () => {
  interface DestinationProps {
    id: number;
    name: string;
    hotels: number;
    image: string;
  }

  const destinations: DestinationProps[] = [
    {
      id: 1,
      name: "Lagos",
      hotels: 658,
      image:
        "https://images.unsplash.com/photo-1745428847642-34364849140e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Abuja",
      hotels: 335,
      image:
        "https://images.unsplash.com/photo-1745428847642-34364849140e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Port Harcourt",
      hotels: 234,
      image:
        "https://images.unsplash.com/photo-1745428847642-34364849140e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Kaduna",
      hotels: 113,
      image:
        "https://images.unsplash.com/photo-1745428847642-34364849140e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const hotels = [
    {
      id: 1,
      name: "The Saffron Hotel",
      location: "Lekki Phase 1, Lagos",
      price: 135000,
      currency: "₦",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 8.3,
      ratingText: "Very Good",
      reviews: 45,
      discount: 20,
      featured: true,
    },
    {
      id: 2,
      name: "The Edifice Hotel",
      location: "Portharcourt",
      price: 245000,
      currency: "₦",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 7.4,
      ratingText: "Good",
      reviews: 45,
      discount: 5,
    },
    {
      id: 3,
      name: "Mayfair Hotel",
      location: "Ikeja, Lagos",
      price: 105000,
      currency: "₦",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 8.5,
      ratingText: "Very Good",
      reviews: 45,
      discount: 20,
    },
  ];

  const allHotels = [
    ...hotels
      .slice(hotels.length - 2)
      .map((hotel) => ({ ...hotel, id: hotel.id - hotels.length })),
    ...hotels,
    ...hotels
      .slice(0, 2)
      .map((hotel) => ({ ...hotel, id: hotel.id + hotels.length })),
  ];
  return (
    <div>
      <TravelBooking />

      <div className="w-full">
        <Container>
          <TravelOffers />
        </Container>
        <Container>
          <div data-aos="fade-right" className="flex  w-full gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="flex-1 h-[400px] ">
                <div className="flex h-[100%] items-center justify-center flex-col">
                  {index === 0 && (
                    <div className=" mb-6 w-full  ">
                      <h2 className="text-[40px] font-poppins font-[700] text-gray-900 leading-tight">
                        Top
                        <br />
                        Travel
                        <br />
                        Destinations
                      </h2>
                    </div>
                  )}

                  <div className=" flex-1 min-h-[60%] w-full  ">
                    <div className="relative h-[100%]   overflow-hidden rounded-xl group cursor-pointer">
                      <div className="relative  w-full h-[100%]  ">
                        <img
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute text-teal-900 inset-0 bg-[#032A3280] group-hover:bg-[#032a32e0] transition-colors duration-300"></div>

                        <div className=" p-4 bottom-0 w-full  absolute">
                          <div className="flex group-hover:bg-[#ffffff56] rounded-2xl items-center p-3 justify-between">
                            <div className=" bottom-0 left-0  z-10">
                              <h3 className="text-white text-2xl font-semibold">
                                {destination.name}
                              </h3>
                              <p className="text-white text-sm">
                                {destination.hotels} hotels
                              </p>
                            </div>

                            <div className=" w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-yellow-100 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                                <ArrowUpRight className="h-5 w-5 text-yellow-500" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index === destinations.length - 1 && (
                    <div className=" mt-6 w-full  ">
                      <p className="text-[20px] font-[700]">
                        Discover the best places to visit, stay, and explore.
                        When it comes to planning a dream vacation, some
                        destinations stand out
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Container>
          <HotelDealsCarousel />
        </Container>

        <Container>
          <div data-aos="flip-left" className="w-full  mx-auto px-4 py-8">
            <div className="mb-6">
              <h2 className="text-[40px] font-poppins font-[700] text-[#032A32] mb-2">
                Recommended Hotels for You
              </h2>
              <p className="text-[#1D1F1F] text-[18px] font-[400]">
                Handpicked just for you! Explore hotels tailored to your
                preferences, past searches, and travel history for a seamless
                stay.{" "}
              </p>
            </div>
            <div className="flex  gap-4  ">
              {hotels.map((hotel, index) => (
                <div key={`${hotel.id}-${index}`}>
                  <HotelCard {...hotel} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div
            style={{
              backgroundImage: `url("${GlobeIll}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-right"
            className=" w-full "
          >
            <h1 className="font-poppins text-center text-[#032A32] text-[40px] font-[700] mb-6">
              Enjoy Every Trip, Every Stay, EveryTravell!
            </h1>
            <div className="flex justify-between min-h-[80dvh]  w-full">
              <div className="flex-1 max-w-[320px]  items-center gap-6 justify-center flex flex-col">
                <div className="w-full border p-4 rounded-2xl aspect-video bg-[#fafeff] ">
                  <img src={AllInOneSvg} alt="" />
                  <p className="text-[20px] font-[700] text-[#032A32] mt-4">
                    All in One{" "}
                  </p>
                  <p className="text-[16px]">
                    Book hotels, car rentals, airport pickups, and corporate
                    travel effortlessly—no need for multiple app
                  </p>
                </div>
                <div className="w-full border p-4 rounded-2xl aspect-video bg-[#fafeff] ">
                  <img src={ReliableSvg} alt="" />
                  <p className="text-[20px] font-[700] text-[#032A32] mt-4">
                    Reliable Car Rides
                  </p>
                  <p className="text-[16px]">
                    Enjoy hassle-free transportation with trusted service
                    providers.
                  </p>
                </div>
              </div>
              <div className="flex-1 max-w-[320px]  items-center gap-6 justify-center flex flex-col">
                <div className="w-full border p-4 rounded-2xl aspect-video bg-[#fafeff] ">
                  <img src={AllInOneSvg} alt="" />
                  <p className="text-[20px] font-[700] text-[#032A32] mt-4">
                    Personalized Experience
                  </p>
                  <p className="text-[16px]">
                    Smart recommendations based on your preferences and past
                    bookings.
                  </p>
                </div>
                <div className="w-full border p-4 rounded-2xl aspect-video bg-[#fafeff] ">
                  <img src={VerifySvg} alt="" />
                  <p className="text-[20px] font-[700] text-[#032A32] mt-4">
                    Verified Services
                  </p>
                  <p className="text-[16px]">
                    We partner with only verified hotels and transport operators
                    to ensure a seamless experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <NewsAndArticle />
        </Container>
        <Container>
          <NewsletterBanner />
        </Container>
      </div>
    </div>
  );
};

export default Home;
