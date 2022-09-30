import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper, MakeStore } from "next-redux-wrapper"
import { playerReducer } from "./reducers/playerSlice"

export const rootReducer = combineReducers({
  player: playerReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
