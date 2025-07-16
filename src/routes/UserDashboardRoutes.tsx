import { Route } from "react-router-dom";
import { lazy } from "react";
import UserDashboardLayout from "@/layouts/UserDashboardLayout";

// User Dashboard pages
const UserProfile = lazy(() => import("@/pages/dashboard/user/Profile"));
const UserWallet = lazy(() => import("@/pages/dashboard/user/Wallet"));
const UserBookings = lazy(() => import("@/pages/dashboard/user/Bookings"));
const UserHotels = lazy(() => import("@/pages/dashboard/user/Hotels"));
const UserAirportRides = lazy(
  () => import("@/pages/dashboard/user/AirportRides")
);
const UserCarHires = lazy(() => import("@/pages/dashboard/user/CarHires"));
const UserSaved = lazy(() => import("@/pages/dashboard/user/Saved"));
const UserOffers = lazy(() => import("@/pages/dashboard/user/Offers"));
const UserSettings = lazy(() => import("@/pages/dashboard/user/Settings"));
const UserHelp = lazy(() => import("@/pages/dashboard/user/Help"));
const BookingDetails = lazy(
  () => import("@/pages/dashboard/user/BookingDetails")
);

const AirportRideBookingDetails = lazy(
  () => import("@/pages/dashboard/user/AirportRideBookingDetails")
);
const HotelBookingDetails = lazy(
  () => import("@/pages/dashboard/user/HotelBookingDetails")
);

export const UserDashboardRoutes = [
  <Route
    key="user-profile"
    path="/dashboard/user/profile"
    element={
      <UserDashboardLayout>
        <UserProfile />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-wallet"
    path="/dashboard/user/wallet"
    element={
      <UserDashboardLayout>
        <UserWallet />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-bookings"
    path="/dashboard/user/bookings"
    element={
      <UserDashboardLayout>
        <UserBookings />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-hotels"
    path="/dashboard/user/bookings/hotels"
    element={
      <UserDashboardLayout>
        <UserHotels />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-airport-rides"
    path="/dashboard/user/bookings/airport-rides"
    element={
      <UserDashboardLayout>
        <UserAirportRides />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-car-hires"
    path="/dashboard/user/bookings/car-hires"
    element={
      <UserDashboardLayout>
        <UserCarHires />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-booking-details"
    path="/dashboard/user/bookings/hotels/:id"
    element={
      <UserDashboardLayout>
        <HotelBookingDetails />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-booking-details"
    path="/dashboard/user/bookings/airport-rides/:id"
    element={
      <UserDashboardLayout>
        <AirportRideBookingDetails />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-booking-details"
    path="/dashboard/user/bookings/car-hires/:id"
    element={
      <UserDashboardLayout>
        <BookingDetails />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-saved"
    path="/dashboard/user/saved"
    element={
      <UserDashboardLayout>
        <UserSaved />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-offers"
    path="/dashboard/user/offers"
    element={
      <UserDashboardLayout>
        <UserOffers />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-settings"
    path="/dashboard/user/settings"
    element={
      <UserDashboardLayout>
        <UserSettings />
      </UserDashboardLayout>
    }
  />,
  <Route
    key="user-help"
    path="/dashboard/user/help"
    element={
      <UserDashboardLayout>
        <UserHelp />
      </UserDashboardLayout>
    }
  />,
];
