import React from 'react'
import IMG1 from "./assets/sell.jpg"
import IMG2 from "./assets/b.jpeg"
import IMG3 from "./assets/p2p.jpg"
import { Carousel } from 'react-bootstrap'

const CaroselComp = () => {
  return (
    <div>
      <Carousel fade variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src={IMG1}
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h3>Buy Airtime</h3>
          <p>Buy Airtime on C_TO_M at 10% discount</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src={IMG2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sell Airtime</h3>
          <p>Sell Extra Airtime to C_TO_M and get 70% of 
            the Airtime direct to your Mpesa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-img"
          src={IMG3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sell & Buy P_2_P</h3>
          <p>
          Sell & Buy Airtime to/from our peers.
          Cooming soon...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CaroselComp