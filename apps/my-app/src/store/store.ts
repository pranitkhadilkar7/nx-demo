import {
  AnyAction,
  configureStore,
  getDefaultMiddleware,
  ThunkDispatch,
} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { useDispatch } from "react-redux"
import authReducer from "../pages/auth/auth-slice"
import workflowReducer from "../pages/workflow/workflow-slice"
import { api } from "../http/queryApi"
import { apiErrorLogger } from "./api-middleware"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    authData: authReducer,
    workflowData: workflowReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    api.middleware,
    apiErrorLogger,
  ],
  devTools: process.env.NODE_ENV !== "production",
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDispatchThunk = () =>
  useDispatch<ThunkDispatch<RootState, any, AnyAction>>()
