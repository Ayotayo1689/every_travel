import Container from "@/components/Container";

import HotelBanner from "@/components/HotelBanner";

import HotelSearch from "@/components/HotelSearch";

const HotelList = () => {
  return (
    <div>
      <HotelBanner />

      <div className="w-full">
        <Container>
          <HotelSearch />
        </Container>
      </div>
    </div>
  );
};

export default HotelList;
