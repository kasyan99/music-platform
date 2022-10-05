import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IComment, ITrack } from "types/track"

type CommentBody = {
  username: string
  text: string
  trackId: string
}

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
    searchTracks: build.query({
      query: (query: string) => ({
        url: "tracks/search",
        params: {
          query,
        },
      }),
    }),
    createComment: build.mutation<IComment, CommentBody>({
      query: (commentBody: CommentBody) => ({
        url: "tracks/comment",
        method: "POST",
        body: commentBody,
      }),
    }),
    createTrack: build.mutation({
      query: (formData: FormData) => ({
        url: "tracks",
        method: "POST",
        body: formData,
      }),
    }),
  }),
})
