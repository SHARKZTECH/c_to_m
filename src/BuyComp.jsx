import React, { useState } from 'react'
import { Container,Row,Col, Button, Form } from 'react-bootstrap'
import IMG from "./assets/mobile.png";

const BuyComp = () => {
  const [amount,setAmount]=useState(0);

  const handleClick=(a)=>{
    alert(a);
  }

  return (
    <Container className="mt-4 pb-3">
      <Row>
        <Col md={6}>
          <div className="d-flex align-items-center mb-2">
          <p 
          style={{width:"70%"}}>Buy 10 artime at 10% discount  and get 11</p>
          <Button
          onClick={()=>handleClick(10)}
          style={{width:"25%"}}>Buy 10</Button>
          </div>    

            <div className="d-flex align-items-center mb-2">
          <p 
           style={{width:"70%"}}>Buy 20 artime at 10% discount and get 22 </p>
          <Button
          onClick={()=>handleClick(20)}
          style={{width:"25%"}}>Buy 20</Button>
          </div> 

           <div className="d-flex align-items-center mb-2 ">
          <p 
           style={{width:"70%"}}>Buy 50 artime at 10% discount and get 55</p>
          <Button
          onClick={()=>handleClick(50)}
          style={{width:"25%"}}>Buy 50</Button>
          </div> 

          <div className="d-flex align-items-center mb-2">
          <p 
           style={{width:"70%"}}>Buy 100 artime at 10% discount  and get 110</p>
          <Button
          onClick={()=>handleClick(100)}
          style={{width:"25%"}}>Buy 100</Button>
          </div>   

          <div className="d-flex align-items-center mb-2">
          <p 
           style={{width:"70%"}}>Buy 1000 artime at 10% discount  and get 1100</p>
          <Button
          onClick={()=>handleClick(1000)}
          style={{width:"25%"}}>Buy 1000</Button>
          </div>  

          <div>
             <p 
             style={{width:"70%"}}             
             >Enter Amount You Would Wish to Spent</p>
             <div className="d-flex align-items-center justify-content-center mb-2 gap-3 ">
             <Form.Group
             style={{width:"60%"}}>
                <Form.Control type="number" placeholder="0.0" onChange={(e)=>setAmount(e.target.value)}/>
             </Form.Group>
            <Button
            onClick={()=>handleClick(amount)}
            style={{width:"25%"}}>Buy {amount}</Button>
             </div>
             <p
             style={{width:"70%"}}
             >You will get {amount * 1.1} artime</p>
          </div>
        </Col>
        <Col>
           <div className='img'>
              <img src={IMG} alt='c_2_m'/>
            </div>        
        </Col>
      </Row>
    </Container>
  )
}

export default BuyComp