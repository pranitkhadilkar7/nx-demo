import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit"
import { resetUserData } from "../pages/auth/auth-slice"

export const apiErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn("We got a rejected action!")
      if (action.payload.status === 401) {
        console.warn("Unauthorized!!!")
        api.dispatch(resetUserData())
      }
    }

    return next(action)
  }
