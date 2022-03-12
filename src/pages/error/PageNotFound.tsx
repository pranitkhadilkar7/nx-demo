import { useNavigate } from "react-router-dom"

export function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div className="error-container bg-primary">
      <div className="mx-auto col-lg-6">
        <div className="d-flex align-items-center text-white pt-5">
          <h1 className="error-number">404</h1>
          <div className="d-flex flex-column error-message">
            <h2>SORRY!</h2>
            <h3>The page you’re looking for was not found.</h3>
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            href="/"
            className="text-white font-weight-medium"
            onClick={(e) => {
              e.preventDefault()
              navigate("/home", { replace: true })
            }}
          >
            Back to home
          </a>
        </div>
        <p className="text-white text-center mt-5">
          Copyright © 2021 All rights reserved.
        </p>
      </div>
    </div>
  )
}
