import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import healthy from "./healthy.webp";
import Small from "../assests/small.webp";

function Banner() {
  return (
    <div className="container text-center" style={{
      marginBottom:"5rem"
    }}>
      <p id="header">Eat Healthy & Stay Healthy</p>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img src={healthy} alt="Millet Dosa" style={{
              width:"100%"
            }}/>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="mt-5">
            <p>
              Popularly termed as Super grains, millets are not only rich in
              nutrition but also carry a rich history dating back to the Indian
              Bronze Age (4500 BC).
              <br />
               Sadly, as years passed, their importance
              reduced to being meager birdseed. Only to realize that it’s the
              need of the hour. 
              <br />Considering the lifestyle that we lead,
              especially our eating habits, where today’s generation is obsessed
              with street foods & other mouth-watering food items that are
              heavily induced with trans fat, bad carbohydrates, fats &
              high-cholesterol, eating healthy has now become a matter of need
              more than choice.
              <br />
              onsidering the lifestyle that we lead,
              especially our eating habits, where today’s generation is obsessed
              with street foods & other mouth-watering food items that are
              heavily induced
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
