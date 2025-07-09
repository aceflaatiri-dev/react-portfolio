import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        {/* NAVBAR */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Acef Laatiri</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* ABOUT ME SECTION */}
        <Container className="mt-5 text-center" id="about">
          <h1>👨‍💻 Acef Laatiri</h1>
          <p>Full-Stack Developer | CP Enthusiast | Software Engineer in the making 🚀</p>
        </Container>

        {/* PROJECTS SECTION */}
        <Container className="mt-5" id="projects">
          <h2 className="mb-4 text-center">Projects</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Login Leak Analyzer</Card.Title>
                  <Card.Text>
                    Analyze and visualize leaked login credentials using Streamlit + Python.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/your-username/leak-analyzer" target="_blank">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Spotify Bot</Card.Title>
                  <Card.Text>
                    Auto-like, follow, and unfollow on Spotify with custom logic and PowerShell.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/your-username/spotify-bot" target="_blank">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>React Portfolio</Card.Title>
                  <Card.Text>
                    My personal responsive portfolio built with React and Bootstrap.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/aceflaatiri-dev" target="_blank">View on GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* CONTACT SECTION */}
        <Container className="mt-5 text-center" id="contact">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:acef@example.com">acef@example.com</a></p>
          <p>GitHub: <a href="https://github.com/aceflaatiri-dev" target="_blank" rel="noreferrer">aceflaatiri-dev</a></p>
        </Container>

        {/* FOOTER */}
        <footer className="bg-dark text-white text-center py-3 mt-5">
          © 2025 Acef Laatiri — All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
