import { Route } from "react-router-dom"
import { lazy } from "react"
import HotelDashboardLayout from "@/layouts/HotelDashboardLayout"

// Hotel Dashboard pages
const HotelDashboard = lazy(() => import("@/pages/dashboard/hotel/Dashboard"))
const HotelBookings = lazy(() => import("@/pages/dashboard/hotel/Bookings"))
const HotelRooms = lazy(() => import("@/pages/dashboard/hotel/Rooms"))
const HotelReviews = lazy(() => import("@/pages/dashboard/hotel/Reviews"))
const HotelSettings = lazy(() => import("@/pages/dashboard/hotel/Settings"))

export const HotelDashboardRoutes = [
  <Route
    key="hotel-dashboard"
    path="/dashboard/hotel"
    element={
      <HotelDashboardLayout>
        <HotelDashboard />
      </HotelDashboardLayout>
    }
  />,
  <Route
    key="hotel-bookings"
    path="/dashboard/hotel/bookings"
    element={
      <HotelDashboardLayout>
        <HotelBookings />
      </HotelDashboardLayout>
    }
  />,
  <Route
    key="hotel-rooms"
    path="/dashboard/hotel/rooms"
    element={
      <HotelDashboardLayout>
        <HotelRooms />
      </HotelDashboardLayout>
    }
  />,
  <Route
    key="hotel-reviews"
    path="/dashboard/hotel/reviews"
    element={
      <HotelDashboardLayout>
        <HotelReviews />
      </HotelDashboardLayout>
    }
  />,
  <Route
    key="hotel-settings"
    path="/dashboard/hotel/settings"
    element={
      <HotelDashboardLayout>
        <HotelSettings />
      </HotelDashboardLayout>
    }
  />,
]
