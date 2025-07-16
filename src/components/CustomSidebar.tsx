// components/CustomSidebar.tsx
"use client";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  User,
  Wallet,
  Calendar,
  Heart,
  Gift,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  {
    title: "Profile",
    icon: User,
    url: "/dashboard/user/profile",
  },
  {
    title: "My Bookings",
    icon: Calendar,
    items: [
      { title: "Hotels", url: "/dashboard/user/bookings/hotels" },
      { title: "Airport rides", url: "/dashboard/user/bookings/airport-rides" },
      { title: "Car Hires", url: "/dashboard/user/bookings/car-hires" },
    ],
  },
  {
    title: "Saved",
    icon: Heart,
    url: "/dashboard/user/saved",
  },
  {
    title: "Offers",
    icon: Gift,
    url: "/dashboard/user/offers",
  },
  {
    title: "Wallet",
    icon: Wallet,
    url: "/dashboard/user/wallet",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/dashboard/user/settings",
  },
  {
    title: "Help",
    icon: HelpCircle,
    url: "/dashboard/user/help",
  },
];

export default function CustomSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState("My Bookings");

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <aside className="w-72 bg-[#032A32] text-white rounded-xl py-6 px-4 sticky top-[80px] h-fit">
      <div className="flex flex-col items-center space-y-4 border-b pb-8 border-[#3c5a51] mb-6">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-slate-600 text-white text-lg">JD</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h3 className="font-semibold text-lg">Jane Doe</h3>
          <p className="text-slate-300 text-sm">janedoe@gmail.com</p>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) =>
          item.items ? (
            <div key={item.title}>
              <button
                onClick={() =>
                  setOpenSubmenu((prev) => (prev === item.title ? "" : item.title))
                }
                className="w-full flex items-center justify-between px-3 py-3 rounded-md hover:bg-[#305259]"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    openSubmenu === item.title ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openSubmenu === item.title && (
                <ul className="ml-8 mt-1  space-y-1">
                  {item.items.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        to={subItem.url}
                        className={`block px-3 font-[400] py-3 rounded-md text-sm hover:bg-[#305259] ${
                          location.pathname === subItem.url
                            ? "bg-[#305259] text-white"
                            : "text-slate-300"
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center gap-2 px-3 py-3 rounded-md hover:bg-[#305259] ${
                location.pathname === item.url ? "bg-[#305259]" : ""
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          )
        )}
      </nav>

      <div className="mt-18 border-t border-[#305259] pt-4">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#305259]"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
