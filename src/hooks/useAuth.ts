import { useState } from "react"

export function useAuth() {
  const [isAuth] = useState(false)
  return { isAuth }
}
