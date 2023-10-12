import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Topbar.css";
import { RiTwitterXFill, RiGithubFill } from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";
import logo from "./images/logo.png";

function Topbar() {
  return (
    <Navbar className="navbar" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={logo}
            width="90"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <nav className="nav1">
          Buy me a {""}
          <a
            href="https://www.buymeacoffee.com/errjem2u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiCoffeeCup /> coffee
          </a>
        </nav>

        <Nav className="nav2">
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
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;
