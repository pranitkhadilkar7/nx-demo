import { useMemo } from "react"
import { useSelector } from "react-redux"
import { authState } from "../pages/auth/auth-slice"

export function useAuth() {
  const { user } = useSelector(authState)

  const isAuth = useMemo(() => {
    if (user && user.email && user.accessToken) return true
    return false
  }, [user])

  return { isAuth }
}
