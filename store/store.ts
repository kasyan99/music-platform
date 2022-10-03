import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"
import { createWrapper, MakeStore } from "next-redux-wrapper"
import { userAPI } from "services/UserService"
import { playerReducer } from "./reducers/playerSlice"

export const rootReducer = combineReducers({
  player: playerReducer,
  [userAPI.reducerPath]: userAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (curryGetDefaultMiddleware) =>
      curryGetDefaultMiddleware().concat(userAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
