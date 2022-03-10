import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { TextInput } from "../../common/input/TextInput"
import { paths } from "../../routes/routes"
import { AuthPageWrapper } from "./AuthPageWrapper"

export function Login() {
  const navigate = useNavigate()
  return (
    <AuthPageWrapper
      formHeading="Hello! let's get started"
      formText="Sign in to continue."
    >
      <form className="pt-3">
        <TextInput type="text" placeholder="Username" />
        <TextInput type="text" placeholder="Password" />
        <div className="mt-3">
          <Button size="lg" className="btn btn-primary btn-block">
            SIGN IN
          </Button>
        </div>
        <div className="my-3 d-flex justify-content-between">
          <div className="form-check">
            <label className="form-check-label text-muted">
              <input type="checkbox" className="form-check-input" />
              Keep me signed in
              <i className="input-helper"></i>
            </label>
          </div>
          <a href="/" className="auth-link text-black">
            Forgot Password?
          </a>
        </div>
        <div className="text-center mt-4 font-weight-light">
          Don't have an account?{" "}
          <a
            href="/"
            className="text-primary"
            onClick={(e) => {
              e.preventDefault()
              navigate(paths.register)
            }}
          >
            Create
          </a>
        </div>
      </form>
    </AuthPageWrapper>
  )
}
