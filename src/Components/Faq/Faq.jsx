import React from "react";
import { Accordion } from "react-bootstrap";

function MilletNutritionalInfo() {
  return (
    <div className="container text-center accordion-container" style={{ marginBottom: "5rem"}}>
      <p id="header">Frequently Asked Questions (FAQ) </p>
      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="0" >
          <Accordion.Header className="accordion-header" >
            How much energy do millets provide?
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Millets are a rich source of energy. The exact energy content may
            vary between different types of millets.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-header">
            What is the carbohydrate content of millets?
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Millets are carbohydrate-rich grains. They contain complex
            carbohydrates, which are essential for sustained energy release.
          </Accordion.Body>
        </Accordion.Item>
        {/* You can add more questions and answers here */}
        {/* For example: */}
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accordion-header">
            What are the key nutritional benefits of millets?
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Millets offer numerous health benefits. They are rich in fiber,
            vitamins, and minerals.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default MilletNutritionalInfo;
