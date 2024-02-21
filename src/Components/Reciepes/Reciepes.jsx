import React from "react";
import "./Reciepes.css";
import Small from "../assests/small.webp"


function Reciepes() {
  return (
    <div className="container px-2  d-flex flex-column justify-contents-center align-items-center text-center" style={{
      marginBottom:"1rem"
    }}>
      <p id="header">Recipes with Millets</p>
      <img src={Small} alt="Millet" style={{
        width:"76px" , height:"49px"
      }}/>
      <div>
        <p>Introduction to Millets and Delicious Recipes</p>
        <p>
          Welcome to the world of millets – a diverse group of small-seeded
          grains that pack a nutritional punch and offer a sustainable
          alternative to conventional grains. Millets have been a staple in
          various cuisines for centuries, cherished for their resilience,
          adaptability, and health benefits{" "}
        </p>
        <p>
          Recipes are Ragi Banana Smoothie Bowl,Bajra Khichdi,Jowar Roti with
          Avocado Salsa,Foxtail Millet Upma:
        </p>
      </div>
    </div>
  );
}

export default Reciepes;
