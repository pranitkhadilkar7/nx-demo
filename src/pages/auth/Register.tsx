import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { paths } from "../../routes/routes"
import { AuthPageWrapper } from "./AuthPageWrapper"

export function Register() {
  const navigate = useNavigate()

  return (
    <AuthPageWrapper
      formHeading="New here?"
      formText="Signing up is easy. It only takes a few steps"
    >
      <form className="pt-3">
        {/* <TextInput type="text" placeholder="Username" name="Username" />
        <TextInput type="email" placeholder="Email" name="Email" />
        <SelectInput />
        <TextInput type="text" placeholder="Password" name="Password" /> */}
        <div className="my-3">
          <div className="form-check">
            <label className="form-check-label text-muted">
              <input type="checkbox" className="form-check-input" />I agree to
              all Terms & Conditions
              <i className="input-helper"></i>
            </label>
          </div>
        </div>
        <div className="mt-3">
          <Button size="lg" className="btn btn-primary btn-block">
            SIGN UP
          </Button>
        </div>
        <div className="text-center mt-4 font-weight-light">
          Already have an account?{" "}
          <a
            href="/"
            className="text-primary"
            onClick={(e) => {
              e.preventDefault()
              navigate(paths.login)
            }}
          >
            Login
          </a>
        </div>
      </form>
    </AuthPageWrapper>
  )
}
