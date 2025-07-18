"use client";

import { ReactNode } from "react";
import Footer from "@/components/Footer";
import CustomSidebar from "@/components/CustomSidebar";
import DashboardNavbar from "@/components/DashboardNav";

interface UserDashboardLayoutProps {
  children: ReactNode;
}

export default function UserDashboardLayout({
  children,
}: UserDashboardLayoutProps) {

  // const handleBackToHome = () => {
  //   navigate("/");
  // };

  return (
    <div className="min-h-[100dvh] bg-[#f7f7f7] flex flex-col">
      <DashboardNavbar ShowLogo />

      <div className="flex flex-1 container m-auto px-[6%] py-6 gap-6">
        <CustomSidebar />
        <div className="flex-1 ">{children}</div>
      </div>

      <Footer />
    </div>
  );
}
