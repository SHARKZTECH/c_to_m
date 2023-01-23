import React from 'react'
import {Container,Row,Col, Image} from "react-bootstrap"
import IMG from "./assets/b.jpeg"
import CaroselComp from './CaroselComp';

const HomeComp = () => {
  return (
    <Container className="mt-3">
      <Row>     
        <Col md={6} sm={12}>
          {/* <Image src={IMG} alt="b" width={'500px'}/> */}
          <CaroselComp/>
        </Col>
        <Col md={6} sm={12}>
          <div>
            <h3>How To Buy Artime at Discount?</h3>
            <div>
              <Row>
                <Col>
                <div className='contain'>
                  <h3>1</h3>
                  <h5>Firtst</h5>
                  <p>Click Buy </p>
                </div>
                </Col>
                <Col>
                <div className='contain'>
                  <h3>2</h3>
                  <h5>Second</h5>
                  <p>Selecte the Amount of Artime
                    you wish to purchase
                  </p>
                </div>
                </Col>
                <Col>
                <div className='contain'>
                  <h3>3</h3>
                  <h5>Third</h5>
                  <p>Click Buy "Button" with the
                    amount you wish to buy and Enter your
                    Mpesa PIN to complete your purchase
                  </p>
                </div>
                </Col>            
              </Row>
            </div>
          </div>          
          </Col>
      </Row>
    </Container>
  )
}

export default HomeComp