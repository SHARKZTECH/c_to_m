import React, { useState } from 'react'
import { Container,Row,Col, Button, Form } from 'react-bootstrap'

const BuyComp = () => {
  const [amount,setAmount]=useState(0);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <div className="d-flex align-items-center mb-2 gap-4">
          <p >Buy 10 artime at 10% discount  and get 11</p>
          <Button>Buy 10</Button>
          </div>    

            <div className="d-flex align-items-center mb-2 gap-4">
          <p >Buy 20 artime at 10% discount and get 22 </p>
          <Button>Buy 20</Button>
          </div> 

           <div className="d-flex align-items-center mb-2 gap-4">
          <p >Buy 50 artime at 10% discount and get 55</p>
          <Button>Buy 50</Button>
          </div> 

          <div className="d-flex align-items-center mb-2 gap-3">
          <p >Buy 100 artime at 10% discount  and get 110</p>
          <Button>Buy 100</Button>
          </div>   

          <div className="d-flex align-items-center mb-2 gap-2">
          <p >Buy 1000 artime at 10% discount  and get 1100</p>
          <Button>Buy 1000</Button>
          </div>  

          <div>
             <p 
             style={{"padding": "0", "margin": "0","marginLeft":"-17rem"}}             
             >Enter Amount You Would Wish to Spent</p>
             <div className="d-flex align-items-center justify-content-center mb-2 gap-3 ">
             <Form.Group>
                <Form.Control type="number" placeholder="0.0" onChange={(e)=>setAmount(e.target.value)}/>
             </Form.Group>
            <Button>Buy {amount}</Button>
             </div>
             <p
             style={{"padding": "0", "margin": "0","marginLeft":"-13rem"}}
             >You will get {amount * 1.1} artime</p>
          </div>
        </Col>


      </Row>
    </Container>
  )
}

export default BuyComp