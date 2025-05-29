import HomeBanner from "../assets/HomeBanner.svg";
import BannerSearch from "./BannerSearch";

export default function HotelBanner() {
  return (
    <div
      data-aos="fade-right"
      className="relative min-h-[50dvh] w-full flex flex-col items-center justify-end pb-8"
    >
    
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HomeBanner}')`,
          filter: "brightness(0.7)",
          backgroundPosition: "bottom",
        }}
      />

    
      <div className="relative z-10 text-center px-4 mx-auto mb-8">
        <h1 className="text-[60px]  flex justify-center items-center gap-3 font-[700] font-poppins text-white">
          Find Your Perfect Stay
        </h1>
      </div>

      <BannerSearch />
    </div>
  );
}
