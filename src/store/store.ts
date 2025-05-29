import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "./features/modalSlice"
import userReducer from "./features/userSlice"
import bookingReducer from "./features/bookingSlice"

import { api } from "./api/apiSlice"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    // product: productReducer,
    booking: bookingReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
