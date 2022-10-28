import React, { useRef, useState } from "react"
import { Stack,Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import {db} from '../../firebase.config'
import NavbarLogin from "../../components/NavBar/NavBarLogin"

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
      <NavbarLogin/>

    <div className="container">

          <h2 className="text-center mb-4">Sign Up</h2>
          <div className="form">

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Stack gap={2}>

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
            </Stack>

            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
            <Stack gap={1}>
                <span id="jump2SignUp" className="container">
                Already have an account? <Link to="/login">Log In</Link>
                </span>
              </Stack>
          </Form>



  
      
      </div>
      </div>

    </>
  )
}