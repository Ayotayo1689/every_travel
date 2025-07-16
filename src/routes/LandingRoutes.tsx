import { Route } from "react-router-dom"
import { lazy } from "react"
import MainLayout from "@/layouts/MainLayout"

// Landing pages
const Home = lazy(() => import("@/pages/Home"))
const BookingForm = lazy(() => import("@/pages/BookingForm"))
const HotelId = lazy(() => import("@/pages/HotelId"))
const Hotel = lazy(() => import("@/pages/Hotel"))
const HotelList = lazy(() => import("@/pages/HotelList"))
const Contact = lazy(() => import("@/pages/Contact"))
const TransportationBooking = lazy(() => import("@/pages/Rides"))
const CarHire = lazy(() => import("@/pages/CarHire"))
const CancelBooking = lazy(() => import("@/pages/CancelBooking"))
const PaymentSuccessful = lazy(() => import("@/pages/PaymenySuccessful"))

export const LandingRoutes = [
  <Route
    key="home"
    path="/"
    element={
      <MainLayout>
        <Home />
      </MainLayout>
    }
  />,
  <Route
    key="hotels"
    path="/hotels"
    element={
      <MainLayout>
        <Hotel />
      </MainLayout>
    }
  />,
  <Route
    key="hotels-list"
    path="/hotels_list"
    element={
      <MainLayout>
        <HotelList />
      </MainLayout>
    }
  />,
  <Route
    key="contact"
    path="/contact"
    element={
      <MainLayout>
        <Contact />
      </MainLayout>
    }
  />,
  <Route
    key="airport-rides"
    path="/airport-rides"
    element={
      <MainLayout>
        <TransportationBooking />
      </MainLayout>
    }
  />,
  <Route
    key="car-hire"
    path="/car-hire"
    element={
      <MainLayout>
        <CarHire />
      </MainLayout>
    }
  />,
  <Route
    key="hotel-detail"
    path="/hotel/:id"
    element={
      <MainLayout>
        <HotelId />
      </MainLayout>
    }
  />,
  <Route
    key="hotel-booking"
    path="/hotel/:id/booking"
    element={
      <MainLayout>
        <BookingForm />
      </MainLayout>
    }
  />,
  <Route
    key="cancel-booking"
    path="/hotel/cancel_booking"
    element={
      <MainLayout>
        <CancelBooking />
      </MainLayout>
    }
  />,
  <Route
    key="payment-success"
    path="/hotel/payment_success"
    element={
      <MainLayout>
        <PaymentSuccessful />
      </MainLayout>
    }
  />,
]
