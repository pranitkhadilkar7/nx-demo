import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

type Props = {
  children: JSX.Element
}

export function RequireAuth({ children }: Props) {
  const { isAuth } = useAuth()
  if (isAuth) return children
  return <Navigate to="/login" replace />
}
