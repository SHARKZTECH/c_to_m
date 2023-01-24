import React,{useState} from 'react'
import {Container,Row,Col, Image, Card} from "react-bootstrap"
import IMG from "./assets/b.jpeg"
import CaroselComp from './CaroselComp';
import {FcExpand,FcCollapse} from "react-icons/fc"

const HomeComp = () => {
  const [showRes0,setShowRes0]=useState(false);
  const [showRes1,setShowRes1]=useState(false);
  const [showRes2,setShowRes2]=useState(false);

  return (
    <>
    <Container className="mt-3">
      <Row>     
        <Col md={6} sm={12}>
          {/* <Image src={IMG} alt="b" width={'500px'}/> */}
          <CaroselComp/>
        </Col>
        <Col md={6} sm={12} className="mt-2">
        <div>
          <h4>C_TO_M </h4>
          <p>Have you ever have extra airtime and wonder what 
            to do or purchase excessive airtime that cannot be 
            refunded or win airtime from your favorite show ?</p>
            <p>C_TO_M will enable you to convert our airtime to
              to Mpesa at <span>30%</span> cost.For every 100 you 
              will receive 70/= to your Mpesa.Click on Sell and 
              Complete your request.
            </p>
          <p>Sell Our Extra Artime Within minutes.Buy Artime
            at Dicount Within Minute.C_TO_M enable it's users
            to sell their extra Airtime through our site and 
            android app.We also sell Artime to users through 
            our site and android app at a discount.
          </p>

        </div>          
          </Col>
      </Row>
      </Container>

      <Row className='mt-3 mx-0 bd-0'>
      <Col md={6} sm={12} className="mt-3 border p-2">
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
          <Col md={6} sm={12} className="mt-3 border p-2">
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

      <div className='bd'>
        <div>
        <div>
          <h4>C_TO_M </h4>
          <p>Sell Our Extra Artime Within minutes.Buy Artime
            at Dicount Within Minute.C_TO_M enable it's users
            to sell their extra Airtime through our site and 
            android app.We also sell Artime to users through 
            our site and android app at a discount.
          </p>

        </div> 
        <div>
          <h4>Q & A</h4>
          <Card  className="mb-2">
            <Card.Header>
               How to Buy/Sell Artime using C_to_M on Android ? 
               <span 
               onClick={()=>setShowRes0(true)}
               className={showRes0 ? 'hide' : 'icon'}><FcExpand/></span>
               <span 
               onClick={()=>setShowRes0(false)}
               className={showRes0 ? 'icon' : 'hide'}><FcCollapse/></span>
            </Card.Header>
            <Card.Body className={showRes0 ? 'show' : 'hide'}>
                You can Download C_to_M Android App /
                 Visit Our site on your phone's browser
            </Card.Body>
          </Card>

          <Card  className="mb-2">
            <Card.Header>
               Is it safe to use Our site ? 
               <span 
               onClick={()=>setShowRes1(true)}
               className={showRes1 ? 'hide' : 'icon'}><FcExpand/></span>
               <span 
               onClick={()=>setShowRes1(false)}
               className={showRes1 ? 'icon' : 'hide'}><FcCollapse/></span>
            </Card.Header>
            <Card.Body className={showRes1 ? 'show' : 'hide'}>
            Our site is 100% safe. 
            It does not contain malicious code and 
            does not store user information
            </Card.Body>
          </Card>

          <Card  className="mb-2">
            <Card.Header>
               Can I be able Buy/Sell Airtel and Telcom Airtime ? 
               <span 
               onClick={()=>setShowRes2(true)}
               className={showRes2 ? 'hide' : 'icon'}><FcExpand/></span>
               <span 
               onClick={()=>setShowRes2(false)}
               className={showRes2 ? 'icon' : 'hide'}><FcCollapse/></span>
            </Card.Header>
            <Card.Body className={showRes2 ? 'show' : 'hide'}>
                At the moment no. In near future maybe.
            </Card.Body>
          </Card>

          

        </div>
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