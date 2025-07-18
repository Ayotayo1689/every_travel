"use client";

import { useState } from "react";
import {   Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhotoGalleryModal } from "./PhotoGalleryModal";
import { ImageCarouselModal } from "./ImageCarouselModal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "./Container";
import { ShareIcon } from "@/assets/icons/Icons";
import HotelDetails from "./HotelDetails";
import MobileImageCarousel from "./HotelCarouselImages";

// Sample hotel images
const hotelImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1743784412612-668571c271bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel room with bed and sofa",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1746311372686-e164b0bcb333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel lobby with wooden panels",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1746950862738-399b20e6f0eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel swimming pool with loungers",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1746958582395-bfd72cadf799?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel reception area",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1746950862509-959ed92c42b8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel exterior with pool",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1722971380810-a4f29b2efc36?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel bedroom with balcony",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1745613184657-3c8dcd5f079a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Another hotel room view",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1744578413523-33596836891b?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Another view of hotel lobby",
  },
  {
    id: 9,
    src: "https://plus.unsplash.com/premium_photo-1708630833427-be145ebe474b?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel bedroom with balcony",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1745827214444-87a9894fc6b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Another hotel room view",
  },
  {
    id: 11,
    src: "https://plus.unsplash.com/premium_photo-1678233319969-63662b4244f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Another view of hotel lobby",
  },
];

export default function HotelGallery() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = () => {
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
    setCarouselOpen(true);
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
  };

  // Display first 4 images in the main view
  const displayImages = hotelImages.slice(0, 6);
  const remainingCount = hotelImages.length - 6;

  return (
    <div className="">
      <div className="  bg-[#032A32] text-white ">
        <Container Bg>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <div className="text-[#fff] font-[300]">Home</div>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#fff]" color="#fff" />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <div className="text-[#fff] font-[300]">Hotel</div>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#fff]" />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <div className="text-[#fff] font-[300]">Lagos</div>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#fff]" />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <div className="text-[#fff] font-[500]">
                    The Saffron Hotel
                  </div>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </div>
      <Container>
        <div className=" ">
          {/* Hotel Header */}
          <div className="flex mb-6 justify-between items-center ">
            <div className="w-full">
              <div className="flex w-full justify-between items-center">
                <div className="flex text-amber-400 mb-1">
                  <span className="text-[25px]">★</span>
                  <span className="text-[25px]">★</span>
                  <span className="text-[25px]">★</span>
                  <span className="text-[25px]">★</span>
                  <span className="text-[25px]">★</span>
                </div>

                <div className="flex  gap-4 justify-between items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full md:bg-[#076476] text-[#076476] md:text-white hover:bg-teal-800"
                  >
                    <ShareIcon />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-0 md:border-2 md:border-[#076476] text-[16px] font-[700] text-[#076476] shadow-none hover:bg-teal-50"
                  >
                    <Heart className="h-5 w-5 mr-1" />
                    <span className="hidden md:block"> Save</span>
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Grand Crest Hotel
              </h1>
              <div className="flex items-center text-slate-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>45, Raul Road, Victoria Island, Lagos</span>
              </div>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="md:grid hidden grid-cols-12 gap-2 mb-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-9 row-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={displayImages[0].src || "/placeholder.svg"}
                  alt={displayImages[0].alt}
                  className="object-cover"
                  //   priority
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 lg:col-span-3">
              <div className="relative h-[195px] rounded-lg overflow-hidden   ">
                <img
                  src={displayImages[1].src || "/placeholder.svg"}
                  alt={displayImages[1].alt}
                  className="object-cover "
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 lg:col-span-3">
              <div className="relative h-[195px] rounded-lg overflow-hidden   ">
                <img
                  src={displayImages[2].src || "/placeholder.svg"}
                  alt={displayImages[2].alt}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 lg:col-span-3">
              <div className="relative h-[195px] rounded-lg overflow-hidden   ">
                <img
                  src={displayImages[3].src || "/placeholder.svg"}
                  alt={displayImages[3].alt}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 lg:col-span-3">
              <div className="relative h-[195px] rounded-lg overflow-hidden   ">
                <img
                  src={displayImages[4].src || "/placeholder.svg"}
                  alt={displayImages[4].alt}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 lg:col-span-3">
              <div className="relative h-[195px] rounded-lg overflow-hidden   ">
                <img
                  src={displayImages[5].src || "/placeholder.svg"}
                  alt={displayImages[5].alt}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 lg:col-span-3">
              <div
                onClick={openGallery}
                className="relative h-[195px] rounded-lg overflow-hidden   "
              >
                <img
                  src={hotelImages[6].src || "/placeholder.svg"}
                  alt={hotelImages[6].alt}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">
                    +{remainingCount} images
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <MobileImageCarousel images={hotelImages} />
          </div>

          {/* Action Buttons */}

          {/* Photo Gallery Modal */}
          {galleryOpen && (
            <PhotoGalleryModal
              images={hotelImages}
              onClose={closeGallery}
              onImageClick={openCarousel}
            />
          )}

          {/* Image Carousel Modal */}
          {carouselOpen && (
            <ImageCarouselModal
              images={hotelImages}
              initialIndex={selectedImageIndex}
              onClose={closeCarousel}
            />
          )}

          <HotelDetails />
        </div>
      </Container>
    </div>
  );
}
