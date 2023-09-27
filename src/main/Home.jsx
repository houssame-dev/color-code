import React, { useState } from "react";
import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import ColorData from "./ColorData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = (color) => {
    setSelectedColor(color.colorCode);
    navigator.clipboard.writeText(color.colorCode).then(() => {
      showToastMessage();
    });
  };
  const showToastMessage = () => {
    toast.success("Copied!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };

  return (
    <div className="home" style={{ backgroundColor: selectedColor }}>
      <Container fluid className="home-container">
        <ToastContainer />
        <Row className="text-center py-5">
          <Col className="pt-5">
            <h1># Color Code</h1>
            <h3>Celebrate Elegance with Ease: Discover Color Codes Instantly.</h3>
            <h3>Unlock your preferred color's hexadecimal code with just a single click.</h3>
          </Col>
        </Row>
        <Row className="text-center py-5">
          <Col md={12} lg={12}>
            {ColorData.map((color, index) => (
              <Button
                key={index}
                style={{ backgroundColor: color.colorCode }}
                onClick={() => handleButtonClick(color)}
                className="btn-color"
              >
                <span>{color.colorName}</span><span>{color.colorCode}</span>
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
