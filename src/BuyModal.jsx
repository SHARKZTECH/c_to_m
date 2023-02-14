import React,{useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const BuyModal = ({isShow,setShow,amount}) => {
    const [number,setNumber]=useState(0);
    const [number1,setNumber1]=useState(0);
    
    const handleComplete=async()=>{
         setShow(false);
         alert(number+" will recive "+amount+" worth of artime shotly! \n Enter Your PiN to the mobile containing "+number1+" to complete your process.Thank u 4 purchasing with us");
         const res=await fetch("http://localhost:8000/api/mpesa", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount,number})
        }
        );
        const results=await res.json();
        console.log(results)          
  
         setNumber(0);
         setNumber1(0);
    }
    
  return (
    <>
    <Modal show={isShow}>
        <Modal.Header closeButton onClick={()=>setShow(false)}>
        <Modal.Title>Complete Your Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Amount : {" "+amount}</h6>
            <Form.Group>
                <Form.Label>Enter no that will recieve artime</Form.Label>
                <Form.Control 
                onChange={(e)=>setNumber(e.target.value)}
                type='number' placeholder='eg:0790454XXX'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter no that will make the payment</Form.Label>
                <Form.Control 
                onChange={(e)=>setNumber1(e.target.value)}
                type='number' placeholder='eg:0790454XXX'/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>setShow(false)} variant='danger'>Cancel</Button>
            <Button onClick={handleComplete} variant="success">Complete</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default BuyModal