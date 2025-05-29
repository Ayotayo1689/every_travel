"use client"

import { useCallback } from "react"
import {
  useLoginMutation,
  usePostDataMutation,
  useGetDataQuery,
  usePatchDataMutation,
  useDeleteDataMutation,
} from "../store/api/apiSlice"
import { toast } from "react-toastify"
import { handleError } from "@/utils/handleError"

export const useApiLogin = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation()

  const loginUser = useCallback(
    async (credentials: { email: string; password: string }) => {
      try {
        const result = await login(credentials).unwrap()
        toast.info(result.message, {
          style: { background: "#FFA500", color: "white" },
        })
        return result
      } catch (err: any) {
        return handleError(err)
      }
    },
    [login],
  )

  return { loginUser, isLoading, isError, error }
}

export const useApiPost = () => {
  const [trigger, { isLoading, isError, error }] = usePostDataMutation()

  const post = useCallback(
    async (url: string, data: any) => {
      try {
        const result = await trigger({ url, data }).unwrap()
        toast.info(result.message, {
          // style: { background: "#FFA500", color: "white" },
        })
        return result
      } catch (err: any) {
        console.log("this is error from post", err)

        return handleError(err)
      }
    },
    [trigger],
  )

  return { post, isLoading, isError, error }
}

export const useApiGet = (url: string, params = {}, skip = false) => {
  const { data, error, isLoading, refetch } = useGetDataQuery(
    { url, params },
    { skip }, // ← conditionally skip query
  )

  const get = useCallback(
    async (customUrl = url, customParams = params) => {
      try {
        const result = await refetch()
        if (result.data?.message) {
          toast.info(result.data.message, {
            style: { background: "#FFA500", color: "white" },
          })
        }
        return result.data
      } catch (err: any) {
        return handleError(err)
      }
    },
    [refetch, url, params],
  )

  return { get, data, isLoading, error, refetch }
}

export const useApiPatch = () => {
  const [trigger, { isLoading, isError, error }] = usePatchDataMutation()

  const patch = useCallback(
    async (url: string, data: any) => {
      try {
        const result = await trigger({ url, data }).unwrap()
        toast.info(result.message, {
          style: { background: "#FFA500", color: "white" },
        })
        return result
      } catch (err: any) {
        return handleError(err)
      }
    },
    [trigger],
  )

  return { patch, isLoading, isError, error }
}

export const useApiDelete = () => {
  const [trigger, { isLoading, isError, error }] = useDeleteDataMutation()

  const deleteData = useCallback(
    async (url: string) => {
      try {
        const result = await trigger({ url }).unwrap()
        toast.info(result.message, {
          style: { background: "#FFA500", color: "white" },
        })
        return result
      } catch (err: any) {
        return handleError(err)
      }
    },
    [trigger],
  )

  return { deleteData, isLoading, isError, error }
}
