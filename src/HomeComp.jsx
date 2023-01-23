import React from 'react'
import {Container,Row,Col, Image, Card} from "react-bootstrap"
import IMG from "./assets/b.jpeg"
import CaroselComp from './CaroselComp';
import {FcExpand,FcCollapse} from "react-icons/fc"

const HomeComp = () => {
  return (
    <>
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
      <Row className='mt-3'>
      <Col md={6} sm={12} className="mt-3">
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
          <Col md={6} sm={12} className="mt-3">
          <div>
            <h3>How To Sell Your Artime ?</h3>
            <div>
              <Row>
                <Col>
                <div className='contain'>
                  <h3>1</h3>
                  <h5>Firtst</h5>
                  <p>Click Sell</p>
                </div>
                </Col>
                <Col>
                <div className='contain'>
                  <h3>2</h3>
                  <h5>Second</h5>
                  <p>Enter the Amount of Artime
                      you wish to sell   
                  </p>
                </div>
                </Col>
                <Col>
                <div className='contain'>
                  <h3>3</h3>
                  <h5>Third</h5>
                  <p>Enter the Mpsesa No to receive 
                    payment and Click Sell "Button" 
                  </p>
                </div>
                </Col>            
              </Row>
            </div>
          </div>          
          </Col>
      </Row>
      </Container>

      <div className='bd'>
        <div>

        </div>
        <div>
          <h4>Q & A</h4>
          <Card>
            <Card.Header>
               How to Buy/Sell Artime using C_to_M on Android ? <FcExpand/><FcCollapse/>
            </Card.Header>
            <Card.Body className='card-body'>
                You can Download C_to_M Android App /
                 Visit Our site on your phone's browser
            </Card.Body>
          </Card>

        </div>
      </div>
      <footer>
       <div className='d-flex justify-content-center gap-2'>
          <div>Contact us</div>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
       </div>
       <div><p>&copy; 2023 C_to_M</p></div>
      </footer>
      </>
  )
}

export default HomeComp