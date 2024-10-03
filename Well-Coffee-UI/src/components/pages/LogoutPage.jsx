import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function Logout({ setAuthenticated }) {

  const handleLogout = async () => {
    
    try {
      await axios.get("http://localhost:5173/api/logout",
      { withCredentials: true,
      });
      setAuthenticated(false);
    } catch (error) {
      console.error("There was an error logging out", error);
    }
  };

  const navigate = useNavigate();

  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <Card className="p-4">
            <Card.Body>
              <h1>Are you sure?</h1>
              <Button 
                variant='primary'
                onClick={() => {
                  navigate("/login");
                }} 
              >
                Return
              </Button>{" "}
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  )
}


export default Logout