import React from "react";
import './Images.css'
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              {/* hero-images-container */}
              <div className="Izq">  
                <img
                  alt="..."
                  src={require("assets/img/hero-image-1.png").default}
                ></img>
              </div>
              <div className="Centro">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.png").default}
                ></img>
              </div>
              <div className="Der">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.png").default}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
