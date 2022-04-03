import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
  ThunkDispatch,
} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import authReducer from "../pages/auth/auth-slice"

export const store = configureStore({
  reducer: {
    authData: authReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDispatchThunk = () =>
  useDispatch<ThunkDispatch<RootState, any, AnyAction>>()
