export type LoginForm = {
  email: string
  password: string
}

export type LoginResponse = {
  accessToken: string
}

export type RegisterForm = {
  username: string
  email: string
  password: string
  country: string
}

export type User = {
  email: string
  userId: number
  username: string
  iat: number
  exp: number
  accessToken: string
}
