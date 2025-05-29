import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Token management functions
const setTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken)
  localStorage.setItem("refreshToken", refreshToken)
}

const clearTokens = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}

const getAccessToken = () => localStorage.getItem("accessToken")
const getRefreshToken = () => localStorage.getItem("refreshToken")

// Base query with authentication
const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.yourtravelwebsite.com/",
  prepareHeaders: (headers, { getState }) => {
    const token = getAccessToken()
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

// Base query with re-authentication logic
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    // Try to get a new token
    const refreshToken = getRefreshToken()
    if (!refreshToken) {
      clearTokens()
      return result
    }

    const refreshResult = await baseQuery(
      {
        url: "auth/refresh",
        method: "POST",
        body: { refreshToken },
      },
      api,
      extraOptions,
    )

    if (refreshResult.data) {
      // Store the new token
      const { accessToken, refreshToken: newRefreshToken } = refreshResult.data as {
        accessToken: string
        refreshToken: string
      }
      setTokens(accessToken, newRefreshToken)

      // Retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      clearTokens()
    }
  }

  return result
}

// Create the API slice
export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled
          setTokens(data.accessToken, data.refreshToken)
        } catch (err) {
          console.error(err)
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled
          clearTokens()
        } catch (err) {
          console.error(err)
        }
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    getProfile: builder.query({
      query: () => "auth/profile",
    }),
    postData: builder.mutation({
      query: ({ url, data }) => ({
        url,
        method: "POST",
        body: data,
      }),
    }),
    getData: builder.query({
      query: ({ url, params }) => ({
        url,
        method: "GET",
        params,
      }),
    }),
    patchData: builder.mutation({
      query: ({ url, data }) => ({
        url,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteData: builder.mutation({
      query: ({ url }) => ({
        url,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  usePostDataMutation,
  useGetDataQuery,
  useGetProfileQuery,
  usePatchDataMutation,
  useDeleteDataMutation,
} = api
