"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bed } from "lucide-react";
import { useSelector } from "react-redux";
import Container from "@/components/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CancelBooking = () => {
  const { bookingDetails } = useSelector((state: any) => state.booking);
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [cancellationReason, setCancellationReason] = useState("");

  const handleCancel = () => {
    setShowConfirmation(true);
  };

  const confirmCancel = () => {
    // In a real app, you would make an API call to cancel the booking
    // dispatch(resetBooking());
    setShowConfirmation(false);
    // navigate("/booking");
  };

  const keepBooking = () => {
    if (showConfirmation) {
      setShowConfirmation(false);
    } else {
      navigate("/payment-successful");
    }
  };

  return (
    // <div className="max-w-4xl mx-auto p-4 py-8">

    // </div>

    <Container>
      <div className=" mb-16">
        {showConfirmation && (
          <div className="fixed inset-0 bg-[#0f22754b] bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-[570px] p-6">
              <h2 className="text-[24px] font-[700] mb-4">Cancel Booking</h2>
              <p className="mb-4 font-[700] text-[16px]">
                We would like to know why. Kindly provide your reason for
                canceling.
              </p>

              <div className="mb-[100px]">
                <Select
                   value={cancellationReason}
                   onValueChange={(value) => setCancellationReason(value)}
               
                  //   onChange={(e: any) => setCancellationReason(e.target.value)}
                >
                  <SelectTrigger className=" w-full border rounded-md p-4">
                    <SelectValue
                      className=""
                      placeholder="Select reason for cancellation"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Change of plans</SelectItem>
                    <SelectItem value="2">
                      Found a better price elsewhere
                    </SelectItem>
                    <SelectItem value="3">Booking made by mistake</SelectItem>
                    <SelectItem value="4">Hotel is no longer needed</SelectItem>

                    <SelectItem value="4">Other</SelectItem>
                  </SelectContent>
                </Select>
                
              </div>

              <div className="flex gap-3">
                <button
                  onClick={confirmCancel}
                  className="bg-teal-700 text-white px-6 py-2 font-[700] rounded-full"
                >
                  Cancel
                </button>
                <button
                  onClick={keepBooking}
                  className=" border-teal-700 text-teal-700 px-6 py-2 font-[700] rounded-md"
                >
                  Keep this booking
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-[28px] font-[600] font-poppins mb-6">
              Cancel Booking
            </h1>
            <p className="mb-6 text-[16px]">
              You're about to cancel your booking. Kindly review the information
              below before canceling
            </p>

            <div className="">
              <div className="md:col-span-2">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-2 border-l p-3 rounded-md">
                    <Bed />
                    <div>
                      <div>1 Classic room</div>
                      <div className="text-green-600 text-sm">
                        Free cancellation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 border-l p-3 rounded-md">
                    <Bed />
                    <div>
                      <div>1 Standard room</div>
                      <div className="text-green-600 text-sm">
                        Free cancellation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-10">
                  <div className="flex justify-between mb-2 max-w-[300px] border-b pb-3">
                    <div className="font-medium">Cancellation fee:</div>
                    <div className="font-medium">₦0</div>
                  </div>
                </div>

                <div className="flex  gap-3">
                  <button
                    onClick={handleCancel}
                    className="bg-[#AD3026] font-[700]  hover:bg-red-700 text-white px-4 py-2 rounded-full"
                  >
                    Cancel Booking
                  </button>
                  <button
                    onClick={keepBooking}
                    className=" text-[#076476] font-[700]  px-4 py-2 rounded-md"
                  >
                    Keep this booking
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="  bg-white">
              <div className="flex items-center gap-2 mb-12">
                <img
                  src="https://images.unsplash.com/photo-1747356826558-4f1d97261978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hotel"
                  className="w-[100px] h-[80px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-[700] text-[18px] mb-3">
                    {bookingDetails.hotelName}
                  </h3>
                  <div className="text-sm text-gray-600">
                    {bookingDetails.checkIn} - {bookingDetails.checkOut}
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-sm p-4 bg-white mt-4">
              <h3 className="font-[700] text-[20px] mb-2">
                Cancellation policy
              </h3>
              <p className="text-[16px]">
                You may cancel your booking at no charge up to 00:00 on the date
                of arrival before check-in. If you cancel after 00:00 you will
                be charged the total price of the reservation.
              </p>
              <button className="text-[#076476] text-[14px] mt-4 font-[700]  mt-2">
                View policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CancelBooking;
