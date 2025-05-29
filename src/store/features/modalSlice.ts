import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ModalState {
  isModalOpen: boolean
  modalType: string
}

const initialState: ModalState = {
  isModalOpen: false,
  modalType: "login",
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ type: string }>) => {
      state.isModalOpen = true
      state.modalType = action.payload.type
    },
    closeModal: (state) => {
      state.isModalOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
