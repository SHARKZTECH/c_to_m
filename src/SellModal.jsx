import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const SellModal = ({isShow,setShow,amount,numberSend,mpNumber}) => {
    const handleComplete=()=>{
        setShow(false);
    }
  return (
    <>
    <Modal show={isShow}>
        <Modal.Header closeButton onClick={()=>setShow(false)}>
            <Modal.Title>Complete Your Sell</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <p className='h6'>You wish to sell artime worth {amount} from {numberSend} and 
             receive payment {amount*.7} to {mpNumber}.</p>
             <p>
                Dial : *140*{amount}*0707254XXX# <br></br>
                Or Send: {amount}#0707254XXX to 140
             </p>
             <p>Click "Complete" and Wait for ur payment shotly.Thank u</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>setShow(false)} variant='danger'>Cancel</Button>
            <Button onClick={handleComplete} variant='success'>Complete</Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default SellModal