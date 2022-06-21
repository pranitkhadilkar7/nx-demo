import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"
import { Dashboard } from "../pages/dashboard/Dashboard"
import { Home } from "../pages/home/Home"
import { CreateWorkflow } from "../pages/workflow/CreateWorkflow"
import { RouteData } from "./routeType"

export const paths = {
  login: "/login",
  register: "/register",
  home: "/home",
  dashboard: "/dashboard",
  workflow: "/workflow",
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
  {
    path: paths.dashboard,
    component: <Dashboard />,
  },
  {
    path: paths.workflow,
    component: <CreateWorkflow />,
  },
]
