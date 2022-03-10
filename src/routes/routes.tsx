import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"
import { Home } from "../pages/home/Home"
import { RouteData } from "./routeType"

export const paths = {
  login: "/login",
  register: "/register",
  home: "/home",
}

export const PUBLIC_ROUTES: RouteData[] = [
  {
    path: paths.login,
    component: <Login />,
  },
  {
    path: paths.register,
    component: <Register />,
  },
]

export const PRIVATE_ROUTES: RouteData[] = [
  {
    path: paths.home,
    component: <Home />,
  },
]
