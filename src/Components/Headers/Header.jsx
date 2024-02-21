import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <div
      className="d-flex justify-content-around align-items-center header-h5"
      style={{
        background: "rgb(33, 37, 41)",
        height: "3rem",
      }}
    >
      <h6
        style={{
          color: "white",
        }}
      >
        Logo
      </h6>
      <h6
        style={{
          color: "white",
        }}
      >
        About
      </h6>
      <h6
        style={{
          color: "white",
        }}
      >
        Reciepes
      </h6>
      <h6
        style={{
          color: "white",
        }}
      >
        Benefits
      </h6>
    </div>
  );
}

export default ColorSchemesExample;
