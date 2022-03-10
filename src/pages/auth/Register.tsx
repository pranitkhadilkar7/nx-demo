import { Button } from "react-bootstrap"
import { SelectInput } from "../../common/input/SelectInput"
import { TextInput } from "../../common/input/TextInput"
import { AuthPageWrapper } from "./AuthPageWrapper"

export function Register() {
  return (
    <AuthPageWrapper
      formHeading="New here?"
      formText="Signing up is easy. It only takes a few steps"
    >
      <form className="pt-3">
        <TextInput type="text" placeholder="Username" />
        <TextInput type="email" placeholder="Email" />
        <SelectInput />
        <TextInput type="text" placeholder="Password" />
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
          <a href="/" className="text-primary">
            Login
          </a>
        </div>
      </form>
    </AuthPageWrapper>
  )
}
