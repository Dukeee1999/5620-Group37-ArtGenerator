import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import {db} from '../../firebase.config'
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const roleRef = useRef()
  const userNameRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      const res = await signup(emailRef.current.value, passwordRef.current.value)
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: userNameRef.current.value,
        role: roleRef.current.value,
        email: user.email,
      });
      nav("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="userName" ref={userNameRef} required />
            </Form.Group>
            <Form.Group id="email">
                <Form.Label>Role</Form.Label>
                <select id="role" ref={roleRef}>
                    <option value="creator">creator</option>
                    <option value="artist">artist</option>
                </select>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}