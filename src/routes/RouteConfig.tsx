import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { RequireAuth } from "./RequireAuth"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes"

export function RouterConfig() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      {PUBLIC_ROUTES.map((route, index) => (
        <Route
          key={`${route.path}-index`}
          path={route.path}
          element={route.component}
        />
      ))}

      {PRIVATE_ROUTES.map((route, index) => (
        <Route
          key={`${route.path}-index`}
          path={route.path}
          element={<RequireAuth>{route.component}</RequireAuth>}
        />
      ))}
    </Routes>
  )
}
