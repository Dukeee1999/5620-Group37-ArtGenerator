import React, { useRef, useState } from "react"
import { Stack, Row, Form, Button, Card, Alert, InputGroup } from "react-bootstrap"
import { useAuth} from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import NavbarLogin from "../../components/NavBar/NavBarLogin"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch (e){
        console.log(e)
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
   <>
  <NavbarLogin/>
    <div className="container">
          <h2 className="container">Log In</h2>
  
 {error && <Alert variant="danger">{error}</Alert>}
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <Stack gap={2}>
              <Form.Group className="" controlId="email">
                <InputGroup size="lg">
                  <Row>
                    <Form.Label>Email </Form.Label>
                  </Row>
                  <Row>
                    <Form.Control size="lg" lg={2} type="email" placeholder="Email address" ref={emailRef} required />
                  </Row>
                </InputGroup>
              </Form.Group>

                <Form.Group className="" controlId="password">
                  <Row>
                    <Form.Label>Password </Form.Label>
                  </Row>
                  <Row>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                  </Row>
                </Form.Group>
              </Stack>

                <Button disabled={loading} className="mid w-100" type="submit">
                  Log In
                </Button>

              <Stack gap={1}>
                <span id="jump2SignUp" className="container">
              Need an account? <Link to="/signup">Sign Up</Link>
                </span>
              </Stack>
                
              </Form>
            </div>
          </div>
        </>
  )
}