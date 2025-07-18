import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@/components/Container";
import { SuccessIcon } from "@/assets/icons/Icons";

const PaymentSuccessful = () => {
  // const { currentUser } = useSelector((state: any) => state.user);
  const {
    bookingDetails,
    guestDetails,
    paymentMethod,
    bookingNumber,
    bookingDate,
  } = useSelector((state: any) => state.booking);

  return (
    <Container>
      <div className="w-full mx-auto p-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-gradient-to-r from-[#E6F0F1] to-transparent p-6  mb-6 flex gap-4 items-start">
              <SuccessIcon />

              <div>
                <h2 className="text-[20px] font-[700] text-black mb-1">
                  Payment Successful!
                </h2>
                <p className="text-green-700 text-[16px] max-w-[500px]">
                  We have received your payment and confirmed your booking. Your
                  booking information has been sent to your email at{" "}
                  {guestDetails.email}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-10 mb-4">
              <h2 className="text-[20px] font-[700]">Booking Summary</h2>
              <Link
                to="/cancel-booking"
                className="text-[#AD3026] text-[16px] font-[700]"
              >
                Cancel booking
              </Link>
            </div>
            <div className="border  p-6 bg-white">
              <div className="grid grid-cols-2 gap-y-8">
                <div className="font-medium">First name</div>
                <div className="font-[600] text-[18px] text-right">
                  {guestDetails.firstName}
                </div>

                <div className="font-medium">Last name</div>
                <div className="font-[600] text-[18px] text-right">
                  {guestDetails.lastName}
                </div>

                <div className="font-medium">Email address</div>
                <div className="font-[600] text-[18px] text-right">
                  {guestDetails.email}
                </div>

                <div className="font-medium">Phone number</div>
                <div className="font-[600] text-[18px] text-right">
                  {guestDetails.country} {guestDetails.phone}
                </div>

                <div className="font-medium">Country</div>
                <div className="font-[600] text-[18px] text-right">Nigeria</div>

                <div className="font-medium">Special requests</div>
                <div className="font-[600] text-[18px] text-right">
                  {guestDetails.specialRequests || "Nil"}
                </div>

                <div className="font-medium">Payment method</div>
                <div className="font-[600] text-[18px] text-right">
                  Paid with {paymentMethod.type}
                </div>
              </div>

              
            </div>
            <div className="mt-16">
                <Link
                  to="/booking"
                  className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-full inline-block"
                >
                  Booking History
                </Link>
              </div>
          </div>

          <div>
            <div className="border  p-4 bg-white mb-6">
              <div className="grid text-[16px] grid-cols-2 gap-y-4 text-sm">
                <div className="font-medium">Booking Number:</div>
                <div className="font-[600] text-[18px] text-right">
                  {bookingNumber}
                </div>

                <div className="font-medium">Booking Date:</div>
                <div className="font-[600] text-[18px] text-right">
                  {bookingDate}
                </div>

                <div className="font-medium">Payment Method:</div>
                <div className="font-[600] text-[18px] text-right">
                  {paymentMethod.type === "wallet" ? "Wallet" : "Card"}
                </div>
              </div>
            </div>

            <div className="border text-[16px]  p-4 bg-white">
              <p>Booking Details</p>
              <div className="mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-[24px]">
                    ★
                  </span>
                ))}
              </div>
              <h3 className="text-[20px] font-[700] mb-1">
                {bookingDetails.hotelName}
              </h3>
              <p className="text-sm mb-2">{bookingDetails.hotelAddress}</p>
              <p className="text-sm mb-4">
                {bookingDetails.rating}/10 - Very Good ({bookingDetails.reviews}{" "}
                reviews)
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8 mb-4">
                <div>
                  <div className="text-sm mb-2 text-gray-600">Check in</div>
                  <div className="text-[18px] font-[600]">
                    {bookingDetails.checkIn}
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2 text-gray-600">Check out</div>
                  <div className="text-[18px] font-[600]">
                    {bookingDetails.checkOut}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-600">Guests</div>
                <div className="text-[18px] font-[600]">
                  {bookingDetails.guests} Adults
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Price Summary</h3>
                <div className="space-y-2">
                  <div className="flex border p-2 rounded-sm justify-between mb-4 items-end">
                    <div className="space-y-2">
                      <div>1 Classic Room</div>
                      <div>1 night</div>
                    </div>
                    <div className="text-[16px] font-[600]">
                      ₦{bookingDetails.classicRoomPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex  border p-2 rounded-sm justify-between mb-4 items-end">
                    <div className="space-y-2">
                      <div>1 Standard Room</div>
                      <div>1 night</div>
                    </div>
                    <div className="text-[16px] font-[600]">
                      ₦{bookingDetails.standardRoomPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex  border p-2 rounded-sm justify-between mb-4 items-end">
                    <div>Taxes & fees</div>
                    <div className="text-[16px] font-[600]">
                      ₦{bookingDetails.taxesAndFees.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mt-4 py-6 px-4 rounded-md flex flex-col gap-5 bg-[#F5F7F7]">
                  <div className="flex justify-between font-medium">
                    <div className="text-[16px] font-[700]">Total Amount</div>
                    <div className="text-[20px] font-[700]">
                      ₦{bookingDetails.totalAmount.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex justify-between font-medium mt-2">
                    <div className="text-[16px] font-[700]">Paid</div>
                    <div className="text-[20px] font-[700]">
                      ₦{bookingDetails.totalAmount.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex justify-between font-medium mt-2">
                    <div className="text-[16px] font-[700]">Amount left</div>
                    <div className="text-[20px] font-[700]">₦0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PaymentSuccessful;
