import { useState } from "react"

export function useAuth() {
  const [isAuth] = useState(true)
  return { isAuth }
}
