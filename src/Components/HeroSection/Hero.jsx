import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImg from "./milletbanner.png"
function Hero() {
  return (
    // <Container>
    //   <Row>
    //     <Col lg={6} md={6} sm={12} >
            
    //         <p style={{
    //         fontSize:"4rem",
    //     color:"darkgoldenrod"
    //     }}>SUPER DELICIOUS FOOD</p>

    //     <br />
    //     <button style={{
    //         width:"8rem",
    //         height:"4rem"
    //     }}>Order Now</button>
        
    //     </Col>
    //     <Col lg={6} md={6} sm={12}>
    //         <img src={Food} alt="" style={{
    //             width:"100%",
    //             height:"100%",
    //             borderRadius:"50%",
    //             marginLeft:"4rem"
    //         }}/>
    //     </Col>
    //   </Row>
    // </Container>
    <div style={{
      marginBottom:"5rem"
    }}>
      <img src={HeroImg} alt="Millets" style={{
        width:"100%",
        height:"100%",
        objectFit:"fill"
      }}/>
    </div>
  )
}

export default Hero