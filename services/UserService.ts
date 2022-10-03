import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://music-platform-api.herokuapp.com/",
  }),
  endpoints: (build) => ({
    fetchAllTracks: build.query({
      query: () => ({
        url: "tracks",
      }),
    }),
  }),
})
