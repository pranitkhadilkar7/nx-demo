import { AuthPageWrapper } from "./AuthPageWrapper"

export function Login() {
  return (
    <AuthPageWrapper
      formHeading="Hello! let's get started"
      formText="Sign in to continue."
    >
      <form className="pt-3"></form>
    </AuthPageWrapper>
  )
}
