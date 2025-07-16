"use client";

import { BrowserRouter, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
import { LandingRoutes } from "./routes/LandingRoutes";
import { UserDashboardRoutes } from "./routes/UserDashboardRoutes";
import { HotelDashboardRoutes } from "./routes/HotelDashboardRoutes";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {LandingRoutes}
          {UserDashboardRoutes}
          {HotelDashboardRoutes}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
