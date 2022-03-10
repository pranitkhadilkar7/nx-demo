import { FormControl, FormGroup } from "react-bootstrap"

type Props = {
  type: "email" | "text"
  placeholder: string
}

export function TextInput({ type, placeholder }: Props) {
  return (
    <FormGroup className="mb-4 form-group">
      <FormControl size="lg" type={type} placeholder={placeholder} />
    </FormGroup>
  )
}
