"use client"

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Bookings() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to hotels by default
    navigate("/dashboard/user/bookings/hotels", { replace: true })
  }, [navigate])

  return null
}
