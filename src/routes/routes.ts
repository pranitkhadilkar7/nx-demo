import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"
import { Home } from "../pages/home/Home"
import { RouteData } from "./routeType"

export const PUBLIC_ROUTES: RouteData[] = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
]

export const PRIVATE_ROUTES: RouteData[] = [
  {
    path: "/home",
    component: Home,
  },
]
