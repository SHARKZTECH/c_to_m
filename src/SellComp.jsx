import React from 'react'
import { useState } from 'react'
import { Container, Row,Col,Form ,Button} from 'react-bootstrap'
import SellModal from './SellModal';



const SellComp = () => {
  const [amount,setAmount]=useState(0);
  const [numberSend,setNumberSend]=useState(0);
  const [mpNumber,setMpNumber]=useState(0);
  const [isShow,setShow]=useState(false);

  const handleSell=()=>{
    setShow(true);
  }

  return (
    <>
    <Container>
      <Row className='mt-3 m-1'>
        <SellModal isShow={isShow} setShow={setShow}
         amount={amount} numberSend={numberSend} mpNumber={mpNumber}/>
      <Col md={6} sm={12} className="my-3 border p-3">
          <div>
            <h4>Sell Your Artime At 30% Cost Instantly</h4>
          <Form.Group className='mb-2'>
                <Form.Label>Enter Amount of Artime</Form.Label>
                <Form.Control
                onChange={(e)=>setAmount(e.target.value)}
                 type="number" placeholder='eg:100'/>
            </Form.Group>

            <Form.Group className='mb-2'>
              <Form.Label>Enter Number Sending The Artime</Form.Label>
              <Form.Control
              onChange={(e)=>setNumberSend(e.target.value)}
               type='number' placeholder='eg:0707254XXX'></Form.Control>
            </Form.Group>


            <Form.Group className='mb-2'>
              <Form.Label>Enter Mpesa Number to Receive Payment</Form.Label>
              <Form.Control 
              onChange={(e)=>setMpNumber(e.target.value)}
              type='number' placeholder='eg:0707254XXX'></Form.Control>
            </Form.Group>

            <Button onClick={handleSell}>Sell</Button>
          </div>
        </Col>
        <Col md={6} sm={12} className="my-3 border p-2">
          <div>
            <h3>How To Sell Your Artime ?</h3>
            <div>
              <Row>
                <Col>
                <div className='contain'>
                  <div>
                  <h3>1</h3>
                  <h5>Firtst</h5>
                  </div>
                  <p>Enter Amount of Artime You Wish to Sell</p>
                </div>
                </Col>
                <Col>
                <div className='contain'>
                  <div>
                  <h3>2</h3>
                  <h5>Second</h5>
                  </div>
                  <p>Enter the number you will be selling Artime from.
                  </p>
                </div>
                </Col>
                <Col>
                <div className='contain'>
                  <div>
                  <h3>3</h3>
                  <h5>Third</h5>
                  </div>
                  <p>Enter the Mpsesa No to receive 
                    payment and Click Sell "Button" 
                  </p>
                </div>
                </Col>            
              </Row>
            </div>
          </div>          
          </Col>      </Row>
    </Container>
    </>
  )
}

export default SellComp