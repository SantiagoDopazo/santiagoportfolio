import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/Bonfireestatic.png';
import linkedin from '../assets/img/linkedin-in.svg';
import github from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/santiago-dopazo-4a81b7249/"><img src={linkedin} alt="Linkedin Icon" /></a>
              <a href="https://github.com/SantiagoDopazo"><img src={github} alt="Github Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}