import React from "react";
import Small from "../assests/small.webp"
function About() {
  return (
    <div
      className="container px-2 about d-flex flex-column justify-contents-center align-items-center text-center"
      style={{
        marginBottom: "5rem",
      }}
    >
      <p id="header">About Millets</p>
      <img src={Small} alt="Millet" style={{
        width:"76px" , height:"49px"
      }}/>
      <p>
        Super Grains, as we rightly call them – millets have an abundance of
        nutritional value and health benefits. India is the largest producer of
        millets and contributes to more than 40% of the global market share.
        Millets are highly adaptable to a wide range of temperature and climatic
        conditions; it grows well even in dryconditions and marginal soil
        fertility condition and moisture content. They are not called Super
        Grains without any reason!
      </p>
      <p>They are not called Super Grains without any reason!</p>
      <button>Read More</button>
    </div>
  );
}

export default About;
