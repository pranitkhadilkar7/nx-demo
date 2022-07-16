import jwtDecode from "jwt-decode"
import { LoginResponse, User } from "./auth-type"

export function getUserDetails(accessData: LoginResponse | null) {
  if (accessData) {
    const details: any = jwtDecode(accessData.accessToken)
    return {
      email: details.email,
      userId: details.userId,
      username: details.username,
      iat: details.iat,
      exp: details.exp,
      accessToken: accessData.accessToken,
    } as User
  }
  return {
    email: "",
    userId: 0,
    username: "",
    iat: 0,
    exp: 0,
    accessToken: "",
  }
}
