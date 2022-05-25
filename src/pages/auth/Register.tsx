import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { SelectInput } from "../../common/input/SelectInput"
import { TextInput } from "../../common/input/TextInput"
import { paths } from "../../routes/routes"
import { useRegisterMutation } from "./auth-service"
import { RegisterForm } from "./auth-type"
import { AuthPageWrapper } from "./AuthPageWrapper"

export function Register() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ mode: "onChange" })
  const [signup] = useRegisterMutation()

  function onSubmit(data: RegisterForm) {
    console.log(data)
    signup(data).then((res) => {
      navigate(paths.login)
    })
  }

  return (
    <AuthPageWrapper
      formHeading="New here?"
      formText="Signing up is easy. It only takes a few steps"
    >
      <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          placeholder="Username"
          name="username"
          register={register}
          required
          hasError={!!errors.username}
        />
        <TextInput
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          required
          hasError={!!errors.email}
        />
        <TextInput
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          required
          hasError={!!errors.password}
        />
        <SelectInput
          placeholder="Country"
          name="country"
          hasError={!!errors.country}
          register={register}
          options={[{ value: "IN", label: "India" }]}
        />
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
          <Button size="lg" className="btn btn-primary btn-block" type="submit">
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
