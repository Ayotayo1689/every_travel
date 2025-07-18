"use client"

// import type React from "react"

// import { useBooking } from "../context/BookingContext"

const GuestDetailsForm = () => {
  // const { guestDetails, updateGuestDetails } = useBooking()

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target

  //   console.log(guestDetails);
    
  //   updateGuestDetails({ [name]: value } as any)
  // }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name of guest</label>
          <div className="space-y-3">
            <div>
              <input
                type="text"
                name="firstName"
                // value={guestDetails.firstName}
                // onChange={handleChange}
                placeholder="First name *"
                className="w-full border rounded-md p-3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                // value={guestDetails.lastName}
                // onChange={handleChange}
                placeholder="Last name *"
                className="w-full border rounded-md p-3"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Contact Information</h3>
        <p className="text-sm mb-4">We'll send the booking confirmation to this email address</p>
        <div className="space-y-3">
          <div>
            <input
              type="email"
              name="email"
            //   value={guestDetails.email}
              // onChange={handleChange}
              placeholder="Email address *"
              className="w-full border rounded-md p-3"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="relative">
              <select
                name="country"
                // value={guestDetails.country}
                // onChange={handleChange}
                className="w-full border rounded-md p-3 appearance-none"
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+33">+33</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                // value={guestDetails.phone}
                // onChange={handleChange}
                placeholder="Phone number *"
                className="w-full border rounded-md p-3"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Special requests (optional)</h3>
        <p className="text-sm mb-4">
          Special requests cannot be guaranteed – but the property will do its best to meet your needs.
        </p>
        <textarea
          name="specialRequests"
        //   value={guestDetails.specialRequests}
          // onChange={handleChange}
          placeholder="Type your special requests..."
          className="w-full border rounded-md p-3 min-h-[100px]"
        ></textarea>
      </div>
    </div>
  )
}

export default GuestDetailsForm
