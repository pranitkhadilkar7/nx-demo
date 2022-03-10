import { Form } from "react-bootstrap"

export function SelectInput() {
  return (
    <Form.Group className="mb-4 form-group">
      <Form.Select size="lg" placeholder="Country">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Form.Group>
  )
}
