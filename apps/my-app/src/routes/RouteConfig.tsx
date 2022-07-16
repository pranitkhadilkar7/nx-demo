import { Navigate, Route, Routes } from "react-router-dom"
import { SidebarNav } from "../nav/SidebarNav"
import { PageNotFound } from "../pages/error/PageNotFound"
import { RequireAuth } from "./RequireAuth"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes"

export function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

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
          element={
            <RequireAuth>
              <div className="d-flex h-100">
                <SidebarNav />
                <div className="d-flex flex-column flex-grow-1 p-3">
                  {route.component}
                </div>
              </div>
            </RequireAuth>
          }
        />
      ))}

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
