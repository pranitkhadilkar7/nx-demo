import { FormControl, FormGroup } from "react-bootstrap"
import { UseFormRegister } from "react-hook-form"

type Props = {
  type: "email" | "text" | "password"
  placeholder: string
  name: string
  register: UseFormRegister<any>
  required?: boolean
  hasError?: boolean
}

export function TextInput({
  type,
  placeholder,
  name,
  register,
  required = false,
  hasError,
}: Props) {
  return (
    <FormGroup className="mb-4 form-group">
      <FormControl
        size="lg"
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
        style={{ border: hasError ? "1px solid red" : "" }}
      />
    </FormGroup>
  )
}
