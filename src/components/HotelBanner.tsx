import HomeBanner from "../assets/HomeBanner.svg";
import BannerSearch from "./BannerSearch";

export default function HotelBanner() {
  return (
    <div
      data-aos="fade-right"
      className="relative min-h-[50dvh] w-full flex flex-col p-4 md:items-center justify-end pb-8"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${HomeBanner}')`,
          filter: "brightness(0.7)",
          backgroundPosition: "bottom",
        }}
      />

      <div className="relative z-10 md:text-center md:px-4 md:mx-auto mb-8">
        <h1 className="md:text-[60px] text-[40px] mt-16 md:mt-0 flex md:justify-center md:items-center gap-3 font-[700] font-poppins text-white">
          Find Your <br className="" /> Perfect Stay
        </h1>
      </div>

      <BannerSearch />
    </div>
  );
}
