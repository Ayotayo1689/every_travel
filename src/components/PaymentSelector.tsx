"use client"

import type React from "react"
import { useState } from "react"
import { updatePaymentMethod, fundWallet } from "@/store/features/bookingSlice"
import { Wallet, CreditCard, AlertCircle, PlusIcon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"

const PaymentMethodSelector = () => {
  const { paymentMethod, bookingDetails } = useSelector((state: any) => state.booking)
  const dispatch = useDispatch()
  const [showFundWallet, setShowFundWallet] = useState(false)
  const [fundAmount, setFundAmount] = useState(bookingDetails.totalAmount)

  const handlePaymentMethodChange = (type: "wallet" | "card") => {
    dispatch(updatePaymentMethod({ type }))
  }

  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(updatePaymentMethod({ [name]: value } as any))
  }

  const handleFundWallet = () => {
    dispatch(fundWallet(fundAmount))
    setShowFundWallet(false)
  }

  const insufficientFunds = paymentMethod.type === "wallet" && paymentMethod.walletBalance < bookingDetails.totalAmount

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            className={`flex items-center gap-3 p-4 border rounded-md ${
              paymentMethod.type === "wallet" ? "border-teal-600" : ""
            }`}
            onClick={() => handlePaymentMethodChange("wallet")}
          >
            <Wallet className="text-teal-600" />
            <span>Pay with Wallet</span>
            <div className="ml-auto">
              <div
                className={`w-5 h-5 rounded-full border ${
                  paymentMethod.type === "wallet" ? "border-teal-600" : "border-gray-300"
                } flex items-center justify-center`}
              >
                {paymentMethod.type === "wallet" && <div className="w-3 h-3 rounded-full bg-teal-600"></div>}
              </div>
            </div>
          </button>
          <button
            type="button"
            className={`flex items-center gap-3 p-4 border rounded-md ${
              paymentMethod.type === "card" ? "border-teal-600" : ""
            }`}
            onClick={() => handlePaymentMethodChange("card")}
          >
            <CreditCard className="text-teal-600" />
            <span>Pay with Card</span>
            <div className="ml-auto">
              <div
                className={`w-5 h-5 rounded-full border ${
                  paymentMethod.type === "card" ? "border-teal-600" : "border-gray-300"
                } flex items-center justify-center`}
              >
                {paymentMethod.type === "card" && <div className="w-3 h-3 rounded-full bg-teal-600"></div>}
              </div>
            </div>
          </button>
        </div>
      </div>

      {paymentMethod.type === "wallet" && (
        <div className="">
            <div className="bg-[#032A32] flex gap-10 items-end w-fit min-w-[300px] text-white p-4 rounded-md">
      <div className="">
        
      <div className="mb-2">Wallet balance</div>
          <div className="text-xl font-bold ">₦{paymentMethod.walletBalance.toLocaleString()}</div>
        </div>  {!showFundWallet ? (
            <button
              type="button"
              onClick={() => setShowFundWallet(true)}
              className="bg-white flex items-center justify-center gap-2  text-teal-900 px-6 py-1  rounded-full text-sm font-medium"
            >
            <PlusIcon width={"16px"}/>  Fund Wallet
            </button>
          ) : (
            <div className="flex gap-2">
              <input
                type="number"
                value={fundAmount}
                onChange={(e) => setFundAmount(Number(e.target.value))}
                className="w-24 px-2 py-1 rounded-md text-black text-sm"
              />
              <button
                type="button"
                onClick={handleFundWallet}
                className="bg-white text-teal-900 px-3 py-1 rounded-md text-sm font-medium"
              >
                Fund
              </button>
            </div>
          )}
        </div> 
        <div className="text-[14px] mt-2 text-[#34AD26]">Fastest & most secure</div>

        </div>
       
      )}

      {insufficientFunds && (
        <div className="bg-red-50 border border-red-100 text-red-800 p-4 rounded-md flex gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            You don't have enough funds in your wallet to complete this payment. Kindly fund your wallet to proceed or
            select another payment method
          </div>
        </div>
      )}

      {paymentMethod.type === "card" && (
        <div className="space-y-4">
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center text-white font-bold text-xs">
              VISA
            </div>
            <div className="w-12 h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full opacity-80 relative">
                <div className="w-6 h-6 bg-red-500 rounded-full absolute -right-3 opacity-80"></div>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm">Card number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentMethod.cardNumber || ""}
              onChange={handleCardDetailsChange}
              placeholder="0000 0000 0000 0000"
              className="w-full border rounded-md p-3"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm">Expiry date</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentMethod.expiryDate || ""}
                onChange={handleCardDetailsChange}
                placeholder="MM/YY"
                className="w-full border rounded-md p-3"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentMethod.cvv || ""}
                onChange={handleCardDetailsChange}
                placeholder="123"
                className="w-full border rounded-md p-3"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentMethodSelector
