import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "@/layouts/MainLayout";
import Loader from "./components/Loader";

const Home = lazy(() => import("@/pages/Home"));
const BookingForm = lazy(() => import("@/pages/BookingForm"));
const HotelId = lazy(() => import("@/pages/HotelId"));
const Hotel = lazy(() => import("@/pages/Hotel"));
const HotelList = lazy(() => import("@/pages/HotelList"));
const Contact = lazy(() => import("@/pages/Contact"));
const TransportationBooking = lazy(() => import("@/pages/Rides"));
const CarHire = lazy(() => import("@/pages/CarHire"));
const CancelBooking = lazy(() => import("@/pages/CancelBooking"));
const PaymentSuccessful = lazy(() => import("@/pages/PaymenySuccessful"));

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      // once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotel />} />
            <Route path="/hotels_list" element={<HotelList />} />

            {/* <HotelSearch /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/airport-rides" element={<TransportationBooking />} />
            <Route path="/car-hire" element={<CarHire />} />
            <Route path="/hotel/:id" element={<HotelId />} />
            <Route path="/hotel/:id/booking" element={<BookingForm />} />
            <Route path="/hotel/cancel_booking" element={<CancelBooking />} />
            <Route path="/hotel/payment_success" element={<PaymentSuccessful />} />

            
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}
