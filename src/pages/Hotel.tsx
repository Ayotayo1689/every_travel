import Container from "@/components/Container";
import HotelCard from "@/components/HotelCard";
import HotelDealsCarousel from "@/components/HotelCarousel";
import { ArrowRight } from "lucide-react";
import Networking from "../assets/Network.svg";
import HotelBanner from "@/components/HotelBanner";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/TypingText";
import ApartmentCard from "@/components/ApartmentCard";

const Hotel = () => {
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

  //   const everyNeed = [
  //     {
  //       id: 1,
  //       name: "The Saffron Hotel",
  //       location: "Lekki Phase 1, Lagos",
  //       price: 135000,
  //       currency: "₦",
  //       image:
  //         "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       rating: 8.3,
  //       ratingText: "Very Good",
  //       reviews: 45,
  //       discount: 20,
  //       featured: true,
  //     },
  //     {
  //       id: 2,
  //       name: "The Edifice Hotel",
  //       location: "Portharcourt",
  //       price: 245000,
  //       currency: "₦",
  //       image:
  //         "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       rating: 7.4,
  //       ratingText: "Good",
  //       reviews: 45,
  //       discount: 5,
  //     },
  //     {
  //       id: 3,
  //       name: "Mayfair Hotel",
  //       location: "Ikeja, Lagos",
  //       price: 105000,
  //       currency: "₦",
  //       image:
  //         "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       rating: 8.5,
  //       ratingText: "Very Good",
  //       reviews: 45,
  //       discount: 20,
  //     },
  //     {
  //       id: 3,
  //       name: "Mayfair Hotel",
  //       location: "Ikeja, Lagos",
  //       price: 105000,
  //       currency: "₦",
  //       image:
  //         "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       rating: 8.5,
  //       ratingText: "Very Good",
  //       reviews: 45,
  //       discount: 20,
  //     },
  //   ];
  interface CategoryProps {
    title: string;
    description: string;
    image: string;
  }

  const everyNeed: CategoryProps[] = [
    {
      title: "Luxury Hotels",
      description: "Indulge in world-class comfort and premium amenities.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Business Hotels",
      description:
        "Perfect for corporate travelers with meeting facilities and business centers.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Beach Resorts",
      description:
        "Relax and unwind with stunning ocean views and beachfront access.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Budget Hotels",
      description:
        "Affordable accommodations without compromising on essential comforts.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const CategoryCard = ({ category }: { category: CategoryProps }) => {
    return (
      <div className="relative overflow-hidden rounded-lg group cursor-pointer h-[220px]">
        {/* Image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.title}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#032A3280] bg-gradient-to-t md:bg-none group-hover:bg-gradient-to-t from-[#03313a] via-[#07647673] to-transparent via-50% group-hover:via-70% transition-all duration-300"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 transform md:translate-y-[50px] translate-y-[-0px] group-hover:translate-y-[-0px] transition-transform duration-300 ease-in-out">
          <h3 className="text-[20px] font-[700]   text-white mb-2">
            {category.title}
          </h3>
          <p className="text-white opacity-100 max-w-[80%] text-[16px] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category.description}
          </p>
        </div>
      </div>
    );
  };

  const apartments = [
    {
      id: 1,
      name: "ABC Apartments",
      location: "Lekki Phase 1, Lagos",
      price: 40000,
      image:
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: 20,
      rating: 8.3,
      reviews: 45,
      bedrooms: 2,
      guests: 4,
      bathrooms: 3,
    },
    {
      id: 2,
      name: "Pearl Exquisite Apartment",
      location: "Lekki Phase 1, Lagos",
      price: 75000,
      image:
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: 25,
      rating: 8.3,
      reviews: 45,
      bedrooms: 3,
      guests: 6,
      bathrooms: 3,
    },
    {
      id: 3,
      name: "XYZ Homes and Apartment",
      location: "Ikeja, Lagos",
      price: 125000,
      image:
        "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 8.3,
      reviews: 45,
      bedrooms: 4,
      guests: 10,
      bathrooms: 5,
    },
  ];

  return (
    <div>
      <HotelBanner />

      <div className="w-full">
        <Container>
          <HotelDealsCarousel locationText={"In Lagos"} />
        </Container>

        <Container>
          <div data-aos="fade-down" className="w-full  mx-auto md:px-4 md:py-8">
            <div className="mb-6">
              <h2 className="md:text-[40px] text-[24px] font-poppins font-[700] text-[#032A32] mb-2">
                Recent Listings
              </h2>
              <p className="text-[#1D1F1F] text-[18px] font-[400]">
                Find newly added accommodations tailored to your travel needs
              </p>
            </div>
            <div className=" flex  md:grid md:grid-cols-3 flex-wrap gap-4  ">
              {hotels.map((hotel, index) => (
                <div key={`${hotel.id}-${index}`}>
                  <HotelCard {...hotel} />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div data-aos="fade-up" className="w-full  mx-auto md:px-4 md:py-8">
            <div className="mb-6">
              <h2 className="text-[24px] md:text-[40px] font-poppins font-[700] text-[#032A32] mb-2">
                Hotel for Every Need
              </h2>
              <p className="text-[#1D1F1F] text-[18px] mb-10 font-[400]">
                Discover your favorite stays based on your travel style and
                needs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {everyNeed.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
          </div>
        </Container>

        <Container>
          <div
            data-aos="fade-right"
            className="w-full  mx-auto md:px-4 md:py-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className=" ">
                <h2 className="md:text-[40px] text-[24px] font-poppins font-[700] text-[#032A32] mb-2">
                  Spacious Apartments for Every Journey
                </h2>
                <p className="text-[#1D1F1F] text-[18px] font-[400]">
                  Experience the perfect blend of home-like comfort and hotel
                  convenience.
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-[#076476] hidden md:flex hover:bg-white"
              >
                View More <ArrowRight />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apartments.map((apartment) => (
                <ApartmentCard key={apartment.id} {...apartment} />
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div data-aos="fade-left" className="  w-full flex gap-6">
            <div className="flex-1 rounded-2xl md:rounded-none md:rounded-l-3xl p-6 bg-[#E6F0F1]    ">
              <TypingText words={["List Your Property"]} speed />
              <div className="font-poppins mt-4 font-[700] text-[24px] md:text-[40px]">
                Join Our Network Today
              </div>
              <p className="text-[18px] mt-2">
                Reach thousands of travelers and boost your bookings by listing
                your property on EveryTravel. Whether you own a hotel,
                apartment, or vacation home, we help you connect with the right
                audience - effortlessly.
              </p>
              <Button className="rounded-3xl py-5 px-6 font-[700] text-[16px] bg-[#076476] hover:text-[#076476] hover:bg-[#FFC215] mt-10">
                List Your Property
              </Button>
            </div>

            <div className="flex-1 hidden  p-6 rounded-r-3xl md:flex justify-center items-center bg-[#043741]">
              <img src={Networking} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hotel;
