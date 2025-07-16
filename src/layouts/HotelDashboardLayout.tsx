"use client"

import type { ReactNode } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BarChart3, Calendar, Building2, Star, Settings, LogOut, ArrowLeft, Hotel } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"

interface HotelDashboardLayoutProps {
  children: ReactNode
}

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    url: "/dashboard/hotel",
  },
  {
    title: "Bookings",
    icon: Calendar,
    url: "/dashboard/hotel/bookings",
  },
  {
    title: "Rooms",
    icon: Building2,
    url: "/dashboard/hotel/rooms",
  },
  {
    title: "Reviews",
    icon: Star,
    url: "/dashboard/hotel/reviews",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/dashboard/hotel/settings",
  },
]

function HotelSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSignOut = () => {
    // Handle sign out logic here
    navigate("/")
  }

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="bg-slate-800 text-white p-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" />
            <AvatarFallback className="bg-slate-600 text-white text-lg">
              <Hotel className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="font-semibold text-lg">Grand Crest Hotel</h3>
            <p className="text-slate-300 text-sm">hotel@grandcrest.com</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-slate-800">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.url}
                className="text-white hover:bg-slate-700 data-[active=true]:bg-slate-700"
                size="lg"
              >
                <Link to={item.url}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="bg-slate-800 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleSignOut} className="text-white hover:bg-slate-700" size="lg">
              <LogOut className="w-5 h-5" />
              <span>Sign out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

export default function HotelDashboardLayout({ children }: HotelDashboardLayoutProps) {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate("/")
  }

  return (
    <SidebarProvider>
      <HotelSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white border-b px-6 py-4">
            <Button
              variant="ghost"
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
