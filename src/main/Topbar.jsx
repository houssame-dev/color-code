import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Topbar.css";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";
import logo from "./images/logo.png";

function Topbar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            width="90"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <nav className="nav1">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <GiCoffeeCup /> buy me a coffee
          </a>
        </nav>

        <Nav className="nav2">
          <a
            href="https://twitter.com/errjem2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://www.linkedin.com/in/errjem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinFill />
          </a>
          <a
            href="https://github.com/Errjem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill />
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;
