"use client"

import GuestDetailsForm from "@/components/GuestDetailsForm"
import LoginPrompt from "@/components/LoginPrompt"
import PaymentMethodSelector from "@/components/PaymentSelector"
import type React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { useAppSelector, useAppDispatch } from "../hooks/useAppSelector"
// import { makePayment } from "../store/slices/bookingSlice"
// import GuestDetailsForm from "../components/GuestDetailsForm"
// import PaymentMethodSelector from "../components/PaymentMethodSelector"
import BookingDetails from "@/components/BookingDetails"
import Container from "@/components/Container"
// import LoginPrompt from "../components/LoginPrompt"
// import LoginModal from "../components/LoginModal"

const BookingForm = () => {
  const  {currentUser} = useSelector((state: any) => state.user)
  const { status, error } = useSelector((state: any) => state.booking)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showLoginModal, setShowLoginModal] = useState(false)

  console.log("isLoggedIn", currentUser);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // if (!currentUser) {
    //   setShowLoginModal(true)
    //   return
    // }

    // const resultAction = await dispatch(makePayment())
    // if (makePayment.fulfilled.match(resultAction)) {
    //   navigate("/payment-successful")
    // }
  }

  return (
   <Container>
     <div className=" w-full">
     { <LoginPrompt />}
<div className="grid mt-12 grid-cols-1 lg:grid-cols-3 gap-8">
<form onSubmit={handleSubmit} className="lg:col-span-2">
  <div className=" space-y-8">
    <GuestDetailsForm />
    <PaymentMethodSelector />

    {error && <div className="bg-red-50 border border-red-100 text-red-800 p-4 rounded-md">{error}</div>}

    <div>
      <button
        type="submit"
        className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-6 rounded-md"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Processing..." : currentUser ? "Confirm & Pay" : "Proceed"}
      </button>
    </div>
  </div>

 
</form>
<div>
    <BookingDetails />
  </div>

</div>

     </div>

      </Container>
  )
}

export default BookingForm
