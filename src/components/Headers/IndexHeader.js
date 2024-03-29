/*eslint-disable*/
import React from "react";
import './IndexHeader.css'
// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="orange">
        <div
          className="page-header-image"
          style={{
            filter: "blur(3px)",
            backgroundImage:
              "url(" + require("assets/img/Principal.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <div className="Color">
                <h1 className="tittle">Contadores SaGu</h1>
                <h3 className="sub"><i>¡Tú haces las ganancias, nosotros los impuestos!</i></h3>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
