import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    Description of project 1.
                  </Card.Text>
                  <Button variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* You can copy and paste 2 more Col+Card blocks here */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
