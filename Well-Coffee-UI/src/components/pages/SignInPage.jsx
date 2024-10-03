import { useState } from 'react';
import axios from 'axios';
import { Container, Button, Row,  Col, Form, Card } from 'react-bootstrap';
import CarouselDisplay from '../carousel/CarouselDisplay';
import { Link } from 'react-router-dom';

/* 
  Created by Dominique Gould 
*/

function SignInPage({ setAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Is it working?");
    console.log(email, password);
    try {
      const response = await axios.post("http://localhost:8080/api/login", 
      {
        email, 
        password
      }, 
      {
        withCredentials: true,
      }
      );
      setAuthenticated(true);
      console.log(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data.message || "Login failed");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col style={{ maxWidth: '500px' }}>
            <Card className="p-4">
              <Card.Body>
                <h1 className="text-center">Welcome Back!</h1>
                <p className="text-center">Please enter login details below</p>
                <Form className="mb-4" onSubmit={handleLogin}>
                  <Form.Group className="my-4" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="my-4" controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  {/* Forgot password link can be added here later */}

                  <Button variant="primary" type="submit" className="w-100">
                    Sign In
                  </Button>
                </Form>
                {message && <p className="text-center text-danger mt-3">{message}</p>}
                <p className="text-center">
                  Don't have an account? <Link to="/register" className="text-decoration-none">Register</Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <CarouselDisplay />
    </>
  )
}

export default SignInPage