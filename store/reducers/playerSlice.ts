import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PlayerState } from "types/player"
import { ITrack } from "types/track"

const initialState: PlayerState = {
  active: null,
  volume: 0,
  duration: 0,
  currentTime: 0,
  pause: false,
}

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    pauseTrack(state) {
      state.pause = true
    },
    playTrack(state) {
      state.pause = false
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload
    },
    setActiveTrack(state, action: PayloadAction<ITrack>) {
      state.active = action.payload
    },
  },
})

export const playerReducer = playerSlice.reducer
