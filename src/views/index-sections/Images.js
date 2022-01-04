import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Images.css'
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images color">
        <Container>
          <Row>
            <Col md="12">
              <div className="Izq">  
                <img src={require("assets/img/hero-image-1.png").default}></img>
              </div>
              <div className="Centro">
                <img src={require("assets/img/hero-image-2.png").default}></img>
              </div>
              <div className="Der">
                <img src={require("assets/img/hero-image-3.png").default}></img>
              </div>
            </Col>
          </Row>
          <br/>
          <center><h1 className="Who">¿Quiénes somos?</h1></center>
          <div>
          <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>¿Quiénes somos?</Card.Title>
              <Card.Text>
                Somos Contadores Públicos Titulados, dedicados a la Asesoría, Planeación, Análisis e interpretación de información Contable, Financiera y Fiscal , cuya finalidad es proporcionar Servicios Múltiples adecuados a su empresa asegurando el cumplimiento de obligaciones Fiscales y Financieras de manera oportuna. Aplicamos nuestros conocimientos y nos allegamos de las herramientas necesarias que ayuden a tener mejores resultados. Trabajamos en conjunto con el personal de cada entidad y optimizamos recursos económicos mediante procesos. Perseguimos la satisfacción de nuestros clientes mediante el conocimiento y experiencia.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default Images;
