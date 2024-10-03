import axios from "axios";
import { useState } from "react";
import { Container, Button, Row, Col, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [role, setRole] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", 
      {
        firstName,
        lastName,
        email,
        password,
        role: "employee"
      },
      {
        withCredentials: true,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col style={{ maxWidth: '500px' }}>
          <Card className="p-4">
            <Card.Body>
              <h1 className="text-center mb-4">Register</h1>
              <Form onSubmit={handleRegister}>
                <Form.Group className="my-4" controlId="firstName">
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="my-4" controlId="lastName">
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="my-4" controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </Form.Group>
                <Form.Group className="my-4" controlId="password">
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete='off'
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="flex-fill me-2">
                    Register
                  </Button>
                  <Button
                    className="flex-fill"
                    variant="secondary" 
                    onClick={() => {
                      navigate("/sign-in");
                    }}
                  >
                    Return
                  </Button>
                </div>
              </Form>
              {message && <p>{message}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register;