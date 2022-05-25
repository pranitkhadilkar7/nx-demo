import { Form } from "react-bootstrap"
import { UseFormRegister } from "react-hook-form"

type Props = {
  placeholder: string
  name: string
  register: UseFormRegister<any>
  options: { value: string; label: string }[]
  required?: boolean
  hasError?: boolean
}

export function SelectInput({
  placeholder,
  name,
  register,
  options,
  required,
  hasError,
}: Props) {
  return (
    <Form.Group className="mb-4 form-group">
      <Form.Select
        size="lg"
        placeholder={placeholder}
        {...register(name, { required })}
        style={{ border: hasError ? "1px solid red" : "" }}
      >
        {options.map((option) => (
          <option key={`${option.value}-${option.label}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}
