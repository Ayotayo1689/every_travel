import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

interface BookingDetails {
  hotelName: string
  hotelAddress: string
  rating: number
  reviews: number
  checkIn: string
  checkOut: string
  guests: number
  classicRoomPrice: number
  standardRoomPrice: number
  taxesAndFees: number
  totalAmount: number
}

interface GuestDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  specialRequests: string
}

interface PaymentMethod {
  type: "wallet" | "card"
  walletBalance: number
  cardNumber?: string
  expiryDate?: string
  cvv?: string
}

interface BookingState {
  bookingDetails: BookingDetails
  guestDetails: GuestDetails
  paymentMethod: PaymentMethod
  bookingNumber: string
  bookingDate: string
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: BookingState = {
  bookingDetails: {
    hotelName: "Grand Crest Hotel",
    hotelAddress: "45, Raul Road, Victoria Island, Lagos",
    rating: 8.3,
    reviews: 45,
    checkIn: "Tue 11 Mar 2025",
    checkOut: "Wed 12 Mar 2025",
    guests: 2,
    classicRoomPrice: 70000,
    standardRoomPrice: 95000,
    taxesAndFees: 15050,
    totalAmount: 180050,
  },
  guestDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "+234",
    specialRequests: "",
  },
  paymentMethod: {
    type: "wallet",
    walletBalance: 0,
  },
  bookingNumber: "12345678",
  bookingDate: "March 10, 2025",
  status: "idle",
  error: null,
}

// Async thunk for making payment
export const makePayment = createAsyncThunk("booking/makePayment", async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState() as { booking: BookingState }
    const { paymentMethod, bookingDetails } = state.booking

    // In a real app, you would make an API call to process payment
    // For demo purposes, we'll simulate a successful payment if:
    // 1. Using wallet and has sufficient balance
    // 2. Using card and card details are provided

    if (paymentMethod.type === "wallet") {
      if (paymentMethod.walletBalance >= bookingDetails.totalAmount) {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        return { success: true, newBalance: paymentMethod.walletBalance - bookingDetails.totalAmount }
      } else {
        return rejectWithValue("Insufficient funds in wallet")
      }
    } else if (paymentMethod.type === "card") {
      if (paymentMethod.cardNumber && paymentMethod.expiryDate && paymentMethod.cvv) {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        return { success: true }
      } else {
        return rejectWithValue("Invalid card details")
      }
    }

    return rejectWithValue("Invalid payment method")
  } catch (error) {
    return rejectWithValue("Payment failed")
  }
})

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updateGuestDetails: (state, action: PayloadAction<Partial<GuestDetails>>) => {
      state.guestDetails = { ...state.guestDetails, ...action.payload }
    },
    updatePaymentMethod: (state, action: PayloadAction<Partial<PaymentMethod>>) => {
      state.paymentMethod = { ...state.paymentMethod, ...action.payload }
    },
    fundWallet: (state, action: PayloadAction<number>) => {
      state.paymentMethod.walletBalance += action.payload
    },
    resetBooking: (state) => {
      state.guestDetails = initialState.guestDetails
      state.paymentMethod = initialState.paymentMethod
      state.status = "idle"
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makePayment.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.status = "succeeded"
        if (action.payload.newBalance !== undefined) {
          state.paymentMethod.walletBalance = action.payload.newBalance
        }
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload as string
      })
  },
})

export const { updateGuestDetails, updatePaymentMethod, fundWallet, resetBooking } = bookingSlice.actions
export default bookingSlice.reducer
