import { Nav } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import { paths } from "../routes/routes"
import logo from "../styles/images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faChartColumn } from "@fortawesome/free-solid-svg-icons"

export function SidebarNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="sidebar p-3">
      <div className="brand-logo mb-3">
        <img src={logo} alt="Logo" onClick={() => navigate(paths.home)} />
      </div>
      <Nav
        className="d-flex flex-column"
        activeKey={pathname}
        onSelect={(path) => navigate(path ?? "/")}
      >
        <Nav.Link eventKey={paths.home} className="mb-3">
          <div className="d-flex align-items-center f-14">
            <div className="menu-icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span className="menu-title">Home</span>
          </div>
        </Nav.Link>
        <Nav.Link eventKey={paths.dashboard}>
          <div className="d-flex align-items-center f-14">
            <div className="menu-icon">
              <FontAwesomeIcon icon={faChartColumn} />
            </div>
            <span className="menu-title">Dashboard</span>
          </div>
        </Nav.Link>
      </Nav>
    </div>
  )
}
