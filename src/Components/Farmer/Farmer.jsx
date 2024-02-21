import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Mils from "../assests/mils.jpg";
import "swiper/css";
import "swiper/css/effect-cards";
import Card from "react-bootstrap/Card";
import "./Farmer.css";
import { EffectCards } from "swiper/modules";
import Small from "../assests/small.webp"


export default function Farmer() {
  const farmerQuotes = [
    "Working with millets brings joy to my farm.",
    "Millets are not just grains; they're a way of life.",
    "Cultivating millets has made my farm more sustainable.",
    "In the fields of millets, every season tells a story.",
    "The bond between farmers and millets is unbreakable.",
    "Sowing the seeds of millets, reaping the fruits of prosperity.",
  ];

  const milletBackgrounds = [
    "url('../assests/mils.jpg')",
    "url('../assests/mils.jpg')",
    "url('../assests/mils.jpg')",
  ];

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        marginBottom: "5rem",
      }}
    >
      <p id="header">Farmer Stories</p>
      <img src={Small} alt="Millet" style={{
        width:"76px" , height:"49px"
      }}/>
      
      <p>
        Feature stories of farmers who cultivate millets, emphasizing their
        efforts and the positive impact on local economies.
      </p>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {farmerQuotes.map((quote, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: milletBackgrounds[index], height: "300px" }}>
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Text>"{quote}"</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
