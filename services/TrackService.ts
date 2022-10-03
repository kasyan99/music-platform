import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const trackAPI = createApi({
  reducerPath: "trackAPI",
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
