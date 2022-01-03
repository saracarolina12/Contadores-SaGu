/*eslint-disable*/
import React from "react";
import './Footers.css'

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    // <footer className="footer" data-background-color="black">
    <footer className="footer footcolor">
      <Container>
        <nav>
          <ul>
            <li>
              <a className="Texto" href="" ><u>Contáctanos</u></a>
              <br/>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="subt">E-mail: saradelm@hotmail.com</a>
            </li>
           
          </ul>
        </nav>
        <div className="Copyright" >
        {/* <a className="Copyright" href="" >© {new Date().getFullYear()} Contadores SaGu </a> */}
        <a  target="_blank" >© Contadores SaGu </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
