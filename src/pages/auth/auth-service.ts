import { api } from "../../http/queryApi"
import { LoginForm, LoginResponse, RegisterForm } from "./auth-type"

const authService = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<any, RegisterForm>({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
    login: build.mutation<LoginResponse, LoginForm>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation } = authService
