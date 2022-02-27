import { ReactNode } from "react"
import { Col, Row } from "react-bootstrap"
import logo from "../../styles/images/logo.svg"

type Props = {
  formHeading: string
  formText: string
  children: ReactNode
}

export function AuthPageWrapper({ formHeading, formText, children }: Props) {
  return (
    <div className="pt-5 px-4">
      <Row>
        <Col lg={4} className="mx-auto">
          <div className="auth-form px-4 py-5">
            <div className="brand-logo">
              <img src={logo} alt="Logo" />
            </div>
            <h4>{formHeading}</h4>
            <h6 className="font-weight-light">{formText}</h6>
            {children}
          </div>
        </Col>
      </Row>
    </div>
  )
}
