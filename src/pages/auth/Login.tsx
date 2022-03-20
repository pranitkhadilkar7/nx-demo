import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { TextInput } from "../../common/input/TextInput"
import { paths } from "../../routes/routes"
import { AuthPageWrapper } from "./AuthPageWrapper"
import { useForm } from "react-hook-form"
import { LoginForm } from "./auth-type"

export function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  })

  function onSubmit(data: LoginForm) {
    console.log(data)
  }

  return (
    <AuthPageWrapper
      formHeading="Hello! let's get started"
      formText="Sign in to continue."
    >
      <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          placeholder="Email"
          name="userEmail"
          register={register}
          required
          hasError={!!errors.userEmail}
        />
        <TextInput
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          required
          hasError={!!errors.password}
        />
        <div className="mt-3">
          <Button size="lg" className="btn btn-primary btn-block" type="submit">
            SIGN IN
          </Button>
        </div>
        <div className="my-3 d-flex justify-content-between">
          {/* <div className="form-check">
            <label className="form-check-label text-muted">
              <input type="checkbox" className="form-check-input" />
              Keep me signed in
              <i className="input-helper"></i>
            </label>
          </div> */}
          <a href="/" className="auth-link text-black mx-auto">
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
