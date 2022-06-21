import { useSelector } from "react-redux"
import { authState } from "../auth/auth-slice"

export function Home() {
  const { user } = useSelector(authState)
  return (
    <div>
      <h1>Hello, {user.username}!!!</h1>
    </div>
  )
}
