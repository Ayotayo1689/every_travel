import { toast } from "react-toastify"

interface ApiError {
  status?: number
  data?: {
    message?: string
    error?: string
  }
  error?: string
}

export const handleError = (err: ApiError) => {
  console.error("API Error:", err)

  let errorMessage = "An unexpected error occurred"

  if (err.data?.message) {
    errorMessage = err.data.message
  } else if (err.data?.error) {
    errorMessage = err.data.error
  } else if (err.error) {
    errorMessage = err.error
  }

  toast.error(errorMessage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  })

  return { error: errorMessage }
}
