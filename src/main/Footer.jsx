import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import {
  RiTwitterXFill,
  RiGithubFill,
  RiReactjsFill,
} from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="footer-container">
      <Row>
        <Col md={6} className="py-5">
          <p>
            Buy me a{" "}
            <a href="https://www.buymeacoffee.com/errjem2u" target="_blank" rel="noopener noreferrer">
              <GiCoffeeCup /> coffee
            </a>
          </p>
          <div className="footer-icons">
            <a
              href="https://twitter.com/houssamedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXFill />
            </a>
            <a
              href="https://github.com/houssame-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill />
            </a>
          </div>
        </Col>
        <Col md={6} className="py-5">
          <p>
            Built with{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiReactjsFill />
              React
            </a>
          </p>
          <p className="p1">
            &copy; {currentYear} Color Code. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
