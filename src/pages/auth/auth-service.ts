import { api } from "../../http/queryApi"
import { RegisterForm } from "./auth-type"

const authService = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<any, RegisterForm>({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useRegisterMutation } = authService
